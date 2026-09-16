import type {Metadata} from 'next';
import {socialDrafts} from '@/lib/guide-social';
import SocialDraftQueue from '@/components/SocialDraftQueue';
export const metadata:Metadata={title:'X投稿下書き | UOLINK',robots:{index:false,follow:false}};
export default function Page(){return <section className="container" style={{paddingTop:40,paddingBottom:60}}><p>UOLINK · @uo_link</p><h1>GUIDEから届ける、釣りのヒント</h1><p>12件の公開用下書きです。1日3件の時間帯案を添えていますが、自動投稿・予約送信は行いません。このページは認証付き管理画面ではなく、公開情報だけを扱います。</p><p>原本を確認 → 投稿文をコピー → 画像を保存 → Xで画像と代替テキストを添付して投稿。投稿済みの重複を避け、最新の釣況・利用条件は原本と公式情報を確認してください。</p><p><a href="/social/queue.json" download>キューJSONを保存</a> · <a href="/social/queue.md" download>下書き一覧を保存</a></p><SocialDraftQueue drafts={socialDrafts}/></section>}
