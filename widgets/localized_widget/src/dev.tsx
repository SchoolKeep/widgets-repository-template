import { init } from "./main";

init({
  whenReady: () => Promise.resolve(),
  shadowRoot: document.getElementById("widget-root")! as unknown as ShadowRoot,
  on: () => () => {},
} satisfies import("./types").WidgetSDK);
