import QuestPlay from '@/components/quest/QuestPlay';
export const metadata={title:'釣りに行く｜UOLINK QUEST',description:'釣り場・仕掛け・アタリ・ファイトを楽しむ釣りゲーム。',alternates:{canonical:'/quest/play'}};
export default async function Page({searchParams}:{searchParams:Promise<{fish?:string;method?:string}>}){const query=await searchParams;return <QuestPlay key={`${query.fish??''}:${query.method??''}`} initialFish={query.fish} initialMethod={query.method}/>}
