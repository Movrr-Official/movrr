import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityStatement } from "@/components/accessibility/AccessibilityStatement";
import { AccessibilityCommitments } from "@/components/accessibility/AccessibilityCommitments";
import { AccessibilityContact } from "@/components/accessibility/AccessibilityContact";

export const metadata = {
  title: "Accessibility — MOVRR",
  description:
    "MOVRR's accessibility statement. Our commitments to WCAG 2.1 AA conformance and inclusive design.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="dark" />
      <AccessibilityStatement />
      <AccessibilityCommitments />
      <AccessibilityContact />
      <Footer cta={false} />
    </main>
  );
}
