import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const OurTechnology = () => {
  const features = [
    "Smart route optimization for maximum ad visibility",
    "Real-time tracking for campaign transparency and accountability",
    "Mobile apps that empower riders and campaign managers alike",
    "Hyper-local targeting to reach the right audience in the right place",
  ];

  return (
    <section className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content - OUTFRONT style */}
            <div className="col-span-12 lg:col-span-6">
              <div className="inline-block border-b-2 border-primary pb-2 mb-6">
                <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                  Technology
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                Built for Reach. Designed for Results.
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                From smart routing to real-time analytics, Movrr's platform is built
                to deliver precision, transparency, and impact. Our technology
                empowers brands to target more effectively and gives riders the
                tools to perform and get rewarded.
              </p>

              <ul className="space-y-5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span className="text-lg text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image - OUTFRONT style */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative h-[500px] border-2 border-border bg-card overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Movrr technology platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTechnology;
