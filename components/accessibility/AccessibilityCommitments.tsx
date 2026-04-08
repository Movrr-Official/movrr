"use client";

import { motion } from "framer-motion";

const commitments = [
  {
    id: "01",
    title: "Keyboard navigation",
    description:
      "Every page and feature in the platform is fully navigable using only a keyboard. No mouse required — not for browsing, not for completing a ride, not for redeeming rewards.",
  },
  {
    id: "02",
    title: "Screen reader support",
    description:
      "We write semantic HTML and ARIA landmarks throughout. Content order, role labels, and live regions are tested against VoiceOver on macOS and iOS, and NVDA on Windows.",
  },
  {
    id: "03",
    title: "Colour contrast",
    description:
      "All text elements meet WCAG AA minimum contrast ratios. Informational UI — status indicators, reward tiers, campaign states — meets AAA. Contrast is checked at every design review.",
  },
  {
    id: "04",
    title: "Reduced motion",
    description:
      "All animated transitions respect the prefers-reduced-motion media query. Every element with motion has a static fallback that communicates the same content without movement.",
  },
  {
    id: "05",
    title: "Focus management",
    description:
      "Visible focus indicators are present throughout. Modals, drawers, and overlays trap focus correctly. No element on the platform creates a keyboard trap or loses focus on dismissal.",
  },
  {
    id: "06",
    title: "Text alternatives",
    description:
      "Meaningful images carry descriptive alt text. Decorative images are marked as presentational. Charts and data visualisations include text summaries for non-visual users.",
  },
];

export function AccessibilityCommitments() {
  return (
    <section className="bg-movrr-bg-canvas py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Left — pinned label */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35"
            >
              Our commitments
            </motion.p>
          </div>

          {/* Right — commitment rows */}
          <div className="divide-y divide-movrr-border-soft">
            {commitments.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 gap-3 py-10 first:pt-0 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/25 sm:pt-1">
                  {item.id}
                </span>
                <div>
                  <h3 className="mb-3 text-[clamp(1.1rem,1.6vw,1.35rem)] font-semibold leading-tight tracking-[-0.025em] text-movrr-text-brand">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-movrr-text-brand/50">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
