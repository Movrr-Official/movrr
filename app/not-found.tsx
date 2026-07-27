import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { headers } from "next/headers";
import { REQUEST_LOCALE_HEADER, normalizeLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";
import { withLocalePath } from "@/lib/i18n/routing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const locale = normalizeLocale(
    (await headers()).get(REQUEST_LOCALE_HEADER),
  );
  const copy = (await getDictionary(locale)).common;
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col bg-movrr-bg-ink"
    >
      <div className="movrr-shell flex flex-1 flex-col items-start justify-center py-32">
        <div className="mb-14 flex items-center gap-3">
          <Image src="/logo/icon-no-bg-white.png" alt="" width={30} height={30} className="h-[1.7rem] w-[1.7rem] object-contain" />
          <span className="text-lg font-semibold tracking-tight text-movrr-text-inverse">{copy.branding.wordmark}</span>
        </div>
        <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-success">404</p>
        <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse">
          {copy.notFound.titleLine1}<br /><span className="text-movrr-text-inverse/35">{copy.notFound.titleLine2}</span>
        </h1>
        <p className="mt-8 max-w-sm text-base leading-relaxed text-movrr-text-inverse/50">{copy.notFound.description}</p>
        <Link href={withLocalePath(locale, "/")} className="group mt-10 inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/20 bg-movrr-text-inverse/5 px-7 text-sm font-semibold text-movrr-text-inverse transition-colors duration-200 hover:bg-movrr-text-inverse/10">
          {copy.notFound.backHome}<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
        </Link>
      </div>
    </main>
  );
}
