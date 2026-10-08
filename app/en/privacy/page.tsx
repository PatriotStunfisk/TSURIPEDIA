import type {Metadata} from 'next';
import PrivacyContent from '@/components/PrivacyContent';
export const metadata:Metadata={title:'Privacy policy',description:'How UOLINK handles advertising, cookies, analytics and catch reports.',alternates:{canonical:'/en/privacy',languages:{ja:'/privacy',en:'/en/privacy','x-default':'/privacy'}}};
export default function Page(){return <PrivacyContent locale="en"/>}
