import type {Fish} from '@/lib/data';

// Preserve existing editorial choices and legacy method anchors.
export const primaryMethod:Record<string,string>={tachiuo:'tachiuo-tenya',aji:'sabiki',madai:'tai-rubber',saba:'sabiki',buri:'nomase',kisu:'choinage',kasago:'ana',kawahagi:'kawahagi',hirame:'nomase',aoriika:'eging',sawara:'blade-jig',hamachi:'shore-jigging',mebaru:'mebaring',madako:'tako-egi',chinu:'fukase',unagi:'bukkomi'};
const methodHref:Record<string,string>={'テンヤ':'/methods#tachiuo-tenya','船テンヤ':'/methods#tachiuo-tenya','サビキ':'/methods#sabiki','サビキ釣り':'/methods#sabiki','タイラバ':'/methods#tai-rubber','ノマセ':'/methods#nomase','泳がせ':'/methods#nomase','ジギング':'/methods#jigging','ウキ釣り':'/methods#uki','引き釣り':'/methods#tachiuo-tenya-shore','アジング':'/methods#ajing','船釣り':'/methods#douzuki','ひとつテンヤ':'/methods#hitotsu-tenya','コマセ':'/methods#fukase','コマセ釣り':'/methods#fukase','ちょい投げ':'/methods#choinage','船キス':'/methods#boat-kisu','胴突き':'/methods#douzuki','胴突き釣り':'/methods#douzuki','穴釣り':'/methods#ana','ルアー':'/methods#surf-lure','フカセ':'/methods#fukase','フカセ釣り':'/methods#fukase','落とし込み':'/methods#otoshikomi','ダンゴ':'/methods#fukase','メバリング':'/methods#mebaring','エギング':'/methods#eging','ティップラン':'/methods#tiprun','タコエギ':'/methods#tako-egi','キャスティング':'/methods#casting','ブレードジグ':'/methods#blade-jig','ブレードジギング':'/methods#blade-jig','ぶっこみ釣り':'/methods#bukkomi','ショアジギング':'/methods#shore-jigging'};

// Broad labels do not identify one method reliably (e.g. river lure vs surf lure).
const ambiguousLabels=new Set(['テンヤ','船釣り','ルアー','コマセ','コマセ釣り','ダンゴ']);

export function getFishMethodSlugs(fish:Fish):string[]{
  if(fish.methodSlugs)return [...new Set(fish.methodSlugs)];
  const primary=Object.hasOwn(primaryMethod,fish.slug)?primaryMethod[fish.slug]:undefined;
  return [...new Set([primary,...fish.methods.filter(label=>!ambiguousLabels.has(label)).map(label=>methodHref[label]?.split('#')[1])]
    .filter((slug):slug is string=>Boolean(slug)))];
}

export function getFishMethodHref(label:string){return methodHref[label]||'/methods'}
