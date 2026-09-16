import type {Object3D,Mesh} from 'three';
// Verified uploads contain a separate color-calibration cube, not fish anatomy.
// The 2026-09-16 batch was decoded to verify every corner before inclusion.
// Limit this rule to those exact assets; never guess from names in unrelated models.
const calibratedModels=new Set(['suzuki','kurodai','maiwashi','kanpachi','isaki','anago','ayu','magochi','akahata','houbou','itoyoridai','kijihata','kouika','mahaze','mejina','hirame','aji','kisu','kasago','buri','saba','madai','sawara','madako','kawahagi','tachiuo','aoriika','mebaru','akaamadai','akaei','akakamasu','bora','ishidai','ishigarei','kensakiika','kidai','konoshiro','kuromutsu','kusafugu','makogarei','minokasago','oniokoze','sayori','urumeiwashi'].map(slug=>`/models/${slug}.glb`));
export function modelCalibrationNodes(src:string):readonly string[]{return calibratedModels.has(src.split('?')[0])?['Cube_2']:[];}
// These visually checked uploads face the camera; begin with their side profile.
export function modelInitialYaw(src:string){return ['nijimasu','ainame','oomonhata','yariika','aigo','akamutsu','gomasaba','gonzui','haokoze','katakuchiiwashi','kinmedai','kurosoi','medai','shiira','umazurahagi'].some(slug=>src.split('?')[0]===`/models/${slug}.glb`)?-Math.PI/2:0;}

// A name alone is insufficient (amago's body and nijimasu's skeleton use cube/box names).
// Verified helper geometry is a unit cube: 14 or 24 corner vertices, no skin.
export function getModelCalibrationHelpers(root:Object3D,src:string):Object3D[]{
 return modelCalibrationNodes(src).flatMap(name=>{
  const node=root.getObjectByName(name);if(!node)return [];
  let meshes=0,valid=true;
  node.traverse(object=>{
   const mesh=object as Mesh;if(!mesh.isMesh)return;meshes++;
   const positions=mesh.geometry?.getAttribute('position');
   if('isSkinnedMesh' in mesh||!positions||![14,24].includes(positions.count)){valid=false;return;}
   for(let i=0;i<positions.count;i++)for(const value of [positions.getX(i),positions.getY(i),positions.getZ(i)])if(Math.abs(Math.abs(value)-1)>0.00001)valid=false;
  });
  return valid&&meshes===1?[node]:[];
 });
}
export function hideModelCalibrationHelpers(root:Object3D,src:string){
 for(const node of getModelCalibrationHelpers(root,src))node.visible=false;
}

// Flat-bodied uploads need a dorsal view to make their silhouette readable.
export function modelInitialPitch(src:string){const path=src.split('?')[0];return ['/models/ishigarei.glb','/models/makogarei.glb'].includes(path)?Math.PI/2:path==='/models/akaei.glb'?Math.PI/5:0;}
