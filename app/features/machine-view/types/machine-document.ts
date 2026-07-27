export interface MachineListItem {
  label?: string;
  text: string;
  href?: string;
}

export type MachineBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; ordered?: boolean; items: MachineListItem[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface MachineSection {
  id: string;
  title: string;
  blocks: MachineBlock[];
}

export interface MachineDocument {
  notice: { title: string; paragraphs: string[] };
  title: string;
  description: string;
  sections: MachineSection[];
}

export type MachineFormat = "markdown";
