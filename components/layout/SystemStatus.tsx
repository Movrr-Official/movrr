"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type HealthStatus = "operational" | "degraded" | "down";

type HealthResponse = {
  status: HealthStatus;
  timestamp: string;
};

// Custom ease: sharp leading edge (the "beat") decaying to zero — like a cardiac R-wave
const PING_EASE = [0.15, 0.85, 0.35, 1.0] as const;

// Heartbeat rhythm: lub at t=0, dub at t=350ms, rest until t=2500ms
// Both rings share a 2500ms cycle (duration + repeatDelay = 2500ms)
const LUB = { duration: 1.05, repeatDelay: 1.45 } as const; // 1.05 + 1.45 = 2.5s
const DUB = { duration: 0.85, repeatDelay: 1.65, delay: 0.35 } as const; // 0.85 + 1.65 = 2.5s cycle after first fire

export function SystemStatus() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/health", { cache: "no-store" });
        if (!res.ok) throw new Error("Health check failed");
        const json = (await res.json()) as HealthResponse;
        if (!cancelled) {
          setData(json);
          setIsError(false);
        }
      } catch {
        if (!cancelled) setIsError(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60_000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const dotColor = isError
    ? "bg-movrr-error"
    : isLoading
      ? "bg-movrr-warning"
      : data?.status === "operational"
        ? "bg-movrr-success"
        : data?.status === "degraded"
          ? "bg-movrr-warning"
          : "bg-movrr-error";

  const label = isError
    ? "Status unavailable"
    : isLoading
      ? "Checking status..."
      : data?.status === "operational"
        ? "All systems operational"
        : data?.status === "degraded"
          ? "Degraded service"
          : "Service disruption";

  const isOperational =
    !isError && !isLoading && data?.status === "operational";

  return (
    <div className="flex items-center gap-1.5">
      {/* Dot + ping rings stacked in a fixed-size container */}
      <div className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
        {isOperational && (
          <>
            {/* Lub — primary beat: expands to 2.75× the dot diameter */}
            <motion.span
              className={`absolute inset-0 rounded-full ${dotColor}`}
              animate={{ scale: [1, 2.75], opacity: [0.6, 0] }}
              transition={{
                duration: LUB.duration,
                repeat: Infinity,
                repeatDelay: LUB.repeatDelay,
                ease: PING_EASE,
              }}
            />
            {/* Dub — echo beat: 350ms offset, slightly softer, same cycle */}
            <motion.span
              className={`absolute inset-0 rounded-full ${dotColor}`}
              animate={{ scale: [1, 2.1], opacity: [0.35, 0] }}
              transition={{
                duration: DUB.duration,
                repeat: Infinity,
                repeatDelay: DUB.repeatDelay,
                delay: DUB.delay,
                ease: PING_EASE,
              }}
            />
          </>
        )}
        {/* Solid dot — always static, never scaled */}
        <span
          className={`relative block h-1.5 w-1.5 rounded-full ${dotColor}`}
        />
      </div>

      <span className="text-xs text-movrr-text-inverse/40">{label}</span>
    </div>
  );
}
