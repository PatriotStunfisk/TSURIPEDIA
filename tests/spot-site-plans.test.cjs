const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {spotSitePlans}=require('../lib/spot-site-plans.ts');
const {spotFieldGuides}=require('../lib/spot-field-guides.ts');
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');

test('point plans reference existing open venues, source evidence and shared registries',()=>{
 assert.equal(Object.keys(spotSitePlans).length,7);
 for(const [slug,p] of Object.entries(spotSitePlans)){
  const spot=fishingMapEntries.find(x=>x.slug===slug);assert.ok(spot,slug);assert.ok(!spot.closed,slug);
  assert.equal(spotFieldGuides[slug].sitePlan,p);assert.ok(p.sources.length);assert.ok(p.access.arrival.length>=3);
  assert.match(p.caption,/模式図/);assert.equal(new Set(p.points.map(x=>x.id)).size,p.points.length);
  for(const source of p.sources)assert.equal(new URL(source.url).protocol,'https:');
  for(const pt of p.points){assert.ok(pt.x>=24&&pt.x<=616&&pt.y>=24&&pt.y<=316);assert.ok(pt.fish.length);assert.ok(pt.methods.length);assert.ok(pt.technique.length>=45);}
  for(const shape of p.shapes)for(const pair of shape.points.split(' ')){
   const [x,y]=pair.split(',').map(Number);assert.ok(Number.isFinite(x)&&Number.isFinite(y)&&x>=0&&x<=640&&y>=0&&y<=340);
  }
 }
});
test('current venue restrictions remain explicit in illustrated guidance',()=>{
 const text=slug=>JSON.stringify(spotSitePlans[slug]);
 assert.match(text('amagasaki-uoturi'),/ルアーは禁止/);
 assert.match(text('nanko-fishing-park'),/ルアー可、遠投の餌釣り不可/);
 assert.match(text('wakasu-fishing'),/撒き餌は禁止/);
 assert.match(text('atami-port-fishing'),/港内/);
});
