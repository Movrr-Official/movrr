"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Shield, Users, Award } from "lucide-react";

const RiderBenefits = () => {
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

  const benefits = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Earn Verified Impact Rewards",
      description:
        "Complete verified campaign rides, earn Movrr Points, and redeem them for real rewards — all transparently tracked in the app.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Set Your Own Schedule",
      description:
        "Ride whenever it suits you with complete flexibility around your lifestyle.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Choose Your Routes",
      description:
        "Select familiar areas or explore new parts of the city during your rides.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Safety and Support",
      description:
        "Access safety gear, insurance, and dedicated support to ride with confidence.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Join a Community",
      description:
        "Connect with fellow riders and be part of a supportive network of bike enthusiasts.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Represent Trusted Brands",
      description:
        "Carry ads for brands you can be proud of and choose campaigns that fit your style.",
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
            className="grid grid-cols-12 gap-8 lg:gap-12 items-center mb-20"
          >
            {/* Content - OUTFRONT style */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-6"
            >
              <div className="inline-block border-b-2 border-primary pb-2 mb-6">
                <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                  Rider Benefits
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                What&apos;s in It for You as a Movrr Rider?
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Movrr rewards riders based on real, verified campaign impact,
                  not time logged or hours worked. Complete verified campaign
                  rides, earn Movrr Points, and redeem them for rewards.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ride on your own terms, no fixed hours or detours. Every ride
                  is verified. Every reward is traceable. No hidden rules.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We provide training, safety gear, and ongoing support to keep
                  you equipped, protected, and confident on the road.
                </p>
              </div>
            </motion.div>
            {/* Image - OUTFRONT style */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-6"
            >
              <div className="relative h-[500px] border-2 border-border bg-card overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Movrr rider with advertising"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background p-10 lg:p-12 border-r border-b border-border last:border-r-0 group hover:bg-card/30 transition-colors duration-200"
              >
                <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-8">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiderBenefits;
