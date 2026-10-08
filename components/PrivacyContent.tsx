import styles from './PrivacyContent.module.css';

export default function PrivacyContent({locale}:{locale:'ja'|'en'}){
 const en=locale==='en';
 return <article className={styles.page}>
  <h1>{en?'Privacy policy':'プライバシーポリシー'}</h1>
  <p className={styles.date}>{en?'Updated: October 8, 2026':'更新日：2026年10月8日'}</p>
  <p>{en?'UOLINK provides fishing information, maps and community catch reports. This page explains how information is used when you visit or contribute.':'UOLINKは魚・釣り方・釣り場の情報と釣果投稿を提供する。閲覧・投稿時の情報の取り扱いは以下のとおり。'}</p>
  <section><h2>{en?'Advertising and cookies':'広告・Cookieについて'}</h2>
   <p>{en?'UOLINK uses Google AdSense. When ads are served, Google and its partners may use cookies or similar technologies, device information and browsing activity to deliver and measure ads. Advertising cookies may enable ads based on visits to this and other websites.':'UOLINKはGoogle AdSenseを利用する。広告配信時、GoogleおよびそのパートナーはCookie等の技術、端末情報、閲覧情報を利用して広告の配信・効果測定を行う場合がある。広告Cookieは、当サイトや他サイトへのアクセスに基づく広告の表示に使われる。'}</p>
   <p>{en?'Where consent is required, Google’s consent message provides choices to accept, reject or manage purposes and partners. Refusing optional advertising consent does not prevent reading UOLINK. You can also adjust browser cookies and Google ad personalization settings.':'同意が必要な地域ではGoogleの同意メッセージから、同意・拒否・目的やパートナーの選択ができる。任意の広告利用に同意しなくても記事を閲覧できる。ブラウザのCookie設定やGoogleの広告設定からも利用を調整できる。'}</p>
   <p><a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer">{en?'How Google uses information':'Googleによる情報の利用'}</a> · <a href="https://myadcenter.google.com/" rel="noopener noreferrer">{en?'Google ad settings':'Googleの広告設定'}</a> · <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer">{en?'Other advertising choices':'第三者広告の選択'}</a></p>
  </section>
  <section><h2>{en?'Affiliate links':'アフィリエイトリンク'}</h2>
   <p>{en?'UOLINK participates in the Amazon Associates Program and may earn from qualifying purchases made through product links. Product links lead to external stores, whose privacy policies apply to purchases.':'UOLINKはAmazonアソシエイト・プログラムの参加者として、適格販売により収入を得る。商品リンク先での購入や情報の取り扱いには、各販売サイトの規約・プライバシーポリシーが適用される。'}</p>
  </section>
  <section><h2>{en?'Analytics and site operation':'アクセス解析とサイト運営'}</h2>
   <p>{en?'Vercel hosts this website and Vercel Web Analytics helps us understand page use. Requests and technical information may be processed to operate the service, diagnose failures and prevent abuse.':'サイトの配信にVercel、利用状況の把握にVercel Web Analyticsを利用する。サービスの提供、障害調査、不正利用対策のため、アクセスに伴う通信情報や技術情報が処理される場合がある。'}</p>
   <p><a href="https://vercel.com/docs/analytics/privacy-policy">{en?'Vercel Web Analytics privacy information':'Vercel Web Analyticsのプライバシー情報'}</a></p>
  </section>
  <section><h2>{en?'Accounts and catch reports':'アカウント・釣果投稿'}</h2>
   <p>{en?'Supabase provides authentication, database and photo storage. Account identifiers and information provided by your login provider are used to connect reports to their owner. Posted catch details, comments, display names and photos may be public. Do not include personal contact information or photos you do not have permission to share. Reports are associated with UOLINK spots rather than publishing your precise GPS position.':'認証・データベース・写真保存にSupabaseを利用する。アカウント識別情報やログイン元から提供される情報は、投稿の所有者確認などに利用する。投稿した釣果・コメント・表示名・写真は公開される場合がある。個人の連絡先や公開許可のない写真は投稿しない。釣果は既存の釣り場に紐付け、投稿者の正確なGPS位置を公開する方式ではない。'}</p>
   <p>{en?'You can manage your own reports through the available account or deletion controls. For other deletion, correction or privacy requests, contact us below. Data is retained as needed for the service and abuse prevention.':'自分の投稿はアカウント画面や投稿の削除操作から管理できる。その他の削除・訂正・個人情報に関する要望は下記へ連絡してほしい。情報はサービスの提供や不正利用対策に必要な期間保持する。'}</p>
  </section>
  <section><h2>{en?'Location and saved preferences':'現在地・保存した設定'}</h2>
   <p>{en?'The nearby search uses location only after browser permission. Favorites and map preferences may be stored on your device. Clearing browser storage removes these local settings; disabling cookies can affect login.':'近くの釣り場を探す機能では、ブラウザで許可した場合に現在地を利用する。お気に入りやMAP設定は端末内に保存される場合がある。ブラウザの保存データを削除すると端末内の設定も消去される。Cookieを無効にするとログインに影響する場合がある。'}</p>
  </section>
  <section><h2>{en?'Contact':'お問い合わせ'}</h2>
   <p>{en?'UOLINK contact: ':'UOLINK窓口：'}<a href="mailto:uolink.jp@gmail.com">uolink.jp@gmail.com</a></p>
   <p>{en?'Information sent by email is used to respond to your request. This policy may be updated when the service or data handling changes.':'メールで受け取った情報は問い合わせへの対応に利用する。サービスや情報の取り扱いの変更に合わせて、このページを更新する。'}</p>
  </section>
 </article>;
}
