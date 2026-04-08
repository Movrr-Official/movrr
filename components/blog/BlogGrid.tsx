"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Community",
    date: "17 Jan 2025",
    readTime: "4 min read",
    title: "The riders who asked: what if the route itself paid you?",
    excerpt:
      "Early access riders shaped the community rides feature more than any product doc. Here's what we learned from them.",
  },
  {
    category: "Platform",
    date: "9 Jan 2025",
    readTime: "5 min read",
    title: "Building a reward system that can't be gamed",
    excerpt:
      "Verifying movement sounds simple. Making it resistant to manipulation — without punishing legitimate riders — took longer than we expected.",
  },
  {
    category: "Brands",
    date: "22 Dec 2024",
    readTime: "3 min read",
    title: "Why we price on verified reach, not estimated reach",
    excerpt:
      "Most ad platforms sell promises. We sell proof. The distinction changes how campaigns are structured, priced, and measured.",
  },
  {
    category: "Cities",
    date: "10 Dec 2024",
    readTime: "4 min read",
    title: "Urban mobility isn't one thing — and our platform has to reflect that",
    excerpt:
      "Bikes, e-scooters, walking. Every city has a different mix. Building a single verification layer for all of them forced us to think differently.",
  },
  {
    category: "Product",
    date: "27 Nov 2024",
    readTime: "6 min read",
    title: "The infrastructure decisions we made early that we're glad we made",
    excerpt:
      "Some architectural choices are boring to explain and expensive to undo. Here are the ones we locked in before launch.",
  },
  {
    category: "Community",
    date: "14 Nov 2024",
    readTime: "3 min read",
    title: "Approved riders: who they are and what they do",
    excerpt:
      "Community rides need organisers. We built an application process rather than an algorithm. Here's why.",
  },
];

export function BlogGrid() {
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
                <ArrowRight className="h-3 w-3 text-movrr-text-inverse/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-movrr-text-inverse/60" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
