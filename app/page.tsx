import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "home");
}

export default async function Page() {
  const dictionary = await getDictionary("en");
  return <HomePage locale="en" dictionary={dictionary} />;
}
