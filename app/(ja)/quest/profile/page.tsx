import {RealCatchJournal} from '@/components/CatchReports';
import {catchOptions} from '@/lib/catches/options';
import QuestProfile from '@/components/quest/QuestProfile';
export const metadata={title:'マイ記録｜UOLINK QUEST',robots:{index:false,follow:true},alternates:{canonical:'/quest/profile'}};
export default function Page(){return <><QuestProfile/><RealCatchJournal options={catchOptions()}/></>}
