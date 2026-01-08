import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Zap, Globe, Bike, Building } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Health Comes First",
      description:
        "Comprehensive health coverage, mental wellness support, and wellness stipends — because great work starts with feeling great.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Grow with Us",
      description:
        "A learning budget for courses, books, and conferences. You bring the curiosity — we’ll back your growth.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Remote, Not Distant",
      description:
        "Work where you thrive. We’re remote-first with flexible hours and quarterly offsites to stay connected IRL.",
    },
    {
      icon: <Bike className="h-6 w-6 text-primary" />,
      title: "Ride the Brand",
      description:
        "Get a bike stipend, maintenance credits, and first dibs on branded rider campaigns in your city.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Equity & Ownership",
      description:
        "You’ll own a meaningful piece of Movrr and help shape its trajectory. This is your company too.",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Startup Energy",
      description:
        "Fast-moving. Big-thinking. Zero bureaucracy. Build, iterate, and see your work launch in the real world.",
    },
  ];

  return (
    <>
      <section className="w-full bg-background py-32 md:py-40 border-t-2 border-border">
        <div className="container max-w-[1400px] xl:px-12">
          <div className="mb-16">
            <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Benefits
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Perks That Support Purpose, Growth, and Wellbeing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {`We're building Movrr for the long haul — and that starts with
              investing in the people building it. From flexibility to
              ownership, here's how we take care of our team.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none rounded-none bg-background p-8 hover:bg-card/50 transition-colors duration-200">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-black mb-3">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
