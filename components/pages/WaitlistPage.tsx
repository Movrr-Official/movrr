import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WaitlistHero } from "@/components/waitlist/WaitlistHero";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import type { Dictionary } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";
import type { WaitlistAudience } from "@/lib/waitlist/prefill";

export function WaitlistPage({
  locale,
  dictionary,
  initialAudience = null,
  initialCity = "",
  cityFromQuery = false,
}: {
  locale: Locale;
  dictionary: Dictionary;
  initialAudience?: WaitlistAudience | null;
  initialCity?: string;
  cityFromQuery?: boolean;
}) {
  const copy = dictionary.pages.waitlist;
  return (
    <>
      <Navbar variant="dark" />
      <main
        id="main-content"
        className="min-h-screen overflow-x-hidden bg-movrr-bg-primary"
      >
        <WaitlistHero copy={copy.hero} />
        <WaitlistForm
          copy={copy.form}
          locale={locale}
          initialAudience={initialAudience}
          initialCity={initialCity}
          cityFromQuery={cityFromQuery}
          launchCities={copy.hero.cities}
        />
      </main>
      <Footer cta={false} />
    </>
  );
}
