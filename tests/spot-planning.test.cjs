const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {getShoreMethodPlans,getSpotDepartureChecks}=require('../lib/spot-planning.ts');
const {spotFieldGuides}=require('../lib/spot-field-guides.ts');
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');
const {getMethod}=require('../lib/method-registry.ts');
const spot=fishingMapEntries.find(x=>x.slug==='coast-hyougokasuminisikou');
test('technique advice respects place type, closure and registered methods',()=>{
 const plans=getShoreMethodPlans(spot);assert.equal(plans.length,3);
 for(const p of plans){assert.ok(spot.methodSlugs.includes(p.slug));assert.ok(getMethod(p.slug));assert.equal(p.steps.length,3);assert.ok(p.ifQuiet.length>20);}
 for(const override of [{closed:true},{type:'boat'},{type:'area'},{primaryType:'lake'},{methodSlugs:[]}])assert.deepEqual(getShoreMethodPlans({...spot,...override}),[]);
 const restricted=fishingMapEntries.find(x=>x.name==='乙浜港');assert.ok(!getShoreMethodPlans(restricted).some(x=>x.slug==='eging'));
});
test('departure checks distinguish unknown facilities from unavailable and available facilities',()=>{
 assert.match(getSpotDepartureChecks(spot).join(''),/駐車場は未確認/);
 assert.match(getSpotDepartureChecks({...spot,parking:false,toilet:false}).join(''),/駐車場なし/);
 assert.match(getSpotDepartureChecks({...spot,parking:true,toilet:true}).join(''),/利用時間/);
 assert.deepEqual(getSpotDepartureChecks({...spot,closed:true}),[]);
 assert.match(getSpotDepartureChecks({...spot,type:'boat'}).join(''),/集合港/);
});
test('place-specific guidance references real entries and preserves local restrictions',()=>{
 assert.ok(Object.keys(spotFieldGuides).length>=19);
 for(const [slug,g] of Object.entries(spotFieldGuides)){
  assert.ok(fishingMapEntries.some(x=>x.slug===slug),slug);
  for(const field of ['features','approach','beforeYouGo'])assert.ok(Array.isArray(g[field])&&g[field].every(x=>x.length>20));
  assert.ok(g.approach.length);
 }
 assert.match(spotFieldGuides['coast-tibaotohamakou'].beforeYouGo.join(''),/エギング制限/);
 assert.match(spotFieldGuides['coast-hirosimatadanoumikou'].beforeYouGo.join(''),/電線/);
});
test('researched guides carry dated sources and preserve current venue restrictions',()=>{
 const researched=require('../lib/spot-field-guides-researched.json');
 assert.equal(Object.keys(researched).length,40);
 for(const [slug,g] of Object.entries(researched)){
  assert.ok(fishingMapEntries.some(x=>x.slug===slug));
  assert.ok(g.features.length>=2&&g.approach.length>=3,slug);
  assert.match(g.reviewedAt,/^\d{4}-\d{2}-\d{2}$/);
  for(const source of g.sources)assert.equal(new URL(source.url).protocol,'https:');
 }
 assert.match(researched['regional-tanoura-port'].beforeYouGo.join(''),/浪早ビーチ.*魚釣り禁止/);
 assert.match(researched['wakasu-fishing'].features.join(''),/2025年8月31日.*営業を終了/);
 assert.match(researched['naruohama'].beforeYouGo.join(''),/ルアー釣りは禁止/);
 assert.match(researched['nanko-fishing-park'].features.join(''),/ルアー釣りは可能/);
 assert.equal(fishingMapEntries.find(x=>x.slug==='minamiawaji-megafloat').closed,true);
});

test('documented facilities are not rendered as absent',()=>{
 for(const id of ['naruohama','shimonoseki-fishing']){
  const spot=fishingMapEntries.find(x=>x.slug===id);
  assert.equal(spot.parking,true);assert.equal(spot.toilet,true);
 }
});
