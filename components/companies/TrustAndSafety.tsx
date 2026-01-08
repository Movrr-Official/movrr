"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Map, BadgeCheck } from "lucide-react";

const commitments = [
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Creative Quality Review",
    description:
      "All ads are manually reviewed for clarity, accuracy, and legal compliance. No misleading claims or community backlash.",
  },
  {
    icon: <Users className="h-7 w-7 text-primary" />,
    title: "Rider Screening & Brand Briefing",
    description:
      "Every rider is identity-verified and guided through campaign expectations and brand messaging before going live.",
  },
  {
    icon: <Map className="h-7 w-7 text-primary" />,
    title: "Live GPS & Local Compliance",
    description:
      "Campaign routes are GPS-tracked, monitored for performance, and aligned with local advertising regulations.",
  },
];

const TrustAndSafety = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="w-full bg-background py-32 md:py-40 border-b-2 border-border relative overflow-hidden">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content - OUTFRONT style */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary">
                <BadgeCheck className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                  Trust & Safety
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                Your Brand, <span className="text-primary">Protected</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Your brand reputation is non-negotiable—and so is ours. Every
                campaign on Movrr follows strict creative, operational, and legal
                standards to ensure visibility never comes at the cost of trust.
              </p>

              <ul className="space-y-8">
                {commitments.map((commitment) => (
                  <motion.li
                    key={commitment.title}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                      {commitment.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image - OUTFRONT style */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-6"
            >
              <div className="relative h-[500px] lg:h-[600px] border-2 border-border bg-card overflow-hidden">
                <Image
                  src="/trust-safety-dashboard.jpg"
                  alt="Movrr analytics dashboard showing safety metrics and compliance tracking"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 border-t-2 border-border bg-background/95">
                  <h4 className="text-lg font-black mb-2">Compliance Dashboard</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Real-time monitoring of all active campaigns with automated
                    compliance checks
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndSafety;
