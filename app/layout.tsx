import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import { EarlyAccessBanner } from "@/components/early-access/EarlyAccessBanner";
import { CookieConsentManager } from "@/components/consent/CookieConsentManager";
import { CommonCopyProvider } from "@/components/i18n/CommonCopyProvider";
import { REQUEST_LOCALE_HEADER, normalizeLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL("https://movrr.nl"),
  title: { template: "%s | MOVRR", default: "MOVRR" },
  authors: [{ name: "MOVRR" }],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "var(--movrr-bg-secondary)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = normalizeLocale(requestHeaders.get(REQUEST_LOCALE_HEADER));
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={manrope.variable}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased">
        <CommonCopyProvider locale={locale} copy={dictionary.common}>
          <EarlyAccessBanner audience="riders" placement="fixed-top" />
          {children}
          <CookieConsentManager />
        </CommonCopyProvider>
      </body>
    </html>
  );
}
