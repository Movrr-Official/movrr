import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import RiderBenefits from "@/components/riders/RiderBenefits";
import HowToJoin from "@/components/riders/HowToJoin";
import RiderContact from "@/components/riders/RiderContact";
import RiderFAQ from "@/components/riders/RiderFAQ";
import EarningPotential from "@/components/riders/EarningPotential";
// import RiderStories from "@/components/riders/RiderStories";

export const metadata = {
  title: "Riders | Movrr",
  description:
    "Earn rewards for verified impact by carrying advertisements on your bicycle with Movrr's Verified Impact Rewards system.",
};

export default function RidersPage() {
  return (
    <div>
      <PageHeader
        title="Ride, Earn, and Connect with Your City"
        description="Join Movrr riders earning Verified Impact Rewards by carrying eye-catching ads on their bikes while you go about your usual routes — flexible, simple, and transparently tracked."
      />

      {/* Benefits Section */}
      <RiderBenefits />

      {/* How It Works Section */}
      <HowToJoin />

      {/* Earning Potential Section */}
      <EarningPotential />

      {/* Rider Stories */}
      {/* <RiderStories /> */}

      {/* FAQs Section */}
      <RiderFAQ />

      {/* Sign Up Form */}
      <RiderContact />
    </div>
  );
}
