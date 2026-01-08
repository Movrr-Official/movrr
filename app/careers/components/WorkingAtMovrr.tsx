"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Target, Users, Zap } from "lucide-react";

export function WorkingAtMovrr() {
  const visionPoints = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Purpose-Driven Impact",
      description:
        "Your work will directly shape how brands connect with people in motion — empowering riders and reimagining outdoor media in cities.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Define Our Culture",
      description:
        "As one of our first hires, you’ll co-create our culture, values, and ways of working — not just follow them.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Big Role, Real Ownership",
      description:
        "In a small, fast-moving team, you’ll own meaningful work, move quickly, and see your ideas come to life in the real world.",
    },
  ];

  return (
    <section className="w-full py-32 md:py-40 border-t-2 border-border">
      <div className="container max-w-[1400px] xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Our Culture
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Building Something Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {`Movrr is in its early stages, which means you'll have the unique
              opportunity to help build something from the ground up.`}
            </p>
          </div>

          {/* Founder's Vision - OUTFRONT style */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto border-2 border-border rounded-none">
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative w-32 h-32 border-2 border-border overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Alex Morgan, Founder & CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-primary/20 mb-6" />
                    <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                      {`We're at the very beginning of something transformative. I'm
                      looking for passionate individuals who want to shape the
                      future of urban mobility and redefine how brands connect
                      with city audiences. As our first team members, you won't
                      just have a job, you'll create a new way to experience
                      advertising in the urban landscape.`}
                    </p>
                    <div className="border-t-2 border-border pt-4">
                      <div className="font-black text-lg">Micheal Okpara</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        Co-Founder & CEO, Movrr
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What You'll Get - OUTFRONT style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-16">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none rounded-none bg-background p-8 text-center hover:bg-card/50 transition-colors duration-200">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-6">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-black mb-4">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Early Stage Benefits - OUTFRONT style */}
          <div className="text-center">
            <div className="border-2 border-border bg-card p-10 max-w-4xl mx-auto">
              <h3 className="text-4xl font-black mb-8">
                Why Join an Early-Stage Startup?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-black mb-3">
                      🚀 Ground Floor Opportunity
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Join us at the beginning and grow with the company. Your
                      equity and career growth potential are significant.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-black mb-3">🎯 Direct Impact</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Every decision you make will directly influence our success.
                      No bureaucracy, just results.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-black mb-3">🌱 Learn Everything</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Work across multiple areas and develop a diverse skill set
                      that will serve you throughout your career.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-black mb-3">🏗️ Build the Foundation</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Help establish processes, culture, and systems that will scale
                      as we grow into a major player in urban mobility media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
