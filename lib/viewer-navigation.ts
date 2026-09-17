import type {PerspectiveCamera,Object3D} from 'three';
export const clampZoom=(n:number)=>Math.max(.5,Math.min(3,n));
export type ViewerNavigation={zoom:(factor:number)=>void;pan:(x:number,y:number)=>void;reset:()=>void;mode:(pan:boolean)=>void;dispose:()=>void};
// The original species pose remains on the model; only its outer pivot is moved.
export function createViewerNavigation(camera:PerspectiveCamera,canvas:HTMLCanvasElement,pivot:Object3D,rotate:(x:number,y:number)=>void,resetRotation:()=>void):ViewerNavigation{
 const pointers=new Map<number,{x:number;y:number}>();let moveMode=false;
 const zoom=(factor:number)=>{camera.zoom=clampZoom(camera.zoom*factor);camera.updateProjectionMatrix();};
 const pan=(x:number,y:number)=>{const h=2*Math.abs(camera.position.z)*Math.tan(camera.fov*Math.PI/360)/camera.zoom;const scale=h/Math.max(1,canvas.clientHeight);pivot.position.x=Math.max(-3,Math.min(3,pivot.position.x+x*scale));pivot.position.y=Math.max(-3,Math.min(3,pivot.position.y-y*scale));};
 const reset=()=>{pointers.clear();camera.zoom=1;camera.updateProjectionMatrix();pivot.position.set(0,0,0);resetRotation();};
 const down=(e:PointerEvent)=>{if(e.button!==0&&e.button!==2)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});canvas.setPointerCapture(e.pointerId);};
 const move=(e:PointerEvent)=>{const old=pointers.get(e.pointerId);if(!old)return;const next={x:e.clientX,y:e.clientY};const other=[...pointers.entries()].find(([id])=>id!==e.pointerId)?.[1];if(other){const before=Math.hypot(old.x-other.x,old.y-other.y),after=Math.hypot(next.x-other.x,next.y-other.y);if(before>2&&after>2)zoom(after/before);pan((next.x-old.x)/2,(next.y-old.y)/2);}else if(moveMode||e.shiftKey||(e.buttons&2)){pan(next.x-old.x,next.y-old.y);}else rotate(next.x-old.x,next.y-old.y);pointers.set(e.pointerId,next);};
 const up=(e:PointerEvent)=>{pointers.delete(e.pointerId);};
 const wheel=(e:WheelEvent)=>{e.preventDefault();zoom(Math.exp(-Math.max(-100,Math.min(100,e.deltaY*(e.deltaMode===1?16:1)))*.002));};
 const menu=(e:Event)=>e.preventDefault();
 canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);canvas.addEventListener('lostpointercapture',up);canvas.addEventListener('wheel',wheel,{passive:false});canvas.addEventListener('contextmenu',menu);
 return {zoom,pan,reset,mode:(value)=>{moveMode=value;},dispose:()=>{pointers.clear();canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',up);canvas.removeEventListener('lostpointercapture',up);canvas.removeEventListener('wheel',wheel);canvas.removeEventListener('contextmenu',menu);}};
}
