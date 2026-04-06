"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Plus } from "lucide-react";
import Image from "next/image";

const trustPoints = [
  {
    icon: Shield,
    title: "Verified participation",
    description:
      "Every movement is authenticated through multi-layer verification.",
  },
  {
    icon: Lock,
    title: "Privacy-first design",
    description:
      "Movement data is anonymised. Individual tracking stays private.",
  },
  {
    icon: Eye,
    title: "Brand-safe placements",
    description: "Campaign content is reviewed to maintain brand integrity.",
  },
];

export function Safety() {
  return (
    <>
      {/* ── Full-bleed image section ── */}
      <section
        id="safety"
        className="relative min-h-[92vh] lg:min-h-screen overflow-hidden bg-movrr-bg-muted border-t border-movrr-border-soft"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/app-preview-02.png"
            alt="MOVRR app on device"
            fill
            loading="eager"
            fetchPriority="high"
            quality={88}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-movrr-bg-backdrop/10 via-transparent to-movrr-bg-backdrop/15" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col min-h-[92vh] lg:min-h-screen px-6 lg:px-12">
          {/* Heading — centered, top */}
          <div className="text-center pt-18 lg:pt-24 pb-16 lg:pb-24 max-w-3xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-movrr-text-heading leading-[1.03] tracking-[-0.02em]"
            >
              Your brand protected
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 text-base lg:text-lg text-movrr-text-heading/60 leading-relaxed max-w-2xl mx-auto"
            >
              MOVRR is built with trust as a foundation. From verified
              participation to privacy-conscious data handling, we prioritise
              integrity.
            </motion.p>
          </div>

          {/* Pushes card to bottom */}
          <div className="flex-1" />

          {/* Floating card — bottom-left */}
          <div className="pb-10 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-72 lg:w-80"
            >
              <div className="bg-movrr-bg-overlay-strong/88 backdrop-blur-md rounded-3xl p-5 border border-movrr-text-inverse/15">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-movrr-text-inverse/80 text-[10px] font-semibold tracking-widest uppercase">
                    {trustPoints[2].title}
                  </span>
                  <div className="w-5 h-5 rounded-full border border-movrr-text-inverse/30 flex items-center justify-center shrink-0 ml-4">
                    <Plus className="w-3 h-3 text-movrr-text-inverse/70" />
                  </div>
                </div>
                <p className="text-movrr-text-inverse/55 text-sm leading-relaxed">
                  {trustPoints[2].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3 trust cards — below the image, dark green ── */}
      <div className="bg-movrr-bg-soft px-6 lg:px-12 py-14 lg:py-18 max-w-none">
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex min-h-76 flex-col rounded-3xl border border-movrr-text-inverse/10 bg-movrr-bg-primary p-6 lg:min-h-80 lg:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-movrr-text-inverse/10">
                <point.icon className="h-4 w-4 text-movrr-success-soft" />
              </div>
              <div className="mt-auto max-w-68 pt-16 lg:pt-20">
                <h3 className="mb-7 text-[1.05rem] font-medium uppercase leading-snug tracking-[0.02em] text-movrr-text-inverse">
                  {point.title}
                </h3>
                <p className="text-base leading-relaxed text-movrr-text-inverse/60">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
