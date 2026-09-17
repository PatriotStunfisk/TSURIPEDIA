const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {getSpotCoverage}=require('../lib/spot-coverage.ts');
const {facilityMapExpansion}=require('../lib/fishing-map-facility-expansion.ts');
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const {matchesSpot}=require('../lib/spot-filters.ts');
test('coverage includes empty prefectures and excludes boats, planning areas and closures from the 20-place target',()=>{
 assert.equal(getSpotCoverage([]).length,47);assert.ok(getSpotCoverage([]).every(e=>e.spots===0&&e.remaining===20));
 const entries=[{prefecture:'奈良県',type:'spot'},{prefecture:'奈良県',type:'spot',closed:true},{prefecture:'奈良県',type:'boat'},{prefecture:'奈良県',type:'area'}];
 const n=getSpotCoverage(entries).find(e=>e.prefecture==='奈良県');
 assert.deepEqual(n,{prefecture:'奈良県',region:'関西',total:4,spots:1,boats:1,areas:1,closed:1,target:20,remaining:19});
 assert.equal(getSpotCoverage(Array.from({length:25},()=>entries[0])).find(e=>e.prefecture==='奈良県').remaining,0);
});
test('the next batch adds over 100 distinct sourced places, separate from prior additions',()=>{
 assert.equal(facilityMapExpansion.length,103);assert.equal(new Set(facilityMapExpansion.map(e=>e.prefecture)).size,30);
 const ids=new Set(facilityMapExpansion.map(e=>e.slug));
 assert.equal(fishingMapEntries.filter(e=>ids.has(e.slug)).length,103);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(i=>i.slugs.some(s=>ids.has(s))),[]);
 for(const e of facilityMapExpansion){assert.equal(e.type,'spot');assert.ok(!e.closed);assert.equal(e.verifiedAt,'2026-09-17');assert.ok(e.sources.length>=2&&e.positionNote&&e.officialUrl);assert.ok(e.note&&e.tips.length);assert.notEqual(e.note,e.name);assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);}
});
test('restricted access and seasonal conditions remain visible, with correct method filters',()=>{
 const get=s=>facilityMapExpansion.find(e=>e.slug==='field-'+s);
 assert.match(get('fukuma-kaihin').tips.join(''),/港内側は釣り禁止/);
 assert.match(get('hyakurakuso-pier').name,/宿泊者専用/);
 assert.match(get('izumozaki-bridge').season,/11月〜3月閉鎖/);
 assert.match(get('aomi-camp-fishing').tips.join(''),/キャンプ場利用者に限る/);
 assert.match(get('matsunase-fishing').tips.join(''),/サビキ/);
 assert.ok(!get('matsunase-fishing').methodSlugs.includes('sabiki'));
 assert.ok(matchesSpot(get('lost-lures'),{method:'trout-lure'}));
 assert.ok(!matchesSpot(get('lost-lures'),{method:'freshwater-bait'}));
 assert.ok(matchesSpot(get('zao-tsuribori'),{method:'freshwater-bait'}));
 assert.equal(get('omi-amagonosato').area,'滋賀県・高島市');
});

const {regionalMapGrowth}=require('../lib/fishing-map-regional-growth.ts');
test('regional expansion adds 100 distinct places with 78 in the four requested prefectures',()=>{
 assert.equal(regionalMapGrowth.length,100);
 const ids=new Set(regionalMapGrowth.map(e=>e.slug));
 assert.equal(ids.size,100);
 assert.equal(fishingMapEntries.filter(e=>ids.has(e.slug)).length,100);
 assert.deepEqual(validateFishingMap(fishingMapEntries).filter(i=>i.slugs.some(s=>ids.has(s))),[]);
 for(const [pref,count] of Object.entries({'大阪府':15,'兵庫県':19,'和歌山県':28,'京都府':16}))assert.equal(regionalMapGrowth.filter(e=>e.prefecture===pref).length,count);
 for(const e of regionalMapGrowth){
  assert.equal(e.type,'spot');assert.ok(!e.closed);assert.ok(Number.isFinite(e.lat)&&Number.isFinite(e.lng));
  assert.ok(e.sources.length&&e.positionNote&&e.verifiedAt);assert.ok(e.note.length>45&&e.tips[0].length>25);
  assert.equal(e.parking,undefined);assert.equal(e.toilet,undefined);
 }
});
test('regional access restrictions survive registry and seasonal facilities are labelled',()=>{
 const get=s=>fishingMapEntries.find(e=>e.slug==='regional-'+s);
 assert.match(get('tosaka-port').tips.join(''),/夜釣り禁止/);
 assert.match(get('susami-port').tips.join(''),/稲積島は立入禁止/);
 assert.match(get('sanogawa-mouth').tips.join(''),/係留施設内は釣り禁止/);
 assert.match(get('hamazume-port').tips.join(''),/立入禁止/);
 assert.match(get('izumisano-ichimonji').positionNote,/集合側/);
 assert.match(get('awakan-private-fishing').name,/宿泊者専用/);
 assert.match(get('tarorin-pond').season,/7月中旬〜10月上旬/);
 assert.match(get('woodpark-okazaki-trout').season,/夏季.*休止/);
 assert.equal(get('marinacity-fishing-park').officialUrl,'https://www.marinacity.com/tsuri/');
 assert.ok(!regionalMapGrowth.some(e=>/かもめ大橋|小引漁港|しい茸園有馬富士/.test(e.name)));
 assert.ok(matchesSpot(get('tsutenko-trout'),{method:'trout-lure'}));
 assert.ok(!matchesSpot(get('tsutenko-trout'),{method:'freshwater-bait'}));
});
