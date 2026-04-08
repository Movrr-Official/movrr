"use client";

import { motion } from "framer-motion";

export function AccessibilityContact() {
  return (
    <section className="bg-movrr-bg-primary py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:divide-x lg:divide-movrr-text-inverse/10">

          {/* Left — brand statement */}
          <div className="flex flex-col justify-between gap-12 lg:pr-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/30"
            >
              Found a barrier?
            </motion.p>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 text-base leading-relaxed text-movrr-text-inverse/45"
              >
                If something on the platform creates a barrier — a missing label,
                a navigation issue, a contrast problem — we want to know. Reports
                go directly to the team and are prioritised above routine work.
              </motion.p>

              <motion.a
                href="mailto:accessibility@movrr.nl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(1.4rem,3vw,3rem)] font-semibold leading-tight tracking-[-0.03em] text-movrr-text-inverse transition-opacity duration-300 hover:opacity-55"
              >
                accessibility@movrr.nl
              </motion.a>
            </div>
          </div>

          {/* Right — response commitment */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-end gap-8 lg:pl-20"
          >
            <div className="divide-y divide-movrr-text-inverse/10">
              <div className="pb-8">
                <p className="mb-2 text-sm font-medium text-movrr-text-inverse/70">
                  Response time
                </p>
                <p className="text-sm leading-relaxed text-movrr-text-inverse/40">
                  We acknowledge accessibility reports within 2 business days and
                  provide a resolution timeline within 5.
                </p>
              </div>
              <div className="py-8">
                <p className="mb-2 text-sm font-medium text-movrr-text-inverse/70">
                  Formal complaint
                </p>
                <p className="text-sm leading-relaxed text-movrr-text-inverse/40">
                  If you are not satisfied with our response, you may contact the
                  Irish Human Rights and Equality Commission at{" "}
                  <a
                    href="https://www.ihrec.ie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-movrr-text-inverse/60 underline underline-offset-2 hover:text-movrr-text-inverse"
                  >
                    ihrec.ie
                  </a>
                  .
                </p>
              </div>
              <div className="pt-8">
                <p className="mb-2 text-sm font-medium text-movrr-text-inverse/70">
                  Technical standard
                </p>
                <p className="text-sm leading-relaxed text-movrr-text-inverse/40">
                  We aim for WCAG 2.1 Level AA conformance across the platform and
                  this website. Our audit cycle runs quarterly.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
