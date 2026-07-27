# MOVRR website SEO audit

Audit target: `movrr-website-new`

Canonical production origin: `https://movrr.nl`

Locales: English (`/`) and Dutch (`/nl`)

Audit date: 2026-07-27

The current waitlist deployment on `movrr.nl` is the outgoing site. Browser and
metadata validation in this audit was performed against a production build of
the replacement website. The launch cutover must replace the outgoing site
before search-engine submission.

## Critical findings

### Resolved

- Canonical metadata could inherit a deployment host. The SEO origin is now
  fixed to `https://movrr.nl`; no Vercel preview host can leak into canonicals,
  hreflang, structured data, sitemap, robots, or llms.txt.
- Crawl infrastructure was incomplete. Dynamic `robots.txt`, `sitemap.xml`,
  `llms.txt`, localized alternates, deterministic locale routing, and
  index/follow policies are implemented.
- Entity and page structured data was missing. A validated JSON-LD graph now
  supplies Organization, WebSite, localized WebPage subtypes, breadcrumbs,
  FAQPage semantics, and representative ImageObject data.
- Social previews were incomplete. A generated 1200×630 brand-safe Open Graph
  image, localized titles/descriptions/locales, and Twitter/X cards are present.
- Placeholder editorial and press content risked soft-404 and credibility
  signals. Blog and press are `noindex,follow` and excluded from the XML
  sitemap until real URLs/assets exist.
- Unapproved phone composites and the removed bicycle visual were still
  referenced by rendered components. All rendered and pipeline references were
  removed. No speculative product screen or bicycle image is used.

### Launch action outside the repository

- Replace the outgoing waitlist deployment at `movrr.nl`.
- Make the apex domain canonical and ensure `www.movrr.nl` permanently redirects
  to `https://movrr.nl`, matching the application redirect policy.
- Do not submit the replacement sitemap or IndexNow payload until that cutover
  is live and verified.

## Important findings

### Resolved

- Every public route has localized metadata, a self-referencing canonical, and
  reciprocal `en`, `nl`, and `x-default` hreflang annotations.
- All 17 indexable routes per locale are in the sitemap (34 URLs total).
  `lastModified`, change frequency, priority, language alternates, and approved
  image references are generated from one route registry.
- `/en` and `/en/*` permanently normalize to the English canonical paths.
  Trailing slashes are consistently disabled.
- API routes send `X-Robots-Tag: noindex, nofollow, noarchive`.
- Unknown pages return a real 404 and are `noindex`.
- Verification codes are environment-driven for Google, Bing, and Yandex.
- IndexNow is launch-ready through an environment-backed key endpoint and
  submission script; no key is hardcoded and no submission has been made.
- Primary page structure now uses one main landmark, one H1, named navigation,
  semantic footer navigation, a skip link, localized document language, and
  accessible FAQ controls.
- Help search now filters localized FAQ questions and answers instead of acting
  as a non-functional field.
- Footer, consent, language, and navigation contrast/name issues found by
  Lighthouse were corrected.
- Images used by indexable content have explicit dimensions through Next Image,
  descriptive alt text where informative, empty alt text where decorative,
  responsive sizes, justified priority, lazy loading below the fold, and
  optimized WebP/AVIF delivery.
- User entrance motion is retained. Reduced-motion preferences are respected,
  and primary headings are visible in server HTML instead of starting hidden.

## Nice-to-have and future expansion

- Enable blog and press indexing only when real articles, stable article URLs,
  authorship, dates, press citations, and approved assets are available.
- Add Article/NewsArticle schema at the article-template level when publishing
  begins; do not place it on the empty collection page.
- Add city, campaign, partner, press, and knowledge-centre route records to the
  central SEO registry as those templates are introduced.
- Add MobileApplication schema and App Links only after public App Store/Play
  Store identifiers and supported deep-link destinations exist.
- Add SearchAction only after a crawlable URL-based site search exists.
- Add LocalBusiness only if MOVRR publishes a customer-facing physical location,
  opening hours, and business contact details that satisfy the type.
- Replace the intentionally image-free app areas with approved home-screen and
  live-map composites when the product visuals are final.

## Validation

- `npm run lint`
- `npx tsc --noEmit`
- `npm run verify:i18n` — 605 checks passed
- `npm run build` — 47 routes generated successfully
- `npm run verify:seo` — 38 localized pages, 34 sitemap URLs, robots.txt,
  llms.txt, JSON-LD, social metadata, and 404 handling passed
- Mobile Lighthouse on the production build:
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
  - Agentic Browsing: 100
- Chrome performance trace on the local production build:
  - LCP: 74 ms
  - CLS: 0.00
  - TTFB: 13 ms
  - Render-blocking estimated savings: 0 ms

Local lab timing is evidence of regressions, not a prediction of production
field data. Re-run Lighthouse and inspect Search Console Core Web Vitals after
the domain cutover, CDN, and real-user traffic are in place.

## Launch checklist

1. Deploy the replacement site to `movrr.nl`.
2. Confirm apex HTTPS and the `www` permanent redirect.
3. Set verification tokens and `SITE_LAST_MODIFIED`.
4. Generate and set `INDEXNOW_KEY`; verify `/indexnow-key.txt`.
5. Re-run `verify:seo` against the production origin.
6. Submit `https://movrr.nl/sitemap.xml` in Google Search Console and Bing
   Webmaster Tools.
7. Run `npm run seo:indexnow` once the replacement sitemap is live.
8. Inspect representative English/Dutch URLs and monitor crawl, indexing,
   referrals, and Core Web Vitals.
