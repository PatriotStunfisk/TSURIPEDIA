import MethodExplorer from '@/components/MethodExplorer';
import {methodDetails} from '@/lib/method-registry';
export const metadata={title:'釣り方',description:'魚名・釣る場所・難易度から釣法を検索。海・船・淡水の仕掛け、タックル、手順を比較できます。',alternates:{canonical:'/methods'}};
export default function Page(){
 const items=Object.values(methodDetails).map(({slug,name,subtitle,target,places,difficulty,steps})=>({slug,name:slug==='tachiuo-tenya'?'タチウオテンヤ（船）':name,subtitle,target,places,difficulty,steps:steps.length}));
 return <div className="section pageTop"><div className="pageHero"><span>FISHING METHODS</span><h1>釣り方</h1><p>魚と釣る場所から、自分に合う釣り方を探す。仕掛け・道具・誘い方・取り込みまで、釣行前に確認できます。</p></div><MethodExplorer items={items}/></div>;
}
