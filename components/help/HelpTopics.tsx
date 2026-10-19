"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { HelpCopy } from "@/locales/types";
import { SectionNavigation } from "@/components/navigation/SectionNavigation";


function Accordion({
  faq,
  index,
  id,
}: {
  faq: { q: string; a: string };
  index: number;
  id: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-movrr-border-soft last:border-0"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-opacity duration-150 hover:opacity-70"
      >
        <span className="text-sm font-medium text-movrr-text-brand">
          {faq.q}
        </span>
        {open ? (
          <Minus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-movrr-text-brand/40" />
        ) : (
          <Plus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-movrr-text-brand/40" />
        )}
      </button>
      <motion.div
        id={id}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        aria-hidden={!open}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 pr-8 text-sm leading-relaxed text-movrr-text-brand/50">
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function HelpTopics({ query }: { query: string }) {
  const copy = usePageCopy<HelpCopy>();
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const topics = normalizedQuery
    ? copy.topics
        .map((topic) => ({
          ...topic,
          faqs: topic.faqs.filter((faq) =>
            `${topic.category} ${faq.q} ${faq.a}`
              .toLocaleLowerCase()
              .includes(normalizedQuery),
          ),
        }))
        .filter((topic) => topic.faqs.length > 0)
    : copy.topics;
  return (
    <section
      id="help-results"
      className="bg-movrr-bg-canvas py-32 lg:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Sticky topic index */}
          <SectionNavigation
            title={copy.topicsLabel}
            items={topics.map((topic) => ({ id: topic.id, label: topic.category }))}
            footer={<>
              {copy.notFound}{" "}
              <a href="mailto:hello@movrr.nl" className="text-movrr-text-brand underline underline-offset-2 transition-colors duration-150 hover:opacity-75">{copy.contact}</a>
            </>}
          />

          {/* FAQ sections */}
          <div className="min-w-0 space-y-20" aria-live="polite">
            {topics.map((topic) => (
              <div
                key={topic.category}
                id={topic.id}
                className="scroll-mt-[calc(var(--movrr-banner-height,0px)+10rem)] lg:scroll-mt-[calc(var(--movrr-banner-height,0px)+7rem)]"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-8 text-[clamp(1.25rem,2vw,1.75rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand"
                >
                  {topic.category}
                </motion.h2>
                <div className="border-t border-movrr-border-soft">
                  {topic.faqs.map((faq, index) => (
                    <Accordion
                      key={faq.q}
                      faq={faq}
                      index={index}
                      id={`${topic.id}-answer-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}

            {topics.length === 0 && (
              <p className="text-base text-movrr-text-brand/70">
                {copy.notFound}{" "}
                <a
                  href="mailto:hello@movrr.nl"
                  className="font-medium text-movrr-text-brand underline underline-offset-2"
                >
                  {copy.contact}
                </a>
              </p>
            )}

            {/* Mobile contact note */}
            <p className="text-sm text-movrr-text-brand/75 lg:hidden">
              {copy.notFound}{" "}
              <a
                href="mailto:hello@movrr.nl"
                className="text-movrr-text-brand underline underline-offset-2 transition-opacity duration-150 hover:opacity-75"
              >
                {copy.contact}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
