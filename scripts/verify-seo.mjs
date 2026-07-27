import http from "node:http";

const baseUrl = (process.env.SEO_BASE_URL ?? "http://localhost:3107").replace(
  /\/$/,
  "",
);
const productionOrigin = "https://movrr.nl";

const routes = [
  "/",
  "/waitlist",
  "/how-it-works",
  "/rewards",
  "/brands",
  "/riders",
  "/about",
  "/blog",
  "/press",
  "/help",
  "/careers",
  "/contact",
  "/partners",
  "/accessibility",
  "/sitemap-page",
  "/privacy",
  "/terms",
  "/cookies",
  "/account-deletion",
];
const noindexRoutes = new Set(["/blog", "/press"]);
const indexableRoutes = routes.filter((route) => !noindexRoutes.has(route));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tagWithAttribute(html, tag, attribute, value) {
  const escaped = escapeRegex(value);
  return html.match(
    new RegExp(
      `<${tag}\\b(?=[^>]*\\b${attribute}=["']${escaped}["'])[^>]*>`,
      "i",
    ),
  )?.[0];
}

function attribute(tag, name) {
  return tag?.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "i"))?.[1];
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function textContent(html) {
  return decodeHtml(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function canonicalFor(locale, route) {
  const localized =
    locale === "nl" ? (route === "/" ? "/nl" : `/nl${route}`) : route;
  return `${productionOrigin}${localized === "/" ? "" : localized}`;
}

function localePath(locale, route) {
  return locale === "nl" ? (route === "/" ? "/nl" : `/nl${route}`) : route;
}

async function get(pathname) {
  const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
  return { response, body: await response.text() };
}

function getWithHost(pathname, host) {
  return new Promise((resolve, reject) => {
    const url = new URL(baseUrl);
    const request = http.request(
      {
        hostname: url.hostname,
        port: url.port,
        path: pathname,
        method: "GET",
        headers: { Host: host },
      },
      (response) => {
        response.resume();
        response.on("end", () =>
          resolve({
            status: response.statusCode,
            location: response.headers.location,
          }),
        );
      },
    );
    request.on("error", reject);
    request.end();
  });
}

let checkedPages = 0;
const pageRecords = [];
const internalTargets = new Set();
const imageTargets = new Set();
const inboundLinks = new Map();

for (const locale of ["en", "nl"]) {
  for (const route of routes) {
    const pathname = localePath(locale, route);
    const { response, body } = await get(pathname);
    const expectedCanonical = canonicalFor(locale, route);

    assert(response.status === 200, `${pathname}: expected 200, got ${response.status}`);
    assert(
      response.headers.get("content-type")?.startsWith("text/html"),
      `${pathname}: expected HTML content`,
    );
    assert(
      !response.headers.has("x-powered-by"),
      `${pathname}: framework disclosure header is present`,
    );
    for (const header of [
      "x-content-type-options",
      "referrer-policy",
      "permissions-policy",
    ]) {
      assert(response.headers.has(header), `${pathname}: missing ${header}`);
    }
    assert(
      attribute(tagWithAttribute(body, "link", "rel", "canonical"), "href") ===
        expectedCanonical,
      `${pathname}: incorrect canonical`,
    );
    for (const language of ["en", "nl", "x-default"]) {
      const alternate = tagWithAttribute(body, "link", "hreflang", language);
      assert(alternate, `${pathname}: missing ${language} hreflang`);
      const targetLocale = language === "nl" ? "nl" : "en";
      assert(
        attribute(alternate, "href") === canonicalFor(targetLocale, route),
        `${pathname}: incorrect ${language} hreflang target`,
      );
    }
    const title = textContent(body.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    const description = attribute(
      tagWithAttribute(body, "meta", "name", "description"),
      "content",
    );
    assert(title.length >= 15 && title.length <= 65, `${pathname}: weak title length`);
    assert(
      description?.length >= 70 && description.length <= 170,
      `${pathname}: weak meta description length`,
    );
    assert(
      tagWithAttribute(body, "meta", "property", "og:title") &&
        tagWithAttribute(body, "meta", "property", "og:description") &&
        tagWithAttribute(body, "meta", "property", "og:image") &&
        tagWithAttribute(body, "meta", "property", "og:locale"),
      `${pathname}: incomplete Open Graph metadata`,
    );
    assert(
      attribute(tagWithAttribute(body, "meta", "property", "og:url"), "content") ===
        expectedCanonical &&
        attribute(
          tagWithAttribute(body, "meta", "property", "og:image"),
          "content",
        )?.startsWith(productionOrigin),
      `${pathname}: Open Graph URL or image is not canonical`,
    );
    assert(
      tagWithAttribute(body, "meta", "name", "twitter:card") &&
        tagWithAttribute(body, "meta", "name", "twitter:image"),
      `${pathname}: incomplete Twitter metadata`,
    );
    assert(
      new RegExp(`<html\\b[^>]*\\blang=["']${locale}["']`, "i").test(body),
      `${pathname}: incorrect html lang`,
    );
    assert(
      (body.match(/<main\b/gi) ?? []).length === 1,
      `${pathname}: expected exactly one main landmark`,
    );
    assert(
      (body.match(/<h1\b/gi) ?? []).length === 1,
      `${pathname}: expected exactly one h1`,
    );

    const robots = attribute(
      tagWithAttribute(body, "meta", "name", "robots"),
      "content",
    );
    if (noindexRoutes.has(route)) {
      assert(robots?.includes("noindex"), `${pathname}: expected noindex`);
      assert(robots?.includes("follow"), `${pathname}: expected follow`);
    } else {
      assert(
        robots?.includes("index") &&
          robots.includes("follow") &&
          !robots.includes("noindex"),
        `${pathname}: index/follow directives are incomplete`,
      );
    }

    const jsonLdMatches = [
      ...body.matchAll(
        /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
      ),
    ];
    assert(jsonLdMatches.length > 0, `${pathname}: missing JSON-LD`);
    const graph = JSON.parse(jsonLdMatches[0][1])["@graph"];
    assert(Array.isArray(graph), `${pathname}: JSON-LD graph is invalid`);
    const organization = graph.find((node) => node["@type"] === "Organization");
    const website = graph.find((node) => node["@type"] === "WebSite");
    const webPage = graph.find(
      (node) => node["@id"] === `${expectedCanonical}#webpage`,
    );
    assert(
      organization?.name === "MOVRR" &&
        organization?.url === productionOrigin &&
        organization?.logo?.["@type"] === "ImageObject" &&
        website?.url === productionOrigin &&
        website?.publisher?.["@id"] === `${productionOrigin}/#organization` &&
        webPage?.url === expectedCanonical &&
        webPage?.name &&
        webPage?.description &&
        webPage?.inLanguage === locale &&
        webPage?.primaryImageOfPage?.["@type"] === "ImageObject",
      `${pathname}: required structured data nodes missing`,
    );
    if (route !== "/") {
      const breadcrumb = graph.find(
        (node) => node["@type"] === "BreadcrumbList",
      );
      assert(
        breadcrumb?.itemListElement?.length === 2,
        `${pathname}: BreadcrumbList is incomplete`,
      );
    }
    if (route === "/help") {
      assert(
        webPage?.["@type"] === "FAQPage" &&
          webPage.mainEntity?.length > 0 &&
          webPage.mainEntity.every(
            (item) =>
              item["@type"] === "Question" &&
              item.name &&
              item.acceptedAnswer?.["@type"] === "Answer" &&
              item.acceptedAnswer?.text,
          ),
        `${pathname}: FAQPage schema is incomplete`,
      );
    }

    assert(
      !body.includes("vercel.app") && !body.includes("www.movrr.nl"),
      `${pathname}: non-canonical host leaked into rendered HTML`,
    );

    const mainHtml = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
    const mainText = textContent(mainHtml);
    if (!noindexRoutes.has(route)) {
      assert(mainText.length >= 180, `${pathname}: soft-404/thin-content risk`);
    }
    const anchors = [
      ...body.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi),
    ].map((match) => decodeHtml(match[1]));
    for (const href of anchors) {
      if (
        href.startsWith("#") ||
        /^(?:mailto|tel|sms|javascript):/i.test(href) ||
        (href.startsWith("http") && !href.startsWith(productionOrigin))
      ) {
        continue;
      }
      const url = new URL(href, productionOrigin);
      const target = `${url.pathname}${url.search}`;
      internalTargets.add(target);
      if (url.pathname !== pathname) {
        inboundLinks.set(
          url.pathname,
          (inboundLinks.get(url.pathname) ?? 0) + 1,
        );
      }
    }
    for (const [, src] of body.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi)) {
      const decoded = decodeHtml(src);
      if (decoded.startsWith("/") && !decoded.startsWith("data:")) {
        imageTargets.add(decoded);
      }
    }
    pageRecords.push({
      locale,
      route,
      pathname,
      title,
      description,
      mainText,
    });
    checkedPages += 1;
  }
}

for (const locale of ["en", "nl"]) {
  const records = pageRecords.filter(
    (record) => record.locale === locale && !noindexRoutes.has(record.route),
  );
  assert(
    new Set(records.map((record) => record.title)).size === records.length,
    `${locale}: duplicate indexable titles`,
  );
  assert(
    new Set(records.map((record) => record.description)).size === records.length,
    `${locale}: duplicate indexable descriptions`,
  );
  assert(
    new Set(records.map((record) => record.mainText)).size === records.length,
    `${locale}: duplicate indexable page content`,
  );
  for (const record of records) {
    assert(
      (inboundLinks.get(record.pathname) ?? 0) > 0,
      `${record.pathname}: orphan indexable page`,
    );
  }
}

for (const target of internalTargets) {
  const result = await get(target);
  assert(
    result.response.status === 200,
    `internal link ${target}: got ${result.response.status}`,
  );
}

for (const target of imageTargets) {
  const response = await fetch(`${baseUrl}${target}`, { redirect: "manual" });
  assert(response.status === 200, `rendered image ${target}: got ${response.status}`);
  assert(
    response.headers.get("content-type")?.startsWith("image/"),
    `rendered image ${target}: invalid content type`,
  );
}

const sitemap = await get("/sitemap.xml");
assert(sitemap.response.status === 200, "sitemap.xml: expected 200");
const sitemapLocations = [...sitemap.body.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  ([, location]) => location,
);
assert(
  sitemapLocations.length === indexableRoutes.length * 2,
  `sitemap.xml: expected ${indexableRoutes.length * 2} URLs, got ${sitemapLocations.length}`,
);
assert(
  sitemapLocations.every((location) => location.startsWith(productionOrigin)),
  "sitemap.xml: non-canonical host found",
);
for (const route of noindexRoutes) {
  assert(
    !sitemapLocations.some(
      (location) =>
        location === canonicalFor("en", route) ||
        location === canonicalFor("nl", route),
    ),
    `sitemap.xml: noindex route ${route} is present`,
  );
}
const sitemapEntries = [
  ...sitemap.body.matchAll(/<url>([\s\S]*?)<\/url>/g),
].map((match) => match[1]);
assert(
  sitemapEntries.length === sitemapLocations.length &&
    sitemapEntries.every(
      (entry) =>
        /<lastmod>\d{4}-\d{2}-\d{2}/.test(entry) &&
        /<changefreq>/.test(entry) &&
        /<priority>/.test(entry) &&
        (entry.match(/hreflang=/g) ?? []).length === 3,
    ),
  "sitemap.xml: lastmod, frequency, priority, or hreflang incomplete",
);

const robots = await get("/robots.txt");
assert(robots.response.status === 200, "robots.txt: expected 200");
for (const crawler of [
  "OAI-SearchBot",
  "OAI-AdsBot",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  "Googlebot",
  "Bingbot",
]) {
  assert(robots.body.includes(crawler), `robots.txt: missing ${crawler}`);
}
assert(
  robots.body.includes(`Sitemap: ${productionOrigin}/sitemap.xml`),
  "robots.txt: canonical sitemap reference missing",
);
assert(
  !/Disallow:\s*\/\s*$/m.test(robots.body) &&
    robots.body.includes("Disallow: /api/"),
  "robots.txt: accidental site blocking or missing API exclusion",
);

const llms = await get("/llms.txt");
assert(llms.response.status === 200, "llms.txt: expected 200");
assert(
  llms.response.headers.get("content-type")?.startsWith("text/plain"),
  "llms.txt: expected text/plain",
);
assert(
  llms.body.includes("# MOVRR") &&
    llms.body.includes(`${productionOrigin}/riders`) &&
    llms.body.includes(`${productionOrigin}/brands`) &&
    !llms.body.includes("vercel.app"),
  "llms.txt: entity summary or canonical references are incomplete",
);
for (const [, url] of llms.body.matchAll(/\]\((https:\/\/movrr\.nl[^)]+)\)/g)) {
  assert(
    url === `${productionOrigin}/sitemap.xml` ||
      sitemapLocations.includes(url) ||
      [...noindexRoutes].some(
        (route) => url === canonicalFor("en", route) || url === canonicalFor("nl", route),
      ),
    `llms.txt: undocumented or non-canonical URL ${url}`,
  );
}

for (const asset of [
  ["/manifest.webmanifest", "application/manifest+json"],
  ["/icon", "image/png"],
  ["/apple-icon", "image/png"],
  ["/opengraph-image", "image/png"],
]) {
  const response = await fetch(`${baseUrl}${asset[0]}`, { redirect: "manual" });
  assert(response.status === 200, `${asset[0]}: got ${response.status}`);
  assert(
    response.headers.get("content-type")?.startsWith(asset[1]),
    `${asset[0]}: invalid content type`,
  );
}

for (const [source, expectedLocation] of [
  ["/en", "/"],
  ["/en/about", "/about"],
  ["/about/", "/about"],
]) {
  const result = await get(source);
  assert(
    [307, 308].includes(result.response.status) &&
      result.response.headers.get("location") === expectedLocation,
    `${source}: redirect normalization is incorrect`,
  );
}

const wwwRedirect = await getWithHost("/about", "www.movrr.nl");
assert(
  [307, 308].includes(wwwRedirect.status) &&
    wwwRedirect.location === `${productionOrigin}/about`,
  "www host redirect is incorrect",
);

const apiResponse = await fetch(`${baseUrl}/api/health`, { redirect: "manual" });
assert(
  apiResponse.headers.get("x-robots-tag") === "noindex, nofollow, noarchive",
  "API routes: X-Robots-Tag is missing",
);

const missing = await get("/this-route-must-not-exist");
assert(missing.response.status === 404, `404: got ${missing.response.status}`);
assert(
  attribute(tagWithAttribute(missing.body, "meta", "name", "robots"), "content")
    ?.includes("noindex"),
  "404: missing noindex directive",
);

const indexNowKey = await get("/indexnow-key.txt");
assert(
  indexNowKey.response.status === 404 ||
    (indexNowKey.response.status === 200 && indexNowKey.body.trim().length >= 8),
  "indexnow-key.txt: expected an unconfigured 404 or a valid public key",
);

console.log(
  `SEO verification passed: ${checkedPages} localized pages, ${sitemapLocations.length} sitemap URLs, ${internalTargets.size} internal targets, ${imageTargets.size} rendered images, metadata uniqueness, orphan detection, redirects, crawl files, JSON-LD, and 404 handling.`,
);
