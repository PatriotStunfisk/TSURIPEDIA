'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export default function BuriViewer(){
 const ref=useRef<HTMLDivElement>(null);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  const el=ref.current;if(!el)return;
  let renderer:THREE.WebGLRenderer|undefined;let raf=0;let ro:ResizeObserver|undefined;let disposed=false;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(34,1,.01,1000);
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;
  Object.assign(renderer.domElement.style,{position:'absolute',inset:'0',width:'100%',height:'100%',display:'block',touchAction:'none'});
  el.prepend(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff,0x17384b,3.4));
  const key=new THREE.DirectionalLight(0xffffff,4.5);key.position.set(4,5,7);scene.add(key);
  const fill=new THREE.DirectionalLight(0xa9e7ff,2.2);fill.position.set(-5,2,4);scene.add(fill);
  const rim=new THREE.DirectionalLight(0x62cfff,2.0);rim.position.set(-3,3,-5);scene.add(rim);
  const holder=new THREE.Group();scene.add(holder);
  let targetY=0,targetX=0,ry=0,rx=0,down=false,lastX=0,lastY=0;
  const fit=(obj:THREE.Object3D)=>{
   const box=new THREE.Box3().setFromObject(obj);const size=box.getSize(new THREE.Vector3());const center=box.getCenter(new THREE.Vector3());
   obj.position.sub(center);
   const max=Math.max(size.x,size.y,size.z)||1;
   const scale=3.9/max;obj.scale.setScalar(scale);
   camera.position.set(0,.1,5.8);camera.lookAt(0,0,0);
  };
  const loader=new GLTFLoader();
  loader.load('/models/fish/buri.glb',g=>{if(disposed)return;g.scene.traverse(o=>{if((o as THREE.Mesh).isMesh){const m=(o as THREE.Mesh).material;if(Array.isArray(m))m.forEach(x=>x.needsUpdate=true);else if(m)m.needsUpdate=true;}});holder.add(g.scene);fit(g.scene);},undefined,()=>{if(!disposed)setFailed(true)});
  const pd=(e:PointerEvent)=>{down=true;lastX=e.clientX;lastY=e.clientY;renderer?.domElement.setPointerCapture?.(e.pointerId)};
  const pm=(e:PointerEvent)=>{if(!down)return;targetY+=(e.clientX-lastX)*.009;targetX=Math.max(-.7,Math.min(.7,targetX+(e.clientY-lastY)*.006));lastX=e.clientX;lastY=e.clientY};
  const pu=()=>{down=false};renderer.domElement.addEventListener('pointerdown',pd);window.addEventListener('pointermove',pm);window.addEventListener('pointerup',pu);
  const resize=()=>{if(!renderer)return;const w=Math.max(el.clientWidth,320),h=Math.max(el.clientHeight,280);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
  ro=new ResizeObserver(resize);ro.observe(el);resize();
  const tick=()=>{ry+=(targetY-ry)*.08;rx+=(targetX-rx)*.08;holder.rotation.y=ry;holder.rotation.x=rx;renderer?.render(scene,camera);raf=requestAnimationFrame(tick)};tick();
  return()=>{disposed=true;cancelAnimationFrame(raf);ro?.disconnect();window.removeEventListener('pointermove',pm);window.removeEventListener('pointerup',pu);renderer?.dispose();renderer?.domElement.remove()};
 },[]);
 return <div ref={ref} className="fishViewer" style={{position:'relative',width:'100%',height:'100%',minHeight:360,overflow:'hidden',background:'transparent'}}>{failed&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',zIndex:2,color:'#d8f5ff'}}>3Dモデルを読み込めませんでした</div>}<div style={{position:'absolute',left:14,top:14,zIndex:3,pointerEvents:'none',fontSize:10,fontWeight:900,letterSpacing:1.1,color:'#d8f5ff',background:'#06203099',border:'1px solid #2e566b',padding:'6px 9px',borderRadius:999}}>GLB 3D</div><div style={{position:'absolute',right:14,bottom:14,zIndex:3,pointerEvents:'none',fontSize:10,color:'#d8f5ff'}}>↔ ドラッグして360°観察</div></div>
}
