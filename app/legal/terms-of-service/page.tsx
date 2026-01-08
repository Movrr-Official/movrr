import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground/90">
            Last updated: {lastUpdated}
          </p>
        </div>

        <Card className="border-0 shadow-none">
          <CardContent className="prose prose-gray max-w-none p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Welcome to Movrr</h2>
              <p className="text-muted-foreground leading-7">
                {`These Terms of Service ("Terms") govern your use of the Movrr
                platform and services. By creating an account or using our
                platform, you agree to these Terms. Please read them carefully.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Platform Overview
              </h2>
              <p className="text-muted-foreground leading-7">
                {`Movrr is a mobile advertising platform that connects cyclists
                ("Riders") with businesses ("Advertisers") who want to display
                advertisements on bicycle-mounted frames. We facilitate these
                connections but are not directly responsible for the actions of
                platform users.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Eligibility and Accounts
              </h2>

              <h3 className="text-xl font-medium mb-3">General Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You must be at least 18 years old to use our platform</li>
                <li>
                  You must provide accurate and complete registration
                  information
                </li>
                <li>
                  You are responsible for maintaining the security of your
                  account
                </li>
                <li>
                  You may not share your account or allow others to use it
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Additional Requirements for Riders
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{`Valid driver's license or government-issued ID`}</li>
                <li>Proof of bicycle ownership or legal right to use</li>
                <li>
                  Basic liability insurance (personal or provided by Movrr)
                </li>
                <li>Smartphone with GPS capabilities</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Additional Requirements for Advertisers
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Valid business registration or tax ID</li>
                <li>Compliance with local advertising regulations</li>
                <li>Content that meets our advertising guidelines</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Rider Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Safe Riding:</strong> Operate your bicycle safely and
                  follow all traffic laws
                </li>
                <li>
                  <strong>Route Compliance:</strong> Complete assigned routes as
                  specified in campaign terms
                </li>
                <li>
                  <strong>Equipment Care:</strong> Properly install, maintain,
                  and return advertising frames
                </li>
                <li>
                  <strong>Accurate Reporting:</strong> Provide truthful
                  information about rides and any incidents
                </li>
                <li>
                  <strong>Professional Conduct:</strong> Represent yourself and
                  advertiser brands appropriately
                </li>
                <li>
                  <strong>Insurance:</strong> Maintain adequate insurance
                  coverage for cycling activities
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Advertiser Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Content Guidelines:</strong> Ensure all advertising
                  content is legal, appropriate, and truthful
                </li>
                <li>
                  <strong>Payment Terms:</strong> Pay all fees according to the
                  agreed payment schedule
                </li>
                <li>
                  <strong>Campaign Specifications:</strong> Provide clear and
                  accurate campaign requirements
                </li>
                <li>
                  <strong>Compliance:</strong> Follow all applicable advertising
                  laws and regulations
                </li>
                <li>
                  <strong>Respectful Communication:</strong> Interact
                  professionally with riders and Movrr staff
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>

              <h3 className="text-xl font-medium mb-3">For Riders</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Payment calculated based on completed route distance and
                  campaign terms
                </li>
                <li>
                  Payments processed weekly via direct deposit or digital wallet
                </li>
                <li>Minimum payout threshold of $25</li>
                <li>
                  Tax reporting responsibilities as independent contractors
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">For Advertisers</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Campaign fees due upon campaign activation</li>
                <li>Additional charges for premium features or rush orders</li>
                <li>
                  Refunds processed for cancelled campaigns (subject to
                  cancellation policy)
                </li>
                <li>Late payment fees may apply for overdue accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-7 mb-4">
                Advertisers retain ownership of their advertising content. By
                uploading content to our platform, you grant Movrr a limited
                license to display, reproduce, and distribute that content as
                necessary to provide our services.
              </p>
              <p className="text-muted-foreground leading-7">
                Movrr retains ownership of our platform, technology, and any
                analytics or aggregated data generated through the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Prohibited Activities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violating any applicable laws or regulations</li>
                <li>Providing false or misleading information</li>
                <li>Interfering with platform operations or other users</li>
                <li>Attempting to circumvent our payment or safety systems</li>
                <li>
                  Using the platform for any illegal or harmful activities
                </li>
                <li>
                  Advertising content that is offensive, discriminatory, or
                  inappropriate
                </li>
                <li>Reverse engineering or copying our platform technology</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Platform Availability
              </h2>
              <p className="text-muted-foreground leading-7">
                While we strive for high availability, we cannot guarantee
                uninterrupted access to our platform. We may temporarily suspend
                service for maintenance, updates, or to address technical
                issues. We are not liable for any damages resulting from service
                interruptions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-7">
                {`Movrr's liability is limited to the greatest extent permitted by
                law. We are not responsible for:`}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>
                  Accidents, injuries, or property damage during cycling
                  activities
                </li>
                <li>Disputes between riders and advertisers</li>
                <li>Content or conduct of platform users</li>
                <li>Third-party actions or technical failures</li>
                <li>Loss of income or business opportunities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. Insurance and Indemnification
              </h2>
              <p className="text-muted-foreground leading-7">
                Users agree to maintain appropriate insurance coverage and
                indemnify Movrr against any claims, damages, or expenses arising
                from their use of the platform or participation in campaigns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
              <p className="text-muted-foreground leading-7">
                Either party may terminate their account at any time. Movrr may
                suspend or terminate accounts for violations of these Terms,
                safety concerns, or other legitimate business reasons.
                Outstanding payments and obligations survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-7">
                Disputes will be resolved through binding arbitration in
                accordance with the rules of the American Arbitration
                Association. The arbitration will take place in San Francisco,
                California, and will be governed by California law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-7">
                {`We may update these Terms from time to time. We'll notify users
                of significant changes through email or platform notifications.
                Continued use of the platform after changes indicates acceptance
                of the updated Terms.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                14. Contact Information
              </h2>
              <p className="text-muted-foreground leading-7">
                Questions about these Terms? Contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p>
                  <strong>Email:</strong> legal@movrr.nl
                  <br />
                  <strong>Mail:</strong> Movrr Legal Department
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

export default TermsOfService;
