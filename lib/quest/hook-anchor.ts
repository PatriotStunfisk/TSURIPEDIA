export type MouthAnchor={x:number;y:number};
// Fractions of the oriented model bounding box (before centering/normalizing).
export type ModelHookAnchor=MouthAnchor&{z:number};
export type HookAttachment={kind?:'mouth'|'embrace'|'cover';mouthAnchor?:MouthAnchor;modelAnchor?:ModelHookAnchor};
export const defaultMouthAnchor:MouthAnchor={x:.04,y:.52};
export const defaultModelAnchor:ModelHookAnchor={x:.03,y:.5,z:.5};

// Fit the side profile to a wide fight viewport instead of fitting an enclosing sphere.
export function fightCameraDistance(size:{x:number;y:number;z:number},aspect:number,fovDegrees:number){
 const vertical=Math.tan(fovDegrees*Math.PI/360),horizontal=vertical*Math.max(.01,aspect);
 return Math.max(size.x/(2*horizontal),size.y/(2*vertical))*1.2+size.z/2;
}

// object-fit:contain letterboxing must be included; image and container rarely share an aspect ratio.
export function containedAnchor(width:number,height:number,imageWidth:number,imageHeight:number,anchor:MouthAnchor){
 const scale=Math.min(width/Math.max(1,imageWidth),height/Math.max(1,imageHeight));
 const w=imageWidth*scale,h=imageHeight*scale;
 return {x:(width-w)/2+w*anchor.x,y:(height-h)/2+h*anchor.y};
}

// Contact is resolved against the rendered mouth (including 3D projection and
// contain letterboxing), not the image center. Keep the bait fixed until hooked.
export function approachFraction(attraction:number,style:string){
 const threshold=style==='eging'||style==='kawahagi'?65:95;
 const t=Math.max(0,Math.min(1,attraction/threshold));return t*t*(3-2*t);
}
export function contactOffset(mouth:MouthAnchor,bait:MouthAnchor,current:MouthAnchor,progress:number){
 return {x:(bait.x-mouth.x+current.x)*progress,y:(bait.y-mouth.y+current.y)*progress};
}
export function easeOffset(current:MouthAnchor,target:MouthAnchor,elapsedMs:number){
 const alpha=1-Math.exp(-Math.max(0,Math.min(100,elapsedMs))/65);
 return {x:current.x+(target.x-current.x)*alpha,y:current.y+(target.y-current.y)*alpha};
}
