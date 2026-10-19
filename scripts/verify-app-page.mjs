// Run against `next start`: APP_BASE_URL=http://localhost:3218 node scripts/verify-app-page.mjs
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";

const base = process.env.APP_BASE_URL ?? "http://localhost:3218";
const manifest = JSON.parse(
  await readFile("docs/app-showcase/assets.json", "utf8"),
);
const community = manifest.records.find((r) =>
  r.destination.endsWith("/community.webp"),
);
assert.match(community.context, /iOS.*iPhone/);
assert.equal(community.width, 828);
assert.equal(community.height, 1792);
for (const record of manifest.records) {
  const bytes = await readFile(record.destination);
  const hashes = [createHash("sha256").update(bytes).digest("hex")];
  // Git may check out text SVGs with CRLF on Windows; retain the LF provenance.
  if (record.destination.endsWith(".svg"))
    hashes.push(
      createHash("sha256")
        .update(bytes.toString("utf8").replace(/\r\n/g, "\n"))
        .digest("hex"),
    );
  assert(hashes.includes(record.outputSha256), record.destination);
  const metadata = await sharp(bytes).metadata();
  assert.equal(metadata.width, record.width);
  assert.equal(metadata.height, record.height);
  if (record.pixelSha256) {
    const pixels = await sharp(bytes).ensureAlpha().raw().toBuffer();
    assert.equal(
      createHash("sha256").update(pixels).digest("hex"),
      record.pixelSha256,
    );
  }
}

for (const prefix of ["", "/nl"]) {
  const pathname = `${prefix}/app`;
  const response = await fetch(`${base}${pathname}`);
  assert.equal(response.status, 200, pathname);
  const html = await response.text();
  // Inspect actual server markup, excluding hydration scripts.
  const markup = html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  const main = markup.match(
    /<main\b[^>]*id="main-content"[^>]*>([\s\S]*?)<\/main>/,
  )?.[1];
  assert(main, "main landmark is present in server HTML");
  assert.equal((main.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((main.match(/<section\b/g) ?? []).length, 7);
  assert.equal((main.match(/aria-labelledby=/g) ?? []).length, 7);
  assert.match(
    html,
    new RegExp(`rel="canonical" href="https://movrr.nl${pathname}"`),
  );
  assert.match(html, /hrefLang="en" href="https:\/\/movrr.nl\/app"/);
  assert.match(html, /hrefLang="nl" href="https:\/\/movrr.nl\/nl\/app"/);
  assert.match(
    html,
    /property="og:url" content="https:\/\/movrr.nl(?:\/nl)?\/app"/,
  );
  assert.match(main, new RegExp(`href="${prefix}/waitlist\\?audience=rider"`));
  assert.match(main, /href="#ride-map"/);
  for (const name of [
    "ride-map",
    "heatmap",
    "wallet",
    "campaigns",
    "community",
  ])
    assert.match(main, new RegExp(`data-app-phone="${name}"`));
  assert.match(main, /<details\b/);
  assert.match(main, /<summary\b/);
  assert.match(main, /fetchPriority="high"/);
  assert.match(main, /loading="lazy"/);
  assert.doesNotMatch(main, /apps\.apple\.com|play\.google\.com/);
  const header = markup.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
  assert.doesNotMatch(
    header,
    new RegExp(`href="${pathname}"`),
    "app is absent from navbar",
  );
  const footer = markup.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] ?? "";
  assert.match(footer, new RegExp(`href="${pathname}"`));
  const jsonLd = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ].flatMap((match) => JSON.parse(match[1])["@graph"] ?? []);
  assert(
    jsonLd.some(
      (node) =>
        node["@type"] === "WebPage" &&
        node.url === `https://movrr.nl${pathname}`,
    ),
  );
  assert(
    !jsonLd.some((node) =>
      ["AggregateRating", "Review", "SoftwareApplication"].includes(
        node["@type"],
      ),
    ),
  );
  console.log(
    `${pathname}: server content, metadata, navigation, CTA and schema checks passed`,
  );
}
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
assert.match(sitemap, /<loc>https:\/\/movrr.nl\/app<\/loc>/);
assert.match(sitemap, /<loc>https:\/\/movrr.nl\/nl\/app<\/loc>/);
console.log(
  `${manifest.records.length} asset provenance/dimension checks and localized sitemap checks passed`,
);
