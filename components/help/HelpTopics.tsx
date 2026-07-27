"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { HelpCopy } from "@/locales/types";


function Accordion({
  faq,
  index,
}: {
  faq: { q: string; a: string };
  index: number;
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
        onClick={() => setOpen(!open)}
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 text-sm leading-relaxed text-movrr-text-brand/50">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function HelpTopics() {
  const copy = usePageCopy<HelpCopy>();
  const topics = copy.topics;
  return (
    <section className="bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Sticky topic index */}
          <div className="mb-16 lg:mb-0">
            <nav className="lg:sticky lg:top-28">
              <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35">
                {copy.topicsLabel}
              </p>
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:space-y-0 lg:divide-y lg:divide-movrr-border-soft lg:border-y lg:border-movrr-border-soft">
                {topics.map((topic) => (
                  <li key={topic.category}>
                    <a
                      href={`#${topic.id}`}
                      className="block text-sm text-movrr-text-brand/40 transition-colors duration-150 hover:text-movrr-text-brand lg:py-3.5"
                    >
                      {topic.category}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-10 hidden text-[0.75rem] leading-relaxed text-movrr-text-brand/30 lg:block">
                {copy.notFound}{" "}
                <a
                  href="mailto:hello@movrr.nl"
                  className="text-movrr-text-brand/50 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand"
                >
                  {copy.contact}
                </a>
              </p>
            </nav>
          </div>

          {/* FAQ sections */}
          <div className="space-y-20">
            {topics.map((topic) => (
              <div
                key={topic.category}
                id={topic.id}
                className="scroll-mt-28"
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
                    <Accordion key={index} faq={faq} index={index} />
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile contact note */}
            <p className="text-sm text-movrr-text-brand/40 lg:hidden">
              {copy.notFound}{" "}
              <a
                href="mailto:hello@movrr.nl"
                className="text-movrr-text-brand/60 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand"
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
