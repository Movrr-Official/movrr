import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import {
  REQUEST_LOCALE_HEADER,
  REQUEST_PATHNAME_HEADER,
  normalizeLocale,
} from "@/lib/i18n/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { ReducedMotionProvider } from "@/components/motion/ReducedMotionProvider";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildStructuredData } from "@/lib/seo/structured-data";
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    template: `%s | ${SITE_NAME}`,
    default: "MOVRR — Movement rewarded",
  },
  description:
    "MOVRR rewards verified cycling and gives brands measurable, movement-based reach across cities.",
  authors: [{ name: "MOVRR" }],
  creator: "MOVRR",
  publisher: "MOVRR B.V.",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.YANDEX_SITE_VERIFICATION
      ? { yandex: process.env.YANDEX_SITE_VERIFICATION }
      : {}),
    other: {
      ...(process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : {}),
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MOVRR — Movement rewarded",
    description:
      "Verified cycling rewards for riders. Measurable, movement-based reach for brands and cities.",
    locale: "en_GB",
    alternateLocale: ["nl_NL"],
    images: [
      {
        url: DEFAULT_SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: DEFAULT_SOCIAL_IMAGE_ALT,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOVRR — Movement rewarded",
    description:
      "Verified cycling rewards for riders. Measurable, movement-based reach for brands and cities.",
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: DEFAULT_SOCIAL_IMAGE_ALT }],
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
  const pathname = requestHeaders.get(REQUEST_PATHNAME_HEADER) ?? "/";
  const dictionary = await getDictionary(locale);
  const structuredData = buildStructuredData(locale, dictionary, pathname);

  return (
    <html
      lang={locale}
      className={`relative ${manrope.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased">
        <JsonLd data={structuredData} />
        <ReducedMotionProvider>{children}</ReducedMotionProvider>
      </body>
    </html>
  );
}
