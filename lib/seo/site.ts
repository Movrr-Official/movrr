import { PAGE_PATHS, type PageKey } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";
import { stripLocalePrefix, withLocalePath } from "@/lib/i18n/routing";

export const SITE_URL = "https://movrr.nl";
export const SITE_NAME = "MOVRR";
export const LEGAL_NAME = "MOVRR B.V.";
export const DEFAULT_SOCIAL_IMAGE = "/opengraph-image";
export const DEFAULT_SOCIAL_IMAGE_ALT =
  "MOVRR — movement rewarded for riders, brands, and cities";

export interface SeoRouteConfig {
  indexable: boolean;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  image?: string;
  schemaType?:
    | "AboutPage"
    | "CollectionPage"
    | "ContactPage"
    | "FAQPage"
    | "WebPage";
}

export const SEO_ROUTES: Record<PageKey, SeoRouteConfig> = {
  home: {
    indexable: true,
    changeFrequency: "weekly",
    priority: 1,
    image: "/images/movrr-cyclist-urban-ride.webp",
    schemaType: "WebPage",
  },
  waitlist: {
    indexable: true,
    changeFrequency: "weekly",
    priority: 0.9,
    schemaType: "WebPage",
  },
  howItWorks: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.85,
    schemaType: "WebPage",
  },
  rewards: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.85,
    image: "/images/movrr-rewards-hero.webp",
    schemaType: "WebPage",
  },
  brands: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.85,
    image: "/images/movrr-brands-hero.webp",
    schemaType: "WebPage",
  },
  riders: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.85,
    image: "/images/movrr-cyclist-rotterdam.webp",
    schemaType: "WebPage",
  },
  about: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.7,
    schemaType: "AboutPage",
  },
  blog: {
    // The current editorial cards are placeholders without article URLs.
    indexable: false,
    changeFrequency: "weekly",
    priority: 0.6,
    schemaType: "CollectionPage",
  },
  press: {
    // Enable once verifiable coverage URLs and downloadable assets are live.
    indexable: false,
    changeFrequency: "monthly",
    priority: 0.6,
    schemaType: "CollectionPage",
  },
  help: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.7,
    schemaType: "FAQPage",
  },
  careers: {
    indexable: true,
    changeFrequency: "weekly",
    priority: 0.65,
    schemaType: "CollectionPage",
  },
  contact: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.65,
    schemaType: "ContactPage",
  },
  partners: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.7,
    schemaType: "WebPage",
  },
  accessibility: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.4,
    schemaType: "WebPage",
  },
  sitemapPage: {
    indexable: true,
    changeFrequency: "monthly",
    priority: 0.3,
    schemaType: "CollectionPage",
  },
  privacy: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.3,
    schemaType: "WebPage",
  },
  terms: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.3,
    schemaType: "WebPage",
  },
  cookies: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.3,
    schemaType: "WebPage",
  },
  accountDeletion: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.5,
    schemaType: "WebPage",
  },
};

export const SITE_LAST_MODIFIED =
  process.env.SITE_LAST_MODIFIED ?? "2026-07-27";

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function localizedUrl(locale: Locale, pathname: string): string {
  const url = absoluteUrl(withLocalePath(locale, pathname));
  return url === `${SITE_URL}/` ? SITE_URL : url;
}

export function getPageKeyFromPathname(pathname: string): PageKey | null {
  const normalized = stripLocalePrefix(pathname).replace(/\/+$/, "") || "/";
  const match = (Object.entries(PAGE_PATHS) as Array<[PageKey, string]>).find(
    ([, pagePath]) => pagePath === normalized,
  );
  return match?.[0] ?? null;
}
