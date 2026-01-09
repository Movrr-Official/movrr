import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";

import "./globals.css";
import Analytics from "@/components/Analytics";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/layout/Navbar";
import { ReduxProvider } from "@/providers/ReduxProvider";
import QueryClientProvider from "@/providers/QueryClientProvider";
import { FAB } from "@/components/FAB";
import { Pointer } from "@/components/Pointer";
import Footer from "@/components/layout/Footer";
import CookieBanner from "./legal/cookie-policy/components/CookieBanner";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Movrr | Sustainable Bicycle Advertising Platform",
  description:
    "Connect with riders to advertise your brand sustainably through bicycle advertising across the city.",
  keywords: [
    "bicycle advertising",
    "sustainable marketing",
    "outdoor advertising",
    "green marketing",
  ],
  authors: [{ name: "Movrr" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://movrr.vercel.app",
    title: "Movrr | Sustainable Bicycle Advertising Platform",
    description:
      "Connect with riders to advertise your brand sustainably through bicycle advertising across the city.",
    siteName: "Movrr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movrr | Sustainable Bicycle Advertising Platform",
    description:
      "Connect with riders to advertise your brand sustainably through bicycle advertising across the city.",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <QueryClientProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased scroll-smooth",
              inter.variable,
              jetbrainsMono.variable
            )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="movrr-theme"
            >
              <ErrorBoundary>
                <div className="relative flex min-h-screen flex-col">
                  <Navbar />
                  {/* Main content area with suspense for lazy loading */}
                  <Suspense>
                    <main className="flex-1">{children}</main>
                  </Suspense>
                  <FAB />
                  {/* Cookie Banner */}
                  <CookieBanner />
                  <Footer />
                </div>
                <Pointer className="fill-[#00a234]" />
                <Analytics />
              </ErrorBoundary>
            </ThemeProvider>
          </body>
        </html>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
