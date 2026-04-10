import { Section } from "@react-email/components";
import * as React from "react";
import { BaseEmail, DataBlock, MutedNote } from "./_components/base-email";
import { bikeStatusLabel, formatAudience } from "./_components/waitlist-data";
import type { WaitlistInput } from "@/lib/waitlist/schema";

interface Props {
  data: WaitlistInput;
}

export function WaitlistNotification({ data }: Props) {
  const timestamp = new Date().toUTCString();
  const subject = `New ${formatAudience(data.audience)} registration${data.city ? ` · ${data.city}` : ""}`;

  return (
    <BaseEmail
      previewText={subject}
      title={subject}
      intro="New waitlist registration received."
    >
      <Section style={{ margin: "20px 0 0" }}>
        <DataBlock label="Audience" value={formatAudience(data.audience)} />
        <DataBlock label="Name" value={data.name} />
        <DataBlock label="Email" value={data.email} />
        {data.city && <DataBlock label="City" value={data.city} />}
        {data.audience === "rider" && data.bikeStatus && (
          <DataBlock label="Bike ownership" value={bikeStatusLabel[data.bikeStatus]} />
        )}
        <DataBlock label="Submitted at" value={timestamp} />
      </Section>

      <MutedNote>Internal notification. Do not reply to this email.</MutedNote>
    </BaseEmail>
  );
}
