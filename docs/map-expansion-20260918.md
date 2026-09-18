# MAP expansion and coordinate review — 2026-09-18

## Scope
- Added 302 records: 301 shore locations and 1 boat operator. Total registry: 2,030 (1,787 spots, 232 boats, 11 planning areas).
- Kansai additions: Osaka 8, Hyogo 15, Wakayama 5, Kyoto 2. Nanko is restored separately, not counted as a new location.
- 300 discovered locations retain individual fishing-reference URLs and GSI map links; Yagura and Kousuimaru also retain operator/municipal sources.
- Unknown parking, toilets, fees and opening hours are not inferred. These are desk reviews, not on-site permission checks.

## Current access information
- Nanko: the municipal closure article published February 2026 reports a December 2025 answer. The current operator site has July 2026 updates and operating rules. Restored the existing slug, updated facilities/rules, and placed the pin on the fishing quay.
- Tsubasa Port: operator reports the seawall construction restriction ended August 27, 2026. Do not confuse temporary mooring restrictions with closure of all shore fishing.
- Withheld Otomi big breakwater (tourism authority restriction remains posted), Maruyama fishing park (closure plus 2026 dismantling work), unresolved Tsuna/Tohama/Matsukawaura sections, and Noto candidates whose post-earthquake access could not be verified. Withholding a new candidate is not a claim that its entire surrounding port is closed.
- 小主師 was excluded as a near-duplicate of 主師. 厨漁港 and 福丸越前 share a quay but represent a shore location and a distinct boat operator; the audit warning is expected.

## Position corrections
Coordinates are representative fishing-area positions, not parking/address centroids. Public GSI shoreline/aerial imagery and facility maps were compared; changing a coordinate does not certify current opening.

| Existing slug | Latitude | Longitude |
| --- | ---: | ---: |
| `field-izumozaki-bridge` | 37.546228 | 138.690183 |
| `naoetsu-happyfishing` | 37.213105 | 138.276308 |
| `akaguri-sea-park` | 35.525206 | 135.660617 |
| `fishing-park-hikari` | 33.929759 | 131.962495 |
| `tomakomai-ippon` | 42.613244 | 141.776397 |
| `asamushi-umizuri` | 40.890466 | 140.857558 |
| `niigata-happyfishing` | 38.008556 | 139.239864 |
| `atami-port-fishing` | 35.093138 | 139.08052 |
| `shimonoseki-fishing` | 34.060588 | 130.901113 |
| `yokosuka-umibe` | 35.268222 | 139.690518 |
| `shimizu-port-park` | 35.045756 | 138.522642 |
| `waita-fishing-pier` | 33.937948 | 130.728765 |
| `sakurajima-umizuri` | 31.593122 | 130.596478 |
| `takashima-tobishima` | 32.669798 | 129.758792 |
| `akita-north` | 39.771075 | 140.034914 |
| `shinchi-park` | 37.859455 | 140.956542 |
| `kashima-fishing` | 35.938197 | 140.702291 |
| `wakasu-fishing` | 35.614605 | 139.830637 |
| `daikoku-fishing` | 35.449256 | 139.695024 |
| `isogo-fishing` | 35.402431 | 139.643204 |
| `ichihara-fishing` | 35.543558 | 140.059741 |
| `ishida-fisherina` | 36.867399 | 137.414525 |
| `shinmaiko-fishing` | 34.951119 | 136.817722 |
| `arai-benten` | 34.681641 | 137.59243 |
| `suma-fishing` | 34.63432 | 135.104842 |
| `fukuoka-fishing` | 33.627467 | 130.23144 |
| `amagasaki-uoturi` | 34.681835 | 135.368793 |
| `maizuru-shinkai` | 35.513872 | 135.343645 |
| `naruohama` | 34.692403 | 135.35888 |
| `hira-isoumi` | 34.626428 | 135.06403 |
| `toyohama-pier` | 34.70295 | 136.93466 |
| `tottopark-kojima` | 34.317149 | 135.097901 |
| `nanko-fishing-park` | 34.614491 | 135.401795 |

## Verification
- Regression suite: 165 tests passed.
- ESLint: passed. TypeScript and Next.js production build: passed.
- Added crawler-readable static sharing images for all 302 new routes.
- Browser: desktop 1280px and mobile 390px verified. Marker A→B keeps scroll position (1105→1105); Details alone scrolls (1105→2176). Favorite star and favorite-only filtering verified; no horizontal overflow or page errors.
- HTTP: all 302 additions plus 3 corrected routes returned 200, with canonical, sitemap entry and sharing image present (305 routes, zero failures).
- Existing URLs, map clustering, favorites, filtering and UI are preserved.

## Research boundaries
No third-party photos or article text were copied into the site. Source pages identify candidates; the authored notes distinguish quay/harbor/beach conditions and do not override signs, port operations or construction restrictions.
