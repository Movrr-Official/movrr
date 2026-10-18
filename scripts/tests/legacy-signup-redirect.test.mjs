import assert from "node:assert/strict";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import { readFileSync } from "node:fs";
import ts from "typescript";

const source = readFileSync(new URL("../../lib/waitlist/legacy-signup-redirect.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
});
const { getLegacySignupDestination, legacySignupRedirectScript } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);

test("legacy home signup links reach the subdomain and retain the anchor", () => {
  assert.equal(
    getLegacySignupDestination(new URL("https://movrr.nl/#signup")),
    "https://waitlist.movrr.nl/#signup",
  );
});

test("Dutch legacy home links preserve the language", () => {
  for (const path of ["/nl", "/nl/"]) {
    assert.equal(
      getLegacySignupDestination(new URL(`https://movrr.nl${path}#signup`)),
      "https://waitlist.movrr.nl/nl#signup",
    );
  }
});

test("campaign attribution survives without allowing a query to change the origin", () => {
  const search = "?utm_source=qr&utm_campaign=city%20launch&next=https%3A%2F%2Fexample.com";
  assert.equal(
    getLegacySignupDestination(new URL(`https://movrr.nl/${search}#signup`)),
    `https://waitlist.movrr.nl/${search}#signup`,
  );
});

test("ordinary home anchors and existing waitlist pages stay on the main website", () => {
  for (const path of ["/", "/#impact", "/#main-content", "/#Signup", "/waitlist", "/waitlist#signup", "/nl/waitlist#signup", "/riders#signup"]) {
    assert.equal(getLegacySignupDestination(new URL(`https://movrr.nl${path}`)), null, path);
  }
});

function browser(url) {
  const replaced = [];
  const listeners = new Map();
  const parsed = new URL(url);
  const window = {
    location: {
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
      replace: (destination) => replaced.push(destination),
    },
    addEventListener: (type, listener) => listeners.set(type, listener),
  };
  runInNewContext(legacySignupRedirectScript(), { window, URL });
  return { window, replaced, listeners };
}

test("the early browser script redirects without React or a ready DOM", () => {
  const { replaced } = browser("https://movrr.nl/?utm_source=old-link#signup");
  assert.deepEqual(replaced, ["https://waitlist.movrr.nl/?utm_source=old-link#signup"]);
});

test("later native hash navigation redirects only the legacy anchor", () => {
  const { window, replaced, listeners } = browser("https://movrr.nl/#impact");
  assert.deepEqual(replaced, []);
  window.location.hash = "#signup";
  listeners.get("hashchange")();
  assert.deepEqual(replaced, ["https://waitlist.movrr.nl/#signup"]);
});

test("hash changes on the current waitlist page do not redirect", () => {
  const { window, replaced, listeners } = browser("https://movrr.nl/waitlist");
  window.location.hash = "#signup";
  listeners.get("hashchange")();
  assert.deepEqual(replaced, []);
});
