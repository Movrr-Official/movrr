import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground/90">
            Last updated: {lastUpdated}
          </p>
        </div>

        <Card className="border-0 shadow-none">
          <CardContent className="prose prose-gray max-w-none p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Our Commitment to Privacy
              </h2>
              <p className="text-muted-foreground leading-7">
                {`At Movrr, we believe your privacy is a fundamental right. This
                Privacy Policy explains how we collect, use, and protect your
                personal information when you use our mobile advertising
                platform. We're committed to being transparent about our data
                practices and giving you control over your information.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-medium mb-3">
                Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  phone number, and payment details
                </li>
                <li>
                  <strong>Profile Information:</strong> Bike specifications,
                  riding preferences, and availability (for riders)
                </li>
                <li>
                  <strong>Campaign Information:</strong> Business details,
                  campaign preferences, and targeting criteria (for advertisers)
                </li>
                <li>
                  <strong>Communications:</strong> Messages you send us through
                  our platform or support channels
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Information We Collect Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Location Data:</strong> GPS coordinates during active
                  campaigns (riders only, with explicit consent)
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our
                  platform, including pages visited and features used
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system, browser type, and IP address
                </li>
                <li>
                  <strong>Performance Data:</strong> Campaign metrics and
                  advertising effectiveness (anonymized)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Facilitate connections between riders and advertisers</li>
                <li>Process payments and manage your account</li>
                <li>Provide campaign analytics and performance reporting</li>
                <li>Improve our platform and develop new features</li>
                <li>Send important updates about your account or campaigns</li>
                <li>Ensure platform safety and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground leading-7 mb-4">
                {`We don't sell your personal information. We only share your
                information in these specific circumstances:`}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Between Platform Users:</strong> Limited information
                  necessary for campaign execution (rider availability, general
                  location zones)
                </li>
                <li>
                  <strong>Service Providers:</strong> Trusted partners who help
                  us operate our platform (payment processors, analytics
                  providers)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and the safety of our users
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the unlikely event of
                  a merger or acquisition (with advance notice to users)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-muted-foreground leading-7 mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information (subject to legal obligations)
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a commonly
                  used format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain types of
                  processing
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent for location
                  tracking or marketing communications
                </li>
              </ul>
              <p className="text-muted-foreground leading-7 mt-4">
                {`To exercise these rights, contact us at privacy@movrr.nl. We'll
                respond within 30 days.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-7">
                We implement industry-standard security measures to protect your
                information, including encryption, secure servers, and regular
                security audits. While no system is 100% secure, we continuously
                work to improve our security practices and respond quickly to
                any potential threats.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Location Data</h2>
              <p className="text-muted-foreground leading-7">
                For riders, location tracking is essential for campaign
                verification and payment calculation. We only collect location
                data during active campaigns and with your explicit consent. You
                can disable location sharing at any time, though this will
                prevent participation in campaigns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-7">
                We use cookies and similar technologies to improve your
                experience on our platform. This includes essential cookies for
                functionality, analytics cookies to understand usage patterns,
                and preference cookies to remember your settings. You can manage
                cookie preferences in your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-7">
                Your information may be transferred to and processed in
                countries other than your own. When we do this, we ensure
                appropriate safeguards are in place to protect your data in
                accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {`Children's Privacy`}
              </h2>
              <p className="text-muted-foreground leading-7">
                Our platform is not intended for users under 18 years of age. We
                do not knowingly collect personal information from children. If
                we become aware that a child has provided us with personal
                information, we will delete it immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-7">
                {`We may update this Privacy Policy from time to time. When we do,
                we'll post the updated version on this page and update the "Last
                updated" date. For significant changes, we'll provide additional
                notice through email or platform notifications.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-7">
                If you have questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> privacy@movrr.nl
                  <br />
                  <strong>Mail:</strong> Movrr Privacy Team
                  <br />
                  The Hague, Netherlands
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
