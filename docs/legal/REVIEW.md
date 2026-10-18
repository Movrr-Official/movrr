# MOVRR legal source review — 18 October 2026

Status: **review draft, not effective; publication decisions open**. The owner first deferred website push, then requested review followed by a production push. Production is the requested destination; the candidate still contains visible unresolved review notes. No `vercel.json`, hosted-build guard or deployment-blocking configuration is included, as requested. No deployment command has been run.

The bilingual source is [`lib/legal/documents.json`](../../lib/legal/documents.json), rendered through [`lib/legal/pages.ts`](../../lib/legal/pages.ts) and the existing legal design. Privacy, terms, cookies and account-deletion routes retain their English and `/nl` URLs. Rider Guidelines are included in `/terms#rider-guidelines` and `/nl/terms#rider-guidelines`, matching the mobile guidelines. Related navigation is also available on small screens. Typography, colours, header/footer, responsive grid and canonical/hreflang conventions are preserved.

Operator details were supplied by the owner: **MOVRR**, **Luzacstraat 7 01 A, 3038 VT Rotterdam, Netherlands**, **KvK 93383738**. No legal form is added. Proposed footer, publisher and structured-data content no longer assert a B.V. Registry-extract and monitored-contact verification remain open; privacy@movrr.nl and support@movrr.nl come from existing product records.

Mobile owns the canonical editable content and the cross-repository checks. Run from the sibling Mobile checkout:

```powershell
node scripts/sync-legal-documents.cjs
node scripts/sync-legal-documents.cjs --publication
```

The first command verifies byte-identical sources, EN/NL sections and shared Rider Guidelines. The second must fail while status is `review-required`. Use `--write` only to copy reviewed Mobile changes. This is an offline readiness check, not a hosting change.

The full evidence/decision register is [Mobile `docs/legal/REVIEW.md`](../../../movrr-mobile/docs/legal/REVIEW.md) in the shared workspace; the source repository is [Movrr-Official/movrr-mobile](https://github.com/Movrr-Official/movrr-mobile/tree/legal/production-documents-review-2026-10-18/docs/legal). It records implementation evidence, reference-template adaptation, authoritative Dutch/EU/store sources, store disclosure candidates and the exact Play investigation/publication sequence.

Publication decisions still needed:

- Category-level retention across GPS copies/local storage/backups, lawful exceptions and verified production erasure.
- Optional-detection consent, legitimate-interest assessment, fitness/sensitive-data and automated-decision/DPIA review.
- Production processors/regions, recipient fields, contracts and international-transfer safeguards.
- Working deletion intake, monitored mailboxes, points/closure/fulfilment obligations, eligibility and consumer-rights review.
- Consent: there is currently no persistent preference-reopen control. Runtime QA also confirmed that saved analytics consent with an old policy version mounts analytics while the re-consent banner is visible. This task does not change consent functionality.
- Actual Google Play issue text/current Data Safety export, current Apple label/release reconciliation, Apple rewards/location and fitness/advertising policy assessment.
- Qualified approval of EN/NL documents, replacement of conditional review notes and an approved effective date.

The current public privacy page was fetched anonymously over HTTPS and returned 200 HTML. It already covers rides but still contains active-only location and unsupported retention claims. Terms still name Irish jurisdiction; deletion still promises fixed erasure/backup periods. International access and the actual Play rejection are unverified. No store issue is marked resolved and no public policy was replaced.

Before presenting these as effective public policies: finish the decision register, approve the factual text and effective date, synchronise both sources, repeat validation against the exact committed tree/release binary, then deliberately publish and recheck public URLs from multiple regions. Preserve the prior effective policy. The later production-push request does not supply missing retention, provider, consent or deletion facts; the final handoff must state whether the visible draft content is actually being approved for publication.

## Validation — 19 October 2026

- Production compilation/type checking passed in the shared checkout (Turbopack) and isolated remote-main candidate (webpack). The isolated node_modules junction is incompatible with Turbopack’s inferred root; no build or hosting configuration was changed to work around it.
- Eight legal URLs passed status/HTML, exact source text, language, anchors/related links and canonical/hreflang checks. All eight remained readable with JavaScript disabled.
- Sixteen browser cases (four routes, EN/NL, 375/1440 px) passed exact paragraph and overflow checks. Axe reported zero violations in legal main content for WCAG 2 A/AA and 2.1 A/AA tags. Representative mobile/desktop screenshots were visually inspected. This is not a full-site WCAG certification or native-device verification.
- Translation verification passed 626 checks and the preserved production signup redirect passed all 7 tests. Changed-file lint passed. Mobile translations/education passed all 11 tests; source parity is byte-identical across products.
- Full lint still fails on the existing WaitlistForm.tsx:96 state-in-effect rule. The existing full SEO verifier stops at /icon (404; generated route /icon.png). These unrelated issues remain unchanged.
- Fresh/rejected consent left analytics unloaded, including after reload. The old-version stored-consent test confirmed the separate release issue above. No live deletion, redemption, processor or store mutation was tested.

Consistency edits also correct Ride Preferences' active-only/encryption assurances in Mobile, the website deletion FAQ's unsupported 30-day promise, blanket anonymous-sharing claims and unsupported payment-settings/payout-cycle help text. Legal text is initially visible instead of depending on scroll animations. No tracking, points, consent, retention or deletion behavior changed.
