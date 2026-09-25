import type {FishingMapEntry} from './fishing-map-data';

export type SpotFieldGuide={
  choices?:{target:string;start:string;adjust:string}[];
  nextLinks?:{label:string;href:string}[];
  illustration?:import('./spot-illustration-types').SpotIllustration;
  sitePlan?:import('./spot-site-plan-types').SpotSitePlan;
  sources?:{label:string;url:string}[];
  reviewedAt?:string;
  questions?:{question:string;answer:string}[];
  features:string[];
  approach:string[];
  beforeYouGo:string[];
};
export type ShoreMethodPlan={
  slug:string;name:string;prepare:string;steps:string[];ifQuiet:string;
};
// General technique advice, not a claim about depth, facilities, or current catches at a place.
const shoreMethods:ShoreMethodPlan[]=[
 {slug:'surf-lure',name:'サーフルアー：手前の地形から探す',prepare:'ルアー、予備リーダー、プライヤー、救命具を準備。後方と着水点を確認し、遊泳者・サーファーがいる範囲では釣らない。',steps:['浜から波の寄せ方を見て、立ち込まずに足場を確保する。最初から遠投せず手前の変化も探る。','着底後は底をこすり続けず、少し浮かせて一定の速さで巻く。波に押される糸ふけを取りすぎず管理する。','反応がなければ距離・角度・巻く速さを一つずつ変える。移動時も高波の届く範囲へ近づかない。'],ifQuiet:'ルアーを増やす前に、底を取れているか、手前を飛ばしていないかを確認。濁り・漂流物・高波で釣りが成立しない日は中止する。'},
 {slug:'sabiki',name:'サビキ：群れのいる深さを探す',prepare:'竿より短い仕掛け、コマセ、バケツ、針外しを用意。足元に水深があり、船や係留索がない場所で始める。',steps:['まず仕掛けが底へ着くまでを確認し、底から少し上げた位置で止める。','小さくコマセを出して待つ。反応がなければ一度に大きく動かさず、仕掛け1本分ずつ棚を変える。','釣れた深さを覚えて同じ棚へ戻す。小魚が見えても食わない場合は針や仕掛けの大きさを見直す。'],ifQuiet:'コマセを増やし続けず、底・中層・表層の順に確認。周囲にも回遊が見られなければ時間帯を変える判断を。'},
 {slug:'choinage',name:'ちょい投げ：底の変化を小さく探る',prepare:'短い投げ仕掛けと餌を用意。投げる後方・着水点・船道を確認し、人や船へ向けて投げない。',steps:['最初は近くへ投入し、着底したら糸ふけだけを取る。','竿で少し引いて止め、餌を底で落ち着かせる。根掛かりが増える位置を覚え、そこへ繰り返し投入しない。','アタリがあれば急にあおらず、魚が餌をくわえる間を取り、竿を立てて巻く。'],ifQuiet:'回収した餌の有無を確認。餌を取られていれば小さく付け直し、残るなら投入方向や待つ長さを変える。'},
 {slug:'rockfish-lure',name:'根魚：壁際と底を分けて探る',prepare:'軽いジグヘッドなど、底を確認できる仕掛けから始める。係留索や漁具の周囲には投入しない。',steps:['壁から少し離して落とし、沈む途中の糸の変化も見る。','底へ着いたら放置せず、少し持ち上げて短く動かす。穴へ落とし続けるより引き出せる方向を優先。','反応がなければ数歩だけ移動。掛かった魚は根に潜らせないよう竿を立てて巻く。'],ifQuiet:'底だけでなく中層も確認。根掛かりが続くなら重さを下げるか場所を変え、仕掛けを残さない。'},
 {slug:'uki',name:'ウキ釣り：流れる向きと棚を合わせる',prepare:'回収できる範囲に釣り座を絞り、竿・仕掛け・取り込み道具を準備。まき餌の可否は地域と現地の規則を確認する。',steps:['ウキが流れる向きと速さを見て、船道や隣の釣り座へ入らない投入点を決める。','根掛かりしない棚から始め、餌が残るか取られるかを回収ごとに確認する。','糸ふけを出しすぎず、ウキの変化が続くところで竿を立てる。掛けた魚を上げる経路も先に確保。'],ifQuiet:'棚・餌・投入位置を同時に変えず一つずつ調整。流れが速すぎて仕掛けを管理できない場合は釣り座を変える。'},
 {slug:'eging',name:'エギング：着底と係留索を確認する',prepare:'エギ、リーダー、取り込み用の道具を用意。エギ禁止区画、係留索、底の障害物がある方向を避ける。',steps:['船のいない方向へ投入し、糸の出方を見て着底を確認する。長く底へ放置しない。','竿で短く動かした後は沈む時間を作る。糸が急に緩む・走るなどの変化を見逃さない。','手前まで追ってきた場合も足元へ寄せすぎず、取り込みやすい位置で無理なく掛ける。'],ifQuiet:'速く動かし続けず、沈める時間と投入方向を変える。根掛かりが多い場所は浅く探るか離れる。'},
];
export function getShoreMethodPlans(spot:FishingMapEntry):ShoreMethodPlan[]{
 if(spot.closed||spot.type!=='spot'||!['port','pier','beach'].includes(spot.primaryType??''))return [];
 const ids=new Set(spot.methodSlugs??[]);
 return shoreMethods.filter(m=>ids.has(m.slug)).slice(0,3);
}
export function getSpotDepartureChecks(spot:FishingMapEntry):string[]{
 if(spot.closed)return [];
 const checks=['出発前：風・波・雷と現地の利用条件を確認。釣り場名が同じでも、入れる区画と駐車場所は別に確認する。'];
 if(spot.type==='boat')return ['予約先に集合港・集合時間・指定仕掛け・レンタルの有無を確認する。','出船判断は船宿へ確認し、帰港後の魚を冷やす道具を用意する。'];
 if(spot.type==='area')return ['この地点は釣行計画エリア。実際に利用する施設・岸壁を決め、現地のルールとアクセスを個別に確認する。'];
 checks.push(spot.parking===undefined?'駐車場は未確認。路上や作業場へ停める計画にせず、利用可能な駐車場所を先に調べる。':spot.parking?'駐車場の利用時間と釣り場までの経路を確認。開門前・閉門後の出入りを前提にしない。':'駐車場なしの登録。公共交通や利用可能な別の駐車場所を確認し、路上駐車はしない。');
 checks.push(spot.toilet===undefined?'トイレは未確認。同行者と利用できる場所・帰る時間を事前に決める。':spot.toilet?'トイレの利用時間を確認。早朝や夜は施設が閉まっている場合がある。':'トイレなしの登録。最寄りの利用可能な施設と移動時間を確認する。');
 checks.push('到着後：掲示、足場、船・作業車両の動きを確認。立入制限や工事があれば掲載内容より現地の指示を優先する。');
 return checks;
}
