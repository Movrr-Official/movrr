"use client";

import React from "react";
import {
  Building,
  Megaphone,
  ShoppingBag,
  Smartphone,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const industries = [
  {
    icon: ShoppingBag,
    name: "Retail & CPG",
    value: "Boost local awareness and drive in-store visits.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & QSR",
    value: "Reach nearby foot traffic with geo-targeted ads.",
  },
  {
    icon: Smartphone,
    name: "Tech & Apps",
    value: "Drive downloads near high-traffic zones.",
  },
  {
    icon: Megaphone,
    name: "Events & Entertainment",
    value: "Build buzz before, during, and after events.",
  },
  {
    icon: Building,
    name: "Real Estate",
    value: "Promote properties with hyper-local exposure.",
  },
  {
    icon: User,
    name: "Local Services",
    value: "Get noticed in the neighborhoods you serve.",
  },
];

const Industries = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="w-full bg-background py-32 md:py-40 border-b-2 border-border relative overflow-hidden">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            label="Industries We Serve"
            title="A Perfect Fit for Ambitious Brands"
            subtitle="Movrr works best for industries that need local relevance,
                    peak visibility, and real-world reach. Whether you're driving
                    foot traffic, app installs, or awareness—our platform meets
                    your goals in motion."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                whileHover="hover"
                className="group bg-background p-8 lg:p-10 border-r border-b border-border last:border-r-0 hover:bg-card/30 transition-colors duration-200"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                    {industry.icon && (
                      <industry.icon className="w-8 h-8 text-primary" />
                    )}
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
