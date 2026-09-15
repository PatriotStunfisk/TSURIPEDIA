const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
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
