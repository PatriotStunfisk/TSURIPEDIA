import {fishingMapEntries} from './fishing-map-data';
const normalize=(s:string)=>s.normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
const places=fishingMapEntries.filter(p=>!p.closed&&Number.isFinite(p.lat)&&Number.isFinite(p.lng)).map(p=>({id:p.slug,name:p.name,area:[p.prefecture,p.area].filter(Boolean).join(' / '),lat:Number(p.lat!.toFixed(4)),lon:Number(p.lng!.toFixed(4))}));
export function getWeatherPlace(id:string){return places.find(p=>p.id===id)}
export function searchWeatherPlaces(query:string){const q=normalize(query.trim().slice(0,80)),terms=q.split(/\s+/);if(q.length<2)return [];return places.filter(p=>terms.every(t=>normalize(p.name+' '+p.area).includes(t))).sort((a,b)=>Number(normalize(b.name)===q)-Number(normalize(a.name)===q)||a.name.localeCompare(b.name,'ja')).slice(0,20)}
