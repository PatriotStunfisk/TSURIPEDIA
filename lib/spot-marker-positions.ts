// Separate only coincident locations in screen pixels; stored geography and distances stay exact.
export function displaySpotPositions<T extends {slug:string;lat:number;lng:number}>(points:readonly T[],project:(p:T)=>{x:number;y:number},zoom:number){
 const positions=new Map(points.map(p=>[p.slug,project(p)]));
 if(zoom<11)return positions;
 const coincident=new Map<string,T[]>();
 for(const p of points){const key=`${p.lat.toFixed(6)},${p.lng.toFixed(6)}`;const group=coincident.get(key)??[];group.push(p);coincident.set(key,group);}
 for(const group of coincident.values()){
  if(group.length<2)continue;
  const ordered=[...group].sort((a,b)=>a.slug.localeCompare(b.slug));
  const radius=Math.max(22,36/(2*Math.sin(Math.PI/ordered.length)));
  ordered.forEach((p,i)=>{const anchor=project(p),angle=2*Math.PI*i/ordered.length;positions.set(p.slug,{x:anchor.x+Math.cos(angle)*radius,y:anchor.y+Math.sin(angle)*radius});});
 }
 return positions;
}
