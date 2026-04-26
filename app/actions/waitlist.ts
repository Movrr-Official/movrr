"use server";

import { Resend } from "resend";
import { waitlistSchema } from "@/lib/waitlist/schema";
import { WaitlistConfirmation } from "@/emails/waitlist-confirmation";
import { WaitlistNotification } from "@/emails/waitlist-notification";
import type { WaitlistInput } from "@/lib/waitlist/schema";
import { getGeoFromHeaders } from "@/lib/geo";
import { createSupabaseServerClient } from "@/supabase/server";
import { classifyAcquisitionChannel } from "@/lib/attribution";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "MOVRR <hello@movrr.nl>";
const NOTIFY_TO = process.env.MOVRR_NOTIFY_EMAIL ?? "team@movrr.nl";

type ActionResult = { success: true } | { success: false; error: string };

export async function submitWaitlist(input: unknown): Promise<ActionResult> {
  // Server-side re-validation — never trust client input
  const parsed = waitlistSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const data: WaitlistInput = parsed.data;

  // Geo enrichment — never throws or blocks signup
  const geo = await getGeoFromHeaders();

  // Persist to database
  const supabase = await createSupabaseServerClient();
  const { error: dbError } = await supabase.from("waitlist").insert({
    // User-provided
    name: data.name,
    email: data.email,
    city: data.city, // exact user-entered text; never overwritten by geo
    bike_ownership: data.bikeOwnership ?? null,
    audience: data.audience,
    source: "movrr_website",
    // Geo enrichment — server-derived, clearly prefixed to avoid semantic confusion
    country_code: geo.country_code,
    geo_region_code: geo.geo_region_code, // ISO 3166-2 subdivision code, e.g. "NH"
    geo_city: geo.geo_city, // IP-derived city; distinct from user-entered city
    timezone: geo.timezone,
    geo_source: geo.geo_source,
    // UTM attribution
    utm_source: data.utm_source ?? null,
    utm_medium: data.utm_medium ?? null,
    utm_campaign: data.utm_campaign ?? null,
    utm_content: data.utm_content ?? null,
    utm_term: data.utm_term ?? null,
    // Request context
    referrer: data.referrer ?? null,
    landing_path: data.landing_path ?? null,
    acquisition_channel: classifyAcquisitionChannel(
      data.utm_medium,
      data.utm_source,
      data.referrer,
    ),
  });

  if (dbError) {
    // 23505 = unique_violation — email already registered
    if (dbError.code === "23505") {
      return { success: false, error: "This email is already on the list." };
    }
    console.error("[waitlist] db insert failed:", dbError.message);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  // Send emails — failure is non-blocking; DB write is the source of truth
  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: data.email,
        subject: "You're registered — MOVRR",
        react: WaitlistConfirmation({ data }),
      }),
      resend.emails.send({
        from: FROM,
        to: NOTIFY_TO,
        subject: `New registration · ${data.audience} · ${data.city}`,
        react: WaitlistNotification({ data, geo }),
      }),
    ]);
  } catch (emailErr) {
    console.error("[waitlist] email delivery failed:", emailErr);
  }

  return { success: true };
}
