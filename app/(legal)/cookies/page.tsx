import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";

const sections: LegalSection[] = [
  {
    id: "what-cookies-are",
    title: "What cookies are",
    content: (
      <>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They allow the site to remember your preferences, understand
          how you use the site, and deliver a consistent experience across
          visits.
        </p>
        <p>
          MOVRR uses cookies on this website. We do not use cookies to track
          your movement outside of the MOVRR platform — movement data is
          handled separately through the app, as described in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "cookie-categories",
    title: "Cookie categories",
    content: (
      <>
        <h3>Strictly necessary</h3>
        <p>
          These cookies are required for the website to function. They enable
          core features such as security, network management, and account
          access. They cannot be disabled without affecting site functionality.
        </p>
        <h3>Performance and analytics</h3>
        <p>
          These cookies help us understand how visitors interact with our
          website — which pages are visited most, where users navigate from,
          and where they leave. The data is aggregated and anonymised. We use
          this information to improve the website experience.
        </p>
        <h3>Functional</h3>
        <p>
          Functional cookies remember choices you make — such as language
          preferences or region settings — so you don't have to re-enter them
          on each visit. These do not track activity on other sites.
        </p>
        <h3>Marketing</h3>
        <p>
          We currently use limited marketing cookies to understand the
          effectiveness of outbound campaigns directing traffic to this site.
          We do not use cookies to serve retargeted advertising to visitors
          across other websites.
        </p>
      </>
    ),
  },
  {
    id: "specific-cookies",
    title: "Cookies we use",
    content: (
      <>
        <p>The following cookies are set on the MOVRR website:</p>
        <h3>Strictly necessary</h3>
        <ul>
          <li>
            <strong>movrr_session</strong> — Maintains your logged-in session
            state. Expires when you close your browser.
          </li>
          <li>
            <strong>movrr_csrf</strong> — Security token to prevent
            cross-site request forgery. Session cookie.
          </li>
        </ul>
        <h3>Analytics</h3>
        <ul>
          <li>
            <strong>_ga, _ga_*</strong> — Google Analytics. Tracks page views
            and session data in anonymised, aggregated form. Expires after 2
            years.
          </li>
        </ul>
        <h3>Functional</h3>
        <ul>
          <li>
            <strong>movrr_region</strong> — Stores your selected region. Expires
            after 12 months.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing cookies",
    content: (
      <>
        <p>
          You can control and manage cookies in several ways:
        </p>
        <h3>Browser settings</h3>
        <p>
          Most browsers allow you to view, manage, and delete cookies through
          their settings. Blocking all cookies will affect the functionality
          of this and most other websites. Refer to your browser's help
          documentation for instructions.
        </p>
        <h3>Our consent tool</h3>
        <p>
          When you first visit the MOVRR website, you will be presented with
          a cookie consent notice. You can update your preferences at any time
          by clicking the cookie settings link in the footer.
        </p>
        <h3>Opt-out tools</h3>
        <p>
          For Google Analytics, you can opt out using the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
        <p>
          Withdrawing cookie consent does not affect the lawfulness of any
          processing carried out prior to withdrawal.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <>
        <p>
          We may update this Cookie Policy as our use of cookies changes or as
          regulatory requirements evolve. The effective date at the top of this
          page reflects the most recent version. For questions, contact us at{" "}
          <a href="mailto:privacy@movrr.nl">privacy@movrr.nl</a>.
        </p>
      </>
    ),
  },
];

export const metadata = {
  title: "Cookie Policy — MOVRR",
  description:
    "How MOVRR uses cookies on this website and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <LegalLayout
        title="Cookie Policy"
        effectiveDate="1 January 2025"
        summary="How we use cookies on this website, what each category does, and how to manage your preferences."
        sections={sections}
        relatedLinks={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ]}
      />
      <Footer cta={false} />
    </main>
  );
}
