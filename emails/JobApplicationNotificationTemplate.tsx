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
  Row,
  Column,
} from "@react-email/components";

interface Props {
  applicantName: string;
  applicantEmail: string;
  jobId: string;
  jobTitle: string;
  coverLetter?: string;
  phone?: string;
  linkedin?: string;
  portfolio?: string;
}

const JobApplicationNotificationTemplate = ({
  applicantName,
  applicantEmail,
  jobId,
  jobTitle,
  coverLetter,
  phone,
  linkedin,
  portfolio,
}: Props) => {
  return (
    <Html>
      <Head>
        <title>{`New Job Application: ${applicantName} | Movrr`}</title>
      </Head>
      <Preview>
        {`New application for ${jobTitle} from ${applicantName}`}
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
            {/* Priority Alert - OUTFRONT style */}
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
              <Heading
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                New Job Application
              </Heading>
              <Text style={{ color: "#374151", fontSize: "14px" }}>
                Please review and respond within <strong>1-2 weeks</strong> for
                best candidate experience.
              </Text>
            </Section>

            {/* Position Information */}
            <Section
              style={{
                border: "2px solid #e5e7eb",
                padding: "24px",
                marginBottom: "32px",
              }}
            >
              <Heading
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "24px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {jobTitle}
              </Heading>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Job ID: {jobId}
              </Text>
            </Section>

            {/* Applicant Details - OUTFRONT style */}
            <Section
              style={{
                border: "2px solid #e5e7eb",
                padding: "24px",
                marginBottom: "32px",
              }}
            >
              <Heading
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "24px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Applicant Information
              </Heading>

              <Row style={{ marginBottom: "16px" }}>
                <Column style={{ width: "33%" }}>
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Name
                  </Text>
                </Column>
                <Column style={{ width: "67%" }}>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    {applicantName}
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginBottom: "16px" }}>
                <Column style={{ width: "33%" }}>
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Email
                  </Text>
                </Column>
                <Column style={{ width: "67%" }}>
                  <Link
                    href={`mailto:${applicantEmail}`}
                    style={{
                      fontSize: "16px",
                      color: "#23b245",
                      textDecoration: "none",
                    }}
                  >
                    {applicantEmail}
                  </Link>
                </Column>
              </Row>

              {phone && (
                <Row style={{ marginBottom: "16px" }}>
                  <Column style={{ width: "33%" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "#6b7280",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Phone
                    </Text>
                  </Column>
                  <Column style={{ width: "67%" }}>
                    <Text style={{ fontSize: "16px", color: "#111827" }}>
                      {phone}
                    </Text>
                  </Column>
                </Row>
              )}

              {linkedin && (
                <Row style={{ marginBottom: "16px" }}>
                  <Column style={{ width: "33%" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "#6b7280",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      LinkedIn
                    </Text>
                  </Column>
                  <Column style={{ width: "67%" }}>
                    <Link
                      href={linkedin}
                      style={{
                        fontSize: "16px",
                        color: "#23b245",
                        textDecoration: "none",
                      }}
                    >
                      View Profile
                    </Link>
                  </Column>
                </Row>
              )}

              {portfolio && (
                <Row style={{ marginBottom: "16px" }}>
                  <Column style={{ width: "33%" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "#6b7280",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Portfolio
                    </Text>
                  </Column>
                  <Column style={{ width: "67%" }}>
                    <Link
                      href={portfolio}
                      style={{
                        fontSize: "16px",
                        color: "#23b245",
                        textDecoration: "none",
                      }}
                    >
                      View Portfolio
                    </Link>
                  </Column>
                </Row>
              )}

              <Row style={{ marginTop: "16px", paddingTop: "16px", borderTop: "2px solid #e5e7eb" }}>
                <Column>
                  <Text
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                    }}
                  >
                    Resume
                  </Text>
                  <Text style={{ fontSize: "14px", color: "#374151" }}>
                    Resume has been attached to this application. Check your
                    ATS or application management system to view.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Cover Letter */}
            {coverLetter && (
              <Section style={{ marginBottom: "32px" }}>
                <Heading
                  style={{
                    fontSize: "18px",
                    fontWeight: "900",
                    color: "#374151",
                    marginBottom: "12px",
                    paddingBottom: "8px",
                    borderBottom: "2px solid #e5e7eb",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Cover Letter
                </Heading>
                <Text
                  style={{
                    color: "#111827",
                    backgroundColor: "#f9fafb",
                    padding: "16px",
                    border: "2px solid #e5e7eb",
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {coverLetter}
                </Text>
              </Section>
            )}

            {/* Quick Actions - OUTFRONT style */}
            <Section style={{ textAlign: "center", marginBottom: "32px" }}>
              <Row>
                <Column>
                  <Link
                    href={`mailto:${applicantEmail}?subject=Re: Your Application for ${jobTitle}`}
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
                      fontSize: "12px",
                      marginRight: "8px",
                    }}
                  >
                    Reply to Applicant
                  </Link>
                </Column>
                <Column>
                  <Link
                    href="https://movrr.com/careers"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#ffffff",
                      color: "#111827",
                      fontWeight: "700",
                      padding: "12px 24px",
                      textDecoration: "none",
                      border: "2px solid #e5e7eb",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "12px",
                    }}
                  >
                    View Careers Page
                  </Link>
                </Column>
              </Row>
            </Section>

            <Hr style={{ borderTop: "2px solid #e5e7eb", margin: "24px 0" }} />

            {/* Footer - OUTFRONT style */}
            <Section
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "12px",
              }}
            >
              <Text style={{ marginBottom: "4px" }}>
                This message was generated automatically from the Movrr job
                application system.
              </Text>
              <Text>
                Received at{" "}
                {`${new Date().getDate()} ${new Date().toLocaleString("en-US", {
                  month: "short",
                })} ${new Date().getFullYear()}, ${new Date().toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}`}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default JobApplicationNotificationTemplate;
