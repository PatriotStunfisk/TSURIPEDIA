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
