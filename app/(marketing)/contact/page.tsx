import { ContactPage } from "@/components/pages/ContactPage";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildPageMetadata("en", dictionary, "contact");
}
export default async function Page() {
  const dictionary = await getDictionary("en");
  return <ContactPage copy={dictionary.pages.contact} />;
}
