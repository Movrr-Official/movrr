"use client";

import { motion } from "framer-motion";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { BlogCopy } from "@/locales/types";

export function BlogGrid() {
  const posts = usePageCopy<BlogCopy>().posts.filter(
    (post) => post.href && post.href !== "#",
  );
  if (posts.length === 0) return null;

  return (
    <section className="bg-movrr-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.href}
              href={post.href!}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: (index % 3) * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col border-t border-movrr-text-inverse/15 pt-6 transition-opacity duration-200 hover:opacity-70"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-inverse/55">
                  {post.category}
                </span>
                <span className="text-[0.62rem] text-movrr-text-inverse/50">
                  {post.readTime}
                </span>
              </div>
              <h3 className="mb-3 flex-1 text-sm font-semibold leading-snug tracking-[-0.01em] text-movrr-text-inverse">
                {post.title}
              </h3>
              <p className="mb-5 text-[0.8rem] leading-relaxed text-movrr-text-inverse/65">
                {post.excerpt}
              </p>
              <span className="text-[0.65rem] text-movrr-text-inverse/50">
                {post.date}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
