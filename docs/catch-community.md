> 2026-09-18更新：一般ログインはGoogle / Apple OAuthへ移行。メール／SMTPの説明は旧実装の記録です。現在の設定は [catch-oauth.md](./catch-oauth.md) を参照してください。

# MAP × 実釣データベース MVP

## 構成

既存Supabase Postgres / Auth / 非公開Storage `catch-photos` を再利用する。新しいDBやSNSサービスは作らない。

- `catch_reports`：既存spot/船宿slug、fish slug、method slug、釣行日、時間帯、匹数、サイズ、リリース、投稿者UUID、作成日時、審査状態。GPSは受け付けない。未知魚は `other` + 任意名称、または `unknown`。
- `catch_flags`：報告対象ID・報告者ID・理由・受付／対応日時。同一利用者の同一投稿への報告は重複登録しない。
- `catch_moderators`：運営が登録する管理者UUID。一般利用者が自分で権限を設定できるAPIはない。
- 公開取得は承認済みだけ。自分の一覧は同じアカウントの確認待ち・非公開投稿も取得する。新しい投稿から10件ずつ。MAPのカードは写真署名処理なしで2件だけ取得。
- 旧匿名投稿・端末内IndexedDB・QUESTの実釣記録を維持する。ゲームの捕獲・XPとは混同しない。

## 認証

Supabase公式 `@supabase/ssr` + `@supabase/supabase-js` をサーバー側で使用。メールのマジックリンク（PKCE）でログインする。パスワードはUOLINKで扱わない。

セッションはHttpOnly / SameSite=Lax / 本番Secure cookie。APIで `auth.getUser()` による本人確認を行い、cookieに含まれるユーザーIDをそのまま信用しない。書き込みは同一Originのみ。戻り先はUOLINK内の許可したパスに限定する。読み取りはログイン不要。

メール認証設定を終えるまで `CATCH_EMAIL_LOGIN_READY=false`。一般利用者への送信を試して失敗させるのではなく、ログインページで準備中と表示する。既存のサーバー接続設定をそのまま利用する。`SUPABASE_ANON_KEY` があればAuthに優先して使う。サービスキーをブラウザへ送らない。

## 写真

最大3枚。各入力20MB以下、ブラウザで長辺1200pxへ縮小・JPEG再エンコード。送信時は1枚500KB以下をサーバーで検証し、JPEGのAPP/COMメタデータを除去する。位置情報をDBへ抽出・保存しない。

`<user UUID>/<report UUID>/<index>.jpg` で保存し、元画像を保存しない。公開は非公開バケットの10分署名URLだけを配る。一覧では一括署名し、MAPカードでは写真を取得しない。1投稿は最大約1.5MB。

行IDを予約してからアップロードする。同じIDでの再送による既存画像上書きを禁止。アップロード完了前の投稿は一般一覧に出さない。削除はまず非表示→写真削除→行削除。途中失敗は管理画面の削除待ちとして再試行できる。

## 必要な設定と本番適用状況

1. `supabase/catch-community.sql` を既存 `catch-reports.sql` の後に適用する。2026-09-18、既存本番プロジェクトへ追加マイグレーションを適用済み。従来の投稿は削除しない。
2. Supabase AuthのSite URLを `https://uolink.vercel.app`、Redirect URLを `https://uolink.vercel.app/auth/callback` に設定済み。
3. **未完了：カスタムSMTP**。送信サービスのアカウント・送信元ドメインを用意し、SMTPホスト・ポート・認証・送信元をSupabaseへ設定する。秘密情報はチャットやGitに貼らない。
4. 実メールで受信→同じブラウザでリンク→ログイン→確認待ち保存を検証してから、Vercelの `CATCH_EMAIL_LOGIN_READY=true` を設定して再デプロイする。
5. 最初に運営本人がログインした後、Supabase Authenticationに表示されたUUIDを確認して `catch_moderators` に登録する。アプリ側の管理URLは `/admin/catches`。この権限はメール本文やユーザーの自己申告で付与しない。

Supabase標準メール配信はプロジェクトのメンバー以外への配信が制限されるため、GitHubとSupabase管理画面を連携しただけでは一般利用者へメールを送れない。Google / Apple認証は未導入。

公式情報：
- https://supabase.com/docs/guides/auth/auth-smtp
- https://supabase.com/docs/guides/auth/server-side/creating-a-client
- https://supabase.com/docs/guides/auth/auth-email-passwordless

## 運営手順

`/admin/catches` で写真・魚種・個人情報・無断転載・広告・現地ルールを確認し「確認して公開」。問題がある場合は非公開または本文・写真の削除。通報も同じ画面に表示し、対応済みにする。

保留・非公開写真を無期限に残さない。30日を目安に未処理行をSupabaseで確認して、管理画面またはStorageと行の両方を対象に削除する。初期管理画面は最新ではなく古い確認待ちから30件ずつ処理し、処理後の再読込で次の投稿を確認する。本人は `/catches` から他の端末でも投稿・削除できる。

レート制限は新規投稿1時間5回／利用者、15回／接続元。ログインメールは1時間3回／接続元、通報は1時間10回／利用者。DB側の原子的カウンターで複数サーバー間でも共有する。IPを直接保存しない。

## 今後の集計

承認済み・削除されていない投稿に絞り、`caught_on`、`fish_slug`、`method_slug`、`spot_slug` を集計する。対応インデックスを追加済み。直近7／30日のspot ID集合を既存MAPフィルターへ渡せば「最近この魚の投稿がある場所」へ拡張できる。投稿数と釣果量を区別し、少数の投稿で「今釣れている」と断定しない。

## 検証方法

- `node --test tests/*.test.cjs`：入力・写真・権限・未承認の非公開・所有者削除・通報・回数制限・従来コンテンツの回帰。
- `tests/browser/catch-community.cjs`：ローカルだけにSupabase相当の認証・REST・Storageを立て、実SDKのPKCE callbackとcookieを通し、投稿→写真保存→再読込→審査→MAP→通報→本人削除をブラウザ操作する。DBは一時ファイルに保存。検証データは本番へ送らない。
- このローカルE2Eは実際のSupabaseのメール配送テストを代替しない。SMTP設定後の実メール・本番写真付き投稿の確認が必要。

### 2026-09-18 検証結果

- TypeScript / lint / build成功、170件の自動テスト成功。
- ローカルE2Eで公式SDKのPKCE往復、HttpOnlyセッション、写真2枚保存、本人のみ確認待ち表示、リロード保持、管理者承認、匿名での閲覧、MAPの釣果2件表示、通報、別利用者の削除拒否、本人削除と写真削除を確認。
- 390×844と1440×900でMAPプレビューを確認。地図タイル読込、内部リンク、横方向のはみ出しなし。画面上のエラーなし。
- 本番DBのマイグレーションと認証戻り先設定は適用済み。本番で架空の釣果を公開していない。
- SMTP未設定のため、実メール配信と本番認証後の投稿は未検証。上記E2Eはローカルの検証用Auth/DB/Storageを使用したもの。
