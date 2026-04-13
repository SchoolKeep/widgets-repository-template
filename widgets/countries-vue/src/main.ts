import { createApp, ref } from "vue";
import App from "./App.vue";
import { WIDGET_HEADER_KEY, type WidgetSDK } from "./types";
import { HEADER_PROP } from "./constants";

const extractHeader = (sdk: WidgetSDK) => {
  const v = sdk.getProps()[HEADER_PROP];
  return typeof v === "string" && v.trim() ? v : "Vue";
};

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const headerRef = ref(extractHeader(sdk));
  const app = createApp(App);
  app.provide(WIDGET_HEADER_KEY, headerRef);
  app.mount(sdk.getContainer());
  const unsubscribeProps = sdk.on("propsChanged", () => (headerRef.value = extractHeader(sdk)));
  sdk.on("destroy", () => {
    unsubscribeProps();
    app.unmount();
  });
}
