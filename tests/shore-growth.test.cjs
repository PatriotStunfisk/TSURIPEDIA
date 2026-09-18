const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {shoreMapGrowth}=require('../lib/fishing-map-shore-growth.ts');
const {fishingMapEntries,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {shoreFieldGuides}=require('../lib/spot-field-guides-growth.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {getMethod}=require('../lib/method-registry.ts');
const {getFishByName}=require('../lib/fish-registry.ts');
const {getShoreMethodPlans}=require('../lib/spot-planning.ts');
const ids=new Set(shoreMapGrowth.map(x=>x.slug));
test('200 researched locations are distinct and introduce no map validation warnings',()=>{
 assert.equal(ids.size,200);assert.equal(fishingMapEntries.filter(x=>ids.has(x.slug)).length,200);
 assert.equal(new Set(shoreMapGrowth.map(x=>x.prefecture)).size,21);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(x=>x.slugs.some(s=>ids.has(s))),[]);
 assert.equal(shoreMapGrowth.filter(x=>x.primaryType==='beach').length,28);
 for(const e of shoreMapGrowth){
  assert.equal(e.type,'spot');assert.ok(e.note.length>40,e.slug);assert.ok(e.fish.length&&e.methodSlugs.length,e.slug);
  assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);
  assert.ok(e.sources.some(s=>s.url.startsWith('https://maps.gsi.go.jp/')));
  assert.ok(e.sources.some(s=>s.url.includes('turihiroba.com/')));
  assert.ok(shoreFieldGuides[e.slug].approach[0].length>25);
 }
});
test('technique, fish, sharing and shoreline-specific guidance use existing registries',()=>{
 const manifest=require('../lib/sharing-images.json');
 for(const e of shoreMapGrowth){
  for(const id of e.methodSlugs){assert.ok(getMethod(id),id);assert.ok(getSpotsForMethod(id).some(s=>s.slug===e.slug));}
  for(const name of e.fish){const f=getFishByName(name);if(f)assert.ok(getSpotsForFish(f.slug).some(s=>s.slug===e.slug));}
  const image=manifest[`/spots/${e.slug}`];assert.ok(image,e.slug);assert.ok(fs.existsSync(path.join(root,'public',image)));
 }
 const beach=shoreMapGrowth.find(e=>e.name==='島尾海岸');
 assert.ok(getShoreMethodPlans(beach).some(x=>x.slug==='surf-lure'));
 assert.ok(!getShoreMethodPlans(beach).some(x=>x.slug==='sabiki'));
});
test('specific access and bait restrictions remain attached to the affected places',()=>{
 const n=s=>shoreMapGrowth.find(e=>e.name===s);
 assert.match(n('能登原港（阿伏兎港）').caution.join(''),/フェンス/);
 assert.match(n('向島・干汐漁港').caution.join(''),/電線/);
 assert.match(n('琴引浜').caution.join(''),/喫煙/);
 for(const name of ['今別漁港','十三湊漁港','広戸漁港','深浦港','横磯漁港']){
  assert.ok(!n(name).methodSlugs.includes('sabiki'));assert.match(n(name).caution.join(''),/まき餌/);
 }
 assert.ok(!shoreMapGrowth.some(e=>/音海大波止|野崎港|富戸港|佐須漁港/.test(e.name)));
});
