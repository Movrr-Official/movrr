import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { CopyMarkdownButton } from "@/app/features/machine-view/components/CopyMarkdownButton";
import { MachineAnalytics } from "@/app/features/machine-view/components/MachineAnalytics";
import { StickyMachineCopy } from "@/app/features/machine-view/components/StickyMachineCopy";
import { ViewSelector } from "@/app/features/machine-view/components/ViewSelector";
import type { MachineDocument } from "@/app/features/machine-view/types/machine-document";
import { tintMachineMarkdown } from "@/app/features/machine-view/utils/tint-markdown";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";
import { SITE_URL } from "@/lib/seo/site";
import type { Dictionary } from "@/locales/types";

export function MachineViewPage({
  locale,
  dictionary,
  markdown,
}: {
  locale: Locale;
  dictionary: Dictionary;
  document: MachineDocument;
  markdown: string;
}) {
  const labels = dictionary.common.machineView;
  const humanHref = withLocalePath(locale, "/");
  const machineHref = withLocalePath(locale, "/machine");
  const rawHref = withLocalePath(locale, "/machine.md");
  const tintedMarkdown = tintMachineMarkdown(markdown);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: labels.title,
    description: labels.description,
    inLanguage: locale === "nl" ? "nl-NL" : "en-GB",
    url: `${SITE_URL}${machineHref}`,
    isPartOf: {
      "@type": "WebSite",
      name: "MOVRR",
      url: `${SITE_URL}${humanHref}`,
    },
    encoding: {
      "@type": "MediaObject",
      encodingFormat: "text/markdown",
      contentUrl: `${SITE_URL}${rawHref}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#070a09] text-[#d7e0dc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <a
        href="#markdown-document"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-none bg-[#d7e0dc] px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#070a09] transition-transform focus:translate-y-0"
      >
        {locale === "nl" ? "Ga naar Markdown" : "Skip to Markdown"}
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a09]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-2.5 sm:px-8 lg:px-12">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href={humanHref}
              className="flex shrink-0 items-center gap-2 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72e09a]"
            >
              <Image
                src="/logo/icon-no-bg-green.png"
                alt=""
                width={26}
                height={26}
                priority
              />
              <span className="text-sm font-semibold tracking-[-0.02em] text-white">
                MOVRR
              </span>
            </Link>
            <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
            <a
              href={rawHref}
              className="hidden items-center gap-1.5 rounded-none font-mono text-[0.7rem] text-white/45 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72e09a] sm:inline-flex"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden />
              machine.md
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 font-mono">
            <nav
              aria-label={dictionary.common.languageSwitcher.ariaLabel}
              className="inline-flex min-h-9 items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em]"
            >
              <Link
                href={withLocalePath("en", "/machine")}
                lang="en"
                aria-current={locale === "en" ? "page" : undefined}
                className={
                  locale === "en"
                    ? "px-1 text-white"
                    : "px-1 text-white/35 transition-colors hover:text-white/70"
                }
              >
                EN
              </Link>
              <span aria-hidden className="text-white/20">
                /
              </span>
              <Link
                href={withLocalePath("nl", "/machine")}
                lang="nl"
                aria-current={locale === "nl" ? "page" : undefined}
                className={
                  locale === "nl"
                    ? "px-1 text-white"
                    : "px-1 text-white/35 transition-colors hover:text-white/70"
                }
              >
                NL
              </Link>
            </nav>
            <ViewSelector
              current="machine"
              humanHref={humanHref}
              machineHref={machineHref}
              labels={labels}
              inverted
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-5 pb-24 sm:px-8 sm:py-7 sm:pb-28 lg:px-12">
        <section className="overflow-hidden border border-white/10 bg-[#0b0f0d]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="min-w-0">
              <p className="truncate font-mono text-[0.7rem] text-white/35">
                movrr.nl / machine.md
              </p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#72e09a]">
                {labels.eyebrow}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={rawHref}
                className="shrink-0 font-mono text-[0.7rem] text-white/40 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/75"
              >
                {labels.rawMarkdown}
              </a>
              <div id="machine-copy-toolbar">
                <CopyMarkdownButton
                  markdown={markdown}
                  locale={locale}
                  labels={labels}
                />
              </div>
            </div>
          </div>

          <pre
            id="markdown-document"
            className="m-0 overflow-x-auto whitespace-pre-wrap break-words px-4 py-5 font-mono text-[0.78rem] leading-6 text-[#c8d2ce] selection:bg-[#72e09a] selection:text-[#07110b] sm:px-5 sm:text-[0.84rem] sm:leading-7"
            dangerouslySetInnerHTML={{ __html: tintedMarkdown }}
          />
        </section>
      </main>

      <StickyMachineCopy
        markdown={markdown}
        locale={locale}
        labels={labels}
      />
      <MachineAnalytics locale={locale} />
    </div>
  );
}
