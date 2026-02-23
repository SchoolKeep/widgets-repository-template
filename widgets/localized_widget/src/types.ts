export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getProps(): Record<string, unknown>;
  on(event: string, callback: (data: Record<string, unknown>) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export type Locale = "en" | "es" | "fr" | "de" | "pt";

export type TranslationStrings = {
  title: string;
  body: string;
  step1: string;
  step2: string;
  step3: string;
  cta: string;
  footer: string;
};

export type Translations = Record<Locale, TranslationStrings>;
