# uolink.jpへの本番ドメイン移行

- 正規URL：`https://uolink.jp`。コードの原本は`lib/site-url.ts`。
- Vercel：既存`uolink`プロジェクトのProductionへ`uolink.jp`を追加。
- お名前.com：Aレコード`@ → 216.150.1.1`、TTL 300。値はVercel管理画面の指定を確認して設定したもの。将来変更するときは最新の指定を再確認。
- ネームサーバー：`01.dnsv.jp`、`02.dnsv.jp`、`03.dnsv.jp`、`04.dnsv.jp`への変更をDNS登録と同時に申請。DNS・証明書の反映は外部サービス側で時間がかかる場合がある。
- Supabase Site URL：`https://uolink.jp`。
- Supabase Redirect URLs：`https://uolink.jp/auth/callback`を追加。旧`https://uolink.vercel.app/auth/callback`も維持。
- GoogleからSupabaseへのコールバックは既存のまま。OAuth Client Secretや環境変数の変更は不要。
- 旧ホストは移行中も利用可能。既存ページパス、魚種・釣果・ユーザーのIDは変更しない。
- ログインCookieや端末内のお気に入りはドメイン単位のため、新ドメインで再ログインが必要。旧ドメインの端末内データは削除しない。

## 検証

TypeScript、lint、182件の回帰テスト、production buildを実行。新ドメインのcanonical、sitemap、robots、OG画像、X下書きリンクをテストで検証。
本番公開後はHTTPS、主要ページ、Googleログインの戻り先を確認する。
