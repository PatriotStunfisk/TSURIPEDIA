import s from './TachiuoSchool.module.css';

export default function TachiuoSchool(){
  const fish=[
    {c:s.f1},{c:s.f2},{c:s.f3},{c:s.f4},{c:s.f5},{c:s.f6}
  ];
  return <section className={s.wrap}>
    <div className={s.copy}><span>ECOLOGY VISUAL</span><h2>海中を泳ぐタチウオの群れ</h2><p>タチウオは夕暮れから夜にかけて活発に動き、ベイトを追ってタナを変えます。群れで同じ方向へ動く姿をイメージできると、釣れる時間帯やレンジも理解しやすくなります。</p></div>
    <div className={s.sea} aria-label="海中を群れで泳ぐタチウオのイメージ">
      <div className={s.light}/><div className={s.haze}/>
      {fish.map((x,i)=><img key={i} className={x.c} src="/images/fish/tachiuo-real-v2.png" alt="" aria-hidden="true"/>)}
      <div className={s.caption}><b>群れで回遊</b><span>夕方〜夜に活性が上がり、小魚を追って移動</span></div>
    </div>
  </section>
}
