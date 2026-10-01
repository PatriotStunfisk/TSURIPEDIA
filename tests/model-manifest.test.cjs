const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const {createHash}=require('node:crypto');
const {collectModelFiles,writeModelManifest}=require('../scripts/generate-model-manifest.cjs');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
const {getSpeciesModelSrc}=require('../lib/fish-media.ts');
const root=path.resolve(__dirname,'..');

test('the committed manifest is small and matches every usable model in public',()=>{
  const manifest=require('../lib/generated/model-files.json');
  assert.deepEqual(manifest,collectModelFiles(path.join(root,'public')));
  assert.ok(fs.statSync(path.join(root,'lib/generated/model-files.json')).size<8192);
  for(const name of manifest)assert.equal(getSpeciesModelSrc(name.slice(0,-4)),`/models/${name}`);
  for(const slug of ['../aji','Upper','aji/glb','constructor','missing-model'])assert.equal(getSpeciesModelSrc(slug),undefined);
});

test('rebuilding the manifest picks up additions, removals and corrected isaki without copying assets',()=>{
  const project=fs.mkdtempSync(path.join(os.tmpdir(),'uolink-manifest-'));
  try{
    assert.deepEqual(writeModelManifest(project),[]);
    const models=path.join(project,'public/models');fs.mkdirSync(models,{recursive:true});
    fs.writeFileSync(path.join(models,'kurodai.glb'),'test model');
    fs.writeFileSync(path.join(models,'Upper.glb'),'case mismatch');
    fs.writeFileSync(path.join(models,'not-model.png'),'image');
    fs.mkdirSync(path.join(models,'directory.glb'));
    const first=writeModelManifest(project);
    assert.deepEqual(first,['kurodai.glb']);assert.equal(getSpeciesModelSrc('chinu',first),'/models/kurodai.glb');
    fs.writeFileSync(path.join(models,'chinu.glb'),'canonical model');
    fs.writeFileSync(path.join(models,'isaki.glb'),'corrected model');
    const second=writeModelManifest(project);
    assert.equal(getSpeciesModelSrc('chinu',second),'/models/chinu.glb');
    assert.equal(getSpeciesModelSrc('isaki',second),'/models/isaki.glb');
    fs.unlinkSync(path.join(models,'chinu.glb'));
    assert.equal(getSpeciesModelSrc('chinu',writeModelManifest(project)),'/models/kurodai.glb');
    const output=path.join(project,'lib/generated/model-files.json');const before=fs.statSync(output).mtimeMs;
    writeModelManifest(project);assert.equal(fs.statSync(output).mtimeMs,before,'unchanged manifests must not churn files');
    assert.ok(fs.statSync(output).size<100);
  }finally{fs.rmSync(project,{recursive:true,force:true});}
});

test('all actual models preserve the legacy availability and canonical-over-alias behavior',()=>{
  const aliases={chinu:'kurodai',iwashi:'maiwashi',haze:'mahaze',houbo:'houbou',akakamas:'akakamasu',katakuchi:'katakuchiiwashi',urume:'urumeiwashi'};
  const directory=path.join(root,'public/models'),names=fs.readdirSync(directory);
  for(const slug of new Set([...names.filter(n=>n.endsWith('.glb')).map(n=>n.slice(0,-4)),...Object.keys(aliases),'isaki','missing-model'])){
    let filename=[`${slug}.glb`,...(Object.hasOwn(aliases,slug)?[`${aliases[slug]}.glb`]:[])].find(n=>names.includes(n));
    if(slug==='isaki'&&filename&&createHash('sha256').update(fs.readFileSync(path.join(directory,filename))).digest('hex')==='bb8d362c78fe58ba628ad760cf6f1ef88bcf7e9b8dd1303e88b4e34772171575')filename=undefined;
    assert.equal(getSpeciesModelSrc(slug),filename?`/models/${filename}`:undefined,slug);
  }
});
