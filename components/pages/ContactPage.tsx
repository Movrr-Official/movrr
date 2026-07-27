import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactPaths } from "@/components/contact/ContactPaths";
import { ContactCredentials } from "@/components/contact/ContactCredentials";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { ContactCopy } from "@/locales/types";

export function ContactPage({ copy }: { copy: ContactCopy }) {
  return (
    <PageCopyProvider copy={copy}>
      <Navbar variant="light" />
      <main
        id="main-content"
        className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"
      >
        <ContactHeader />
        <ContactPaths />
        <ContactCredentials />
      </main>
      <Footer cta={false} />
    </PageCopyProvider>
  );
}
