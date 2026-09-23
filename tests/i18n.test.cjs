const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const resolve=Module._resolveFilename;
Module._resolveFilename=function(request,...args){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,...args)};
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
const {fishCatalog,getFishProfile}=require('../lib/fish-registry.ts');
const {methodDetails}=require('../lib/method-registry.ts');
const {getGuide}=require('../lib/all-guides.ts');
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');
const {englishFish}=require('../lib/i18n/fish.ts');
const {englishMethods}=require('../lib/i18n/methods.ts');
const {englishGuides}=require('../lib/i18n/guides.ts');
const {englishCookingFish,englishDishes}=require('../lib/i18n/cooking.ts');
const {englishPagePaths,englishPageInfo}=require('../lib/i18n/pages.ts');
const {englishPath,languageAlternates}=require('../lib/i18n/routes.ts');
const manifest=require('../lib/i18n/route-manifest.json');

test('English overlays cover registered fish and methods without new species IDs',()=>{
 assert.deepEqual(Object.keys(englishFish).sort(),fishCatalog.map(f=>f.slug).sort());
 assert.deepEqual(Object.keys(englishMethods).sort(),Object.keys(methodDetails).sort());
 for(const f of fishCatalog){assert.ok(englishFish[f.slug].overview.trim(),f.slug);assert.ok(englishFish[f.slug].habitat.trim(),f.slug);if(f.hazard)assert.ok(englishFish[f.slug].safety?.length>50,f.slug)}
 for(const [id,g] of Object.entries(englishGuides)){assert.ok(getGuide(id),id);if(g.fish)assert.ok(getFishProfile(g.fish));if(g.method)assert.ok(englishMethods[g.method]);assert.ok(g.sections.length>=4,id)}
});
test('Language switch manifest matches the published editorial scope',()=>{
 for(const [kind,values] of Object.entries({fish:Object.keys(englishFish),methods:Object.keys(englishMethods),guides:Object.keys(englishGuides),cooking:englishCookingFish}))assert.deepEqual([...manifest[kind]].sort(),[...values].sort(),kind);
 assert.equal(englishPath('/fish/tachiuo'),'/en/fish/tachiuo');
 assert.equal(englishPath('/guide/untranslated-guide'),undefined);
 assert.equal(englishPath('/cooking/aji/aji-fry'),undefined);
 assert.deepEqual(languageAlternates('/en/fish/aji'),{ja:'/fish/aji',en:'/en/fish/aji','x-default':'/fish/aji'});
 assert.deepEqual(languageAlternates('/'),{ja:'/',en:'/en','x-default':'/'});
});
test('English spot routes derive from shared IDs and every route has metadata and reciprocal sitemap alternatives',()=>{
 const paths=englishPagePaths();assert.equal(new Set(paths).size,paths.length);
 assert.equal(paths.filter(p=>p.startsWith('spots/')).length,fishingMapEntries.length);
 const sitemap=require('../app/sitemap.ts').default();const byPath=new Map(sitemap.map(e=>[new URL(e.url).pathname,e]));
 for(const p of paths){assert.ok(englishPageInfo(p),p);const en='/en'+(p?'/'+p:'');const ja=p?'/'+p:'/';const e=byPath.get(en),j=byPath.get(ja);assert.ok(e,en);assert.ok(j,ja);assert.equal(e.alternates.languages.en,'https://uolink.jp'+en);assert.deepEqual(e.alternates,j.alternates)}
});
test('English cooking uses actual recipes and images; excluded species stay excluded',()=>{
 for(const slug of englishCookingFish){const f=getFishProfile(slug);assert.ok(f.cooking&&!f.cookingOmission&&f.hazard?.cookingEnabled!==false,slug);for(const recipe of f.cooking.recipes){assert.ok(englishDishes[recipe.slug],`${slug}/${recipe.slug}`);assert.ok(recipe.image,`${slug}/${recipe.slug}`);assert.ok(fs.existsSync(path.join(root,'public',recipe.image.split('?')[0])),recipe.image)}}
 for(const slug of ['kusafugu','itou','akame']){assert.equal(englishPageInfo('cooking/'+slug),undefined);assert.ok(!englishPagePaths().includes('cooking/'+slug))}
 assert.match(englishFish.kusafugu.safety,/do not.*(prepare|cook)|never.*(prepare|cook)/i);
});
