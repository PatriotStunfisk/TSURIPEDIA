import Link from 'next/link';
import {cookingFish} from '@/lib/cooking-data';

export const metadata={title:'魚料理・捌き方｜UOLINK',description:'釣った魚の捌き方と定番料理を魚種ごとに紹介。魚図鑑からそのまま料理までつながるUOLINKの料理ガイド。'};

export default function CookingPage(){return <div className="section pageTop"><div className="pageHero"><span>UOLINK KITCHEN</span><h1>魚料理・捌き方</h1><p>釣った魚を、持ち帰ったその先まで。魚種ごとに「捌き方」と「料理」をまとめる。</p></div><div style={{display:'grid',gap:28,marginTop:30}}>{cookingFish.map(f=><section key={f.slug} className="cookingFishSection" style={{padding:26,borderRadius:22,background:'#0d2d40',color:'#fff'}}><span style={{fontSize:11,fontWeight:900,letterSpacing:1.5,color:'#69c9f5'}}>FISH KITCHEN</span><h2 style={{fontSize:30,margin:'5px 0 18px'}}>{f.name}</h2><div className="cookingFishLayout"><Link href={`/cooking/${f.slug}`} className="cookingPrepCard"><b style={{fontSize:20}}>🔪 捌き方</b><p style={{lineHeight:1.7,opacity:.82}}>下処理から三枚おろしまで確認する →</p></Link><div className="cookingRecipeGrid">{f.recipes.map(r=><Link key={r.slug} href={`/cooking/${f.slug}/${r.slug}`} className="cookingRecipeCard">{r.image&&<img src={r.image} alt={`${f.name}の${r.name}`}/>}<div><b>{r.name}</b><small>レシピを見る →</small></div></Link>)}</div></div></section>)}</div><style>{`
.cookingFishLayout{display:grid;grid-template-columns:minmax(220px,.7fr) 1.3fr;gap:20px}
.cookingPrepCard{display:block;padding:20px;border-radius:16px;background:#173f55;color:#fff}
.cookingRecipeGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.cookingRecipeCard{overflow:hidden;border-radius:16px;background:#fff;color:#173449}
.cookingRecipeCard img{display:block;width:100%;height:120px;object-fit:cover}
.cookingRecipeCard>div{padding:13px}
.cookingRecipeCard small{display:block;margin-top:5px;color:#6b7b84}
@media(max-width:700px){
  .cookingFishSection{padding:20px!important}
  .cookingFishLayout{grid-template-columns:1fr;gap:14px}
  .cookingPrepCard{width:100%;padding:18px}
  .cookingRecipeGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .cookingRecipeCard img{height:112px}
  .cookingRecipeCard>div{padding:11px}
}
@media(max-width:360px){.cookingRecipeGrid{grid-template-columns:1fr}}
`}</style></div>}
