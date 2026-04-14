import { createApplication } from "@angular/platform-browser";
import { provideZonelessChangeDetection } from "@angular/core";
import { AppComponent, WIDGET_SDK } from "./app/app.component";
import type { WidgetSDK } from "./types";

let initialized = false;

export async function init(sdk: WidgetSDK) {
  if (initialized) return;
  initialized = true;
  await sdk.whenReady();
  const host = document.createElement("countries-angular-root");
  const appRef = await createApplication({
    providers: [
      provideZonelessChangeDetection(),
      { provide: WIDGET_SDK, useValue: sdk },
    ],
  });
  appRef.bootstrap(AppComponent, host);
  sdk.getContainer().appendChild(host);
  sdk.on("destroy", () => {
    initialized = false;
    appRef.destroy();
    host.remove();
  });
}
