import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactPaths } from "@/components/contact/ContactPaths";
import { ContactCredentials } from "@/components/contact/ContactCredentials";

export const metadata = {
  title: "Contact — MOVRR",
  description:
    "Get in touch with the MOVRR team. Campaign enquiries, rider support, and press contact.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <ContactHeader />
      <ContactPaths />
      <ContactCredentials />
      <Footer cta={false} />
    </main>
  );
}
