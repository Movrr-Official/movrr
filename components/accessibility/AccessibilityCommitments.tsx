"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { AccessibilityCopy } from "@/locales/types";


export function AccessibilityCommitments() {
  const copy = usePageCopy<AccessibilityCopy>();
  const commitments = copy.commitments;
  return (
    <section className="bg-movrr-bg-canvas py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35 lg:mb-20"
        >
          {copy.commitmentsLabel}
        </motion.p>

        {/* Full-width commitment rows — number / title / description */}
        <div className="divide-y divide-movrr-border-soft">
          {commitments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-[auto_0.38fr_1fr] lg:items-baseline lg:gap-0 lg:py-12"
            >
              {/* Ghost number — typographic anchor */}
              <span className="hidden text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-brand/8 lg:block lg:pr-14">
                {item.id}
              </span>

              {/* Title */}
              <h3 className="text-[clamp(1.15rem,1.8vw,1.5rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand lg:pr-12">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-movrr-text-brand/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
