import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("nl");
  return buildPageMetadata("nl", dictionary, "home");
}

export default async function Page() {
  const dictionary = await getDictionary("nl");
  return <HomePage locale="nl" dictionary={dictionary} />;
}
