const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {septemberBoatEntries:entries}=require('../lib/fishing-map-boat-september.ts');
const {fishingMapEntries,getSpotsForMethod}=require('../lib/fishing-map-data.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {getMethod}=require('../lib/method-registry.ts');
const manifest=require('../lib/sharing-images.json');
test('sourced boat additions retain distinct operators, boarding coordinates and working method links',()=>{
 const ids=new Set(entries.map(e=>e.slug));assert.equal(ids.size,entries.length);assert.ok(entries.length>=55);
 for(const e of entries){
  assert.equal(fishingMapEntries.filter(x=>x.slug===e.slug).length,1);
  assert.equal(e.type,'boat');assert.equal(e.primaryType,'boat');assert.ok(e.port&&e.prefecture);
  assert.ok(e.access.length>30&&e.note.length>45);assert.equal(e.verifiedAt,'2026-09-19');
  assert.ok(e.sources.some(x=>x.url===e.officialUrl));assert.ok(e.sources.some(x=>x.url.includes('google.com/maps')));
  for(const m of e.methodSlugs){assert.ok(getMethod(m));assert.ok(getSpotsForMethod(m).some(s=>s.slug===e.slug));}
  const image=manifest['/spots/'+e.slug];assert.ok(image&&fs.existsSync(path.join(root,'public',image)));
 }
 const issues=validateFishingMap(fishingMapEntries).filter(x=>x.slugs.some(s=>ids.has(s)));
 const expected=[['umibozu-five-unami','harbor-toyamaunamigyokou'],['rdr-sakata','empress-sakata'],['tatsumaru-eight-karo','karo-kaishinmaru'],['bentenmaru-ouse','kotobukimaru-ouse'],['kouryoumaru-kuji','oonuki-kuji']].map(x=>x.sort().join('|')).sort();
 assert.ok(issues.every(x=>x.code==='same-coordinate'));assert.deepEqual(issues.map(x=>[...x.slugs].sort().join('|')).sort(),expected);
});
test('requested operators use their boarding ports, not their office addresses',()=>{
 const find=s=>entries.find(x=>x.slug===s);
 assert.match(find('umibozu-five-unami').port,/宇波/);
 assert.match(find('yueimaru-wakayama').prefecture,/和歌山/);
 assert.match(find('mcl-wakayama-minato').port,/湊第一小型船舶係留施設/);
 assert.ok(find('retackle-akashi').lat<34.643);
 assert.match(find('daiyuumaru-suma').port,/須磨/);
});
