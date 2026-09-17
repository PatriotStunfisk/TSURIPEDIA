const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {managedMapGrowth}=require('../lib/fishing-map-managed-growth.ts'),{fishingMapEntries,getSpotsForFish}=require('../lib/fishing-map-data.ts');
const {fieldQuestionGuides}=require('../lib/guide-articles-field-questions.ts'),{getGuide,getParentGuide}=require('../lib/all-guides.ts');
const {validateFishingMap}=require('../lib/map-validation.ts'),{matchesSpot}=require('../lib/spot-filters.ts');
test('100 distinct managed places have reference pins, source links and no duplicate nearby records',()=>{
 assert.equal(managedMapGrowth.length,100);assert.ok(new Set(managedMapGrowth.map(e=>e.prefecture)).size>=30);
 const ids=new Set(managedMapGrowth.map(e=>e.slug));assert.deepEqual(validateFishingMap(fishingMapEntries).filter(issue=>issue.slugs.some(s=>ids.has(s))),[]);
 for(const e of managedMapGrowth){assert.equal(e.type,'spot');assert.equal(e.primaryType,'fresh');assert.ok(e.lat&&e.lng&&e.positionNote);assert.equal(e.verifiedAt,'2026-09-17');assert.ok(e.sources.length>=2&&e.officialUrl);assert.ok(e.note.length>40&&e.tips.length>=2);assert.ok(e.guideSlugs.every(s=>getGuide(s)));assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);}
});
test('seasonal and unconfirmed reopening facilities are excluded from live MAP and fish recommendations',()=>{
 const closed=managedMapGrowth.filter(e=>e.closed);assert.ok(closed.length>=20);
 for(const e of closed){assert.ok(e.status);assert.equal(matchesSpot(e,{}),false);for(const fish of e.fishSlugs)assert.ok(!getSpotsForFish(fish).some(s=>s.slug===e.slug));}
 assert.ok(managedMapGrowth.some(e=>!e.closed&&matchesSpot(e,{})));
});
test('100 authored articles have actionable tables and steps, with complete parents for every quick question',()=>{
 assert.equal(fieldQuestionGuides.length,100);assert.equal(fieldQuestionGuides.filter(g=>g.editorial.articleType==='GUIDE').length,10);
 assert.equal(new Set(fieldQuestionGuides.map(g=>g.title)).size,100);
 for(const g of fieldQuestionGuides){assert.ok(getGuide(g.slug));assert.ok(g.sections.some(s=>s.steps?.length>=3));assert.ok(g.sections.some(s=>s.table?.rows.length>=2));
  const text=g.answer+g.sections.map(s=>s.body+(s.steps??[]).map(x=>x.title+x.body).join('')+(s.table?.rows??[]).flat().join('')).join('');assert.ok(text.length>=350,g.slug);
  if(g.editorial.articleType==='QUICK GUIDE'){assert.equal(getParentGuide(g.slug)?.articleType,'GUIDE');assert.ok(g.related.some(l=>l.href==='/guide/'+g.editorial.parentGuide));}else assert.ok(text.length>=850,g.slug);
 }
});

test('new managed spots participate in the existing method filters',()=>{
 const lure=managedMapGrowth.find(e=>e.slug==='managed-akashi-kamikawa'),bait=managedMapGrowth.find(e=>e.slug==='managed-taisetsu-tsuribori');
 assert.ok(matchesSpot(lure,{method:'trout-lure'}));assert.ok(matchesSpot(bait,{method:'freshwater-bait'}));assert.equal(matchesSpot(bait,{method:'trout-lure'}),false);
});

test('September map additions are distinct, linked, and keep unverified amenities unset',()=>{
 const {favoritesMapGrowth}=require('../lib/fishing-map-favorites-growth.ts');
 const {methodDetails}=require('../lib/method-registry.ts');
 const ids=new Set(favoritesMapGrowth.map(e=>e.slug));
 assert.equal(ids.size,favoritesMapGrowth.length);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(i=>i.slugs.some(s=>ids.has(s))),[]);
 for(const e of favoritesMapGrowth){
  assert.ok(e.sources.length>=2&&e.positionNote,e.slug);
  for(const slug of e.methodSlugs)assert.ok(methodDetails[slug],`${e.slug}: ${slug}`);
  for(const slug of e.guideSlugs)assert.ok(getGuide(slug),`${e.slug}: ${slug}`);
  assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);
  if(e.closed){assert.ok(e.status);assert.equal(matchesSpot(e,{}),false);}
 }
});
test('new sea access guidance distinguishes boarding bases from fishing areas and preserves restrictions',()=>{
 const get=slug=>fishingMapEntries.find(e=>e.slug==='growth-'+slug);
 assert.equal(get('monkey-toba-pond').type,'boat');assert.match(get('monkey-toba-pond').positionNote,/沖の釣座ではありません/);
 assert.equal(get('hiroshima-kaiyu').primaryType,'sea-pond');
 assert.equal(get('naoshima-fishing-park').primaryType,'sea-park');assert.match(get('naoshima-fishing-park').caution.join(''),/東側.*利用不可/);
 assert.match(get('takozaki-kushimoto').caution.join(''),/水没/);
 for(const slug of ['syakudai-stream','kogaki-stream','kitatahara-trout','azuma-farm','arima-stream','aokiya-achi','river-runs-tsunokawa'])assert.equal(matchesSpot(get(slug),{}),false,slug);
});
