import type { Locale } from "@/lib/i18n/config";
import { PAGE_PATHS, type Dictionary, type PageKey } from "@/locales/types";
import { localizedUrl } from "@/lib/seo/site";
import type {
  MachineBlock,
  MachineDocument,
  MachineListItem,
} from "@/app/features/machine-view/types/machine-document";

const FIELD_LABELS: Record<string, string> = {
  cta: "Call to action",
  ctaTitle: "Call to action",
  ctaBody: "Call to action detail",
  href: "Link",
  imageAlt: "Image description",
  q: "Question",
  a: "Answer",
  faqs: "Frequently asked questions",
  id: "Identifier",
  seo: "SEO",
};

function humanize(key: string) {
  return (
    FIELD_LABELS[key] ??
    key
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/[-_]/g, " ")
      .replace(/^./, (character) => character.toUpperCase())
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function titleFromRecord(value: Record<string, unknown>) {
  const candidates = [
    "title",
    "heading",
    "name",
    "question",
    "q",
    "statement",
    "category",
    "audience",
    "outlet",
    "label",
  ];
  return candidates.find((key) => typeof value[key] === "string");
}

function hrefForRecord(value: Record<string, unknown>) {
  const href = value.href;
  return typeof href === "string" ? href : undefined;
}

function primitiveItem(key: string, value: string | number | boolean) {
  const text = String(value);
  const href =
    key === "href" || key === "file" || /^https?:|^mailto:/.test(text)
      ? text
      : undefined;
  return { label: humanize(key), text, href } satisfies MachineListItem;
}

function recordToBlocks(
  record: Record<string, unknown>,
  includeContainerTitle = true,
): MachineBlock[] {
  const blocks: MachineBlock[] = [];
  const consumed = new Set<string>();
  const titleLine1 = record.titleLine1;
  const titleLine2 = record.titleLine2;

  if (typeof titleLine1 === "string" || typeof titleLine2 === "string") {
    blocks.push({
      type: "heading",
      text: [titleLine1, titleLine2]
        .filter((value): value is string => typeof value === "string")
        .join(" "),
    });
    consumed.add("titleLine1");
    consumed.add("titleLine2");
  } else if (includeContainerTitle && typeof record.title === "string") {
    blocks.push({ type: "heading", text: record.title });
    consumed.add("title");
  }

  for (const key of ["description", "body", "summary", "introduction"]) {
    const value = record[key];
    if (typeof value === "string") {
      blocks.push({ type: "paragraph", text: value });
      consumed.add(key);
    }
  }

  for (const [key, value] of Object.entries(record)) {
    if (consumed.has(key) || value === null || value === undefined) continue;

    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      blocks.push({ type: "list", items: [primitiveItem(key, value)] });
      continue;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      if (value.every((item) => !isRecord(item))) {
        blocks.push({
          type: "heading",
          text: humanize(key),
        });
        blocks.push({
          type: "list",
          items: value.map((item) => ({ text: String(item) })),
        });
        continue;
      }

      blocks.push({ type: "heading", text: humanize(key) });
      for (const item of value) {
        if (!isRecord(item)) continue;
        const titleKey = titleFromRecord(item);
        if (titleKey) {
          blocks.push({
            type: "heading",
            text: String(item[titleKey]),
          });
        }
        const nested = { ...item };
        if (titleKey) delete nested[titleKey];
        const href = hrefForRecord(item);
        if (href && titleKey) {
          blocks.push({
            type: "list",
            items: [{ text: String(item[titleKey]), href }],
          });
          delete nested.href;
        }
        blocks.push(...recordToBlocks(nested, false));
      }
      continue;
    }

    if (isRecord(value)) {
      blocks.push({ type: "heading", text: humanize(key) });
      blocks.push(...recordToBlocks(value, false));
    }
  }

  return blocks;
}

function pageBlocks(
  locale: Locale,
  dictionary: Dictionary,
  key: PageKey,
): MachineBlock[] {
  const metadata = dictionary.metadata.pages[key];
  return [
    { type: "paragraph", text: metadata.description },
    {
      type: "list",
      items: [
        {
          label: dictionary.common.machineView.sourcePage,
          text: localizedUrl(locale, PAGE_PATHS[key]),
          href: localizedUrl(locale, PAGE_PATHS[key]),
        },
      ],
    },
    ...recordToBlocks(
      dictionary.pages[key] as unknown as Record<string, unknown>,
    ),
  ];
}

export function buildMachineDocument(
  dictionary: Dictionary,
  locale: Locale,
): MachineDocument {
  const machine = dictionary.common.machineView;
  const pageEntries = Object.keys(PAGE_PATHS) as PageKey[];
  const commonContent = {
    branding: dictionary.common.branding,
    navigation: dictionary.common.navigation,
    footer: dictionary.common.footer,
    earlyAccess: dictionary.common.earlyAccess,
    consent: dictionary.common.consent,
    systemStatus: dictionary.common.systemStatus,
  };
  const home = dictionary.pages.home;
  const about = dictionary.pages.about;

  return {
    notice: {
      title: machine.noticeTitle,
      paragraphs: machine.noticeParagraphs,
    },
    title: machine.title,
    description: machine.description,
    sections: [
      {
        id: "overview",
        title: machine.overviewTitle,
        blocks: [
          { type: "paragraph", text: home.hero.description },
          { type: "paragraph", text: about.origin.body },
          {
            type: "list",
            items: home.useCases.items.map((item) => ({
              label: item.title,
              text: item.description,
            })),
          },
          {
            type: "table",
            headers:
              locale === "nl"
                ? ["Lancering", "Steden"]
                : ["Launch", "Cities"],
            rows: [
              [
                dictionary.pages.waitlist.hero.citiesLabel,
                dictionary.pages.waitlist.hero.cities.join(", "),
              ],
            ],
          },
        ],
      },
      {
        id: "site-wide",
        title: machine.commonTitle,
        blocks: recordToBlocks(commonContent),
      },
      ...pageEntries.map((key) => ({
        id: `page-${key}`,
        title: dictionary.metadata.pages[key].title,
        blocks: pageBlocks(locale, dictionary, key),
      })),
    ],
  };
}
