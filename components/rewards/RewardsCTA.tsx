"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import { useCommonCopy } from "@/components/i18n/CommonCopyProvider";
import type { RewardsCopy } from "@/locales/types";
import { withLocalePath } from "@/lib/i18n/routing";

export function RewardsCTA() {
  const copy = usePageCopy<RewardsCopy>().cta;
  const { locale } = useCommonCopy();
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft py-40 lg:py-56">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
        >
          {copy.titleLine1}
          <br />
          <span className="text-movrr-text-brand/40">{copy.titleLine2}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-sm text-base leading-relaxed text-movrr-text-brand/55"
        >
          {copy.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link
            href={withLocalePath(locale, "/waitlist")}
            className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-brand/25 bg-movrr-bg-primary px-7 text-sm font-semibold text-movrr-text-inverse transition-colors duration-200 hover:bg-movrr-bg-secondary"
          >
            {copy.primary}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
          </Link>
          <Link
            href={withLocalePath(locale, "/how-it-works")}
            className="inline-flex h-12 items-center rounded-xl border border-movrr-text-brand/20 bg-transparent px-7 text-sm font-medium text-movrr-text-brand/70 transition-colors duration-200 hover:bg-movrr-text-brand/5 hover:text-movrr-text-brand"
          >
            {copy.secondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
