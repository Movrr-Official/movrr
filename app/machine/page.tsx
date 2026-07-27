import { MachineViewPage } from "@/app/features/machine-view/components/MachineViewPage";
import { buildMachineDocument } from "@/app/features/machine-view/services/machine-content";
import { serializeMachineDocument } from "@/app/features/machine-view/utils/markdown";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildMachineMetadata } from "@/lib/i18n/machine-metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return buildMachineMetadata("en", dictionary);
}

export default async function MachinePage() {
  const dictionary = await getDictionary("en");
  const document = buildMachineDocument(dictionary, "en");
  return (
    <MachineViewPage
      locale="en"
      dictionary={dictionary}
      document={document}
      markdown={serializeMachineDocument(document)}
    />
  );
}
