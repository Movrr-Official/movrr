import { MachineViewPage } from "@/app/features/machine-view/components/MachineViewPage";
import { buildMachineDocument } from "@/app/features/machine-view/services/machine-content";
import { serializeMachineDocument } from "@/app/features/machine-view/utils/markdown";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildMachineMetadata } from "@/lib/i18n/machine-metadata";

export async function generateMetadata() {
  const dictionary = await getDictionary("nl");
  return buildMachineMetadata("nl", dictionary);
}

export default async function MachinePageNl() {
  const dictionary = await getDictionary("nl");
  const document = buildMachineDocument(dictionary, "nl");
  return (
    <MachineViewPage
      locale="nl"
      dictionary={dictionary}
      document={document}
      markdown={serializeMachineDocument(document)}
    />
  );
}
