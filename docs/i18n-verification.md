# Internationalization verification

This audit compares the website implementation with the proven
`movrr-waitlist` architecture and the original migration requirements.

## First post-implementation audit

| Finding | Initial status | Evidence / gap |
| --- | --- | --- |
| Locale configuration and typed contract | Fully Resolved | `lib/i18n/config.ts` and `locales/types.ts` define `en`, `nl`, and one shared dictionary contract. |
| Localized routes | Fully Resolved | Nineteen unprefixed English routes and nineteen `/nl` routes were present. |
| Middleware-equivalent locale handling | Fully Resolved | `proxy.ts` preserved the waitlist path → cookie → header precedence for Next.js 16. |
| Locale persistence and redirects | Partially Resolved | Persistence worked, but redirect responses did not declare `Vary` and production cookies lacked an explicit secure policy. |
| Dictionary loading and fallback | Fully Resolved | English is the default; Dutch is dynamically imported; unsupported dictionary input falls back to English. |
| No duplicated or hardcoded UI copy | Partially Resolved | Rendered UI used dictionaries, but 36 obsolete English copy declarations remained and non-rider banner variants still fell back to English. |
| Forms and validation | Fully Resolved | Labels, placeholders, validation, server errors, success states, and audience-specific content were localized. |
| Transactional user email | Fully Resolved | Subject, body, document language, footer, and internal URL followed the submitted locale. |
| Language switcher | Partially Resolved | It preserved path and query, but not fragments; its labelled container had no group role. |
| Localized page metadata | Fully Resolved | All 38 indexable route modules used the shared metadata builder. |
| Canonical and hreflang safety | Fully Resolved | Canonical, `en`, `nl`, and `x-default` alternates were present with localized Open Graph locales. |
| Sitemap and robots | Fully Resolved | Sitemap generated 38 URLs with language alternates; robots referenced the canonical sitemap. |
| Accessibility language semantics | Partially Resolved | Document `lang` was correct; switcher grouping and per-language semantics required hardening. |
| Server/client and payload boundaries | Fully Resolved | Dictionaries load on the server and client trees receive only common or page namespaces. |
| Unsupported locale and fallback behaviour | Fully Resolved | Unsupported locale paths return 404 and dictionary input falls back to English. |
| Consent and analytics behaviour | Partially Resolved | Analytics was mounted before the stored analytics-consent choice was known. |
| Content and CTA regression safety | Partially Resolved | Footer and value-strip CTAs targeted self/non-existent fragments, and governing-law copy had changed during the legal-page refactor. |
| Automated quality and security gates | Still Open | The lint command had no installed toolchain; no repeatable i18n verifier existed; production dependencies had published advisories. |

## Remediation

- Added cache-safe `Vary: Accept-Language, Cookie` responses and secure
  production locale cookies.
- Preserved query strings and URL fragments in client-side language changes;
  added accessible group and language semantics.
- Localized riders, brands, and partners early-access variants.
- Removed obsolete component-level English copy and enabled TypeScript unused
  code checks.
- Gated Vercel Analytics behind analytics consent.
- Repaired locale-aware CTA destinations.
- Restored the original Irish governing-law position and material privacy
  details, including active-ride background collection, consent, response, and
  retention terms in both languages.
- Restored ESLint, fixed every reported error, upgraded vulnerable production
  dependencies, and added `npm run verify:i18n`.

## Final audit

| Finding | Final status | Verification |
| --- | --- | --- |
| Locale configuration and typed contract | Fully Resolved | TypeScript and dictionary checks pass. |
| Localized routes | Fully Resolved | 19 English and 19 Dutch routes; production build emits every pair. |
| Proxy, detection, persistence, redirects | Fully Resolved | Runtime tests confirm precedence, query preservation, secure cookie, and `Vary`. |
| Dictionary loading and fallback | Fully Resolved | Typed parity and fallback checks pass. |
| UI, forms, validation, email | Fully Resolved | Source scan, compiler, and locale-specific email checks pass. |
| Language switcher and accessibility | Fully Resolved | Path, query, fragment, group semantics, per-language semantics, and document language are verified. |
| Metadata, canonicals, hreflang, Open Graph, Twitter | Fully Resolved | Source audit covers all 38 route modules; runtime HTML checks pass in both locales. |
| Sitemap and robots | Fully Resolved | Runtime sitemap contains 38 URLs and both alternates; robots returns 200. |
| Performance boundaries | Fully Resolved | Server-first dictionary loading and scoped client providers remain intact; production build passes. |
| Unsupported locale and error handling | Fully Resolved | Runtime unsupported-locale request returns 404; English fallback remains explicit. |
| Consent and analytics | Fully Resolved | Analytics mounts only after affirmative analytics consent. |
| Regression safety | Fully Resolved | CTAs repaired, legal semantics restored, unused parallel copy removed, type/lint/build/runtime checks pass. |
| Automated quality and security gates | Fully Resolved | TypeScript, ESLint, 570 i18n checks, production build, and `npm audit` all pass. |

The journal and press datasets contain pre-existing placeholder destinations
for content/assets that do not exist in this repository. Inventing external
publication URLs or downloadable press assets would be unsafe, so these are
classified as **Not Actionable** within the i18n migration. They were not
introduced or changed by this implementation.
