import React from "react";
import { CheckCircle } from "lucide-react";

import { MagneticButton } from "@/components/ui/magnetic-button";
import ScrollLink from "@/components/ScrollLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Tier = {
  value: string;
  label: string;
  title: string;
  description: string;
  earnings: string;
  perks: string[];
};

const tiers: Tier[] = [
  {
    value: "casual",
    label: "Casual Rider",
    title: "Casual Rider",
    description:
      "Ride casually during your daily errands or weekend trips. Perfect if you cycle a few hours a week.",
    earnings: "€20–€75",
    perks: [
      "5–10 hours of riding per week",
      "Flexible schedule, no minimum commitment",
      "Participate in short-term or one-off campaigns",
    ],
  },
  {
    value: "regular",
    label: "Regular Rider",
    title: "Regular Rider",
    description:
      "Commute by bike most weekdays or ride regularly. Ideal if you're cycling around town for work or school.",
    earnings: "€50–€150",
    perks: [
      "10–20 hours of riding per week",
      "Increased campaign matching",
      "Bonuses for riding during peak hours",
    ],
  },
  {
    value: "dedicated",
    label: "Dedicated Rider",
    title: "Dedicated Rider",
    description:
      "You’re a courier, delivery rider, or someone who spends a lot of time on a bike and wants to maximize earnings.",
    earnings: "€100–€250+",
    perks: [
      "20+ hours of riding per week",
      "Priority access to high-visibility campaigns",
      "Extra incentives for long-distance or busy routes",
    ],
  },
];

const RiderTier = ({ tier }: { tier: Tier }) => (
  <TabsContent value={tier.value} className="p-0 mt-0">
    <div className="border-2 border-border bg-background p-10 lg:p-12">
      <div className="space-y-6">
        <div className="pb-6 border-b-2 border-border">
          <h3 className="text-3xl font-black tracking-tight mb-4">{tier.title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">{tier.description}</p>
        </div>
        <div className="flex justify-center py-6 border-b-2 border-border">
          <div className="text-center">
            <span className="text-5xl font-black text-primary">
              {tier.earnings}
            </span>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.1em] mt-2">Weekly Earnings</p>
          </div>
        </div>
        <ul className="space-y-4">
          {tier.perks.map((perk, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
              <span className="text-base text-foreground leading-relaxed">{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </TabsContent>
);

const EarningPotential = () => {
  return (
    <section className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Earnings
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Earning Potential
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Whether you ride occasionally or cycle every day, Movrr gives you
              a way to earn extra income doing what you already love.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="casual" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-14 border-2 border-border bg-card mb-0">
                {tiers.map((tier) => (
                  <TabsTrigger 
                    key={tier.value} 
                    value={tier.value}
                    className="h-full text-sm font-bold uppercase tracking-[0.1em] data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                  >
                    {tier.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tiers.map((tier) => (
                <RiderTier key={tier.value} tier={tier} />
              ))}
            </Tabs>
            <div className="flex justify-center mt-10">
              <ScrollLink to="#rider-contact">
                <MagneticButton 
                  variant="default" 
                  size="xl"
                  className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                >
                  Start Earning with Movrr
                </MagneticButton>
              </ScrollLink>
            </div>

            <p className="text-sm text-muted-foreground mt-8 text-center leading-relaxed">
              *These figures reflect typical earnings during our early-stage
              rollout. Actual earnings depend on campaign availability, time on
              the road, and route selection. As Movrr grows in your city, so will
              your opportunities to earn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningPotential;
