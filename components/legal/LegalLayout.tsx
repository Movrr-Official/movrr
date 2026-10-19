"use client";

import { motion } from "framer-motion";
import { SectionNavigation } from "@/components/navigation/SectionNavigation";
import { useCommonCopy } from "@/components/i18n/CommonCopyProvider";
import { withLocalePath } from "@/lib/i18n/routing";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  summary: string;
  sections: LegalSection[];
  relatedLinks: { label: string; href: string }[];
  effectiveLabel: string;
  contentsLabel: string;
  relatedLabel: string;
}

export function LegalLayout({
  title,
  effectiveDate,
  summary,
  sections,
  relatedLinks,
  effectiveLabel,
  contentsLabel,
  relatedLabel,
}: LegalLayoutProps) {
  const { locale } = useCommonCopy();
  return (
    <div className="min-h-screen bg-movrr-bg-canvas">
      {/* Page header — light, contained, no full-viewport drama */}
      <div className="border-b border-movrr-border-soft bg-movrr-bg-soft">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-40 lg:px-12 lg:pb-16 lg:pt-52">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <motion.h1
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
              >
                {title}
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:text-right"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/75">
                {effectiveLabel}
              </p>
              <p className="mt-1 text-sm font-medium text-movrr-text-brand/75">
                {effectiveDate}
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-movrr-text-brand/75"
          >
            {summary}
          </motion.p>
        </div>
      </div>

      {/* Body — sticky sidebar + prose column */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[220px_1fr] lg:gap-20">
          {/* Sticky sidebar navigation */}
          <SectionNavigation
            title={contentsLabel}
            items={sections.map((section) => ({ id: section.id, label: section.title }))}
            relatedTitle={relatedLabel}
            relatedLinks={relatedLinks.map((link) => ({ ...link, href: withLocalePath(locale, link.href) }))}
          />

          {/* Prose content column */}
          <div className="min-w-0">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-14 scroll-mt-[calc(var(--movrr-banner-height,0px)+10rem)] border-b border-movrr-border-soft pb-14 last:mb-0 last:border-0 last:pb-0 lg:mb-16 lg:scroll-mt-[calc(var(--movrr-banner-height,0px)+7rem)] lg:pb-16"
              >
                <h2 className="mb-6 text-[clamp(1.15rem,1.6vw,1.4rem)] font-semibold leading-tight tracking-[-0.02em] text-movrr-text-brand">
                  {section.title}
                </h2>
                <div className="legal-prose">{section.content}</div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
