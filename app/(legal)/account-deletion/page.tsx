import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";

const sections: LegalSection[] = [
  {
    id: "which-app",
    title: "Which app this applies to",
    content: (
      <>
        <p>
          This page explains how to delete your MOVRR rider account and the
          personal data linked to it. It applies to the MOVRR rider app on
          Android (package <code>nl.movrr.app</code>) and iOS, and to the
          account you use to sign in to it.
        </p>
        <p>
          MOVRR B.V. is the data controller for this data. Anything relating to
          deletion can be sent to{" "}
          <a href="mailto:privacy@movrr.nl">privacy@movrr.nl</a>.
        </p>
      </>
    ),
  },
  {
    id: "delete-in-app",
    title: "Delete your account from inside the app",
    content: (
      <>
        <p>
          The fastest way to delete your account is directly in the MOVRR app.
          You will be asked to confirm, and deletion begins immediately once you
          do.
        </p>
        <ol>
          <li>Open the MOVRR app and sign in</li>
          <li>
            Go to <strong>Account</strong>, then <strong>Data &amp; privacy</strong>
          </li>
          <li>
            Select <strong>Delete account</strong>
          </li>
          <li>Confirm the deletion when prompted</li>
        </ol>
      </>
    ),
  },
  {
    id: "delete-by-email",
    title: "Request deletion by email",
    content: (
      <>
        <p>
          If you can no longer sign in, or you would rather we handle it for
          you, email{" "}
          <a href="mailto:privacy@movrr.nl">privacy@movrr.nl</a> with the subject{" "}
          <strong>Account deletion request</strong>.
        </p>
        <p>
          Send it from the email address registered to your MOVRR account so
          that we can verify the request belongs to you. We will confirm once
          the deletion is complete. You do not need to give a reason.
        </p>
      </>
    ),
  },
  {
    id: "what-we-delete",
    title: "What we delete",
    content: (
      <>
        <p>
          When you delete your account, the following personal data is erased or
          irreversibly anonymised so that it can no longer be linked to you:
        </p>
        <ul>
          <li>
            Your profile: name, email address, phone number, city, and profile
            photo
          </li>
          <li>
            All location and GPS data, including recorded routes and ride
            history
          </li>
          <li>
            Your ride and campaign participation records, including MOVRR Points
            balances and earnings history
          </li>
          <li>Registered devices and push notification tokens</li>
          <li>
            App preferences, notification settings, and brand preferences
          </li>
          <li>
            Community ride posts you created, including any images you uploaded
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-we-keep",
    title: "What we keep, and why",
    content: (
      <>
        <p>
          A limited amount of data is retained after deletion, either because
          the law requires it or because it protects the platform against fraud.
          This data is anonymised or pseudonymised wherever possible, and is not
          used to contact you or to rebuild your profile.
        </p>
        <ul>
          <li>
            Records of reward redemptions and issued vouchers, where Dutch and
            EU accounting law requires us to retain transaction records
          </li>
          <li>
            Security and anti-fraud logs, kept only as long as necessary to
            protect riders and brand partners from abuse
          </li>
          <li>
            Aggregated, anonymous statistics that contain no personal data and
            cannot be traced back to you
          </li>
        </ul>
        <p>
          Our <a href="/privacy">Privacy Policy</a> sets out the full retention
          periods that apply to each category of data.
        </p>
      </>
    ),
  },
  {
    id: "unredeemed-points",
    title: "Unredeemed MOVRR Points",
    content: (
      <>
        <p>
          Deleting your account permanently forfeits any MOVRR Points you have
          not yet redeemed. Points have no cash value, and cannot be transferred
          to another account or paid out.
        </p>
        <p>
          If you have a points balance you want to use, redeem it in the rewards
          shop before you delete your account.
        </p>
      </>
    ),
  },
  {
    id: "how-long",
    title: "How long deletion takes",
    content: (
      <>
        <p>
          Deletion starts as soon as you confirm it in the app, or as soon as we
          have verified an emailed request. Your account becomes inaccessible
          immediately, and personal data is removed from our live systems within
          30 days.
        </p>
        <p>
          Residual copies held in encrypted backups are overwritten on our
          normal backup rotation, within 90 days at the latest.
        </p>
      </>
    ),
  },
  {
    id: "other-rights",
    title: "Your other privacy rights",
    content: (
      <>
        <p>
          Deletion is one of several rights you have under the GDPR. You can
          also request a copy of your data — the MOVRR app offers a data export
          under <strong>Account</strong>, then{" "}
          <strong>Data &amp; privacy</strong> — ask us to correct inaccurate
          data, or object to certain processing.
        </p>
        <p>
          Our <a href="/privacy">Privacy Policy</a> explains these rights in
          full, including how to raise a complaint with the relevant data
          protection authority.
        </p>
      </>
    ),
  },
];

export const metadata = {
  title: "Delete Your Account — MOVRR",
  description:
    "How to delete your MOVRR rider account and the personal data associated with it, from inside the app or by request.",
};

export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas">
      <Navbar variant="light" />
      <LegalLayout
        title="Delete Your Account"
        effectiveDate="14 July 2026"
        summary="How to delete your MOVRR rider account and the personal data linked to it — from inside the app, or by request if you can no longer sign in."
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
