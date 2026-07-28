"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { PartnersCopy } from "@/locales/types";

export function PartnersHero() {
  const copy = usePageCopy<PartnersCopy>().hero;
  return (
    <section className="relative flex min-h-[72vh] flex-col justify-center overflow-hidden bg-movrr-bg-primary py-40 lg:py-52">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(184,255,164,0.12),transparent_32%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4rem,7vw,8rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-movrr-text-inverse"
          >
            {copy.titleLine1}
            <br />
            {copy.titleLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs pb-1 text-base leading-relaxed text-movrr-text-inverse/45 lg:text-right"
          >
            {copy.description}
          </motion.p>
        </div>

      </div>

    </section>
  );
}
