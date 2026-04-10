import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WaitlistHero } from "@/components/waitlist/WaitlistHero";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export const metadata = {
  title: "Join the waitlist — MOVRR",
  description:
    "MOVRR launches city by city. Register as a rider, brand, or partner and be first when your city goes live.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-primary">
      <Navbar variant="dark" />
      <WaitlistHero />
      <WaitlistForm />
      <Footer cta={false} />
    </main>
  );
}
