import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";

const sections: LegalSection[] = [
  {
    id: "the-platform",
    title: "The platform",
    content: (
      <>
        <p>
          MOVRR is a rewards platform that connects cyclists with brands
          through verified movement. Riders earn rewards for authenticated
          rides. Brands reach opted-in audiences through physical campaign
          exposure. These Terms of Service govern your use of the MOVRR
          platform, website, and mobile application.
        </p>
        <p>
          By creating an account or using the platform, you agree to these
          terms. If you do not agree, do not use the platform.
        </p>
      </>
    ),
  },
  {
    id: "rider-accounts",
    title: "Rider accounts",
    content: (
      <>
        <p>
          To earn rewards on MOVRR, you must create a rider account. You are
          responsible for keeping your account credentials secure and for all
          activity that occurs under your account.
        </p>
        <h3>Eligibility</h3>
        <p>
          You must be at least 18 years of age to create a MOVRR rider
          account. By registering, you confirm that the information you
          provide is accurate and that you meet this requirement.
        </p>
        <h3>Account accuracy</h3>
        <p>
          You agree to maintain accurate account information. MOVRR reserves
          the right to suspend or close accounts where false information has
          been provided, or where account activity is suspected to be
          fraudulent.
        </p>
      </>
    ),
  },
  {
    id: "earning-rewards",
    title: "Earning and rewards",
    content: (
      <>
        <p>
          Rewards on MOVRR are earned through verified movement. The platform
          authenticates ride data — including distance, route, and duration —
          before rewards are calculated. Attempts to manipulate, simulate, or
          falsify ride data will result in permanent account suspension.
        </p>
        <h3>Base rewards</h3>
        <p>
          All verified rides earn rewards at the standard base rate. Rates
          are stated in the app and may be updated. Changes to rates do not
          affect rewards already earned.
        </p>
        <h3>Brand campaign rewards</h3>
        <p>
          Opting in to carry a brand campaign on your bike earns rewards at
          an elevated rate for the duration of the campaign. Opting in is
          always voluntary. You may withdraw from a campaign at any time from
          within the app.
        </p>
        <h3>Community rides</h3>
        <p>
          Brand-sponsored community rides earn at campaign-specific rates.
          Rider-organized community rides earn at the standard base rate.
          Elevated campaign rates apply only where a brand has funded the
          event.
        </p>
        <h3>Reward redemption</h3>
        <p>
          Rewards accumulated in your account may be redeemed according to
          the options available in the app at the time of redemption. MOVRR
          reserves the right to modify redemption options with reasonable
          notice. Rewards have no cash value outside of the redemption
          options provided.
        </p>
      </>
    ),
  },
  {
    id: "brand-campaigns",
    title: "Brand campaigns",
    content: (
      <>
        <p>
          Brands accessing MOVRR to run campaigns agree to additional terms
          set out in the Brand Partner Agreement, which supplements these
          Terms of Service.
        </p>
        <p>
          All brand campaign creative must comply with applicable advertising
          standards in the markets where campaigns run. MOVRR reserves the
          right to reject or remove campaign material that does not comply.
        </p>
        <p>
          Campaign metrics provided through the MOVRR dashboard are based on
          verified movement data. Brand partners agree not to make public
          claims about campaign performance that misrepresent the metrics
          provided.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Attempt to manipulate, simulate, or falsify ride verification data
          </li>
          <li>
            Use automated tools, scripts, or other means to generate false
            activity on the platform
          </li>
          <li>
            Access or attempt to access other users' account data
          </li>
          <li>
            Use the platform in any way that violates applicable laws or
            regulations
          </li>
          <li>
            Reverse-engineer, decompile, or attempt to extract source code
            from the MOVRR application
          </li>
          <li>
            Transmit any material that is harmful, offensive, or infringes the
            rights of others
          </li>
        </ul>
        <p>
          Violation of these terms may result in immediate account suspension
          and forfeiture of any accumulated rewards.
        </p>
      </>
    ),
  },
  {
    id: "our-rights",
    title: "Platform rights and availability",
    content: (
      <>
        <p>
          MOVRR reserves the right to modify, suspend, or discontinue any
          aspect of the platform at any time, with reasonable notice where
          practicable. We are not liable for any loss arising from platform
          unavailability.
        </p>
        <p>
          We may update these Terms of Service from time to time. Material
          changes will be communicated by email at least 14 days before they
          take effect. Continued use of the platform after that date
          constitutes acceptance of the updated terms.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of Ireland. Any disputes arising under these Terms shall be
          subject to the exclusive jurisdiction of the courts of Ireland.
        </p>
        <p>
          If any provision of these Terms is found to be unenforceable, the
          remaining provisions will continue in full force and effect.
        </p>
        <p>
          Questions about these Terms should be directed to{" "}
          <a href="mailto:hello@movrr.nl">hello@movrr.nl</a>.
        </p>
      </>
    ),
  },
];

export const metadata = {
  title: "Terms of Service — MOVRR",
  description:
    "The terms governing use of the MOVRR platform for riders and brand partners.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <LegalLayout
        title="Terms of Service"
        effectiveDate="1 January 2025"
        summary="The terms that govern your use of the MOVRR platform — for riders earning through verified movement, and for brands running campaigns."
        sections={sections}
        relatedLinks={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Cookie Policy", href: "/cookies" },
        ]}
      />
      <Footer cta={false} />
    </main>
  );
}
