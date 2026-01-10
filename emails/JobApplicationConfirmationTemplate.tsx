import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Head,
  Link,
  Heading,
  Hr,
  Tailwind,
  Section,
} from "@react-email/components";
import { getFirstName } from "@/lib/utils";

interface Props {
  applicantName: string;
  email: string;
  jobTitle: string;
}

const JobApplicationConfirmationTemplate = ({
  applicantName,
  email,
  jobTitle,
}: Props) => {
  return (
    <Html lang="en">
      <Head>
        <title>Job Application Received | Movrr</title>
      </Head>
      <Preview>
        We have received your application for {jobTitle} and will review it soon
      </Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          {/* Header with Branding - OUTFRONT style */}
          <Container
            style={{
              backgroundColor: "#23b245",
              padding: "24px 32px",
              borderBottom: "2px solid #1a8a35",
            }}
          >
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "900",
                color: "#ffffff",
                textAlign: "center",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                margin: "0",
              }}
            >
              MOVRR
            </Text>
          </Container>

          {/* Main Content - OUTFRONT style */}
          <Container
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              backgroundColor: "#ffffff",
              padding: "40px",
              border: "2px solid #e5e7eb",
            }}
          >
            <Heading
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "24px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Application Received!
            </Heading>

            <Text
              style={{
                color: "#374151",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Hello {getFirstName(applicantName) || "there"},
            </Text>

            <Text
              style={{
                color: "#374151",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Thank you for your interest in joining the Movrr team! We have
              received your application for the <strong>{jobTitle}</strong>{" "}
              position and are excited to learn more about you.
            </Text>

            <Section
              style={{
                borderLeft: "2px solid #23b245",
                borderTop: "2px solid #23b245",
                borderRight: "2px solid #23b245",
                borderBottom: "2px solid #23b245",
                backgroundColor: "#f0fdf4",
                padding: "16px",
                marginBottom: "32px",
              }}
            >
              <Text
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "8px",
                }}
              >
                <strong>What happens next?</strong>
              </Text>
              <Text
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Our hiring team will review your application and resume. If your
                background aligns with what we're looking for, we'll reach out
                within <strong>1-2 weeks</strong> to schedule an interview.
              </Text>
            </Section>

            <Text
              style={{
                color: "#374151",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "32px",
              }}
            >
              We appreciate your interest in Movrr and our mission to transform
              urban advertising through sustainable bicycle advertising
              solutions.
            </Text>

            <Section style={{ textAlign: "center", marginBottom: "40px" }}>
              <Link
                href="https://movrr.com/careers"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  display: "inline-block",
                  backgroundColor: "#23b245",
                  color: "#ffffff",
                  fontWeight: "700",
                  padding: "12px 24px",
                  textDecoration: "none",
                  border: "2px solid #1a8a35",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "14px",
                }}
              >
                View Other Openings
              </Link>
            </Section>

            <Hr style={{ borderTop: "2px solid #e5e7eb", margin: "32px 0" }} />

            {/* Footer - OUTFRONT style */}
            <Section
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "12px",
              }}
            >
              <Text style={{ marginBottom: "8px", fontWeight: "700" }}>
                MOVRR
              </Text>
              <Text style={{ marginBottom: "4px" }}>
                City-scale bicycle advertising intelligence platform
              </Text>
              <Text style={{ marginBottom: "4px" }}>
                <Link
                  href="mailto:careers@movrr.com"
                  style={{ color: "#23b245", textDecoration: "none" }}
                >
                  careers@movrr.com
                </Link>
              </Text>
              <Text>
                © {new Date().getFullYear()} Movrr. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default JobApplicationConfirmationTemplate;
