import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PartnersHero } from "@/components/partners/PartnersHero";
import { PartnerTypes } from "@/components/partners/PartnerTypes";
import { PartnersContact } from "@/components/partners/PartnersContact";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { PartnersCopy } from "@/locales/types";
export function PartnersPage({ copy }: { copy: PartnersCopy }) {
  return <PageCopyProvider copy={copy}><main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><Navbar /><PartnersHero /><PartnerTypes /><PartnersContact /><Footer cta={false} /></main></PageCopyProvider>;
}
