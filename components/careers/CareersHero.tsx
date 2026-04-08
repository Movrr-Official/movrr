"use client";

import { motion } from "framer-motion";

export function CareersHero() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas pb-20 pt-44 lg:pb-24 lg:pt-52">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,5.5vw,6rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-brand"
          >
            We're building the platform
            <br />
            <span className="text-movrr-text-brand/35">
              cities move on.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs pb-2 text-sm leading-relaxed text-movrr-text-brand/45 lg:text-right"
          >
            MOVRR is early — which means the decisions made now shape what
            this becomes. We're looking for people who want to build something
            that lasts, not just ship.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
