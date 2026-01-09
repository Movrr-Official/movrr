import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://movrr.vercel.app";
  const isProduction = process.env.NODE_ENV === "production";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: isProduction ? ["/api/", "/dashboard/", "/_next/"] : ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
