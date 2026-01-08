import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import LaunchPartnerBenefits from "@/components/companies/LaunchPartnerBenefits";
import UseCases from "@/components/companies/UseCases";
import HowItWorks from "@/components/companies/HowItWorks";
import TrustAndSafety from "@/components/companies/TrustAndSafety";
import Industries from "@/components/companies/Industries";
import ProjectedImpact from "@/components/companies/ProjectedImpact";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight } from "lucide-react";
import ScrollLink from "@/components/ScrollLink";
import { BookingWidget } from "@/components/BookingWidget";

export const metadata = {
  title: "Companies | Movrr",
  description:
    "Advertise your brand through sustainable bicycle advertising with Movrr.",
};

export default function CompaniesPage() {
  return (
    <div>
      <PageHeader
        title="Reach People on the Move"
        description="Target the right streets, at the right time, with branded bicycles that deliver attention and not just impressions."
        buttons={
          <ScrollLink to="contact" className="group">
            <MagneticButton
              size="xl"
              className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
            >
              Become a Partner
              <span className="ml-3 inline-flex items-center justify-center">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </MagneticButton>
          </ScrollLink>
        }
      />

      {/* Benefits Section */}
      <LaunchPartnerBenefits />

      <UseCases />
      <ProjectedImpact />
      {/* <ROICalculator /> */}
      <HowItWorks />
      <TrustAndSafety />
      <Industries />

      {/* Contact Form */}
      <BookingWidget />
    </div>
  );
}
