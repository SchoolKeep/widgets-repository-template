export interface WidgetProps {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

type SDKEventMap = {
  propsChanged: WidgetProps;
  destroy: void;
};

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot | null;
  getContainer(): Element;
  getProps(): WidgetProps;
  on<K extends keyof SDKEventMap>(event: K, callback: (data: SDKEventMap[K]) => void): () => void;
  on(event: string, callback: (data: unknown) => void): () => void;
  emit(event: string, data?: unknown): void;
}
