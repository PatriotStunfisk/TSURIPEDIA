# 最初の3魚種拡充：調査と画像制作

## 検証記録

- TypeScript・lint成功。回帰テスト23件成功。既存7魚種の全レシピの維持も検査。
- Production buildは276ページ。sitemapの269 URLすべてHTTP 200。既存の魚25 URLは維持。
- PC 1280px／スマホ390pxで既存7＋拡充3魚種を確認。各4料理カード、画像読込、横はみ出し、コンソールを点検。
- 既存7魚種の2D→3D→2DをPC・スマホ幅で確認。新3魚種はモデル未提供のため2Dのみ。
- 拡充3魚種の全12料理カードを実際にクリックし、URL・料理名・画像の一致とスマホ表示を確認。

## 次の候補

- マイワシ・スズキ・ヒラメなど次の魚種セット。
- 既存7魚種のViewerの共通化は、向き・大きさ・照明の個別調整を比較して別の小単位で行う。
- FishPageEnhancerの料理以外の旧DOM操作の整理。料理のDOM書き換えは撤去済み。
- 既存ファイルを保持した画像配信の最適化。

対象はカワハギ・アオリイカ・メバル。既存URLを持つ簡易魚種を本格魚種として拡充。優先順位は検索数の実測ではなく編集判断です。

| 順位 | 魚種 | 主な理由 |
|---|---|---|
| 1 | カワハギ | 関西の船・堤防需要、既存GUIDEと料理の接続 |
| 2 | アオリイカ | 秋のエギング、全国展開、既存記事が充実 |
| 3 | メバル | 初心者のライトゲーム、関西・瀬戸内、冬春へつながる |
| 4 | マイワシ | サビキ入門、家庭料理、回遊魚への接続 |
| 5 | スズキ | 全国のルアー需要、港湾・河口 |
| 6 | ヒラメ | 船・サーフ、料理需要 |
| 7 | マダコ | 大阪湾・明石との相性、採捕ルールの確認が必要 |
| 8 | サワラ | 大阪湾の船釣りと食味 |
| 9 | クロダイ | 堤防・河口、幅広い釣法 |
| 10 | マゴチ | 夏の船・サーフ、白身料理 |
| 11 | イサキ | 船釣りと初夏の料理需要 |
| 12 | マハゼ | 秋の初心者・家族需要、小魚に合う料理 |

## 参照資料

- [シマノ：カワハギ](https://fish.shimano.com/ja-JP/content/beginners/fish/kawahagi/index.html)：釣り場と釣法。
- [シマノ：アオリイカ](https://fish.shimano.com/ja-JP/content/beginners/fish/aoriika/index)：釣法。
- [市場魚貝類図鑑：カワハギ](https://www.zukan-bouz.com/syu/カワハギ)：形態・食用情報。
- [市場魚貝類図鑑：アオリイカ](https://www.zukan-bouz.com/syu/アオリイカ)：形態・食用情報。
- [市場魚貝類図鑑：アカメバル](https://www.zukan-bouz.com/syu/アカメバル)：メバル類の区別と食用情報。
- [厚生労働省：アニサキス](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000042953.html)：生食の寄生虫対策。

確認日：2026-09-12。文章・材料配合・手順はUOLINK用に作成。既存の基本・詳細解説は維持。検索ボリュームを測定した順位ではありません。

## 画像制作記録

画像生成は内蔵image_genを使用。既存画像の上書きなし。図鑑3枚＋料理12枚、1料理1ファイル。図鑑画像は生成による参考表現であり、同定標本の写真ではありません。図鑑3枚は透過PNGで、実画面でも背景となじむことを確認しています。

### public/images/fish/kawahagi-real.png

Scientific-educational realistic full-body side-profile specimen; correct species anatomy, no text, no people, transparent background requested.

### public/images/fish/aoriika-real.png

Scientific-educational realistic full-body side-profile specimen; correct species anatomy, no text, no people, transparent background requested.

### public/images/fish/mebaru-real.png

Scientific-educational realistic full-body side-profile specimen; correct species anatomy, no text, no people, transparent background requested.

### public/images/fish/kawahagi-nitsuke.png

Use case photorealistic-natural. High quality editorial food photograph for Japanese fishing recipe website. Japanese kawahagi filefish simmered in soy sauce and ginger, two small skinless diamond-shaped body portions with bone, glossy brown broth, ginger strips, ceramic shallow bowl. One finished dish only, cooked fish anatomy and portion size realistic, food is the hero, natural soft window light, dark wood tabletop, tasteful Japanese home cooking ceramic tableware, three-quarter close-up, landscape composition, no text no logos no people no hands, not a collage.

### public/images/fish/kawahagi-karaage.png

Use case photorealistic-natural. High quality editorial food photograph for Japanese fishing recipe website. Japanese kawahagi filefish karaage, small skinless bone-in pieces coated thinly in potato starch fried crisp golden, white ceramic plate with lemon wedge. One finished dish only, cooked fish anatomy and portion size realistic, food is the hero, natural soft window light, dark wood tabletop, tasteful Japanese home cooking ceramic tableware, three-quarter close-up, landscape composition, no text no logos no people no hands, not a collage.

### public/images/fish/kawahagi-nabe.png

Use case photorealistic-natural. High quality editorial food photograph for Japanese fishing recipe website. Japanese kawahagi filefish hot pot, skinless white fish bone-in pieces, napa cabbage, tofu, shiitake mushrooms and leek in clear steaming dashi, small traditional clay donabe. One finished dish only, cooked fish anatomy and portion size realistic, food is the hero, natural soft window light, dark wood tabletop, tasteful Japanese home cooking ceramic tableware, three-quarter close-up, landscape composition, no text no logos no people no hands, not a collage.

### public/images/fish/kawahagi-misoshiru.png

Use case photorealistic-natural. High quality editorial food photograph for Japanese fishing recipe website. Japanese kawahagi filefish miso soup, modest small bone-in white fish pieces with skin removed, pale cloudy miso broth, chopped green onion and tofu in a black lacquer bowl. One finished dish only, cooked fish anatomy and portion size realistic, food is the hero, natural soft window light, dark wood tabletop, tasteful Japanese home cooking ceramic tableware, three-quarter close-up, landscape composition, no text no logos no people no hands, not a collage.

### public/images/fish/aoriika-sashimi.png

Photorealistic-natural editorial Japanese food photograph. Aoriika squid sashimi, delicate thin white translucent strips of mantle arranged neatly on a dark ceramic plate with shiso and a tiny wasabi mound, no giant thick fish slices. Natural Japanese home cooking, one dish as hero, dark wood tabletop, soft window lighting, elegant ceramic tableware. Close three-quarter view, landscape, natural realistic portions. No words logos people hands or collage.

### public/images/fish/aoriika-tempura.png

Photorealistic-natural editorial Japanese food photograph. Aoriika squid tempura, short tender strips of squid mantle with light airy pale golden crisp batter, served on a ceramic plate with grated daikon and tentsuyu. Natural Japanese home cooking, one dish as hero, dark wood tabletop, soft window lighting, elegant ceramic tableware. Close three-quarter view, landscape, natural realistic portions. No words logos people hands or collage.

### public/images/fish/aoriika-butter.png

Photorealistic-natural editorial Japanese food photograph. Aoriika squid butter soy saute, bite sized white mantle rectangles with light crosshatch scoring curling slightly, a few tender tentacle pieces, glossy butter soy glaze and chopped green onions. Natural Japanese home cooking, one dish as hero, dark wood tabletop, soft window lighting, elegant ceramic tableware. Close three-quarter view, landscape, natural realistic portions. No words logos people hands or collage.

### public/images/fish/aoriika-shioyaki.png

Photorealistic-natural editorial Japanese food photograph. Aoriika squid salt grilled, cleaned opened white mantle scored lightly, gently charred edges, cut into bite size strips with several grilled arms alongside, ceramic rectangular plate and lemon. Natural Japanese home cooking, one dish as hero, dark wood tabletop, soft window lighting, elegant ceramic tableware. Close three-quarter view, landscape, natural realistic portions. No words logos people hands or collage.

### public/images/fish/mebaru-nitsuke.png

Photorealistic-natural high quality editorial food photograph. One small Japanese mebaru rockfish simmered whole, reddish brown intact skin, large eye and compact body, glossy soy ginger sauce, ginger strips in a ceramic shallow bowl. Food is main subject, natural cooked anatomy and portion sizes, dark wood table and soft window light, tasteful Japanese table setting, three-quarter close-up landscape. No people hands text logos collage.

### public/images/fish/mebaru-shioyaki.png

Photorealistic-natural high quality editorial food photograph. One small whole Japanese mebaru rockfish salt grilled, realistic compact fish with large eye and intact browned reddish skin, delicate charred fin edges, daikon and lemon on Japanese rectangular plate. Food is main subject, natural cooked anatomy and portion sizes, dark wood table and soft window light, tasteful Japanese table setting, three-quarter close-up landscape. No people hands text logos collage.

### public/images/fish/mebaru-karaage.png

Photorealistic-natural high quality editorial food photograph. Japanese mebaru rockfish karaage, one small 18cm compact whole rockfish carefully fried golden crisp with diagonal cuts in body, realistic small fish head and fins, ceramic plate with lemon. Food is main subject, natural cooked anatomy and portion sizes, dark wood table and soft window light, tasteful Japanese table setting, three-quarter close-up landscape. No people hands text logos collage.

### public/images/fish/mebaru-aquapazza.png

Photorealistic-natural high quality editorial food photograph. Japanese home style mebaru rockfish aquapazza, one small whole reddish brown rockfish with large eye and compact body, clams, cherry tomatoes, parsley and olive oil broth, shallow white ceramic serving bowl. Food is main subject, natural cooked anatomy and portion sizes, dark wood table and soft window light, tasteful Japanese table setting, three-quarter close-up landscape. No people hands text logos collage.
