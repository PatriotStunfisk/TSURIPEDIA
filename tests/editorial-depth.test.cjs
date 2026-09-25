const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {getCookingFish}=require('../lib/cooking-data.ts');
const {spotFieldGuides}=require('../lib/spot-field-guides.ts');
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');
const {methodDetails}=require('../lib/method-details.ts');

test('recipe enrichment stays with each species and resolves its illustration',()=>{
 for(const [fish,recipe] of [['sappa','sunomono'],['nijimasu','shioyaki']]){
  const r=getCookingFish(fish).recipes.find(x=>x.slug===recipe);assert.ok(r.detail);
  assert.ok(r.detail.checkpoints.length>=3);assert.ok(r.detail.troubleshooting.length>=3);
  if(r.detail.processImage)assert.ok(fs.existsSync(path.join(root,'public',r.detail.processImage.src)));
  for(const source of r.detail.sources)assert.equal(new URL(source.url).protocol,'https:');
 }
 assert.equal(getCookingFish('sappa').recipes.find(x=>x.slug==='sunomono').preparation,'raw');
});
test('researched venue enrichment survives illustration attachment and links to actual content',()=>{
 for(const slug of ['growth-senjogataki-farm','harbor-tokusimamusa']){
  assert.ok(fishingMapEntries.some(x=>x.slug===slug));
  const guide=spotFieldGuides[slug];assert.ok(guide.choices?.length>=3);assert.ok(guide.sources.length);
  for(const {href} of guide.nextLinks){
   const [,section,id,recipe]=href.split('/');
   if(section==='cooking')assert.ok(recipe?getCookingFish(id)?.recipes.some(x=>x.slug===recipe):getCookingFish(id),href);
   if(section==='methods')assert.ok(methodDetails[id],href);
   if(section==='fish')assert.ok(getCookingFish(id),href);
  }
 }
});

test('100 original process diagrams have valid recipe steps, files and captions',()=>{
 const {cookingFish}=require('../lib/cooking-data.ts');
 const images=[];let recipes=0;
 for(const fish of cookingFish)for(const recipe of fish.recipes){
  if(!recipe.stepImages?.length)continue;recipes++;
  assert.equal(new Set(recipe.stepImages.map(x=>x.step)).size,recipe.stepImages.length);
  for(const image of recipe.stepImages){
   assert.ok(image.step>=1&&image.step<=recipe.steps.length,fish.slug);
   assert.ok(image.caption.length>=25);assert.ok(image.alt.includes(fish.name));
   const svg=fs.readFileSync(path.join(root,'public',image.src),'utf8');
   assert.match(svg,/<svg/);assert.match(svg,/工程図/);assert.doesNotMatch(svg,/<script|<foreignObject|href="https?:/);
   images.push(image.src);
  }
 }
 assert.equal(recipes,25);assert.equal(images.length,100);assert.equal(new Set(images).size,100);
});
