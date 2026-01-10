"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { RiderSignupForm } from "@/components/riders/RiderSignupForm";

const benefits = [
  {
    title: "Quick Approval",
    description: "Most applications are processed within 48 hours",
  },
  {
    title: "Free Equipment",
    description: "We provide all the ad mounting gear at no cost to you.",
  },
  {
    title: "Start Immediately",
    description: "Get riding and earning rewards as soon as your gear arrives.",
  },
];

const RiderContact = () => {
  return (
    <section
      id="rider-contact"
      className="relative w-full bg-primary py-32 md:py-40 overflow-hidden border-t-2 border-border"
    >
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - OUTFRONT style */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-block border-b-2 border-white pb-2 mb-6">
                  <span className="text-xs font-bold text-white uppercase tracking-[0.15em]">
                    Get Started
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                  Ready to Start Earning Rewards?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Start earning Verified Impact Rewards by turning your daily bike rides into verified campaign opportunities. Sign up now, and we&apos;ll guide you
                  through the next steps to get set up quickly.
                </p>
              </motion.div>
              <ul className="space-y-6 mt-10">
                {benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 border-2 border-white/30 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black tracking-tight mb-2 text-white">
                        {benefit.title}
                      </h4>
                      <p className="text-white/90 text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Form - OUTFRONT style */}
            <div className="lg:col-span-7">
              <RiderSignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderContact;
