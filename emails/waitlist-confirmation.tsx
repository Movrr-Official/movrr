import { Section, Text } from "@react-email/components";
import * as React from "react";
import { BaseEmail, DataBlock } from "./_components/base-email";
import type { WaitlistInput } from "@/lib/waitlist/schema";

interface Props {
  data: WaitlistInput;
}

const audienceIntro: Record<WaitlistInput["audience"], string> = {
  rider:
    "You're registered as a rider. When MOVRR opens in your city, you'll be in the first wave — with priority access and early notification.",
  brand:
    "You're registered as a brand. When MOVRR opens first-round brand partnerships, your details will be at the top of the list.",
  partner:
    "You're registered as a partner. We'll reach out when integration and commercial partnership opportunities open in your region.",
};

const bikeStatusLabel: Record<NonNullable<WaitlistInput["bikeStatus"]>, string> = {
  own: "I own one",
  interested: "Not yet, but interested",
  planning: "Planning to get one",
};

export function WaitlistConfirmation({ data }: Props) {
  const cityLine = data.city ? ` in ${data.city}` : "";

  return (
    <BaseEmail
      previewText={`You're registered. MOVRR opens city by city — you'll hear first${cityLine}.`}
      title={`You're in, ${data.name.split(" ")[0]}.`}
      intro={audienceIntro[data.audience]}
    >
      <Section style={{ margin: "20px 0 0" }}>
        <DataBlock label="Registered as" value={data.audience} />
        <DataBlock label="Email" value={data.email} />
        {data.city && <DataBlock label="City" value={data.city} />}
        {data.audience === "rider" && data.bikeStatus && (
          <DataBlock label="Bike ownership" value={bikeStatusLabel[data.bikeStatus]} />
        )}
      </Section>

      <Text
        style={{
          margin: "20px 0 0",
          fontSize: "13px",
          lineHeight: "20px",
          color: "#7a8e82",
        }}
      >
        No action required. We&apos;ll reach out when your city opens.
      </Text>
    </BaseEmail>
  );
}
