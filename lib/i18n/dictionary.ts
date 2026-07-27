import { en } from "@/locales/en";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/locales/types";

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (locale === "nl") {
    const { nl } = await import("@/locales/nl/common");
    return nl;
  }
  return en;
}

export async function getDictionaryByLocale(
  locale: string | null | undefined,
): Promise<Dictionary> {
  return getDictionary(locale === "nl" ? "nl" : DEFAULT_LOCALE);
}
