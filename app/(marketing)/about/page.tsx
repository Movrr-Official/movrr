import { AboutPage } from "@/components/pages/AboutPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "about");
}
export default async function Page() {
  const dictionary = await getDictionary("en");
  return <AboutPage copy={dictionary.pages.about} />;
}
