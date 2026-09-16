const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
const {distanceKm,hasCoordinates,sortByDistance}=require('../lib/spot-distance.ts');
const {affiliateProducts,productsForMethods,amazonProductUrl}=require('../lib/affiliate-products.ts');
test('nearby ranking is stable, never mutates catalog and puts missing positions last',()=>{
 const origin={lat:35.681,lng:139.767};
 const entries=[{id:'missing'},{id:'osaka',lat:34.702,lng:135.495},{id:'tokyo',...origin},{id:'invalid',lat:Infinity,lng:135},{id:'missing-2'}];
 assert.deepEqual(sortByDistance(entries,origin).map(e=>e.id),['tokyo','osaka','missing','invalid','missing-2']);
 assert.equal(entries[0].id,'missing');assert.equal(distanceKm(origin,origin),0);
 assert.ok(distanceKm(origin,entries[1])>390&&distanceKm(origin,entries[1])<410);
 assert.ok(!hasCoordinates({lat:91,lng:0}));assert.ok(!hasCoordinates({lat:0,lng:181}));assert.ok(hasCoordinates({lat:0,lng:0}));
});
test('affiliate links point to verified product IDs with the authorized store tag',()=>{
 assert.equal(new Set(affiliateProducts.map(p=>p.asin)).size,affiliateProducts.length);
 for(const p of affiliateProducts){const u=new URL(amazonProductUrl(p.asin));assert.equal(u.hostname,'www.amazon.co.jp');assert.equal(u.protocol,'https:');assert.equal(u.searchParams.get('tag'),'uolink-22');assert.equal(u.pathname,`/dp/${p.asin}/ref=nosim`);assert.ok(p.reason&&p.check&&p.checkedAt);}
 assert.throws(()=>amazonProductUrl('../bad'));
 assert.ok(productsForMethods(['sabiki']).length);assert.deepEqual(productsForMethods(['ayu-tomozuri']),[]);
 assert.equal(productsForMethods(['sabiki','eging']).filter(p=>p.asin==='B0DCKBP14Z').length,1);
 assert.ok(!productsForMethods(['tiprun']).some(p=>p.asin==='B078ZW65R7'));
});
test('legacy QUEST records merge without losing catches rewards or best size',()=>{
 const {canonicalizeQuestSave}=require('../lib/quest/species-migration.ts');
 const save={version:1,xp:100,total:5,records:{buri:{count:2,best:90,firstAt:20,lastAt:40},hamachi:{count:3,best:55,firstAt:10,lastAt:50}},methods:{},methodFish:{jigging:['hamachi','buri']},habitatFish:{sea:['hamachi']},daily:{'2026-09-15':{count:5,fish:['buri','hamachi']}},claimed:['first'],recent:[{slug:'hamachi',id:'x',size:55,xp:30}]};
 const migrated=canonicalizeQuestSave(save);
 assert.deepEqual(migrated.records.buri,{count:5,best:90,firstAt:10,lastAt:50});assert.equal(migrated.records.hamachi,undefined);
 assert.equal(migrated.xp,100);assert.equal(migrated.total,5);assert.deepEqual(migrated.methodFish.jigging,['buri']);assert.deepEqual(migrated.daily['2026-09-15'].fish,['buri']);
 assert.equal(migrated.recent[0].slug,'buri');assert.equal(save.recent[0].slug,'hamachi');assert.deepEqual(canonicalizeQuestSave(migrated),migrated);
});
test('Amazon category searches encode terms and retain the public tracking ID',()=>{
 const {amazonSearchUrl}=require('../lib/affiliate-products.ts');const url=new URL(amazonSearchUrl('PE 0.8号 & リーダー'));
 assert.equal(url.hostname,'www.amazon.co.jp');assert.equal(url.searchParams.get('k'),'PE 0.8号 & リーダー');assert.equal(url.searchParams.get('tag'),'uolink-22');
});
