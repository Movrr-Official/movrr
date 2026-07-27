"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import type { HomeCopy } from "@/locales/types";

export function AppPreview({ copy }: { copy: HomeCopy["appPreview"] }) {
  return (
    <section
      aria-label={copy.imageAlt}
      className="relative min-h-[108vh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/movrr-app-preview-handlebar.webp"
          alt={copy.imageAlt}
          fill
          quality={88}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-x-0 bottom-[9%] z-10 flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-[min(600px,90vw)] items-center overflow-hidden rounded-xl bg-movrr-bg-overlay/92 backdrop-blur-md"
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-movrr-bg-ink">
            <svg
              aria-hidden="true"
              viewBox="0 0 36 36"
              className="h-9 w-9 text-movrr-success-soft"
              fill="none"
            >
              <path
                d="M18 6
                   C13 6 8 10 8 16
                   C8 19.5 9.5 22.5 12 24.5
                   C12 24.5 12 27 12 28
                   C14 27 15.5 26 18 26
                   C20.5 26 22 27 24 28
                   C24 27 24 24.5 24 24.5
                   C26.5 22.5 28 19.5 28 16
                   C28 10 23 6 18 6 Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="min-w-0 flex-1 px-5">
            <p className="mb-1.5 text-[13px] font-semibold uppercase leading-none tracking-[0.12em] text-movrr-text-inverse">
              {copy.routeName}
            </p>
            <p className="text-[13px] font-normal tracking-[0.08em] text-movrr-text-inverse/75">
              {copy.routeDetails}
            </p>
          </div>

          <div className="pr-5">
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 text-movrr-text-inverse/70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
