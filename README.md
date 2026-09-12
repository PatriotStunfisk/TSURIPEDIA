# TSURIPEDIA

釣りが、もっと好きになる。

Next.js 16 / React 19 / TypeScript / Three.js で構築したTSURIPEDIAの本番Webスターターです。

## 実装済み
- トップページ
- 魚図鑑・魚詳細
- タチウオのブラウザ内3D表示
- 釣り方
- 釣りスポット
- 釣具
- 子ども向けTSURI QUESTミニゲーム
- 管理画面UI
- sitemap / robots / SEO metadata
- Supabase CMS用schema

## 起動
```bash
npm install
npm run dev
```

## 次工程
Vercelへデプロイ後、Supabase認証・DB・Storageを接続して `/admin` を実際に編集可能なCMSへ拡張します。

## 魚種追加（第一段階）
- 基本情報は `lib/data.ts` の `fish` に1件追加します。slugは公開後に変更しません。
- `fish-registry.ts` を通じて魚図鑑一覧・汎用詳細・metadata・sitemapに反映されます。既存の専用ページは維持します。
- `methods` の既存釣法名から釣法リンクを取得します。曖昧な場合は同じ魚データに `methodSlugs: ['sabiki']` のように既存釣法slugを指定できます。
- GUIDEの `related` にある `/fish/<slug>` リンクを逆引きして魚ページへ表示します。追加で紹介したい記事は魚データの `guideSlugs` に既存記事slugを指定します。画面では先頭6件まで表示します。
- 関連魚は `relatedSlugs` の指定を優先し、既存の重点魚種は `launch-fish.ts` の選定を維持します。それ以外は共通釣法から最大6件表示します。未登録魚はリンク化しません。
- 料理は `cooking-data.ts` に同じ魚slugの内容がある場合だけ自動接続します。詳しい解説は `fish-details.ts`、重点魚種の見分け方等は `launch-fish.ts` で引き続き管理します。本文やレシピを自動生成する仕組みではありません。
- 画像・専用デザインの追加は別作業です。既存画像を維持し、参照パスの大文字小文字を一致させます。

検証: `npm run test:content`、`npx tsc --noEmit`、`npm run lint`、`npm run build`。
`lint` はESLintによる構文・基本ルールの検査です。型とNext.jsの生成はTypeScriptチェックとbuildで検証します。
