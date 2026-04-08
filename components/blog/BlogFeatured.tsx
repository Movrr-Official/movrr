"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const featured = {
  category: "Product",
  date: "12 Mar 2025",
  readTime: "6 min read",
  title: "Why movement data is the only honest signal left in urban advertising",
  excerpt:
    "Impression counts, click-through rates, and view-through attribution have all failed the same way: they measure proximity, not participation. We built MOVRR around a different premise.",
  href: "#",
};

const secondary = [
  {
    category: "Cities",
    date: "28 Feb 2025",
    readTime: "4 min read",
    title: "What Dublin taught us about building for cyclists who aren't cyclists",
    href: "#",
  },
  {
    category: "Platform",
    date: "14 Feb 2025",
    readTime: "5 min read",
    title: "How we verify a kilometre — and why the answer isn't GPS alone",
    href: "#",
  },
  {
    category: "Brands",
    date: "31 Jan 2025",
    readTime: "3 min read",
    title: "The brief that finally made sense: reach people while they move",
    href: "#",
  },
];

export function BlogFeatured() {
  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Featured — full-width, image-led */}
        <motion.a
          href={featured.href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group mb-20 block border-b border-movrr-border-soft pb-20 lg:mb-24 lg:pb-24"
        >
          {/* Article image */}
          <div className="relative mb-8 w-full overflow-hidden aspect-video">
            <Image
              src="/app-preview-01.png"
              alt={featured.title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16 lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/35">
                  {featured.category}
                </span>
                <span className="text-[0.65rem] text-movrr-text-brand/25">{featured.date}</span>
                <span className="text-[0.65rem] text-movrr-text-brand/25">{featured.readTime}</span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-movrr-text-brand transition-opacity duration-200 group-hover:opacity-70">
                {featured.title}
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <p className="text-sm leading-relaxed text-movrr-text-brand/45">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-movrr-text-brand/50 transition-all duration-200 group-hover:text-movrr-text-brand">
                Read article
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </motion.a>

        {/* Secondary — 3-column row below */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-movrr-border-soft">
          {secondary.map((post, index) => (
            <motion.a
              key={index}
              href={post.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col gap-4 transition-opacity duration-200 hover:opacity-60 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              {/* Thumbnail */}
              <div className="relative w-full overflow-hidden aspect-3/2">
                <Image
                  src="/app-preview-01.png"
                  alt={post.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/35">
                    {post.category}
                  </span>
                  <span className="text-[0.62rem] text-movrr-text-brand/25">{post.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold leading-snug tracking-[-0.01em] text-movrr-text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 text-[0.7rem] text-movrr-text-brand/30">{post.date}</p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
