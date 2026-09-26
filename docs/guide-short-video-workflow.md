# GUIDE → YouTube Shorts / TikTok 制作・運用

## 現行版：動き・音・字幕のある25秒動画

2026-09-26の実例調査を受け、先にこちらを使う。`--motion-v2` の3本はNG→改善を3組、動く水中模式図、大字幕、120BPMのオリジナルBGM・切り替え音を含む。`npm run shorts:render -- aji-sabiki-depth--motion-v2` で再生成できる。3本まとめて再生成する場合は `node scripts/export-shorts.cjs render motion` を使う。旧12本は `--tips-v1` として残し、公開台帳も混ぜない。

[実例調査・企画・検証計画](./short-video-research-20260926.md)を参照。生成した音は外部楽曲・サンプルを含まない。ナレーションは未実装。以下の30秒字幕版の説明は初版の記録。


## 方針と費用

広告枠を買わず、有益な短尺動画からUOLINKへ誘導する。まず30秒・縦1080×1920の字幕動画で開始する。制作はMac上のNode.js、sharp、FFmpegで処理し、有料生成API・サーバー・編集ソフト契約を使わない。電気代・通信費・作業時間は別。投稿先のアカウントは必要。公開・自動予約投稿の接続は今回行わない。

GUIDEを丸ごと読み上げない。「サビキで釣れないとき、最初に変えるのは棚」のように1本1疑問へ絞る。実釣写真がない場合、図鑑画像を実釣映像に見せかけず、解説カードとして使う。

## 30秒の型

|時間|内容|役割|
|---|---|---|
|0–4秒|身近な疑問を1つ|視聴する理由|
|4–11秒|最初に確認すること|すぐ試せる一手|
|11–18秒|具体的な行動|保存したくなる知識|
|18–25秒|失敗を避ける条件|断定・誇張を防ぐ|
|25–30秒|ウオリンクで検索|原本の仕掛け・手順へ|

右端と下部はサービスの操作ボタン・説明表示を避ける余白。焼き込み字幕とSRTを両方出力する。初版はBGM・音声なし。音声を加える場合は同梱台本を自分で録音し、各場面の時間内に収める。Macの標準読み上げ音声の商用利用を当然に許諾済みとは扱わない。音楽は無音のままでもよい。TikTok内の曲を付けた動画をそのままYouTubeへ転載しない。

## データと制作

- 原本：`lib/all-guides.ts`。魚・画像は既存レジストリから取得する。
- 短尺用編集：`lib/guide-shorts.ts`。冒頭、3つの短い要点、原本内の確認用抜粋のみ管理する。原本の抜粋が消えたら生成を停止し、誤った自動再利用を防ぐ。
- 12テーマを登録済み。動画向きの疑問を編集してから追加する。全GUIDEを無審査で量産しない。
- 実行：`npm run shorts:export`、`npm run shorts:render -- <clip-id>`。全件は `npm run shorts:render -- all`。
- 必要：Nodeとプロジェクト依存（Nextに含まれるsharpを再利用）、FFmpeg、SVG描画で利用できる日本語フォント（このMacはヒラギノ）。FFmpegがPATHにない場合 `FFMPEG_PATH=/absolute/path/to/ffmpeg`。sharpは必要に応じ `SHARP_MODULE=/absolute/path/to/sharp`。
- 出力：`artifacts/shorts/index.html`（確認ボード）、各動画ディレクトリの `video.mp4`、`cover.jpg`、`captions.srt`、`voice-script.txt`、`youtube.txt`、`tiktok.txt`、`plan.json`。
- 出力と公開台帳はGit対象外。台帳はバックアップする。別Macへ移すときは台帳も一緒に移す。
- 今回のローカルFFmpegは `artifacts/shorts/tools/ffmpeg`。初回取得後の生成はネット接続不要。

## 確認 → 投稿 → 記録

1. 確認ボードで動画を最後まで再生する。文字切れ、画像の魚種、読める時間、原本の最新情報を確認する。
2. `node scripts/export-shorts.cjs mark <clip-id> youtube reviewed`（TikTokは `tiktok`）。
3. YouTube Studio / TikTokの公式投稿画面でMP4を添付し、対応する投稿文を貼る。字幕が焼き込み済みなので二重表示に注意。YouTubeのサムネイル選択は利用できる投稿画面の機能に従う。
4. UOLINK自体を宣伝するTikTok投稿ではコンテンツ開示をONにし、自社ブランドのプロモーションを選ぶ。AI生成画像が含まれる場合は、各サービスの現行の合成コンテンツ開示要件も投稿前に確認する。
5. 公開後に実際のURLと映像を確認し、`node scripts/export-shorts.cjs mark <clip-id> youtube published <公開URL>`。
6. 送信したか不明なら `... youtube uncertain`。アカウントの投稿一覧で照合するまで再送しない。台帳はYouTubeとTikTokを分けて保持する。

`reviewed → published` または `reviewed → uncertain → published` のみ許可する。投稿済みの再登録はエラー。編集内容が変わった動画は新しいクリップIDで再審査する。CLIは投稿APIを呼ばず、公開状態を勝手に成功へ変更しない。

## サイトへ来てもらう導線

YouTube Shortsの説明欄・コメントのURLはクリックできない。チャンネルのプロフィールリンクにUOLINKを設定し、動画では「ウオリンクで検索」と案内する。YouTube内の関連動画機能も使える場合に活用する。

TikTokのプロフィールWebリンクは、原則1,000フォロワー以上または登録済みビジネスアカウント等の条件がある。利用できない段階では検索誘導とYouTube等のプロフィール連携を使う。本文URLが必ずタップできる前提にしない。

投稿文に出す原本URLには `utm_source=youtube|tiktok`、`utm_medium=organic_video`、`utm_campaign=guide-shorts`、`utm_content=クリップID` を付与。プロフィール固定リンクは `https://uolink.jp/guide?utm_source=youtube&utm_medium=organic_video&utm_campaign=guide-shorts&utm_content=profile` 等を使う。ただし検索経由の訪問や固定プロフィール経由は動画単位まで正確に帰属できない。計測導入済みのツールで実際に確認できる範囲だけ評価する。

記事内ではGUIDE → 釣法・釣具図鑑 → 適したAmazon商品へ。動画を商品名の羅列にせず、必要性・選ぶ条件を教える。収益や「必ず釣れる」といった保証をしない。

## 最初の2週間

まず1日1本、同じ素材を各サービス用の投稿文で展開する。これは運用案であり予約・自動投稿設定ではない。12本を順に出し、残り2日は反応のよいテーマを別の疑問で掘る。開始時刻は仮に19〜21時、視聴データを見て調整する。投稿できなかった日の分を連投しない。

- 釣り方・失敗対策：全体の約6割。
- 道具選び・買う前の判断：約3割。
- 釣り場の探し方・持ち帰り：約1割。

`artifacts/shorts/metrics.csv` に記録欄を出力する。空欄は未計測として扱い、0件と決めつけない。

公開7日後に各サービスで視聴数、平均視聴時間、完視聴、保存・共有、プロフィール訪問（取得できるもの）を記録する。サイトでは流入とGUIDE → 釣具への遷移を見る。伸びた動画の冒頭・テーマを再利用し、再生数だけでなくサイト訪問につながったものを増やす。指標の定義はサービス間で違うため単純合算しない。

## 無料運用の次の段階

安定したら公式投稿画面の予約機能を使ってまとめて予約する。利用可能な機能・条件はアカウントで確認する。API自動投稿はOAuth、審査、権限等が別途必要であり、今回の制作システムに認証情報を保存しない。まず12本で内容・誘導を検証してから接続を判断する。

## 公式仕様（2026-09-26確認）

- [YouTube Shortsの長さ](https://support.google.com/youtube/answer/15424877?hl=en)
- [YouTubeリンクの扱い](https://support.google.com/youtube/answer/13748639?hl=en)
- [TikTokプロフィールリンク](https://support.tiktok.com/en/getting-started/setting-up-your-profile/linking-another-social-media-account)
- [TikTokの自社ブランド開示](https://support.tiktok.com/en/business-and-creator/creator-and-business-accounts/promoting-a-brand-product-or-service)
- [TikTokの商用音楽](https://support.tiktok.com/en/business-and-creator/creator-and-business-accounts/commercial-use-of-music-on-tiktok)
