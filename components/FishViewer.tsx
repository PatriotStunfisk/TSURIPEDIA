'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function FishViewer(){
  const ref=useRef<HTMLDivElement>(null);
  const [mode,setMode]=useState<'loading'|'glb'|'fallback'>('loading');

  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(38,el.clientWidth/el.clientHeight,.1,100);
    camera.position.set(0,.2,6.7);
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.setSize(el.clientWidth,el.clientHeight);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.2;
    el.prepend(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xd8f4ff,0x173247,3.2));
    const key=new THREE.DirectionalLight(0xffffff,4.5);key.position.set(4,6,5);scene.add(key);
    const rim=new THREE.DirectionalLight(0x56cfff,3);rim.position.set(-5,1,-4);scene.add(rim);

    const group=new THREE.Group();scene.add(group);

    function makeFallback(){
      const length=5.8,seg=100,rings=24,verts:number[]=[],idx:number[]=[];
      for(let i=0;i<=seg;i++){const q=i/seg,x=(q-.5)*length;const taper=Math.pow(Math.sin(Math.PI*q),.5);const h=.28*taper*(.94+.06*Math.cos(q*Math.PI));const w=.095*taper;for(let j=0;j<rings;j++){const a=j/rings*Math.PI*2;verts.push(x,Math.cos(a)*h,Math.sin(a)*w)}}
      for(let i=0;i<seg;i++)for(let j=0;j<rings;j++){const a=i*rings+j,b=i*rings+(j+1)%rings,c=(i+1)*rings+(j+1)%rings,d=(i+1)*rings+j;idx.push(a,b,d,b,c,d)}
      const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setIndex(idx);geo.computeVertexNormals();
      const silver=new THREE.MeshPhysicalMaterial({color:0xc7d6df,metalness:.92,roughness:.2,clearcoat:.45});group.add(new THREE.Mesh(geo,silver));
      const head=new THREE.Mesh(new THREE.ConeGeometry(.31,.62,4),silver);head.rotation.z=Math.PI/2;head.scale.z=.45;head.position.x=-length/2-.15;group.add(head);
      const eye=new THREE.Mesh(new THREE.SphereGeometry(.09,24,24),new THREE.MeshStandardMaterial({color:0x05080b}));eye.position.set(-length/2-.28,.11,.105);group.add(eye);
      const finMat=new THREE.MeshStandardMaterial({color:0x8aa9bb,side:THREE.DoubleSide,transparent:true,opacity:.78});const finVerts:number[]=[];
      for(let i=0;i<42;i++){const x=-length/2+.2+i*(length-.5)/41;finVerts.push(x,.22,0,x+.06,.48-(i/41)*.12,0,x+.13,.22,0)}
      const fgeo=new THREE.BufferGeometry();fgeo.setAttribute('position',new THREE.Float32BufferAttribute(finVerts,3));fgeo.computeVertexNormals();group.add(new THREE.Mesh(fgeo,finMat));
      setMode('fallback');
    }

    const loader=new GLTFLoader();
    loader.load('/models/tachiuo.glb',gltf=>{
      const model=gltf.scene;
      const box=new THREE.Box3().setFromObject(model);const size=new THREE.Vector3();box.getSize(size);const center=new THREE.Vector3();box.getCenter(center);
      model.position.sub(center);
      const longest=Math.max(size.x,size.y,size.z)||1;const scale=5.2/longest;model.scale.setScalar(scale);
      const scaledBox=new THREE.Box3().setFromObject(model);const scaledSize=new THREE.Vector3();scaledBox.getSize(scaledSize);
      if(scaledSize.y>scaledSize.x){model.rotation.z=-Math.PI/2;}
      model.traverse(obj=>{if(obj instanceof THREE.Mesh){obj.castShadow=false;obj.receiveShadow=false;const mats=Array.isArray(obj.material)?obj.material:[obj.material];mats.forEach(m=>{if('roughness' in m)(m as THREE.MeshStandardMaterial).roughness=Math.max(.25,(m as THREE.MeshStandardMaterial).roughness??.5);});}});
      group.add(model);setMode('glb');
    },undefined,()=>makeFallback());

    let down=false,lx=0,ly=0,rx=.03,ry=-.1;
    const pd=(e:PointerEvent)=>{down=true;lx=e.clientX;ly=e.clientY;renderer.domElement.setPointerCapture?.(e.pointerId)};
    const pm=(e:PointerEvent)=>{if(!down)return;ry+=(e.clientX-lx)*.008;rx+=(e.clientY-ly)*.004;rx=Math.max(-.75,Math.min(.75,rx));lx=e.clientX;ly=e.clientY};
    const pu=()=>down=false;
    renderer.domElement.addEventListener('pointerdown',pd);window.addEventListener('pointermove',pm);window.addEventListener('pointerup',pu);
    let raf=0;const loop=()=>{group.rotation.y+=(ry-group.rotation.y)*.08;group.rotation.x+=(rx-group.rotation.x)*.08;renderer.render(scene,camera);raf=requestAnimationFrame(loop)};loop();
    const resize=()=>{camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();renderer.setSize(el.clientWidth,el.clientHeight)};window.addEventListener('resize',resize);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize);window.removeEventListener('pointermove',pm);window.removeEventListener('pointerup',pu);renderer.dispose();el.querySelector('canvas')?.remove()};
  },[]);

  return <div ref={ref} className="fishViewer"><div className="viewerBadge">{mode==='loading'?'3D LOADING':mode==='glb'?'3D MODEL':'3D PREVIEW'}</div><div className="viewerHelp">↔ ドラッグして360°観察</div></div>
}
