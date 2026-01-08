"use client";

import React, { useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  Users,
  Target,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CtaSection from "@/components/shared/CtaSection";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PageHeader } from "@/components/shared/PageHeader";
import { PricingCalculator } from "../../components/pricing/PricingCalculator";

const Pricing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "€2,000",
      description:
        "A lean, high-visibility campaign built for small businesses that want local impact fast.",
      features: [
        "5 riders on fixed local routes",
        "2 hyperlocal zones (e.g., single neighborhood)",
        "1-week campaign duration",
        "Basic campaign summary (reach & hours logged)",
        "Standard ad formats (half-wraps or panniers)",
        "Self-serve onboarding + email support",
      ],
      cta: "Launch My Campaign",
      popular: false,
    },
    {
      name: "Growth",
      price: "€5,000",
      description:
        "Designed for growing brands ready to expand their reach with optimized visibility in key areas of the city.",
      features: [
        "8 riders with optimized, high-visibility routes",
        "2 strategic city zones",
        "3-week campaign duration",
        "Performance dashboard with route insights",
        "Branded gear and half-wrap ad formats",
        "Priority support during campaign setup",
      ],
      cta: "Scale with Movrr",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Tailored solutions for agencies, multi-city campaigns, and custom activations.",
      features: [
        "25+ riders with city-wide or multi-city coverage",
        "Flexible campaign duration",
        "Audience profiling & behavioral targeting",
        "Full performance suite: analytics, heatmaps, live tracking",
        "All ad formats including custom creative",
        "Dedicated account manager & strategy support",
        "Custom reports & post-campaign review",
        "AI-powered route optimization included",
      ],
      cta: "Request a Custom Plan",
      popular: false,
    },
  ];

  const factors = [
    {
      icon: MapPin,
      title: "Location Premium",
      description:
        "Prime zones like city centers, shopping streets, and campus areas may have premium pricing based on foot traffic and visibility.",
    },
    {
      icon: Clock,
      title: "Campaign Duration",
      description:
        "Run longer and save more, campaigns over 3 months often qualify for volume discounts or bonus impressions.",
    },
    {
      icon: Users,
      title: "Rider Availability",
      description:
        "More active riders in your chosen city means better coverage and pricing flexibility. We're building density across key markets.",
    },
    {
      icon: Target,
      title: "Targeting Precision",
      description:
        "Need basic neighborhood coverage or advanced demographic targeting? The complexity of your campaign affects final pricing.",
    },
  ];

  const comparison = [
    {
      metric: "Traditional Billboards",
      cost: "€5,000–€20,000/mo",
      reach: "Fixed location only",
      targeting: "Broad geographic (no demographics)",
    },
    {
      metric: "Radio Advertising",
      cost: "€2,000–€10,000/mo",
      reach: "Wide area",
      targeting: "Time-of-day only",
    },
    {
      metric: "Movrr Mobile Ads",
      cost: "€2,500–€15,000/mo",
      reach: "Hyper-local + mobile",
      targeting: "Neighborhood + demographic",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Smarter Outdoor Advertising"
        description="Movrr gives you high-impact, geo-targeted exposure without the massive costs of billboards or the guesswork of traditional media. Pricing is transparent and designed to scale with your needs."
      />

      {/* Pricing Tiers - OUTFRONT style */}
      <section
        ref={ref}
        className="w-full py-32 md:py-40 border-t-2 border-border"
      >
        <div className="container max-w-[1400px] xl:px-12">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants} className="flex">
                <Card
                  className={`w-full border-none rounded-none bg-background p-0 overflow-hidden ${plan.popular ? "border-2 border-primary" : ""}`}
                >
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold uppercase tracking-[0.1em] border-b-2 border-primary">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="p-8 border-b-2 border-border">
                    <CardTitle className="text-3xl font-black mb-4">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline text-6xl font-black mb-4">
                      {plan.price}
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 border-2 border-primary bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-8 border-t-2 border-border">
                    <Link href="/contact" className="w-full group">
                      <MagneticButton
                        size="xl"
                        className={`w-full h-14 text-base font-bold rounded-none border-2 uppercase tracking-[0.1em] ${
                          plan.popular
                            ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                            : "border-foreground bg-background hover:bg-foreground hover:text-background"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <PricingCalculator />

          {/* Post-Pricing Note */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              All plans include ad design assistance, rider training, and
              campaign setup, and full logistics.
              <br />
              Need a custom solution?{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Contact our sales team
              </Link>{" "}
              to tailor a package that fits your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Factors - OUTFRONT style */}
      <section className="w-full py-32 md:py-40 border-t-2 border-border">
        <div className="container max-w-[1400px] xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Pricing Factors
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                What Influences Your Campaign Cost?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Pricing is based on factors like campaign size, location, and
                audience targeting. All designed to give you full control and
                measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {factors.map((factor, index) => (
                <Card
                  key={index}
                  className="border-none rounded-none bg-background p-8 hover:bg-card/50 transition-colors duration-200"
                >
                  <CardHeader className="p-0 pb-6 border-b-2 border-border mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                        <factor.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-black">
                        {factor.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {factor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section - OUTFRONT style */}
      <section className="w-full py-32 md:py-40 border-t-2 border-border">
        <div className="container max-w-[1400px] xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-black mb-6">Movrr is ideal for…</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              If you want hyper-local visibility, real performance data, and a
              campaign people actually notice — Movrr was built for you.
            </p>
            <ul className="grid gap-4 md:grid-cols-2 text-left max-w-2xl mx-auto">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">
                  Local launches and grand openings
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">
                  Event-based promotions and city tours
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">
                  Sustainability-conscious brand campaigns
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">
                  Brands seeking neighborhood trust and visibility
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Value Comparison - OUTFRONT style */}
      <section className="w-full py-32 md:py-40 border-t-2 border-border">
        <div className="container max-w-[1400px] xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Comparison
                </span>
              </div>
              <motion.h2
                className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                See the Difference with Movrr
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Movrr gives you flexible, mobile, and measurable advertising at
                a fraction of traditional OOH cost.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border rounded-none overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-border bg-card">
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-[0.05em]">
                          Advertising Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-[0.05em]">
                          Monthly Cost Range
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-[0.05em]">
                          Reach Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-[0.05em]">
                          Targeting Options
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {comparison.map((row, index) => (
                        <motion.tr
                          key={index}
                          className={
                            index === 2 ? "bg-primary/5" : "bg-background"
                          }
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <td className="px-6 py-4 text-sm font-medium">
                            {row.metric}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {row.cost}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {row.reach}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {row.targeting}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Let’s Plan Your First Campaign"
        description="Talk to our team to explore pricing tailored to your business goals, audience, and locations—without paying for waste."
        primaryCta="Request Custom Quote"
        primaryCtaLink="/contact"
        secondaryCta="Schedule Consultation"
        secondaryCtaLink="/contact"
        secondaryIcon={<Calendar className="ml-2 h-4 w-4" />}
      />
    </div>
  );
};

export default Pricing;
