import widgetCss from "./widget.css?inline";
import type { WidgetSDK, WidgetProps } from "./types";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let currentCss = widgetCss;
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.css?inline", (mod) => {
    if (typeof mod?.default === "string") currentCss = mod.default;
    styles.forEach((s) => (s.textContent = currentCss));
  });
}

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);
  const root = sdk.shadowRoot.querySelector("#root")!;

  const render = (props: WidgetProps) => {
    root.innerHTML = `
      <section class="vanilla-widget-section">
        <h3 class="vanilla-widget-title">${esc(props.title ?? "")}</h3>
        ${props.description ? `<p class="vanilla-widget-description">${esc(props.description)}</p>` : ""}
      </section>
    `;
  };

  render(sdk.getProps());
  sdk.on("propsChanged", render);
  sdk.on("destroy", () => {
    styles.delete(style);
    style.remove();
    root.innerHTML = "";
  });
}
