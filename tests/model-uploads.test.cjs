const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
test('uploaded aliases retain exact case and canonical model files take precedence',()=>{
 const {getSpeciesModelSrc}=require('../lib/fish-media.ts');
 const dir=fs.mkdtempSync(path.join(require('node:os').tmpdir(),'uolink-alias-'));
 try{fs.mkdirSync(path.join(dir,'models'));fs.writeFileSync(path.join(dir,'models/kurodai.glb'),'test');assert.equal(getSpeciesModelSrc('chinu',dir),'/models/kurodai.glb');fs.writeFileSync(path.join(dir,'models/chinu.glb'),'test');assert.equal(getSpeciesModelSrc('chinu',dir),'/models/chinu.glb');assert.equal(getSpeciesModelSrc('iwashi',dir),undefined);fs.writeFileSync(path.join(dir,'models/maiwashi.glb'),'test');assert.equal(getSpeciesModelSrc('iwashi',dir),'/models/maiwashi.glb');}finally{fs.rmSync(dir,{recursive:true});}
});
test('calibration filtering cannot affect the established seven or unknown models',()=>{
 const {modelCalibrationNodes}=require('../lib/model-presentation.ts');
 assert.deepEqual(modelCalibrationNodes('/models/suzuki.glb'),['Cube_2']);
 for(const slug of ['tachiuo','aji','madai','buri','kisu','kasago','saba','unknown','amago'])assert.deepEqual(modelCalibrationNodes(`/models/${slug}.glb`),[]);
 const {modelInitialYaw}=require('../lib/model-presentation.ts');assert.equal(modelInitialYaw('/models/nijimasu.glb'),-Math.PI/2);assert.equal(modelInitialYaw('/models/tachiuo.glb'),0);
});
