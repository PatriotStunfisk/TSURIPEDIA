const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {fishingMapEntries}=require('../lib/fishing-map-data.ts'),{nationwideExpansion}=require('../lib/fishing-map-nationwide-expansion.ts');
const {markerKind,clusterPoints}=require('../lib/spot-markers.ts'),{matchesSpot}=require('../lib/spot-filters.ts');
const {fishCatalog}=require('../lib/fish-registry.ts'),{methodDetails}=require('../lib/method-registry.ts'),{getGuide}=require('../lib/all-guides.ts');
test('verified nationwide additions keep unknown facilities unknown and link to real registries',()=>{
 assert.equal(new Set(fishingMapEntries.map(e=>e.slug)).size,fishingMapEntries.length);
 assert.equal(nationwideExpansion.filter(e=>e.type==='boat').length,10);
 for(const e of nationwideExpansion){assert.ok(e.sources.length&&e.verifiedAt);if(e.lat)assert.ok(e.positionNote);for(const slug of e.fishSlugs??[])assert.ok(fishCatalog.some(f=>f.slug===slug),slug);for(const slug of e.methodSlugs??[])assert.ok(methodDetails[slug],slug);for(const slug of e.guideSlugs??[])assert.ok(getGuide(slug),slug);if(e.type==='boat'){assert.ok(e.port&&e.officialUrl);assert.equal(markerKind(e),'boat');assert.ok(matchesSpot(e,{kind:'boat',query:e.port}));}}
 assert.ok(nationwideExpansion.some(e=>e.parking===undefined&&e.toilet===undefined));
 assert.ok(!matchesSpot(fishingMapEntries.find(e=>e.closed),{}));
});
test('cluster grouping preserves thousands of entries including coincident points and selection',()=>{
 const entries=Array.from({length:3000},(_,i)=>({slug:String(i),x:i%20,y:i%7}));
 const groups=clusterPoints(entries,p=>p,'51');assert.equal(groups.flat().length,3000);assert.equal(groups.length,2);assert.ok(groups.some(g=>g.length===1&&g[0].slug==='51'));
 assert.equal(new Set(groups.flat().map(e=>e.slug)).size,3000);
 assert.equal(clusterPoints([],p=>p).length,0);
 assert.notEqual(markerKind({type:'boat',terrain:'boat'}),markerKind({type:'area',terrain:'boat'}));
});

test('new verified places have sources, intentional reference pins and valid relationships',()=>{
 const {verifiedMapExpansion}=require('../lib/fishing-map-20260916.ts');
 assert.equal(verifiedMapExpansion.filter(e=>e.type==='spot').length,12);assert.equal(verifiedMapExpansion.filter(e=>e.type==='boat').length,6);
 for(const e of verifiedMapExpansion){assert.ok(e.sources.length&&e.verifiedAt);assert.ok(e.positionNote&&e.lat&&e.lng);for(const slug of e.fishSlugs??[])assert.ok(fishCatalog.some(f=>f.slug===slug),slug);for(const slug of e.methodSlugs??[])assert.ok(methodDetails[slug],slug);for(const slug of e.guideSlugs??[])assert.ok(getGuide(slug),slug)}
 assert.ok(!matchesSpot(verifiedMapExpansion.find(e=>e.slug==='abashiri-yobito-wakasagi'),{}));
});
test('medium zoom separates markers earlier while wide zoom remains clustered',()=>{
 const {clusterCellSize}=require('../lib/spot-markers.ts');
 const nearby=[{slug:'a',x:1,y:1},{slug:'b',x:32,y:1}];
 assert.equal(clusterPoints(nearby,p=>p,undefined,clusterCellSize(6)).length,1);
 assert.equal(clusterPoints(nearby,p=>p,undefined,clusterCellSize(8)).length,2);
 assert.ok(clusterCellSize(11)<clusterCellSize(8));
});
