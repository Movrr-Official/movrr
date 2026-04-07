"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function RewardsImage() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-video w-full overflow-hidden lg:aspect-21/9"
      >
        <Image
          src="/app-preview-01.png"
          alt="Cyclist earning rewards through verified movement"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-backdrop/20 via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
