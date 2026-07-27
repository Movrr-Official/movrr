"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import { useCommonCopy } from "@/components/i18n/CommonCopyProvider";
import type { AboutCopy } from "@/locales/types";
import { withLocalePath } from "@/lib/i18n/routing";


export function AboutCTA() {
  const copy = usePageCopy<AboutCopy>();
  const { locale } = useCommonCopy();
  const links = copy.ctaLinks;
  return (
    <section className="bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse"
          >
            {copy.ctaTitle}
          </motion.h2>
        </div>

        {/* Full-width link rows — not buttons */}
        <div className="divide-y divide-movrr-text-inverse/10 border-y border-movrr-text-inverse/10">
          {links.map((link, index) => (
            <motion.div
              key={link.audience}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15 + index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={withLocalePath(locale, link.href)}
                className="group -mx-6 flex items-center justify-between px-6 py-8 transition-colors duration-300 hover:bg-movrr-bg-secondary lg:-mx-12 lg:px-12 lg:py-10"
              >
                <div>
                  <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/30">
                    {link.audience}
                  </p>
                  <span className="text-lg font-semibold tracking-[-0.02em] text-movrr-text-inverse">
                    {link.label}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden text-sm text-movrr-text-inverse/35 lg:block">
                    {link.description}
                  </span>
                  <ArrowRight className="h-5 w-5 text-movrr-text-inverse/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-movrr-text-inverse/60" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
