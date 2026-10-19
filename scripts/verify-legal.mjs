import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = JSON.parse(readFileSync(new URL("../lib/legal/documents.json", import.meta.url), "utf8"));
const base = process.env.LEGAL_BASE_URL || "http://localhost:3118";
const routes = { privacy: "/privacy", terms: "/terms", cookies: "/cookies", accountDeletion: "/account-deletion" };
const escape = value => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
let count = 0;
for (const locale of ["en", "nl"]) {
  for (const [key, route] of Object.entries(routes)) {
    const pathname = (locale === "nl" ? "/nl" : "") + route;
    const response = await fetch(new URL(pathname, base));
    assert.equal(response.status, 200, pathname);
    assert.ok(response.headers.get("content-type")?.includes("text/html"));
    const html = await response.text();
    const main = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
    assert.ok(main, `${pathname} readable server-rendered main`);
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
    assert.ok(html.includes(`href="https://movrr.nl${pathname}"`), `${pathname} canonical`);
    for (const lang of ["en", "nl", "x-default"]) assert.ok(html.includes(`hrefLang="${lang}"`), `${pathname} hreflang ${lang}`);
    assert.equal((main.match(/<h1\b/g) || []).length, 1, 'One main heading');
    assert.ok(main.includes(escape(source[locale][key].title)));
    assert.ok(!/REVIEW DRAFT|CONCEPT —|Review blocker:|Publicatieblokkade:|awaiting approval|this draft|deze beoordelingsversie/i.test(main), `${pathname} has no internal drafting commentary`);
    for (const section of source[locale][key].sections) {
      assert.ok(main.includes(`id="${section.id}"`), `${pathname} anchor ${section.id}`);
      for (const paragraph of section.paragraphs) assert.ok(main.includes(escape(paragraph)), `${pathname} exact ${section.id} paragraph`);
    }
    for (const target of Object.values(routes)) {
      if (target !== route) assert.ok(main.includes(`href="${locale === 'nl' ? '/nl' : ''}${target}"`), `${pathname} related ${target}`);
    }
    assert.ok(main.includes(`href="${locale === 'nl' ? '/nl' : ''}/terms#rider-guidelines"`), 'Rider Guidelines navigation');
    count++;
  }
}
console.log(`Verified ${count} legal URLs: status, HTML, EN/NL language, headings, exact source paragraphs, anchors, related links and canonical/hreflang.`);
