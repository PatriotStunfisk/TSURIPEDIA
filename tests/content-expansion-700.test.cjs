const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(r,...a){return resolve.call(this,r.startsWith('@/')?path.join(root,r.slice(2)):r,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {allGuides,getGuide,getParentGuide}=require('../lib/all-guides');
const {workshop700Guides}=require('../lib/guide-articles-workshop-700');
const {species122Guides}=require('../lib/guide-articles-species-122');
const {getFishSpecies}=require('../lib/fish-species');
const {getFishByName,getFishProfile}=require('../lib/fish-registry');
const {methodDetails}=require('../lib/method-registry');
const species=['murasoi','takenokomebaru','kuromejina','chidai','matoudai','akayagara','hachibiki','chigodara','himeji','kanagashira'];
test('new guide batch preserves unique questions, real parents and actionable tables',()=>{
 const added=[...workshop700Guides,...species122Guides];assert.equal(added.length,200);
 assert.equal(new Set(allGuides.map(g=>g.slug)).size,allGuides.length);
 assert.equal(new Set(added.map(g=>g.answer)).size,200);
 for(const g of added){
  assert.equal(allGuides.filter(x=>x.slug===g.slug).length,1,g.slug);
  assert.ok(g.sections.some(s=>s.steps?.length>=3),g.slug);
  assert.ok(g.sections.some(s=>s.table?.rows.length>=2),g.slug);
  for(const section of g.sections)if(section.table)for(const row of section.table.rows)assert.equal(row.length,section.table.headers.length,g.slug);
  if(g.editorial.articleType==='QUICK GUIDE')assert.equal(getParentGuide(g.slug)?.articleType,'GUIDE',g.slug);
  for(const link of g.related){const [,kind,id]=link.href.split('/');if(kind==='fish')assert.ok(getFishSpecies(id),link.href);if(kind==='methods')assert.ok(methodDetails[id],link.href);if(kind==='guide')assert.ok(getGuide(id),link.href);if(kind==='cooking')assert.ok(getFishSpecies(id)?.cooking,link.href);}
 }
});
test('new fish have complete identification, four matching illustrated recipes and preserved aliases',()=>{
 for(const slug of species){const s=getFishSpecies(slug);assert.ok(s.detail&&s.launch&&s.cooking,slug);assert.ok(s.launch.identify.length>=3);assert.equal(s.representativeRecipes.length,4);assert.ok(s.base.guideSlugs.every(g=>getGuide(g)));assert.ok(s.base.methodSlugs.every(m=>methodDetails[m]));assert.ok(s.base.relatedSlugs.every(id=>getFishSpecies(id)));assert.ok(fs.existsSync(path.join(root,'public',s.media.image)));
  for(const id of s.representativeRecipes){const r=s.cooking.recipes.find(x=>x.slug===id);assert.ok(r&&r.ingredients.length>=3&&r.steps.length>=4,slug+'/'+id);assert.ok(r.image.includes(slug+'-'),r.image);assert.ok(fs.existsSync(path.join(root,'public',r.image)),r.image);assert.equal(r.preparation,'cooked');}
  assert.ok(getFishProfile(slug));
 }
 assert.equal(getFishByName('ソイ'),undefined);assert.equal(getFishByName('ベッコウゾイ').slug,'takenokomebaru');assert.equal(getFishByName('尾長グレ').slug,'kuromejina');
});
