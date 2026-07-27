"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { AccessibilityCopy } from "@/locales/types";

export function AccessibilityContact() {
  const copy = usePageCopy<AccessibilityCopy>().contact;
  return (
    <section className="bg-movrr-bg-primary py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Top — label + context */}
        <div className="mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/30"
          >
            {copy.label}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-relaxed text-movrr-text-inverse/45"
          >
            {copy.description}
          </motion.p>
        </div>

        {/* Dominant email */}
        <motion.a
          href="mailto:accessibility@movrr.nl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 block text-[clamp(2rem,5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-movrr-text-inverse transition-opacity duration-300 hover:opacity-55 lg:mb-24"
        >
          accessibility@movrr.nl
        </motion.a>

        {/* Three meta-blocks in a horizontal row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-10 border-t border-movrr-text-inverse/10 pt-12 sm:grid-cols-3 sm:divide-x sm:divide-movrr-text-inverse/10 sm:gap-0"
        >
          <div className="sm:pr-10">
            <p className="mb-2 text-sm font-medium text-movrr-text-inverse/70">
              {copy.responseTitle}
            </p>
            <p className="text-sm leading-relaxed text-movrr-text-inverse/40">
              {copy.responseBody}
            </p>
          </div>
          <div className="sm:px-10">
            <p className="mb-2 text-sm font-medium text-movrr-text-inverse/70">
              {copy.complaintTitle}
            </p>
            <p className="text-sm leading-relaxed text-movrr-text-inverse/40">
              {copy.complaintBeforeLink}{" "}
              <a
                href="https://www.ihrec.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-movrr-text-inverse/60 underline underline-offset-2 hover:text-movrr-text-inverse"
              >
                ihrec.ie
              </a>
              .
            </p>
          </div>
          <div className="sm:pl-10">
            <p className="mb-2 text-sm font-medium text-movrr-text-inverse/70">
              {copy.standardTitle}
            </p>
            <p className="text-sm leading-relaxed text-movrr-text-inverse/40">
              {copy.standardBody}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
