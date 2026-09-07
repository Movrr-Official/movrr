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
import type { Locale } from "@/lib/i18n/config";

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
  locale?: Locale;
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

const EMAIL_CSS = `
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
  @media (prefers-color-scheme: dark) {
    .email-bg { background-color: #101512 !important; }
    .email-card { background-color: #19201b !important; border-color: #344238 !important; }
    .email-heading, .email-wordmark, .email-value { color: #f1f5f2 !important; }
    .email-body { color: #d1ddd4 !important; }
    .email-muted { color: #a8b6ac !important; }
    .email-panel { background-color: #202b23 !important; border-color: #3a4a3e !important; }
    .email-rule { border-color: #344238 !important; }
    .email-link { color: #8fd1a5 !important; }
  }
  @media only screen and (max-width: 600px) {
    .email-card { width: auto !important; margin: 16px !important; }
    .email-header { padding: 22px 22px 18px !important; }
    .email-content { padding: 24px 22px 22px !important; }
    .email-footer { padding: 18px 22px 22px !important; }
    .email-title { font-size: 23px !important; line-height: 29px !important; }
    .email-button { display: block !important; text-align: center !important; }
  }
`;

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
  locale = "en",
}: BaseEmailProps) {
  const footer =
    locale === "nl"
      ? {
          tagline: "Elke rit telt.",
          questions: "Vragen?",
          unsubscribe: "Afmelden",
          fallback: "Werkt de knop niet? Kopieer deze link naar je browser:",
        }
      : {
          tagline: "Movement that earns.",
          questions: "Questions?",
          unsubscribe: "Unsubscribe",
          fallback: "If the button does not work, copy this link into your browser:",
        };

  return (
    <Html lang={locale}>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{EMAIL_CSS}</style>
      </Head>
      <Preview>
        {previewText}
        {PREVIEW_PADDING}
      </Preview>
      <Body className="email-bg" style={styles.main}>
        <Container className="email-card" style={styles.container}>
          {/* Header */}
          <Section className="email-header" style={styles.header}>
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
                  <Text className="email-wordmark" style={styles.logoWordmark}>MOVRR</Text>
                </Link>
              </Column>
            </Row>
          </Section>

          <Hr className="email-rule" style={styles.divider} />

          <Section className="email-content" style={styles.content}>
            <Text className="email-heading email-title" style={styles.title}>{title}</Text>
            <Text className="email-body" style={styles.intro}>{intro}</Text>

            {children}

            {actionLabel && actionUrl && (
              <Section style={styles.actionSection}>
                <Button className="email-button" href={actionUrl} aria-label={actionLabel} style={styles.actionButton}>
                  {actionLabel}
                </Button>
              </Section>
            )}

            {actionLabel && actionUrl ? (
              <Text className="email-muted" style={styles.fallbackText}>
                {footer.fallback}<br />
                <Link className="email-link" href={actionUrl} style={styles.fallbackLink}>
                  {actionUrl}
                </Link>
              </Text>
            ) : null}

            {actionNote ? (
              <Text className="email-muted" style={styles.supporting}>{actionNote}</Text>
            ) : null}
          </Section>

          <Section className="email-footer email-rule" style={styles.footer}>
            <Text className="email-muted" style={styles.footerText}>
              MOVRR &middot; {footer.tagline}
            </Text>
            {footerNote ? (
              <Text className="email-muted" style={styles.footerText}>{footerNote}</Text>
            ) : null}
            <Text className="email-muted" style={styles.footerText}>
              {footer.questions}{" "}
                <a className="email-link" href={`mailto:${supportEmail}`} style={styles.link}>
                {supportEmail}
              </a>
            </Text>
            {unsubscribeUrl ? (
              <Text className="email-muted" style={styles.footerText}>
                <a href={unsubscribeUrl} style={styles.unsubscribeLink}>
                  {footer.unsubscribe}
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
    <Section className="email-panel" style={styles.block}>
      <Text className="email-muted" style={styles.blockLabel}>{label}</Text>
      <Text className="email-value" style={styles.blockValue}>{value}</Text>
    </Section>
  );
}

export function MutedNote({ children }: { children: React.ReactNode }) {
  return <Text className="email-muted" style={styles.supporting}>{children}</Text>;
}

// Email-safe hex approximations of MOVRR oklch design tokens
export const colors = {
  textBrand: "#1e3a2c",
  textMuted: "#4d6358",
  textFaint: "#7a8e82",
  accentGreen: "#3a7d52",
  bgCanvas: "#f4f7f5",
  bgCard: "#ffffff",
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
    margin: "0",
    padding: "0",
    width: "100%",
    WebkitTextSizeAdjust: "100%" as const,
  },
  container: {
    width: "100%",
    margin: "40px auto",
    maxWidth: "560px",
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderSoft}`,
    borderRadius: "14px",
    overflow: "hidden" as const,
  },
  header: {
    padding: "26px 30px 22px",
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
    padding: "30px 30px 26px",
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
    backgroundColor: "#2f6844",
    border: "1px solid #2f6844",
    borderRadius: "8px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "13px 28px",
    letterSpacing: "-0.01em",
    minWidth: "210px",
    textAlign: "center" as const,
  },
  fallbackText: {
    margin: "0",
    fontSize: "12px",
    lineHeight: "19px",
    color: colors.textFaint,
  },
  fallbackLink: {
    color: colors.accentGreen,
    textDecoration: "underline",
    wordBreak: "break-all" as const,
  },
  supporting: {
    margin: "10px 0 0",
    fontSize: "13px",
    lineHeight: "20px",
    color: colors.textFaint,
  },
  footer: {
    borderTop: `1px solid ${colors.borderSoft}`,
    padding: "20px 30px 24px",
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
