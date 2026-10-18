# MOVRR rider app showcase

Routes: `/app` and `/nl/app`. Both use the existing localized marketing shell,
Navbar, Footer, Manrope font, semantic brand tokens, `movrr-shell` container,
breakpoints and CTA conventions. Only the Footer gains a navigation link.
The page is a server component; native disclosures work without JavaScript.

## Composition and responsive decisions

| Section     | Desktop composition                                                                                                          | Narrow-screen treatment                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Hero        | Oversized editorial type beside one dominant, approved handlebar studio photograph                                           | Copy and actions lead into a compact, landscape product photograph                                      |
| Ride Map    | Wide neutral stage with numbered annotations, a full native map capture and an expandable heatmap                            | Annotations follow the map in reading order; the optional heatmap stays collapsed                       |
| Wallet      | Two-column editorial spread: a tall Wallet excerpt and a wide Earnings Performance detail, each with its own caption         | Two compact image/caption units; full phone lengths do not repeat                                       |
| Campaigns   | Three-part magazine layout: tall discovery capture, header and studio Campaign Details image, native explanatory disclosures | Header, focused studio image and discovery capture, followed by full-width disclosures on narrow phones |
| Progress    | Ruled progression list beside a daily-progress excerpt and original achievement medallions                                   | Progress and artwork lead into the numbered progression list                                            |
| Community   | Broad existing cycling photograph below an editorial introduction; a narrow real Community Ride capture spans the side       | Photograph and overlapping app capture retain the photography-led composition                           |
| Closing CTA | Short, image-free conversion band with a large statement and separate action column                                          | Concise statement, explanation and comfortable full-height actions                                      |

No screenshot carousel, scroll interception, new client-side animation dependency,
new tracking, or app functionality is introduced. Hover transitions are restrained;
reduced-motion preferences disable new transitions. Content is visible immediately.

## Content and conversion

- Primary links use `waitlistHref(locale, "rider")`, producing
  `/waitlist?audience=rider` and `/nl/waitlist?audience=rider`.
- Secondary hero action goes to `#ride-map`; closing support action uses the
  existing localized `/contact` route. No store listing or download link is invented.
- Early-access availability is stated beside the CTAs. Captures are explicitly
  identified as examples; sample campaigns and rides are not live opportunities.
- Copy qualifies points with eligibility, verification and applicable conditions.
  Campaign bonuses depend on settlement. No guaranteed redemptions, cash value,
  partner endorsements, adoption statistics or environmental savings are claimed.
- No legal document, legal route, authenticated feature or mobile source changed.

## Asset provenance and reproduction

`assets.json` records source paths, hashes, native dimensions, output hashes and
decoded pixel hashes for the native captures and original achievement artwork.
Native screenshots are lossless WebP. Badge PNGs are copied byte for byte.
The complete source UI remains intact in these files; CSS excerpts are labelled.
Map attribution and heatmap privacy notices remain in the native captures.

The approved studio masters live in website commit
`ca187fad4ac3e4bfaee41617ee82aa4805db2de4`. Remote main still had the older
photographs when this page was built. Two small, page-specific derivatives reuse
the approved masters without replacing homepage assets. The Campaign Details
derivative crops only the surrounding studio composition; it does not redraw UI.
Its source crop is recorded in the manifest.

The earnings and community captures were existing native Android QA captures.
Their lossless production files preserve the original decoded pixels after
temporary source-session files are cleaned. They contain no named participants.
The iOS images use the reviewed store-asset captures. Preview states need not
represent the same rider; none is presented as a testimonial or earnings forecast.

To reproduce asset imports, with `sharp` from the website dependencies:

```text
node scripts/import-app-captures.mjs <mobile-checkout> <approved-website-checkout>
```

The importer can verify and reuse the retained lossless earnings/community files
when their original temporary captures no longer exist. Keep the manifest with
those assets. Production `next/image` supplies responsive variants; dimensions,
`sizes`, lazy loading and a single high-priority hero image are explicit.

## SEO and verification

The page is registered in the shared route map, localized metadata and SEO route
configuration. Existing sitemap, hreflang, machine view, WebPage and breadcrumb
generation therefore include both routes. No app rating, Review or
SoftwareApplication availability schema is added. Heading hierarchy, section
labels, descriptive image alternatives and focus-visible treatments are explicit.

Relevant commands:

```text
npx tsc --noEmit
npm run verify:i18n
npm run build -- --webpack
node scripts/verify-app-page.mjs
npm run verify:seo
```

`verify-app-page.mjs` checks both routes' actual server HTML, metadata, schema,
CTA destinations, footer-only discovery, localized sitemap inclusion and retained
asset integrity. It defaults to a server at `http://localhost:3218`; override with
`APP_BASE_URL`.

The production build uses webpack for this isolated worktree because Turbopack
rejects its dependency junction outside the inferred filesystem root. This does
not change the repository build configuration. Existing `next/font` downloads
require network access for the real Manrope font during the build.

Three unrelated baseline checks remain outside this change:

- Full ESLint reports `react-hooks/set-state-in-effect` at
  `components/waitlist/WaitlistForm.tsx:96`, already present in the base commit.
  Changed-file lint passes.
- A whole-page axe audit after cookie dismissal flags the existing desktop
  early-access badge at 4.48:1 contrast (required: 4.5:1). New page content has
  zero axe violations. The shared banner is unchanged.
- The global SEO verifier reaches the existing `/icon` asset check and reports 404. Next emits `/icon.png`. Shared icon metadata and legal-session files were
  not modified. The dedicated showcase metadata and sitemap checks pass.

Automated Chromium verification covers both locales at 320, 390, 768, 1024 and
1440 CSS pixels. The production Manrope font is checked in the captured state.
New page content passes axe WCAG A/AA checks at all ten combinations, with no
horizontal overflow, runtime errors or failed visible images. Keyboard activation
opens the heatmap and its image decodes successfully. Content also renders with
JavaScript disabled; normal and reduced-motion states are captured. Whole-page
and individual-section screenshots are visually inspected for composition variety.

To repeat the browser checks without adding production dependencies:

```text
npm install --prefix .tmp/app-showcase/tools --no-save --package-lock=false playwright @axe-core/playwright
```

Set `APP_QA_TOOLS_DIR` to that tools directory, then run
`node scripts/verify-app-browser.mjs` against the production server. Set
`APP_QA_BROWSER` to an existing Chromium executable if the toolkit's default
browser is unavailable. Output goes to ignored `.tmp/app-showcase/browser`;
`APP_QA_OUTPUT_DIR` can override it. Raw captures/reports are disposable and must
not be committed. The test fails on page-content accessibility errors, overflow,
image failures, runtime exceptions, broken heatmap keyboard behavior or CLS above
0.1. It also captures the unchanged homepage and riders page as design references.
No deployment or publication is part of this change. Physical iOS/Android browser
and assistive-technology review remain release follow-ups.

Final production browser pass: 19 October 2026. All ten route/width combinations
pass. Measured CLS is 0.025?0.048, below the 0.1 test threshold. Optimized image
transfers are approximately 215?278 KB before optional heatmap expansion in these
local Chromium checks; these are lab observations, not field Core Web Vitals.
The original 12 retained assets total 3,149,590 bytes. No additional page-specific
client JavaScript is required. The seven existing legacy-signup redirect tests
also pass after fast-forwarding the isolated branch to concurrent remote main.
