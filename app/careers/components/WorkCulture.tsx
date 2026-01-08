import React from "react";

import { Badge } from "@/components/ui/badge";

const WorkCulture = () => {
  const values = [
    "Every decision should reflect our commitment to sustainability",
    "Innovation thrives when diverse perspectives are truly heard",
    "Honest, transparent communication builds lasting trust",
    "Work should create value — for cities, communities, and each other",
  ];

  const workStyle = [
    "Remote-first culture with async-friendly collaboration",
    "Flat hierarchy with shared ownership and open dialogue",
    "Growth mindset baked into every role and project",
    "Balance isn't optional — we prioritize rest and wellbeing",
  ];

  return (
    <section className="w-full bg-muted/50 py-12 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            A Culture That Moves With Purpose
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {`At Movrr, work is more than a job — it’s a chance to shape the
            future of how cities connect. You’ll join a team that values
            creativity, purpose, and people.`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">What We Believe</h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">
                      ✓
                    </Badge>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">How We Work</h3>
              <ul className="space-y-3">
                {workStyle.map((style, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">
                      ✓
                    </Badge>
                    <span>{style}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
