import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PressHeader } from "@/components/press/PressHeader";
import { PressGrid } from "@/components/press/PressGrid";
import { PressKit } from "@/components/press/PressKit";

export const metadata = {
  title: "Press & Media — MOVRR",
  description:
    "MOVRR newsroom. Coverage, press kit, and media contact for journalists and editors.",
};

export default function PressPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <PressHeader />
      <PressGrid />
      <PressKit />
      <Footer cta={false} />
    </main>
  );
}
