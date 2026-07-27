import { WaitlistPage } from "@/components/pages/WaitlistPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "waitlist");
}

export default async function Page() {
  const dictionary = await getDictionary("en");
  return <WaitlistPage locale="en" dictionary={dictionary} />;
}
