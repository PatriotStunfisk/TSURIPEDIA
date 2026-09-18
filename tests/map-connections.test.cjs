const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {representativeSpots,relatedSpotGuideSlugs}=require('../lib/spot-connections.ts');
const {matchesSpot}=require('../lib/spot-filters.ts');
const {getSpotsForFish,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {spotGuideIndex}=require('../lib/spot-guide-index.ts');
const {getGuide}=require('../lib/all-guides.ts');
test('canonical fish and method deep links intersect existing relationships',()=>{
 const spots=getSpotsForFish('aji');assert.ok(spots.length>100);
 for(const s of spots){assert.ok(matchesSpot(s,{fish:'aji'}));assert.equal(matchesSpot(s,{fish:'aji',method:'sabiki'}),s.methodSlugs?.includes('sabiki')??false);}
 assert.ok(!matchesSpot(spots[0],{fish:'unknown-fish'}));
});
test('representative places are bounded, open, related and include boat methods',()=>{
 for(const entries of [getSpotsForFish('aji'),getSpotsForMethod('sabiki'),getSpotsForMethod('tai-rubber')]){
 const original=entries.map(s=>s.slug);const sample=representativeSpots(entries);
 assert.ok(sample.length>0&&sample.length<=4);assert.equal(new Set(sample.map(s=>s.slug)).size,sample.length);
 assert.ok(sample.every(s=>entries.includes(s)&&!s.closed&&s.type!=='area'));assert.deepEqual(entries.map(s=>s.slug),original);
 }
 assert.ok(representativeSpots(getSpotsForMethod('tai-rubber')).some(s=>s.type==='boat'));
});
test('spot guide links resolve with explicit links first and no duplicate articles',()=>{
 for(const spot of representativeSpots(getSpotsForFish('aji'))){const ids=relatedSpotGuideSlugs(spot,spotGuideIndex);assert.ok(ids.length&&ids.length<=6);assert.equal(new Set(ids).size,ids.length);assert.ok(ids.every(getGuide));}
 assert.deepEqual(relatedSpotGuideSlugs({guideSlugs:['one'],methodSlugs:['sabiki'],fishSlugs:['aji']},{'/methods/sabiki':['one','two'],'/fish/aji':['two','three']}),['one','two','three']);
});
