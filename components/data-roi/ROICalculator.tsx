"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  Eye,
  Users,
  MapPin,
  Info,
  AlertCircle,
  TrendingUp,
  Clock,
  Target,
  Zap,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import { useLaunchWaitlist } from "@/app/hooks/useLaunchWaitlist";
import { LaunchWaitlistModal } from "@/components/LaunchWaitlistModal";

// --- helper functions (hoisted) ----------------------------
function getCityName(cityKey: string) {
  const names = {
    "the-hague": "The Hague",
    rotterdam: "Rotterdam",
    amsterdam: "Amsterdam",
    utrecht: "Utrecht",
    eindhoven: "Eindhoven",
  } as const;
  return names[cityKey as keyof typeof names];
}

function getAreaName(areaKey: string) {
  const names = {
    "city-center": "City Center",
    "business-district": "Business District",
    residential: "Residential Areas",
    university: "University District",
    shopping: "Shopping Areas",
  } as const;
  return names[areaKey as keyof typeof names];
}

// Enhanced visual components
const MetricCard = ({
  icon,
  value,
  label,
  trend,
  color = "primary",
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  color?: string;
}) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className={`bg-${color}/5 border border-${color}/20 rounded-lg p-4 text-center relative overflow-hidden`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent`}
    />
    <div className="relative">
      <div
        className={`w-8 h-8 bg-${color}/10 rounded-full flex items-center justify-center mx-auto mb-2`}
      >
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
      {trend && (
        <div className={`text-xs text-${color} mt-1 font-medium`}>{trend}</div>
      )}
    </div>
  </motion.div>
);

const ProgressBar = ({
  value,
  max,
  label,
  color = "primary",
}: {
  value: number;
  max: number;
  label: string;
  color?: string;
}) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span className="font-medium">{Math.round((value / max) * 100)}%</span>
    </div>
    <div className="w-full bg-muted rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`bg-${color} h-2 rounded-full`}
      />
    </div>
  </div>
);

const ROICalculator = () => {
  const [budget, setBudget] = useState(3000);
  const [duration, setDuration] = useState(4);
  const [city, setCity] = useState("the-hague");
  const [targetArea, setTargetArea] = useState("city-center");
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const { isModalOpen, openModal, closeModal } = useLaunchWaitlist();

  // Enhanced calculation with more detailed metrics
  const calculateCampaignMetrics = () => {
    const cityData = {
      "the-hague": {
        dailyCyclists: 15000,
        population: 550000,
        cyclePaths: 600,
        avgSpeed: 18,
        peakHours: 8,
        businessDensity: 1.2,
      },
      rotterdam: {
        dailyCyclists: 12000,
        population: 650000,
        cyclePaths: 550,
        avgSpeed: 16,
        peakHours: 9,
        businessDensity: 1.1,
      },
      amsterdam: {
        dailyCyclists: 25000,
        population: 900000,
        cyclePaths: 800,
        avgSpeed: 15,
        peakHours: 10,
        businessDensity: 1.4,
      },
      utrecht: {
        dailyCyclists: 18000,
        population: 360000,
        cyclePaths: 400,
        avgSpeed: 17,
        peakHours: 7,
        businessDensity: 1.0,
      },
      eindhoven: {
        dailyCyclists: 8000,
        population: 235000,
        cyclePaths: 300,
        avgSpeed: 19,
        peakHours: 6,
        businessDensity: 0.9,
      },
    };

    const areaMultipliers = {
      "city-center": { exposure: 1.3, cost: 1.1, engagement: 1.2 },
      "business-district": { exposure: 1.1, cost: 1.0, engagement: 1.0 },
      residential: { exposure: 0.8, cost: 0.9, engagement: 0.8 },
      university: { exposure: 1.2, cost: 1.0, engagement: 1.3 },
      shopping: { exposure: 1.4, cost: 1.2, engagement: 1.1 },
    };

    const selectedCity = cityData[city as keyof typeof cityData];
    const areaData =
      areaMultipliers[targetArea as keyof typeof areaMultipliers];

    // More sophisticated calculations
    const costPerRiderPerWeek = 175 * areaData.cost;
    const ridersNeeded = Math.ceil(budget / (duration * costPerRiderPerWeek));

    // Exposure calculations
    const baseExposurePerRider = Math.round(
      selectedCity.dailyCyclists * 0.12 * areaData.exposure
    );
    const totalDailyExposure = baseExposurePerRider * ridersNeeded;
    const totalCampaignExposure = totalDailyExposure * duration * 7;

    // Coverage and reach
    const coverageRadius = Math.round(Math.sqrt(ridersNeeded * 20));
    const estimatedReach = Math.round(
      selectedCity.population * 0.25 * areaData.exposure
    );

    // Engagement metrics
    const engagementRate = 0.08 * areaData.engagement;
    const estimatedEngagements = Math.round(
      totalCampaignExposure * engagementRate
    );

    // Cost efficiency
    const costPerThousandExposures = Math.round(
      (budget / totalCampaignExposure) * 1000
    );
    const costPerEngagement = Math.round(budget / estimatedEngagements);

    // Time-based metrics
    const hoursOfVisibility = duration * 7 * selectedCity.peakHours;
    const kmCovered = Math.round(
      ridersNeeded * duration * 7 * selectedCity.avgSpeed * 2
    ); // 2 trips per day avg

    return {
      ridersNeeded,
      dailyExposure: totalDailyExposure,
      totalExposure: totalCampaignExposure,
      coverageRadius,
      estimatedReach,
      engagementRate: Math.round(engagementRate * 100),
      estimatedEngagements,
      costPerThousandExposures,
      costPerEngagement,
      hoursOfVisibility,
      kmCovered,
      peakHourCoverage: selectedCity.peakHours,
      cityName: getCityName(city),
      areaType: getAreaName(targetArea),
    };
  };

  const results = calculateCampaignMetrics();

  useEffect(() => {
    const timer = setTimeout(() => setShowResults(true), 300);
    return () => clearTimeout(timer);
  }, [budget, duration, city, targetArea]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("nl-NL").format(num);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div id="roi-calculator" className="space-y-8">
      {/* Enhanced Input Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="relative overflow-hidden border-2 border-border rounded-none">
          <CardHeader className="relative border-b-2 border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl font-black">
                Campaign Configuration
              </CardTitle>
            </div>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Configure your campaign parameters to see projected performance
            </p>
            <Badge
              variant="outline"
              className="w-fit bg-amber-50 text-amber-700 border-2 border-amber-200 rounded-none"
            >
              Research-Based Projections
            </Badge>
          </CardHeader>
          <CardContent className="relative space-y-6 p-8">
            {/* Budget Slider with Visual Feedback */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label>Campaign Budget</Label>
                <div className="text-right">
                  <div className="text-lg font-bold">
                    {formatCurrency(budget)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatCurrency(budget / duration)} per week
                  </div>
                </div>
              </div>
              <Slider
                value={[budget]}
                onValueChange={(value) => setBudget(value[0])}
                max={15000}
                min={1000}
                step={250}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>€1,000</span>
                <span>€15,000</span>
              </div>
              <div className="bg-muted/50 rounded p-2 text-xs">
                <strong>Budget Impact:</strong> Higher budgets allow for more
                riders and broader coverage
              </div>
            </div>

            {/* Duration with Visual Timeline */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label>Campaign Duration</Label>
                <div className="text-right">
                  <div className="text-lg font-bold">{duration} weeks</div>
                  <div className="text-xs text-muted-foreground">
                    {duration * 7} days total
                  </div>
                </div>
              </div>
              <Slider
                value={[duration]}
                onValueChange={(value) => setDuration(value[0])}
                max={12}
                min={2}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2 weeks</span>
                <span>12 weeks</span>
              </div>
              {/* Visual timeline */}
              <div className="flex gap-1">
                {Array.from({ length: Math.min(duration, 8) }).map((_, i) => (
                  <div key={i} className="flex-1 h-2 bg-primary/20 rounded" />
                ))}
                {duration > 8 && (
                  <span className="text-xs text-muted-foreground">
                    +{duration - 8}
                  </span>
                )}
              </div>
            </div>

            {/* City Selection with Status Badges */}
            <div className="space-y-2">
              <Label
                htmlFor="city"
                className="text-sm font-bold uppercase tracking-[0.05em]"
              >
                Target City
              </Label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="rounded-none border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="the-hague">
                    <div className="flex items-center justify-between w-full">
                      <span>The Hague</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 bg-green-100 text-green-800"
                      >
                        Launch City
                      </Badge>
                    </div>
                  </SelectItem>
                  <SelectItem value="rotterdam">
                    <div className="flex items-center justify-between w-full">
                      <span>Rotterdam</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 bg-green-100 text-green-800"
                      >
                        Launch City
                      </Badge>
                    </div>
                  </SelectItem>
                  <SelectItem value="amsterdam">
                    <div className="flex items-center justify-between w-full">
                      <span>Amsterdam</span>
                      <Badge variant="outline" className="ml-2">
                        Coming 2024
                      </Badge>
                    </div>
                  </SelectItem>
                  <SelectItem value="utrecht">
                    <div className="flex items-center justify-between w-full">
                      <span>Utrecht</span>
                      <Badge variant="outline" className="ml-2">
                        Coming 2024
                      </Badge>
                    </div>
                  </SelectItem>
                  <SelectItem value="eindhoven">
                    <div className="flex items-center justify-between w-full">
                      <span>Eindhoven</span>
                      <Badge variant="outline" className="ml-2">
                        Coming 2024
                      </Badge>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Target Area with Descriptions */}
            <div className="space-y-2">
              <Label
                htmlFor="targetArea"
                className="text-sm font-bold uppercase tracking-[0.05em]"
              >
                Target Area
              </Label>
              <Select value={targetArea} onValueChange={setTargetArea}>
                <SelectTrigger className="rounded-none border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city-center">
                    <div>
                      <div className="font-medium">City Center</div>
                      <div className="text-xs text-muted-foreground">
                        High visibility, premium locations
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="business-district">
                    <div>
                      <div className="font-medium">Business District</div>
                      <div className="text-xs text-muted-foreground">
                        Professional audience, weekday focus
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="shopping">
                    <div>
                      <div className="font-medium">Shopping Areas</div>
                      <div className="text-xs text-muted-foreground">
                        Consumer-focused, weekend traffic
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="university">
                    <div>
                      <div className="font-medium">University District</div>
                      <div className="text-xs text-muted-foreground">
                        Young demographic, high engagement
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="residential">
                    <div>
                      <div className="font-medium">Residential Areas</div>
                      <div className="text-xs text-muted-foreground">
                        Local community, consistent traffic
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Methodology Note */}
            <div className="bg-blue-50 border-2 border-blue-200 p-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border-2 border-blue-300 bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Info className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-blue-800 mb-2 uppercase tracking-[0.05em]">
                    Research-Based Estimates
                  </p>
                  <p className="text-blue-700 leading-relaxed">
                    Calculations based on CBS cycling data and outdoor
                    advertising benchmarks.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Results Section with Tabs - OUTFRONT style */}
        <Card className="relative overflow-hidden border-2 border-border rounded-none">
          <CardHeader className="relative border-b-2 border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl font-black">
                Campaign Performance Projection
              </CardTitle>
            </div>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Projected performance for {results.cityName} • {results.areaType}
            </p>
            <Badge
              variant="outline"
              className="w-fit bg-amber-50 text-amber-700 border-2 border-amber-200 rounded-none"
            >
              Estimates Only - Not Guaranteed
            </Badge>
          </CardHeader>
          <CardContent className="relative p-8">
            <AnimatePresence mode="wait">
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="coverage">Coverage</TabsTrigger>
                      <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6 mt-6">
                      {/* Key Metrics Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <MetricCard
                          icon={<Users className="h-4 w-4 text-primary" />}
                          value={results.ridersNeeded.toString()}
                          label="Cyclists Needed"
                          trend="Estimated team size"
                        />
                        <MetricCard
                          icon={<Eye className="h-4 w-4 text-green-600" />}
                          value={formatNumber(results.dailyExposure)}
                          label="Daily Exposures"
                          trend="Projected average"
                          color="green"
                        />
                      </div>

                      {/* Total Campaign Impact */}
                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <span className="font-medium">
                            Projected Campaign Impact
                          </span>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">
                              Total Exposures:
                            </span>
                            <span className="font-bold text-xl">
                              {formatNumber(results.totalExposure)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">
                              Estimated Unique Reach:
                            </span>
                            <span className="font-medium">
                              {formatNumber(results.estimatedReach)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">
                              Expected Engagements:
                            </span>
                            <span className="font-medium text-green-600">
                              {formatNumber(results.estimatedEngagements)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Engagement Rate Visualization */}
                      <div className="space-y-3">
                        <ProgressBar
                          value={results.engagementRate}
                          max={15}
                          label={`Projected Engagement Rate: ${results.engagementRate}%`}
                          color="green"
                        />
                        <p className="text-xs text-muted-foreground">
                          Based on research with Dutch cyclists and outdoor
                          advertising benchmarks
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="coverage" className="space-y-6 mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <MetricCard
                          icon={<MapPin className="h-4 w-4 text-blue-600" />}
                          value={`${results.coverageRadius}km²`}
                          label="Coverage Area"
                          trend="Estimated reach"
                          color="blue"
                        />
                        <MetricCard
                          icon={<Clock className="h-4 w-4 text-purple-600" />}
                          value={`${results.hoursOfVisibility}h`}
                          label="Visibility Hours"
                          trend="Total campaign"
                          color="purple"
                        />
                      </div>

                      {/* Visual Coverage Map */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                        <h4 className="font-medium mb-4 flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          Coverage Visualization - {results.cityName}
                        </h4>

                        {/* Simplified Map Representation */}
                        <div className="relative bg-white rounded-lg p-4 border border-blue-200 h-64">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-30 rounded-lg" />

                          {/* City Center */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div
                              className={`w-8 h-8 rounded-full border-4 ${
                                targetArea === "city-center"
                                  ? "bg-red-500 border-red-600"
                                  : "bg-gray-300 border-gray-400"
                              } flex items-center justify-center`}
                            >
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <div className="text-xs font-medium mt-1 text-center">
                              Center
                            </div>
                          </div>

                          {/* Coverage Circles */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {/* Inner circle */}
                            <div className="w-32 h-32 rounded-full border-2 border-blue-400 border-dashed opacity-60 absolute -top-16 -left-16" />
                            {/* Outer circle */}
                            <div className="w-48 h-48 rounded-full border-2 border-blue-300 border-dashed opacity-40 absolute -top-24 -left-24" />
                          </div>

                          {/* Area Markers */}
                          <div className="absolute top-1/4 left-1/4">
                            <div
                              className={`w-6 h-6 rounded-full border-2 ${
                                targetArea === "business-district"
                                  ? "bg-blue-500 border-blue-600"
                                  : "bg-gray-300 border-gray-400"
                              }`}
                            />
                            <div className="text-xs mt-1">Business</div>
                          </div>

                          <div className="absolute top-1/4 right-1/4">
                            <div
                              className={`w-6 h-6 rounded-full border-2 ${
                                targetArea === "shopping"
                                  ? "bg-purple-500 border-purple-600"
                                  : "bg-gray-300 border-gray-400"
                              }`}
                            />
                            <div className="text-xs mt-1">Shopping</div>
                          </div>

                          <div className="absolute bottom-1/4 left-1/3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 ${
                                targetArea === "university"
                                  ? "bg-green-500 border-green-600"
                                  : "bg-gray-300 border-gray-400"
                              }`}
                            />
                            <div className="text-xs mt-1">University</div>
                          </div>

                          <div className="absolute bottom-1/4 right-1/3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 ${
                                targetArea === "residential"
                                  ? "bg-yellow-500 border-yellow-600"
                                  : "bg-gray-300 border-gray-400"
                              }`}
                            />
                            <div className="text-xs mt-1">Residential</div>
                          </div>

                          {/* Cyclist Route Lines */}
                          <svg
                            className="absolute inset-0 w-full h-full"
                            style={{ pointerEvents: "none" }}
                          >
                            <defs>
                              <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="7"
                                refX="9"
                                refY="3.5"
                                orient="auto"
                              >
                                <polygon
                                  points="0 0, 10 3.5, 0 7"
                                  fill="#3b82f6"
                                />
                              </marker>
                            </defs>

                            {/* Route paths */}
                            <path
                              d="M 80 80 Q 160 120 240 80"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray="5,5"
                              markerEnd="url(#arrowhead)"
                              opacity="0.7"
                            />
                            <path
                              d="M 80 180 Q 160 140 240 180"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray="5,5"
                              markerEnd="url(#arrowhead)"
                              opacity="0.7"
                            />
                            <path
                              d="M 120 60 Q 160 160 200 220"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray="5,5"
                              markerEnd="url(#arrowhead)"
                              opacity="0.7"
                            />
                          </svg>

                          {/* Legend */}
                          <div className="absolute bottom-2 left-2 bg-white/90 rounded p-2 text-xs">
                            <div className="flex items-center gap-1 mb-1">
                              <div className="w-3 h-3 rounded-full bg-red-500" />
                              <span>Active Target Area</span>
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                              <div className="w-3 h-1 bg-blue-500" />
                              <span>Projected Routes</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full border-2 border-blue-400 border-dashed" />
                              <span>Coverage Zone</span>
                            </div>
                          </div>

                          {/* Coverage Stats Overlay */}
                          <div className="absolute top-2 right-2 bg-white/90 rounded p-2 text-xs">
                            <div className="font-medium text-blue-800">
                              Projected Coverage
                            </div>
                            <div className="text-blue-600">
                              {results.ridersNeeded} estimated cyclists
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-white/50 rounded p-3">
                            <div className="font-medium text-blue-800">
                              Primary Zone
                            </div>
                            <div className="text-blue-600">
                              {Math.round(results.coverageRadius * 0.6)}km²
                              coverage
                            </div>
                            <div className="text-xs text-blue-500 mt-1">
                              High-frequency routes
                            </div>
                          </div>
                          <div className="bg-white/50 rounded p-3">
                            <div className="font-medium text-blue-800">
                              Extended Zone
                            </div>
                            <div className="text-blue-600">
                              {Math.round(results.coverageRadius * 0.4)}km²
                              coverage
                            </div>
                            <div className="text-xs text-blue-500 mt-1">
                              Occasional routes
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Route Analytics */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4 text-green-600" />
                          Projected Route Analytics
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Distance Covered:</span>
                              <span className="font-medium">
                                {formatNumber(results.kmCovered)} km
                              </span>
                            </div>
                            <div className="w-full bg-white rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: "75%" }}
                              />
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Estimated area coverage
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Peak Hour Coverage:</span>
                              <span className="font-medium">
                                {results.peakHourCoverage}h daily
                              </span>
                            </div>
                            <div className="w-full bg-white rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{
                                  width: `${(results.peakHourCoverage / 12) * 100}%`,
                                }}
                              />
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Optimal visibility hours
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Strategic Advantages */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-medium mb-3">
                          Projected Coverage Advantages
                        </h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">
                                Pedestrian Zone Access
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Reach areas cars cannot
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Dynamic Routing</div>
                              <div className="text-xs text-muted-foreground">
                                Adapt to events & traffic
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">
                                Peak Hour Optimization
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Maximum visibility timing
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">
                                Weather Adaptive
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Coverage adjusts to conditions
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="efficiency" className="space-y-6 mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <MetricCard
                          icon={<Zap className="h-4 w-4 text-yellow-600" />}
                          value={formatCurrency(
                            results.costPerThousandExposures
                          )}
                          label="Cost per 1K Exposures"
                          trend="Projected efficiency"
                          color="yellow"
                        />
                        <MetricCard
                          icon={<Target className="h-4 w-4 text-green-600" />}
                          value={formatCurrency(results.costPerEngagement)}
                          label="Cost per Engagement"
                          trend="Estimated"
                          color="green"
                        />
                      </div>

                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-medium mb-3 text-green-800">
                          vs. Traditional Outdoor Advertising
                        </h4>
                        <div className="space-y-3">
                          <ProgressBar
                            value={60}
                            max={100}
                            label="Projected Cost Efficiency: 40% lower CPM"
                            color="green"
                          />
                          <ProgressBar
                            value={100}
                            max={100}
                            label="Environmental Impact: 100% sustainable"
                            color="green"
                          />
                          <ProgressBar
                            value={85}
                            max={100}
                            label="Cultural Alignment: Perfect fit for NL"
                            color="green"
                          />
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Projected Efficiency Factors
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• No fixed infrastructure costs</li>
                          <li>• Dynamic optimization based on traffic</li>
                          <li>• Higher engagement in cycling culture</li>
                          <li>• Sustainable brand alignment bonus</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Enhanced CTA - OUTFRONT style */}
                  <div className="mt-8 space-y-4">
                    <Button
                      className="w-full h-14 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                      size="lg"
                      onClick={openModal}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Join Launch Waitlist - Get Early Access
                    </Button>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-[0.05em]">
                        Free consultation • No commitment • Launch partner
                        pricing available
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      {/* Transparency & Methodology Section - OUTFRONT style */}
      <Card className="bg-amber-50 border-2 border-amber-200 rounded-none">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border-2 border-amber-300 bg-amber-100 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-amber-600" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-amber-800">
                Methodology & Transparency
              </h3>
              <p className="text-sm text-amber-700">
                These are research-based projections for a new advertising
                medium. Movrr is pre-launch and these represent potential
                outcomes, not guaranteed results. Our calculations use:
              </p>
              <ul className="text-sm text-amber-700 space-y-1 ml-4">
                <li>• CBS official cycling traffic data for Dutch cities</li>
                <li>
                  • Outdoor advertising industry benchmarks and pricing data
                </li>
                <li>• Academic studies on mobile advertising effectiveness</li>
                <li>• Conservative assumptions to avoid overpromising</li>
              </ul>
              <p className="text-sm text-amber-700 font-medium">
                {`As we launch and gather real performance data, we'll
                continuously refine our projections and share actual results
                with our partners. Actual campaign performance will vary based
                on numerous factors.`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <LaunchWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ROICalculator;
