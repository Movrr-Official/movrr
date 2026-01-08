"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  milestones: Milestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  const ref = useRef(null);
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section ref={ref} className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
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
                Roadmap
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            Our Roadmap
          </h2>
          <motion.p
            variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            Our key upcoming goals and milestones as we grow Movrr into a
            leading sustainable advertising network.
          </motion.p>
        </motion.div>

          {/* Timeline Container - OUTFRONT style */}
          <div className="relative max-w-5xl mx-auto">
          {/* Timeline Items */}
          <div className="relative pb-8">
            {/* Continuous Vertical Line - connects all milestones */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute left-[31px] md:left-1/2 w-0.5 bg-border transform md:-translate-x-1/2 z-0"
              style={{ 
                top: '32px',
                bottom: '32px'
              }}
            />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="mb-24 last:mb-0 relative md:flex md:items-start"
              >
                {/* Left Side (even indices) - OUTFRONT style */}
                <motion.div
                  className={cn(
                    "w-full md:w-1/2",
                    index % 2 === 0 ? "md:pr-16 block" : "hidden"
                  )}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:text-right">
                    <div className="text-sm font-bold text-primary uppercase tracking-[0.1em] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>

                {/* Center Dot with connecting line - OUTFRONT style */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  {/* Horizontal connecting line from content to dot */}
                  <div className={cn(
                    "hidden md:block absolute top-1/2 w-16 h-0.5 bg-border -translate-y-1/2",
                    index % 2 === 0 ? "right-full" : "left-full"
                  )} />
                  
                  {/* Timeline Dot */}
                  <motion.div
                    className="w-16 h-16 border-2 border-primary bg-background flex items-center justify-center relative z-20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {/* Inner dot */}
                    <div className="w-8 h-8 border-2 border-primary bg-primary/10" />
                    <span className="absolute text-xs font-black text-primary -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      {milestone.year}
                    </span>
                  </motion.div>
                </div>

                {/* Right Side (odd indices) - OUTFRONT style */}
                <motion.div
                  className={cn(
                    "w-full md:w-1/2",
                    index % 2 === 1 ? "md:pl-16 md:ml-auto block" : "hidden"
                  )}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div>
                    <div className="text-sm font-bold text-primary uppercase tracking-[0.1em] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>

                {/* Mobile-only - OUTFRONT style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="md:hidden w-full pl-12 mt-4"
                >
                  <div>
                    <div className="text-sm font-bold text-primary uppercase tracking-[0.1em] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
