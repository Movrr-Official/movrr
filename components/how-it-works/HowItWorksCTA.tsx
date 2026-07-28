"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import { useCommonCopy } from "@/components/i18n/CommonCopyProvider";
import type { HowItWorksCopy } from "@/locales/types";
import { withLocalePath } from "@/lib/i18n/routing";
import { waitlistHref } from "@/lib/waitlist/prefill";

export function HowItWorksCTA() {
  const copy = usePageCopy<HowItWorksCopy>().cta;
  const { locale } = useCommonCopy();
  return (
    <section className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Two-column CTA */}
        <div className="grid grid-cols-1 gap-px bg-movrr-text-inverse/8 overflow-hidden rounded-3xl lg:grid-cols-2">
          {/* Riders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col bg-movrr-bg-card-dark px-10 py-14 transition-colors duration-500 hover:bg-movrr-bg-tertiary lg:px-14 lg:py-20"
          >
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
              {copy.ridersLabel}
            </p>
            <h3 className="mb-6 text-[clamp(1.75rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-inverse">
              {copy.ridersTitleLine1}
              <br />
              {copy.ridersTitleLine2}
            </h3>
            <p className="mb-10 max-w-xs text-base leading-relaxed text-movrr-text-inverse/45">
              {copy.ridersBody}
            </p>
            <div className="mt-auto">
              <Link
                href={waitlistHref(locale, "rider")}
                className="group/btn inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/25 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
              >
                {copy.ridersCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:rotate-45" />
              </Link>
            </div>
          </motion.div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex flex-col bg-movrr-bg-card-dark px-10 py-14 transition-colors duration-500 hover:bg-movrr-bg-tertiary lg:px-14 lg:py-20"
          >
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
              {copy.brandsLabel}
            </p>
            <h3 className="mb-6 text-[clamp(1.75rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-inverse">
              {copy.brandsTitleLine1}
              <br />
              {copy.brandsTitleLine2}
            </h3>
            <p className="mb-10 max-w-xs text-base leading-relaxed text-movrr-text-inverse/45">
              {copy.brandsBody}
            </p>
            <div className="mt-auto">
              <Link
                href={withLocalePath(locale, "/contact")}
                className="group/btn inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/25 bg-transparent px-7 text-sm font-semibold text-movrr-text-inverse/80 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
              >
                {copy.brandsCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:rotate-45" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
