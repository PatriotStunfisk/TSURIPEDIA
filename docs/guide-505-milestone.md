# GUIDE 505本への拡充（2026-09-21）

405本を基準に、独立した実釣の疑問へ答えるQUICK GUIDEを100本追加。合計505本（GUIDEとQUICK GUIDEの合計）。既存URL、専用魚ページ、MAPと認証の処理は変更しない。

| 分野 | 追加数 | 主な疑問 |
|---|---:|---|
| イカメタル | 10 | ドロッパーの上下、枝ス、点灯後の棚、船の揺れ |
| 泳がせ | 10 | 活き餌の投入、穂先の基準、底からの距離 |
| フカセ | 10 | ガン玉の位置、浮力、表層と仕掛けの流れ |
| サヨリ・ハゼ | 10 | 餌の位置、群れの移動、壁際と砂地 |
| 道具の手入れ | 10 | 水洗い、乾燥、注油箇所、ガイドとタモ |
| 船のジギング | 10 | 着底、巻きと竿の動き、ジグの回転、狙う層 |
| フライ | 10 | 足元のライン、合わせ、浮力、ティペット |
| 料理 | 10 | 煮崩れ、粉と衣、焼きむら、小骨、だしの保存 |
| バス | 10 | クランクの潜行区間、ブレード、ダウンショット |
| 釣行準備 | 10 | 荷物、予備、交通、駐車、帰りの便、餌の片付け |

## 構造と編集

- `lib/guide-articles-500-*.ts` の11ファイルへ分野別に原稿を保存し、`all-guides.ts` に登録。
- 1問ごとに結論、状況説明、3手順、2ケースの判断表、補足を個別執筆。
- 既存の親GUIDE、魚、methodsへ接続。既存の検索・metadata・sitemap・関連MAPリンクを再利用。
- 魚の計測写真、釣り前のタモ準備、厚いワームの針の余地は既存の質問と近いため、新規原稿から外し別テーマに変更。
- ハゼのウキ釣りだけは、同じ原稿集のちょい投げタグを継承せず `uki` を指定。
- 共有サムネイル100枚を既存のブランド画像生成スクリプトで作成。外部画像の転載は行わない。
- 出典の確認日を質問単位で指定できるよう、共通入力型へ任意の `verifiedAt` を追加。

## 確認した一次資料

- [シマノ・スピニングリールのメンテナンス](https://fish.shimano.com/ja-JP/content/special_contents/maintenance/spinning_reel/index.html)
- [シマノ・リールの手入れ](https://fish.shimano.com/ja-JP/content/fishingstyle/article/nage-iroha/itou/maintenance-02.html)
- [ダイワ・イカメタル](https://www.daiwa.com/jp/special/products/ikametal)
- [ダイワ・フライ入門](https://www.daiwa.com/-/media/Project/globeride/daiwa_com_dyfc/site/enjoy/rental/pdf/fly.pdf)
- [ダイワ・バス釣り入門](https://www.daiwa.com/jp/beginner/place/bass)
- [農林水産省・冷蔵庫のかしこい使い方](https://www.maff.go.jp/j/syouan/seisaku/foodpoisoning/frige.html)

## 検証

- `tests/guide-growth.test.cjs`：新規100本の一意性、親GUIDE、手順・判断表、釣法タグ、確認日。
- `tests/browser/guide-500.cjs`：PC 1280px／iPhone相当390px、全11原稿集から代表記事、表、横はみ出し、canonical、親への遷移、一覧検索、MAPリンク。
- 全205テスト、lint、TypeScript、buildが成功。PC 1280px／iPhone相当390pxで上記ブラウザ検証が成功。
- ローカル本番ビルドで新規100 URLの200応答、canonical、判断表、sitemap登録を確認。
- 本番反映後の100 URL／sitemap／共有画像は別途公開確認を行う。

検索流入増加は未測定。検索順位・検索需要の実測値を作らず、公開後にSearch Consoleで反応を確認する。
