"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

interface ViewSelectorProps {
  current: "human" | "machine";
  humanHref: string;
  machineHref: string;
  labels: {
    selectorLabel: string;
    humanLabel: string;
    machineLabel: string;
  };
  inverted?: boolean;
  plain?: boolean;
}

export function ViewSelector({
  current,
  humanHref,
  machineHref,
  labels,
  inverted = false,
  plain = false,
}: ViewSelectorProps) {
  const active = inverted
    ? "text-movrr-text-inverse"
    : "text-movrr-text-brand";
  const inactive = inverted
    ? "text-movrr-text-inverse/50 hover:text-movrr-text-inverse/80"
    : "text-movrr-text-brand/45 hover:text-movrr-text-brand";
  const className = plain
    ? ""
    : "inline-flex min-h-11 items-center gap-1.5 rounded-md px-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-movrr-green-text";

  return (
    <nav
      aria-label={labels.selectorLabel}
      className={plain ? undefined : "inline-flex items-center gap-1"}
    >
      {current === "human" ? (
        <span className={plain ? undefined : `${className} ${active}`} aria-current="page">
          <span aria-hidden>[×]</span>
          {labels.humanLabel}
        </span>
      ) : (
        <Link
          href={humanHref}
          className={plain ? undefined : `${className} ${inactive}`}
          onClick={() => track("machine_view_return_human")}
        >
          <span aria-hidden>[ ]</span>
          {labels.humanLabel}
        </Link>
      )}
      {current === "machine" ? (
        <span className={plain ? undefined : `${className} ${active}`} aria-current="page">
          <span aria-hidden>[×]</span>
          {labels.machineLabel}
        </span>
      ) : (
        <Link href={machineHref} className={plain ? undefined : `${className} ${inactive}`}>
          <span aria-hidden>[ ]</span>
          {labels.machineLabel}
        </Link>
      )}
    </nav>
  );
}
