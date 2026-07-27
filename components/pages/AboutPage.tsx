import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutOrigin } from "@/components/about/AboutOrigin";
import { AboutBeliefs } from "@/components/about/AboutBeliefs";
import { AboutModel } from "@/components/about/AboutModel";
import { AboutCTA } from "@/components/about/AboutCTA";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { AboutCopy } from "@/locales/types";

export function AboutPage({ copy }: { copy: AboutCopy }) {
  return (
    <PageCopyProvider copy={copy}>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"
      >
        <AboutHero />
        <AboutOrigin />
        <AboutBeliefs />
        <AboutModel />
        <AboutCTA />
      </main>
      <Footer cta={false} />
    </PageCopyProvider>
  );
}
