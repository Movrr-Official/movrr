import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PartnersHero } from "@/components/partners/PartnersHero";
import { PartnerTypes } from "@/components/partners/PartnerTypes";
import { PartnersContact } from "@/components/partners/PartnersContact";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { PartnersCopy } from "@/locales/types";
export function PartnersPage({ copy }: { copy: PartnersCopy }) {
  return <PageCopyProvider copy={copy}><Navbar /><main id="main-content" className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><PartnersHero /><PartnerTypes /><PartnersContact /></main><Footer cta={false} /></PageCopyProvider>;
}
