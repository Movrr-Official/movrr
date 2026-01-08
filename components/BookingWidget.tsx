"use client";

import React from "react";
import { motion } from "framer-motion";
import BookingWidgetForm from "./forms/BookingWidgetForm";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "First-Mover Advantage",
    description:
      "Own the spotlight before your competitors even show up. Shape how this channel evolves.",
  },
  {
    title: "Preferential Pricing",
    description:
      "Lock in our lowest lifetime rates—before we scale nationwide.",
  },
  {
    title: "Featured Case Study",
    description:
      "Work directly with our team to tell your brand’s story in motion—featured on our platform and PR.",
  },
];

export function BookingWidget() {
  return (
    <section
      className="relative w-full bg-primary py-32 md:py-40 overflow-hidden border-t-2 border-border"
      id="get-started"
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
                  Be First. Be Seen. Move With Movrr.
                </h2>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Movrr gives you a front-row seat to urban attention. Tap into
                  a mobile ad network powered by everyday cyclists,
                  geo-optimized routes, and real-world presence that drives
                  local brand impact where your audience actually lives, moves,
                  and shops.
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
              <BookingWidgetForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
