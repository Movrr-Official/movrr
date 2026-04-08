"use client";

import { motion } from "framer-motion";

export function PartnersContact() {
  return (
    <section className="bg-movrr-bg-primary py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:divide-x lg:divide-movrr-text-inverse/10">

          {/* Left — dominant email CTA */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 max-w-sm text-base leading-relaxed text-movrr-text-inverse/40"
              >
                We're selective about partnerships. We'd rather build fewer, deeper integrations than maintain a long list of shallow ones. If the fit seems right, we'll move quickly.
              </motion.p>
              <motion.a
                href="mailto:partners@movrr.nl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(1.75rem,3.5vw,4rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse transition-opacity duration-200 hover:opacity-55"
              >
                partners@movrr.nl
              </motion.a>
            </div>
          </div>

          {/* Right — process steps */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="divide-y divide-movrr-text-inverse/10 border-y border-movrr-text-inverse/10 lg:pl-16"
          >
            {[
              { step: "01", text: "Send us a note with your platform, use case, and rough scale." },
              { step: "02", text: "We'll respond within two business days. If there's a fit, we'll schedule a 30-minute call." },
              { step: "03", text: "Technical and commercial terms discussed in parallel, with no long procurement cycles." },
              { step: "04", text: "Integration scoped, agreed, and live. We move fast once alignment is there." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 py-7">
                <span className="mt-0.5 shrink-0 text-[0.62rem] font-semibold tabular-nums tracking-widest text-movrr-text-inverse/25">
                  {item.step}
                </span>
                <p className="text-sm leading-relaxed text-movrr-text-inverse/50">{item.text}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
