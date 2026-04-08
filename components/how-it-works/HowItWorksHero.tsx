"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HowItWorksHero() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary pb-0 pt-44 lg:pt-56">
      {/* Heading block */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
        >
          Movement
          <br />
          <span className="text-movrr-text-inverse/45">made simple.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-movrr-text-inverse/55"
        >
          Rider or brand — the mechanics are clear, the outcomes are real.
          Here's exactly how MOVRR works.
        </motion.p>
      </div>

      {/* Two-audience navigation strip — flush to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 grid grid-cols-1 border-t border-movrr-text-inverse/10 lg:grid-cols-2 lg:divide-x lg:divide-movrr-text-inverse/10"
      >
        {/* Riders */}
        <Link
          href="/riders"
          className="group flex items-center justify-between px-6 py-10 transition-colors duration-300 hover:bg-movrr-bg-secondary lg:px-12 lg:py-12"
        >
          <div>
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
              Riders
            </p>
            <span className="text-lg font-semibold tracking-[-0.02em] text-movrr-text-inverse">
              For riders
            </span>
          </div>
          <ArrowRight className="h-5 w-5 text-movrr-text-inverse/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-movrr-text-inverse/60" />
        </Link>

        {/* Brands */}
        <Link
          href="/brands"
          className="group flex items-center justify-between border-t border-movrr-text-inverse/10 px-6 py-10 transition-colors duration-300 hover:bg-movrr-bg-secondary lg:border-0 lg:px-12 lg:py-12"
        >
          <div>
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
              Brands
            </p>
            <span className="text-lg font-semibold tracking-[-0.02em] text-movrr-text-inverse">
              For brands
            </span>
          </div>
          <ArrowRight className="h-5 w-5 text-movrr-text-inverse/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-movrr-text-inverse/60" />
        </Link>
      </motion.div>
    </section>
  );
}
