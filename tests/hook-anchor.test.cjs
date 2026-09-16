const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
const {containedAnchor,fightCameraDistance}=require('../lib/quest/hook-anchor.ts');
const {defineFishSpecies}=require('../lib/fish-species/define.ts');
test('fight camera contains the fish at desktop and narrow aspect ratios',()=>{
 for(const size of [{x:3.75,y:.4,z:.2},{x:2,y:3.75,z:1}])for(const aspect of [.7,1.2,4]){
  const d=fightCameraDistance(size,aspect,32)-size.z/2,h=d*Math.tan(16*Math.PI/180);
  assert.ok(h>=size.y/2);assert.ok(h*aspect>=size.x/2);
 }
});
test('mouth positions account for vertical and horizontal contain letterboxing',()=>{
 assert.deepEqual(containedAnchor(200,200,400,100,{x:.1,y:.5}),{x:20,y:100});
 assert.deepEqual(containedAnchor(200,100,100,200,{x:.1,y:.25}),{x:80,y:25});
 assert.deepEqual(containedAnchor(300,150,600,300,{x:.5,y:.5}),{x:150,y:75});
});
test('invalid anchor coordinates are rejected before entering the renderer',()=>{
 for(const value of [-.1,1.1,NaN,Infinity])assert.throws(()=>defineFishSpecies({base:{slug:'test'},quest:{hook:{mouthAnchor:{x:value,y:.5}}}}),/hook anchor/);
 assert.throws(()=>defineFishSpecies({base:{slug:'test'},quest:{hook:{modelAnchor:{x:.1,y:.5,z:2}}}}),/hook anchor/);
});

test('approach brings the rendered mouth to stationary bait across species and viewports',()=>{
 const {approachFraction,contactOffset,easeOffset}=require('../lib/quest/hook-anchor.ts');
 for(const style of ['standard','sabiki','eging','kawahagi']){
  assert.equal(approachFraction(0,style),0);assert.equal(approachFraction(100,style),1);
  if(['eging','kawahagi'].includes(style))assert.equal(approachFraction(65,style),1);
  for(const anchor of [{x:40,y:150},{x:330,y:30},{x:180,y:400}]){
   const bait={x:160,y:220};let offset={x:0,y:0};
   for(let n=0;n<90;n++){const mouth={x:anchor.x+offset.x,y:anchor.y+offset.y};offset=easeOffset(offset,contactOffset(mouth,bait,offset,1),16);}
   assert.ok(Math.abs(anchor.x+offset.x-bait.x)<.01);assert.ok(Math.abs(anchor.y+offset.y-bait.y)<.01);
   const release=easeOffset(offset,{x:0,y:0},16);assert.ok(Math.abs(release.x)<Math.abs(offset.x));
  }
 }
});
