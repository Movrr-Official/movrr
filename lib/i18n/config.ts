export const SUPPORTED_LOCALES = ["en", "nl"] as const;
export const DEFAULT_LOCALE = "en" as const;
export const LOCALE_COOKIE_NAME = "movrr_lang";
export const REQUEST_LOCALE_HEADER = "x-movrr-locale";

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && SUPPORTED_LOCALES.includes(value as Locale));
}

export function normalizeLocale(value: string | null | undefined): Locale {
  return value?.toLowerCase().startsWith("nl") ? "nl" : DEFAULT_LOCALE;
}
