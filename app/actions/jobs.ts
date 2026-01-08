import { NextResponse } from "next/server";
import { getJobsFromATS } from "@/lib/ats-integration";

// Cache jobs for 1 hour to avoid hitting ATS API too frequently
let jobsCache: any[] = [];
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
    const jobs = await getJobsFromATS();

    // Update cache
    jobsCache = jobs;
    lastFetch = now;

    return NextResponse.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

// Force refresh cache
export async function POST() {
  try {
    const jobs = await getJobsFromATS();
    jobsCache = jobs;
    lastFetch = Date.now();

    return NextResponse.json({
      message: "Jobs cache refreshed",
      jobs,
    });
  } catch (error) {
    console.error("Error refreshing jobs cache:", error);
    return NextResponse.json(
      { error: "Failed to refresh jobs cache" },
      { status: 500 }
    );
  }
}
