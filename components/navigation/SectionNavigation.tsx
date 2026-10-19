"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

interface SectionNavigationProps {
  title: string;
  items: { id: string; label: string }[];
  relatedTitle?: string;
  relatedLinks?: { href: string; label: string }[];
  footer?: ReactNode;
}

export function SectionNavigation({ title, items, relatedTitle, relatedLinks = [], footer }: SectionNavigationProps) {
  const activeId = useActiveSection(items.map((item) => item.id));
  const activeItem = items.find((item) => item.id === activeId);
  if (!items.length) return null;

  const sectionLinks = (mobile: boolean) => items.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      aria-current={activeId === item.id ? "location" : undefined}
      onClick={mobile ? (event) => event.currentTarget.closest("details")?.removeAttribute("open") : undefined}
      className={`border-l py-2 pl-4 text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-movrr-text-brand ${activeId === item.id
        ? "border-movrr-text-brand bg-movrr-bg-soft font-semibold text-movrr-text-brand"
        : "border-movrr-border-soft text-movrr-text-brand/75 hover:border-movrr-text-brand/40 hover:text-movrr-text-brand"}`}
    >
      {item.label}
    </a>
  ));

  return (
    <aside aria-label={title} className="sticky top-[calc(var(--movrr-banner-height,0px)+5rem)] z-30 w-full self-start lg:top-[calc(var(--movrr-banner-height,0px)+6rem)] lg:z-auto lg:w-auto">
      <div className="relative flex gap-4 border-y border-movrr-border-soft bg-movrr-bg-canvas py-3 lg:hidden">
        <details name="page-section-navigation" className="group min-w-0 flex-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-movrr-text-brand [&::-webkit-details-marker]:hidden">
            <span className="min-w-0">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.12em]">{title}</span>
              <span className="mt-1 block truncate text-sm">{activeItem?.label}</span>
            </span>
            <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 group-open:rotate-180" />
          </summary>
          <nav aria-label={title} className="absolute inset-x-0 top-full mt-2 flex flex-col rounded-lg border border-movrr-border-soft bg-movrr-bg-canvas p-4 shadow-lg">
            {sectionLinks(true)}
          </nav>
        </details>
        {relatedLinks.length > 0 && (
          <details name="page-section-navigation" className="group shrink-0 border-l border-movrr-border-soft pl-4">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand [&::-webkit-details-marker]:hidden">
              {relatedTitle}<ChevronDown aria-hidden="true" className="h-4 w-4 group-open:rotate-180" />
            </summary>
            <nav aria-label={relatedTitle} className="absolute inset-x-0 top-full mt-2 flex flex-col rounded-lg border border-movrr-border-soft bg-movrr-bg-canvas p-4 shadow-lg">
              {relatedLinks.map((link) => <Link key={link.href} href={link.href} className="border-l border-movrr-border-soft py-2 pl-4 text-sm text-movrr-text-brand/75 hover:text-movrr-text-brand">{link.label}</Link>)}
            </nav>
          </details>
        )}
      </div>

      <div className="hidden flex-col lg:flex">
        <p className="mb-5 shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/75">{title}</p>
        <nav aria-label={title} className="flex min-h-0 flex-col">
          {sectionLinks(false)}
        </nav>
        {relatedLinks.length > 0 && (
          <div className="mt-10 shrink-0 border-t border-movrr-border-soft pt-8">
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-movrr-text-brand/75">{relatedTitle}</p>
            <nav aria-label={relatedTitle} className="flex flex-col">
              {relatedLinks.map((link) => <Link key={link.href} href={link.href} className="border-l border-movrr-border-soft py-2 pl-4 text-sm text-movrr-text-brand/75 transition-colors hover:text-movrr-text-brand">{link.label}</Link>)}
            </nav>
          </div>
        )}
        {footer && <div className="mt-10 shrink-0 text-[0.75rem] leading-relaxed text-movrr-text-brand/75">{footer}</div>}
      </div>
    </aside>
  );
}
