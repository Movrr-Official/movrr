import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RiderStories = () => {
  return (
    <section className="w-full py-32 md:py-40 bg-background border-b-2 border-border">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center">
            <div className="inline-block border-b-2 border-primary pb-2 mb-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">
                Rider Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Rider Stories
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Hear from riders who are already earning Verified Impact Rewards with Movrr.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="commuter" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-14 border-2 border-border bg-card mb-0">
                <TabsTrigger
                  value="commuter"
                  className="h-full text-sm font-bold uppercase tracking-[0.1em] data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                >
                  Daily Commuter
                </TabsTrigger>
                <TabsTrigger
                  value="delivery"
                  className="h-full text-sm font-bold uppercase tracking-[0.1em] data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                >
                  Delivery Rider
                </TabsTrigger>
                <TabsTrigger
                  value="enthusiast"
                  className="h-full text-sm font-bold uppercase tracking-[0.1em] data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                >
                  Cycling Enthusiast
                </TabsTrigger>
              </TabsList>

              <TabsContent value="commuter" className="p-0 mt-0">
                <div className="border-2 border-border bg-card p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-32 h-32 border-2 border-border bg-muted/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Rider portrait"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black tracking-tight mb-4">
                        Michael T.
                      </h3>
                      <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                        {`"I commute 5 miles each way to work every day. With Movrr,
                          I'm earning Movrr Points for verified campaign rides just by doing what I was
                          already doing. The setup is lightweight and doesn't affect
                          my ride at all."`}
                      </p>
                      <div className="pt-6 border-t-2 border-border">
                        <p className="text-sm text-foreground">
                          <span className="font-bold">Location:</span> Chicago, IL
                          <br />
                          <span className="font-bold">Riding since:</span> 2022
                          <br />
                          <span className="font-bold">Active campaigns:</span> 3-5 per week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="delivery" className="p-0 mt-0">
                <div className="border-2 border-border bg-card p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-32 h-32 border-2 border-border bg-muted/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Rider portrait"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black tracking-tight mb-4">
                        Sophia R.
                      </h3>
                      <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                        {`"As a food delivery cyclist, I'm already on the road for
                          hours. Adding Movrr advertisements has been a perfect way
                          to earn Verified Impact Rewards without any extra work. I complete verified campaign rides and redeem my Movrr Points for rewards."`}
                      </p>
                      <div className="pt-6 border-t-2 border-border">
                        <p className="text-sm text-foreground">
                          <span className="font-bold">Location:</span> New York, NY
                          <br />
                          <span className="font-bold">Riding since:</span> 2021
                          <br />
                          <span className="font-bold">Active campaigns:</span> 5-7 per week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="enthusiast" className="p-0 mt-0">
                <div className="border-2 border-border bg-card p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-32 h-32 border-2 border-border bg-muted/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Rider portrait"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black tracking-tight mb-4">
                        David L.
                      </h3>
                      <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                        {`"I ride for exercise and enjoyment on weekends, covering
                          50+ miles around the city. Movrr lets me earn Movrr Points while
                          enjoying my hobby, and I love that I'm promoting
                          sustainable advertising at the same time."`}
                      </p>
                      <div className="pt-6 border-t-2 border-border">
                        <p className="text-sm text-foreground">
                          <span className="font-bold">Location:</span> San Francisco, CA
                          <br />
                          <span className="font-bold">Riding since:</span> 2023
                          <br />
                          <span className="font-bold">Active campaigns:</span> 2-3 per week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderStories;
