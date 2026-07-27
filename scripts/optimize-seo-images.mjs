import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const outputDir = path.join(publicDir, "images");

const images = [
  ["hero-bg-bob-on-bike.png", "movrr-cyclist-urban-ride.webp"],
  ["b2b-cyclist-pannier-urban.png", "movrr-brand-cyclist-pannier.webp"],
  ["brands-hero-cyclist.png", "movrr-brands-hero-cyclist.webp"],
  [
    "hero-cyclist-rotterdam-modern-urban.png",
    "movrr-cyclist-rotterdam.webp",
  ],
  [
    "b2b-cyclists-urban-commute-I.png",
    "movrr-cyclists-urban-commute.webp",
  ],
  [
    "urban-cyclist-checking-earnings.png",
    "movrr-cyclist-checking-rewards.webp",
  ],
  [
    "usecase-city-cycling-waterfront-dusk.png",
    "movrr-city-cycling-waterfront.webp",
  ],
  [
    "usecase-sponsored-community-rides-aerial.png",
    "movrr-sponsored-community-ride.webp",
  ],
  ["app-preview-01.png", "movrr-app-preview-handlebar.webp"],
  ["app-preview-02.png", "movrr-app-preview-device.webp"],
  ["metrics-bike-tire.png", "movrr-branded-bicycle-wheel.webp"],
];

await mkdir(outputDir, { recursive: true });

for (const [input, output] of images) {
  await sharp(path.join(publicDir, input))
    .rotate()
    .webp({ quality: 82, effort: 5, smartSubsample: true })
    .toFile(path.join(outputDir, output));
  console.log(`${input} -> images/${output}`);
}
