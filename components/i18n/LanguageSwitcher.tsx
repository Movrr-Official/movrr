"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import {
  detectPathLocale,
  stripLocalePrefix,
  withLocalePath,
} from "@/lib/i18n/routing";
import { persistLocale } from "@/lib/i18n/client";

export interface LanguageSwitcherLabels {
  ariaLabel: string;
  englishLabel: string;
  dutchLabel: string;
  englishName: string;
  dutchName: string;
}

export function LanguageSwitcher({
  labels,
  inverted = false,
}: {
  labels: LanguageSwitcherLabels;
  inverted?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useMemo<Locale>(
    () => detectPathLocale(pathname) ?? "en",
    [pathname],
  );

  function switchLanguage(locale: Locale) {
    if (locale === currentLocale) return;
    const path = withLocalePath(locale, stripLocalePrefix(pathname));
    const query = searchParams.toString();
    const hash = window.location.hash;
    persistLocale(locale);
    router.push(`${query ? `${path}?${query}` : path}${hash}`);
  }

  const active = inverted ? "text-movrr-text-inverse" : "text-movrr-text-brand";
  const inactive = inverted
    ? "text-movrr-text-inverse/35 hover:text-movrr-text-inverse/65"
    : "text-movrr-text-brand/35 hover:text-movrr-text-brand/65";

  return (
    <div
      className="inline-flex items-center gap-0.5"
      role="group"
      aria-label={labels.ariaLabel}
    >
      {(["en", "nl"] as const).map((locale, index) => {
        const name =
          locale === "en" ? labels.englishName : labels.dutchName;
        const label =
          locale === "en" ? labels.englishLabel : labels.dutchLabel;
        return (
          <span className="contents" key={locale}>
            {index > 0 && (
              <span aria-hidden className={inverted ? "text-movrr-text-inverse/20" : "text-movrr-text-brand/20"}>
                /
              </span>
            )}
            <button
              type="button"
              aria-label={`${labels.ariaLabel}: ${name}`}
              aria-pressed={currentLocale === locale}
              lang={locale}
              className={`min-h-11 px-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                currentLocale === locale ? active : inactive
              }`}
              onClick={() => switchLanguage(locale)}
            >
              {label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
