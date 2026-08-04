"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { RewardsCopy } from "@/locales/types";

export function RewardsImage() {
  const copy = usePageCopy<RewardsCopy>();
  return (
    <section className="bg-movrr-bg-canvas">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-4/3 w-full overflow-hidden sm:aspect-video lg:aspect-21/9"
      >
        <Image
          src="/images/movrr-rewards-phone-bike-square.webp"
          alt={copy.imageAlt}
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-backdrop/20 via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
