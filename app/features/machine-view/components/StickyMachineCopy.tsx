"use client";

import { useEffect, useState } from "react";
import { CopyMarkdownButton } from "@/app/features/machine-view/components/CopyMarkdownButton";

interface StickyMachineCopyProps {
  markdown: string;
  locale: string;
  labels: {
    copyMarkdown: string;
    copiedMarkdown: string;
    copyFailed: string;
  };
}

export function StickyMachineCopy({
  markdown,
  locale,
  labels,
}: StickyMachineCopyProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById("machine-copy-toolbar");
    const header = document.querySelector("header");
    if (!target) return;

    const update = () => {
      const toolbarRect = target.getBoundingClientRect();
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      // Only show once the pane toolbar has scrolled fully under the sticky header
      setShow(toolbarRect.bottom < headerBottom);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end p-4 sm:p-5">
      <div className="pointer-events-auto shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        <CopyMarkdownButton
          markdown={markdown}
          locale={locale}
          labels={labels}
          variant="dock"
        />
      </div>
    </div>
  );
}
