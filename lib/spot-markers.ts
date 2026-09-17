import {spotPrimaryType} from './spot-classification';
export const markerKinds={
 boat:{label:'釣船・船宿',symbol:'船',color:'#793eb5'},'sea-park':{label:'海釣り公園',symbol:'釣',color:'#147348'},'sea-pond':{label:'海上釣り堀',symbol:'堀',color:'#bf5875'},port:{label:'港',symbol:'港',color:'#567b8b'},pier:{label:'堤防・護岸',symbol:'堤',color:'#1765a6'},beach:{label:'サーフ',symbol:'浜',color:'#9b650b'},rock:{label:'磯',symbol:'磯',color:'#665245'},estuary:{label:'河口',symbol:'河',color:'#157f86'},fresh:{label:'湖・川・管理池',symbol:'淡',color:'#417537'},area:{label:'釣行計画エリア',symbol:'域',color:'#627083'},other:{label:'その他',symbol:'岸',color:'#3d7189'},
} as const;
export const markerKind=spotPrimaryType;
// Pixel-grid grouping is linear in point count. It never loses co-located entries.
export function clusterPoints<T extends {slug:string}>(points:readonly T[],project:(p:T)=>{x:number;y:number},selected?:string,cellSize=48):T[][]{
 const groups=new Map<string,T[]>();
 for(const p of points){const v=project(p);const key=p.slug===selected?`selected:${p.slug}`:`${Math.floor(v.x/cellSize)}:${Math.floor(v.y/cellSize)}`;const group=groups.get(key);if(group)group.push(p);else groups.set(key,[p]);}
 return [...groups.values()];
}

// Reveal individual pins earlier without flooding the nationwide view.
export function clusterCellSize(zoom:number){return zoom<6?32:zoom<8?20:zoom<10?10:4;}
