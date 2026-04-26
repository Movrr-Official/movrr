import { z } from "zod";

export const waitlistSchema = z.object({
  audience: z.enum(["rider", "brand", "partner"]),
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  city: z.string().max(100).optional(),
  bikeStatus: z.enum(["own", "interested", "planning"]).optional(),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
