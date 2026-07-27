import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  REQUEST_LOCALE_HEADER,
  REQUEST_PATHNAME_HEADER,
  type Locale,
} from "@/lib/i18n/config";
import { detectPathLocale } from "@/lib/i18n/routing";

function withRequestHeaders(
  request: NextRequest,
  locale: Locale,
  pathname: string,
) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(REQUEST_LOCALE_HEADER, locale);
  requestHeaders.set(REQUEST_PATHNAME_HEADER, pathname);
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
      request: {
        headers: withRequestHeaders(request, localeFromPath, pathname),
      },
    });
    setLocaleCookie(response, localeFromPath);
    return response;
  }

  const response = NextResponse.next({
    request: {
      headers: withRequestHeaders(request, DEFAULT_LOCALE, pathname),
    },
  });
  return response;
}

export const config = { matcher: ["/:path*"] };
