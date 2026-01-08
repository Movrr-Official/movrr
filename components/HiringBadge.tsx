"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface HiringBadgeProps {
  className?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "default";
}

export function HiringBadge({
  className = "",
  variant = "default",
  size = "sm",
}: HiringBadgeProps) {
  const [isHiring, setIsHiring] = useState(false);
  const [jobCount, setJobCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkHiringStatus();
  }, []);

  const checkHiringStatus = async () => {
    try {
      // Check if we have a manual hiring flag in environment
      const manualHiringFlag = process.env.NEXT_PUBLIC_IS_HIRING === "true";

      if (manualHiringFlag) {
        setIsHiring(true);
        setLoading(false);
        return;
      }

      // Otherwise, check job count from API
      const response = await fetch("/api/jobs");
      if (response.ok) {
        const data = await response.json();
        const activeJobs = data.jobs?.length || 0;
        setJobCount(activeJobs);
        setIsHiring(activeJobs > 0);
      }
    } catch (error) {
      console.error("Error checking hiring status:", error);
      // Fallback to environment variable
      setIsHiring(process.env.NEXT_PUBLIC_IS_HIRING === "true");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !isHiring) {
    return null;
  }

  return (
    <Badge
      variant={variant}
      className={`${className} ${size === "sm" ? "text-xs px-2 py-0.5" : ""} bg-green-500 hover:bg-green-600 text-white border-0 animate-pulse`}
    >
      <Briefcase className={`${size === "sm" ? "h-3 w-3" : "h-4 w-4"} mr-1`} />
      {jobCount > 0
        ? `${jobCount} Open${jobCount === 1 ? "" : ""}`
        : "We're Hiring!"}
    </Badge>
  );
}
