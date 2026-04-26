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
  const subject = `New ${formatAudience(data.audience)} · ${data.city}`;

  const geoLocation = [geo.country_code, geo.geo_region_code, geo.geo_city]
    .filter(Boolean)
    .join(" · ");

  const utmLine = [
    data.utm_source,
    data.utm_medium,
    data.utm_campaign,
    data.utm_content,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <BaseEmail
      previewText={subject}
      title={subject}
      intro="New waitlist registration received."
    >
      <Section style={{ margin: "20px 0 0" }}>
        {/* Signup identity */}
        <DataBlock label="Audience" value={formatAudience(data.audience)} />
        <DataBlock label="Name" value={data.name} />
        <DataBlock label="Email" value={data.email} />
        <DataBlock label="City (entered)" value={data.city} />
        {data.audience === "rider" && data.bikeOwnership && (
          <DataBlock
            label="Bike status"
            value={bikeStatusLabel[data.bikeOwnership]}
          />
        )}

        {/* Geo enrichment — IP-derived, separate from user-entered city */}
        {geoLocation && (
          <DataBlock
            label="Geo location"
            value={`${geoLocation}${geo.timezone ? `  ·  ${geo.timezone}` : ""}`}
          />
        )}

        {/* Attribution */}
        {data.landing_path && (
          <DataBlock label="Landing page" value={data.landing_path} />
        )}
        {utmLine && <DataBlock label="UTM" value={utmLine} />}
        {data.utm_term && (
          <DataBlock label="Search term" value={data.utm_term} />
        )}
        {data.referrer && <DataBlock label="Referrer" value={data.referrer} />}

        <DataBlock label="Submitted at" value={timestamp} />
      </Section>

      <MutedNote>Internal notification. Do not reply to this email.</MutedNote>
    </BaseEmail>
  );
}
