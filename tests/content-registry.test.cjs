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
  assert.ok(!t.related.some(x=>x.name==='カマス'));assert.equal(t.cooking,undefined);
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
  fish:fish.filter(f=>originalFish.includes(f.slug)),
  details:Object.fromEntries(Object.entries(details).filter(([slug])=>originalFish.includes(slug))),
  launch:Object.fromEntries(featuredFish.map(slug=>[slug,featured.launchFish[slug]])),
  launchSlugs:featured.launchFishSlugs.filter(slug=>featuredFish.includes(slug)),
  cooking:cookingFish.filter(f=>f.slug==='saba'),
  tableGuides:Object.fromEntries(tableFish.map(slug=>[slug,registry.getFishProfile(slug).tableGuide])),
};
const originalDigests={
  fish:'c86a1f608823bc410c9541664a8e98c2944be70049cd541e138dcd744fddc485',
  details:'7a9a4922daba327ed6239477da4b38805b83c74c33f83ac1f1204ed6bd5c13f8',
  launch:'5175b99b2375d6585e2d15fa49a9c833a01044b2a5a79a8dd9806bc978b397dd',
  launchSlugs:'109affa8f8a322f03f9af2a53acd6001574169cdd039aa6e7f101516fab0e706',
  cooking:'9b06856019b55b157bd735946e563667983c39d114fe5181a7247822b2f0302f',
  tableGuides:'289368179e36275849f39d9afbeaef5dcfbe8af4ef49cdb5b8b93b958efa80be',
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
