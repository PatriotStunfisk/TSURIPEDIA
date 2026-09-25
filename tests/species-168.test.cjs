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

const slugs=["hiiragi","nezumigochi","anahaze","kujime","ginpo","yamatokamasu","tenjikudai","tsumuburi","meaji","oonibe","ibodai","chikamekintoki","yumekasago","akaisaki","namazu","ugui","ginbuna","kawamutsu","biwamasu","himemasu"];
const {getFishProfile,fishSlugs}=require('../lib/fish-registry');
const {getFishConnections}=require('../lib/fish-connections');
const {getFishSpecies}=require('../lib/fish-species');
const {englishFish}=require('../lib/i18n/fish');
const {getGuide}=require('../lib/all-guides');
test('twenty species retain image-backed recipes and resolvable contextual connections',()=>{
 for(const slug of slugs){
  const f=getFishProfile(slug),s=getFishSpecies(slug);assert.ok(f,slug);assert.ok(englishFish[slug]?.overview.length>50,slug);
  assert.ok(f.detail.body.length>40,slug);assert.ok(f.launch.identify.length>=3,slug);
  assert.ok(fs.existsSync(path.join(root,'public',f.media.image)),slug);
  assert.equal(f.cooking.recipes.length,4,slug);assert.equal(new Set(f.cooking.recipes.map(r=>r.image)).size,4,slug);
  for(const r of f.cooking.recipes){assert.ok(fs.existsSync(path.join(root,'public',r.image)),slug+'/'+r.slug);assert.ok(r.steps.length>=3);assert.ok(r.ingredients.length>=3);assert.equal(r.preparation,'cooked');}
  const links=getFishConnections(slug);assert.equal(links.methods.length,f.methodSlugs.length,slug);assert.ok(links.guides.length,slug);for(const id of f.guideSlugs)assert.ok(getGuide(id),slug+': '+id);assert.equal(links.related.length,f.relatedSlugs.length,slug);
  assert.ok(s.quest.sizeRange[0]<s.quest.sizeRange[1],slug);
 }
 assert.deepEqual(fishSlugs.slice(148,168),slugs,'existing added order stays intact');
});
test('freshwater methods and identities are not conflated with marine lookalikes',()=>{
 assert.deepEqual(getFishProfile('biwamasu').methodSlugs,['lake-trolling']);assert.ok(getFishProfile('himemasu').methodSlugs.includes('himemasu-sabiki')); assert.ok(!getFishProfile('himemasu').methodSlugs.includes('sabiki'));
 assert.ok(!getFishProfile('tenjikudai').detail.aliases.includes('キンギョ'));assert.ok(getFishProfile('tenjikudai').detail.aliases.includes('ネブト'));
 for(const slug of ['namazu','ugui','ginbuna','kawamutsu','biwamasu','himemasu'])assert.ok(getFishProfile(slug).waterTypes.includes('fresh'));
 assert.match(getFishProfile('namazu').detail.safety,/食用|加熱/);
});

test('all twenty new species can be selected in a compatible QUEST habitat',()=>{const {questFish}=require('../lib/quest/catalog');for(const slug of slugs)assert.ok(questFish.some(f=>f.slug===slug),slug);for(const slug of ['himemasu','biwamasu'])assert.deepEqual(questFish.find(f=>f.slug===slug).habitats,['cold-lake']);});
