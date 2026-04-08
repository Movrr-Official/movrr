"use client";

import { motion } from "framer-motion";

const commitments = [
  {
    id: "01",
    title: "Keyboard navigation",
    description:
      "Every page and feature in the platform is fully navigable using only a keyboard. No mouse required. Not for browsing, not for completing a ride, not for redeeming rewards.",
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
      "All text elements meet WCAG AA minimum contrast ratios. Informational UI, including status indicators, reward tiers, and campaign states, meets AAA. Contrast is checked at every design review.",
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35 lg:mb-20"
        >
          Our commitments
        </motion.p>

        {/* Full-width commitment rows — number / title / description */}
        <div className="divide-y divide-movrr-border-soft">
          {commitments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-[auto_0.38fr_1fr] lg:items-baseline lg:gap-0 lg:py-12"
            >
              {/* Ghost number — typographic anchor */}
              <span className="hidden text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-brand/8 lg:block lg:pr-14">
                {item.id}
              </span>

              {/* Title */}
              <h3 className="text-[clamp(1.15rem,1.8vw,1.5rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand lg:pr-12">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-movrr-text-brand/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
