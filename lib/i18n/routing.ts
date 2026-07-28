import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

export function detectPathLocale(pathname: string): Locale | null {
  return pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : null;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/nl") return "/";
  if (pathname.startsWith("/nl/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function withLocalePath(locale: Locale, pathname: string): string {
  const hashIndex = pathname.indexOf("#");
  const queryIndex = pathname.indexOf("?");
  const cutAt = [hashIndex, queryIndex]
    .filter((i) => i >= 0)
    .reduce((min, i) => Math.min(min, i), pathname.length);
  const pathOnly = pathname.slice(0, cutAt) || "/";
  const suffix = pathname.slice(cutAt);

  const normalizedPath = pathOnly.startsWith("/") ? pathOnly : `/${pathOnly}`;
  if (locale === DEFAULT_LOCALE) {
    const base = normalizedPath === "/index" ? "/" : normalizedPath;
    return `${base}${suffix}`;
  }
  const base = normalizedPath === "/" ? "/nl" : `/nl${normalizedPath}`;
  return `${base}${suffix}`;
}
