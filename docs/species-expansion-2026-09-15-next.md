# Species identity, tackle routes and the next coastal batch

## Authoring decisions

- Canonical biological profiles: `hamachi` is an alias of `buri`; `gashira` is an alias of `kasago`. The existing black seabream URL is `chinu`, so `kurodai` redirects to it. Archived profile files and images remain in the repository.
- Fish search includes profile aliases, growth names and regional names, normalizing hiragana and half-width katakana. Permanent redirects preserve the legacy fish URLs. Sitemap and QUEST enumerate canonical profiles only.
- QUEST save normalization combines counts, largest size and dates without changing earned XP or rewards. It is idempotent and leaves the original object untouched.
- Added 10 biological species: akakamas, katakuchi, urume, konoshiro, bora, shiira, makogarei, umazurahagi, kidai, kensakiika. Each has four cooked recipes, an original illustration, an introductory GUIDE and a fight profile. GLB files are not fabricated; the existing optional model convention applies.
- `Engraulis japonica` and `Etrumeus micropus` follow the sources below; older names occur in older Japanese guides. Common names such as コハダ and レンコダイ remain aliases.
- New recipes are editorial home-cooking examples, not copied recipes. Images are generated serving suggestions, not photographs proving species identification. The preparation and ingredient list, not the illustration, is authoritative.
- GEAR starts with general preparation. Fish and methods reuse method specifications and central Amazon link helpers. Search links are explicitly searches, not verified product pages. The existing checked ASIN collection remains centralized; no prices or availability claims are copied.

## Primary sources checked on 2026-09-15

### Identity and methods
- ブリ / 成長名: https://www.daiwa.com/jp/column/fish_field_guide/sea/040
- ブリ / ハマチ: https://www.env.go.jp/water/heisa/heisa_net/setouchiNet/seto/g1/g1chapter1/ikimono/hamachi.html
- アカカマス: https://www.marinepia.or.jp/picturebook/fish/entry-10942.html
- カマス釣り: https://www.daiwa.com/jp/column/fish_field_guide/sea/106
- カタクチイワシ accepted name: https://www.godac.jamstec.go.jp/bismal/j/view/9001967
- ウルメイワシ: https://kuroshio.or.jp/creature/ウルメイワシ/
- ウルメイワシ学名: https://www.museum.kagoshima-u.ac.jp/publications/pdf_images/2018_03_Uchinoura_lowres.pdf
- コノシロ: https://www.hrr.mlit.go.jp/shinage/kaigan/seibutsu/zukan/fish03.html
- ボラ: https://www.daiwa.com/jp/column/fish_field_guide/sea/042
- シイラ: https://www.daiwa.com/jp/column/fish_field_guide/sea/028
- マコガレイ: https://www.knsk-osaka.jp/zukan/zukan_database/osakawan/8050b3250f4abcc/7750c17db3d1ed3.html
- マコガレイ学名: https://www.jstage.jst.go.jp/article/suisan/advpub/0/advpub_21-00031/_article/-char/ja/
- ウマヅラハギ / キダイ: https://www.jfa.maff.go.jp/j/gyoko_gyozyo/g_thema/houkokusho/attach/pdf/R3houkokusho-7.pdf
- ケンサキイカ: https://www.caa.go.jp/policies/policy/food_labeling/meeting_materials/assets/food_labeling_cms201_241203_04.pdf
- イカメタルの道具・手順: https://fishing.sunline.co.jp/column/32693/

### Kansai facilities
- 尼崎市立魚つり公園: https://www.city.amagasaki.hyogo.jp/map/1000380/1000422/1000849.html
- 尼崎の釣果と営業: https://amagasaki-uoturikouen.com/index.html
- 舞鶴親海公園: https://www.city.maizuru.kyoto.jp/kurashi/0000009016.html
- 舞鶴所在地・地図: https://www.uminokyoto.jp/spot/detail.php?sid=168
- 宮津市海洋つり場: https://www.city.miyazu.kyoto.jp/site/turiba/index.html — 2026年度から当面休業。旧年度の営業案内より新しい休業情報を優先。
- 南あわじメガフロート: https://www.city.minamiawaji.hyogo.jp/soshiki/suisan/umidurikouen-mega.html — 工事休園。予定日だけで自動再開しない。

The three new facilities include two open facilities with coordinates and one closed facility. Miyazu already existed and was verified without registering a duplicate. Closed facilities are excluded by the default map filter. Facility pins are reference positions, not proof that every nearby shore is open for fishing. Unverified target fish remain empty rather than being guessed.

## Uploaded coastal models

Fetched and fast-forwarded the user's six upload commits through `c19891a` before committing this work. All ten GLBs were inspected in the browser. `mahaze.glb` and `houbou.glb` map to the existing `haze` and `houbo` species IDs. Seven scanned models contain a separate color-reference cube; the existing renderer helper hides only those confirmed calibration nodes without modifying the files. Three front-facing models start with a side-view yaw. The established seven viewer components remain unchanged.
