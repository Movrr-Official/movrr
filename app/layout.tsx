import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { EarlyAccessBanner } from "@/components/early-access/EarlyAccessBanner";
import { CookieConsentManager } from "@/components/consent/CookieConsentManager";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOVRR | Movement Rewards Platform",
  description:
    "Turn movement into value. MOVRR is a movement-based rewards platform that connects verified real-world movement with measurable impact for riders, brands, and cities.",
  keywords: [
    "movement rewards",
    "mobility platform",
    "urban rewards",
    "brand activation",
    "verified movement",
    "cycling rewards",
  ],
  authors: [{ name: "MOVRR" }],
  openGraph: {
    title: "MOVRR | Movement Rewards Platform",
    description:
      "Turn movement into value. Connect verified real-world movement with measurable impact.",
    type: "website",
    locale: "en_US",
    siteName: "MOVRR",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOVRR | Movement Rewards Platform",
    description:
      "Turn movement into value. Connect verified real-world movement with measurable impact.",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">
        <EarlyAccessBanner audience="riders" placement="fixed-top" />
        {children}
        <CookieConsentManager />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
