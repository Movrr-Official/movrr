"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  UserCheck,
  Bike,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const HowToJoin = () => {
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
      title: "1. Apply Online",
      description:
        "Tell us a bit about yourself, your schedule, and where you ride. The form takes less than 3 minutes.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-primary" />,
      title: "2. Background Check",
      description:
        "We’ll do a basic background check to ensure everyone’s safety. It’s fast, secure, and hassle-free.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Bike className="h-12 w-12 text-primary" />,
      title: "3. Training & Onboarding",
      description:
        "Get safety tips, campaign know-how, and your ad equipment — all included and ready to roll.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "4. Start Earning Rewards",
      description:
        "Choose campaigns that fit your route and start earning Movrr Points. Complete verified rides to accumulate points redeemable for rewards.",
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
            className="mb-20"
        >
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                How to Join
              </span>
            </div>
          <motion.h2
            variants={itemVariants}
              className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
          >
            How to Become a Rider
          </motion.h2>
          <motion.p
            variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            A simple process to join our network of advertising cyclists
          </motion.p>
        </motion.div>

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

export default HowToJoin;
