const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {coastalNextEntries}=require('../lib/fishing-map-coastal-next.ts');
const {coastalNextFieldGuides}=require('../lib/spot-field-guides-coastal-next.ts');
const {spotFieldGuides}=require('../lib/spot-field-guides.ts');
const {fishingMapEntries,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {getFishByName}=require('../lib/fish-registry.ts');
const {getMethod}=require('../lib/method-registry.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {getShoreMethodPlans}=require('../lib/spot-planning.ts');
const ids=new Set(coastalNextEntries.map(e=>e.slug));
test('200 coastal additions retain sources, reviewed coordinates and useful detail advice',()=>{
 assert.equal(ids.size,200);assert.equal(new Set(coastalNextEntries.map(e=>e.prefecture)).size,33);
 assert.equal(fishingMapEntries.filter(e=>ids.has(e.slug)).length,200);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(x=>x.slugs.some(id=>ids.has(id))),[]);
 for(const e of coastalNextEntries){
  assert.equal(e.type,'spot');assert.ok(e.note.length>40,e.slug);
  assert.ok(e.sources.some(s=>s.url.startsWith('https://maps.gsi.go.jp/')));
  assert.ok(e.sources.some(s=>s.url.includes('turihiroba.com/')));
  assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);
  assert.ok(e.fish.length>0&&e.methodSlugs.length>0,e.slug);
  assert.ok(spotFieldGuides[e.slug].approach[0].length>35,e.slug);
 }
});
test('new fish/method links and static sharing images resolve through the existing registries',()=>{
 const manifest=require('../lib/sharing-images.json');
 for(const e of coastalNextEntries){
  for(const slug of e.methodSlugs){assert.ok(getMethod(slug),slug);assert.ok(getSpotsForMethod(slug).some(s=>s.slug===e.slug));}
  for(const name of e.fish){const f=getFishByName(name);if(f)assert.ok(getSpotsForFish(f.slug).some(s=>s.slug===e.slug));else assert.ok(['カレイ','シログチ','キビレ','ウミタナゴ','ホッケ','チカ'].includes(name),name);}
  const image=manifest[`/spots/${e.slug}`];assert.ok(image,e.slug);assert.ok(fs.existsSync(path.join(root,'public',image)));
 }
});
test('48 existing locations gain two practical steps without replacing their original descriptions',()=>{
 const existing=Object.entries(coastalNextFieldGuides).filter(([id])=>!ids.has(id));assert.equal(existing.length,48);
 for(const [id,guide] of existing){assert.ok(fishingMapEntries.some(s=>s.slug===id));assert.ok(guide.features.length);assert.equal(guide.approach.length,2);assert.ok(guide.beforeYouGo.length);for(const key of Object.keys(guide))assert.deepEqual(spotFieldGuides[id][key],guide[key]);}
});
test('coastal classifications do not turn ordinary parks into sea fishing parks or beach fishing into sabiki',()=>{
 const n=name=>coastalNextEntries.find(e=>e.name===name);
 assert.equal(n('シーロード八幡浜').primaryType,'sea-park');assert.equal(n('シーロード八幡浜').terrain,'park');
 assert.match(n('シーロード八幡浜').positionNote,/桟橋/);assert.match(n('シーロード八幡浜').caution.join(''),/餌・氷/);
 assert.equal(n('日長川河口').primaryType,'estuary');assert.match(n('日長川河口').positionNote,/河口/);
 assert.equal(n('月見ヶ丘海浜公園').primaryType,'pier');
 for(const e of coastalNextEntries.filter(e=>e.primaryType==='beach')){assert.ok(!e.methodSlugs.includes('sabiki'));assert.ok(!getShoreMethodPlans(e).some(m=>m.slug==='sabiki'));}
 for(const e of coastalNextEntries.filter(e=>e.prefecture==='青森県')){assert.ok(!e.methodSlugs.includes('sabiki'));assert.match(e.caution.join(''),/まき餌/);}
 assert.ok(!coastalNextEntries.some(e=>e.name.includes('三国突堤')));
});
