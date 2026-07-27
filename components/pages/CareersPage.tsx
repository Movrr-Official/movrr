import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersValues } from "@/components/careers/CareersValues";
import { CareersRoles } from "@/components/careers/CareersRoles";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { CareersCopy } from "@/locales/types";

export function CareersPage({ copy }: { copy: CareersCopy }) {
  return (
    <PageCopyProvider copy={copy}>
      <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
        <Navbar variant="light" />
        <CareersHero />
        <CareersValues />
        <CareersRoles />
        <Footer cta={false} />
      </main>
    </PageCopyProvider>
  );
}
