import { SITE_URL } from "@/lib/seo/site";

const llmsText = `# MOVRR

> MOVRR is a movement-based rewards platform. It rewards riders for verified cycling and gives brands and cities measurable, consent-based reach in the real world.

MOVRR serves riders, brands, mobility partners, and cities. The company is based in Rotterdam, Netherlands, and is launching city by city, beginning with Rotterdam and The Hague. English is the default website language; Dutch pages are available under /nl.

## Machine-readable website

- [Complete English Markdown](${SITE_URL}/machine.md): The entire marketing website in a single AI-optimised Markdown document.
- [Complete Dutch Markdown](${SITE_URL}/nl/machine.md): The Dutch website in the same machine-readable format.
- [Rendered Machine View](${SITE_URL}/machine): Accessible, crawlable presentation with one-click Markdown copying.

## Core product

- [How MOVRR works](${SITE_URL}/how-it-works): The rider, brand, and verification model.
- [For riders](${SITE_URL}/riders): How cyclists ride, earn MOVRR Points, and choose whether to join campaigns.
- [Rewards](${SITE_URL}/rewards): How verified kilometres and campaign participation create rewards.
- [For brands](${SITE_URL}/brands): Movement-based campaign formats, reach, and measurement.
- [Partners](${SITE_URL}/partners): Integrations for mobility platforms, cities, health apps, and commute programmes.

## Company and support

- [About MOVRR](${SITE_URL}/about): Company positioning, principles, and operating model.
- [Help centre](${SITE_URL}/help): Product, reward, verification, account, privacy, and brand answers.
- [Contact](${SITE_URL}/contact): Sales, rider support, and press contacts.
- [Waitlist](${SITE_URL}/waitlist): City launch registration for riders, brands, and partners.

## Policies and preferred references

- [Privacy policy](${SITE_URL}/privacy): Personal data, ride data, location data, and user rights.
- [Terms of service](${SITE_URL}/terms): Platform terms for riders and brand partners.
- [Account deletion](${SITE_URL}/account-deletion): How to delete a MOVRR account and associated data.
- [XML sitemap](${SITE_URL}/sitemap.xml): Canonical index of public English and Dutch pages.
- [Dutch website](${SITE_URL}/nl): Dutch-language entry point.

Contact: hello@movrr.nl
`;

export function GET() {
  return new Response(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
