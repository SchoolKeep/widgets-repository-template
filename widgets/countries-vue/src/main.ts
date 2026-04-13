import "./widget.css";
import { createApp, ref } from "vue";
import App from "./App.vue";
import { WIDGET_HEADER_KEY, type WidgetSDK } from "./types";
import { HEADER_PROP } from "./constants";

const extractHeader = (sdk: WidgetSDK) => {
  const v = sdk.getProps()[HEADER_PROP];
  return typeof v === "string" ? v : "";
};

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const link = document.createElement("link");
  link.rel = "stylesheet";
  const cssReady = new Promise<void>((resolve) => {
    link.onload = () => resolve();
    link.onerror = () => resolve();
  });
  link.href = new URL("./widget.css", import.meta.url).href;
  sdk.shadowRoot.insertBefore(link, sdk.shadowRoot.firstChild);
  const headerRef = ref(extractHeader(sdk));
  const app = createApp(App);
  app.provide(WIDGET_HEADER_KEY, headerRef);
  await cssReady;
  app.mount(sdk.getContainer());
  const unsubscribeProps = sdk.on("propsChanged", () => (headerRef.value = extractHeader(sdk)));
  sdk.on("destroy", () => {
    unsubscribeProps();
    app.unmount();
  });
}
