// Install optional QA tooling in ignored storage; see docs/app-showcase/README.md.
import { createRequire } from "node:module";
import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
const toolingRoot = process.env.APP_QA_TOOLS_DIR;
if (!toolingRoot)
  throw new Error(
    "Set APP_QA_TOOLS_DIR to the temporary QA dependency directory",
  );
const require = createRequire(path.resolve(toolingRoot, "package.json"));
const { chromium } = require("playwright");
const axeModule = require("@axe-core/playwright");
const AxeBuilder = axeModule.default ?? axeModule;
const baseUrl = process.env.APP_BASE_URL ?? "http://localhost:3218";
const dir = path.resolve(
  process.env.APP_QA_OUTPUT_DIR ?? ".tmp/app-showcase/browser",
);
await mkdir(dir, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.APP_QA_BROWSER
    ? { executablePath: process.env.APP_QA_BROWSER }
    : {}),
});
const report = [];
for (const route of ["/app", "/nl/app"]) {
  for (const width of [320, 390, 768, 1024, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.addInitScript(() => {
      window.__shifts = [];
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries())
          if (!entry.hadRecentInput) window.__shifts.push(entry.value);
      }).observe({ type: "layout-shift", buffered: true });
    });
    const response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: "networkidle",
    });
    const reject = page.getByRole("button", {
      name:
        route === "/app" ? "Reject non-essential" : "Niet-essentiële weigeren",
      exact: true,
    });
    if (await reject.count()) await reject.click();
    for (const section of await page.locator("main > section").all()) {
      await section.scrollIntoViewIfNeeded();
    }
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(
        [...document.querySelectorAll("main img")]
          .filter(
            (img) =>
              img.getBoundingClientRect().height &&
              !img.closest("details:not([open])"),
          )
          .map((img) => img.decode().catch(() => {})),
      );
    });
    const checks = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      height: document.body.scrollHeight,
      h1: document.querySelectorAll("main h1").length,
      sections: document.querySelectorAll("main > section").length,
      canonical: document.querySelector("link[rel=canonical]")?.href,
      headingLabels: [...document.querySelectorAll("main > section")].map((s) =>
        s.getAttribute("aria-labelledby"),
      ),
      images: [...document.querySelectorAll("main img")]
        .filter((i) => !i.closest("details:not([open])"))
        .map((i) => ({
          src: i.currentSrc,
          loaded: i.complete && i.naturalWidth > 0,
          width: i.getBoundingClientRect().width,
        })),
      cls: window.__shifts.reduce((a, b) => a + b, 0),
      fontFamily: getComputedStyle(document.querySelector("main")).fontFamily,
      imageTransferBytes: performance
        .getEntriesByType("resource")
        .filter((r) => r.name.includes("/_next/image"))
        .reduce((sum, r) => sum + r.transferSize, 0),
      footerApp: [...document.querySelectorAll("footer a")].some((a) =>
        /\/app$/.test(a.pathname),
      ),
      navbarApp: [...document.querySelectorAll("header nav a")].some((a) =>
        /\/app$/.test(a.pathname),
      ),
    }));
    const axe = await new AxeBuilder({ page })
      .include("main")
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const issues = axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    }));
    if ([390, 768, 1440].includes(width)) {
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({
        path: `${dir}/${route.replaceAll("/", "")}-${width}.png`,
        fullPage: true,
      });
    }
    if (route === "/app" && [390, 1440].includes(width)) {
      for (const section of await page.locator("main > section").all()) {
        await section.screenshot({
          path: `${dir}/${width}-${await section.getAttribute("aria-labelledby")}.png`,
        });
      }
    }
    const summary = page.locator("main details summary").first();
    await summary.focus();
    await page.keyboard.press("Enter");
    const heatmapOpened = await summary.evaluate((el) => el.parentElement.open);
    const heatmapLoaded = await summary.evaluate(async (el) => {
      const img = el.parentElement.querySelector("img");
      await img.decode();
      return img.naturalWidth > 0;
    });
    const result = {
      route,
      width,
      status: response.status(),
      ...checks,
      errors,
      issues,
      heatmapOpened,
      heatmapLoaded,
    };
    report.push(result);
    console.log(
      JSON.stringify({
        route,
        width,
        height: result.height,
        overflow: result.scrollWidth - result.width,
        cls: result.cls,
        errors: result.errors,
        issues: result.issues.map((v) => ({ id: v.id, count: v.nodes.length })),
        heatmapOpened,
      }),
    );
    await context.close();
  }
}
// Verify the server HTML with JavaScript disabled, plus a standard-motion load.
const noJS = await browser.newContext({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
const plain = await noJS.newPage();
await plain.goto(`${baseUrl}/app`);
console.log(
  "No-JS main content length:",
  (await plain.locator("main").innerText()).length,
);
await plain.screenshot({ path: `${dir}/no-js.png`, fullPage: true });
await noJS.close();
const motion = await browser.newContext({
  viewport: { width: 1440, height: 900 },
});
const mp = await motion.newPage();
await mp.goto(`${baseUrl}/app`, { waitUntil: "networkidle" });
await mp.screenshot({ path: `${dir}/standard-motion.png` });
await motion.close();
await writeFile(`${dir}/report.json`, JSON.stringify(report, null, 2));
const homeContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
});
const home = await homeContext.newPage();
await home.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
await home.screenshot({ path: `${dir}/homepage-reference.png` });
await home.goto(`${baseUrl}/riders`, { waitUntil: "networkidle" });
await home.screenshot({ path: `${dir}/riders-reference.png` });
await homeContext.close();
await browser.close();
if (
  report.some(
    (r) =>
      r.status !== 200 ||
      r.scrollWidth > r.width ||
      r.h1 !== 1 ||
      r.sections !== 7 ||
      r.errors.length ||
      r.issues.length ||
      !r.heatmapOpened ||
      !r.heatmapLoaded ||
      r.cls > 0.1 ||
      !r.footerApp ||
      r.navbarApp ||
      r.images.some((i) => !i.loaded),
  )
)
  process.exitCode = 1;
