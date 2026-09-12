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
