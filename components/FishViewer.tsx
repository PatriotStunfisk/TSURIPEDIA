'use client';
import {useEffect,useRef} from 'react';
import * as THREE from 'three';

export default function FishViewer(){
  const ref=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(34,1,.1,100);
    camera.position.set(0,.12,7.2);
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.35;
    renderer.domElement.style.width='100%';
    renderer.domElement.style.height='100%';
    renderer.domElement.style.display='block';
    el.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xeaf8ff,0x071a28,3.6));
    const key=new THREE.DirectionalLight(0xffffff,5);key.position.set(4,5,6);scene.add(key);
    const rim=new THREE.DirectionalLight(0x4ad8ff,3.4);rim.position.set(-4,2,-4);scene.add(rim);
    const fill=new THREE.DirectionalLight(0x8fdfff,1.8);fill.position.set(0,-3,4);scene.add(fill);

    const fish=new THREE.Group();scene.add(fish);
    const bodyMat=new THREE.MeshPhysicalMaterial({color:0xdde7eb,metalness:.78,roughness:.2,clearcoat:.8,clearcoatRoughness:.14});
    const darkMat=new THREE.MeshStandardMaterial({color:0x556b76,metalness:.45,roughness:.3});
    const finMat=new THREE.MeshStandardMaterial({color:0x829daa,transparent:true,opacity:.72,side:THREE.DoubleSide});

    const curve=new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.9,.02,0),new THREE.Vector3(-1.9,.08,.02),new THREE.Vector3(-.8,.03,0),new THREE.Vector3(.5,-.02,.02),new THREE.Vector3(1.65,-.08,0),new THREE.Vector3(2.55,-.18,-.04),new THREE.Vector3(2.95,-.55,-.12)
    ]);
    const tube=new THREE.TubeGeometry(curve,160,.18,24,false);
    const body=new THREE.Mesh(tube,bodyMat);body.scale.y=1.65;body.scale.z=.58;fish.add(body);

    const headGeo=new THREE.SphereGeometry(.42,36,24);const head=new THREE.Mesh(headGeo,bodyMat);head.scale.set(1.35,.72,.42);head.position.set(-3.02,.05,0);fish.add(head);
    const snout=new THREE.Mesh(new THREE.ConeGeometry(.19,.5,5),bodyMat);snout.rotation.z=Math.PI/2;snout.position.set(-3.42,.03,0);snout.scale.z=.55;fish.add(snout);
    const eye=new THREE.Mesh(new THREE.SphereGeometry(.09,24,24),new THREE.MeshPhysicalMaterial({color:0x020407,roughness:.03,clearcoat:1}));eye.position.set(-3.18,.16,.13);fish.add(eye);
    const eyeRing=new THREE.Mesh(new THREE.TorusGeometry(.105,.018,12,30),darkMat);eyeRing.position.set(-3.18,.16,.135);eyeRing.rotation.y=Math.PI/2;fish.add(eyeRing);

    const dorsalShape=new THREE.Shape();
    dorsalShape.moveTo(-2.72,.27);dorsalShape.bezierCurveTo(-1.4,.55,.5,.48,2.25,.14);dorsalShape.lineTo(2.34,.08);dorsalShape.bezierCurveTo(.6,.22,-1.4,.25,-2.72,.20);dorsalShape.closePath();
    const dorsal=new THREE.Mesh(new THREE.ShapeGeometry(dorsalShape),finMat);dorsal.position.z=-.01;fish.add(dorsal);
    const tail=new THREE.Mesh(new THREE.PlaneGeometry(.55,.18),finMat);tail.position.set(2.96,-.55,-.12);tail.rotation.z=-.35;fish.add(tail);

    const mouth=new THREE.Mesh(new THREE.BoxGeometry(.36,.025,.17),darkMat);mouth.position.set(-3.40,-.07,.02);mouth.rotation.z=-.06;fish.add(mouth);

    let down=false,lastX=0,lastY=0,targetY=-.1,targetX=.03,rotY=-.1,rotX=.03;
    const downFn=(e:PointerEvent)=>{down=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture?.(e.pointerId)};
    const moveFn=(e:PointerEvent)=>{if(!down)return;targetY+=(e.clientX-lastX)*.009;targetX+=(e.clientY-lastY)*.005;targetX=Math.max(-.65,Math.min(.65,targetX));lastX=e.clientX;lastY=e.clientY};
    const upFn=()=>{down=false};
    renderer.domElement.addEventListener('pointerdown',downFn);window.addEventListener('pointermove',moveFn);window.addEventListener('pointerup',upFn);

    const resize=()=>{const w=Math.max(el.clientWidth,320),h=Math.max(el.clientHeight,280);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
    const ro=new ResizeObserver(resize);ro.observe(el);resize();
    let raf=0;const tick=()=>{rotY+=(targetY-rotY)*.08;rotX+=(targetX-rotX)*.08;fish.rotation.y=rotY;fish.rotation.x=rotX;renderer.render(scene,camera);raf=requestAnimationFrame(tick)};tick();

    return()=>{cancelAnimationFrame(raf);ro.disconnect();window.removeEventListener('pointermove',moveFn);window.removeEventListener('pointerup',upFn);renderer.dispose();renderer.domElement.remove()};
  },[]);

  return <div ref={ref} className="fishViewer" style={{width:'100%',height:'100%',minHeight:300,background:'transparent'}}><div className="viewerBadge">LIGHT 3D</div><div className="viewerHelp">↔ ドラッグして360°観察</div></div>
}
