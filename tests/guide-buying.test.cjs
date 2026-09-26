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
const {buyingGuides}=require('../lib/guide-articles-buying');
const {allGuides}=require('../lib/all-guides');
const {methodDetails}=require('../lib/method-registry');
const {fishSlugs}=require('../lib/fish-registry');
const {gearKindLabels,filterGear}=require('../lib/gear-catalog');
const {amazonSearchUrl}=require('../lib/affiliate-products');
const {filterGuides}=require('../lib/guide-taxonomy');

test('100 distinct purchase decisions join the searchable guide registry',()=>{
 assert.equal(buyingGuides.length,100);
 assert.equal(new Set(allGuides.map(g=>g.slug)).size,allGuides.length);
 assert.equal(new Set(buyingGuides.map(g=>g.title)).size,100);
 assert.equal(filterGuides(allGuides,{q:'購入前の道具選び'}).length,100);
 for(const g of buyingGuides){
  assert.ok(allGuides.some(a=>a.slug===g.slug));
  assert.equal(g.editorial.articleType,'QUICK GUIDE');
  if(g.editorial.parentGuide)assert.ok(allGuides.some(a=>a.slug===g.editorial.parentGuide));
  assert.ok(g.sections.some(s=>s.table?.rows.length===3));
  assert.ok(g.sections.some(s=>s.points?.length===3));
  assert.ok(g.answer.length>=40,g.slug);
 }
});
test('buying routes retain valid fish/method references and nonempty gear choices',()=>{
 for(const g of buyingGuides){
  assert.ok(g.buying.kind in gearKindLabels,g.slug);
  assert.ok(filterGear({kind:g.buying.kind}).length,g.slug);
  if(g.buying.method)assert.ok(methodDetails[g.buying.method],g.slug);
  for(const link of g.related){
   const url=new URL(link.href,'https://uolink.jp');
   const [,kind,id]=url.pathname.split('/');
   if(kind==='fish')assert.ok(fishSlugs.includes(id),link.href);
   if(kind==='methods')assert.ok(methodDetails[id],link.href);
   if(kind==='guide'&&id)assert.ok(allGuides.some(a=>a.slug===id),link.href);
  }
  const amazon=new URL(amazonSearchUrl(g.buying.query));
  assert.equal(amazon.host,'www.amazon.co.jp');
  assert.equal(amazon.searchParams.get('tag'),'uolink-22');
  assert.equal(amazon.searchParams.get('k'),g.buying.query);
 }
});
