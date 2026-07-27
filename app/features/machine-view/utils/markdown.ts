import type {
  MachineBlock,
  MachineDocument,
  MachineListItem,
} from "@/app/features/machine-view/types/machine-document";

function itemText(item: MachineListItem) {
  const value = item.href ? `[${item.text}](${item.href})` : item.text;
  return item.label ? `**${item.label}:** ${value}` : value;
}

function escapeCell(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function serializeBlock(block: MachineBlock): string {
  switch (block.type) {
    case "paragraph":
      return block.text;
    case "heading":
      return `### ${block.text}`;
    case "list":
      return block.items
        .map(
          (item, index) =>
            `${block.ordered ? `${index + 1}.` : "-"} ${itemText(item)}`,
        )
        .join("\n");
    case "table":
      return [
        `| ${block.headers.map(escapeCell).join(" | ")} |`,
        `| ${block.headers.map(() => "---").join(" | ")} |`,
        ...block.rows.map(
          (row) => `| ${row.map(escapeCell).join(" | ")} |`,
        ),
      ].join("\n");
  }
}

export function serializeMachineDocument(document: MachineDocument): string {
  const notice = [
    `# ${document.notice.title}`,
    "",
    ...document.notice.paragraphs.flatMap((paragraph) => [paragraph, ""]),
    "---",
  ];
  const introduction = [`# ${document.title}`, "", document.description];
  const sections = document.sections.flatMap((section) => [
    `## ${section.title}`,
    "",
    section.blocks.map(serializeBlock).join("\n\n"),
  ]);

  return [...notice, "", ...introduction, "", ...sections]
    .join("\n")
    .trim()
    .concat("\n");
}
