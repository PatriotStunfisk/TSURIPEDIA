const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');

// Load the actual TypeScript data modules without a second set of test fixtures.
const resolve=Module._resolveFilename;
Module._resolveFilename=function(request,...args){
  return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,...args);
};
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{
  compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022},
}).outputText,filename);

const slugs=["hamo","iidako","kaminariika","mizudako","karafutomasu","hagatsuo","sujiara","hamadai","akoudai","akatachi"];
const {getFishProfile,fishSlugs}=require('../lib/fish-registry');
const {getFishConnections}=require('../lib/fish-connections');
const {getFishSpecies}=require('../lib/fish-species');
const {englishFish}=require('../lib/i18n/fish');
const {getGuide}=require('../lib/all-guides');

const {fishBrowseGroup,fishSearchTags}=require('../lib/fish-discovery');
const {sortFishCatalog}=require('../lib/fish-catalog-sort');
const {questFish}=require('../lib/quest/catalog');

test('final ten species reach 200 without duplicate records and retain complete linked recipes',()=>{
 assert.ok(fishSlugs.length>=200);assert.equal(new Set(fishSlugs).size,fishSlugs.length);assert.deepEqual(fishSlugs.slice(190,200),slugs);
 for(const slug of slugs){const f=getFishProfile(slug),s=getFishSpecies(slug);assert.ok(f.detail.fishing.length>65,slug);assert.ok(f.launch.identify.length>=3,slug);assert.ok(englishFish[slug].overview.length>80,slug);assert.ok(s.fieldNotes.length>=2,slug);
 assert.ok(fs.existsSync(path.join(root,'public',f.media.image)),slug);assert.equal(f.cooking.recipes.length,4,slug);assert.equal(new Set(f.cooking.recipes.map(r=>r.image)).size,4,slug);
 for(const r of f.cooking.recipes){assert.ok(fs.existsSync(path.join(root,'public',r.image)),slug+'/'+r.slug);assert.ok(r.ingredients.length>=3);assert.ok(r.steps.length>=3);assert.ok(['raw','cooked'].includes(r.preparation));}
 const c=getFishConnections(slug);assert.equal(c.methods.length,f.methodSlugs.length,slug);assert.equal(c.related.length,f.relatedSlugs.length,slug);for(const g of f.guideSlugs)assert.ok(getGuide(g),slug+' '+g);assert.ok(questFish.some(x=>x.slug===slug),slug);
 }
});
test('final batch search groups and prior catalog order remain usable',()=>{
 assert.ok(fishSearchTags(getFishProfile('hagatsuo')).includes('カツオ'));
 assert.equal(fishBrowseGroup(getFishProfile('mizudako')),'タコ類');assert.equal(fishBrowseGroup(getFishProfile('karafutomasu')),'淡水・サケマス');
 assert.equal(getFishProfile('akatachi').scientific,'Acanthocepola krusensternii');assert.ok(!fishSlugs.includes('shousaifugu'));
 assert.deepEqual(fishSlugs.slice(0,7),['tachiuo','aji','madai','buri','kisu','kasago','saba']);
});
test('species-specific preparation and regional restrictions are retained',()=>{
 for(const slug of ['hamo','karafutomasu','akatachi'])assert.ok(getFishProfile(slug).cooking.recipes.every(r=>r.preparation==='cooked'));
 assert.match(getFishProfile('hamo').cooking.prep.join(''),/骨切り/);
 assert.match(getFishProfile('iidako').detail.safety,/2026.*9月1日.*10月15日.*正午/);
 assert.match(getFishProfile('sujiara').detail.safety,/加熱・冷凍では毒は除けない/);
 for(const slug of ['iidako','mizudako','kaminariika'])for(const r of getFishProfile(slug).cooking.recipes)assert.doesNotMatch(r.steps.join(''),/三枚|鱗|血合い骨/);
 assert.ok(getFishSpecies('karafutomasu').quest.habitats.includes('northern-coast'));
});
