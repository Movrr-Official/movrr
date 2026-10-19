import documents from "./documents.json";
import type { LegalPageCopy } from "@/locales/types";

export function legalPage(key: "privacy" | "terms" | "cookies" | "accountDeletion", locale: "en" | "nl"): LegalPageCopy {
  const nl = locale === "nl";
  const doc = documents[locale][key];
  return {
    ...doc,
    effectiveLabel: documents.effectiveDate ? (nl ? "Van kracht" : "Effective") : (nl ? "Laatst bijgewerkt" : "Last updated"),
    effectiveDate: documents.effectiveDate ?? documents.reviewDate,
    summary: doc.summary,
    contentsLabel: nl ? "Inhoud" : "Contents",
    relatedLabel: nl ? "Gerelateerd" : "Related",
    relatedLinks: [
      { label: documents[locale].privacy.title, href: "/privacy" },
      { label: documents[locale].terms.title, href: "/terms" },
      { label: documents[locale].guidelines.title, href: "/terms#rider-guidelines" },
      { label: documents[locale].cookies.title, href: "/cookies" },
      { label: documents[locale].accountDeletion.title, href: "/account-deletion" },
    ].filter(link => link.href !== ({ privacy: "/privacy", terms: "/terms", cookies: "/cookies", accountDeletion: "/account-deletion" }[key])),
  };
}
