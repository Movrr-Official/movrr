import { Section } from "@react-email/components";
import { BaseEmail, DataBlock, MutedNote } from "./_components/base-email";
import { bikeStatusLabel, formatAudience } from "./_components/waitlist-data";
import type { WaitlistInput } from "@/lib/waitlist/schema";
import type { GeoData } from "@/lib/geo";

interface Props {
  data: WaitlistInput;
  geo: GeoData;
}

export function WaitlistNotification({ data, geo }: Props) {
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
          <DataBlock
            label="Bike ownership"
            value={bikeStatusLabel[data.bikeStatus]}
          />
        )}

        {geo.country_code && (
          <DataBlock
            label="Location"
            value={[geo.country_code, geo.region, geo.geo_city]
              .filter(Boolean)
              .join(" · ")}
          />
        )}
        {geo.timezone && <DataBlock label="Timezone" value={geo.timezone} />}

        {(data.utm_source || data.utm_medium || data.utm_campaign) && (
          <DataBlock
            label="UTM"
            value={[data.utm_source, data.utm_medium, data.utm_campaign]
              .filter(Boolean)
              .join(" · ")}
          />
        )}
        {data.referrer && <DataBlock label="Referrer" value={data.referrer} />}

        <DataBlock label="Submitted at" value={timestamp} />
      </Section>

      <MutedNote>Internal notification. Do not reply to this email.</MutedNote>
    </BaseEmail>
  );
}
