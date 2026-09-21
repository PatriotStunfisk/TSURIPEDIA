const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {coastReviewEntries: entries}=require('../lib/fishing-map-coast-review-20260921.ts');
const {fishingMapEntries,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {getMethod}=require('../lib/method-registry.ts');
const {getFishByName}=require('../lib/fish-registry.ts');
const ids=new Set(entries.map(e=>e.slug));
test('coastal batch adds 200 distinct locations without duplicate or coordinate validation regressions',()=>{
 assert.equal(ids.size,200);assert.equal(fishingMapEntries.filter(e=>ids.has(e.slug)).length,200);
 assert.equal(new Set(entries.map(e=>e.prefecture)).size,37);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(i=>i.slugs.some(s=>ids.has(s))),[]);
 for(const e of entries){assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);assert.ok(e.sources.some(s=>s.url.startsWith('https://maps.gsi.go.jp/')));assert.ok(e.sources.some(s=>/tsuriba.info|turihiroba.com/.test(s.url)));}
});
test('new shorelines connect to existing fish and methods and static sharing images',()=>{
 const manifest=require('../lib/sharing-images.json');
 for(const e of entries){
  for(const id of e.methodSlugs){assert.ok(getMethod(id),id);assert.ok(getSpotsForMethod(id).some(s=>s.slug===e.slug));}
  for(const name of e.fish){const f=getFishByName(name);if(f)assert.ok(getSpotsForFish(f.slug).some(s=>s.slug===e.slug));}
  const image=manifest[`/spots/${e.slug}`];assert.ok(image,e.slug);assert.ok(fs.existsSync(path.join(root,'public',image)));
 }
});
test('casting restrictions and seasonal squid closure are retained in published data',()=>{
 for(const id of ['shore-review-194','shore-review-2330','shore-review-753']){
  const e=fishingMapEntries.find(x=>x.slug===id);assert.match(e.caution.join(''),/投げ釣り.*禁止/);assert.deepEqual(e.methodSlugs,['uki']);
 }
 const squid=fishingMapEntries.find(e=>e.slug==='shore-review-91');assert.match(squid.season,/4〜9月.*禁止/);
 for(const e of entries.filter(x=>x.prefecture==='熊本県'))assert.match(e.caution.join(''),/土砂まき餌/);
 assert.ok(!entries.some(e=>e.name.includes('メガフロート')));
});
