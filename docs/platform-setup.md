# 2026-09-18 更新
認証付き釣果投稿の現行設定は [catch-community.md](./catch-community.md) を参照。以下の匿名公開投稿・削除キー方式は旧仕様で、既存記録の互換のために残しています。新規公開投稿にはログインが必要です。

# 魚判別・実釣記録の接続

## 現在使えるもの
- `/identify`：カメラ・写真選択、1200px以下への縮小、EXIF除去、同意UI、候補表示と図鑑リンク。未接続時は「接続準備中」と表示し、偽の判別結果を出さない。
- `/spots/[slug]`：公式案内・魚・釣法・GUIDEと実釣記録フォーム。
- `/catches` と `/quest/profile`：同じIndexedDB `uolink-real-catches-v1` を読む実釣記録。ゲーム内捕獲やXPとは別データ。画像も端末に保存し、削除・JSON書き出しが可能。
- 公開釣果のAPI：Supabase REST/Storageへ実際に保存する実装。未接続時は受付を閉じ、端末保存だけ利用可能。

## 公開釣果の有効化（2026-09-17 本番接続済み）
1. Supabaseプロジェクトを用意し、`supabase/catch-reports.sql` のテーブル・インデックス・RLS・非公開Storageバケット・回数制限関数をレビューして適用。
2. Vercelのサーバー環境変数に `SUPABASE_URL`、`SUPABASE_SERVICE_ROLE_KEY` を設定。サービスキーをNEXT_PUBLIC付きの名前へ入れない。
3. 審査担当を決めてから `CATCH_REPORTS_ENABLED=true`。再デプロイ。
4. テスト投稿を送信→DBでpending確認→写真・本文・個人情報・釣り許可・魚種を審査→対象行だけapprovedへ変更→釣り場表示を確認。

公開GETはapprovedのみ10件ずつ取得。写真は非公開バケットから10分の署名URLを発行する。匿名のDB直アクセスは拒否。投稿は同一接続元に対して1時間5回まで、本文・写真・魚種・釣り場IDをサーバーで検証し、必ずpendingから開始する。IPそのものは保存せずサーバーキーでHMAC化した短期の制限キーのみ保持する。

審査で顔・車のナンバー・連絡先・無断転載・危険行為・広告・実釣ではない画像を確認する。自動でapprovedにしない。拒否された投稿・30日を超える未審査投稿はStorage画像と行を合わせて削除する運用とする。画面の削除操作は端末に保存した秘密の削除キーで照合する。サイトデータを消した場合に備え、運営窓口でも投稿IDをもとに削除依頼へ対応する。

2026-09-17、ユーザー承認後に既存Supabase無料プロジェクトへSQLを適用し、Vercel Productionの接続と公開受付を有効化した。サーバーは SUPABASE_URL を優先し、旧 NEXT_PUBLIC_SUPABASE_URL をフォールバックする。秘密キーはサーバー専用環境変数のみで管理する。

本番で写真付き検証投稿のpending保存・非公開Storage保存・対象行の審査承認・最近の釣果表示・署名URL画像読込・再読み込み・QUEST共通記録を確認済み。最後に検証投稿をrejectedへ戻し、公開一覧から非表示になったことを確認した。実投稿も自動承認せず、運営がSupabaseで審査する。

## 写真判別の有効化（API利用・費用の承認後）
- OpenAIの画像入力に対応するResponses APIモデルを選び、`OPENAI_API_KEY` と `FISH_IDENTIFY_MODEL` をVercelのサーバー環境変数へ設定。
- 上記Supabaseの回数制限関数も必要。公開釣果のスイッチがfalseでも判別用の回数制限は動作する。
- 予算上限・アラートを提供元で設定し、`FISH_IDENTIFY_ENABLED=true` にして再デプロイ。ChatGPTの購読とAPI利用は別。
- 写真のEXIFをクライアントとサーバーの両方で除去。UOLINKは画像を永続保存せず、APIに `store:false` を指定。ただし提供元側のデータ保持は契約・設定・ポリシーに依存する。
- 候補は登録図鑑の最大3種。不明・登録外・魚でない画像は空候補にできる。確度は主観的な目安で、較正済み確率として表示しない。毒・食用可否・素手で触れるかは判定しない。
- 同一接続元1時間3回、画像500KB以下、最大1600px、タイムアウト45秒、出力上限あり。多IPからの大量利用は別途Vercel Firewall等で制限し、提供元側の費用監視を併用する。

公式仕様： https://developers.openai.com/api/docs/guides/images-vision

## Xカード
`lib/page-sharing.ts` でcanonical・OG・Twitterを共通生成。`scripts/export-sharing.cjs` は魚・料理・GUIDE・QUICK GUIDE・釣り場から1200×630 JPEGを生成し、内容ハッシュ付きURLを `lib/sharing-images.json` へ登録する。キーやXログインは不要。

再生成：`SHARP_MODULE=/path/to/sharp node scripts/export-sharing.cjs`（sharpを開発環境へ用意）。生成物をコミットするため、本番ランタイムで画像生成や外部フォント取得は行わない。Xが過去カードを保持している場合は、公開後に画像付き投稿で確認。以前の投稿の表示をUOLINK側から強制更新することはできない。

## 3Dモデル
`node scripts/optimize-models.cjs`（同様にsharpが必要）で元GLBを残して軽量版を生成。埋込テクスチャを最大1536pxへ縮小、JPEG品質88、PNGは圧縮。ジオメトリ・スキン・アニメーションは変更しない。生成画像のハッシュでURLを分ける。60モデルで約754MB→252MB。表示ルールは元のモデル名を参照し、転送URLだけ軽量版にする。
