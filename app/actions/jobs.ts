import { NextResponse } from "next/server";
import { getJobsFromATS, type JobPosting } from "@/lib/ats-integration";
import { Job } from "@/types/types";
import { logger } from "@/lib/logger";

// Cache jobs for 1 hour to avoid hitting ATS API too frequently
let jobsCache: Job[] = [];
let lastFetch = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export async function GET() {
  try {
    const now = Date.now();

    // Return cached jobs if cache is still valid
    if (jobsCache.length > 0 && now - lastFetch < CACHE_DURATION) {
      return NextResponse.json({ jobs: jobsCache });
    }

    // Fetch fresh jobs from ATS
    const jobPostings = await getJobsFromATS();

    // Map JobPosting to Job type with required fields
    const jobs: Job[] = jobPostings.map((posting: JobPosting) => ({
      id: posting.id,
      title: posting.title,
      department: posting.department,
      location: posting.location,
      type: posting.type,
      description: posting.description,
      benefits: [], // ATS doesn't provide this, will be empty
      requirements: posting.requirements || [],
      responsibilities: [], // ATS doesn't provide this, will be empty
      posted: posting.posted,
      atsUrl: posting.atsUrl || "", // Provide default empty string if undefined
    }));

    // Update cache
    jobsCache = jobs;
    lastFetch = now;

    return NextResponse.json({ jobs });
  } catch (error) {
    logger.errorWithContext("Error fetching jobs", error, {
      action: "getJobs",
    });
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

// Force refresh cache
export async function POST() {
  try {
    const jobPostings = await getJobsFromATS();

    // Map JobPosting to Job type with required fields
    const jobs: Job[] = jobPostings.map((posting: JobPosting) => ({
      id: posting.id,
      title: posting.title,
      department: posting.department,
      location: posting.location,
      type: posting.type,
      description: posting.description,
      benefits: [], // ATS doesn't provide this, will be empty
      requirements: posting.requirements || [],
      responsibilities: [], // ATS doesn't provide this, will be empty
      posted: posting.posted,
      atsUrl: posting.atsUrl || "", // Provide default empty string if undefined
    }));

    jobsCache = jobs;
    lastFetch = Date.now();

    return NextResponse.json({
      message: "Jobs cache refreshed",
      jobs,
    });
  } catch (error) {
    logger.errorWithContext("Error refreshing jobs cache", error, {
      action: "refreshJobsCache",
    });
    return NextResponse.json(
      { error: "Failed to refresh jobs cache" },
      { status: 500 }
    );
  }
}
