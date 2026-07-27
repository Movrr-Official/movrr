import { buildMachineDocument } from "@/app/features/machine-view/services/machine-content";
import { serializeMachineDocument } from "@/app/features/machine-view/utils/markdown";
import { getDictionary } from "@/lib/i18n/dictionary";
import { SITE_URL } from "@/lib/seo/site";

export const dynamic = "force-static";

export async function GET() {
  const dictionary = await getDictionary("en");
  const markdown = serializeMachineDocument(buildMachineDocument(dictionary, "en"));
  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, follow",
      Link: `<${SITE_URL}>; rel="canonical"; type="text/html"`,
    },
  });
}
