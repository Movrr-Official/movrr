// Usage: node scripts/import-app-captures.mjs <movrr-mobile checkout> <approved website checkout>
// Native capture imports are lossless. Studio derivatives adapt approved photography.
// No UI recreation, compositing or retouching.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";

const sourceRoot = process.argv[2];
const websiteRoot = process.argv[3];
if (!sourceRoot || !websiteRoot)
  throw new Error("Provide the mobile and approved website checkout paths");
const ios =
  "docs/store-assets/ios-submission-review-2026-10-18/screenshots/captures/iphone";
const sources = [
  [
    "ride-map",
    "docs/store-assets/device-framed-2026-10-18/captures/ios/ride-map.png",
    "iOS, reviewed native capture",
  ],
  ...["wallet", "campaigns", "heatmap", "home"].map((name) => [
    name,
    `${ios}/${name}.png`,
    "iOS, owner-approved Store Asset Mode preview",
  ]),
  [
    "earnings",
    ".tmp/final-audit-earnings-settled.png",
    "Android native Earnings Performance capture; example history, not promised results",
  ],
  [
    "community",
    ".tmp/loading-evidence/native/audit-community-loaded-07.png",
    "Android native capture; anonymous preview, no participant identities",
  ],
  ...["first-ride", "city-explorer", "streak-starter"].map((name) => [
    name,
    `assets/images/badges/${name}@2x.png`,
    "Existing native achievement artwork; no unlock claim",
  ]),
];
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
await mkdir("public/images/app", { recursive: true });
const records = [];
for (const [name, source, context] of sources) {
  let input;
  try {
    input = await readFile(path.join(sourceRoot, source));
  } catch (error) {
    if (error.code !== "ENOENT" || !["community", "earnings"].includes(name))
      throw error;
    const previous = JSON.parse(
      await readFile("docs/app-showcase/assets.json", "utf8"),
    ).records.find((record) => record.source === source);
    if (!previous) throw error;
    const retained = await readFile(previous.destination);
    if (
      digest(retained) !== previous.outputSha256 ||
      digest(await sharp(retained).ensureAlpha().raw().toBuffer()) !==
        previous.pixelSha256
    )
      throw new Error(`Retained source mismatch: ${name}`);
    records.push(previous);
    continue;
  }
  const artwork = source.startsWith("assets/");
  const output = artwork
    ? input
    : await sharp(input).webp({ lossless: true, effort: 4 }).toBuffer();
  const metadata = await sharp(output).metadata();
  const sourcePixels = await sharp(input).ensureAlpha().raw().toBuffer();
  const outputPixels = await sharp(output).ensureAlpha().raw().toBuffer();
  if (!sourcePixels.equals(outputPixels))
    throw new Error(`Pixel mismatch: ${name}`);
  const destination = `public/images/app/${name}.${artwork ? "png" : "webp"}`;
  await writeFile(destination, output);
  records.push({
    source,
    context,
    sourceSha256: digest(input),
    destination,
    outputSha256: digest(output),
    pixelSha256: digest(outputPixels),
    width: metadata.width,
    height: metadata.height,
    bytes: output.length,
  });
}
await mkdir("docs/app-showcase", { recursive: true });
await writeFile(
  "docs/app-showcase/assets.json",
  JSON.stringify(
    {
      sourceRepository: "movrr-mobile",
      captured: "2026-10-18",
      treatment:
        "Native captures are lossless WebP; badge PNG bytes are unchanged. Full native UI and attribution are preserved. CSS excerpts are identified by captions and alternatives. Checked-in lossless captures preserve temporary native source pixels after cleanup. Studio derivatives are resized/cropped from approved masters, with their own provenance records.",
      records,
    },
    null,
    2,
  ) + "\n",
);

// The approved website studio masters are on the parallel design branch.
// Adapt them for this page without replacing the homepage's existing assets.
if (websiteRoot) {
  for (const [name, source, crop] of [
    ["studio-ride", "public/app-preview-01.png", null],
    [
      "studio-campaign",
      "public/app-preview-02.png",
      { left: 2900, top: 1100, width: 2900, height: 3784 },
    ],
  ]) {
    const input = await readFile(path.join(websiteRoot, source));
    let image = sharp(input);
    if (crop) image = image.extract(crop);
    const output = await image
      .resize({ width: crop ? 1000 : 1800, withoutEnlargement: true })
      .webp({ quality: 88, effort: 6 })
      .toBuffer();
    const metadata = await sharp(output).metadata();
    const destination = `public/images/app/${name}.webp`;
    await writeFile(destination, output);
    records.push({
      source,
      sourceRepository: "movrr-website-new",
      sourceCommit: "ca187fad4ac3e4bfaee41617ee82aa4805db2de4",
      context:
        "Owner-approved studio master; resized for responsive page use; native UI unchanged",
      crop,
      sourceSha256: digest(input),
      destination,
      outputSha256: digest(output),
      width: metadata.width,
      height: metadata.height,
      bytes: output.length,
    });
  }
  const manifestPath = "docs/app-showcase/assets.json";
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  manifest.records = records;
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
}

console.log(
  `Imported ${records.length} assets, ${records.reduce((sum, record) => sum + record.bytes, 0)} bytes; native source pixels verified.`,
);
