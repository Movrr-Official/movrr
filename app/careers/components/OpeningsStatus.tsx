import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Zap } from "lucide-react";

const OpeningsStatus = ({ hasOpenings }: { hasOpenings: boolean }) => {
  return (
    <section className="w-full py-32 md:py-40 border-t-2 border-border">
      <div className="container max-w-[1400px] xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {hasOpenings ? (
            <>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 border-2 border-primary/30 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.1em]">{`We're Hiring!`}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                {`We're looking for bold thinkers, builders, and creators to help us
                reinvent how brands connect with people in motion — on the street,
                in the city, and beyond.`}
              </p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 bg-card px-3 py-1.5 border-2 border-border mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.1em]">
                  Currently No Open Positions
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                {`We're Not Hiring Right Now, But...`}
              </h2>

              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                {`Movrr is growing fast. While we're not actively hiring at the
                moment, we're always open to hearing from ambitious people who
                love cities, movement, and media innovation. Join our talent pool
                and stay in the loop.`}
              </p>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            <Card className="border-none rounded-none bg-background p-8 text-center">
              <CardContent className="p-0">
                <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-black mb-3">Join Our Talent Network</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hasOpenings
                    ? "Apply now or join our community to hear about future roles."
                    : "Stay connected and be the first to know when new roles open up."}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none rounded-none bg-background p-8 text-center">
              <CardContent className="p-0">
                <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-black mb-3">High-Velocity Team</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {`We're growing fast — expanding across cities and rolling out new
                  initiatives each month.`}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none rounded-none bg-background p-8 text-center">
              <CardContent className="p-0">
                <div className="w-14 h-14 border-2 border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-black mb-3">Make an Impact</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {`Join a team that's creating new opportunities for brands and
                  riders, and changing how cities move.`}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningsStatus;
