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
      });
    } catch {
      setStatus("failed");
      track("machine_view_copy_failed", { locale });
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

  return (
    <div className={plain ? undefined : "sm:shrink-0"}>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={labels.copyMarkdown}
        className={
          plain
            ? undefined
            : "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-movrr-bg-primary px-6 text-sm font-semibold text-movrr-text-inverse transition-colors hover:bg-movrr-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-movrr-green-text focus-visible:ring-offset-2 sm:w-auto"
        }
      >
        {!plain && status === "copied" ? (
          <Check className="h-4 w-4" aria-hidden />
        ) : !plain && status === "failed" ? (
          <TriangleAlert className="h-4 w-4" aria-hidden />
        ) : !plain ? (
          <Copy className="h-4 w-4" aria-hidden />
        ) : null}
        {label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "idle" ? "" : label}
      </span>
    </div>
  );
}
