import { WaitlistPage } from "@/components/pages/WaitlistPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata("nl", dictionary, "waitlist");
}

export default async function Page() {
  const dictionary = await getDictionary("nl");
  return <WaitlistPage locale="nl" dictionary={dictionary} />;
}
