import { getDictionary } from "@/lib/i18n/dictionary";
import { getGeoFromHeaders } from "@/lib/geo";
import type { Locale } from "@/lib/i18n/config";
import {
  parseAudience,
  resolvePrefillCity,
  type WaitlistAudience,
} from "@/lib/waitlist/prefill";

export async function loadWaitlistPageProps(
  locale: Locale,
  searchParams: Record<string, string | string[] | undefined>,
) {
  const dictionary = await getDictionary(locale);
  const launchCities = dictionary.pages.waitlist.hero.cities;
  const initialAudience: WaitlistAudience | null = parseAudience(
    searchParams.audience,
  );
  const cityParam = Array.isArray(searchParams.city)
    ? searchParams.city[0]
    : searchParams.city;
  const cityFromQuery = Boolean(cityParam?.trim());
  const geo = await getGeoFromHeaders();
  const initialCity = resolvePrefillCity(
    cityParam,
    geo.geo_city,
    launchCities,
  );

  return {
    dictionary,
    initialAudience,
    initialCity,
    cityFromQuery,
  };
}
