"use client";

import { motion } from "framer-motion";

export function SitemapHeader() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas pb-14 pt-44 lg:pb-16 lg:pt-52">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-movrr-text-brand"
          >
            Everything in one place.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pb-1 text-sm text-movrr-text-brand/40 lg:text-right"
          >
            All pages on movrr.nl
          </motion.p>
        </div>
      </div>
    </section>
  );
}
