const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {rockReviewEntries:entries}=require('../lib/fishing-map-rock-review-20260924.ts');
const {fishingMapEntries,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {getMethod}=require('../lib/method-registry.ts');
const ids=new Set(entries.map(e=>e.slug));
test('reviewed rocks enter the shared map without new duplicate or coordinate warnings',()=>{
 assert.equal(ids.size,195);
 assert.equal(fishingMapEntries.filter(e=>ids.has(e.slug)).length,195);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(i=>i.slugs.some(s=>ids.has(s))),[]);
 for(const e of entries){
  assert.equal(e.primaryType,'rock');assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);
  assert.ok(e.sources.some(s=>s.url.startsWith('https://maps.gsi.go.jp/')));
  assert.ok(e.sources.some(s=>!s.url.includes('gsi.go.jp')));
  for(const id of e.methodSlugs){assert.ok(getMethod(id));assert.ok(getSpotsForMethod(id).some(s=>s.slug===e.slug));}
 }
});
test('rock sharing cards exist and fishing restrictions survive registry integration',()=>{
 const images=require('../lib/sharing-images.json');
 for(const e of entries){const image=images[`/spots/${e.slug}`];assert.ok(image,e.slug);assert.ok(fs.existsSync(path.join(root,'public',image)));}
 for(const id of [3003,3007]){const e=entries.find(e=>e.slug===`rock-review-${id}`);assert.match(e.caution.join(''),/撒き餌禁止/);assert.ok(!e.methodSlugs.includes('fukase'));}
 assert.match(entries.find(e=>e.slug==='rock-review-2038').caution.join(''),/夜釣り不可/);
 assert.match(entries.find(e=>e.slug==='rock-review-157').caution.join(''),/11月1日〜3月末/);
});
