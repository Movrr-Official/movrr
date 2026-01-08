"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calculator, Eye, Route, Sparkles, ArrowRight } from "lucide-react";
import { useLaunchWaitlist } from "@/app/hooks/useLaunchWaitlist";
import { LaunchWaitlistModal } from "@/components/LaunchWaitlistModal";

type CampaignModel = "destination" | "swarm";

const ROICalculator = () => {
  const [campaignModel, setCampaignModel] =
    useState<CampaignModel>("destination");
  const [budget, setBudget] = useState(3000);
  const [duration, setDuration] = useState(4);
  const [ridersPerZone, setRidersPerZone] = useState(2);
  const [fleetSize, setFleetSize] = useState(5);
  const [showResults, setShowResults] = useState(false);
  const { isModalOpen, openModal, closeModal } = useLaunchWaitlist();

  const calculateCampaignMetrics = () => {
    if (campaignModel === "destination") {
      const totalExposure = Math.round(budget * 300);
      const costPerThousand = Math.round((budget / totalExposure) * 1000);
      return {
        totalExposure,
        costPerThousand,
        ridersNeeded: ridersPerZone * 3,
        engagementRate: 8,
        modelName: "Destination Ride",
      };
    } else {
      const totalExposure = Math.round(budget * 450);
      const costPerThousand = Math.round((budget / totalExposure) * 1000);
      return {
        totalExposure,
        costPerThousand,
        ridersNeeded: fleetSize,
        engagementRate: 12,
        modelName: "Swarm Campaign",
      };
    }
  };

  const results = calculateCampaignMetrics();

  useEffect(() => {
    setShowResults(true);
  }, [budget, duration, campaignModel, ridersPerZone, fleetSize]);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("nl-NL").format(num);
  const formatCurrency = (num: number) =>
    new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(num);

  return (
    <div id="roi-calculator" className="max-w-4xl mx-auto">
      <Card className="relative overflow-hidden">
        <CardHeader className="relative">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5 text-primary" />
                Campaign ROI Calculator
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                See projected results for your bicycle advertising campaign
              </p>
            </div>

            <ToggleGroup
              type="single"
              value={campaignModel}
              onValueChange={(value) =>
                setCampaignModel(value as CampaignModel)
              }
              className="w-full sm:w-auto"
            >
              <ToggleGroupItem value="destination" className="px-4">
                <Route className="h-4 w-4 mr-2" />
                Destination
              </ToggleGroupItem>
              <ToggleGroupItem value="swarm" className="px-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Swarm
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Campaign Budget</Label>
              <Slider
                value={[budget]}
                onValueChange={(value) => setBudget(value[0])}
                max={15000}
                min={1000}
                step={250}
              />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">€1,000</span>
                <span className="text-sm font-medium">
                  {formatCurrency(budget)}
                </span>
                <span className="text-sm text-muted-foreground">€15,000</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Campaign Duration: {duration} weeks</Label>
              <Slider
                value={[duration]}
                onValueChange={(value) => setDuration(value[0])}
                max={12}
                min={2}
                step={1}
              />
            </div>

            {campaignModel === "destination" ? (
              <div className="space-y-3">
                <Label>Riders per Zone: {ridersPerZone}</Label>
                <Slider
                  value={[ridersPerZone]}
                  onValueChange={(value) => setRidersPerZone(value[0])}
                  max={5}
                  min={1}
                  step={1}
                />
              </div>
            ) : (
              <div className="space-y-3">
                <Label>Fleet Size: {fleetSize} bikes</Label>
                <Slider
                  value={[fleetSize]}
                  onValueChange={(value) => setFleetSize(value[0])}
                  max={20}
                  min={3}
                  step={1}
                />
              </div>
            )}

            <Button className="w-full" size="lg" onClick={openModal}>
              Get Custom Proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Results Section */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Projected Results
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Total Exposures:
                    </span>
                    <span className="font-bold">
                      {formatNumber(results.totalExposure)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cost per 1K:</span>
                    <span className="font-bold">
                      {formatCurrency(results.costPerThousand)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Engagement Rate:
                    </span>
                    <span className="font-bold">{results.engagementRate}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Ready to launch?</h3>
                <div className="space-y-3">
                  <Button className="w-full" size="lg" onClick={openModal}>
                    Book Strategy Call
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={openModal}
                  >
                    View Pricing Packages
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  No obligation • Expert consultation
                </p>
              </div>

              <div className="text-xs text-muted-foreground text-center">
                Estimates based on historical data. Actual results may vary.
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

      <LaunchWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ROICalculator;
