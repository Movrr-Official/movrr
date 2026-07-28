"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { BlogCopy } from "@/locales/types";

export function BlogMasthead() {
  const copy = usePageCopy<BlogCopy>();
  const lead = copy.featured;
  const hasPublishedLead = Boolean(lead.href) && lead.href !== "#";

  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden bg-movrr-bg-primary py-40 lg:py-52">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(184,255,164,0.1),transparent_34%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(4rem,8vw,10rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-movrr-text-inverse"
          >
            {copy.titleLine1}
            <br />
            {copy.titleLine2}
          </motion.h1>

          {hasPublishedLead && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.28,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex max-w-sm flex-col gap-3 pb-1 lg:items-end lg:text-right"
            >
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-inverse/50">
                {lead.category} · {lead.readTime}
              </span>
              <p className="text-sm font-medium leading-snug tracking-[-0.01em] text-movrr-text-inverse/75">
                {lead.title}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
