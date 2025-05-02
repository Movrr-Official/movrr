export type LanguageKeys = "en" | "nl";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  author: string;
  category?: string;
  content: string;
  imageUrl: string;
  readTime: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
