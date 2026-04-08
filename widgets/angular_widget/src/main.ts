import { createApplication } from "@angular/platform-browser";
import { ApplicationRef, provideZonelessChangeDetection } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { WIDGET_SDK } from "./widget-sdk.token";
import { HOST_ELEMENT } from "./constants";
import type { WidgetSDK } from "./types";

let initialized = false;

export async function init(sdk: WidgetSDK) {
  if (initialized) return;
  initialized = true;
  let appRef: ApplicationRef | null = null;
  try {
    await sdk.whenReady();
    const host = document.createElement(HOST_ELEMENT);
    appRef = await createApplication({
      providers: [
        provideZonelessChangeDetection(),
        { provide: WIDGET_SDK, useValue: sdk },
      ],
    });
    appRef.bootstrap(AppComponent, host);
    sdk.getContainer().appendChild(host);
    const app = appRef;
    const unsubDestroy = sdk.on("destroy", () => {
      unsubDestroy();
      initialized = false;
      try {
        app.destroy();
      } finally {
        host.remove();
      }
    });
  } catch (e) {
    initialized = false;
    appRef?.destroy();
    throw e;
  }
}
