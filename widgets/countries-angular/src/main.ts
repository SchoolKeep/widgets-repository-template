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
  const appRef = await createApplication({
    providers: [
      provideZonelessChangeDetection(),
      { provide: WIDGET_SDK_TOKEN, useValue: sdk },
    ],
  });
  appRef.bootstrap(AppComponent, host);
  sdk.getContainer().appendChild(host);
  const offDestroy = sdk.on("destroy", () => {
    offDestroy();
    initialized = false;
    appRef.destroy();
    host.remove();
  });
}
