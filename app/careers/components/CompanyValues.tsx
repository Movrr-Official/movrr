"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Lightbulb, Target, Heart, Zap } from "lucide-react";

export function CompanyValues() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Outcomes Over Optics",
      description:
        "We prioritize performance and real-world results — for our riders, advertisers, and the cities we operate in.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community-Powered",
      description:
        "Our growth depends on trusted partnerships with riders, local businesses, and cities. We build with them, not just for them.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Creativity at the Core",
      description:
        "We experiment boldly and value diverse thinking. Good ideas can come from anywhere — and often do.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Move Fast, Stay Smart",
      description:
        "We ship quickly, test constantly, and learn faster than the market. Action beats over-planning every time.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Respect Is Radical",
      description:
        "We lead with empathy, assume good intent, and foster an inclusive team where everyone has a voice.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Built to Last",
      description:
        "We're not chasing hype. We’re building long-term value in how cities move, how brands connect, and how riders earn.",
    },
  ];

  return (
    <section className="w-full py-32 md:py-40 border-t-2 border-border">
      <div className="container max-w-[1400px] xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Our Principles
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              These principles shape how we build, collaborate, and grow not just
              as a company, but as a network of riders, brands, and urban spaces
              transforming how cities move and connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none rounded-none bg-background p-8 hover:bg-card/50 transition-colors duration-200">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-black mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
