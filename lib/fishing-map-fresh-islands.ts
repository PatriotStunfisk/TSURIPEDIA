import {islandFishingEntries} from './fishing-map-island-fishing';
import {northIslandCoastEntries} from './fishing-map-north-island-coasts';
import {heraPondEntries} from './fishing-map-hera-ponds';
import {troutPondEntries} from './fishing-map-trout-ponds';
import type {FishingMapEntry} from './fishing-map-data';

// Each marker is a fishing-area reference, not the facility's postal address.
export const freshIslandEntries:FishingMapEntry[]=[
 ...islandFishingEntries,
 ...northIslandCoastEntries,
 ...heraPondEntries,
 ...troutPondEntries,
 {
  slug:'sakai-umizuri-terrace',type:'spot',name:'海とのふれあい広場 海釣りテラス',area:'堺市・堺浜',prefecture:'大阪府',primaryType:'sea-park',terrain:'pier',lat:34.604018,lng:135.426986,
  officialUrl:'https://www.city.sakai.lg.jp/shisei/toshi/rinkai/umifureai/umizuriterasu.html',verifiedAt:'2026-09-19',
  fish:['マアジ','マサバ','マイワシ'],methods:['サビキ釣り'],methodSlugs:['sabiki'],season:'回遊する小魚は年・季節により変動',beginner:true,kids:true,parking:true,toilet:true,
  note:'堺浜の広場北側にある、柵付きの指定釣り護岸。家族で足元のサビキを楽しむ候補です。広場の海沿い全体が釣り場ではなく、海釣りテラスの範囲だけを利用します。',googleQuery:'堺市 海とのふれあい広場 海釣りテラス',
  access:'堺市堺区匠町の広場へ。第2駐車場は閉鎖案内があるため第1駐車場を利用し、園内を徒歩でテラスへ向かう。',field:'広場北側の指定された海釣りテラス。柵の内側から釣りをする。',bestFor:['柵のある場所でのサビキ','家族の釣り入門'],timing:'開場時間内に利用。夏の延長営業や天候による閉場は市の案内を確認。',
  tips:['短いサビキ仕掛けで、柵の内側から安全に仕掛けを扱う。','魚の回遊が見えない時は足元で棚を変え、投げて遠くを探らない。'],
  caution:['投げ釣り・まき餌・危険な釣りは禁止。サビキは市の禁止事項の除外対象。','竿は1人2本以内。小学生以下は保護者同伴で、柵へ登らない。','テラス外での釣り、ペット同伴、喫煙は不可。閉門までに駐車場へ戻る。'],
  positionNote:'市の園内図と国土地理院地図を照合し、公園中央ではなく北側の指定護岸へ配置。',
  sources:[{label:'堺市：海釣りテラス利用案内',url:'https://www.city.sakai.lg.jp/shisei/toshi/rinkai/umifureai/umizuriterasu.html'},{label:'堺市：広場の駐車場・開場案内',url:'https://www.city.sakai.lg.jp/shisei/toshi/rinkai/umifureai/'},{label:'国土地理院：北側護岸の地形',url:'https://maps.gsi.go.jp/#18/34.604018/135.426986/&base=std&ls=std&disp=1'}]
 },
 {
  slug:'ibaraki-shinike',type:'spot',name:'茨木新池',area:'茨木市・豊川',prefecture:'大阪府',primaryType:'fresh',terrain:'pond',lat:34.834468,lng:135.532414,verifiedAt:'2026-09-19',
  fish:['ヘラブナ'],methods:['ヘラブナの底釣り'],methodSlugs:['herabuna-bottom'],season:'通年。営業日・大会利用は釣行前に確認',beginner:true,kids:false,toilet:true,
  note:'豊川のヘラブナ管理池。桟橋から練り餌とヘラウキで釣る場所です。まず釣り座の水深を測り、底釣りなら毎回同じ投入点でウキのなじみを比べます。',googleQuery:'大阪府 茨木新池',
  access:'茨木市豊川4丁目。初回は受付位置と利用できる桟橋を確認して入る。',field:'複数の桟橋を備えたヘラブナ管理池。竿の長さと水深を釣り座に合わせる。',bestFor:['ヘラブナ釣り','練り餌とウキの調整練習'],timing:'営業時間内。例会・大会の日は利用できる釣り座を確認する。',
  tips:['初心者は受付で底釣りに合う釣り座・竿長を相談する。','餌の硬さと大きさを一度に変えず、なじむ目盛りを揃える。'],caution:['生餌ではなく施設で認められたヘラ餌を使用する。','料金・竿や棚の規定・持ち帰り可否は現地の最新案内を優先。','玉網を用意し、桟橋の縁へ立って魚を抜き上げない。'],
  positionNote:'地図の茨木新池と池の位置を照合した代表点。桟橋の利用範囲は受付で確認。',sources:[{label:'マルキユー へら鮒天国：茨木新池',url:'https://herabunatengoku.com/spot/spot_534/'},{label:'魚速報：所在地・釣法・設備の参考',url:'https://uosoku.com/home/kinki/oosaka/ibrakishinike/'},{label:'国土地理院：池の位置',url:'https://maps.gsi.go.jp/#18/34.834468/135.532414/&base=std&ls=std&disp=1'}]
 }
];
