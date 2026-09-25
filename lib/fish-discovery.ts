// Editorial browsing groups, not taxonomic synonym assertions.
// General terms belong here rather than exact-name resolution used by spot links.
type DiscoverableFish={slug?:string;name:string;waterTypes?:readonly string[];detail?:{family?:string}};
export const coreFishOrder=['tachiuo','aji','saba','buri','kisu','kasago','madai','kawahagi','aoriika','mebaru'] as const;
export function fishBrowseGroup(f:DiscoverableFish):string{
 const family=f.detail?.family??'';
 // Estuary fish such as starry flounder still belong with flatfish in browsing/search.
 if(/カレイ科/.test(family))return 'カレイ類';
 if(f.waterTypes?.includes('fresh')||/サケ科|コイ科/.test(family))return '淡水・サケマス';
 if(/ハタ科/.test(family))return 'ハタ類';
 if(/アマダイ科/.test(family))return 'アマダイ類';
 if(/タイ科/.test(family))return 'タイ類';
 if(/フグ科|ハリセンボン科/.test(family))return 'フグ類';
 if(/カワハギ科|モンガラカワハギ科/.test(family))return 'カワハギ類';
 if(/カサゴ科|メバル科|ハオコゼ科|オニオコゼ科/.test(family))return 'カサゴ・メバル類';
 if(/アジ科/.test(family))return 'アジ・青物';
 if(/サバ科/.test(family))return 'サバ・カツオ・マグロ';
 if(/イカ/.test(family))return 'イカ類';
 if(/タコ/.test(family))return 'タコ類';
 return family||'その他';
}
export function fishSearchTags(f:DiscoverableFish):string[]{
 const group=fishBrowseGroup(f),tags:string[]=[];
 if(group==='カレイ類')tags.push('カレイ','かれい');
 if(['katsuo','suma','hirasouda','marusouda'].includes(f.slug??''))tags.push('カツオ','鰹');
 if(['hirasouda','marusouda'].includes(f.slug??''))tags.push('ソウダガツオ');
 if(group==='ハタ類')tags.push('ハタ');
 if(group==='淡水・サケマス')tags.push('淡水魚');
 if(group==='アマダイ類')tags.push('アマダイ');
 if(group==='フグ類')tags.push('フグ');
 return tags;
}
