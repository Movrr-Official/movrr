"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const metrics = [
  {
    value: "400K — 1.2M",
    label: "Verified monthly reach",
    description: "Potential verified impressions across active rider networks.",
  },
  {
    value: "FROM €3.50",
    label: "Per 1,000 verified views",
    description: "Efficient exposure. Authentic engagement. Nothing inflated.",
  },
  {
    value: "UNIQUE REACH",
    label: "High-intent urban exposure",
    description: "Audiences in motion, not scrolling. Daily, urban, real.",
  },
];

export function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="bg-movrr-bg-surface py-32 lg:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(2.5rem,4vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-brand">
            Projected
            <br />
            <span className="text-movrr-text-brand/40">campaign impact.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-movrr-text-brand/55">
            The scale of movement-based campaigns. Estimated reach across active
            urban networks.
          </p>
        </motion.div>

        {/* Two-col: image left, stacked cards right */}
        <div className="grid min-h-[70vh] items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
          {/* Left — parallax image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-movrr-border-soft transition-colors duration-500 hover:border-movrr-success/30"
          >
            {/* Parallax inner — scaled up to hide edge movement */}
            <motion.div
              className="absolute inset-0 scale-[1.15]"
              style={{ y: imageY }}
            >
              <Image
                src="/metrics-bike-tire.png"
                alt="MOVRR branded bicycle"
                fill
                quality={88}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            {/* Cinematic gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-backdrop/25 via-transparent to-transparent" />
          </motion.div>

          {/* Right — 3 stacked metric cards */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-1 flex-col justify-between rounded-3xl border border-movrr-text-inverse/10 bg-movrr-bg-card-dark px-8 py-8 transition-colors duration-500 hover:border-movrr-success/20 hover:bg-movrr-bg-tertiary lg:px-9 lg:py-9"
              >
                <div>
                  <p className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-movrr-success-soft lg:text-[2.4rem]">
                    {metric.value}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-movrr-success-soft/55">
                    {metric.label}
                  </p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-movrr-success-soft/40">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
