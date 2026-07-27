import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";
import type { LegalPageCopy } from "@/locales/types";

export function LegalPage({ copy }: { copy: LegalPageCopy }) {
  const sections: LegalSection[] = copy.sections.map((section) => ({
    id: section.id,
    title: section.title,
    content: (
      <>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.bullets && (
          <ul>
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </>
    ),
  }));

  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <LegalLayout
        title={copy.title}
        effectiveDate={copy.effectiveDate}
        summary={copy.summary}
        sections={sections}
        relatedLinks={copy.relatedLinks}
        effectiveLabel={copy.effectiveLabel}
        contentsLabel={copy.contentsLabel}
        relatedLabel={copy.relatedLabel}
      />
      <Footer cta={false} />
    </main>
  );
}
