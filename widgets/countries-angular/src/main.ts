import { createApplication } from "@angular/platform-browser";
import { provideZonelessChangeDetection } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { WIDGET_SDK_TOKEN, type WidgetSDK } from "./types";

let initialized = false;

export async function init(sdk: WidgetSDK) {
  if (initialized) return;
  initialized = true;
  await sdk.whenReady();
  const host = document.createElement("countries-angular-root");
  host.style.visibility = "hidden";
  const appRef = await createApplication({
    providers: [
      provideZonelessChangeDetection(),
      { provide: WIDGET_SDK_TOKEN, useValue: sdk },
    ],
  });
  appRef.bootstrap(AppComponent, host);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.onload = () => (host.style.visibility = "");
  link.onerror = () => (host.style.visibility = "");
  host.shadowRoot!.insertBefore(link, host.shadowRoot!.firstChild);
  link.href = new URL("./widget.css", import.meta.url).href;
  sdk.getContainer().appendChild(host);
  sdk.on("destroy", () => {
    initialized = false;
    appRef.destroy();
    host.remove();
  });
}
