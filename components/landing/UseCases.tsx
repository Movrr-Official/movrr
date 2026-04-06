"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "Rewarded everyday movement",
    category: "Rider rewards",
    description:
      "Turn your daily rides into earnings. Track verified movement, accumulate points, and redeem with partner brands.",
    image:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sponsored community rides",
    category: "Brand activations",
    description:
      "Launch high-visibility campaigns that engage people in motion with verified exposure and real engagement.",
    image:
      "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=2031&auto=format&fit=crop",
  },
  {
    title: "City and brand initiatives",
    category: "Urban partnerships",
    description:
      "Support sustainable mobility goals with data-driven programs across communities and urban centres.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
  },
];

export function UseCases() {
  return (
    <section
      id="rewards"
      className="bg-movrr-bg-surface py-24 lg:py-32 border-b border-movrr-border-soft"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-movrr-text-brand leading-[1.06] tracking-[-0.02em] max-w-2xl">
            From everyday movement
            <br />
            <span className="text-movrr-text-brand/40">
              to high-impact campaigns.
            </span>
          </h2>
          <p className="mt-6 text-base text-movrr-text-brand/60 leading-relaxed max-w-2xl">
            MOVRR supports individuals earning through movement, brands
            launching visibility campaigns, and cities driving sustainable
            initiatives.
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
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              {/* Image — tall portrait, full-bleed rounded */}
              <div className="relative aspect-3/4 rounded-3xl overflow-hidden mb-6 border border-movrr-border-soft">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  quality={88}
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
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
