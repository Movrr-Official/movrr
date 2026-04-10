import { Column, Row, Section, Text } from "@react-email/components";
import { BaseEmail, MutedNote, appUrl, colors } from "./_components/base-email";
import type { WaitlistInput } from "@/lib/waitlist/schema";

interface Props {
  data: WaitlistInput;
}

const audienceBody: Record<WaitlistInput["audience"], string> = {
  rider:
    "You're in the first wave. When MOVRR opens in your city, you'll hear before anyone else and get access before the public launch.",
  brand:
    "You're registered. When first-round brand partnerships open, your details are at the top. We'll be in touch with specifics when the time is right.",
  partner:
    "You're registered. We'll reach out directly when integration and commercial partnership opportunities open in your region.",
};

const whatHappensNext: Record<WaitlistInput["audience"], readonly string[]> = {
  rider: [
    "MOVRR rolls out city by city. When your city is confirmed, you'll get an email before the public announcement.",
    "You'll receive early access ahead of the general launch, with enough time to set up your account and get familiar with the platform.",
    "From your first verified trip, you start earning. No minimum, no cap.",
  ],
  brand: [
    "We review each brand registration before opening partnership discussions. Quality of reach matters more than volume.",
    "When first-round slots open, registered brands hear first with full rate card and campaign specs.",
    "Campaigns run against verified movement data, not estimated impressions. You'll know exactly who carried your brand and where.",
  ],
  partner: [
    "We review each partner registration individually. Integration and commercial terms are agreed directly, not through a standardised process.",
    "When the integration programme opens, registered partners are the first we engage, before any public announcement.",
    "We'll share technical documentation and partnership terms as soon as your city or region is in scope.",
  ],
};

const cityClose: Record<WaitlistInput["audience"], string> = {
  rider: "Until then, keep moving.",
  brand: "Until then, we're building something worth your attention.",
  partner: "Until then, we're building the infrastructure worth integrating with.",
};

export function WaitlistConfirmation({ data }: Props) {
  const firstName = data.name.split(" ")[0];
  const cityContext = data.city ? ` in ${data.city}` : "";
  const steps = whatHappensNext[data.audience];

  return (
    <BaseEmail
      previewText={`You're registered. MOVRR opens city by city. You'll hear first${cityContext}.`}
      title={`You're in, ${firstName}.`}
      intro={audienceBody[data.audience]}
      actionLabel="See how MOVRR works"
      actionUrl={appUrl("/how-it-works")}
    >
      {/* What happens next */}
      <Section style={{ margin: "24px 0 0" }}>
        <Text
          style={{
            margin: "0 0 14px",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: colors.textFaint,
          }}
        >
          What happens next
        </Text>
        {steps.map((step, i) => (
          <Section key={i} style={{ margin: "0 0 10px" }}>
            <Row>
              <Column style={{ width: "32px", verticalAlign: "top", paddingTop: "1px" }}>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "22px",
                    color: colors.accentGreen,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Text>
              </Column>
              <Column style={{ verticalAlign: "top" }}>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: colors.textBrand,
                  }}
                >
                  {step}
                </Text>
              </Column>
            </Row>
          </Section>
        ))}
      </Section>

      {/* Sign-off */}
      <Section style={{ margin: "20px 0 0" }}>
        <Text
          style={{
            margin: "0",
            fontSize: "15px",
            lineHeight: "24px",
            color: colors.textMuted,
          }}
        >
          {cityClose[data.audience]}
        </Text>
      </Section>

      <MutedNote>
        Registered as a {data.audience}
        {data.city ? ` · ${data.city}` : ""} · {data.email}
      </MutedNote>
    </BaseEmail>
  );
}
