const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
test('uploaded aliases retain exact case and canonical model files take precedence',()=>{
 const {getSpeciesModelSrc}=require('../lib/fish-media.ts');
 const dir=fs.mkdtempSync(path.join(require('node:os').tmpdir(),'uolink-alias-'));
 try{fs.mkdirSync(path.join(dir,'models'));fs.writeFileSync(path.join(dir,'models/kurodai.glb'),'test');assert.equal(getSpeciesModelSrc('chinu',dir),'/models/kurodai.glb');fs.writeFileSync(path.join(dir,'models/chinu.glb'),'test');assert.equal(getSpeciesModelSrc('chinu',dir),'/models/chinu.glb');assert.equal(getSpeciesModelSrc('iwashi',dir),undefined);fs.writeFileSync(path.join(dir,'models/maiwashi.glb'),'test');assert.equal(getSpeciesModelSrc('iwashi',dir),'/models/maiwashi.glb');}finally{fs.rmSync(dir,{recursive:true});}
});
test('calibration filtering stays limited to visually verified models',()=>{
 const {modelCalibrationNodes}=require('../lib/model-presentation.ts');
 assert.deepEqual(modelCalibrationNodes('/models/suzuki.glb'),['Cube_2']);
 assert.deepEqual(modelCalibrationNodes('/models/aji.glb'),['Cube_2']);
 const bytes=fs.readFileSync(path.resolve(__dirname,'../public/models/aji.glb'));const model=JSON.parse(bytes.toString('utf8',20,20+bytes.readUInt32LE(12)));
 const cube=model.nodes.find(n=>n.name==='Cube_2');assert.ok(cube?.children.length);
 const mesh=model.meshes[model.nodes[cube.children[0]].mesh];const positions=model.accessors[mesh.primitives[0].attributes.POSITION];assert.deepEqual(positions.min,[-1,-1,-1]);assert.deepEqual(positions.max,[1,1,1]);
 for(const slug of ['unknown','amago','nijimasu'])assert.deepEqual(modelCalibrationNodes(`/models/${slug}.glb`),[]);
 const {modelInitialYaw}=require('../lib/model-presentation.ts');assert.equal(modelInitialYaw('/models/nijimasu.glb'),-Math.PI/2);assert.equal(modelInitialYaw('/models/tachiuo.glb'),0);
});

const root=path.resolve(__dirname,'..');
test('uploaded coastal models resolve with their exact original filenames',()=>{
 const {getSpeciesModelSrc}=require('../lib/fish-media.ts');
 for(const [slug,file] of Object.entries({mejina:'mejina',haze:'mahaze',ainame:'ainame',kijihata:'kijihata',akahata:'akahata',oomonhata:'oomonhata',houbo:'houbou',itoyoridai:'itoyoridai',kouika:'kouika',yariika:'yariika'})){
  assert.equal(getSpeciesModelSrc(slug),`/models/${file}.glb`);
  const bytes=fs.readFileSync(path.join(root,'public/models',`${file}.glb`));assert.equal(bytes.toString('utf8',0,4),'glTF');assert.equal(bytes.readUInt32LE(4),2);assert.equal(bytes.readUInt32LE(8),bytes.length);
 }
});

test('verified model presentation hides only calibration nodes and starts front-facing uploads side-on',()=>{
 const {modelCalibrationNodes,modelInitialYaw}=require('../lib/model-presentation.ts');
 assert.deepEqual(modelCalibrationNodes('/models/mahaze.glb'),['Cube_2']);assert.deepEqual(modelCalibrationNodes('/models/unknown.glb'),[]);
 for(const slug of ['ainame','oomonhata','yariika'])assert.equal(modelInitialYaw(`/models/${slug}.glb`),-Math.PI/2);
 assert.equal(modelInitialYaw('/models/tachiuo.glb'),0);
});

test('every allowlisted cube is a separate unit cube; fish meshes stay visible',()=>{
 const {modelCalibrationNodes,getModelCalibrationHelpers}=require('../lib/model-presentation.ts');
 const THREE=require('three');let count=0;
 for(const file of fs.readdirSync(path.join(root,'public/models')).filter(f=>f.endsWith('.glb'))){
  const names=modelCalibrationNodes('/models/'+file);if(!names.length)continue;count++;
  const b=fs.readFileSync(path.join(root,'public/models',file)),j=JSON.parse(b.toString('utf8',20,20+b.readUInt32LE(12)));
  const node=j.nodes.find(n=>n.name===names[0]);assert.ok(node?.children.length===1,file);
  const child=j.nodes[node.children[0]];assert.equal(child.skin,undefined,file);
  const mesh=j.meshes[child.mesh];assert.equal(mesh.primitives.length,1,file);
  const positions=j.accessors[mesh.primitives[0].attributes.POSITION];assert.deepEqual(positions.min,[-1,-1,-1],file);assert.deepEqual(positions.max,[1,1,1],file);assert.ok([14,24].includes(positions.count),file);
 }
 assert.equal(count,44);
 const scene=new THREE.Group(),helper=new THREE.Group();helper.name='Cube_2';helper.add(new THREE.Mesh(new THREE.BoxGeometry(2,2,2),new THREE.MeshBasicMaterial()));scene.add(helper);
 assert.deepEqual(getModelCalibrationHelpers(scene,'/models/aji.glb'),[helper]);
 assert.deepEqual(getModelCalibrationHelpers(scene,'/models/amago.glb'),[]);
 helper.children[0].geometry=new THREE.SphereGeometry(1);
 assert.deepEqual(getModelCalibrationHelpers(scene,'/models/aji.glb'),[],'same-name noncube must stay');
});

test('all 27 September uploads are valid GLB assets and resolve from canonical species',()=>{
 const {getSpeciesModelSrc}=require('../lib/fish-media.ts');
 const aliases={akakamasu:'akakamas',katakuchiiwashi:'katakuchi',urumeiwashi:'urume'};
 for(const name of ["aigo", "akaamadai", "akaei", "akakamasu", "akamutsu", "bora", "gomasaba", "gonzui", "haokoze", "ishidai", "ishigarei", "katakuchiiwashi", "kensakiika", "kidai", "kinmedai", "konoshiro", "kuromutsu", "kurosoi", "kusafugu", "makogarei", "medai", "minokasago", "oniokoze", "sayori", "shiira", "umazurahagi", "urumeiwashi"]){
  const file=`/models/${name}.glb`,b=fs.readFileSync(path.join(root,'public',file));
  assert.equal(b.toString('utf8',0,4),'glTF');assert.equal(b.readUInt32LE(4),2);assert.equal(b.readUInt32LE(8),b.length);
  const j=JSON.parse(b.toString('utf8',20,20+b.readUInt32LE(12)));assert.ok(j.meshes.length);assert.ok(j.buffers.every(b=>!b.uri));assert.ok((j.images??[]).every(i=>!i.uri));
  assert.equal(getSpeciesModelSrc(aliases[name]??name),file);
 }
});

test('new front-facing and flatfish uploads start in readable orientations',()=>{const {modelInitialYaw,modelInitialPitch}=require('../lib/model-presentation.ts');for(const f of ['aigo','akamutsu','gomasaba','gonzui','haokoze','katakuchiiwashi','kinmedai','kurosoi','medai','shiira','umazurahagi'])assert.equal(modelInitialYaw(`/models/${f}.glb`),-Math.PI/2);for(const f of ['ishigarei','makogarei'])assert.equal(modelInitialPitch(`/models/${f}.glb`),Math.PI/2);assert.equal(modelInitialPitch('/models/aji.glb'),0);});
