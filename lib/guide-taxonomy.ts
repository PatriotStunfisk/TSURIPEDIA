import type {GuideArticle} from './guide-articles';
export const guideTopics={fishing:'釣り方',tackle:'仕掛け・道具',handling:'魚の扱い・締め方',cooking:'料理・保存',basics:'釣りの基礎知識',safety:'安全・マナー',season:'季節・釣り場'} as const;
export const guideGearTags={rod:'ロッド',reel:'リール',line:'ライン・結束',rig:'仕掛け',lure:'ルアー・エギ',cooler:'クーラー・保冷',tools:'釣り小物',safety:'安全装備'} as const;
export type GuideEditorial={articleType:'GUIDE'|'QUICK GUIDE';topic:keyof typeof guideTopics;gearTags?:Array<keyof typeof guideGearTags>;parentGuide?:string};
export type ClassifiedGuide=GuideArticle&GuideEditorial&{fishTags:string[];methodTags:string[];readingMinutes:number};
// Count only prose rendered in the article, not JSON keys, URLs or metadata.
export function guideReadingMinutes(article:GuideArticle){
 const text=[article.answer,...article.sections.flatMap(s=>[s.heading,s.body,...s.points??[],...s.steps?.flatMap(x=>[x.title,x.body])??[],s.table?.caption??'',...s.table?.headers??[],...s.table?.rows.flat()??[],s.warning??'',...s.diagram?.labels??[]])].join('');
 return Math.max(1,Math.ceil(text.replace(/\s/g,'').length/500));
}
export function filterGuides(guides:ClassifiedGuide[],filters:{q?:string;type?:string;topic?:string;fish?:string;method?:string;gear?:string},labels:Record<string,string>={}){
 const terms=(filters.q??'').normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);
 return guides.filter(g=>(!filters.type||g.articleType===filters.type)&&(!filters.topic||g.topic===filters.topic)&&(!filters.fish||g.fishTags.includes(filters.fish))&&(!filters.method||g.methodTags.includes(filters.method))&&(!filters.gear||g.gearTags?.includes(filters.gear as keyof typeof guideGearTags))&&terms.every(term=>[g.title,g.query,g.summary,g.category,guideTopics[g.topic],...g.fishTags.map(s=>labels[s]??s),...g.methodTags.map(s=>labels[s]??s),...(g.gearTags??[]).map(s=>guideGearTags[s])].join(' ').normalize('NFKC').toLowerCase().includes(term)));
}
