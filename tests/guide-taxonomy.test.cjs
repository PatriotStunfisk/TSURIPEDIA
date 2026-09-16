const test=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),path=require('path'),Module=require('module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...args){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...args)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {allGuides,getGuide,getParentGuide,getGuideQuestions,getGuidesForFish}=require('../lib/all-guides.ts');
const {guideTopics,filterGuides,guideReadingMinutes}=require('../lib/guide-taxonomy.ts');
const {fish}=require('../lib/data.ts'),{methodDetails}=require('../lib/method-registry.ts');
test('all guide articles have distinct explicit type and topic with valid registry tags',()=>{
 assert.equal(new Set(allGuides.map(g=>g.slug)).size,allGuides.length);
 for(const g of allGuides){assert.ok(['GUIDE','QUICK GUIDE'].includes(g.articleType),g.slug);assert.ok(guideTopics[g.topic]);assert.ok(g.readingMinutes>=1);for(const f of g.fishTags)assert.ok(fish.some(x=>x.slug===f),`${g.slug}: ${f}`);for(const m of g.methodTags)assert.ok(methodDetails[m],`${g.slug}: ${m}`);if(g.parentGuide){assert.equal(getGuide(g.parentGuide)?.articleType,'GUIDE');assert.notEqual(g.slug,g.parentGuide);}}
 assert.equal(getGuide('tachiuo-tenya-action').articleType,'GUIDE');assert.equal(getGuide('tachiuo-tenya-40-vs-50').articleType,'QUICK GUIDE');
});
test('quick questions link both ways to a systematic guide and fish registry',()=>{
 for(const slug of ['sabiki-rig-too-long','leader-knot-catching-guide','eging-crosswind-line']){const p=getParentGuide(slug);assert.ok(p);assert.ok(getGuideQuestions(p.slug).some(g=>g.slug===slug));}
 assert.ok(getGuidesForFish('aji').some(g=>g.slug==='sabiki-rig-too-long'));
 assert.equal(getParentGuide('tachiuo-tenya-40-vs-50')?.slug,'tachiuo-tenya-action');
});
test('cross-type search supports combined filters and normalized fullwidth input',()=>{
 assert.ok(filterGuides(allGuides,{q:'タチウオ'}).some(g=>g.articleType==='GUIDE'));
 const quick=filterGuides(allGuides,{q:'タチウオ',type:'QUICK GUIDE',topic:'tackle'});assert.ok(quick.length);assert.ok(quick.every(g=>g.articleType==='QUICK GUIDE'&&g.topic==='tackle'));
 assert.ok(filterGuides(allGuides,{fish:'aji',method:'sabiki',type:'QUICK GUIDE'}).some(g=>g.slug==='sabiki-rig-too-long'));
 assert.deepEqual(filterGuides(allGuides,{q:'ＰＥ'}).map(g=>g.slug),filterGuides(allGuides,{q:'PE'}).map(g=>g.slug));assert.equal(filterGuides(allGuides,{q:'存在しない検索語XYZ'}).length,0);
});
test('reading time excludes metadata and URL length',()=>{const g=getGuide('sabiki-rig-too-long');assert.equal(guideReadingMinutes(g),guideReadingMinutes({...g,summary:'x'.repeat(50000),related:[{label:'test',href:'x'.repeat(50000)}]}));});
test('new quick guide shopping uses central tagged URLs after the answer',()=>{const {amazonSearchUrl,guideTripTools,tripTools}=require('../lib/affiliate-products.ts');for(const slug of ['sabiki-rig-too-long','leader-knot-catching-guide','tachiuo-tenya-40-vs-50'])for(const key of guideTripTools[slug])assert.equal(new URL(amazonSearchUrl(tripTools[key].query)).searchParams.get('tag'),'uolink-22');});
