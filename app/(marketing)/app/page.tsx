import { AppShowcase } from "@/components/app-showcase/AppShowcase";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "app");
}

export default async function Page() {
  const dictionary = await getDictionary("en");
  return <AppShowcase locale="en" copy={dictionary.pages.app} />;
}
