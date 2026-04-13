import "./setup-dev";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import type { WidgetSDK } from "./types";
import { HEADER_PROP } from "./constants";

const extractHeader = (sdk: WidgetSDK) => {
  const v = sdk.getProps()[HEADER_PROP];
  return typeof v === "string" && v.trim() ? v : "React";
};

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const root = createRoot(sdk.getContainer());
  root.render(<App header={extractHeader(sdk)} />);
  const unsubscribeProps = sdk.on("propsChanged", () => root.render(<App header={extractHeader(sdk)} />));
  sdk.on("destroy", () => {
    unsubscribeProps();
    root.unmount();
  });
}
