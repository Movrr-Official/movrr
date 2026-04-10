import { Section, Text } from "@react-email/components";
import * as React from "react";
import { BaseEmail, DataBlock } from "./_components/base-email";
import type { WaitlistInput } from "@/lib/waitlist/schema";

interface Props {
  data: WaitlistInput;
}

const bikeStatusLabel: Record<NonNullable<WaitlistInput["bikeStatus"]>, string> = {
  own: "I own one",
  interested: "Not yet, but interested",
  planning: "Planning to get one",
};

export function WaitlistNotification({ data }: Props) {
  const timestamp = new Date().toUTCString();
  const subject = `New ${data.audience} registration${data.city ? ` · ${data.city}` : ""}`;

  return (
    <BaseEmail
      previewText={subject}
      title={subject}
      intro="A new registration was submitted via the MOVRR waitlist form."
    >
      <Section style={{ margin: "20px 0 0" }}>
        <DataBlock label="Audience" value={data.audience} />
        <DataBlock label="Name" value={data.name} />
        <DataBlock label="Email" value={data.email} />
        {data.city && <DataBlock label="City" value={data.city} />}
        {data.audience === "rider" && data.bikeStatus && (
          <DataBlock label="Bike ownership" value={bikeStatusLabel[data.bikeStatus]} />
        )}
        <DataBlock label="Submitted at" value={timestamp} />
      </Section>

      <Text
        style={{
          margin: "20px 0 0",
          fontSize: "12px",
          lineHeight: "18px",
          color: "#7a8e82",
        }}
      >
        Internal notification — do not reply to this email.
      </Text>
    </BaseEmail>
  );
}
