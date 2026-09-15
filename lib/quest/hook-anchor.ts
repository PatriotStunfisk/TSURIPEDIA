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
