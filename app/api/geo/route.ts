import { NextResponse } from "next/server";
import { getGeoFromHeaders } from "@/lib/geo";

export const dynamic = "force-dynamic";

/** Soft IP-derived city for waitlist prefill. Client matches launch markets only. */
export async function GET() {
  const geo = await getGeoFromHeaders();
  const city = geo.geo_city?.trim() || null;
  return NextResponse.json(
    { city },
    {
      headers: {
        "Cache-Control": "private, no-store",
      },
    },
  );
}
