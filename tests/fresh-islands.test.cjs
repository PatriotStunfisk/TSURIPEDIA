const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {freshIslandEntries:batch}=require('../lib/fishing-map-fresh-islands.ts');
const {fishingMapEntries,getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {getFishProfile:getFish,getFishByName}=require('../lib/fish-registry.ts');
const {getMethod}=require('../lib/method-registry.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {matchesSpot}=require('../lib/spot-filters.ts');
const ids=new Set(batch.map(x=>x.slug));
test('freshwater and island expansion has distinct sourced pins and preserves seasonal availability',()=>{
 assert.equal(batch.length,294);assert.equal(ids.size,batch.length);
 assert.equal(batch.filter(x=>x.primaryType==='fresh').length,123);
 assert.ok(new Set(batch.map(x=>x.prefecture)).size>=28);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(x=>x.slugs.some(s=>ids.has(s))),[]);
 for(const e of batch){assert.ok(e.lat&&e.lng&&e.positionNote);assert.ok(e.sources.length>=2);assert.ok(e.sources.some(s=>s.url.startsWith('https://maps.gsi.go.jp/')));assert.ok(e.note.length>40);if(e.closed){assert.ok(e.status);assert.equal(matchesSpot(e,{}),false);}}
 assert.equal(batch.filter(x=>x.closed).length,9);
});
test('new places use existing fish and method links, and closed seasonal venues are not recommended',()=>{
 for(const e of batch){
  for(const id of e.methodSlugs??[]){assert.ok(getMethod(id),`${e.slug}: ${id}`);if(!e.closed)assert.ok(getSpotsForMethod(id).some(x=>x.slug===e.slug));}
  for(const name of e.fish){const f=getFishByName(name);if(f&&!e.closed)assert.ok(getSpotsForFish(f.slug).some(x=>x.slug===e.slug));}
 }
 const terrace=batch.find(x=>x.slug==='sakai-umizuri-terrace');assert.deepEqual(terrace.methodSlugs,['sabiki']);assert.match(terrace.caution.join(''),/投げ釣り/);assert.ok(terrace.lat>34.603&&terrace.lat<34.605);
 assert.equal(batch.filter(x=>x.name==='茨木新池').length,1);
 const boat=batch.find(x=>x.slug==='hachijo-asagiku');assert.equal(boat.type,'boat');assert.match(boat.positionNote,/受付地点/);
 assert.ok(!batch.some(x=>x.name.includes('梅ヶ島常設')));
});
test('freshwater species have distinct image assets, linked methods and matching cooked recipes',()=>{
 for(const id of ['herabuna','koi','oikawa']){const f=getFish(id);assert.ok(f?.detail&&f.launch&&f.media);assert.ok(fs.existsSync(path.join(root,'public',f.media.image)));assert.ok(f.waterTypes.includes('fresh'));for(const m of f.methodSlugs)assert.ok(getMethod(m));}
 for(const id of ['koi','oikawa']){const f=getFish(id);assert.equal(f.cooking.recipes.length,4);assert.equal(new Set(f.cooking.recipes.map(r=>r.image)).size,4);for(const r of f.cooking.recipes){assert.ok(r.image.includes('/'+id+'-'));assert.ok(fs.existsSync(path.join(root,'public',r.image)));assert.ok(r.steps.length>=3);assert.doesNotMatch(r.name,/刺身|薄造り|生肝/);}}
 assert.ok(getFish('herabuna').cookingOmission);assert.equal(getFish('herabuna').cooking,undefined);
});
test('new public spot and fish routes have static social thumbnails',()=>{
 const manifest=require('../lib/sharing-images.json');
 for(const route of [...batch.map(x=>'/spots/'+x.slug),...['herabuna','koi','oikawa'].map(s=>'/fish/'+s)]){assert.ok(manifest[route],route);assert.ok(fs.existsSync(path.join(root,'public',manifest[route])));}
});
