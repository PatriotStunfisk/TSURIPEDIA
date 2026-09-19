# 釣果投稿のOAuth認証

## アプリ実装

Supabase AuthのGoogle / Apple OAuth（PKCE）を使用。メール・パスワード登録やSMTPは不要。既存ユーザーID、投稿、写真、ローカルお気に入りは維持する。

- `/login`：Googleで続ける / Appleで続ける。Supabase `/auth/v1/settings` の有効プロバイダーをサーバーで確認し、未設定の方式は準備中。キーはブラウザへ渡さない。
- `POST /api/catch-auth`：同一Origin・プロバイダー許可リスト・回数制限を確認してOAuthを開始。戻り先をHttpOnly cookieへ保持。
- `/auth/callback`：PKCEコードを交換。安全なサイト内の元の釣り場・投稿フォームへ戻す。キャンセル・失敗時も戻り先を保ち、日本語で再試行を案内。
- 認証情報はHttpOnly / SameSite=Lax / 本番Secure cookie。サーバーの `getUser()` で確認し、クライアント申告のユーザーIDを信用しない。
- 表示名・アイコンはSupabase user_metadataから取得可能な項目のみ任意で扱う。Appleから名前が取得できなくても追加入力を要求しない。権限判断にはuser_metadataを使用しない。
- セッション確認・ログアウト・自分の釣果・本人削除は既存APIを再利用。

## Google側

1. UOLINK用GoogleアカウントでGoogle Cloudへログインし、プロジェクトを選択／作成する。
2. Google Auth Platformでアプリ名UOLINK、サポートメール、対象「外部」、連絡先を設定。規約同意は所有者が行う。
3. スコープはopenid、email、profileのみ。Gmailのメール閲覧権限は要求しない。
4. OAuthクライアントを「ウェブ アプリケーション」で作成。
5. JavaScript生成元：`https://uolink.jp`
6. 承認済みリダイレクトURI：`https://tiiljxuyyqsnraelgpkb.supabase.co/auth/v1/callback`
7. Client IDとClient SecretをSupabase > Authentication > Sign In / Providers > Googleに保存し有効化。秘密情報はリポジトリに入れない。認証情報作成・入力は所有者が行う。
8. テストモードならテストユーザーで確認。一般公開には対象を公開へ切り替え、Googleが求める同意画面・ドメイン等の確認を完了する。

## Apple側

Apple Developer設定が必要。Team ID、Sign in with Apple対応App ID、Web用Services ID、Key ID、署名鍵(.p8)から生成したClient Secretを用意する。

- Webドメイン：`tiiljxuyyqsnraelgpkb.supabase.co`
- Return URL：`https://tiiljxuyyqsnraelgpkb.supabase.co/auth/v1/callback`
- Supabase Apple providerのClient IDsではWeb Services IDを先頭にする。
- Client Secretは期限切れ前に更新する（最大6か月）。署名鍵とSecretは安全な管理領域に保管する。
- 設定完了前はボタンを準備中にする。Apple Developerの契約・課金は勝手に実行しない。

## Supabase共通設定

- Site URL：`https://uolink.jp`
- Redirect allow list：`https://uolink.jp/auth/callback`。移行中は既存の `https://uolink.vercel.app/auth/callback` も維持。
- Google / AppleからSupabaseへ戻るURLと、SupabaseからUOLINKへ戻るURLは異なる。
- SMTP設定と `CATCH_EMAIL_LOGIN_READY` はアプリの必須条件ではなく、現在のOAuth実装では使用しない。
- 必要な既存環境変数：`SUPABASE_URL`（または `NEXT_PUBLIC_SUPABASE_URL`）、`SUPABASE_SERVICE_ROLE_KEY`、`CATCH_REPORTS_ENABLED`。認証用キーは `SUPABASE_ANON_KEY` を優先、既存のサーバー専用キーは互換フォールバック。
- Google / AppleのClient SecretはSupabase Authの管理画面へ保存。Vercel用の重複したOAuth Secret環境変数は不要。

## データ保護

既存catch-reports.sql / catch-community.sqlのRLSと権限剥奪を維持。anon/authenticatedによるDB・Storageへの直接アクセスは許可せず、サーバーAPIが認証済みユーザーIDと所有者・管理者権限を確認する。service_roleはサーバー専用でRLSを迂回するため、API側所有者確認とクエリ条件も必須。公開閲覧は承認済み・写真保存完了・未削除のみ。本人の未承認投稿は本人だけに返す。

## 検証

ローカルのAuth/DB/Storage fixtureでGoogle・AppleのPKCE往復、キャンセル後の戻り先、SMTP無効状態、リロード保持、写真付き投稿、匿名閲覧、他人の削除拒否、本人削除、ログアウトを確認する。これはGoogle/Apple実サービスの同意画面・認証テストの代替ではない。実サービスは外部設定後に別途確認する。

公式資料：
- https://supabase.com/docs/guides/auth/social-login/auth-google
- https://supabase.com/docs/guides/auth/social-login/auth-apple
