import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HelpHeader } from "@/components/help/HelpHeader";
import { HelpTopics } from "@/components/help/HelpTopics";

export const metadata = {
  title: "Help Centre — MOVRR",
  description:
    "Answers to common questions about earning rewards, community rides, account settings, and more.",
};

export default function HelpPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar />
      <HelpHeader />
      <HelpTopics />
      <Footer cta={false} />
    </main>
  );
}
