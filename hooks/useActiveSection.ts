"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionKey = JSON.stringify(ids);

  useEffect(() => {
    const sectionIds = JSON.parse(sectionKey) as string[];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    // Measure the reading position even when a section is taller than the viewport.
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = parseFloat(getComputedStyle(sections[0]).scrollMarginTop) || 128;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top > readingLine + 1) break;
        current = section.id;
      }
      if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActiveId(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    const resize = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    sections.forEach((section) => resize?.observe(section));
    const banner = new MutationObserver(schedule);
    banner.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      resize?.disconnect();
      banner.disconnect();
    };
  }, [sectionKey]);

  return activeId && ids.includes(activeId) ? activeId : (ids[0] ?? null);
}
