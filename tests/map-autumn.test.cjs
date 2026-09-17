const test=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),path=require('path'),Module=require('module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {fishingMapEntries}=require('../lib/fishing-map-data');
test('autumn map additions preserve checked access points and coast opening restrictions',()=>{
 const {autumnMapGrowth}=require('../lib/fishing-map-autumn-growth'),{validateFishingMap}=require('../lib/map-validation');
 assert.equal(autumnMapGrowth.length,157);
 assert.equal(validateFishingMap(fishingMapEntries).filter(i=>i.level==='error').length,0);
 for(const e of autumnMapGrowth){assert.equal(fishingMapEntries.filter(x=>x.slug===e.slug).length,1);assert.ok(e.sources.length&&e.verifiedAt&&e.positionNote,e.slug);assert.ok(e.note.length>30&&e.caution.length>=2,e.slug);assert.ok(!e.closed,e.slug);}
 for(let n=1;n<=5;n++){const p=autumnMapGrowth.find(x=>x.slug==='niigata-west-pier-'+n);assert.equal(p.primaryType,'pier');assert.match(p.season,/2026年4月22日/);assert.ok(p.caution.some(x=>x.includes('夜間')));}
 assert.ok(autumnMapGrowth.find(x=>x.slug==='kanazawa-ohama-fishing-quay').caution.some(x=>x.includes('11〜3月')));
 for(const pref of ['富山県','石川県','新潟県','福井県','鳥取県'])assert.ok(autumnMapGrowth.filter(x=>x.prefecture===pref).length>=4);
});

 test('MAP aliases resolve through the common fish registry without guessing species groups',()=>{const {getFishByName}=require('../lib/fish-registry');const e=fishingMapEntries.find(s=>s.slug==='toyama-taiseimaru');assert.ok(e.fishSlugs.includes('aji'));for(const s of fishingMapEntries){for(const name of s.fish){const f=getFishByName(name);if(f)assert.ok(s.fishSlugs.includes(f.slug));}}assert.equal(getFishByName('青物'),undefined);});
