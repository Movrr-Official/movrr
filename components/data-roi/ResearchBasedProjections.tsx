"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  TrendingUp,
  Eye,
  ExternalLink,
  FileText,
} from "lucide-react";
import { DataSourcesModal } from "./DataSourcesModal";

export function ResearchBasedProjections() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const researchSources = [
    {
      source: "CBS Netherlands",
      finding:
        "Over 2.3 million daily cycling trips in major Dutch cities, providing a massive potential audience.",
      credibility: "Official Government Data",
      icon: <BarChart className="h-5 w-5 text-blue-600" />,
    },
    {
      source: "Outdoor Advertising Association",
      finding:
        "The outdoor advertising market in the Netherlands is valued at over €2.1 billion annually.",
      credibility: "Industry Association",
      icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
    },
    {
      source: "Urban Mobility Institute",
      finding:
        "Mobile advertising, like that on bicycles, can achieve significantly higher brand recall than static billboards.",
      credibility: "Academic Research",
      icon: <Eye className="h-5 w-5 text-orange-600" />,
    },
  ];

  const marketProjections = [
    {
      metric: "Total Addressable Market",
      value: "€84M",
      description:
        "Targeting 4% of the outdoor ad budget (conservative estimate)",
      timeframe: "By 2027",
    },
    {
      metric: "Launch Cities Coverage",
      value: "2-5 cities",
      description: "The Hague, Rotterdam, then Amsterdam, Utrecht, Eindhoven",
      timeframe: "2024-2025",
    },
    {
      metric: "Cyclist Network Goal",
      value: "1,000+",
      description: "Active cyclists across all launch cities",
      timeframe: "End of 2024",
    },
    {
      metric: "Brand Partner Goal",
      value: "50+",
      description: "Companies running regular campaigns",
      timeframe: "End of 2025",
    },
  ];

  return (
    <>
      <section className="w-full bg-background py-32 md:py-40 border-t-2 border-border">
        <div className="container max-w-[1400px] xl:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Research-Backed Projections
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                The Data Behind Our Vision
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {`Our projections aren't just optimistic guesses—they're based on
                extensive secondary research into Dutch cycling culture,
                advertising effectiveness, and market dynamics.`}
              </p>
            </motion.div>

            {/* Research Sources - OUTFRONT style */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-center mb-12">
                Grounded in Market Research
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
                {researchSources.map((research, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-none rounded-none bg-background p-8 hover:bg-card/50 transition-colors duration-200">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 border-2 border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0">
                            {research.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <h4 className="font-black text-lg">{research.source}</h4>
                              <Badge variant="outline" className="text-xs border-2 border-border rounded-none">
                                {research.credibility}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {research.finding}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Market Projections */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                Our Conservative Market Goals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketProjections.map((projection, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center h-full">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {projection.value}
                        </div>
                        <h4 className="font-medium mb-2">
                          {projection.metric}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {projection.description}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {projection.timeframe}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Methodology Transparency - OUTFRONT style */}
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-none">
              <CardHeader className="border-b-2 border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-blue-300 bg-blue-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-black">
                    Research Methodology & Transparency
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div>
                  <h4 className="text-lg font-black mb-4">
                    Our Approach to Projections
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We rely on credible, publicly available third-party data to
                    inform our business model and market projections. Our
                    methodology involves analyzing trends from sources like
                    official government statistics, reputable industry
                    associations, and academic studies on urban mobility and
                    advertising. We are committed to transparency and will
                    continuously update our models as we gather primary data
                    post-launch.
                  </p>
                </div>

                <div className="bg-white/50 p-6 border-2 border-blue-200">
                  <p className="text-base text-blue-800 mb-4 leading-relaxed">
                    <strong className="font-black">Conservative Approach:</strong> Our projections use
                    the lower end of research findings and assume slower
                    adoption rates to avoid overpromising to early partners.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-700 border-2 border-blue-300 bg-transparent rounded-none uppercase tracking-[0.05em] font-bold"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Data Sources
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <DataSourcesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
