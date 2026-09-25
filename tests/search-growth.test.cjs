const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {getRecipe,getCookingFish}=require('../lib/cooking-data.ts'),{getGuide}=require('../lib/all-guides.ts'),{getFishProfile}=require('../lib/fish-registry.ts'),{methodDetails}=require('../lib/method-registry.ts'),{fishingMapEntries}=require('../lib/fishing-map-data.ts'),{spotFieldGuides}=require('../lib/spot-field-guides.ts');
const baseline=require('../docs/audits/search-growth-2026-09-26.json');
function resolves(href){
 const u=new URL(href,'https://uolink.jp');assert.equal(u.origin,'https://uolink.jp');const [,section,id,recipe]=u.pathname.split('/');
 if(section==='cooking')assert.ok(recipe?getRecipe(id,recipe):getCookingFish(id),href);
 else if(section==='fish')assert.ok(getFishProfile(id),href);
 else if(section==='guide')assert.ok(getGuide(id),href);
 else if(section==='methods')assert.ok(methodDetails[id],href);
 else assert.ok(['spots','gear','catches'].includes(section),href);
 if(u.searchParams.has('fish'))assert.ok(getFishProfile(u.searchParams.get('fish')),href);
 if(u.searchParams.has('method'))assert.ok(methodDetails[u.searchParams.get('method')],href);
 if(u.searchParams.has('spot'))assert.ok(fishingMapEntries.some(s=>s.slug===u.searchParams.get('spot')),href);
}
test('20 search-backed existing pages have specific answers and purposeful working links',()=>{
 assert.equal(baseline.pages.length,20);assert.equal(new Set(baseline.pages.map(p=>p.path)).size,20);
 for(const page of baseline.pages){const [,section,id,recipe]=page.path.split('/');let links;
  if(section==='cooking'){const r=getRecipe(id,recipe);assert.ok(r);assert.doesNotMatch(r.summary,/身質を生かす|手順にまとめました/);assert.ok(r.detail?.checkpoints.length>=3);assert.ok(r.detail.troubleshooting.length>=3);links=r.nextLinks;}
  if(section==='guide'){const g=getGuide(id);assert.ok(g);assert.ok(g.sections.some(s=>s.table?.headers.length===2));assert.ok(g.answer.length>60);links=g.related;}
  if(section==='spots'){assert.ok(fishingMapEntries.some(s=>s.slug===id));const g=spotFieldGuides[id];assert.ok(g.summary.length>60);assert.ok(g.choices.length>=3);links=g.nextLinks;}
  assert.ok(links.length>=2&&links.length<=3,page.path);assert.equal(new Set(links.map(l=>l.href)).size,links.length);
  for(const link of links){assert.ok(link.reason?.length>=15,page.path);assert.notEqual(link.href,page.path);resolves(link.href);}
 }
});
test('context navigation preserves extra related links and avoids new browser data fetching',()=>{
 const component=fs.readFileSync(path.join(root,'components/NextReading.tsx'),'utf8');assert.match(component,/links\.slice\(0,3\)/);assert.match(component,/links\.slice\(3\)/);assert.doesNotMatch(component,/use client|useEffect|fetch\(/);
 for(const route of ['cooking/[fish]/[recipe]','spots/[slug]']){const page=fs.readFileSync(path.join(root,`app/(ja)/${route}/page.tsx`),'utf8');assert.match(page,/pageSharing/);}
});
