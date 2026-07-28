import type { Locale } from "@/lib/i18n/config";
import { stripLocalePrefix, withLocalePath } from "@/lib/i18n/routing";

export type WaitlistAudience = "rider" | "brand" | "partner";

export const WAITLIST_AUDIENCES: readonly WaitlistAudience[] = [
  "rider",
  "brand",
  "partner",
] as const;

export const WAITLIST_DRAFT_KEY = "movrr-waitlist-draft";

export type WaitlistDraft = {
  audience?: WaitlistAudience;
  name?: string;
  email?: string;
  city?: string;
};

export function parseAudience(
  value: string | string[] | undefined | null,
): WaitlistAudience | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  const normalized = raw.trim().toLowerCase();
  return WAITLIST_AUDIENCES.includes(normalized as WaitlistAudience)
    ? (normalized as WaitlistAudience)
    : null;
}

/** Canonical key for launch-city matching across EN/NL/geo aliases. */
export function cityKey(value: string): string {
  const normalized = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[''`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (
    normalized === "the hague" ||
    normalized === "den haag" ||
    normalized === "s-gravenhage" ||
    normalized === "s gravenhage" ||
    normalized === "hague"
  ) {
    return "the-hague";
  }

  return normalized.replace(/\s+/g, "-");
}

/** Prefer the localized launch-city label when the candidate matches one. */
export function matchLaunchCity(
  candidate: string | null | undefined,
  launchCities: string[],
): string | null {
  if (!candidate?.trim()) return null;
  const key = cityKey(candidate);
  return launchCities.find((city) => cityKey(city) === key) ?? null;
}

export function resolvePrefillCity(
  cityParam: string | string[] | undefined | null,
  suggestedCity: string | null | undefined,
  launchCities: string[],
): string {
  const raw = Array.isArray(cityParam) ? cityParam[0] : cityParam;
  const fromQuery = matchLaunchCity(raw, launchCities) ?? raw?.trim() ?? "";
  if (fromQuery) return fromQuery;
  // Soft IP: launch markets only — never raw ISP towns (e.g. Oost-Souburg).
  return matchLaunchCity(suggestedCity, launchCities) ?? "";
}

export function audienceFromPath(pathname: string): WaitlistAudience | null {
  const path = stripLocalePrefix(pathname);
  if (path === "/brands" || path.startsWith("/brands/")) return "brand";
  if (path === "/partners" || path.startsWith("/partners/")) return "partner";
  if (
    path === "/riders" ||
    path.startsWith("/riders/") ||
    path === "/rewards" ||
    path.startsWith("/rewards/")
  ) {
    return "rider";
  }
  return null;
}

export function waitlistHref(
  locale: Locale,
  audience?: WaitlistAudience,
): string {
  const base = withLocalePath(locale, "/waitlist");
  return audience ? `${base}?audience=${audience}` : base;
}

export function readWaitlistDraft(): WaitlistDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(WAITLIST_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as WaitlistDraft;
    return {
      audience: parseAudience(parsed.audience ?? null) ?? undefined,
      name: typeof parsed.name === "string" ? parsed.name.slice(0, 100) : "",
      email: typeof parsed.email === "string" ? parsed.email.slice(0, 200) : "",
      city: typeof parsed.city === "string" ? parsed.city.slice(0, 100) : "",
    };
  } catch {
    return null;
  }
}

export function writeWaitlistDraft(draft: WaitlistDraft): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(WAITLIST_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // Ignore quota / private-mode failures.
  }
}

export function clearWaitlistDraft(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(WAITLIST_DRAFT_KEY);
  } catch {
    // Ignore.
  }
}
