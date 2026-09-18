const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {harborMapGrowth}=require('../lib/fishing-map-harbor-growth.ts');
const {fishingMapEntries,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {getMethod}=require('../lib/method-registry.ts');
const {getFishByName}=require('../lib/fish-registry.ts');
const {pageSharing}=require('../lib/page-sharing.ts');
const ids=new Set(harborMapGrowth.map(x=>x.slug));
test('shore expansion adds independently named harbors, with no boat operators or unresolved duplicate pins',()=>{
 assert.equal(harborMapGrowth.length,189);
 assert.equal(fishingMapEntries.filter(x=>ids.has(x.slug)).length,189);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(x=>x.slugs.some(s=>ids.has(s))),[]);
 for(const e of harborMapGrowth){assert.equal(e.type,'spot');assert.ok(['port','pier'].includes(e.primaryType));assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);assert.equal(e.verifiedAt,'2026-09-18');assert.ok(e.sources.some(s=>s.url.startsWith('https://maps.gsi.go.jp/')));assert.ok(e.sources.some(s=>s.url.includes('turihiroba.com/')));assert.ok(e.note.length>45);}
});
test('harbor fish and method routes connect through the shared registries',()=>{
 for(const e of harborMapGrowth){
  for(const id of e.methodSlugs){assert.ok(getMethod(id),`${e.slug}: ${id}`);assert.ok(getSpotsForMethod(id).some(s=>s.slug===e.slug));}
  for(const name of e.fish){const f=getFishByName(name);if(f)assert.ok(getSpotsForFish(f.slug).some(s=>s.slug===e.slug));}
 }
 const bridge=fishingMapEntries.find(x=>x.slug==='harbor-hashidate-kaga');
 assert.equal(bridge.prefecture,'石川県');assert.ok(bridge.lat>36.35&&bridge.lat<36.355&&bridge.lng>136.31&&bridge.lng<136.316);
 assert.ok(bridge.fishSlugs.includes('aji'));assert.ok(bridge.methodSlugs.includes('sabiki'));
});
test('partial restrictions stay explicit and known closed candidates are not newly recommended',()=>{
 const n=s=>harborMapGrowth.find(e=>e.name.startsWith(s));
 assert.match(n('岩瀬漁港').note,/立入禁止/);assert.match(n('入善漁港').caution.join(''),/外側の堤防は立入禁止/);
 assert.match(n('白杉漁港').note,/立入制限/);assert.match(n('小杉漁港').caution.join(''),/一般車両進入禁止/);
 assert.ok(!harborMapGrowth.some(e=>/長田港|女良漁港|宮崎漁港|滑川漁港/.test(e.name)));
 assert.ok(!harborMapGrowth.some(e=>e.prefecture==='山形県'));
 assert.deepEqual(n('岩瀬漁港').fish,['マアジ','サヨリ']);
});
test('every new harbor has a crawler-ready sharing asset',()=>{
 for(const e of harborMapGrowth){const sharing=pageSharing(`/spots/${e.slug}`,e.name,e.note);assert.ok(sharing);}
 const manifest=require('../lib/sharing-images.json');
 for(const id of ids){const image=manifest[`/spots/${id}`];assert.ok(image,id);assert.ok(fs.existsSync(path.join(root,'public',image)));}
});
