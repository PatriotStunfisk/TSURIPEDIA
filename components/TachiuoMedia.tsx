'use client';
import {useState} from 'react';
import FishViewer from './FishViewer';
import FishVisual from './FishVisual';
import LegacyCookingCardBridge from './LegacyCookingCardBridge';
import s from './TachiuoMedia.module.css';

const oldCookingImages=[
  '/images/fish/tachiuo-sashimi.jpg',
  '/images/fish/tachiuo-shioyaki.jpg',
  '/images/fish/tachiuo-aburi.jpg',
  '/images/fish/tachiuo-tempura.jpg'
];

const cookingDishes=[
  {name:'刺身',src:'/images/fish/tachiuo-sashimi.png',href:'/cooking/tachiuo/sashimi',desc:'銀皮を残して、上品な脂とやわらかな身を味わう。'},
  {name:'塩焼き',src:'/images/fish/tachiuo-shioyaki.png',href:'/cooking/tachiuo/shioyaki',desc:'皮を香ばしく焼き、ふっくらした白身を楽しむ。'},
  {name:'天ぷら',src:'/images/fish/tachiuo-tempura.png',href:'/cooking/tachiuo/tempura',desc:'軽い衣とふわっとした身質の相性が良い。'},
  {name:'煮付け',src:'/images/fish/tachiuo-nitsuke.png',href:'/cooking/tachiuo/nitsuke',desc:'しょうがを効かせた甘辛い味付けでご飯にも合う。'}
];

export default function TachiuoMedia(){
  const [mode,setMode]=useState<'2d'|'3d'>('2d');
  return <>
    <LegacyCookingCardBridge oldImageSrcs={oldCookingImages} dishes={cookingDishes}/>
    <div className={s.stage}>
      <div className={s.tabs}>
        <button className={mode==='2d'?s.active:''} onClick={()=>setMode('2d')}>▧ 2D画像</button>
        <button className={mode==='3d'?s.active:''} onClick={()=>setMode('3d')}>◈ 3D表示</button>
        <span>◎ AR予定</span>
      </div>
      <div className={s.media}>
        {mode==='2d'?<FishVisual slug="tachiuo" name="タチウオ" className={s.realFish}/>:<FishViewer/>}
      </div>
      <div className={s.note}>{mode==='2d'?'高精細2D図鑑画像':'ドラッグして360°観察'}</div>
    </div>
  </>
}
