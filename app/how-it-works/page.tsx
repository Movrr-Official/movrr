import React from "react";

import CtaSection from "@/components/shared/CtaSection";
import { Bike } from "lucide-react";
import Benefits from "../../components/how-it-works/Benefits";
import OurTechnology from "../../components/how-it-works/OurTechnology";
import FAQ from "../../components/how-it-works/FAQ";
import { PageHeader } from "@/components/shared/PageHeader";
import HowItWorks from "../../components/how-it-works/HowItWorks";

export const metadata = {
  title: "How It Works | Movrr",
  description:
    "Learn how Movrr connects brands with bicycle riders to create sustainable advertising campaigns.",
};

export default function HowItWorksPage() {
  return (
    <div>
      <PageHeader
        title="How Movrr Works"
        description="We connect brands with everyday cyclists to deliver ads that move, literally. It's geo-targeted, high-visibility, and built for the streets that matter."
      />

      {/* HowItWorks Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <Benefits />

      {/* Technology Section */}
      <OurTechnology />

      {/* FAQs Section */}
      <FAQ />

      {/* CTA Section */}
      <CtaSection
        title="Join the Movement"
        description="Whether you're a brand ready to stand out or a rider looking to earn, Movrr makes city movement work for everyone."
        primaryCta="Advertise with Movrr"
        primaryCtaLink="/companies"
        secondaryCta="Become a Rider"
        secondaryCtaLink="/riders"
        secondaryIcon={<Bike className="ml-2 h-4 w-4" />}
      />
    </div>
  );
}
