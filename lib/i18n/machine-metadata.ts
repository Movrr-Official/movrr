import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";
import { DEFAULT_SOCIAL_IMAGE, SITE_NAME } from "@/lib/seo/site";
import type { Dictionary } from "@/locales/types";

export function buildMachineMetadata(
  locale: Locale,
  dictionary: Dictionary,
): Metadata {
  const copy = dictionary.common.machineView;
  return {
    title: copy.title,
    description: copy.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: withLocalePath(locale, "/"),
      languages: {
        en: "/machine",
        nl: "/nl/machine",
        "x-default": "/machine",
      },
      types: {
        "text/markdown": withLocalePath(locale, "/machine.md"),
      },
    },
    openGraph: {
      type: "website",
      title: `${copy.title} | ${SITE_NAME}`,
      description: copy.description,
      locale: locale === "nl" ? "nl_NL" : "en_GB",
      alternateLocale: locale === "nl" ? ["en_GB"] : ["nl_NL"],
      siteName: SITE_NAME,
      url: withLocalePath(locale, "/machine"),
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${copy.title} | ${SITE_NAME}`,
      description: copy.description,
      images: [DEFAULT_SOCIAL_IMAGE],
    },
  };
}
