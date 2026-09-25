# Cooking process illustrations and editorial depth

2026-09-25

- 25 existing recipes now reference four original SVG process diagrams each (100 assets). They are schematic instructions, not photographs or anatomical identification plates.
- Each recipe owns its `stepImages` entries (`step`, local `src`, `alt`, contextual `caption`). Numbering is one-based and refers to the existing recipe steps. Existing ingredients and steps are preserved.
- The Japanese recipe route displays the image and additional explanation within the corresponding step, with lazy loading and reserved dimensions. No new client component or runtime image generation is needed.
- Optional `detail` adds checkpoints, a troubleshooting table, sources, and an optional generated illustration. Initial examples are rainbow trout salt grilling and sappa vinegar preparation.
- Recipe navigation connects ingredients, detailed technique, other recipes, the fish encyclopedia and the fish-filtered MAP.
- Senjogataki Farm and Musa Port receive sourced editorial notes, practical decision tables and related cooking/method links. Historic species observations are not presented as current catches. Unconfirmed facilities remain unknown.
- `tests/editorial-depth.test.cjs` checks step ranges, local files, unique images, sources and cross-content links. Historical recipe snapshots ignore only the new additive image field, retaining the original text hashes.

For the next batch, inspect the actual recipe and select the operation that needs a picture. Do not attach unrelated species or finished-dish photographs to a preparation step. Keep the original images and add uniquely named assets. Add source-based detail where it improves decisions, rather than extending every recipe with identical prose.
