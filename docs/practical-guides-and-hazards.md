# 実践GUIDEと危険魚の管理

## GUIDE

- 原本は `lib/guide-articles-practical.ts`。主要11テーマを個別に執筆し、既存10URLを維持、新規はサバのサビキ・保冷GUIDE。
- `GuideSection` の `table`、`steps`、`diagram`、`baitDiagram`、`warning` を利用。表は列数をそろえ、図は縮尺を持たない模式図として説明する。
- `tackleMethod` は既存の釣法の仕掛け図を参照する。対象魚でタックル規格が異なる場合は `tackleConnectionsOnly` で共通する接続順だけを表示する。ヒラメ記事に青物用の太いハリスを流用しない。
- 出典と確認日を記載し、船宿指定・地域差を記事の具体的な判断箇所へ入れる。見出しや魚名だけを置換した記事は作らない。
- `related` の魚・釣法リンクから魚ページの逆引き、関連記事、釣法ページのGUIDEが派生する。`featured` は編集上の優先度であり、PVランキングではない。

## 危険魚

- 各 `lib/fish-species/<slug>.ts` の `hazard` が唯一の管理元。危険部位・扱い方・食用方針・見分け方・出典を持つ。比較GUIDEもこのデータから生成する。
- `cookingEnabled:false` は料理レジストリ、魚ページの食用ブロック、料理ルート、sitemapをまとめて除外する。`professional-only` の料理有効化は型ヘルパーが拒否する。
- 今回の7魚種は `identificationOnly:true`、`quest.enabled:false`。釣って狙う案内やゲームへの自動追加を避け、識別・安全確認を中心にする。
- アイゴのみ専門家による処理済み切り身の4料理。料理一覧・個別料理への直接訪問でも警告を表示する。フグの自己調理や部位除去の手順は掲載しない。
- 新魚体画像7点とアイゴ料理4点はオリジナル生成。生成モード・対象・採用ファイルは `hazard-images-2026-09-16.json`。背景色を透明に見せたRGB画像は採用せず、RGBAと実画面を確認した。

## トップと検索

- `selectHomeFish` が定番4種と季節の魚を合計8種選択。トップは1日単位の再検証で季節更新に追従し、GUIDEは編集上の優先6記事を表示する。
- 魚一覧は別名検索と危険魚フィルター、GUIDE一覧は語句検索と魚種別絞り込み。カテゴリ目次は折りたたみ式。

## 確認方法

- TypeScript、lint、`node --test tests/*.test.cjs`、production build。
- GUIDEのURL重複、表の列数、逆引きリンク、危険魚の料理遮断、トップ件数は回帰テストで確認する。
- PC・390px幅で図、表の横スクロール、警告、画像、検索操作を確認。公開sitemapの各URLと内部リンクをHTTP検査する。
