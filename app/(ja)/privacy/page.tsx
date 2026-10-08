import type {Metadata} from 'next';
import PrivacyContent from '@/components/PrivacyContent';
export const metadata:Metadata={title:'プライバシーポリシー',description:'UOLINKの広告、Cookie、アクセス解析、釣果投稿の情報の取り扱い。',alternates:{canonical:'/privacy',languages:{ja:'/privacy',en:'/en/privacy','x-default':'/privacy'}}};
export default function Page(){return <PrivacyContent locale="ja"/>}
