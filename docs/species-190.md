# 魚図鑑190種への拡充（2026-09-25）

168種から22種を追加。既存URL・基本10魚種・追加順を維持する。

## 追加種
- ハマフエフキ / `hamafuefuki` / Lethrinus nebulosus
- フエダイ / `fuedai` / Lutjanus stellatus
- ヨコスジフエダイ / `yokosujifuedai` / Lutjanus ophuysenii
- クロホシフエダイ / `kurohoshifuedai` / Lutjanus russellii
- タマガシラ / `tamagashira` / Parascolopsis inermis
- チャイロマルハタ / `chairomaruhata` / Epinephelus coioides
- カスミアジ / `kasumiaji` / Caranx melampygus
- ギンガメアジ / `gingameaji` / Caranx sexfasciatus
- イトヒキアジ / `itohikiaji` / Alectis ciliaris
- ウスメバル / `usumebaru` / Sebastes thompsoni
- ハツメ / `hatsume` / Sebastes owstoni
- シマゾイ / `shimazoi` / Sebastes trivittatus
- マツカワ / `matsukawa` / Verasper moseri
- ババガレイ / `babagarei` / Microstomus achne
- ヌマガレイ / `numagarei` / Platichthys stellatus
- ニゴイ / `nigoi` / Hemibarbus barbus
- カマツカ / `kamatsuka` / Pseudogobio esocinus
- モツゴ / `motsugo` / Pseudorasbora parva
- タモロコ / `tamoroko` / Gnathopogon elongatus
- ホンモロコ / `honmoroko` / Gnathopogon caerulescens
- ムロアジ / `muroaji` / Decapterus muroadsi
- ウメイロ / `umeiro` / Paracaesio xanthura

## 内容
各プロフィールに識別点、釣法、初心者向け情報、安全情報、関連魚、下処理、代表料理4品を収録。英語の概要と既存QUESTレジストリへ接続。3Dファイルが未提供の種は既存の2D・準備中表示を使う。ヌマガレイは汽水・淡水にも入るが一覧ではカレイ類に分類する。

## 主な確認資料
- ハマフエフキ: https://www.zukan-bouz.com/syu/ハマフエフキ
- フエダイ: https://www.zukan-bouz.com/syu/フエダイ
- ヨコスジフエダイ: https://www.zukan-bouz.com/syu/ヨコスジフエダイ
- クロホシフエダイ: https://www.zukan-bouz.com/syu/クロホシフエダイ
- タマガシラ: https://www.zukan-bouz.com/syu/タマガシラ
- チャイロマルハタ: https://www.zukan-bouz.com/syu/チャイロマルハタ
- カスミアジ: https://www.zukan-bouz.com/syu/カスミアジ
- ギンガメアジ: https://www.zukan-bouz.com/syu/ギンガメアジ
- イトヒキアジ: https://www.zukan-bouz.com/syu/イトヒキアジ
- ウスメバル: https://www.zukan-bouz.com/syu/ウスメバル
- ハツメ: https://www.zukan-bouz.com/syu/ハツメ
- シマゾイ: https://www.zukan-bouz.com/syu/シマゾイ
- マツカワ: https://www.zukan-bouz.com/syu/マツカワ
- ババガレイ: https://www.zukan-bouz.com/syu/ババガレイ
- ヌマガレイ: https://www.zukan-bouz.com/syu/ヌマガレイ
- ニゴイ: https://www.zukan-bouz.com/syu/ニゴイ
- カマツカ: https://www.zukan-bouz.com/syu/カマツカ
- モツゴ: https://www.zukan-bouz.com/syu/モツゴ
- タモロコ: https://www.zukan-bouz.com/syu/タモロコ
- ホンモロコ: https://www.zukan-bouz.com/syu/ホンモロコ
- ムロアジ: https://www.zukan-bouz.com/syu/ムロアジ
- ウメイロ: https://www.zukan-bouz.com/syu/ウメイロ
- ハマフエフキ: https://www.miegyoren.or.jp/fisheries-in-mie/uopedia/hamafuefuki/
- 南方魚のシガテラ: https://www.pref.okinawa.jp/_res/projects/default_project/_page_/001/004/114/ciga_leaf2022.pdf
- マツカワ: https://www.hro.or.jp/fisheries/research/saibai/section/zoushoku/jajqh500000003ep.html
- マツカワの資源管理: https://www.town.mukawa.lg.jp/5019.htm
- 滋賀県の採捕制限: https://www.pref.shiga.lg.jp/gf00/7219.html
- ホンモロコ: https://www.pref.shiga.lg.jp/gf00/7251.html

画像は新規生成した説明用素材を料理・魚種ごとに管理。別魚種の画像は流用しない。元画像・生成指示はspecies-190-assets.jsonに記録。

## 検証
- TypeScript・ESLint・本番build成功。
- 回帰テスト266件成功。
- 新規159ページ、画像110枚、既存7魚種のHTTP・canonical・sitemap確認成功。
- PC魚図鑑190種、カレイ検索、ヌマガレイ詳細、iPhone相当390pxでホンモロコ詳細・料理カード・レシピ・英語魚ページ・新GUIDEを確認。横はみ出しなし。ブラウザのエラーログなし。
- 共有JPEG137枚追加。既存画像とURLは変更なし。
