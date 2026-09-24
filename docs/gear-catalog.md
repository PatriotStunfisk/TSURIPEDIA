# 釣具図鑑

`lib/gear-catalog.ts` が共通レジストリ。追加シリーズは `lib/gear-catalog-expansion.json` で管理し、レジストリへ統合する。メーカー公表仕様と編集部の組み合わせ例を分ける。`methods` / `fish` は既存レジストリのIDを使い、釣法手順を再管理しない。商品価格・評価・在庫は保存せず販売先で確認。Amazon URL は既存 `affiliate-products.ts` の関数で生成する。

写真の元URL・出典ページ・利用根拠は `gear-image-sources.json`。2026-09-24 にユーザーが口頭で掲載許諾を得たと明示。シリーズ写真はUIとaltで明示し、異なる型番の写真を当該型番の写真として扱わない。許可範囲に変更があれば当該画像を差し替える。

`/gear` は検索可能な図鑑、`/gear/[slug]` は製品情報と回遊、`/gear/preparation` は既存の準備ガイド。既存の `/gear#魚ID` は準備ガイドへのリンクとして維持。

## 2026-09-24 拡充
14製品・7ブランド。共通のgearKindLabelsでロッド、リール、ルアー、エギの表示とフィルターを管理。スマホ一覧は2列、本文解説は詳細ページへ。写真の色・シリーズ差はキャプションと出典台帳に記録。

## 200件規模のシリーズ拡充
199シリーズを追加し、合計213件。色違いを別ページにせず、公式ページ単位のシリーズと代表仕様表を掲載。既存14製品のslugは維持する。新規製品写真は800px以内のWebPで保存。

分類は `gearKindLabels`、細分類は `gearSubtypeLabels`。新規ルアーには必ず `subtype` を指定する。ラインは素材・用途でPE／ナイロン／フロロ／リーダー／金属等を区別する。用品は別種の機材なので、釣法だけが一致することをもって互換性を保証しない。`relatedGear: []` は自動のロッド・リール組み合わせを無効にする。

`variants` はメーカー公表値からの代表仕様。価格・JAN・カラー列を除き、同仕様の色違いはまとめる。表に全型番を掲載しているとは表示しない。写真と代表仕様の型番が必ず同一であるとは扱わず、写真はシリーズ代表と明示する。未知の値は補完しない。

一覧はGET検索、24件ごとのサーバーページ分割。ページ移動でも絞り込みを保持し、全製品の仕様表をクライアントへ送らない。サイト検索・sitemap・静的詳細ページは共通レジストリから派生する。

## Colors and contextual product cards
- Optional `colors: {name, models[]}[]` preserves official color names/codes and model associations. An empty model list means only a series-level color is confirmed, not availability for every size. No approximate color swatches or recolored product photos are generated.
- 66 DAIWA/Rapala series have color entries checked against the official product pages used by the catalog on 2026-09-24. Unknown color/model combinations are omitted.
- `selectRelatedGear` filters explicit `methods` / `fish` relationships and prioritizes category diversity. `RelatedGear` shares the existing product images, detail links and central Amazon link helpers on method/fish pages. It does not claim the selected products form a compatible tackle set.
