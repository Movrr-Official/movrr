"use client";

import { VelocityScroll } from "@/components/ParallaxText";

export function MovingHeadline() {
  return (
    <section className="w-full bg-primary/10 border-y-2 border-border">
      <VelocityScroll
        defaultVelocity={2}
        numRows={1}
        className="text-primary font-sans uppercase py-12 md:py-16 font-black tracking-[0.15em]"
      >
        Beyond Bike Ads. Move With Intent.
      </VelocityScroll>
    </section>
  );
}
