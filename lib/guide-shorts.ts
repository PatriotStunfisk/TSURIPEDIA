import {getGuide} from './all-guides';
import {getFishProfile} from './fish-registry';
import {getFishImage} from './fish-images';
import {siteUrl} from './site-url';
import {motionShortEdits} from './guide-shorts-motion';

/** Short-form edits reference the GUIDE; fish, article and image data stay in their registries. */
export const shortEdits = [
 {slug:'aji-sabiki-depth',hook:'アジがいるのに\nサビキで釣れない？',tips:['撒き餌と針を\n同じ深さへ','反応がなければ\n約1mずつ上げる','釣れた深さを覚え\n同じ棚を繰り返す'],anchors:['撒き餌と仕掛けを同じ棚へ','1m','群れが入ったら同じ深さを繰り返す']},
 {slug:'eging-shakuri-count',hook:'エギ、ずっと\nしゃくっていない？',tips:['まずは小さく\n2〜3回誘う','しゃくった後は\n静かに沈める','糸の停止・横走り\nたるみを見る'],anchors:['2〜3回','しゃくりの後は静かに沈める','横走り']},
 {slug:'tairaba-bottom-contact',hook:'タイラバの色より\n先に見ること',tips:['糸の出が止まる\n着底の一瞬に集中','底に置かず\nすぐ一定速度で巻く','最初のコツコツで\n巻きを止めない'],anchors:['糸の出が止まったら','一定速度','最初のコツコツで止めずに巻く']},
 {slug:'kisu-retrieve-speed',hook:'キスが釣れたら\n距離を覚える',tips:['砂地をゆっくり\n短く引いて止める','餌を長く垂らさず\n針先を出す','アタリの出た\n距離と角度を再現'],anchors:['砂地','針先を出し','距離と角度を再現']},
 {slug:'shore-jigging-jig-weight',hook:'ジグを重くする\nその前に',tips:['まず竿の\n適合重量を確認','底だけでなく\n中層・表層も探る','沈める時間を変え\n泳層を比べる'],anchors:['竿の適合重量','中層・表層','沈める時間']},
 {slug:'kasago-ana-rig',hook:'カサゴ狙いで\n根掛かりを減らす',tips:['安定した足場から\n静かに真下へ','着底後は少し浮かせ\n底へ寝かせない','魚が掛かったら\n最初に底から離す'],anchors:['安定した足場','少し底を切る','掛かった最初に底から離す']},
 {slug:'aji-sabiki-hook-size',hook:'サビキ針の号数\nだけで選ばない',tips:['豆アジは\n小さめの針から','同じ号数でも\nメーカーで差がある','魚の口に合わせる\n船は指定仕掛けを優先'],anchors:['豆アジは小さめ','メーカー','船宿指定']},
 {slug:'tairaba-leader',hook:'タイラバの\nリーダー選び',tips:['2〜4号は目安\n場所と魚で選ぶ','根が荒い場所は\n擦れへの余裕も考える','太さだけでなく\n傷と結束を確認'],anchors:['2〜4号','根が荒い','結束と傷の確認']},
 {slug:'eging-leader',hook:'エギングの糸\n細ければいい？',tips:['1.75〜2.5号を\n選ぶ目安にする','岩礁や藻場では\n擦れを考える','細いリーダーほど\n傷への注意が必要'],anchors:['1.75〜2.5号','岩礁・藻場','傷へ注意']},
 {slug:'fishing-cooler-plan',hook:'魚が釣れてから\n氷を探さない',tips:['出発前に\n帰宅までの氷を準備','魚と飲食物は\n袋や容器で分ける','蓋の開閉を減らし\n途中でも冷えを確認'],anchors:['出発前','袋や容器','蓋の開閉を減らす']},
 {slug:'first-charter-boat-reservation',hook:'初めての釣り船\n予約で聞く3つ',tips:['初心者であること\n貸竿の希望を伝える','集合時刻と\n出船時刻を分ける','指定仕掛けと\n中止連絡の方法を聞く'],anchors:['初心者であること','集合時刻と出船時刻','指定仕掛けと中止連絡']},
 {slug:'tachiuo-tenya-40-vs-50',hook:'テンヤ40号と50号\n勝手に替えていい？',tips:['10号差は\n約37.5gの違い','沈む速さと\nラインの角度が変わる','重さを替える前に\n船長へ確認する'],anchors:['37.5g','ライン角度','船長へ確認']},
] as const;
export type ShortPlatform='youtube'|'tiktok';
export function shortUrl(slug:string,platform:ShortPlatform,id:string){
 const url=new URL(`/guide/${slug}`,siteUrl);
 url.searchParams.set('utm_source',platform);url.searchParams.set('utm_medium','organic_video');
 url.searchParams.set('utm_campaign','guide-shorts');url.searchParams.set('utm_content',id);
 return url.toString();
}
export function getShortPlans(){const cards=shortEdits.map(edit=>{
 const guide=getGuide(edit.slug);if(!guide)throw new Error(`Unknown GUIDE: ${edit.slug}`);
 const source=JSON.stringify(guide);for(const anchor of edit.anchors)if(!source.includes(anchor))throw new Error(`GUIDE changed; recheck ${edit.slug}: ${anchor}`);
 const fishSlug=guide.related.find(l=>l.href.startsWith('/fish/'))?.href.split('/')[2];
 const fish=fishSlug?getFishProfile(fishSlug):undefined;
 const image=(fish?getFishImage(fish):undefined)??'/social/tackle-illustration.svg';
 const id=`${edit.slug}--tips-v1`;
 const scenes=[{label:'釣りの疑問',text:edit.hook,seconds:4},...edit.tips.map((text,i)=>({label:`POINT ${i+1}`,text,seconds:7})),{label:'続きはUOLINK',text:'詳しい解説は\nウオリンクで検索',seconds:5}];
 return {id,renderStyle:'cards-v1',guideSlug:edit.slug,guideTitle:guide.title,guideUrl:new URL(`/guide/${guide.slug}`,siteUrl).toString(),image,sourceAnchors:edit.anchors,scenes,duration:scenes.reduce((n,s)=>n+s.seconds,0),
  platforms:Object.fromEntries((['youtube','tiktok'] as const).map(platform=>[platform,{title:edit.hook.replace(/\n/g,''),url:shortUrl(guide.slug,platform,id),caption:`${edit.hook.replace(/\n/g,'')}\n${edit.tips.map((tip,i)=>`${i+1}. ${tip.replace(/\n/g,'')}`).join('\n')}\n\n詳しい手順：UOLINK「${guide.query}」で検索\n${shortUrl(guide.slug,platform,id)}\n#釣り #釣り初心者 #UOLINK`,status:'draft'}]))};
 });
 const motion=motionShortEdits.map(edit=>{
  const base=cards.find(p=>p.guideSlug===edit.slug)!;
  const id=`${edit.slug}--motion-v2`;
  const scenes=[{label:'3つで見直す',text:edit.hook,caption:edit.promise,seconds:2,phase:'hook',item:0},
   ...edit.items.flatMap((item,i)=>[{label:`NG ${i+1} / 3`,text:item.ng,caption:item.ngCaption,seconds:3,phase:'ng',item:i},{label:`こう直す ${i+1} / 3`,text:item.fix,caption:item.fixCaption,seconds:3,phase:'fix',item:i}]),
   {label:'次の釣行で試す',text:edit.recap,caption:'3つを覚えて、現場で見直す',seconds:3,phase:'recap',item:2},
   {label:'UOLINK',text:'詳しい手順は\nウオリンクで検索',caption:'仕掛け・釣り場・道具までつながる',seconds:2,phase:'cta',item:2}];
  return {...base,id,renderStyle:'motion-v2',topic:edit.topic,music:{id:'uolink-pulse-120-v1',bpm:120,origin:'locally-synthesized-original'},scenes,duration:scenes.reduce((n,s)=>n+s.seconds,0),
   platforms:Object.fromEntries((['youtube','tiktok'] as const).map(platform=>[platform,{title:edit.hook.replace(/\n/g,''),url:shortUrl(edit.slug,platform,id),caption:`${edit.hook.replace(/\n/g,'')}\n${edit.items.map((item,i)=>`${i+1}. ${item.ng.replace(/\n/g,'')} → ${item.fix.replace(/\n/g,'')}`).join('\n')}\n\n詳しい手順はウオリンクで検索\n${shortUrl(edit.slug,platform,id)}\n#釣り #釣り初心者 #UOLINK`,status:'draft'}]))};
 });
 return [...motion,...cards];
}
