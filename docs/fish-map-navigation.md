# 魚図鑑・釣法とMAPの接続

- `/spots?fish=aji`、`/spots?method=sabiki` は既存レジストリのIDを指定する。併用時はAND条件。不明なIDは初期条件へ採用しない。
- `RelatedSpots` は既存の関連地点から最大4件を表示する。休止・閉鎖地点と広域計画エリアを除き、確認済みの初心者・設備情報を優先し、都道府県・岸／船の偏りを抑える。掲載は釣果や営業の保証ではない。
- GUIDEの関連は `spot-guide-index.ts` が既存記事の魚タグ・関連URLから導出する。釣り場に明示したGUIDEを優先する。本文をMAPのクライアントへ送らない。
- 魚一覧では `FishThumbnail` だけを使用する。詳細用の `FishVisual` や3D viewerをimportしない。カードは通常のa要素なのでhydrationを待たず移動できる。
- 全83魚種の一覧画像はNext Imageのresponsive画像・lazy loading・寸法指定を使用する。原画像と個別ページのviewerは変更しない。

## 2026-09-18 ローカルproduction buildでの検証

- TypeScript / lint / 168 tests / build成功。
- 390×844のモバイル表示とPC表示で魚・釣法からMAPへ遷移し、初期フィルターの選択を確認。
- MAPプレビューの魚・釣法リンク、詳細のGUIDE、アジの3D切替を確認。横方向のはみ出し・pageerrorなし。
- Chromium CDPで400ms遅延、約400kbpsのダウンロード帯域を設定。加えて画像・JavaScriptを15秒保留し、画像未完了の状態でカードをタップ。カード表示612ms、個別ページへのdocument到達は開始から1841ms。これはローカルの単発テストであり、実回線の速度保証やINP測定ではない。
- 同環境のResource Timingでは一覧JS転送量356,419 → 155,420 bytes。変更後は新規ブラウザコンテキストでも155,420 bytesを確認。3Dモデルの取得0件、lazy指定83/83件。
- 実機Safariの計測、実ユーザーのLCP/INPは未実施。
