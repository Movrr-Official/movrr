import React from "react";
import { Award, MapPin, CheckCircle, Gift } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import ScrollLink from "@/components/ScrollLink";

const rewardSources = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Verified Campaign Rides",
    description:
      "Complete assigned campaign routes and earn Movrr Points for each verified ride.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Active Movement in Campaign Zones",
    description:
      "Ride through designated campaign zones during active periods to earn points.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Completed Routes",
    description:
      "Finish full campaign routes as specified to maximize your reward points.",
  },
];

const redemptionOptions = [
  {
    icon: <Gift className="h-8 w-8 text-primary" />,
    title: "Cash Rewards",
    description: "Redeem points for cash when available through the app.",
  },
  {
    icon: <Gift className="h-8 w-8 text-primary" />,
    title: "Gift Cards",
    description: "Exchange points for gift cards from partner retailers.",
  },
  {
    icon: <Gift className="h-8 w-8 text-primary" />,
    title: "Gear",
    description: "Use points to get cycling gear and equipment.",
  },
  {
    icon: <Gift className="h-8 w-8 text-primary" />,
    title: "Partner Offers",
    description: "Access exclusive offers and discounts from Movrr partners.",
  },
];

const EarningPotential = () => {
  return (
    <section className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Rewards System
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              How Rewards Work
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Earn Movrr Points for verified campaign rides and redeem them for
              real rewards all transparently tracked in the app.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-px bg-border mb-16">
            {/* Earn Points Section */}
            <div className="col-span-12 lg:col-span-6 bg-card border-2 border-border p-8 lg:p-12">
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Earn Movrr Points
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Riders earn Movrr Points from:
              </p>
              <div className="space-y-6">
                {rewardSources.map((source, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-6 border-b-2 border-border last:border-b-0 last:pb-0"
                  >
                    <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                      {source.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black tracking-tight mb-2">
                        {source.title}
                      </h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {source.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redeem Points Section */}
            <div className="col-span-12 lg:col-span-6 bg-card border-2 border-border p-8 lg:p-12">
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Redeem for Rewards
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Points can be redeemed for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {redemptionOptions.map((option, index) => (
                  <div
                    key={index}
                    className="border-2 border-border bg-background p-6"
                  >
                    <div className="w-10 h-10 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-4">
                      {option.icon}
                    </div>
                    <h4 className="text-lg font-black tracking-tight mb-2">
                      {option.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="border-2 border-border bg-card p-8 lg:p-12">
              <p className="text-xl md:text-2xl font-black tracking-tight mb-4">
                Every ride is verified. Every reward is traceable. No hidden
                rules.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Transparent tracking means you always know how many points
                you&apos;ve earned and what rewards are available.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center leading-relaxed border-t-2 border-border pt-8">
              Rewards vary by campaign and availability. No guaranteed hourly
              pay. Movrr Points are earned through verified campaign rides and
              can be redeemed for available rewards as specified in the app.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <ScrollLink to="#rider-contact">
              <MagneticButton
                variant="default"
                size="xl"
                className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
              >
                Start Earning Rewards
              </MagneticButton>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningPotential;
