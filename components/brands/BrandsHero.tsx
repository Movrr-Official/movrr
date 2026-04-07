"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandsHero() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary pb-0 pt-44 lg:pt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35"
        >
          For brands
        </motion.p>

        {/* Full-width massive headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.5rem,8.5vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-movrr-text-inverse"
        >
          Reach that
          <br />
          <span className="text-movrr-text-inverse/45">moves.</span>
        </motion.h1>

        {/* Description + CTAs — row below headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-sm text-base leading-relaxed text-movrr-text-inverse/55">
            Your brand, carried through the city by cyclists who chose to
            represent it. Verified reach. Authentic exposure.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/30 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
            >
              Talk to sales
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-12 items-center rounded-xl border border-movrr-text-inverse/15 bg-transparent px-7 text-sm font-medium text-movrr-text-inverse/75 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
            >
              How it works
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Divider strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 border-t border-movrr-text-inverse/10"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between py-8">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/25">
              Premium urban reach
            </span>
            <span className="tabular-nums text-[0.65rem] tracking-widest text-movrr-text-inverse/18">
              01
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
