// ATS Integration utilities
// This file handles integration with various Applicant Tracking Systems

export interface ATSProvider {
  name: string;
  baseUrl: string;
  apiKey?: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  posted: string;
  atsUrl?: string;
  atsId?: string;
}

// Common ATS providers
export const ATS_PROVIDERS = {
  LEVER: {
    name: "Lever",
    baseUrl: "https://api.lever.co/v1",
  },
  GREENHOUSE: {
    name: "Greenhouse",
    baseUrl: "https://harvest.greenhouse.io/v1",
  },
  WORKDAY: {
    name: "Workday",
    baseUrl: "https://wd2-impl-services1.workday.com",
  },
  BAMBOOHR: {
    name: "BambooHR",
    baseUrl: "https://api.bamboohr.com/api/gateway.php",
  },
} as const;

// Lever integration functions
export class LeverIntegration {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = ATS_PROVIDERS.LEVER.baseUrl;
  }

  async getJobs(): Promise<JobPosting[]> {
    try {
      const response = await fetch(`${this.baseUrl}/postings`, {
        headers: {
          Authorization: `Basic ${Buffer.from(this.apiKey + ":").toString("base64")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Lever API error: ${response.status}`);
      }

      const data = await response.json();

      return data.data.map(
        (posting: {
          id: string;
          text: string;
          categories: {
            department: string;
            location: string;
            commitment: string;
          };
          content: {
            description: string;
            lists: { text: string; content: string[] }[];
          };
          createdAt: string;
          hostedUrl: string;
        }) => ({
          id: posting.id,
          title: posting.text,
          department: posting.categories.department || "General",
          location: posting.categories.location || "Remote",
          type: posting.categories.commitment || "Full-time",
          description: posting.content.description || "",
          requirements: this.parseRequirements(posting.content.lists),
          posted: posting.createdAt,
          atsUrl: posting.hostedUrl,
          atsId: posting.id,
        })
      );
    } catch (error) {
      console.error("Error fetching jobs from Lever:", error);
      return [];
    }
  }

  private parseRequirements(
    lists: { text: string; content: string[] }[]
  ): string[] {
    if (!lists) return [];

    const requirementsList = lists.find(
      (list) =>
        list.text.toLowerCase().includes("requirement") ||
        list.text.toLowerCase().includes("qualification")
    );

    return requirementsList?.content || [];
  }
}

// Greenhouse integration functions
export class GreenhouseIntegration {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = ATS_PROVIDERS.GREENHOUSE.baseUrl;
  }

  async getJobs(): Promise<JobPosting[]> {
    try {
      const response = await fetch(`${this.baseUrl}/jobs`, {
        headers: {
          Authorization: `Basic ${Buffer.from(this.apiKey + ":").toString("base64")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Greenhouse API error: ${response.status}`);
      }

      const jobs = await response.json();

      return jobs.map(
        (job: {
          id: string;
          name: string;
          departments: { name: string }[];
          offices: { name: string }[];
          content: string;
          created_at: string;
        }) => ({
          id: job.id.toString(),
          title: job.name,
          department: job.departments[0]?.name || "General",
          location: job.offices[0]?.name || "Remote",
          type: "Full-time", // Greenhouse doesn't always provide this
          description: job.content || "",
          requirements: [], // Would need to parse from content
          posted: job.created_at,
          atsUrl: `https://boards.greenhouse.io/movrr/jobs/${job.id}`,
          atsId: job.id.toString(),
        })
      );
    } catch (error) {
      console.error("Error fetching jobs from Greenhouse:", error);
      return [];
    }
  }
}

// Generic ATS integration manager
export class ATSManager {
  private provider: LeverIntegration | GreenhouseIntegration | null = null;

  constructor(providerName: string, apiKey: string) {
    switch (providerName.toLowerCase()) {
      case "lever":
        this.provider = new LeverIntegration(apiKey);
        break;
      case "greenhouse":
        this.provider = new GreenhouseIntegration(apiKey);
        break;
      default:
        console.warn(`ATS provider ${providerName} not supported`);
    }
  }

  async getJobs(): Promise<JobPosting[]> {
    if (!this.provider) {
      return [];
    }

    return await this.provider.getJobs();
  }
}

// Utility function to get jobs from environment configuration
export async function getJobsFromATS(): Promise<JobPosting[]> {
  const atsProvider = process.env.ATS_PROVIDER;
  const atsApiKey = process.env.ATS_API_KEY;

  if (!atsProvider || !atsApiKey) {
    console.warn("ATS configuration not found, returning empty job list");
    return [];
  }

  const atsManager = new ATSManager(atsProvider, atsApiKey);
  return await atsManager.getJobs();
}

// Application tracking
export interface ApplicationData {
  jobId: string;
  applicantName: string;
  applicantEmail: string;
  resume?: File;
  coverLetter?: string;
  customFields?: Record<string, string>;
}

export async function submitApplication(
  data: ApplicationData
): Promise<boolean> {
  // This would integrate with your chosen ATS to submit applications
  // For now, we'll just log and return success
  console.log("Application submitted:", data);

  // In a real implementation, you would:
  // 1. Upload resume to ATS
  // 2. Submit application data
  // 3. Handle response and errors
  // 4. Send confirmation emails

  return true;
}
