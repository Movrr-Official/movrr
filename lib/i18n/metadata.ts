import type { Metadata } from "next";
import type { Dictionary, PageKey } from "@/locales/types";
import { PAGE_PATHS } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";

export function buildPageMetadata(
  locale: Locale,
  dictionary: Dictionary,
  pageKey: PageKey,
): Metadata {
  const page = dictionary.metadata.pages[pageKey];
  const pathname = PAGE_PATHS[pageKey];
  return {
    title: page.title,
    description: page.description,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: withLocalePath(locale, pathname),
      languages: {
        en: withLocalePath("en", pathname),
        nl: withLocalePath("nl", pathname),
        "x-default": withLocalePath("en", pathname),
      },
    },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      locale: locale === "nl" ? "nl_NL" : "en_US",
      alternateLocale: locale === "nl" ? ["en_US"] : ["nl_NL"],
      siteName: dictionary.metadata.siteName,
      url: withLocalePath(locale, pathname),
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
