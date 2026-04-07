"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HowItWorksHero() {
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary pb-32 pt-44 lg:pb-44 lg:pt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-24">
          {/* Left — headline */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35"
            >
              How it works
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
            >
              Movement
              <br />
              <span className="text-movrr-text-inverse/45">made simple.</span>
            </motion.h1>
          </div>

          {/* Right — descriptor + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm lg:pb-3"
          >
            <p className="text-base leading-relaxed text-movrr-text-inverse/55">
              Rider or brand — the mechanics are clear, the outcomes are real.
              Here's exactly how MOVRR works.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/riders"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/30 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
              >
                For riders
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/brands"
                className="inline-flex h-12 items-center rounded-xl border border-movrr-text-inverse/15 bg-transparent px-7 text-sm font-medium text-movrr-text-inverse/75 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
              >
                For brands
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Divider with step count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex items-center justify-between border-t border-movrr-text-inverse/10 pt-8 lg:mt-28"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/25">
            Three steps
          </span>
          <span className="tabular-nums text-[0.65rem] tracking-widest text-movrr-text-inverse/18">
            01
          </span>
        </motion.div>
      </div>
    </section>
  );
}
