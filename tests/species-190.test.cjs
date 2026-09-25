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

const slugs=["hamafuefuki","fuedai","yokosujifuedai","kurohoshifuedai","tamagashira","chairomaruhata","kasumiaji","gingameaji","itohikiaji","usumebaru","hatsume","shimazoi","matsukawa","babagarei","numagarei","nigoi","kamatsuka","motsugo","tamoroko","honmoroko","muroaji","umeiro"];
const {getFishProfile,fishSlugs}=require('../lib/fish-registry');
const {getFishConnections}=require('../lib/fish-connections');
const {getFishSpecies}=require('../lib/fish-species');
const {englishFish}=require('../lib/i18n/fish');
const {getGuide}=require('../lib/all-guides');

const {fishBrowseGroup,fishSearchTags}=require('../lib/fish-discovery');
const {sortFishCatalog}=require('../lib/fish-catalog-sort');
const {questFish}=require('../lib/quest/catalog');
test('190-species batch has complete unique profiles, four illustrated recipes and usable links',()=>{
 assert.equal(new Set(fishSlugs).size,fishSlugs.length);assert.ok(fishSlugs.length>=190);
 assert.deepEqual(fishSlugs.slice(168,190),slugs);
 for(const slug of slugs){const f=getFishProfile(slug),s=getFishSpecies(slug);assert.ok(f,slug);assert.ok(f.detail.body.length>50,slug);assert.ok(f.detail.fishing.length>55,slug);assert.ok(f.launch.identify.length>=3,slug);
 assert.ok(fs.existsSync(path.join(root,'public',f.media.image)),slug);assert.ok(englishFish[slug]?.overview.length>70,slug);
 assert.equal(f.cooking.recipes.length,4,slug);assert.equal(new Set(f.cooking.recipes.map(r=>r.image)).size,4,slug);assert.deepEqual(s.representativeRecipes,f.cooking.recipes.map(r=>r.slug),slug);
 for(const r of f.cooking.recipes){assert.ok(fs.existsSync(path.join(root,'public',r.image)),slug+'/'+r.slug);assert.ok(r.ingredients.length>=3);assert.ok(r.steps.length>=3);assert.ok(['raw','cooked'].includes(r.preparation));}
 const c=getFishConnections(slug);assert.equal(c.methods.length,f.methodSlugs.length,slug);assert.equal(c.related.length,f.relatedSlugs.length,slug);for(const g of f.guideSlugs)assert.ok(getGuide(g),slug+' '+g);assert.ok(questFish.some(x=>x.slug===slug),slug);
 }
});
test('new flatfish remain together and discoverable by the everyday name',()=>{for(const slug of ['matsukawa','babagarei','numagarei']){const f=getFishProfile(slug);assert.equal(fishBrowseGroup(f),'カレイ類');assert.ok(fishSearchTags(f).includes('カレイ'));}const list=fishSlugs.map(getFishProfile);assert.deepEqual(sortFishCatalog(list,'added').map(f=>f.slug),fishSlugs);assert.deepEqual(sortFishCatalog(list,'default').slice(0,10).map(f=>f.slug),require('../lib/fish-discovery').coreFishOrder);});
test('freshwater food and protected or easily confused species retain precautions',()=>{
 for(const slug of ['nigoi','kamatsuka','motsugo','tamoroko','honmoroko']){const f=getFishProfile(slug);assert.ok(f.waterTypes.includes('fresh'));assert.ok(f.cooking.recipes.every(r=>r.preparation==='cooked'));assert.deepEqual(questFish.find(x=>x.slug===slug).habitats,['lake-pier']);}
 assert.match(getFishProfile('matsukawa').detail.safety,/35cm/);assert.match(getFishProfile('honmoroko').detail.safety,/採捕禁止/);assert.match(getFishProfile('kurohoshifuedai').detail.safety,/シガテラ/);assert.match(getFishProfile('kamatsuka').desc,/ナガレカマツカ/);
});
