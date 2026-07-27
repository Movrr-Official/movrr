"use client";

import { LOCALE_COOKIE_NAME, type Locale } from "@/lib/i18n/config";

export function persistLocale(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax${secure}`;
  window.localStorage.setItem(LOCALE_COOKIE_NAME, locale);
}
