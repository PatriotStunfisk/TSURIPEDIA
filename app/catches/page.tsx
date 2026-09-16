import Link from 'next/link';import {RealCatchJournal} from '@/components/CatchReports';import {catchOptions} from '@/lib/catches/options';
export const metadata={title:'実釣の記録',robots:{index:false,follow:true},alternates:{canonical:'/catches'}};
export default function Page(){return <div className="section pageTop"><h1>自分の釣果を残そう</h1><RealCatchJournal options={catchOptions()}/><Link href="/quest/profile">QUESTのマイ記録へ →</Link></div>}
