import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: (
      <>
        <p>
          MOVRR is a movement-based rewards platform operated by MOVRR B.V.,
          headquartered in Rotterdam, Ireland. We are the data controller for
          personal data processed through our platform and website.
        </p>
        <p>
          Questions about this policy or how we handle your data should be
          directed to <a href="mailto:privacy@movrr.nl">privacy@movrr.nl</a>.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Data we collect",
    content: (
      <>
        <p>
          We collect the minimum data necessary to operate the platform. The
          data we process depends on whether you are a rider or a brand partner.
        </p>
        <h3>Riders</h3>
        <ul>
          <li>Account information: name, email address, profile details</li>
          <li>
            Movement data: GPS route data, distance covered, ride duration —
            collected only during active rides via the MOVRR app
          </li>
          <li>
            Campaign participation: which brand campaigns you opt in to, and
            your engagement data for those campaigns
          </li>
          <li>
            Rewards data: reward calculations, redemption history, payout
            information
          </li>
          <li>Device data: device type, OS version, app version</li>
        </ul>
        <h3>Brand partners</h3>
        <ul>
          <li>
            Business information: company name, registered address, billing
            details
          </li>
          <li>Contact details for the individuals managing your account</li>
          <li>
            Campaign data: targeting parameters, budget, reach metrics tied to
            aggregated and anonymised rider data
          </li>
        </ul>
        <h3>Website visitors</h3>
        <ul>
          <li>
            Cookies and usage data as described in our{" "}
            <a href="/cookies">Cookie Policy</a>
          </li>
          <li>Any information you submit via contact or enquiry forms</li>
        </ul>
      </>
    ),
  },
  {
    id: "movement-data",
    title: "Movement and location data",
    content: (
      <>
        <p>
          Location and movement data is central to how MOVRR works. We treat it
          with a higher standard of care than other data categories.
        </p>
        <p>
          <strong>What we collect:</strong> GPS route data is captured during
          active ride sessions in the app. We record the route, distance, and
          duration of each verified ride.
        </p>
        <p>
          <strong>What we never do:</strong> We do not track your location
          outside of active ride sessions. We do not sell individual route data.
          We do not share identifiable location history with brand partners.
        </p>
        <p>
          <strong>What brands receive:</strong> Brand partners receive
          aggregated, anonymised campaign metrics — verified impressions, total
          distance covered within a campaign, and geographic heat data at zone
          level. Individual rider routes are never shared.
        </p>
        <p>
          <strong>Legal basis:</strong> We process movement data on the basis of
          your explicit consent, given when you activate ride tracking in the
          app. You may withdraw this consent at any time from your account
          settings, which will prevent future rides from being tracked.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-data",
    title: "How we use your data",
    content: (
      <>
        <p>We use the data we collect to:</p>
        <ul>
          <li>Verify rides and calculate rewards accurately</li>
          <li>Operate brand campaigns and deliver verified reach metrics</li>
          <li>Manage your account and process reward payments</li>
          <li>Improve platform performance and detect fraud</li>
          <li>Communicate with you about your account and the platform</li>
          <li>
            Comply with our legal obligations as a platform operating under GDPR
          </li>
        </ul>
        <p>
          We do not use your data for automated profiling that produces legal or
          similarly significant effects. We do not sell personal data to third
          parties.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>
          As a resident of the European Economic Area, you have the following
          rights under GDPR:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal data we hold
            about you
          </li>
          <li>
            <strong>Rectification:</strong> Correct inaccurate or incomplete
            data
          </li>
          <li>
            <strong>Erasure:</strong> Request deletion of your data where we no
            longer have a lawful basis to hold it
          </li>
          <li>
            <strong>Restriction:</strong> Ask us to limit how we use your data
            while a dispute is resolved
          </li>
          <li>
            <strong>Portability:</strong> Receive your data in a structured,
            machine-readable format
          </li>
          <li>
            <strong>Objection:</strong> Object to processing based on legitimate
            interests
          </li>
          <li>
            <strong>Withdraw consent:</strong> Where processing is based on
            consent, withdraw it at any time without affecting prior processing
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@movrr.nl">privacy@movrr.nl</a>. We respond
          within 30 days. You also have the right to lodge a complaint with the
          Irish Data Protection Commission at{" "}
          <a
            href="https://www.dataprotection.ie"
            target="_blank"
            rel="noopener noreferrer"
          >
            dataprotection.ie
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data retention",
    content: (
      <>
        <p>
          We retain personal data only as long as necessary for the purposes
          described in this policy, or as required by law.
        </p>
        <ul>
          <li>
            Account data is retained while your account is active and for 24
            months after account closure
          </li>
          <li>
            Ride and movement data is retained for 36 months to support reward
            verification and dispute resolution
          </li>
          <li>
            Financial and payout records are retained for 7 years to meet
            statutory accounting requirements
          </li>
          <li>
            Marketing communications data is retained until you unsubscribe or
            request deletion
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy as the platform evolves. Material
          changes will be communicated to registered users by email at least 14
          days before they take effect. The effective date at the top of this
          page always reflects the most recent version.
        </p>
        <p>
          Continued use of the platform after a policy update constitutes
          acceptance of the revised terms.
        </p>
      </>
    ),
  },
];

export const metadata = {
  title: "Privacy Policy — MOVRR",
  description:
    "How MOVRR collects, uses, and protects your personal data, including movement and location data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <LegalLayout
        title="Privacy Policy"
        effectiveDate="1 January 2025"
        summary="How we collect, use, and protect your personal data. Movement and location data is central to how MOVRR works — this policy explains exactly how we handle it."
        sections={sections}
        relatedLinks={[
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookie Policy", href: "/cookies" },
        ]}
      />
      <Footer cta={false} />
    </main>
  );
}
