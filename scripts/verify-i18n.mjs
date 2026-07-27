import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];
const checks = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const pass = (message) => checks.push(message);
const assert = (condition, message) => {
  if (condition) pass(message);
  else failures.push(message);
};

const typeSource = read("locales/types.ts");
const pagePathsBlock = typeSource.match(
  /export const PAGE_PATHS = \{([\s\S]*?)\} as const;/,
)?.[1];
assert(Boolean(pagePathsBlock), "PAGE_PATHS is discoverable");

const pagePaths = [...(pagePathsBlock ?? "").matchAll(/(\w+):\s*"([^"]+)"/g)]
  .map(([, key, pathname]) => ({ key, pathname }));
assert(pagePaths.length === 19, "exactly 19 canonical page paths are registered");

const legalKeys = new Set(["privacy", "terms", "cookies", "accountDeletion"]);
for (const { key, pathname } of pagePaths) {
  const relative = pathname === "/" ? "" : pathname.slice(1);
  const englishRoute =
    pathname === "/"
      ? "app/page.tsx"
      : `app/${legalKeys.has(key) ? "(legal)" : "(marketing)"}/${relative}/page.tsx`;
  const dutchRoute =
    pathname === "/" ? "app/nl/page.tsx" : `app/nl/${relative}/page.tsx`;

  for (const [locale, route] of [["en", englishRoute], ["nl", dutchRoute]]) {
    assert(existsSync(join(root, route)), `${locale} route exists for ${pathname}`);
    if (!existsSync(join(root, route))) continue;
    const source = read(route);
    assert(
      source.includes("generateMetadata") &&
        source.includes(`buildPageMetadata("${locale}"`) &&
        source.includes(`"${key}"`),
      `${locale} metadata is localized for ${pathname}`,
    );
    assert(
      source.includes(`getDictionary("${locale}")`),
      `${locale} dictionary is loaded for ${pathname}`,
    );
  }
}

for (const dictionaryPath of ["locales/en.ts", "locales/nl/common.ts"]) {
  const source = read(dictionaryPath);
  assert(
    source.includes("Dictionary"),
    `${dictionaryPath} is constrained by the shared Dictionary type`,
  );
  for (const { key } of pagePaths) {
    assert(
      new RegExp(`\\b${key}:\\s*\\{`).test(source),
      `${dictionaryPath} contains the ${key} namespace`,
    );
  }
}

const proxy = read("proxy.ts");
for (const token of [
  "detectPathLocale",
  "accept-language",
  "LOCALE_COOKIE_NAME",
  "REQUEST_LOCALE_HEADER",
  "Accept-Language, Cookie",
]) {
  assert(proxy.includes(token), `proxy includes ${token}`);
}

const metadata = read("lib/i18n/metadata.ts");
for (const token of ["canonical", "x-default", "alternateLocale", "twitter"]) {
  assert(metadata.includes(token), `metadata includes ${token}`);
}

const sitemap = read("app/sitemap.ts");
assert(
  sitemap.includes('withLocalePath("en"') &&
    sitemap.includes('withLocalePath("nl"') &&
    sitemap.includes("alternates"),
  "sitemap emits both locales with language alternates",
);

const switcher = read("components/i18n/LanguageSwitcher.tsx");
for (const token of [
  "stripLocalePrefix",
  "searchParams.toString()",
  "window.location.hash",
  "router.push",
  'role="group"',
]) {
  assert(switcher.includes(token), `language switcher includes ${token}`);
}

const layout = read("app/layout.tsx");
const localizedShell = read("components/i18n/LocalizedAppShell.tsx");
const documentLocale = read("components/i18n/DocumentLocale.tsx");
assert(
  layout.includes("lang={locale}") &&
    localizedShell.includes("CommonCopyProvider") &&
    localizedShell.includes("DocumentLocale") &&
    documentLocale.includes("document.documentElement.lang = locale"),
  "route-localized shell exposes the locale to assistive technology and shared UI",
);

for (const [file, locale] of [
  ["app/(marketing)/layout.tsx", "en"],
  ["app/(legal)/layout.tsx", "en"],
  ["app/nl/layout.tsx", "nl"],
]) {
  const routeLayout = read(file);
  assert(
    routeLayout.includes("LocalizedAppShell") &&
      routeLayout.includes(`locale="${locale}"`),
    `${file} remounts shared UI with the ${locale} dictionary`,
  );
}

assert(
  read("app/page.tsx").includes('<LocalizedAppShell locale="en">'),
  "the unprefixed homepage mounts shared UI with the English dictionary",
);

const waitlistAction = read("app/actions/waitlist.ts");
for (const token of [
  "requestedLocale",
  "getDictionary(locale)",
  "WaitlistConfirmation({ data, locale })",
]) {
  assert(waitlistAction.includes(token), `waitlist action includes ${token}`);
}

const consentManager = read("components/consent/CookieConsentManager.tsx");
assert(
  consentManager.includes("record?.state.analytics === true") &&
    consentManager.includes("<Analytics"),
  "analytics only mounts after analytics consent",
);

const confirmationEmail = read("emails/waitlist-confirmation.tsx");
assert(
  confirmationEmail.includes("locale={locale}") &&
    confirmationEmail.includes('withLocalePath(locale, "/how-it-works")'),
  "confirmation email language and links follow the submitted locale",
);

const sourceRoots = ["app", "components", "features"];
const sourceFiles = [];
const walk = async (path) => {
  const { readdir } = await import("node:fs/promises");
  for (const entry of await readdir(join(root, path), { withFileTypes: true })) {
    const child = join(path, entry.name);
    if (entry.isDirectory()) await walk(child);
    else if (entry.name.endsWith(".tsx")) sourceFiles.push(child);
  }
};
for (const sourceRoot of sourceRoots) await walk(sourceRoot);

const applicationFiles = sourceFiles.filter(
  (path) => !path.startsWith(join("components", "ui")),
);
for (const path of applicationFiles) {
  const source = read(path);
  assert(
    !/href="\/(?!\/)/.test(source),
    `${path} has no locale-bypassing internal href`,
  );
  assert(
    !/>\s*[A-Za-z][^<{\r\n]*</.test(source),
    `${path} has no rendered hardcoded English copy`,
  );
  assert(
    !/(?:placeholder|aria-label|title|alt)="(?!MOVRR(?: icon)?")[A-Za-z]/.test(source),
    `${path} has no hardcoded translatable attribute`,
  );
}

if (failures.length) {
  console.error(`i18n verification failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`i18n verification passed (${checks.length} checks).`);
