import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface BaseEmailProps {
  previewText: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
  actionLabel?: string;
  actionUrl?: string;
  actionNote?: string;
  footerNote?: string;
  unsubscribeUrl?: string;
}

const supportEmail = "hello@movrr.nl";
const appBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://movrr.nl";

export const EMAIL_ROUTES = {
  waitlist: "/waitlist",
  contact: "/contact",
} as const;

export function appUrl(path: string) {
  return `${appBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

const PREVIEW_PADDING = "\u200C\u00A0".repeat(90);

export function BaseEmail({
  previewText,
  title,
  intro,
  children,
  actionLabel,
  actionUrl,
  actionNote,
  footerNote,
  unsubscribeUrl,
}: BaseEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        {previewText}
        {PREVIEW_PADDING}
      </Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Row>
              <Column style={{ width: "36px", verticalAlign: "middle" }}>
                <Link href={appBaseUrl}>
                  <Img
                    src={appUrl("/logo/icon-no-bg-green.png")}
                    alt="MOVRR"
                    width={28}
                    height={28}
                  />
                </Link>
              </Column>
              <Column style={{ verticalAlign: "middle" }}>
                <Link href={appBaseUrl} style={{ textDecoration: "none" }}>
                  <Text style={styles.logoWordmark}>MOVRR</Text>
                </Link>
              </Column>
            </Row>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.intro}>{intro}</Text>

            {children}

            {actionLabel && actionUrl && (
              <Section style={styles.actionSection}>
                <Button href={actionUrl} style={styles.actionButton}>
                  {actionLabel}
                </Button>
              </Section>
            )}

            {actionNote ? (
              <Text style={styles.supporting}>{actionNote}</Text>
            ) : null}
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              MOVRR &middot; Movement that earns.
            </Text>
            {footerNote ? (
              <Text style={styles.footerText}>{footerNote}</Text>
            ) : null}
            <Text style={styles.footerText}>
              Questions?{" "}
              <a href={`mailto:${supportEmail}`} style={styles.link}>
                {supportEmail}
              </a>
            </Text>
            {unsubscribeUrl ? (
              <Text style={styles.footerText}>
                <a href={unsubscribeUrl} style={styles.unsubscribeLink}>
                  Unsubscribe
                </a>
              </Text>
            ) : null}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function DataBlock({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <Section style={styles.block}>
      <Text style={styles.blockLabel}>{label}</Text>
      <Text style={styles.blockValue}>{value}</Text>
    </Section>
  );
}

export function MutedNote({ children }: { children: React.ReactNode }) {
  return <Text style={styles.supporting}>{children}</Text>;
}

// Email-safe hex approximations of MOVRR oklch design tokens
export const colors = {
  textBrand: "#1e3a2c",
  textMuted: "#4d6358",
  textFaint: "#7a8e82",
  accentGreen: "#3a7d52",
  bgCanvas: "#ffffff",
  bgSoft: "#f4f7f5",
  bgPanel: "#ecf0ec",
  borderSoft: "#e2e8e0",
  borderMuted: "#cdd8ca",
} as const;

const styles = {
  main: {
    backgroundColor: colors.bgCanvas,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial,sans-serif',
    color: colors.textBrand,
  },
  container: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "28px 28px 44px",
  },
  header: {
    padding: "8px 0 16px",
  },
  logoWordmark: {
    margin: "0",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "-0.03em",
    color: colors.textBrand,
  },
  divider: {
    borderColor: colors.borderSoft,
    margin: "0",
  },
  content: {
    padding: "28px 0",
  },
  title: {
    fontSize: "26px",
    lineHeight: "32px",
    fontWeight: "700",
    letterSpacing: "-0.03em",
    color: colors.textBrand,
    margin: "0 0 14px",
  },
  intro: {
    fontSize: "15px",
    lineHeight: "24px",
    color: colors.textMuted,
    margin: "0 0 20px",
  },
  block: {
    margin: "0 0 10px",
    padding: "12px 16px",
    borderRadius: "10px",
    backgroundColor: colors.bgSoft,
    border: `1px solid ${colors.borderSoft}`,
  },
  blockLabel: {
    margin: "0 0 3px",
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: colors.textFaint,
  },
  blockValue: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "22px",
    color: colors.textBrand,
    whiteSpace: "pre-wrap" as const,
  },
  actionSection: {
    margin: "24px 0 14px",
    textAlign: "center" as const,
  },
  actionButton: {
    backgroundColor: colors.accentGreen,
    borderRadius: "999px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "13px 28px",
    letterSpacing: "-0.01em",
  },
  supporting: {
    margin: "10px 0 0",
    fontSize: "13px",
    lineHeight: "20px",
    color: colors.textFaint,
  },
  footer: {
    borderTop: `1px solid ${colors.borderSoft}`,
    padding: "18px 0 0",
  },
  footerText: {
    margin: "0 0 6px",
    fontSize: "12px",
    lineHeight: "18px",
    color: colors.textFaint,
  },
  link: {
    color: colors.accentGreen,
    textDecoration: "underline",
  },
  unsubscribeLink: {
    color: colors.textFaint,
    textDecoration: "underline",
  },
};
