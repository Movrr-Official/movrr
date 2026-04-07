"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "By default", label: "No activation required" },
  { value: "Per kilometre", label: "Tied to verified distance" },
  { value: "Boosted", label: "Opt in to carry a brand, earn more" },
];

export function RewardsHero() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary pb-0 pt-44 lg:pt-56">

      {/* Centered headline block */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35"
          >
            Rewards
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
          >
            Every kilometre
            <br />
            <span className="text-movrr-text-inverse/45">counts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-md text-base leading-relaxed text-movrr-text-inverse/55"
          >
            Ride and earn. Carry a brand to earn more.
            Rewards that reflect the distance you actually cover.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Link
              href="#get-started"
              className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/30 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
            >
              Start earning
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stat strip — flush to section bottom, full-width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 border-t border-movrr-text-inverse/10"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 divide-y divide-movrr-text-inverse/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="py-8 lg:px-10 lg:py-10 lg:first:pl-0 lg:last:pr-0"
              >
                <p className="text-base font-semibold tracking-[-0.01em] text-movrr-text-inverse">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-inverse/30">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
