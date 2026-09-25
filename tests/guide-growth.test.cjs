const assert=require('node:assert/strict'),test=require('node:test'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(r,...args){return resolve.call(this,r.startsWith('@/')?path.join(root,r.slice(2)):r,...args)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {allGuides,getGuide,getParentGuide}=require('../lib/all-guides.ts');
const {selectHubGuides}=require('../lib/guide-selection.ts');
const {getSpotGuides}=require('../lib/spot-guide-selection.ts');
const {spotGuideIndex}=require('../lib/spot-guide-index.ts');
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');
const {getFishProfile}=require('../lib/fish-registry.ts');
const added=[...require('../lib/guide-articles-500-squid.ts').guides500Squid,...require('../lib/guide-articles-500-livebait.ts').guides500Livebait,...require('../lib/guide-articles-500-float.ts').guides500Float,...require('../lib/guide-articles-500-sayori.ts').guides500Sayori,...require('../lib/guide-articles-500-haze.ts').guides500Haze,...require('../lib/guide-articles-500-care.ts').guides500Care,...require('../lib/guide-articles-500-jigging.ts').guides500Jigging,...require('../lib/guide-articles-500-fly.ts').guides500Fly,...require('../lib/guide-articles-500-cooking.ts').guides500Cooking,...require('../lib/guide-articles-500-bass.ts').guides500Bass,...require('../lib/guide-articles-500-trip.ts').guides500Trip,...require('../lib/guide-articles-bottom-workshop.ts').bottomWorkshopGuides.filter(g=>g.editorial.articleType==='QUICK GUIDE'),...require('../lib/guide-articles-observation.ts').observationGuides,...require('../lib/guide-articles-boat-workshop.ts').boatWorkshopGuides,...require('../lib/guide-articles-freshwater-workshop.ts').freshwaterWorkshopGuides,...require('../lib/guide-articles-small-questions.ts').smallQuestionGuides];
test('new field questions have a real full parent, distinct answers and complete decision tables',()=>{
 const answers=new Set();
 for(const q of added){
  const parent=getParentGuide(q.slug);assert.ok(parent,q.slug);assert.equal(parent.articleType,'GUIDE');
  assert.ok(!answers.has(q.answer),`duplicate answer ${q.slug}`);answers.add(q.answer);
  assert.ok(q.sections.some(s=>s.steps?.length>=3),q.slug);
  assert.ok(q.sections.some(s=>s.table?.rows.length>=2),q.slug);
  for(const s of q.sections)if(s.table)for(const row of s.table.rows)assert.equal(row.length,s.table.headers.length);
 }
});
test('hub selection respects limits, avoids duplicates and does not mutate its source',()=>{
 const a=getGuide('aji-sabiki-depth'),b=getGuide('boat-catch-count-reading'),c=getGuide('spot-catch-date-vs-posted');
 const list=[a,a,b,c],before=list.map(g=>g.slug);
 const selected=selectHubGuides(list,3);assert.equal(selected.length,3);assert.equal(new Set(selected.map(g=>g.slug)).size,3);assert.deepEqual(list.map(g=>g.slug),before);
 assert.deepEqual(selectHubGuides(list,0),[]);
 for(const ids of Object.values(spotGuideIndex)){assert.ok(ids.length<=6);for(const id of ids)assert.ok(getGuide(id));}
});
test('a registered bait-only spot is not sent to lure guides through its fish relationship',()=>{
 const spot=fishingMapEntries.find(s=>s.slug==='amagasaki-uoturi');assert.ok(spot);
 const guides=getSpotGuides({...spot,methodSlugs:['sabiki'],fishSlugs:['suzuki','aji']});assert.ok(guides.length);
 assert.ok(guides.every(g=>g.methodTags.length===0||g.methodTags.includes('sabiki')));
 assert.ok(!guides.some(g=>g.slug==='seabass-upstream-downstream'));
});
test('fish practical notes remain in the species registry and original rich data remains intact',()=>{
 for(const slug of ['aji','kisu','aoriika','suzuki','madai','nijimasu','kasago','kawahagi']){
  const f=getFishProfile(slug);assert.ok(f.fieldNotes.length>=2&&f.fieldNotes.length<=3);assert.ok(f.detail.body);assert.ok(f.cooking.recipes.length>=4);
 }
 for(const slug of ['casting-rod-tip-wrap','sabiki-cage-empty','tackle-spec-reading'])assert.ok(getGuide(slug));
 for(const slug of ['rod-tip-tangle-before-cast','sabiki-cage-overfilled','sinker-unit-grams-go'])assert.ok(!getGuide(slug),'duplicate topic should stay in original URL');
 assert.equal(new Set(allGuides.map(g=>g.slug)).size,allGuides.length);
});

test('narrow questions do not inherit unrelated tackle methods from broad parent guides',()=>{assert.deepEqual(getGuide('float-bead-hole-size').methodTags,['uki']);assert.deepEqual(getGuide('reel-handle-fold-loose').methodTags,[]);});

test('the 100-question expansion has unique routes and searchable context',()=>{
 const groups=['squid','livebait','float','sayori','haze','care','jigging','fly','cooking','bass','trip'];
 const batch=groups.flatMap(group=>require(`../lib/guide-articles-500-${group}.ts`)[`guides500${group[0].toUpperCase()+group.slice(1)}`]);
 assert.equal(batch.length,100);assert.equal(new Set(batch.map(g=>g.slug)).size,100);
 for(const q of batch){assert.ok(getGuide(q.slug));assert.ok(q.answer.length>=50);assert.ok(q.sections.reduce((n,s)=>n+s.body.length+(s.steps??[]).reduce((v,p)=>v+p.body.length,0),0)>=220,q.slug);}
 assert.deepEqual(getGuide('haze-float-too-deep').methodTags,['uki']);
 assert.equal(getGuide('reel-rinse-drag-reset').verifiedAt,'2026-09-21');
});
