import { bootstrapApplication, createApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { WIDGET_SDK } from "./widget-sdk.token";
import { HOST_ELEMENT } from "./constants";
import type { WidgetSDK } from "./types";

let initialized = false;

export async function init(sdk: WidgetSDK) {
  if (initialized) return;
  initialized = true;
  await sdk.whenReady();
  const host = document.createElement(HOST_ELEMENT);
  sdk.getContainer().appendChild(host);
  const appRef = await createApplication({
    providers: [{ provide: WIDGET_SDK, useValue: sdk }],
  });
  appRef.bootstrap(AppComponent, host);
  const unsubDestroy = sdk.on("destroy", () => {
    unsubDestroy();
    try {
      appRef.destroy();
    } finally {
      host.remove();
    }
  });
}

const devElement = document.querySelector(HOST_ELEMENT);
if (devElement) {
  bootstrapApplication(AppComponent, {
    providers: [
      {
        provide: WIDGET_SDK,
        useValue: {
          whenReady: () => Promise.resolve(),
          shadowRoot: null,
          getContainer: () => devElement,
          getProps: () => ({
            title: "Angular Widget",
            description: "Running in dev mode.",
          }),
          on: () => () => undefined,
          emit: () => undefined,
        } satisfies WidgetSDK,
      },
    ],
  });
}
