"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePageCopy } from "@/components/i18n/PageCopyProvider";
import type { BlogCopy } from "@/locales/types";


export function BlogGrid() {
  const posts = usePageCopy<BlogCopy>().posts;
  return (
    <section className="bg-movrr-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: (index % 3) * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col transition-opacity duration-200 hover:opacity-60"
            >
              {/* Thumbnail */}
              <div className="relative mb-5 w-full overflow-hidden aspect-3/2">
                <Image
                  src="/app-preview-01.png"
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Meta */}
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-inverse/35">
                  {post.category}
                </span>
                <span className="text-[0.62rem] text-movrr-text-inverse/25">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 flex-1 text-sm font-semibold leading-snug tracking-[-0.01em] text-movrr-text-inverse">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-5 text-[0.8rem] leading-relaxed text-movrr-text-inverse/40">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] text-movrr-text-inverse/25">{post.date}</span>
                <ArrowRight className="h-3 w-3 text-movrr-text-inverse/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:rotate-45 group-hover:text-movrr-text-inverse/60" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
