import { CareersPage } from "@/components/pages/CareersPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "careers");
}
export default async function Page() {
  const dictionary = await getDictionary("en");
  return <CareersPage copy={dictionary.pages.careers} />;
}
