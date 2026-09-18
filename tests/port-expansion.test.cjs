const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {portMapExpansion}=require('../lib/fishing-map-port-expansion.ts');
const {fishingMapEntries,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {getMethod}=require('../lib/method-registry.ts');
const {getFishByName}=require('../lib/fish-registry.ts');
const ids=new Set(portMapExpansion.map(x=>x.slug));
test('port expansion publishes 190 distinct researched shoreline locations without new validation issues',()=>{
 assert.equal(ids.size,190);assert.equal(fishingMapEntries.filter(e=>ids.has(e.slug)).length,190);
 assert.equal(new Set(portMapExpansion.map(e=>e.prefecture)).size,15);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(x=>x.slugs.some(s=>ids.has(s))),[]);
 for(const e of portMapExpansion){assert.equal(e.type,'spot');assert.ok(['port','pier'].includes(e.primaryType));assert.ok(e.fish.length);assert.ok(e.note.length>25);assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);assert.equal(e.verifiedAt,'2026-09-18');assert.ok(e.sources.some(s=>s.url.startsWith('https://maps.gsi.go.jp/')));assert.ok(e.sources.some(s=>s.url.includes('turihiroba.com/')));}
});
test('new ports connect to real fish and method pages through the shared registries',()=>{
 for(const e of portMapExpansion){
  for(const id of e.methodSlugs){assert.ok(getMethod(id),`${e.slug}: ${id}`);assert.ok(getSpotsForMethod(id).some(s=>s.slug===e.slug));}
  for(const name of e.fish){const f=getFishByName(name);if(f)assert.ok(getSpotsForFish(f.slug).some(s=>s.slug===e.slug));}
 }
});
test('partial restrictions and local fishing rules survive conversion to public entries',()=>{
 const n=s=>portMapExpansion.find(e=>e.name===s);
 assert.match(n('中山漁港').caution.join(''),/波止は立入制限/);
 assert.match(n('田之尻漁港').note,/車止め/);
 assert.match(n('鹿島・宮ノ口港').caution.join(''),/電線/);
 for(const e of portMapExpansion.filter(e=>e.prefecture==='熊本県'))assert.match(e.caution.join(''),/土砂まき餌/);
 assert.ok(!portMapExpansion.some(e=>/和歌山北港魚つり公園|清水港・鉄道岸壁|清水港・江尻埠頭/.test(e.name)));
 assert.ok(!portMapExpansion.some(e=>e.name==='能美島・小田漁港'));
});
test('each new spot has a static share card for crawlers',()=>{
 const manifest=require('../lib/sharing-images.json');
 for(const id of ids){const image=manifest[`/spots/${id}`];assert.ok(image,id);assert.ok(fs.existsSync(path.join(root,'public',image)));}
});
