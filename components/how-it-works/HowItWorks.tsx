"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  Users,
  Bike,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
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

  const steps = [
    {
      icon: <ClipboardList className="h-12 w-12 text-primary" />,
      title: "1. Plan Your Campaign",
      description:
        "Target the right audience in the right places at the right time. We work with you to define your goals, identify key locations, and plan your campaign around real movement patterns—not static media zones.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "2. Match with Local Riders",
      description:
        "We connect your brand with trained cyclists who already travel through your ideal neighborhoods. Riders are vetted and equipped to represent your campaign safely and visibly, creating human-scale impact on the streets.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Bike className="h-12 w-12 text-primary" />,
      title: "3. Deploy Your Campaign",
      description:
        "Once the ads are mounted, your brand hits the road. Campaigns can launch in as little as 48 hours, giving you immediate visibility across targeted urban routes—without expensive print delays or static placements.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "4. Track Real-Time Performance",
      description:
        "Access your dashboard to monitor route coverage, impressions by area, and rider movement in real time. See exactly where your campaign is going and how it’s performing—with data that outdoor ads don’t normally provide.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "5. Optimize and Scale",
      description:
        "Use campaign insights to refine your strategy, expand to new areas, or increase visibility where engagement is highest. Movrr makes it easy to test, learn, and grow—on your terms and timeline.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  return (
    <section ref={ref} className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-12 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "" : ""}`}
              >
                {/* Content - OUTFRONT style */}
                <div className={`col-span-12 lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b-2 border-border">
                    <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary uppercase tracking-[0.1em] mb-2">
                        Step {index + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex justify-start">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1.5,
                        }}
                      >
                        <ArrowRight
                          className={`h-6 w-6 text-primary ${index % 2 === 1 ? "rotate-180" : ""}`}
                        />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Image - OUTFRONT style */}
                <div className={`col-span-12 lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative h-64 md:h-80 lg:h-96 border-2 border-border bg-card overflow-hidden">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
