import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  REQUEST_LOCALE_HEADER,
  isLocale,
  normalizeLocale,
  type Locale,
} from "@/lib/i18n/config";
import { detectPathLocale } from "@/lib/i18n/routing";

function withLocaleHeader(request: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(REQUEST_LOCALE_HEADER, locale);
  return requestHeaders;
}

function setLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

function setLocaleVary(response: NextResponse) {
  response.headers.set("Vary", "Accept-Language, Cookie");
}

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    /\.[^/]+$/.test(pathname)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicAsset(pathname)) return NextResponse.next();

  const localeFromPath = detectPathLocale(pathname);
  if (localeFromPath) {
    const response = NextResponse.next({
      request: { headers: withLocaleHeader(request, localeFromPath) },
    });
    setLocaleCookie(response, localeFromPath);
    setLocaleVary(response);
    return response;
  }

  const cookieValue = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const localeFromCookie = isLocale(cookieValue) ? cookieValue : null;
  const preferredLocale =
    localeFromCookie ?? normalizeLocale(request.headers.get("accept-language"));

  if (preferredLocale !== DEFAULT_LOCALE) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/nl${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.redirect(redirectUrl);
    setLocaleCookie(response, "nl");
    setLocaleVary(response);
    return response;
  }

  const response = NextResponse.next({
    request: { headers: withLocaleHeader(request, DEFAULT_LOCALE) },
  });
  setLocaleVary(response);
  return response;
}

export const config = { matcher: ["/:path*"] };
