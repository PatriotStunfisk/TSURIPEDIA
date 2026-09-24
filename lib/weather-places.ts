import {fishingMapEntries} from './fishing-map-data';
const normalize=(s:string)=>s.normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
const places=fishingMapEntries.filter(p=>!p.closed&&Number.isFinite(p.lat)&&Number.isFinite(p.lng)).map(p=>({id:p.slug,name:p.name,area:[p.prefecture,p.area].filter(Boolean).join(' / '),lat:Number(p.lat!.toFixed(4)),lon:Number(p.lng!.toFixed(4))}));
export function getWeatherPlace(id:string){return places.find(p=>p.id===id)}
export function searchWeatherPlaces(query:string){const q=normalize(query.trim().slice(0,80)),terms=q.split(/\s+/);if(q.length<2)return [];return places.filter(p=>terms.every(t=>normalize(p.name+' '+p.area).includes(t))).sort((a,b)=>Number(normalize(b.name)===q)-Number(normalize(a.name)===q)||a.name.localeCompare(b.name,'ja')).slice(0,20)}

// Group only the requested viewport. No forecast requests are made for markers.
export function weatherMapPoints(south:number,west:number,north:number,east:number,zoom:number){
 if(![south,west,north,east,zoom].every(Number.isFinite)||south>=north||west>=east||south<20||north>50||west<120||east>155||zoom<3||zoom>18)return null;
 const cell=Math.max(.002,80/2**Math.floor(zoom));
 const groups=new Map<string,typeof places>();
 for(const p of places){if(p.lat<south||p.lat>north||p.lon<west||p.lon>east)continue;const key=`${Math.floor(p.lat/cell)}:${Math.floor(p.lon/cell)}`;const g=groups.get(key)??[];g.push(p);groups.set(key,g)}
 return [...groups.values()].map(g=>({id:g.length===1?g[0].id:null,name:g.length===1?g[0].name:`${g.length}地点`,lat:g.reduce((s,p)=>s+p.lat,0)/g.length,lon:g.reduce((s,p)=>s+p.lon,0)/g.length,count:g.length,...(zoom>=16&&g.length>1?{choices:g.map(p=>({id:p.id,name:p.name}))}:{})}));
}
