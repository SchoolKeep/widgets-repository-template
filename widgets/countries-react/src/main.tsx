import "./widget.css";
import "./setup-dev";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import type { WidgetSDK } from "./types";
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
  const root = createRoot(sdk.getContainer());
  await cssReady;
  root.render(<App header={extractHeader(sdk)} />);
  const unsubscribeProps = sdk.on("propsChanged", () => root.render(<App header={extractHeader(sdk)} />));
  sdk.on("destroy", () => {
    unsubscribeProps();
    root.unmount();
  });
}
