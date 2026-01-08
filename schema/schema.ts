import { z } from "zod";

const waypointSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  name: z.string().optional(),
  order: z.number().int().min(0),
});

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(10, "Excerpt must provide a summary"),
  author: z.string().min(1, "Author is required"),
  category: z.string(),
  imageUrl: z.string().url("Invalid URL"),
  content: z.string().min(1, "Content is required"),
});

const campaignStatusSchema = z.object({
  id: z.string(),
  status: z.enum(["DRAFT", "ACTIVE", "PAUSED", "COMPLETED", "CANCELLED"]),
});

const contactSchema = z.object({
  fullName: z.string().min(1, {
    message: "Please enter your name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(1, {
    message: "Please enter your phone number.",
  }),
  company: z.string().min(1, {
    message: "Please enter your company name.",
  }),
  subject: z.string().min(1, {
    message: "Please enter a subject.",
  }),
  message: z.string().min(1, {
    message: "Please enter your message.",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy and terms of service",
  }),
});

const createCampaignSchema = z.object({
  name: z.string().min(1, "Campaign name is required").max(100),
  description: z.string().optional(),
  budget: z.number().min(0.01, "Budget must be greater than 0"),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  routeIds: z.array(z.string()).min(1, "At least one route is required"),
});

const createRouteSchema = z.object({
  name: z.string().min(1, "Route name is required").max(100),
  description: z.string().optional(),
  waypoints: z.array(waypointSchema).min(2, "At least 2 waypoints required"),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("EASY"),
});

const optimizeRouteSchema = z.object({
  id: z.string(),
  preferences: z.object({
    prioritizeDistance: z.boolean().default(false),
    prioritizeTime: z.boolean().default(true),
    avoidTraffic: z.boolean().default(true),
  }),
});

const signInFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

const updateBlogSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  author: z.string().min(1, "Author is required").optional(),
  imageUrl: z.string().url("Invalid URL").optional(),
  content: z.string().min(1, "Content is required").optional(),
});

const updateCampaignSchema = createCampaignSchema.partial().extend({
  id: z.string(),
});

const updateRouteSchema = createRouteSchema.partial().extend({
  id: z.string(),
});

export {
  blogSchema,
  campaignStatusSchema,
  createCampaignSchema,
  createRouteSchema,
  contactSchema,
  optimizeRouteSchema,
  signInFormSchema,
  updateBlogSchema,
  updateCampaignSchema,
  updateRouteSchema,
  waypointSchema,
};

export type CampaignStatusFormData = z.infer<typeof campaignStatusSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type CreateCampaignFormData = z.infer<typeof createCampaignSchema>;
export type CreateRouteFormData = z.infer<typeof createRouteSchema>;
export type OptimizeRouteFormData = z.infer<typeof optimizeRouteSchema>;
export type SignInFormData = z.infer<typeof signInFormSchema>;
export type UpdateCampaignFormData = z.infer<typeof updateCampaignSchema>;
export type UpdateRouteFormData = z.infer<typeof updateRouteSchema>;
