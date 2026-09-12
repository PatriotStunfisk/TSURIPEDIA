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

## 魚種追加（第二段階）

全25魚種の基本情報と登録済み23魚種の詳細は `lib/fish-species/<slug>.ts` に魚種単位でまとめています。
新しい本格魚種は、このプロフィールを1ファイル作り、`lib/fish-species/index.ts` にimportと配列の1項目を追加します。
既存の `data.ts`・`fish-details.ts`・`launch-fish.ts`・`cooking-data.ts` に同じ内容を再登録する必要はありません。

- `base`: 基本情報・表示用釣法名・任意の `methodSlugs` / `guideSlugs` / `relatedSlugs`。
- `detail`: 詳細解説・初心者Tips・安全情報・食味など。
- `launch`: 見分け方・キャッチコピー・追加解説用情報。
- `cooking`: 下処理・レシピ。魚名とslugは `base` から自動で引き継ぎます。
- `tableGuide`: 専用の料理紹介カードが必要な場合だけ指定。省略時はレシピからカードを生成します。
- `featuredOrder`: トップ掲載順を調整する場合だけ指定。既存の掲載順は維持しています。

一覧・汎用詳細・metadata・sitemap・関連導線・料理ページは従来のレジストリから参照します。
GUIDEは既存記事の魚リンクも逆引きし、追加指定した記事と重複なくまとめます。
未登録のリンク先やレシピ本文を自動生成する仕組みではありません。

タチウオ・アジ・マダイの専用本文、専用UI、画像は維持しています。
従来のデータファイルはプロフィールから生成する互換窓口です。魚種の二重登録は不要です。
同じslugを旧データと新プロフィールに二重登録するとエラーになるため、移行時は元の基本情報を取り除きます。

詳しい項目と作業手順は [魚種プロフィールの管理](docs/fish-species.md) を参照してください。

検証: `npm run test:content`、`npx tsc --noEmit`、`npm run lint`、`npm run build`。
`lint` はESLintによる構文・基本ルールの検査です。型とNext.jsの生成はTypeScriptチェックとbuildで検証します。
