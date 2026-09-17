// Greedy screen-space placement: never hide markers, only omit colliding labels.
export function visibleSpotLabels(points:{slug:string;name:string;x:number;y:number}[],zoom:number,width:number,height:number,selected?:string):Set<string>{
 const shown=new Set<string>();if(zoom<12)return shown;
 const occupied:{left:number;right:number;top:number;bottom:number}[]=[];
 const ordered=[...points].sort((a,b)=>Number(b.slug===selected)-Number(a.slug===selected)||a.slug.localeCompare(b.slug));
 for(const p of ordered){const w=Math.min(170,Math.max(50,Array.from(p.name).length*11+16));const box={left:p.x-w/2,right:p.x+w/2,top:p.y-44,bottom:p.y-18};
  if(box.left<0||box.right>width||box.top<0||box.bottom>height)continue;
  if(occupied.some(b=>box.left<b.right+6&&box.right>b.left-6&&box.top<b.bottom+5&&box.bottom>b.top-5))continue;
  occupied.push(box);shown.add(p.slug);
 }
 return shown;
}
