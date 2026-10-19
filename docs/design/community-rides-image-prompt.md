# Community Rides image

Generated 19 October 2026 using the built-in image_gen tool.

- Master: `docs/design/community-rides-master.png`.
- Delivery: `public/images/app/community-ride-together.webp`, 1440 x 960, WebP quality 88, effort 6.
- Brand references: `public/images/movrr-usecase-rider-rewards.webp` and `public/images/movrr-campaign-front-banner-muted.webp`.
- Online composition research: https://www.tempo-soest.nl/ and https://betterbybike.info/community-support/local-cycling-clubs/ . These informed candid staging only; their photographs and participants are not reproduced in the final image.
- Illustrative AI-generated scene, not a photograph of actual MOVRR members or an organized event.
- Community Rides may be organized by MOVRR or an approved rider. Campaign participation is separate.

## Base generation prompt

Create one new landscape 3:2 editorial lifestyle photograph for MOVRR Community Rides. The two approved website photographs define the young-adult demographic, natural Dutch urban setting, textured documentary photography, muted colours and soft overcast daylight. Use them for art direction only; do not copy people or advertising artwork. Show four fictional friends in their twenties and early thirties riding unbranded bikes together on a quiet Dutch riverside cycle path near town. Every face and body must be distinct: a Black woman aged 27 with dark braids, round face, athletic fuller build and navy helmet; an East Asian man aged 30 with a clean-shaven broad face, slim build and ivory helmet; a white woman aged 25 with auburn wavy hair, freckles, narrow face, medium build and sage helmet; a white man aged 32 with olive skin, short dark curls, light stubble, taller broader shoulders and black helmet. No related-looking or cloned faces, repeated facial structure, grey hair, grey beards or aged faces. Different contemporary casual active layers in muted navy, olive, stone and burgundy, no matching race kit. Realistically shaped gravel or hybrid bicycles with ordinary spoked wheels, no large bags or panniers. Relaxed weekend social ride, believable spacing and different pedal positions, two riders slightly ahead and two loosely behind, subtle conversation rather than staged smiles. Observe from the front and slightly to one side with a natural 50mm editorial look and enough depth of field for the group. Asymmetric, candid arrangement; primary heads and bodies in the central 75% for mobile cropping, space above helmets. Real fabric and skin texture, soft neutral light, muted colour and moderate contrast. No glossy artificial finish, cinematic orange/teal, plastic skin, dramatic lighting, advertising panels, wheel covers, MOVRR logos, sponsor marks, visible brands, text, team uniforms, race numbers or app UI. Shared cycling for enjoyment, with no campaign participation implied. Illustrative imagery, not a claim about actual MOVRR participants.

## Reproduction

The retained master is the final selected generation. `scripts/import-app-captures.mjs` resizes it to a maximum width of 1440 pixels without enlargement and encodes WebP at quality 88 and effort 6. Source/output hashes and dimensions are recorded in `docs/app-showcase/assets.json`. The original shared commuting photograph and genuine app screenshots are unchanged. The image's object position preserves heads in the wide desktop crop.

## Final local edit prompt

Remove only the four bicycle helmets and their straps from the approved young-adult group-ride photograph. Reconstruct natural hair on the same exact heads: existing dark braids for the front-left woman, short black hair for the rear-centre man, existing auburn waves for the front-right woman and existing short dark curls for the rear-right man. Preserve every person's identity, age, facial expression, skin tone, head position, pose, clothes and body, and preserve all bicycles, hands, proportions, framing, canal, buildings, leaves, lighting, texture and muted colour grade. Do not beautify faces, redesign the scene, crop, reposition, or add any hats, glasses, logos, text, advertisements or campaign graphics. Return the complete original 3:2 composition with only helmet and strap removal.
