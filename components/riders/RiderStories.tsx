import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RiderStories = () => {
  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-heading mb-4">
          Rider Stories
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Hear from riders who are already earning with Movrr.
        </p>
      </div>

      <Tabs defaultValue="commuter" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="commuter">Daily Commuter</TabsTrigger>
          <TabsTrigger value="delivery">Delivery Rider</TabsTrigger>
          <TabsTrigger value="enthusiast">Cycling Enthusiast</TabsTrigger>
        </TabsList>
        <TabsContent value="commuter" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Rider portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Michael T.</h3>
                  <p className="text-muted-foreground italic mb-4">
                    {`"I commute 5 miles each way to work every day. With Movrr,
                      I'm making an extra $200 a week just by doing what I was
                      already doing. The setup is lightweight and doesn't affect
                      my ride at all."`}
                  </p>
                  <p className="text-sm">
                    <strong>Location:</strong> Chicago, IL
                    <br />
                    <strong>Riding since:</strong> 2022
                    <br />
                    <strong>Average weekly earnings:</strong> $180-220
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="delivery" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Rider portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sophia R.</h3>
                  <p className="text-muted-foreground italic mb-4">
                    {`"As a food delivery cyclist, I'm already on the road for
                      hours. Adding Movrr advertisements has been a perfect way
                      to double my income without any extra work. It's like
                      getting paid twice for the same ride!"`}
                  </p>
                  <p className="text-sm">
                    <strong>Location:</strong> New York, NY
                    <br />
                    <strong>Riding since:</strong> 2021
                    <br />
                    <strong>Average weekly earnings:</strong> $250-350
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="enthusiast" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Rider portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">David L.</h3>
                  <p className="text-muted-foreground italic mb-4">
                    {`"I ride for exercise and enjoyment on weekends, covering
                      50+ miles around the city. Movrr lets me earn while
                      enjoying my hobby, and I love that I'm promoting
                      sustainable advertising at the same time."`}
                  </p>
                  <p className="text-sm">
                    <strong>Location:</strong> San Francisco, CA
                    <br />
                    <strong>Riding since:</strong> 2023
                    <br />
                    <strong>Average weekly earnings:</strong> $120-180
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default RiderStories;
