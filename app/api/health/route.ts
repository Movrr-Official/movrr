import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type HealthStatus = "operational" | "degraded" | "down";

type HealthCheck = {
  name: string;
  status: "ok" | "error";
};

// Simple in-memory rate limiter — resets on cold start, fine for edge/serverless
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string, max = 60, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

const checkDatabase = async (): Promise<HealthCheck> => {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
    const { error } = await supabase
      .from("waitlist")
      .select("id", { count: "exact", head: true })
      .limit(1);

    if (error) return { name: "database", status: "error" };
    return { name: "database", status: "ok" };
  } catch {
    return { name: "database", status: "error" };
  }
};

const checkEmail = async (): Promise<HealthCheck> => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return { name: "email", status: "error" };

    const resend = new Resend(apiKey);
    const { error } = await resend.domains.list();

    if (error) return { name: "email", status: "error" };
    return { name: "email", status: "ok" };
  } catch {
    return { name: "email", status: "error" };
  }
};

const aggregateStatus = (checks: HealthCheck[]): HealthStatus => {
  const db = checks.find((c) => c.name === "database");
  if (db?.status === "error") return "down";
  if (checks.some((c) => c.status === "error")) return "degraded";
  return "operational";
};

export async function GET(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`health:${ip}`)) {
    return NextResponse.json(
      { error: "rate_limited" },
      { status: 429, headers: { "retry-after": "60" } },
    );
  }

  const checks = await Promise.all([checkDatabase(), checkEmail()]);
  const status = aggregateStatus(checks);

  return NextResponse.json(
    { status, timestamp: new Date().toISOString() },
    { headers: { "cache-control": "no-store" } },
  );
}
