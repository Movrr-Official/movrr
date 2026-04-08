"use client";

import { motion } from "framer-motion";

export function AboutOrigin() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand lg:mb-16"
        >
          Movement was
          <br />
          <span className="text-movrr-text-brand/40">always the point.</span>
        </motion.h2>

        {/* Wide editorial paragraph — no columns, no grid */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-[clamp(1.05rem,1.4vw,1.3rem)] leading-[1.8] text-movrr-text-brand/60"
        >
          Cities are full of people on the move. Cyclists cutting through
          traffic, covering urban routes, every day. We saw what advertising
          had missed: an audience already in motion, already present —
          with no real reason to engage with what they were passing.
          MOVRR is built on one insight: reward the journey, and the reach
          takes care of itself. Not by placing ads in front of people.
          By becoming part of the ride itself.
        </motion.p>

        {/* Chapter-break accent line */}
        <div className="mt-20 overflow-hidden lg:mt-24">
          <motion.div
            className="h-px w-full origin-left bg-movrr-success/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

      </div>
    </section>
  );
}
