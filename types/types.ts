export type CampaignStatus =
  | "ACTIVE"
  | "PAUSED"
  | "COMPLETED"
  | "CANCELLED"
  | string;

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  advertiserId: string;
  impressions: number;
  clicks: number;
  ctr: number;
  advertiser?: string;
  routes?: Array<{ id: string; name: string }>;
  _count?: {
    impressions: number;
    clicks: number;
    conversions: number;
  };
}

export type LanguageKeys = "en" | "nl";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  author: string;
  category?: string;
  content: string;
  featured?: boolean;
  imageUrl: string;
  readTime: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Route {
  id: string;
  name: string;
  description: string;
  status: "ACTIVE" | "DRAFT" | "INACTIVE";
  difficulty: "EASY" | "MEDIUM" | "HARD";
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  benefits: string[];
  requirements: string[];
  responsibilities: string[];
  salaryRange?: string;
  niceToHave?: string[];
  posted: string;
  atsUrl: string;
}
