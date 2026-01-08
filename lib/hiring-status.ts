// Hiring status management utilities

export interface HiringStatus {
  isHiring: boolean;
  jobCount: number;
  lastUpdated: Date;
}

// Check if company is actively hiring
export async function getHiringStatus(): Promise<HiringStatus> {
  try {
    // First check manual override from environment
    const manualHiringFlag = process.env.NEXT_PUBLIC_IS_HIRING === "true";

    if (manualHiringFlag) {
      return {
        isHiring: true,
        jobCount: 0, // Manual flag doesn't specify count
        lastUpdated: new Date(),
      };
    }

    // Check job count from ATS
    const response = await fetch("/api/jobs");
    if (response.ok) {
      const data = await response.json();
      const jobCount = data.jobs?.length || 0;

      return {
        isHiring: jobCount > 0,
        jobCount,
        lastUpdated: new Date(),
      };
    }

    // Fallback to environment variable
    return {
      isHiring: process.env.NEXT_PUBLIC_IS_HIRING === "true",
      jobCount: 0,
      lastUpdated: new Date(),
    };
  } catch (error) {
    console.error("Error checking hiring status:", error);
    return {
      isHiring: false,
      jobCount: 0,
      lastUpdated: new Date(),
    };
  }
}

// Server-side function to check hiring status
export async function getServerHiringStatus(): Promise<HiringStatus> {
  // This can be used in server components or API routes
  const manualFlag = process.env.NEXT_PUBLIC_IS_HIRING === "true";

  if (manualFlag) {
    return {
      isHiring: true,
      jobCount: 0,
      lastUpdated: new Date(),
    };
  }

  // In a real implementation, you'd check your database or ATS here
  // For now, return false since we don't have active jobs
  return {
    isHiring: false,
    jobCount: 0,
    lastUpdated: new Date(),
  };
}
