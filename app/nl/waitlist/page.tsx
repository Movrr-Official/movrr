import { WaitlistPage } from "@/components/pages/WaitlistPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { loadWaitlistPageProps } from "@/lib/waitlist/page-props";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata("nl", dictionary, "waitlist");
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const props = await loadWaitlistPageProps("nl", params);

  return (
    <WaitlistPage
      locale="nl"
      dictionary={props.dictionary}
      initialAudience={props.initialAudience}
      initialCity={props.initialCity}
      cityFromQuery={props.cityFromQuery}
    />
  );
}
