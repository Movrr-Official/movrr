import React from "react";

import { WaitlistForm } from "@/components/forms/WaitlistForm";

const WaitingList = () => {
  return (
    <section id="talent-waitlist" className="w-full py-32 md:py-40 border-t-2 border-border">
      <div className="container max-w-[1400px] xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Join Us
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                Be the First to Know
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {`Join Movrr's talent waitlist and get early access to upcoming
                roles, behind-the-scenes updates, and the chance to shape the
                future of mobile media before anyone else.`}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <span className="font-black text-lg">Get a Head Start</span>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {`Be among the first to hear about new roles—before they're
                      shared publicly.`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <span className="font-black text-lg">Stay in the Loop</span>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {`Hear about Movrr's growth, hiring updates, and upcoming
                      initiatives.`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <span className="font-black text-lg">Only the Good Stuff</span>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      No spam. Just relevant roles, stories, and ways to get
                      involved.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <WaitlistForm />
              <p className="text-xs text-muted-foreground text-center mt-4">
                We review waitlist submissions regularly and sometimes create
                roles just for the right person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;
