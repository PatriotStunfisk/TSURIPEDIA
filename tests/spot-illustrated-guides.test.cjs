const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const records=require('../lib/spot-illustrated-guide-data.json'),{spotFieldGuides}=require('../lib/spot-field-guides.ts'),{fishingMapEntries}=require('../lib/fishing-map-data.ts'),{illustrationLessons}=require('../lib/spot-illustration-lessons.ts');
test('315 existing places receive sourced diagrams without changing the surveyed plans',()=>{
 assert.equal(records.length,315);assert.equal(new Set(records.map(r=>r.slug)).size,315);
 const prefectures=new Set();
 for(const r of records){const s=fishingMapEntries.find(s=>s.slug===r.slug),g=spotFieldGuides[r.slug];assert.ok(s&&!s.closed);prefectures.add(s.prefecture);assert.ok(s.methodSlugs.includes(r.method),r.slug);assert.equal(g.illustration.context,s.note);assert.ok(g.illustration.sources.length);assert.ok(g.illustration.localApproach.length);assert.ok(!g.sitePlan);assert.equal(illustrationLessons[r.topic].steps.length,3);}
 assert.ok(prefectures.size>=30);
 assert.ok(spotFieldGuides['hira-isoumi'].sitePlan);assert.ok(!spotFieldGuides['hira-isoumi'].illustration);
});
test('diagram assembly omits closed places and respects registered method restrictions',()=>{
 const ot=records.find(r=>r.slug==='coast-tibaotohamakou');if(ot)assert.notEqual(ot.method,'eging');
 assert.ok(records.some(r=>r.slug==='ibaraki-shinike'&&r.topic==='pond'));
 const {attachSpotIllustrations}=require('../lib/spot-illustrated-guides.ts');assert.throws(()=>attachSpotIllustrations({}),/Invalid illustrated guide/);
 for(const g of Object.values(spotFieldGuides)){if(g.illustration)for(const f of g.illustration.fish)assert.ok(f.slug&&f.name);}
});
