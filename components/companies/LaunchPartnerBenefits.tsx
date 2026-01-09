"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Percent, Rocket } from "lucide-react";


const benefits = [
  {
    icon: <Percent className="h-8 w-8 text-primary" />,
    title: "Exclusive Rates",
    description:
      "Lock in foundational pricing that will never be offered again. Guaranteed.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Shape the Platform",
    description:
      "Your feedback directly influences our dashboard, features, and reporting tools.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Co-Marketing & PR",
    description:
      "Collaborate on case studies and press releases to amplify your brand's story.",
  },
];

const LaunchPartnerBenefits = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full py-32 md:py-40 bg-background border-b-2 border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Launch Benefits
              </span>
            </div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
            >
              The Founding Partner Advantage
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              {`Our launch program is a true partnership. We're offering exclusive
              benefits to a limited number of brands ready to lead with us.`}
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map((benefit, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="h-full bg-background p-10 lg:p-12 border-r border-b border-border last:border-r-0 group hover:bg-card/30 transition-colors duration-200">
                  <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-8">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-4">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LaunchPartnerBenefits;
