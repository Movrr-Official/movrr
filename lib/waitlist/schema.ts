import { z } from "zod";

export const waitlistSchema = z.object({
  audience: z.enum(["rider", "brand", "partner"]),
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  city: z.string().min(2, "City is required"), // required — MOVRR is city-by-city
  bikeOwnership: z.enum(["own", "interested", "planning"]).optional(),
  // UTM — full set of standard parameters
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  // Request context
  referrer: z.string().max(500).optional(),
  landing_path: z.string().max(500).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
