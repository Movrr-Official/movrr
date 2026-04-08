"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="flex min-h-svh flex-col justify-between border-b border-movrr-text-inverse/10 bg-movrr-bg-primary pb-20 pt-44 lg:pb-24 lg:pt-52">
      {/* Whitespace is intentional — absence signals confidence */}
      <div />

      {/* Statement row — h1 left, descriptor right */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
          >
            Built around
            <br />
            <span className="text-movrr-text-inverse/45">the ride.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs text-base leading-relaxed text-movrr-text-inverse/45 lg:mb-2 lg:text-right"
          >
            A platform for riders and the brands
            that move alongside them.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
