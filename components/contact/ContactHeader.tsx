"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { ContactCopy } from "@/locales/types";

export function ContactHeader() {
  const copy = usePageCopy<ContactCopy>().header;
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas pb-20 pt-40 lg:pb-24 lg:pt-52">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4rem,7vw,8rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-movrr-text-brand"
          >
            {copy.titleLine1}
            <br />
            {copy.titleLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs pb-2 text-sm leading-relaxed text-movrr-text-brand/75 lg:text-right"
          >
            {copy.description}
          </motion.p>
        </div>

      </div>
    </section>
  );
}
