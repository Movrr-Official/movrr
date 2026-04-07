"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import {
  VerifiedIcon,
  PrivacyIcon,
  SafeIcon,
} from "@/components/icons/MovrrIcons";

const trustPoints = [
  {
    icon: VerifiedIcon,
    title: "Verified participation",
    description: "Every ride, verified. No simulations, no shortcuts.",
  },
  {
    icon: PrivacyIcon,
    title: "Privacy-first design",
    description: "What you ride stays yours. Anonymised by default.",
  },
  {
    icon: SafeIcon,
    title: "Brand-safe placements",
    description: "Every placement reviewed. Your brand, always in context.",
  },
];

export function Safety() {
  return (
    <>
      {/* ── Full-bleed image section ── */}
      <section
        id="safety"
        className="relative min-h-screen overflow-hidden border-t border-movrr-border-soft bg-movrr-bg-muted lg:min-h-[125vh]"
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
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-b from-movrr-bg-backdrop/10 via-transparent to-movrr-bg-backdrop/15" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex min-h-screen flex-col px-6 lg:min-h-[125vh] lg:px-12">
          {/* Heading — centered, top */}
          <div className="mx-auto w-full max-w-3xl pb-20 pt-20 text-center lg:pb-28 lg:pt-28">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.25rem,4.5vw,5.5rem)] font-semibold leading-[0.93] tracking-[-0.04em] text-movrr-text-heading"
            >
              Your brand protected
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-movrr-text-heading/55 lg:text-lg"
            >
              Trust isn't a feature. It's the foundation. Every ride verified,
              every placement reviewed.
            </motion.p>
          </div>

          {/* Pushes card to bottom */}
          <div className="flex-1" />

          {/* Floating card — bottom-left */}
          <div className="pb-12 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-72 lg:w-80"
            >
              <div className="rounded-3xl border border-movrr-text-inverse/15 bg-movrr-bg-overlay-strong/88 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/75">
                    {trustPoints[2].title}
                  </span>
                  <div className="ml-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-movrr-text-inverse/25">
                    <Plus className="h-3 w-3 text-movrr-text-inverse/65" />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-movrr-text-inverse/55">
                  {trustPoints[2].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trust columns — dark panel, three-up ── */}
      <div className="border-t border-movrr-text-inverse/6 bg-movrr-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl pt-14 text-[clamp(2rem,3.2vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse/80 lg:pt-27"
          >
            Built on integrity
          </motion.h2>

          {/* Three columns */}
          <div className="mt-16 grid grid-cols-1 divide-y divide-movrr-text-inverse/8 lg:mt-20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col py-14 lg:py-20 not-first:lg:pl-14 not-last:lg:pr-14"
              >
                {/* Ghost index */}
                <span className="mb-8 text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-inverse/20">
                  0{index + 1}
                </span>

                {/* Green accent line — extends on hover */}
                <div className="mb-9 h-px w-10 bg-movrr-success/40" />

                {/* Title */}
                <h3 className="text-[clamp(1.75rem,2.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-inverse">
                  {point.title}
                </h3>

                {/* Spacer — pushes footer to bottom */}
                <div className="min-h-14 flex-1" />

                {/* Footer: description + icon */}
                <div className="flex items-end justify-between gap-6">
                  <p className="text-base leading-[1.75] text-movrr-text-inverse/55">
                    {point.description}
                  </p>
                  <point.icon
                    className="h-6 w-6 shrink-0 text-movrr-success-soft/45 transition-colors duration-500 group-hover:text-movrr-success-soft"
                    strokeWidth={1.25}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
