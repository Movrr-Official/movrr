"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    id: "01",
    category: "Platform",
    description: "How MOVRR works and who it's for",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Rewards", href: "/rewards" },
      { label: "Brands", href: "/brands" },
      { label: "Riders", href: "/riders" },
    ],
  },
  {
    id: "02",
    category: "Company",
    description: "The team, story, and open roles",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Partners", href: "/partners" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    id: "03",
    category: "Support",
    description: "Help and ways to get in touch",
    links: [
      { label: "Help centre", href: "/help" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: "04",
    category: "Legal",
    description: "Policies, terms, and your rights",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export function SitemapDirectory() {
  return (
    <section className="bg-movrr-bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="divide-y divide-movrr-border-soft">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: sectionIndex * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-[180px_1fr] lg:gap-16"
            >
              {/* Left — section identity */}
              <div className="flex flex-row items-baseline gap-4 lg:flex-col lg:gap-3">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/25">
                  {section.id}
                </span>
                <div>
                  <p className="text-base font-semibold tracking-[-0.02em] text-movrr-text-brand">
                    {section.category}
                  </p>
                  <p className="mt-1 hidden text-xs text-movrr-text-brand/40 lg:block">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Right — link grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: sectionIndex * 0.08 + linkIndex * 0.04,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 py-2.5 text-sm font-medium text-movrr-text-brand/55 transition-all duration-200 hover:text-movrr-text-brand"
                    >
                      <span className="h-px w-3 flex-shrink-0 bg-movrr-text-brand/20 transition-all duration-300 group-hover:w-4 group-hover:bg-movrr-text-brand/50" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
