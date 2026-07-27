"use client";

import { Check, Copy, TriangleAlert } from "lucide-react";
import { track } from "@vercel/analytics";
import { useEffect, useRef, useState } from "react";

interface CopyMarkdownButtonProps {
  markdown: string;
  locale: string;
  labels: {
    copyMarkdown: string;
    copiedMarkdown: string;
    copyFailed: string;
  };
  plain?: boolean;
  variant?: "toolbar" | "dock";
}

async function copyCompleteDocument(markdown: string) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(markdown);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = markdown;
  textarea.readOnly = true;
  textarea.setAttribute("aria-hidden", "true");
  textarea.style.cssText =
    "position:fixed;inset:0;opacity:0;pointer-events:none";
  document.body.appendChild(textarea);
  textarea.select();
  const success = document.execCommand("copy");
  textarea.remove();
  if (!success) throw new Error("Clipboard operation rejected");
}

export function CopyMarkdownButton({
  markdown,
  locale,
  labels,
  plain = false,
  variant = "toolbar",
}: CopyMarkdownButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function handleCopy() {
    try {
      await copyCompleteDocument(markdown);
      setStatus("copied");
      track("machine_view_copy_markdown", {
        locale,
        characters: markdown.length,
        surface: variant,
      });
    } catch {
      setStatus("failed");
      track("machine_view_copy_failed", { locale, surface: variant });
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  const label =
    status === "copied"
      ? labels.copiedMarkdown
      : status === "failed"
        ? labels.copyFailed
        : labels.copyMarkdown;

  const statusClass =
    status === "copied"
      ? "border-[#72e09a]/55 bg-[#72e09a]/12 text-[#72e09a]"
      : status === "failed"
        ? "border-red-400/50 bg-red-400/10 text-red-300"
        : "border-white/18 bg-[#0b0f0d] text-[#d7e0dc] hover:border-[#72e09a]/45 hover:bg-[#72e09a]/10 hover:text-white";

  const sizeClass =
    variant === "dock"
      ? "min-h-11 px-4 text-[0.7rem]"
      : "min-h-10 px-4 text-[0.72rem]";

  return (
    <div className={plain ? undefined : "sm:shrink-0"}>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={labels.copyMarkdown}
        className={
          plain
            ? undefined
            : `inline-flex w-full items-center justify-center gap-2 rounded-none border font-mono font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72e09a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a09] sm:w-auto ${sizeClass} ${statusClass}`
        }
      >
        {!plain && status === "copied" ? (
          <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
        ) : !plain && status === "failed" ? (
          <TriangleAlert className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
        ) : !plain ? (
          <Copy className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
        ) : null}
        {label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "idle" ? "" : label}
      </span>
    </div>
  );
}
