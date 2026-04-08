"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const assets = [
  {
    label: "Brand logos",
    description: "SVG and PNG, light and dark variants",
    file: "movrr-logos.zip",
  },
  {
    label: "Product screenshots",
    description: "App UI across key flows, high resolution",
    file: "movrr-screenshots.zip",
  },
  {
    label: "Press photography",
    description: "Founders, product, and lifestyle — print ready",
    file: "movrr-photography.zip",
  },
  {
    label: "Brand guidelines",
    description: "Typeface, colour palette, and usage rules",
    file: "movrr-brand-guidelines.pdf",
  },
];

export function PressKit() {
  return (
    <section className="bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/30"
            >
              Press kit
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.75rem,2.8vw,3rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse"
            >
              Everything you need to cover MOVRR.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xs text-sm leading-relaxed text-movrr-text-inverse/45"
            >
              Logos, screenshots, photography, and brand guidelines — ready to use under standard press licence.
            </motion.p>
            <motion.a
              href="mailto:press@movrr.nl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 inline-block text-sm font-medium text-movrr-text-inverse/50 underline underline-offset-2 transition-opacity duration-150 hover:opacity-100"
            >
              Request a briefing → press@movrr.nl
            </motion.a>
          </div>

          {/* Right — download rows */}
          <div className="divide-y divide-movrr-text-inverse/10 border-y border-movrr-text-inverse/10">
            {assets.map((asset, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center justify-between gap-6 py-6 transition-opacity duration-200 hover:opacity-70"
              >
                <div>
                  <p className="text-sm font-semibold text-movrr-text-inverse">{asset.label}</p>
                  <p className="mt-0.5 text-[0.75rem] text-movrr-text-inverse/40">{asset.description}</p>
                </div>
                <Download className="h-4 w-4 shrink-0 text-movrr-text-inverse/30 transition-opacity duration-200 group-hover:text-movrr-text-inverse/70" />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
