export type Coordinates={lat:number;lng:number};
export function hasCoordinates<T extends {lat?:number;lng?:number}>(value:T):value is T & Coordinates{
 return typeof value.lat==='number'&&typeof value.lng==='number'&&Number.isFinite(value.lat)&&Number.isFinite(value.lng)&&Math.abs(value.lat)<=90&&Math.abs(value.lng)<=180;
}
export function distanceKm(a:Coordinates,b:Coordinates){
 const rad=Math.PI/180,dLat=(b.lat-a.lat)*rad,dLng=(b.lng-a.lng)*rad;
 const h=Math.sin(dLat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dLng/2)**2;
 return 6371*2*Math.asin(Math.sqrt(Math.min(1,Math.max(0,h))));
}
export function sortByDistance<T extends {lat?:number;lng?:number}>(entries:readonly T[],origin:Coordinates){
 return [...entries].sort((a,b)=>(hasCoordinates(a)?distanceKm(origin,a):Infinity)-(hasCoordinates(b)?distanceKm(origin,b):Infinity));
}
