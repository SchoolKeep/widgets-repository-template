import type { WidgetSDK, WidgetProps } from "./types";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();

  const root = sdk.shadowRoot.querySelector("#root")!;

  const render = (props: WidgetProps) => {
    root.innerHTML = `
      <section class="vanilla-widget-section">
        <h3 class="vanilla-widget-title">${esc(props.title ?? "")}</h3>
        ${props.description ? `<p class="vanilla-widget-description">${esc(props.description)}</p>` : ""}
      </section>
    `;
  };

  render(sdk.getProps());
  sdk.on("propsChanged", render);
  sdk.on("destroy", () => { root.innerHTML = ""; });
}
