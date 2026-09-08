'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';

export default function FishViewer(){
  const ref=useRef<HTMLDivElement>(null);
  const [failed,setFailed]=useState(false);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    let renderer:THREE.WebGLRenderer|undefined;let raf=0;let ro:ResizeObserver|undefined;
    try{
      const scene=new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(32,1,.1,100);camera.position.set(0,.15,7.3);
      renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.outputColorSpace=THREE.SRGBColorSpace;
      renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.45;
      Object.assign(renderer.domElement.style,{position:'absolute',inset:'0',width:'100%',height:'100%',display:'block',zIndex:'1',touchAction:'none'});
      el.prepend(renderer.domElement);
      scene.add(new THREE.HemisphereLight(0xeefaff,0x071927,4));
      const key=new THREE.DirectionalLight(0xffffff,5);key.position.set(4,5,7);scene.add(key);
      const rim=new THREE.DirectionalLight(0x48d7ff,3);rim.position.set(-5,2,-3);scene.add(rim);
      const fish=new THREE.Group();scene.add(fish);
      const silver=new THREE.MeshPhysicalMaterial({color:0xe8f0f3,metalness:.72,roughness:.18,clearcoat:1,clearcoatRoughness:.12});
      const dark=new THREE.MeshStandardMaterial({color:0x203846,metalness:.35,roughness:.35});
      const fin=new THREE.MeshStandardMaterial({color:0xa7c7d6,transparent:true,opacity:.68,side:THREE.DoubleSide});
      const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(-2.8,.04,0),new THREE.Vector3(-1.7,.08,0),new THREE.Vector3(-.5,.04,0),new THREE.Vector3(.8,-.02,0),new THREE.Vector3(2,-.12,0),new THREE.Vector3(2.8,-.42,0)]);
      const body=new THREE.Mesh(new THREE.TubeGeometry(curve,180,.2,28,false),silver);body.scale.set(1,1.7,.72);fish.add(body);
      const head=new THREE.Mesh(new THREE.SphereGeometry(.45,40,30),silver);head.scale.set(1.35,.75,.5);head.position.set(-2.95,.05,0);fish.add(head);
      const jaw=new THREE.Mesh(new THREE.ConeGeometry(.22,.58,5),silver);jaw.rotation.z=Math.PI/2;jaw.position.set(-3.43,0,0);jaw.scale.z=.6;fish.add(jaw);
      const eyeMat=new THREE.MeshPhysicalMaterial({color:0x05080a,roughness:.04,clearcoat:1});
      const eye=new THREE.Mesh(new THREE.SphereGeometry(.105,24,24),eyeMat);eye.position.set(-3.14,.18,.17);fish.add(eye);
      const dorsalShape=new THREE.Shape();dorsalShape.moveTo(-2.65,.30);dorsalShape.bezierCurveTo(-1.4,.62,.7,.50,2.45,.10);dorsalShape.lineTo(2.5,.03);dorsalShape.bezierCurveTo(.5,.20,-1.5,.24,-2.65,.20);dorsalShape.closePath();
      const dorsal=new THREE.Mesh(new THREE.ShapeGeometry(dorsalShape),fin);dorsal.position.z=-.015;fish.add(dorsal);
      const mouth=new THREE.Mesh(new THREE.BoxGeometry(.42,.025,.2),dark);mouth.position.set(-3.42,-.08,.02);fish.add(mouth);
      fish.rotation.y=-.12;
      let down=false,lastX=0,lastY=0,targetY=-.12,targetX=.02,ry=-.12,rx=.02;
      const pd=(e:PointerEvent)=>{down=true;lastX=e.clientX;lastY=e.clientY;renderer?.domElement.setPointerCapture?.(e.pointerId)};
      const pm=(e:PointerEvent)=>{if(!down)return;targetY+=(e.clientX-lastX)*.009;targetX=Math.max(-.55,Math.min(.55,targetX+(e.clientY-lastY)*.006));lastX=e.clientX;lastY=e.clientY};
      const pu=()=>{down=false};renderer.domElement.addEventListener('pointerdown',pd);window.addEventListener('pointermove',pm);window.addEventListener('pointerup',pu);
      const resize=()=>{if(!renderer)return;const w=Math.max(el.clientWidth,320),h=Math.max(el.clientHeight,320);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
      ro=new ResizeObserver(resize);ro.observe(el);resize();
      const tick=()=>{ry+=(targetY-ry)*.08;rx+=(targetX-rx)*.08;fish.rotation.y=ry;fish.rotation.x=rx;renderer?.render(scene,camera);raf=requestAnimationFrame(tick)};tick();
      return()=>{cancelAnimationFrame(raf);ro?.disconnect();window.removeEventListener('pointermove',pm);window.removeEventListener('pointerup',pu);renderer?.dispose();renderer?.domElement.remove()};
    }catch{setFailed(true)}
  },[]);
  return <div ref={ref} className="fishViewer" style={{position:'relative',width:'100%',height:'100%',minHeight:360,overflow:'hidden',background:'transparent'}}>{failed&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',zIndex:2,color:'#d8f5ff'}}>3D表示を読み込めませんでした</div>}<div className="viewerBadge" style={{position:'absolute',zIndex:3,pointerEvents:'none'}}>LIGHT 3D</div><div className="viewerHelp" style={{position:'absolute',zIndex:3,pointerEvents:'none'}}>↔ ドラッグして360°観察</div></div>
}
