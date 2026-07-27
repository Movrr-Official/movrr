import type { MetadataRoute } from "next";
import { PAGE_PATHS, type PageKey } from "@/locales/types";
import { withLocalePath } from "@/lib/i18n/routing";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://movrr.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const priorities: Partial<Record<PageKey, number>> = {
    home: 1,
    waitlist: 0.9,
    howItWorks: 0.8,
    rewards: 0.8,
    brands: 0.8,
    riders: 0.8,
    blog: 0.7,
  };

  return (Object.entries(PAGE_PATHS) as Array<[PageKey, string]>).flatMap(
    ([key, pathname]) => {
      const enPath = withLocalePath("en", pathname);
      const nlPath = withLocalePath("nl", pathname);
      const alternates = {
        languages: {
          en: `${BASE_URL}${enPath}`,
          nl: `${BASE_URL}${nlPath}`,
        },
      };
      const base = {
        lastModified,
        changeFrequency:
          key === "home" || key === "waitlist" || key === "blog"
            ? ("weekly" as const)
            : ("monthly" as const),
        priority: priorities[key] ?? 0.5,
        alternates,
      };
      return [
        { ...base, url: `${BASE_URL}${enPath}` },
        { ...base, url: `${BASE_URL}${nlPath}` },
      ];
    },
  );
}
