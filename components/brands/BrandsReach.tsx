"use client";

import { motion } from "framer-motion";
import {
  VerifiedIcon,
  BroadcastIcon,
  UrbanIcon,
} from "@/components/icons/MovrrIcons";

const reach = [
  {
    number: "01",
    icon: UrbanIcon,
    title: "City-scale movement",
    description:
      "Campaigns travel the routes cyclists already take. High-frequency urban exposure: commutes, leisure, errands.",
  },
  {
    number: "02",
    icon: VerifiedIcon,
    title: "Verified impressions",
    description:
      "Every exposure tied to authenticated movement data. No inflated numbers. No estimated reach.",
  },
  {
    number: "03",
    icon: BroadcastIcon,
    title: "Opted-in audiences",
    description:
      "Cyclists choose to carry your brand. That choice signals intent. A more engaged audience than passive display.",
  },
];

export function BrandsReach() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-center justify-between border-b border-movrr-border-soft pb-8 lg:mb-20"
        >
          <h2 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-brand ml-auto">
            Not display.{" "}
            <span className="text-movrr-text-brand/40">Movement.</span>
          </h2>
        </motion.div>

        {/* Large heading rows with ghost icon behind each */}
        <div className="divide-y divide-movrr-border-soft">
          {reach.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden py-14 lg:py-18"
            >
              {/* Ghost icon — reveals after text, drifts in from right */}
              <motion.div
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 lg:right-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 0.06, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.25,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <item.icon
                  className="h-44 w-44 text-movrr-success lg:h-56 lg:w-56"
                  strokeWidth={0.75}
                />
              </motion.div>

              {/* Content */}
              <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center lg:gap-20">
                <div>
                  <span className="mb-5 block text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/20">
                    {item.number}
                  </span>
                  <h3 className="text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-movrr-text-brand/50">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
