"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { AboutCopy } from "@/locales/types";

export function AboutOrigin() {
  const copy = usePageCopy<AboutCopy>().origin;
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
          {copy.titleLine1}
          <br />
          <span className="text-movrr-text-brand/40">{copy.titleLine2}</span>
        </motion.h2>

        {/* Wide editorial paragraph — no columns, no grid */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-[clamp(1.05rem,1.4vw,1.3rem)] leading-[1.8] text-movrr-text-brand/60"
        >
          {copy.body}
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
