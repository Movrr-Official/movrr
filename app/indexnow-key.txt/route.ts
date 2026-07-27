const keyPattern = /^[A-Za-z0-9-]{8,128}$/;

export const dynamic = "force-dynamic";

export function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key || !keyPattern.test(key)) {
    return new Response("Not found", {
      status: 404,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  return new Response(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
