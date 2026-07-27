"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { CareersCopy } from "@/locales/types";


export function CareersRoles() {
  const copy = usePageCopy<CareersCopy>();
  const roles = copy.roles;
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-soft py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-4 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand"
          >
            {copy.rolesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-movrr-text-brand/75"
          >
            {roles.length} {copy.positionsOpen}
          </motion.p>
        </div>

        {/* Role rows — clean list, no cards */}
        <div className="divide-y divide-movrr-border-soft border-y border-movrr-border-soft">
          {roles.map((role, index) => (
            <motion.a
              key={index}
              href="mailto:hello@movrr.nl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group -mx-6 grid grid-cols-1 gap-2 px-6 py-7 transition-colors duration-200 hover:bg-movrr-bg-canvas lg:-mx-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.4fr)_minmax(0,0.7fr)_auto] lg:items-center lg:gap-8 lg:px-12 lg:py-8"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/75">
                {role.department}
              </p>
              <h3 className="text-base font-semibold tracking-[-0.01em] text-movrr-text-brand">
                {role.title}
              </h3>
              <p className="text-sm text-movrr-text-brand/75">
                {role.location}
              </p>
              <ArrowRight className="hidden h-4 w-4 text-movrr-text-brand/25 transition-all duration-200 group-hover:translate-x-1 group-hover:text-movrr-text-brand/60 lg:block" />
            </motion.a>
          ))}
        </div>

        {/* Don't see your role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-sm text-movrr-text-brand/75"
        >
          {copy.openApplication}{" "}
          <a
            href="mailto:hello@movrr.nl"
            className="text-movrr-text-brand underline underline-offset-2 transition-opacity duration-150 hover:opacity-75"
          >
            {copy.openApplicationCta}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
