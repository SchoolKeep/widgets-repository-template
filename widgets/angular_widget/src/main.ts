import { createApplication } from "@angular/platform-browser";
import { provideZonelessChangeDetection } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { WIDGET_SDK } from "./widget-sdk.token";
import { HOST_ELEMENT } from "./constants";
import type { WidgetSDK } from "./types";

let initialized = false;

export async function init(sdk: WidgetSDK) {
  if (initialized) return;
  initialized = true;
  try {
    await sdk.whenReady();
    const host = document.createElement(HOST_ELEMENT);
    const appRef = await createApplication({
      providers: [
        provideZonelessChangeDetection(),
        { provide: WIDGET_SDK, useValue: sdk },
      ],
    });
    appRef.bootstrap(AppComponent, host);
    sdk.getContainer().appendChild(host);
    const unsubDestroy = sdk.on("destroy", () => {
      unsubDestroy();
      initialized = false;
      try {
        appRef.destroy();
      } finally {
        host.remove();
      }
    });
  } catch (e) {
    initialized = false;
    throw e;
  }
}
