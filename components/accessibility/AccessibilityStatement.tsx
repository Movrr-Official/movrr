"use client";

import { motion } from "framer-motion";

export function AccessibilityStatement() {
  return (
    <section className="flex min-h-[72vh] flex-col justify-between border-b border-movrr-text-inverse/10 bg-movrr-bg-primary pb-20 pt-44 lg:pb-24 lg:pt-52">
      <div />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.75rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
          >
            Access is not
            <br />
            <span className="text-movrr-text-inverse/40">an afterthought.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2 lg:mb-2 lg:items-end lg:text-right"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-inverse/30">
              Conformance target
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-movrr-text-inverse/50">
              WCAG 2.1 Level AA. Ongoing. Not a one-time audit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
