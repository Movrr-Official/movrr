"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";

const metrics = [
  {
    title: "Estimated Impressions",
    value: "~400k – 1.2M",
    description:
      "Based on rider activity across high-footfall Dutch cities (e.g. Amsterdam, Rotterdam), with modeled estimates using public mobility data and GPS route coverage.",
  },
  {
    title: "Cost Efficiency (CPM)",
    value: "From €3.50",
    description:
      "More affordable than billboards or transit media, while offering dynamic real-world exposure in premium pedestrian areas.",
  },
  {
    title: "Unique Reach",
    value: "Untapped Areas",
    description:
      "Campaigns engage audiences in car-free city centers, parks, markets, and local neighborhoods where traditional ad vehicles can't go.",
  },
];

const ProjectedImpact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full bg-background py-32 md:py-40 border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            label="Campaign Performance"
            title="Projected Campaign Impact"
            subtitle="Our models project significant reach and efficiency, based on early data from our launch cities."
          />

          <motion.div
            className="grid md:grid-cols-3 gap-px bg-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-background p-10 lg:p-12 border-r border-b border-border last:border-r-0 group hover:bg-card/30 transition-colors duration-200"
              >
                <div className="mb-6 pb-6 border-b-2 border-border">
                  <div className="text-5xl font-black text-primary mb-2">
                    {metric.value}
                  </div>
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  {metric.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="max-w-5xl text-sm text-muted-foreground text-center leading-relaxed">
              *Impression estimates are modeled using Dutch urban foot traffic
              density, rider GPS coverage, and campaign duration assumptions.
              For example: 5 riders per city, 6 hours/day, 10–14 days across
              popular routes with daily footfall of 10k–20k+ per area.*
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectedImpact;
