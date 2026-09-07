import FishArt from './FishArt';
import s from './FishGallery.module.css';

type Props={slug:string;name:string;notes:[string,string,string,string]};

export default function FishGallery({slug,name,notes}:Props){
  return <section className={s.wrap}>
    <div className={s.head}><div><span>VISUAL GUIDE</span><h2>画像で見る {name}</h2></div><p>実写・高精細イラスト素材へ順次差し替えます。</p></div>
    <div className={s.grid}>
      <article className={`${s.panel} ${s.full}`}><div className={s.art}><FishArt slug={slug} label={`${name} 全身`}/></div><div><b>全身</b><p>{notes[0]}</p></div></article>
      <article className={s.panel}><div className={`${s.art} ${s.zoom}`}><FishArt slug={slug} label={`${name} 見分けポイント`}/></div><div><b>見分けポイント</b><p>{notes[1]}</p></div></article>
      <article className={s.panel}><div className={`${s.art} ${s.habitat}`}><div className={s.water}></div><FishArt slug={slug} label={`${name} 生息イメージ`}/></div><div><b>生息イメージ</b><p>{notes[2]}</p></div></article>
      <article className={s.panel}><div className={`${s.art} ${s.food}`}><div className={s.plate}>🍽️</div><FishArt slug={slug} label={`${name} 食味イメージ`}/></div><div><b>食べ方</b><p>{notes[3]}</p></div></article>
    </div>
  </section>
}
