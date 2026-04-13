import type { InjectionKey, Ref } from "vue";

export interface RawCountry {
  name: { common: string };
  capital?: string[];
  population: number;
  flags: { png: string };
  region: string;
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  region: string;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  on(event: string, callback: (data: unknown) => void): () => void;
  emit(event: string, data?: unknown): void;
  getProps(): Record<string, unknown>;
}

export const WIDGET_HEADER_KEY: InjectionKey<Ref<string>> = Symbol("widgetHeader");

declare global {
  interface Window {
    WidgetServiceSDK: new () => {
      connectors: {
        execute(opts: { permalink: string; method: string }): Promise<RawCountry[]>;
      };
    };
  }
}
