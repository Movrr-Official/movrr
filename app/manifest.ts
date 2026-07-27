import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MOVRR — Movement rewarded",
    short_name: "MOVRR",
    description:
      "Verified cycling rewards for riders and measurable movement-based reach for brands and cities.",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#071f18",
    theme_color: "#071f18",
    categories: ["lifestyle", "fitness", "travel"],
    lang: "en",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
