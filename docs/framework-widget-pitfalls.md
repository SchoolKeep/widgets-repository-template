# Framework Widget Pitfalls

Common problems when building SDK-based widgets (React, Angular, Vue, etc.) for the platform. These are production-validated gotchas — each one caused a real failure.

---

## 1. Build output must be a fragment, not a full HTML document

**The platform inlines your `dist/index.html` directly into a `<template shadowrootmode="open">` element.** Scripts inside the shadow template execute when the browser's HTML parser encounters them. But if your build output is a full document, the parser treats `<!doctype>`, `<html>`, `<head>`, and `<body>` as parse errors inside the shadow context — they get discarded, and your scripts may not end up in the shadow tree.

**Broken output:**
```html
<!doctype html>
<html lang="en">
<head>
  <script src="main.js" type="module"></script>
</head>
<body></body>
</html>
```

**Correct output:**
```html
<script type="module" src="./polyfills.js"></script>
<script type="module" src="./widget.js"></script>
```

Most bundlers (Vite, webpack, Angular CLI) produce a full document by default. You need a post-build step to strip the shell or write the fragment yourself. For Angular, `post-build.mjs` handles this explicitly rather than trying to parse Angular's output.

Note: this applies equally to production builds (`dist/index.html`) **and** to what hubforge preview serves to the platform from the dev server. Both paths must return a fragment.

---

## 2. CORS headers are required on the dev server

When using hubforge preview, the platform fetches your widget HTML from hubforge's proxy server, then the **browser** makes follow-up requests for sub-resources (`main.js`, `polyfills.js`, CSS) **directly to your dev server** from the platform's origin. This is a cross-origin request.

Without `Access-Control-Allow-Origin: *` on the dev server, the browser blocks every sub-resource request silently. The HTML loads but nothing executes.

**Angular (`angular.json`):**
```json
"serve": {
  "options": {
    "headers": {
      "Access-Control-Allow-Origin": "*"
    }
  }
}
```

**Vite (`vite.config.ts`):**
```ts
server: {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}
```

Adding CORS alone does not fix the fragment problem (see #1). Both issues are independent and both must be resolved.

---

## 3. Angular: avoid `@angular/build` in favor of `@angular-devkit/build-angular`

Angular 17+ ships two builders:

| Builder | Dev server behavior |
|---|---|
| `@angular/build:application` | Serves raw TypeScript via Vite's virtual module system (`/@vite/client`, `/@angular/build/browser/main.ts?raw-ts`, etc.) |
| `@angular-devkit/build-angular:application` | Pre-compiles TypeScript to JavaScript before serving; `main.js` is a real self-contained bundle |

With `@angular/build`, the dev server scripts are Vite virtual modules — they only work inside Vite's own request pipeline. When hubforge proxies the HTML to the platform and the browser fetches `http://localhost:4200/@angular/build/browser/main.ts`, Node transforms it on the fly. This sometimes works but is fragile: TypeScript-level imports trigger chains of additional Vite transforms, each of which must succeed cross-origin.

With `@angular-devkit/build-angular`, `main.js` is compiled JavaScript that the browser can execute directly. No Vite transform chain required.

**Use `@angular-devkit/build-angular` for any widget that runs inside the platform's shadow DOM.**

---

## 4. Angular: remove `"type": "module"` from `package.json`

Setting `"type": "module"` in a widget's `package.json` tells Node.js to treat all `.js` files in the package as ES modules. Parts of Angular CLI's tooling (devkit internals, post-build scripts that use CommonJS APIs) break silently or throw `ERR_REQUIRE_ESM` when this is set.

If you need your post-build script to run as ESM, name it `.mjs` — the file extension is sufficient and doesn't affect the rest of the package.

---

## 5. Angular: `propsChanged` callbacks fire outside Angular's zone

The platform's SDK fires `propsChanged` (and other events) via plain JavaScript callbacks — not through a patched async primitive like `setTimeout` or `Promise`. Zone.js only patches browser APIs; it has no way to know about arbitrary third-party callbacks.

If you update component state inside a `propsChanged` callback without wrapping it in `NgZone.run()`, Angular's change detection will not trigger and the template will not re-render.

**Broken:**
```typescript
this.sdk.on("propsChanged", (data) => {
  this.props.set(data); // signal write marks view dirty, but no CD cycle fires
});
```

**Correct:**
```typescript
private readonly ngZone = inject(NgZone);

constructor() {
  this.sdk.on("propsChanged", (data) => {
    this.ngZone.run(() => this.props.set(data));
  });
}
```

**Why signals alone are not enough with zone.js:** A signal write marks the view as dirty, but Angular still needs a change detection cycle to flush it. In a zone.js application, that cycle is triggered by zone.js intercepting a patched async primitive (setTimeout, Promise, XHR, etc.). SDK callbacks are not patched — zone.js does not see them. The signal write happens, the view is marked dirty, but no CD cycle runs. The UI does not update.

`NgZone.run()` forces a CD cycle regardless of how the callback was delivered. It is the correct and required pattern when using zone.js with any external callback source.

`ChangeDetectionStrategy.OnPush` is compatible with this pattern: when `NgZone.run()` triggers a CD cycle and the signal has been written, Angular flushes the dirty signal view correctly. Using `OnPush` with signals is recommended — it avoids unnecessary checks of the full component tree.

If you want to remove `NgZone` entirely, see pitfall #6 for the requirements and trade-offs of the zoneless approach.

---

## 6. Angular zoneless (`provideExperimentalZonelessChangeDetection`) is incompatible with external SDK callbacks

The zoneless API requires all state changes to go through Angular's reactive primitives (signals, async pipe, etc.). External SDK callbacks bypass these primitives entirely. If you use `componentRef.setInput()` from outside Angular's reactive graph, or update a plain class property in a callback, there is no mechanism to schedule change detection.

**Use zone.js for widgets that receive dynamic props from the platform SDK.** Reserve the zoneless API for widgets that are display-only and never update after initial render.

---

## 7. CSS does not cross shadow DOM boundaries

The platform wraps each widget in a `<template shadowrootmode="open">`. This creates a shadow root. The platform's global stylesheets — and any styles on the host page — do not apply inside the shadow root.

This means:
- **Fonts**: `@font-face` declarations from the host page do not apply inside your shadow root. CSS properties like `font-family` do inherit across shadow boundaries, so if the host has loaded a font, you can reference it by name. But if you rely on a specific font being available, load it yourself.
- **CSS resets / normalization**: The host page's reset stylesheet does not apply. Your widget renders with browser defaults unless you include your own reset.
- **CSS variables**: Custom properties (`--color-primary`, etc.) defined on `:root` or `body` **do** inherit into shadow roots. This is intentional by the spec and is the correct mechanism for theming widgets from the outside.
- **`!important` from the host page**: Also does not cross the boundary.

If you use `ViewEncapsulation.ShadowDom` in Angular, you get a *second* shadow root nested inside the platform's shadow root. Your component's styles are scoped to that inner shadow root — which is correct — but you must include all needed styles within the component.

---

## 8. `init()` must be a named export, not a default export or a side effect

The platform locates your widget's entry function by importing your bundle and calling `init(sdk)`. Your build must:

1. Export a function named `init`
2. Preserve that export name through minification

Both esbuild and Rollup/Vite preserve named exports from the entry module by default. If you are using a bundler configuration that wraps the output in an IIFE (`format: 'iife'`) or omits exports, `init` will not be reachable.

**Correct `main.ts`:**
```typescript
export async function init(sdk: WidgetSDK) {
  // ...
}
```

Check your build output: the compiled bundle should contain `export{...init...}` or `exports.init = ...`.

---

## 9. hubforge preview fetches from the dev server root, not from `dist/`

When you run `hubforge preview`, it spawns your `dev` script, detects the port, and sets the widget's `content.endpoint` to `http://localhost:{hubforgePort}/widgets/{type}/`. When the platform requests that URL, hubforge fetches `http://localhost:{devServerPort}/` (the **root** of your dev server) and rewrites all `src`/`href` attributes to absolute URLs pointing to the dev server.

Consequences:
- The platform receives whatever your dev server returns at `/`, not the contents of `dist/`
- If your `src/index.html` (or Vite's root `index.html`) is a full document, the platform gets a full document (see #1)
- If your dev server injects HMR scripts, those are included in what the platform receives — they work as long as CORS is set correctly (#2)
- `dist/` is only used in production builds, not during hubforge preview

---

## 10. Declarative shadow DOM vs. `innerHTML`: scripts behave differently

When the platform server-renders your widget HTML as part of the page, it uses [Declarative Shadow DOM](https://developer.chrome.com/docs/css-ui/declarative-shadow-dom) (`<template shadowrootmode="open">`). Scripts inside DSD templates execute during HTML parsing — the same as scripts in the main document.

If you dynamically inject HTML into a shadow root via `element.shadowRoot.innerHTML = ...` during JavaScript execution, **scripts do not execute** — this is a browser security invariant. Any `<script>` injected via `innerHTML` is inert.

This is relevant if you are building a widget that dynamically constructs its own HTML: use `document.createElement("script")` and `appendChild()` to inject scripts programmatically; never rely on `innerHTML` to execute them.

---
