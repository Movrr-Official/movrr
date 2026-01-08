"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Briefcase, Search, ExternalLink } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import ScrollLink from "@/components/ScrollLink";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  posted: string;
  atsUrl?: string; // URL to ATS application page
}

interface JobListingsProps {
  jobs: Job[];
}

export function JobListings({ jobs }: JobListingsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  // Get unique departments and locations for filters
  const departments = Array.from(new Set(jobs.map((job) => job.department)));
  const locations = Array.from(new Set(jobs.map((job) => job.location)));

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === "all" || job.department === departmentFilter;
    const matchesLocation =
      locationFilter === "all" || job.location === locationFilter;

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "full-time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "part-time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "contract":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "internship":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section className="w-full py-32 md:py-40 border-t-2 border-border">
      <div className="container max-w-[1400px] xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block border border-border bg-card px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Open Positions
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Join Movrr, where bikes become powerful, mobile advertising
              platforms reshaping urban media.
            </p>
          </div>

          {/* Search and Filters - OUTFRONT style */}
          <div className="mb-12 space-y-4 md:space-y-0 md:flex md:gap-4 md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 rounded-none border-2"
              />
            </div>

            <Select
              value={departmentFilter}
              onValueChange={setDepartmentFilter}
            >
              <SelectTrigger className="w-full md:w-48 rounded-none border-2">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full md:w-48 rounded-none border-2">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Job Results */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "position" : "positions"} found
            </p>
          </div>

          {/* Job Cards - OUTFRONT style */}
          <div className="space-y-px bg-border">
            {filteredJobs.length === 0 ? (
              <Card className="border-2 border-border rounded-none">
                <CardContent className="p-12 text-center">
                  <div className="text-muted-foreground mb-4">
                    <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">
                      No jobs match your search criteria.
                    </p>
                    <p className="text-sm">
                      Try adjusting your filters or search terms.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none rounded-none bg-background p-8 hover:bg-card/50 transition-colors duration-200">
                    <CardHeader className="p-0 pb-6 border-b-2 border-border">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-black mb-3">
                            {job.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.department}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              Posted {formatDate(job.posted)}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge className={getTypeColor(job.type)}>
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      {job.requirements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">
                            Key Requirements:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements
                              .slice(0, 3)
                              .map((req, reqIndex) => (
                                <Badge
                                  key={reqIndex}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {req}
                                </Badge>
                              ))}
                            {job.requirements.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{job.requirements.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        {job.atsUrl ? (
                          <Link
                            href={job.atsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MagneticButton className="h-12 px-6 text-sm font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]">
                              Apply Now
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </MagneticButton>
                          </Link>
                        ) : (
                          <Link href={`/careers/${job.id}`}>
                            <MagneticButton className="h-12 px-6 text-sm font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]">
                              View Details
                            </MagneticButton>
                          </Link>
                        )}
                        <Link href={`/careers/${job.id}`}>
                          <MagneticButton
                            variant="outline"
                            className="h-12 px-6 text-sm font-bold rounded-none border-2 uppercase tracking-[0.1em]"
                          >
                            Learn More
                          </MagneticButton>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>

          {/* CTA for talent pool - OUTFRONT style */}
          <div className="mt-16 text-center">
            <Card className="border-2 border-border bg-card rounded-none">
              <CardContent className="p-10">
                <h3 className="text-4xl font-black mb-6">
                  {`Don't See the Perfect Role?`}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  {`We're always looking for exceptional talent. Join our talent
                community to stay connected, receive exclusive updates, and be
                the first to hear about new roles tailored to your skills.`}
                </p>
                <ScrollLink to="#talent-waitlist">
                  <MagneticButton
                    size="xl"
                    className="h-14 px-8 text-base font-bold rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em]"
                  >
                    Join Our Talent Community
                  </MagneticButton>
                </ScrollLink>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
