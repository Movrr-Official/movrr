"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "Rewarded everyday movement",
    category: "Rider rewards",
    description:
      "Ride to earn. Opt in to brand campaigns for more. Your movement, your choice.",
    image: "/urban-cyclist-checking-earnings.png",
  },
  {
    title: "Sponsored community rides",
    category: "Brand activations",
    description:
      "Your brand, in motion. Authentic exposure across active urban networks.",
    image: "/usecase-sponsored-community-rides-aerial.png",
  },
  {
    title: "City and brand initiatives",
    category: "Urban partnerships",
    description:
      "Data-led programs that move communities. Built for cities that want to lead.",
    image: "/usecase-city-cycling-waterfront-dusk.png",
  },
];

export function UseCases() {
  return (
    <section id="rewards" className="bg-movrr-bg-surface py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="max-w-2xl text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-movrr-text-brand">
            One platform.
            <br />
            <span className="text-movrr-text-brand/40">Every use case.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-movrr-text-brand/60">
            Ride to earn. Activate at scale. Shape how a city moves. MOVRR is
            built for all three.
          </p>
        </motion.div>

        {/* Three editorial image cards — portrait aspect, image dominant */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.article
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* Image — tall portrait, full-bleed rounded */}
              <div className="relative aspect-3/4 rounded-3xl overflow-hidden mb-6 border border-movrr-border-soft">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  quality={88}
                  loading="eager"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-backdrop/28 via-transparent to-transparent" />
                {/* Category badge — top left overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md bg-movrr-bg-primary/80 backdrop-blur-sm text-movrr-text-inverse text-xs font-medium tracking-wide uppercase border border-movrr-text-inverse/15">
                    {useCase.category}
                  </span>
                </div>
              </div>

              {/* Text content below image */}
              <h3 className="text-base font-semibold text-movrr-text-brand mb-2 leading-snug">
                {useCase.title}
              </h3>
              <p className="text-sm text-movrr-text-brand/55 leading-relaxed">
                {useCase.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
