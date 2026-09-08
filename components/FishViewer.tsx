'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function FishViewer(){
  const ref=useRef<HTMLDivElement>(null);
  const [mode,setMode]=useState<'fallback'|'glb'>('fallback');

  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(34,Math.max(el.clientWidth,1)/Math.max(el.clientHeight,1),.1,100);
    camera.position.set(0,.05,7.3);
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
    renderer.setSize(Math.max(el.clientWidth,1),Math.max(el.clientHeight,1));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.35;
    el.prepend(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xe8f8ff,0x0c2432,4));
    const key=new THREE.DirectionalLight(0xffffff,5);key.position.set(4,5,6);scene.add(key);
    const rim=new THREE.DirectionalLight(0x55d8ff,3.5);rim.position.set(-4,2,-4);scene.add(rim);
    const fill=new THREE.DirectionalLight(0x9bdcff,2);fill.position.set(0,-3,5);scene.add(fill);

    const group=new THREE.Group();scene.add(group);

    const length=5.7,seg=120,rings=28,verts:number[]=[],idx:number[]=[];
    for(let i=0;i<=seg;i++){
      const q=i/seg,x=(q-.5)*length;
      const taper=Math.pow(Math.sin(Math.PI*q),.42);
      const belly=.27*taper*(1-.05*q);
      const width=.075*taper;
      for(let j=0;j<rings;j++){
        const a=j/rings*Math.PI*2;
        verts.push(x,Math.cos(a)*belly,Math.sin(a)*width);
      }
    }
    for(let i=0;i<seg;i++)for(let j=0;j<rings;j++){
      const a=i*rings+j,b=i*rings+(j+1)%rings,c=(i+1)*rings+(j+1)%rings,d=(i+1)*rings+j;
      idx.push(a,b,d,b,c,d);
    }
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setIndex(idx);geo.computeVertexNormals();
    const silver=new THREE.MeshPhysicalMaterial({color:0xd8e3e8,metalness:.82,roughness:.19,clearcoat:.65,clearcoatRoughness:.16});
    const body=new THREE.Mesh(geo,silver);group.add(body);
    const head=new THREE.Mesh(new THREE.ConeGeometry(.34,.72,5),silver);head.rotation.z=Math.PI/2;head.scale.set(1,.84,.44);head.position.x=-3.02;group.add(head);
    const eyeMat=new THREE.MeshPhysicalMaterial({color:0x020407,roughness:.05,clearcoat:1});
    const eye=new THREE.Mesh(new THREE.SphereGeometry(.095,24,24),eyeMat);eye.position.set(-3.18,.12,.105);group.add(eye);
    const finMat=new THREE.MeshStandardMaterial({color:0x9ab7c5,side:THREE.DoubleSide,transparent:true,opacity:.7});
    const finShape=new THREE.Shape();finShape.moveTo(-2.75,.22);for(let i=0;i<=26;i++){const q=i/26;finShape.lineTo(-2.75+5.15*q,.37-.09*q+.035*Math.sin(q*Math.PI));}finShape.lineTo(2.4,.18);finShape.lineTo(-2.75,.18);
    const finGeo=new THREE.ShapeGeometry(finShape);group.add(new THREE.Mesh(finGeo,finMat));
    setMode('fallback');

    const loader=new GLTFLoader();
    loader.load('/models/tachiuo.glb',gltf=>{
      group.clear();
      const model=gltf.scene;
      const box=new THREE.Box3().setFromObject(model);const size=new THREE.Vector3();box.getSize(size);const center=new THREE.Vector3();box.getCenter(center);
      model.position.sub(center);
      const longest=Math.max(size.x,size.y,size.z)||1;model.scale.setScalar(5.3/longest);
      const scaledBox=new THREE.Box3().setFromObject(model);const scaledSize=new THREE.Vector3();scaledBox.getSize(scaledSize);
      if(scaledSize.y>scaledSize.x)model.rotation.z=-Math.PI/2;
      model.traverse(obj=>{if(obj instanceof THREE.Mesh){const mats=Array.isArray(obj.material)?obj.material:[obj.material];mats.forEach(m=>{if('roughness' in m)(m as THREE.MeshStandardMaterial).roughness=Math.max(.22,(m as THREE.MeshStandardMaterial).roughness??.5);});}});
      group.add(model);setMode('glb');
    },undefined,()=>{});

    let down=false,lx=0,ly=0,rx=.02,ry=-.12,targetX=rx,targetY=ry;
    const pd=(e:PointerEvent)=>{down=true;lx=e.clientX;ly=e.clientY;renderer.domElement.setPointerCapture?.(e.pointerId)};
    const pm=(e:PointerEvent)=>{if(!down)return;targetY+=(e.clientX-lx)*.009;targetX+=(e.clientY-ly)*.005;targetX=Math.max(-.7,Math.min(.7,targetX));lx=e.clientX;ly=e.clientY};
    const pu=()=>{down=false};
    renderer.domElement.addEventListener('pointerdown',pd);window.addEventListener('pointermove',pm);window.addEventListener('pointerup',pu);
    let raf=0;const loop=()=>{ry+=(targetY-ry)*.09;rx+=(targetX-rx)*.09;group.rotation.y=ry;group.rotation.x=rx;renderer.render(scene,camera);raf=requestAnimationFrame(loop)};loop();
    const resize=()=>{const w=Math.max(el.clientWidth,1),h=Math.max(el.clientHeight,1);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h)};window.addEventListener('resize',resize);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize);window.removeEventListener('pointermove',pm);window.removeEventListener('pointerup',pu);renderer.dispose();el.querySelector('canvas')?.remove()};
  },[]);

  return <div ref={ref} className="fishViewer"><div className="viewerBadge">{mode==='glb'?'3D MODEL':'3D PREVIEW'}</div><div className="viewerHelp">↔ ドラッグして360°観察</div></div>
}
