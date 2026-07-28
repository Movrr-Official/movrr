"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { BlogCopy } from "@/locales/types";

export function BlogEmpty() {
  const { empty } = usePageCopy<BlogCopy>();

  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-brand">
            {empty.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-movrr-text-brand/65">
            {empty.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
