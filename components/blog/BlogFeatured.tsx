"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { BlogCopy } from "@/locales/types";

export function BlogFeatured() {
  const copy = usePageCopy<BlogCopy>();
  const featured = copy.featured;
  const secondary = copy.secondary.filter(
    (post) => post.href && post.href !== "#",
  );
  const hasPublishedFeature = Boolean(featured.href) && featured.href !== "#";

  if (!hasPublishedFeature && secondary.length === 0) return null;

  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {hasPublishedFeature && (
          <motion.a
            href={featured.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group mb-20 block border-b border-movrr-border-soft pb-20 lg:mb-24 lg:pb-24"
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/50">
                    {featured.category}
                  </span>
                  <span className="text-[0.65rem] text-movrr-text-brand/50">
                    {featured.date}
                  </span>
                  <span className="text-[0.65rem] text-movrr-text-brand/50">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-movrr-text-brand transition-opacity duration-200 group-hover:opacity-70">
                  {featured.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-movrr-text-brand/70">
                {featured.excerpt}
              </p>
            </div>
          </motion.a>
        )}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-movrr-border-soft">
          {secondary.map((post, index) => (
            <motion.a
              key={post.href}
              href={post.href!}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col gap-4 transition-opacity duration-200 hover:opacity-70 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/50">
                  {post.category}
                </span>
                <span className="text-[0.62rem] text-movrr-text-brand/50">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-sm font-semibold leading-snug tracking-[-0.01em] text-movrr-text-brand">
                {post.title}
              </h3>
              <p className="text-[0.7rem] text-movrr-text-brand/50">
                {post.date}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
