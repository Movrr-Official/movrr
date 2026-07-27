const key = process.env.INDEXNOW_KEY?.trim();
const host = "movrr.nl";
const origin = `https://${host}`;
const keyPattern = /^[A-Za-z0-9-]{8,128}$/;

if (!key || !keyPattern.test(key)) {
  throw new Error(
    "Set INDEXNOW_KEY to an 8–128 character key before submitting URLs.",
  );
}

const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(
    `Could not fetch the production sitemap (${sitemapResponse.status}).`,
  );
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(https:\/\/movrr\.nl[^<]*)<\/loc>/g)]
  .map(([, url]) => url)
  .filter((url, index, urls) => urls.indexOf(url) === index);

if (urlList.length === 0) {
  throw new Error("The production sitemap did not contain canonical MOVRR URLs.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${origin}/indexnow-key.txt`,
    urlList,
  }),
});

if (!response.ok) {
  throw new Error(
    `IndexNow submission failed (${response.status}): ${await response.text()}`,
  );
}

console.log(`Submitted ${urlList.length} canonical URLs to IndexNow.`);
