import {pageSharing} from './page-sharing';
export function mapSearchMetadata(query:Record<string,string|string[]|undefined>){
 const filtered=Object.entries(query).some(([key,value])=>['q','prefecture','type','near','shops','favorites','fish','method','recent'].includes(key)&&!!value&&value!=='0'&&value!=='all');
 return {...pageSharing('/spots',filtered?'条件を指定した釣り場マップ':'全国の釣り場マップ・船宿MAP','全国の釣り場と船宿を地域・魚・釣法・施設タイプから検索。公式案内と最近の釣果を確認して釣行を計画。'),...(filtered?{robots:{index:false,follow:true,googleBot:{index:false,follow:true}}}:{})};
}
