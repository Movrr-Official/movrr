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
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (locale === DEFAULT_LOCALE) {
    return normalizedPath === "/index" ? "/" : normalizedPath;
  }
  return normalizedPath === "/" ? "/nl" : `/nl${normalizedPath}`;
}
