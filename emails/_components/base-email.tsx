import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
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
const MOVRR_ICON_URL =
  "https://cdn.jsdelivr.net/gh/Movrr-Official/movrr-new-@main/public/logo/icon-no-bg-white.png";

const EMAIL_CSS = `
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
  @media (prefers-color-scheme: dark) {
    .email-bg { background-color: #101512 !important; }
    .email-card, .email-content { background-color: #0c2d1c !important; border-color: #365142 !important; }
    .email-heading, .email-value { color: #f5f5ef !important; }
    .email-body { color: #d1ddd4 !important; }
    .email-muted { color: #a8b6ac !important; }
    .email-panel { background-color: transparent !important; border-color: #365142 !important; }
    .email-rule { border-color: #344238 !important; }
    .email-link { color: #8fd1a5 !important; }
  }
  @media only screen and (max-width: 600px) {
    .email-card { width: 100% !important; margin: 0 !important; }
    .email-header { padding: 28px 24px 30px !important; }
    .email-content { padding: 34px 24px 38px !important; }
    .email-footer { padding: 24px !important; }
    .email-title { font-size: 36px !important; line-height: 37px !important; }
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
            <table role="presentation" cellPadding={0} cellSpacing={0} border={0} width="100%">
              <tbody>
                <tr>
                  <td style={styles.logoWrap}>
                    <Link href={appBaseUrl} style={styles.logoLink}>
                      <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={styles.logoTable}>
                        <tbody>
                          <tr>
                            <td style={styles.logoIconCell}>
                              <Img src={MOVRR_ICON_URL} alt="" width={30} height={30} style={styles.logoIcon} />
                            </td>
                            <td style={styles.logoWordmarkCell}>
                              <span style={styles.logoWordmark}>MOVRR</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <Text className="email-title" style={styles.heroTitle}>{title}</Text>
            <Text style={styles.heroIntro}>{intro}</Text>
            {actionLabel && actionUrl ? (
              <Section style={styles.actionSection}>
                <Button className="email-button" href={actionUrl} aria-label={actionLabel} style={styles.actionButton}>{actionLabel} &nbsp;&#8594;</Button>
              </Section>
            ) : null}
          </Section>

          <Section className="email-content" style={styles.content}>
            {children}

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
              {footer.tagline}
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
  textBrand: "#0a3d2e", textMuted: "#405b51", textFaint: "#737373",
  accentGreen: "#10c259", bgCanvas: "#003415", bgCard: "#ffffff",
  bgSoft: "#f5f5f3", bgPanel: "#ffffff", borderSoft: "#e5e5e4", borderMuted: "#cccccc",
} as const;

const styles = {
  main: {
    backgroundColor: colors.bgCanvas,
    fontFamily:
      'Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    color: colors.textBrand,
    margin: "0",
    padding: "0",
    width: "100%",
    WebkitTextSizeAdjust: "100%" as const,
  },
  container: {
    width: "100%",
    margin: "24px auto",
    maxWidth: "640px",
    backgroundColor: colors.bgCard,
    border: "0",
    borderRadius: "0",
    overflow: "hidden" as const,
  },
  header: {
    padding: "42px 48px 52px",
    backgroundColor: "#003415",
  },
  logoWrap: { padding: "0 0 48px" },
  logoLink: { display: "inline-block", textDecoration: "none" },
  logoTable: { borderCollapse: "collapse" as const },
  logoIconCell: { padding: "0 12px 0 0", verticalAlign: "middle" },
  logoIcon: { display: "block", width: "30px", height: "30px", border: "0", outline: "none" },
  logoWordmarkCell: { verticalAlign: "middle" },
  logoWordmark: {
    color: "#fcfcfc",
    fontFamily:
      'Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "-0.025em",
    lineHeight: "30px",
  },
  heroTitle: { margin: "0 0 20px", color: "#fcfcfc", fontSize: "46px", fontWeight: "600", lineHeight: "47px", letterSpacing: "-0.045em" },
  heroIntro: { margin: "0", color: "#8ba294", fontSize: "16px", lineHeight: "26px" },
  content: {
    padding: "42px 48px 46px",
    backgroundColor: colors.bgCard,
  },
  block: {
    margin: "0",
    padding: "15px 0",
    borderRadius: "0",
    backgroundColor: colors.bgPanel,
    borderTop: `1px solid ${colors.borderSoft}`,
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
    margin: "32px 0 0",
    textAlign: "left" as const,
  },
  actionButton: {
    backgroundColor: "#fafafa",
    border: "1px solid #567260",
    borderRadius: "12px",
    color: colors.textBrand,
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "15px 28px",
    letterSpacing: "-0.01em",
    minWidth: "210px",
    textAlign: "center" as const,
  },
  fallbackText: {
    margin: "8px 0 0",
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
    borderTop: "1px solid #214a35",
    padding: "26px 48px 30px",
    backgroundColor: "#072419",
  },
  footerText: {
    margin: "0 0 6px",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#91a69a",
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
