import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ValueStrip } from "@/components/landing/ValueStrip";
import { UseCases } from "@/components/landing/UseCases";
import { Metrics } from "@/components/landing/Metrics";
import { AppPreview } from "@/components/landing/AppPreview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Safety } from "@/components/landing/Safety";
import { Footer } from "@/components/layout/Footer";
import type { Dictionary } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";

export function HomePage({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.pages.home;
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen overflow-x-clip bg-movrr-bg-canvas"
      >
        <Hero locale={locale} copy={copy.hero} />
        <ValueStrip copy={copy.valueStrip} />
        <UseCases copy={copy.useCases} />
        <Metrics copy={copy.metrics} />
        <AppPreview copy={copy.appPreview} />
        <HowItWorks copy={copy.howItWorks} />
        <Safety copy={copy.safety} />
      </main>
      <Footer />
    </>
  );
}
