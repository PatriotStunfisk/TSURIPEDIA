export const spotFavoritesKey='uolink-spot-favorites-v1';
// null means an unreadable/newer value: never replace it silently.
export function parseSpotFavorites(raw:string|null):string[]|null{
 if(raw===null)return [];
 try{const v=JSON.parse(raw);if(v?.version!==1||!Array.isArray(v.slugs)||v.slugs.some((s:unknown)=>typeof s!=='string'||! /^[a-z0-9-]+$/.test(s)))return null;return [...new Set(v.slugs)] as string[];}catch{return null;}
}
export function toggleSpotFavorite(raw:string|null,slug:string):string{
 if(!/^[a-z0-9-]+$/.test(slug))throw new Error('Invalid spot ID');
 const slugs=parseSpotFavorites(raw);if(!slugs)throw new Error('保存済みのお気に入りを読み込めませんでした。保存内容は変更していません。');
 return JSON.stringify({version:1,slugs:slugs.includes(slug)?slugs.filter(s=>s!==slug):[...slugs,slug]});
}
