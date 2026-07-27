import { Column, Row, Section, Text } from "@react-email/components";
import { BaseEmail, MutedNote, appUrl, colors } from "./_components/base-email";
import type { WaitlistInput } from "@/lib/waitlist/schema";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";

interface Props {
  data: WaitlistInput;
  locale: Locale;
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
  partner:
    "Until then, we're building the infrastructure worth integrating with.",
};

export function WaitlistConfirmation({ data, locale }: Props) {
  const firstName = data.name.split(" ")[0];
  const isDutch = locale === "nl";
  const dutchBody: typeof audienceBody = {
    rider:
      "Je staat op de wachtlijst. Zodra MOVRR in jouw stad start, krijg je als een van de eersten bericht en toegang.",
    brand:
      "Je merk staat op onze lijst. Zodra er ruimte is voor een passende campagne, nemen we contact op met de mogelijkheden.",
    partner:
      "Je aanmelding is binnen. Zodra er in jouw regio ruimte is voor een technische of commerciële samenwerking, nemen we rechtstreeks contact op.",
  };
  const dutchSteps: typeof whatHappensNext = {
    rider: [
      "MOVRR start stad voor stad. Zodra jouw stad aan de beurt is, krijg je vóór de openbare aankondiging een e-mail.",
      "Je krijgt als eerste toegang, zodat je rustig je account kunt instellen en MOVRR kunt uitproberen.",
      "Vanaf je eerste geverifieerde kilometer verdien je MOVRR Points. Zonder minimale afstand.",
    ],
    brand: [
      "We bekijken iedere merkaanmelding afzonderlijk. Een goede match gaat voor zoveel mogelijk campagnes.",
      "Zodra er ruimte is, ontvang je als eerste informatie over tarieven, formats en planning.",
      "De campagnerapportage is gebaseerd op geverifieerde ritgegevens.",
    ],
    partner: [
      "We bekijken iedere partneraanmelding afzonderlijk en bespreken techniek en commerciële afspraken rechtstreeks.",
      "Zodra het integratieprogramma start, benaderen we aangemelde partners vóór de openbare aankondiging.",
      "Je ontvangt de technische documentatie en voorwaarden zodra jouw stad of regio binnen de planning valt.",
    ],
  };
  const dutchClose: typeof cityClose = {
    rider: "Tot die tijd: goede rit.",
    brand: "We spreken je zodra er een passende mogelijkheid is.",
    partner: "We spreken je zodra er een passende mogelijkheid is.",
  };
  const cityContext = data.city ? ` in ${data.city}` : "";
  const audienceLabel = isDutch
    ? { rider: "fietser", brand: "merk", partner: "partner" }[data.audience]
    : data.audience;
  const steps = (isDutch ? dutchSteps : whatHappensNext)[data.audience];

  return (
    <BaseEmail
      locale={locale}
      previewText={
        isDutch
          ? `Je aanmelding is binnen. Je krijgt als eerste bericht zodra MOVRR start${cityContext}.`
          : `You're registered. MOVRR opens city by city. You'll hear first${cityContext}.`
      }
      title={
        isDutch ? `Je bent erbij, ${firstName}.` : `You're in, ${firstName}.`
      }
      intro={(isDutch ? dutchBody : audienceBody)[data.audience]}
      actionLabel={isDutch ? "Bekijk hoe MOVRR werkt" : "See how MOVRR works"}
      actionUrl={appUrl(withLocalePath(locale, "/how-it-works"))}
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
          {isDutch ? "Hoe gaat het verder?" : "What happens next"}
        </Text>
        {steps.map((step, i) => (
          <Section key={i} style={{ margin: "0 0 10px" }}>
            <Row>
              <Column
                style={{
                  width: "32px",
                  verticalAlign: "top",
                  paddingTop: "1px",
                }}
              >
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
          {(isDutch ? dutchClose : cityClose)[data.audience]}
        </Text>
      </Section>

      <MutedNote>
        {isDutch ? "Aangemeld als" : "Registered as a"} {audienceLabel}
        {data.city ? ` · ${data.city}` : ""} · {data.email}
      </MutedNote>
    </BaseEmail>
  );
}
