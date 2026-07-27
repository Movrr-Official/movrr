"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { RewardsCopy } from "@/locales/types";


export function HowRewardsWork() {
  const copy = usePageCopy<RewardsCopy>().mechanics;
  const mechanics = copy.items;
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20 grid gap-12 lg:mb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
              {copy.titleLine1}
              <br />
              <span className="text-movrr-text-brand/40">
                {copy.titleLine2}
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="self-end text-base leading-relaxed text-movrr-text-brand/55 lg:max-w-sm"
          >
            {copy.description}
          </motion.p>
        </div>

        {/* Full-width mechanics rows — no image */}
        <div className="divide-y divide-movrr-border-soft">
          {mechanics.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-6 py-14 lg:grid-cols-[14rem_1fr_minmax(0,26rem)] lg:items-center lg:gap-14 lg:py-18"
            >
              {/* Number column */}
              <div className="flex items-center gap-5">
                <span className="text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-brand/25">
                  {item.number}
                </span>
                <div className="h-px flex-1 bg-movrr-success/25 lg:hidden" />
              </div>

              {/* Title — large, editorial weight */}
              <h3 className="text-[clamp(1.75rem,3vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-movrr-text-brand">
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
