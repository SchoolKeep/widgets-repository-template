export interface WidgetProps {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps(): WidgetProps;
  on(event: string, callback: (data: any) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export interface RawPokemonListEntry {
  name: string;
  url: string;
}

export interface RawPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawPokemonListEntry[];
}

export interface Pokemon {
  id: number;
  name: string;
  spriteUrl: string;
}

declare global {
  interface Window {
    WidgetServiceSDK: new () => {
      connectors: {
        execute(opts: {
          permalink: string;
          method: string;
        }): Promise<RawPokemonListResponse>;
      };
    };
  }
}
