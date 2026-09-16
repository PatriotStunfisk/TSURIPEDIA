import type {GuideArticle} from './guide-articles';
import {fishSpecies} from './fish-species';
const dangerous=fishSpecies.filter(f=>f.hazard);
export const safetyGuides:GuideArticle[]=[{
 slug:'dangerous-fish-first-check',title:'釣れた魚を触る前に：危険魚の見分け方・毒棘・食用の判断',query:'釣れた魚 毒 危険魚 見分け方',category:'安全・危険魚',
 summary:'フグ、アイゴ、ゴンズイ、ハオコゼ、オニオコゼ、ミノカサゴ、エイ。初心者が取り違えやすい魚と、触る前に止まるべきポイントを整理します。',
 answer:'分からない魚は素手で触らず、食べない。毒棘で危険な魚と、食べると危険な魚は別です。フグは自己調理しません。死んだ魚の棘や歯にも注意してください。',verifiedAt:'2026-09-16',
 sections:[{heading:'触る前に確認する3つのこと',body:'魚を持ち上げて裏返す前に、距離を保って観察します。図鑑の画像や名前の一致だけで安全とは判断できません。',points:['鋭い棘・歯・長い尾がないか','魚の名前を確実に判断できるか','子どもや隣の人が近づいていないか']},
 {heading:'魚ごとの危険部位と食用方針',body:'代表例です。ここに載っていない魚が安全という意味ではありません。',table:{caption:'刺す毒・食べる毒を混同しない',headers:['魚','危険な部分','食用と料理の扱い'],rows:dangerous.map(f=>[f.base.name,f.hazard!.parts.map(p=>p.name).join('・'),f.hazard!.foodAdvice])}},
 {heading:'釣れてしまったときの手順',body:'慣れていない人が針外しを急ぐことが事故につながります。魚を人へ向けず、助けを呼べる状況を作ってください。',steps:[{title:'手を止めて距離を取る',body:'魚や針を手で押さえない。子どもを離し、エイの場合は振られる尾の範囲に入らないようにします。'},{title:'管理者・船長へ相談',body:'長い道具があっても無理に処理を進めません。安全に対応できる人へ頼み、扱い方の指示を受けます。'},{title:'放置しない',body:'陸上に放置すると他の人が踏む危険があります。釣り場の案内に沿って対応し、持ち帰り魚へ混ぜません。'}]},
 {heading:'刺された・食べた後に異変がある場合',body:'釣りを中止し、安全な場所へ移って周囲へ助けを求めてください。息苦しさ、意識の異常、強い全身症状がある場合は119番。フグを食べた後のしびれなども待たずに医療機関へ連絡します。刺傷は棘が残る場合もあり、見た目が小さくても受診を相談してください。',warning:'無理に傷を切ったり、口で毒を吸い出したりしないでください。日本中毒情報センターは魚刺傷に対し45℃以下の湯を案内していますが、熱傷を避け、応急対応だけで受診を遅らせないでください。'},
 {heading:'食用になる魚でも自己処理できるとは限らない',body:'アイゴには食文化がありますが、毒棘のある丸魚を初心者が処理する案内は行いません。料理ページは専門家による処理済み切り身が前提です。フグには料理ページを設けず、素人調理を避ける案内に統一しています。',points:['フグは釣っても自己調理しない','アイゴの料理は安全な処理済み切り身から','名前の不確かな魚を調理しない']}
 ],
 related:dangerous.map(f=>({label:f.base.name+'の見分け方と警告',href:'/fish/'+f.base.slug})),
 sources:[{label:'厚生労働省：フグの素人調理は危険',url:'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html'},{label:'日本中毒情報センター：魚刺傷について',url:'https://www.j-poison-ic.jp/report/160831/'},{label:'シマノ：危険な魚',url:'https://fish.shimano.com/ja-JP/content/beginners/fishing/poison/index.html'}]
}];
