"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Bike } from "lucide-react";

const Benefits = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const benefitGroups = [
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Companies",
      headline: "Connect with your target audience where it matters most.",
      benefits: [
        "Reach highly engaged urban audiences on the move",
        "Precisely target geographic areas for maximum impact",
        "Leverage real-time analytics to optimize campaigns",
        "Cost-effective alternative to traditional advertising",
        "Boost brand visibility through innovative mobile ads",
      ],
    },
    {
      icon: <Bike className="h-12 w-12 text-primary" />,
      title: "Riders",
      headline: "Earn flexibly by riding your bike as usual.",
      benefits: [
        "Get paid for your regular cycling routes and routines",
        "Enjoy a flexible schedule with no minimum hours required",
        "Receive free advertising equipment and support",
        "Represent brands that align with your values",
        "Join a growing community and access exclusive perks",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full py-32 md:py-40 bg-background border-b-2 border-border"
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-20"
          >
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Benefits
              </span>
            </div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
            >
              One Platform. Real Impact.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              Movrr connects brands, riders, and cities in a smarter ad
              ecosystem—built for real-world reach, data-driven results, and
              flexible local impact.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border"
          >
            {benefitGroups.map((group, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background p-10 lg:p-12 border-r border-border last:border-r-0 group hover:bg-card/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-4 mb-8 pb-6 border-b-2 border-border">
                  <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>
                {group.headline && (
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {group.headline}
                  </p>
                )}
                <ul className="space-y-4">
                  {group.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                      <span className="text-base text-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
