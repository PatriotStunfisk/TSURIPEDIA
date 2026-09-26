export type PreviewRect={left:number;top:number;right:number;bottom:number};
/** Mobile: unobscured map center. Desktop: full map center. Overlay rectangles are relative to the map canvas. */
export function previewMapCenter(width:number,height:number,card:PreviewRect){
 const mobile=card.right-card.left>width*.65;
 return mobile?{x:width/2,y:Math.max(40,card.top/2)}:{x:width/2,y:height/2};
}
