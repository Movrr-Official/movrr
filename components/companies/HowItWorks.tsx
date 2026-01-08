"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart, FileText, Target } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "1. Plan & Strategize",
    description:
      "Define your campaign goals, routes, and audience with our team. We'll recommend the best rider match and locations.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "2. Launch & Go Live",
    description:
      "We deploy your campaign using pre-screened riders on GPS-verified routes to ensure brand visibility and consistency.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "3. Monitor & Optimize",
    description:
      "Access live performance dashboards with route visibility, reach estimates, and rider-level reporting.",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <section
      id="how-it-works"
      className="w-full py-32 md:py-40 bg-background border-b-2 border-border"
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            label="Our Process"
            title="Launch in Three Simple Steps"
            subtitle="Our process is simple, effective, and improving every week. As an
              early partner, you'll get hands-on support and influence future
              features like live tracking and analytics."
          />

          <motion.div
            className="grid md:grid-cols-3 gap-px bg-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-background p-10 lg:p-12 border-r border-b border-border last:border-r-0 group hover:bg-card/30 transition-colors duration-200"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
                variants={cardVariants}
              >
                <div className="w-16 h-16 border-2 border-primary bg-primary/5 flex items-center justify-center mb-8">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-primary uppercase tracking-[0.1em] mb-2">
                  Step {idx + 1}
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
