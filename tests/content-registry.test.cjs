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
  compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022},
}).outputText,filename);
const {fish}=require('../lib/data.ts');
const registry=require('../lib/fish-registry.ts');
const {getFishConnections}=require('../lib/fish-connections.ts');
const {allGuides,getGuidesForFish}=require('../lib/all-guides.ts');
const {methodDetails}=require('../lib/method-registry.ts');
const {cookingFish}=require('../lib/cooking-data.ts');
const sitemap=require('../app/sitemap.ts').default;

function unique(values,label){assert.equal(new Set(values).size,values.length,`duplicate ${label}`)}

test('all original content collections have unique route IDs and sitemap entries',()=>{
  unique(registry.fishSlugs,'fish');unique(allGuides.map(x=>x.slug),'guide');
  const expected=[...fish.map(x=>`/fish/${x.slug}`),...allGuides.map(x=>`/guide/${x.slug}`),...Object.keys(methodDetails).map(x=>`/methods/${x}`),...cookingFish.flatMap(x=>[`/cooking/${x.slug}`,...x.recipes.map(y=>`/cooking/${x.slug}/${y.slug}`)])];
  const paths=sitemap().map(x=>new URL(x.url).pathname);unique(paths,'sitemap URL');
  for(const route of expected)assert.ok(paths.includes(route),route);
});
test('dedicated fish retain detailed and launch content',()=>{
  for(const slug of ['tachiuo','aji','madai']){
    const f=registry.getFishProfile(slug);assert.ok(f.detail.body);assert.ok(f.launch.identify.length);
  }
});
test('guide reverse links are exact and missing fish do not match',()=>{
  assert.ok(getGuidesForFish('aji').length);
  assert.equal(getGuidesForFish('aj').length,0);
  for(const guide of getGuidesForFish('aji'))assert.ok(guide.related.some(x=>x.href.split(/[?#]/)[0]==='/fish/aji'));
});
test('only existing related fish and cooking pages are linked',()=>{
  const t=getFishConnections('tachiuo');assert.ok(t.related.some(x=>x.slug==='sawara'));
  assert.ok(!t.related.some(x=>x.name==='カマス'));assert.equal(t.cooking.recipes.length,4);
  assert.equal(getFishConnections('saba').cooking.recipes.length,4);
  for(const f of fish){const links=getFishConnections(f.slug);for(const other of links.related)assert.notEqual(other.slug,f.slug);for(const m of links.methods)assert.ok(methodDetails[m.slug]);}
});
test('broad method names do not invent unrelated routes',()=>{
  assert.equal(getFishConnections('amago').methods.length,0);
  assert.ok(!getFishConnections('madako').methods.some(x=>x.slug==='tachiuo-tenya'));
});
test('unknown slugs, including object prototype keys, have no profile',()=>{
  for(const slug of ['missing','constructor','toString','__proto__']){
    assert.equal(registry.getFishProfile(slug),undefined);assert.equal(getFishConnections(slug),undefined);
  }
});
test('one base fish entry supplies the registry, sitemap and shared-method links without detail data',()=>{
  const fixture={...fish[1],slug:'test-only-fish',name:'テスト専用魚',methods:['サビキ']};
  fish.push(fixture);
  const modules=['../lib/fish-registry.ts','../lib/fish-connections.ts','../app/sitemap.ts'];
  try{
    for(const name of modules)delete require.cache[require.resolve(name)];
    const fresh=require('../lib/fish-registry.ts');const connections=require('../lib/fish-connections.ts');
    assert.equal(fresh.getFishProfile(fixture.slug).detail,undefined);
    assert.ok(fresh.fishSlugs.includes(fixture.slug));
    const links=connections.getFishConnections(fixture.slug);
    assert.deepEqual(links.methods.map(x=>x.slug),['sabiki']);
    assert.ok(links.related.some(x=>x.slug==='aji'));assert.deepEqual(links.guides,[]);assert.equal(links.cooking,undefined);
    assert.ok(require('../app/sitemap.ts').default().some(x=>x.url.endsWith('/fish/test-only-fish')));
    fixture.methodSlugs=['nomase','missing','nomase'];fixture.guideSlugs=[allGuides[0].slug,'missing',allGuides[0].slug];fixture.relatedSlugs=['aji','missing','aji',fixture.slug];
    // Registry takes a snapshot of base data, so reload it after editing the fixture.
    for(const name of modules)delete require.cache[require.resolve(name)];
    const explicit=require('../lib/fish-connections.ts').getFishConnections(fixture.slug);
    assert.deepEqual(explicit.methods.map(x=>x.slug),['nomase']);assert.equal(explicit.guides.length,1);assert.deepEqual(explicit.related.map(x=>x.slug),['aji']);
  }finally{fish.pop();for(const name of modules)delete require.cache[require.resolve(name)];}
});

// Migration snapshots cover pre-existing species only; new species need no edits here.
const crypto=require('node:crypto');
const stable=value=>Array.isArray(value)?value.map(stable):value&&typeof value==='object'
  ?Object.fromEntries(Object.keys(value).sort().map(key=>[key,stable(value[key])])):value;
const digest=value=>crypto.createHash('sha256').update(JSON.stringify(stable(value))).digest('hex');
const originalFish=['tachiuo','aji','madai','buri','kisu','kasago','saba','iwashi','suzuki','chinu','kawahagi','hirame','mebaru','aoriika','madako','kanpachi','sawara','hamachi','gashira','amago','nijimasu','ayu','unagi','anago','isaki'];
const featuredFish=['tachiuo','aji','saba','buri','kisu','kasago','madai'];
const tableFish=['madai','buri','saba','kisu','kasago'];
const {fishSpecies}=require('../lib/fish-species/index.ts');
const {defineFishSpecies,uniqueFishSlugs,getSpeciesTableGuide}=require('../lib/fish-species/define.ts');
const details=require('../lib/fish-details.ts').fishDetails;
const featured=require('../lib/launch-fish.ts');
const migratedSnapshots={
  fish:fish.filter(f=>originalFish.includes(f.slug)).map(f=>{if(!['kawahagi','aoriika','mebaru','hirame','sawara','madako'].includes(f.slug))return f;const {methodSlugs,relatedSlugs,guideSlugs,...original}=f;return original}),
  details:Object.fromEntries(Object.entries(details).filter(([slug])=>originalFish.includes(slug))),
  launch:Object.fromEntries(featuredFish.map(slug=>[slug,featured.launchFish[slug]])),
  launchSlugs:featured.launchFishSlugs.filter(slug=>featuredFish.includes(slug)),
  cooking:cookingFish.filter(f=>f.slug==='saba'),
  tableGuides:Object.fromEntries(tableFish.map(slug=>[slug,registry.getFishProfile(slug).tableGuide])),
};
const originalDigests={
  fish:'c86a1f608823bc410c9541664a8e98c2944be70049cd541e138dcd744fddc485',
  details:'1f72f59537a70107e6228a972a3310bc605c8b40f8e32c5c3c64119e30f93f8c',
  launch:'035a14df86692faa3770972f5dcf4c622e89955ba3aa37026b8a455775640721',
  launchSlugs:'109affa8f8a322f03f9af2a53acd6001574169cdd039aa6e7f101516fab0e706',
  cooking:'9b06856019b55b157bd735946e563667983c39d114fe5181a7247822b2f0302f',
  tableGuides:'73ec5e849118895d164dfc559bcc5f4bd4d2d60e30d1ffab36bc252dd2db4924',
};
for(const [section,value] of Object.entries(migratedSnapshots)){
  test('migration preserves existing '+section,()=>assert.equal(digest(value),originalDigests[section]));
}
test('species profiles feed compatibility views without duplicate identity',()=>{
  for(const species of fishSpecies){
    const f=registry.getFishProfile(species.base.slug);
    assert.equal(f.detail,species.detail);assert.equal(f.launch,species.launch);
    if(species.cooking){
      assert.equal(f.cooking.name,species.base.name);assert.equal(f.cooking.slug,species.base.slug);
      assert.equal(f.cooking.recipes,species.cooking.recipes);
    }
  }
});
test('a new recipe supplies its preview without a second card definition',()=>{
  const species=defineFishSpecies({base:{...fish[0],slug:'test-profile'},cooking:{prep:['test preparation'],recipes:[{slug:'test-recipe',name:'test recipe',summary:'test summary',ingredients:[],steps:[],tips:[]}]}});
  const guide=getSpeciesTableGuide(species);
  assert.equal(guide.dishes[0].name,'test recipe');assert.equal(guide.dishes[0].recipe,'test-recipe');assert.equal(guide.dishes[0].desc,'test summary');
  assert.equal(getSpeciesTableGuide({base:species.base}),undefined);
});
test('profile validation prevents duplicate fish, recipes and broken recipe cards',()=>{
  assert.throws(()=>uniqueFishSlugs([fish[0],fish[0]]),/Duplicate fish slug/);
  const base={...fish[0],slug:'test-profile'};
  const recipe={slug:'same',name:'test',summary:'test',ingredients:[],steps:[],tips:[]};
  assert.throws(()=>defineFishSpecies({base,cooking:{prep:[],recipes:[recipe,recipe]}}),/Duplicate recipe slug/);
  assert.throws(()=>defineFishSpecies({base,tableGuide:{lead:'',dishes:[{name:'test',desc:'test',recipe:'missing'}]}}),/Unknown recipe/);
  assert.throws(()=>defineFishSpecies({base:{...base,slug:'Bad/URL'}}),/Invalid fish slug/);
});

test('every catalog and detail entry is derived from a species profile',()=>{
  assert.deepEqual(fish.map(f=>f.slug),fishSpecies.map(s=>s.base.slug));
  for(let i=0;i<fish.length;i++)assert.equal(fish[i],fishSpecies[i].base);
  assert.deepEqual(Object.keys(details),fishSpecies.filter(s=>s.detail).map(s=>s.base.slug));
  for(const species of fishSpecies)assert.equal(details[species.base.slug],species.detail);
});
test('recipe slugs cannot create nested or malformed routes',()=>{
  const base={...fish[0],slug:'test-profile'};
  const recipe={name:'test',summary:'test',ingredients:[],steps:[],tips:[]};
  for(const slug of ['', '../recipe', 'nested/recipe', 'Recipe', 'recipe?query', 'recipe#anchor']){
    assert.throws(()=>defineFishSpecies({base,cooking:{prep:[],recipes:[{...recipe,slug}]}}),/Invalid recipe slug/);
  }
  assert.doesNotThrow(()=>defineFishSpecies({base,cooking:{prep:[],recipes:[{...recipe,slug:'valid-recipe-2'}]}}));
});

test('all recipe cards agree with canonical recipes and existing local assets',()=>{
 const publicRoot=path.join(root,'public');
 const exactAsset=src=>{let current=publicRoot;for(const part of src.split('?')[0].split('/').filter(Boolean)){assert.ok(fs.readdirSync(current).includes(part),src);current=path.join(current,part)}assert.ok(fs.statSync(current).isFile(),src)};
 for(const species of fishSpecies){
  if(species.media)exactAsset(species.media.image);
  if(!species.cooking)continue;
  const cards=getSpeciesTableGuide(species).dishes;
  assert.equal(cards.length,species.cooking.recipes.length);
  for(const recipe of species.cooking.recipes){
   assert.ok(recipe.image);exactAsset(recipe.image);
   const card=cards.find(card=>card.recipe===recipe.slug);assert.ok(card);
   assert.equal(card.name,recipe.name);assert.equal(card.src,recipe.image);
   assert.ok(recipe.ingredients.length&&recipe.steps.length&&recipe.tips.length);
  }
 }
});
test('three expanded species have a complete connected profile and four recipes',()=>{
 for(const slug of ['kawahagi','aoriika','mebaru']){
  const profile=registry.getFishProfile(slug),connections=getFishConnections(slug);
  assert.ok(profile.media.image);assert.ok(profile.detail.safety);assert.ok(profile.launch.identify.length>=3);
  assert.equal(profile.cooking.recipes.length,4);assert.ok(connections.methods.length);assert.ok(connections.guides.length);assert.ok(connections.related.length);
  assert.ok(featured.launchFishSlugs.includes(slug));
  for(const recipe of profile.cooking.recipes)assert.ok(sitemap().some(x=>x.url.endsWith(`/cooking/${slug}/${recipe.slug}`)));
 }
});
test('a missing model stays 2D and a subsequently added model is discovered',()=>{
 const os=require('node:os');const temp=fs.mkdtempSync(path.join(os.tmpdir(),'uolink-model-'));
 const {getSpeciesModelSrc}=require('../lib/fish-media.ts');
 try{
  assert.equal(getSpeciesModelSrc('test-model',temp),undefined);
  fs.mkdirSync(path.join(temp,'models'));fs.writeFileSync(path.join(temp,'models/test-model.glb'),'test-only');
  assert.equal(getSpeciesModelSrc('test-model',temp),'/models/test-model.glb');
  assert.equal(getSpeciesModelSrc('../test-model',temp),undefined);
  fs.writeFileSync(path.join(temp,'models/Upper.glb'),'test-only');assert.equal(getSpeciesModelSrc('upper',temp),undefined);
 }finally{fs.rmSync(temp,{recursive:true,force:true})}
});

test('editing a recipe identity updates editorial cards without duplicate edits',()=>{
 const species={base:fish[0],cooking:{prep:[],recipes:[{slug:'dish',name:'new name',image:'/new.png',summary:'summary',ingredients:[],steps:[],tips:[]}]},tableGuide:{lead:'lead',dishes:[{recipe:'dish',name:'old name',src:'/old.png',desc:'editorial description'}]}};
 const card=getSpeciesTableGuide(species).dishes[0];assert.equal(card.name,'new name');assert.equal(card.src,'/new.png');assert.equal(card.desc,'editorial description');
});

test('the established seven species retain all user-authored recipes',()=>assert.equal(digest(cookingFish.filter(f=>featuredFish.includes(f.slug))),'a38dc13f0b5bb83190d62d7b3a22799f5490d37cfc8c0cccdf9560aab8ac8506'));


test('new full profiles keep four original recipe assets, guides and method routes',()=>{
 for(const slug of ['hirame','sawara','madako']){
  const f=registry.getFishProfile(slug),c=getFishConnections(slug);
  assert.ok(f.media.image);assert.equal(f.cooking.recipes.length,4);assert.ok(f.launch.identify.length>=3);
  assert.ok(c.methods.length);assert.ok(c.guides.length);assert.ok(c.related.length);
  for(const r of f.cooking.recipes){assert.ok(r.steps.length>=4);assert.ok(r.ingredients.length>=3);assert.ok(fs.existsSync(path.join(root,'public',r.image)));}
 }
});
test('map IDs and relationships resolve; closed sites are not recommended',()=>{
 const {fishingMapEntries,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
 unique(fishingMapEntries.map(e=>e.slug),'spot');
 for(const e of fishingMapEntries){
  for(const slug of e.fishSlugs??[])assert.ok(registry.getFishProfile(slug),slug);
  for(const slug of e.methodSlugs??[])assert.ok(methodDetails[slug],slug);
  for(const slug of e.guideSlugs??[])assert.ok(allGuides.some(g=>g.slug===slug),slug);
  for(const source of e.sources??[])assert.equal(new URL(source.url).protocol,'https:');
 }
 for(const slug of ['hirame','sawara','madako'])assert.ok(getSpotsForFish(slug).length);
 assert.ok(!getSpotsForFish('aji').some(e=>e.slug==='nanko-fishing-park'));
 assert.ok(!getSpotsForMethod('sabiki').some(e=>e.closed));
 assert.ok(fishingMapEntries.find(e=>e.slug==='miyazu-sea-fishing').closed);
});
