import s from './TachiuoSchool.module.css';

export default function TachiuoSchool(){
  return <section className={s.wrap}>
    <div className={s.copy}><span>ECOLOGY VISUAL</span><h2>海中を泳ぐタチウオの群れ</h2><p>タチウオは夕暮れから夜にかけて活発に動き、ベイトを追ってタナを変えます。群れで同じ方向へ回遊する姿を見れば、釣れる時間帯やレンジのイメージもつかみやすくなります。</p></div>
    <figure className={s.photo}>
      <img src="/images/fish/tachiuo-school-v2.jpg?v=20260908-1" alt="海中を群れで泳ぐタチウオのイメージ"/>
      <figcaption><b>群れで回遊</b><span>夕方〜夜に活性が上がり、小魚を追って移動</span></figcaption>
    </figure>
  </section>
}
