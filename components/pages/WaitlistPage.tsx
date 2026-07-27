import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WaitlistHero } from "@/components/waitlist/WaitlistHero";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import type { Dictionary } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";

export function WaitlistPage({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.pages.waitlist;
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-primary">
      <Navbar variant="dark" />
      <WaitlistHero copy={copy.hero} />
      <WaitlistForm copy={copy.form} locale={locale} />
      <Footer cta={false} />
    </main>
  );
}
