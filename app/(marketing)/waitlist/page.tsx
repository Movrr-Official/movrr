import { WaitlistPage } from "@/components/pages/WaitlistPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { loadWaitlistPageProps } from "@/lib/waitlist/page-props";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "waitlist");
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const props = await loadWaitlistPageProps("en", params);

  return (
    <WaitlistPage
      locale="en"
      dictionary={props.dictionary}
      initialAudience={props.initialAudience}
      initialCity={props.initialCity}
      cityFromQuery={props.cityFromQuery}
    />
  );
}
