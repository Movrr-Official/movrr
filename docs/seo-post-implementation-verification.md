# MOVRR enterprise SEO post-implementation verification

Verification target: `movrr-website-new`

Canonical origin: `https://movrr.nl`

Verification date: 2026-07-27

This is the strict verification pass against the implemented replacement
website. A finding is only marked resolved when repository or rendered-output
evidence exists. The current public site at `movrr.nl` remains the outgoing
waitlist deployment, so production cutover and search-engine console actions
remain external launch work.

## Finding status matrix

| Original finding | Initial verification | Remediation and code evidence | Final status |
| --- | --- | --- | --- |
| Deployment hosts could leak into canonical signals | Fully Resolved | `lib/seo/config.ts` fixes the public origin to `https://movrr.nl`; the rendered crawl rejects Vercel and `www` leakage | Fully Resolved |
| Metadata generation, title templates, descriptions, and uniqueness were incomplete | Partially Resolved | `lib/i18n/metadata.ts` and localized metadata now provide bounded, unique titles/descriptions for every route; all 38 localized pages are checked | Fully Resolved |
| Canonicals and English/Dutch hreflang were incomplete | Fully Resolved | Every rendered page has an exact self-canonical plus reciprocal `en`, `nl`, and `x-default`; sitemap alternates are also verified | Fully Resolved |
| Index/follow policy was not explicit | Fully Resolved | Indexable pages render `index,follow`; placeholder blog/press render `noindex,follow`; API responses use `X-Robots-Tag` | Fully Resolved |
| Locale and URL normalization could create duplicates | Fully Resolved | `proxy.ts` permanently normalizes `/en` routes and host variants; trailing slashes are disabled and verified | Fully Resolved |
| Redirect consistency was unverified | Fully Resolved | Automated checks cover `/en`, nested `/en/*`, trailing slash, `www`, and HTTPS canonicalization | Fully Resolved |
| 404 and soft-404 behavior was weak | Fully Resolved | `app/not-found.tsx` produces a real noindex 404; placeholders are excluded from the sitemap and noindexed | Fully Resolved |
| 410 handling was absent | Not Actionable | No intentionally retired permanent URL inventory exists; returning 410 without such an inventory would be incorrect | Not Actionable |
| Sitemap coverage, dates, priorities, frequency, and scalability were incomplete | Fully Resolved | `app/sitemap.ts` is generated from `lib/seo/routes.ts`; 34 indexable localized URLs and all annotations are verified | Fully Resolved |
| Orphan pages and broken internal targets were possible | Fully Resolved | The verifier crawls all internal targets, enforces indexable-page inlinks, and confirms no sitemap orphans | Fully Resolved |
| `robots.txt` was static/incomplete | Partially Resolved | `app/robots.ts` now has a sitemap reference, safe wildcard policy, and documented search/user crawler groups without unsupported Brave or training-bot claims | Fully Resolved |
| `llms.txt` was missing | Fully Resolved | `app/llms.txt/route.ts` provides concise entity, audience, city, section, preferred-URL, and contact context using the lightweight proposal only | Fully Resolved |
| Organization and website entity schema was missing | Fully Resolved | `components/seo/StructuredData.tsx` emits validated `Organization` and `WebSite` nodes with stable IDs | Fully Resolved |
| Page, breadcrumb, FAQ, and image schema was incomplete | Fully Resolved | Localized `WebPage` subtypes, `BreadcrumbList`, justified `FAQPage`, and `ImageObject` nodes are rendered and parse-checked | Fully Resolved |
| LocalBusiness schema was requested without evidence | Not Actionable | No published customer-facing premises, opening hours, or eligible location data exists; fake schema is intentionally omitted | Not Actionable |
| MobileApplication/App Links lacked confirmed store identifiers | Deferred | Infrastructure can accept these later, but store IDs and supported deep links do not yet exist | Deferred |
| SearchAction lacked a crawlable results URL | Deferred | Help filtering is client-side, not a stable URL-based site search; schema is intentionally omitted until such a route exists | Deferred |
| Open Graph and Twitter cards were incomplete | Fully Resolved | Localized titles, descriptions, canonical URLs, locales, site name, card type, and a 1200×630 generated brand asset are rendered and checked | Fully Resolved |
| Social entity links were unverified | Partially Resolved | Unsupported X/Instagram and handles were removed; only the confirmed MOVRR LinkedIn showcase is published in footer/schema | Fully Resolved |
| Image filenames, dimensions, alt behavior, loading, and optimization were inconsistent | Fully Resolved | Approved rendered images use descriptive WebP/AVIF assets, Next Image dimensions/sizes, meaningful or empty alt text, and justified priority | Fully Resolved |
| Unfinished phone/home/map and generated bicycle visuals were referenced | Fully Resolved | Their component/pipeline references were removed; the strict rendered-image check confirms only approved assets | Fully Resolved |
| Heading hierarchy and semantic landmarks were inconsistent | Partially Resolved | Page shells have one main/H1, skip link, named navigation, semantic footer groups, corrected section headings, and accessible FAQ controls | Fully Resolved |
| Accessibility contrast and control names affected SEO | Partially Resolved | Footer, legal, help, waitlist, contact, careers, and accessibility templates were corrected; representative mobile Lighthouse audits score 100 | Fully Resolved |
| Accessibility copy made unsupported jurisdiction/SLA/audit claims | Still Open | Irish regulator, fixed response SLA, quarterly audit, and unverified testing claims were removed; WCAG target is accurately framed as 2.2 AA | Fully Resolved |
| Reduced-motion handling and server-visible headings were weak | Fully Resolved | Shared reduced-motion handling preserves content and controls; primary headings no longer begin hidden in server HTML | Fully Resolved |
| Footer and CTA authority flow was incomplete | Fully Resolved | Localized footer navigation and contextual links connect every public route and preserve language context | Fully Resolved |
| Help search appeared interactive but did not work | Fully Resolved | `HelpExperience` performs localized question/answer filtering with a polite live region; browser interaction verified | Fully Resolved |
| Rendering, image, font, and Core Web Vitals risks were unmeasured | Partially Resolved | Production build and browser trace show 74 ms local lab LCP, 0.00 CLS, 13 ms TTFB, and zero estimated render-blocking savings | Fully Resolved |
| Search-console verification values could be hardcoded | Fully Resolved | Google, Bing, and optional Yandex verification are environment-backed; `.env.example` documents extension points | Fully Resolved |
| IndexNow launch infrastructure was missing | Fully Resolved | Environment-backed key route and `scripts/submit-indexnow.mjs` exist; no secret or premature submission is committed | Fully Resolved |
| Entity clarity for AI discovery was weak | Fully Resolved | Metadata, semantic copy, JSON-LD, sitemap, robots policy, and llms.txt consistently define MOVRR, riders, brands, rewards, and launch cities | Fully Resolved |
| Blog and press placeholders risked indexing | Fully Resolved | Both collections are intentionally `noindex,follow`, absent from the XML sitemap, and stripped of false teaser links | Fully Resolved |
| Future blog/city/campaign/partner/knowledge routes required redesign | Fully Resolved | The central typed route/metadata registry supports new localized route records and schema selection without replacing the architecture | Fully Resolved |
| Live `movrr.nl` still serves the waitlist site | Deferred | Repository code is launch-ready, but deployment cutover, DNS/CDN verification, and live recrawl require an external release | Deferred |
| Search Console/Bing submission and production field CWV were unverified | Deferred | These require the replacement site to be live and receiving traffic; the launch checklist records the required actions | Deferred |

## Final verification evidence

- ESLint: passed.
- TypeScript `--noEmit`: passed.
- Locale parity: 605 checks passed.
- Next.js production build: 47 routes generated.
- Strict rendered crawl: 38 localized pages, 34 sitemap URLs, 38 internal
  targets, eight rendered images, metadata uniqueness, orphan detection,
  redirects, crawl files, JSON-LD, API directives, IndexNow endpoint, and 404
  behavior passed.
- Mobile Lighthouse on home, accessibility, Dutch help, privacy, waitlist,
  contact, and careers: 100 Accessibility, 100 Best Practices, 100 SEO, and
  100 Agentic Browsing for every tested template.
- Browser interactions: help filtering, waitlist invalid-email handling,
  cookie rejection, and English-to-Dutch route switching passed.
- Home production-build trace: 74 ms local lab LCP, 0.00 CLS, 13 ms TTFB, and
  no render-blocking savings opportunity.
- Repository scan: no Vercel canonical, unsupported social handle, Irish
  regulator, obsolete WCAG 2.1, unsupported crawler group, or unfinished
  product-visual reference remains.

## Final conclusion

All repository-actionable Critical and Important findings are Fully Resolved.
The remaining Deferred items depend on facts or external state that do not yet
exist: approved store listings/deep links, a crawlable search results route,
the `movrr.nl` deployment cutover, webmaster-console submission, and real-user
field data. No fake schema, invented standard, unverified external identity, or
premature search-engine submission was added to manufacture a resolved status.
