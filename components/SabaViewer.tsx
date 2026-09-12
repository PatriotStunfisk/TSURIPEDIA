'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js';
import {KTX2Loader} from 'three/addons/loaders/KTX2Loader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

export default function SabaViewer(){
 const ref=useRef<HTMLDivElement>(null);
 const [status,setStatus]=useState<'loading'|'ready'|'failed'>('loading');
 const [detail,setDetail]=useState('');
 useEffect(()=>{
  const el=ref.current;if(!el)return;
  let renderer:THREE.WebGLRenderer|undefined;let raf=0;let ro:ResizeObserver|undefined;let disposed=false;
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(32,1,.01,1000);
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'})}catch{setStatus('failed');setDetail('WebGLを開始できませんでした');return}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
  Object.assign(renderer.domElement.style,{position:'absolute',inset:'0',width:'100%',height:'100%',display:'block',touchAction:'none'});el.prepend(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff,0x17384b,3.4));const key=new THREE.DirectionalLight(0xffffff,4.5);key.position.set(4,5,7);scene.add(key);const fill=new THREE.DirectionalLight(0xa9e7ff,2.2);fill.position.set(-5,2,4);scene.add(fill);const rim=new THREE.DirectionalLight(0x62cfff,2);rim.position.set(-3,3,-5);scene.add(rim);

  const pivot=new THREE.Group();scene.add(pivot);
  const normalized=new THREE.Group();pivot.add(normalized);
  let targetY=0,targetX=0,ry=0,rx=0,down=false,lastX=0,lastY=0;

  const centerAndFit=(obj:THREE.Object3D)=>{
   normalized.add(obj);
   obj.updateMatrixWorld(true);
   const box=new THREE.Box3().setFromObject(obj);
   const size=box.getSize(new THREE.Vector3());
   const center=box.getCenter(new THREE.Vector3());
   obj.position.x-=center.x;obj.position.y-=center.y;obj.position.z-=center.z;
   const max=Math.max(size.x,size.y,size.z)||1;
   normalized.scale.setScalar(3.75/max);
   normalized.updateMatrixWorld(true);
   camera.position.set(0,0,5.35);camera.lookAt(0,0,0);
  };

  const draco=new DRACOLoader();draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
  const ktx2=new KTX2Loader();ktx2.setTranscoderPath('https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/libs/basis/');ktx2.detectSupport(renderer);
  const loader=new GLTFLoader();loader.setMeshoptDecoder(MeshoptDecoder);loader.setDRACOLoader(draco);loader.setKTX2Loader(ktx2);

  loader.load('/models/saba.glb?v=20260912-1',g=>{
   if(disposed)return;
   g.scene.traverse(o=>{if((o as THREE.Mesh).isMesh)(o as THREE.Mesh).frustumCulled=false});
   centerAndFit(g.scene);setStatus('ready');setDetail('');
  },undefined,(err)=>{if(disposed)return;console.error('saba.glb load error',err);setStatus('failed');setDetail(err instanceof Error?err.message.slice(0,120):'GLBの解析に失敗しました')});

  const pd=(e:PointerEvent)=>{down=true;lastX=e.clientX;lastY=e.clientY;renderer?.domElement.setPointerCapture?.(e.pointerId)},pm=(e:PointerEvent)=>{if(!down)return;targetY+=(e.clientX-lastX)*.009;targetX=Math.max(-.65,Math.min(.65,targetX+(e.clientY-lastY)*.006));lastX=e.clientX;lastY=e.clientY},pu=()=>{down=false};renderer.domElement.addEventListener('pointerdown',pd);window.addEventListener('pointermove',pm);window.addEventListener('pointerup',pu);
  const resize=()=>{if(!renderer)return;const w=Math.max(el.clientWidth,280),h=Math.max(el.clientHeight,260);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};ro=new ResizeObserver(resize);ro.observe(el);resize();
  const tick=()=>{ry+=(targetY-ry)*.08;rx+=(targetX-rx)*.08;pivot.rotation.y=ry;pivot.rotation.x=rx;renderer?.render(scene,camera);raf=requestAnimationFrame(tick)};tick();
  return()=>{disposed=true;cancelAnimationFrame(raf);ro?.disconnect();window.removeEventListener('pointermove',pm);window.removeEventListener('pointerup',pu);draco.dispose();ktx2.dispose();renderer?.dispose();renderer?.domElement.remove()};
 },[]);
 return <div ref={ref} className="fishViewer" style={{position:'relative',width:'100%',height:'100%',minHeight:260,overflow:'hidden',background:'transparent'}}>{status==='loading'&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',zIndex:2,color:'#d8f5ff'}}>3Dモデルを読み込み中…</div>}{status==='failed'&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',alignContent:'center',gap:8,zIndex:2,color:'#d8f5ff',textAlign:'center',padding:24}}><b>3Dモデルを読み込めませんでした</b>{detail&&<small style={{opacity:.72,fontSize:10,wordBreak:'break-word'}}>{detail}</small>}</div>}</div>
}
