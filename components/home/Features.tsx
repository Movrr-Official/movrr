"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Hyper-Local Targeting",
    description:
      "Reach your audience exactly where they live, work, and move. Street by street, neighborhood by neighborhood.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Unmissable Presence",
    description:
      "Cut through the noise with vibrant, eye-level ads carried by real people, creating genuine visibility that sticks.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Campaign Insights",
    description:
      "Access transparent analytics on impressions, engagement, and reach — empowering you to optimize on the fly.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Trusted Rider Network",
    description:
      "Partner with vetted, reliable riders who deliver your message consistently across key urban routes.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section className="relative w-full py-32 md:py-40 bg-background overflow-hidden border-t-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* OUTFRONT-style header - strong typography */}
          <div className="mb-20">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Why Choose Movrr
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight max-w-4xl leading-[1.1] mb-6">
              A better way to build your brand
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Movrr isn&apos;t just advertising; it&apos;s a platform that helps
              brands create genuine connections with communities on the move.
            </p>
          </div>

          {/* OUTFRONT-style capability grid - 4 columns, strong borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-background p-8 md:p-10 border-r border-b border-border last:border-r-0 group hover:bg-card/30 transition-colors duration-200"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
