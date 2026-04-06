"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function AppPreview() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "108vh" }}
    >
      {/* Full-bleed handlebar image — no overlay, raw */}
      <div className="absolute inset-0">
        <Image
          src="/app-preview-01.png"
          alt="MOVRR app mounted on bike handlebar"
          fill
          quality={88}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Floating route card — centered below the phone in the image */}
      <div className="absolute inset-x-0 bottom-[9%] z-10 flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center bg-[#2c2c2a]/92 backdrop-blur-md rounded-xl overflow-hidden"
          style={{ width: "min(600px, 90vw)" }}
        >
          {/* Green icon block — square, flush left, full card height */}
          <div className="w-20 h-20 bg-[#0f2e1c] flex items-center justify-center shrink-0">
            {/* Pebble/blob outline shape — MOVRR logo */}
            <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
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
                stroke="#4ade80"
                strokeWidth="1.4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Route info */}
          <div className="flex-1 min-w-0 px-5">
            <p className="text-white text-[13px] font-semibold tracking-[0.12em] uppercase leading-none mb-1.5">
              Rotterdam Central Tour
            </p>
            <p className="text-white/45 text-[13px] tracking-[0.08em] font-normal">
              5 KM &nbsp;—&nbsp; 45 MIN
            </p>
          </div>

          {/* Chevron */}
          <div className="pr-5">
            <ChevronDown className="w-5 h-5 text-white/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
