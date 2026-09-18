const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {kansaiNationalEntries:added}=require('../lib/fishing-map-kansai-national.ts');
const {fishingMapEntries:all,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {getMethod}=require('../lib/method-registry.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const ids=new Set(added.map(e=>e.slug));
test('302 researched locations extend the existing registry beyond 2000 without duplicate IDs',()=>{
 assert.equal(added.length,302);assert.equal(ids.size,302);assert.ok(all.length>=2000);
 assert.equal(added.filter(e=>['大阪府','兵庫県','京都府','和歌山県'].includes(e.prefecture)).length,30);
 assert.equal(added.filter(e=>e.prefecture==='大阪府').length,8);
 const issues=validateFishingMap(all).filter(x=>x.slugs.some(id=>ids.has(id)));
 // 厨港 and its independently registered boat operator share a quay; this is not a duplicate spot.
 assert.deepEqual(issues.map(i=>({code:i.code,slugs:i.slugs})),[{code:'same-coordinate',slugs:['shore-fukuikuriyakou','echizen-fukumaru']}]);
 for(const e of added){
  assert.ok(e.sources.length>=2,e.slug);assert.ok(e.sources.some(s=>s.url.includes('maps.gsi.go.jp')));
  assert.ok(e.note.length>40,e.slug);assert.ok(e.caution.length,e.slug);
  for(const m of e.methodSlugs){assert.ok(getMethod(m),m);assert.ok(getSpotsForMethod(m).some(s=>s.slug===e.slug));}
 }
});
test('new location sharing cards exist and Kansai destinations have practical detail guidance',()=>{
 const manifest=require('../lib/sharing-images.json'),{spotFieldGuides}=require('../lib/spot-field-guides.ts');
 for(const e of added){const image=manifest[`/spots/${e.slug}`];assert.ok(image,e.slug);assert.ok(fs.existsSync(path.join(root,'public',image)));}
 for(const id of ['yodogawa-yagura-ryokuchi','wakayama-kousuimaru','nanko-fishing-park','tottopark-kojima']){
  assert.ok(all.some(e=>e.slug===id));assert.equal(spotFieldGuides[id].approach.length,2);
 }
});
test('reopened Nanko is discoverable while unresolved restricted candidates are not introduced',()=>{
 const n=all.find(e=>e.slug==='nanko-fishing-park');assert.ok(!n.closed);assert.equal(n.verifiedAt,'2026-09-18');
 assert.ok(getSpotsForFish('aji').some(e=>e.slug===n.slug));assert.match(n.caution.join(''),/投げ釣りは禁止/);
 for(const name of ['音海大波止','丸山海釣り公園','東宮浜漁港','松川浦漁港','津名港'])assert.ok(!added.some(e=>e.name===name),name);
 const y=added.find(e=>e.slug==='yodogawa-yagura-ryokuchi');assert.equal(y.parking,false);assert.equal(y.toilet,true);assert.equal(y.primaryType,'estuary');
 const b=added.find(e=>e.slug==='wakayama-kousuimaru');assert.equal(b.type,'boat');assert.ok(!b.methodSlugs.includes('otoshikomi')); // Shore chinu is a different method.
});
test('corrected offshore facilities do not regress to address-centroid coordinates',()=>{
 const expected={'tottopark-kojima':[34.317149,135.097901],'toyohama-pier':[34.70295,136.93466],'nanko-fishing-park':[34.614491,135.401795]};
 for(const [id,[lat,lng]]of Object.entries(expected)){
  const e=all.find(e=>e.slug===id);assert.equal(e.lat,lat);assert.equal(e.lng,lng);
  assert.ok(!e.positionNote.includes('町域代表点'));assert.ok(e.sources.some(s=>s.url.includes('maps.gsi.go.jp')));
 }
});
