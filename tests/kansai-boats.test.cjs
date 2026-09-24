const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {kansaiBoatSeptemberEntries:batch}=require('../lib/fishing-map-kansai-boats-20260924'),{fishingMapEntries:all,getSpotsForMethod}=require('../lib/fishing-map-data'),{fishSlugs}=require('../lib/fish-registry'),{methodDetails}=require('../lib/method-registry'),{catchSources}=require('../lib/catches/sources');
test('Kansai operators use unique IDs, boarding coordinates, sourced facts and valid relations',()=>{
 assert.equal(batch.length,90);assert.equal(new Set(all.map(e=>e.slug)).size,all.length);
 for(const e of batch){assert.equal(e.type,'boat');assert.equal(e.primaryType,'boat');assert.ok(e.lat>33&&e.lat<36&&e.lng>134&&e.lng<136);assert.ok(e.sources.some(s=>s.url.startsWith('https://www.fishing-v.jp/choka/')));assert.match(e.positionNote,/乗船/);assert.ok(e.note.length>40);assert.ok(e.fishSlugs.every(s=>fishSlugs.includes(s)),e.slug);assert.ok(e.methodSlugs.every(s=>methodDetails[s]),e.slug);assert.ok(all.some(x=>x.slug===e.slug));}
 const restricted=batch.find(e=>e.slug==='kansai-boat-11248');assert.equal(restricted.kids,false);assert.ok(restricted.caution.some(s=>s.includes('中学生以下')));
 assert.ok(getSpotsForMethod('omorig').some(e=>e.slug==='kansai-boat-1748'));assert.ok(getSpotsForMethod('bachikon').some(e=>e.slug==='kansai-boat-12800'));
});
test('new catch integrations map to real spots and preserve official/external distinction',()=>{
 const additions=catchSources.filter(s=>s.id.startsWith('fishing-vision-kansai-'));assert.equal(additions.length,12);
 for(const s of additions){assert.equal(s.sourceType,'external');assert.ok(all.some(e=>e.slug===s.spotSlug));assert.equal(new URL(s.endpoint).hostname,'www.fishing-v.jp');assert.ok(s.enabled);}
 const official=catchSources.find(s=>s.id==='amagasaki-official');assert.equal(official.sourceType,'official');assert.equal(official.spotSlug,'amagasaki-uoturi');assert.equal(new Set(catchSources.map(s=>s.id)).size,catchSources.length);
});
test('ambiguous deep-water names do not become unrelated scorpionfish records',()=>{
 const {parseFishingVision}=require('../lib/catches/boat-parser');
 const html='<div class="choka_box"><li class="date">2026年9月24日</li><table>'+['オコゼ','オニカサゴ','アコウ','アジ'].map(n=>`<tr><td>1</td><td>${n}</td><td>船中 5匹</td><td>20cm</td></tr>`).join('')+'</table>';
 const rows=parseFishingVision(html,'https://www.fishing-v.jp/choka/choka_detail.php?s=1','test',new Date('2026-09-24T12:00:00Z'));assert.deepEqual(rows.map(r=>r.fishSlug),['aji']);
});
