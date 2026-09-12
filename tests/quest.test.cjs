const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const resolve=Module._resolveFilename;
Module._resolveFilename=function(request,...args){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,...args)};
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
const {questFish,questMethods}=require('../lib/quest/catalog.ts');
const {questHabitats}=require('../lib/quest/habitats.ts');
const {fishCatalog}=require('../lib/fish-registry.ts');
const {defineFishSpecies}=require('../lib/fish-species/define.ts');
const E=require('../lib/quest/engine.ts');
const P=require('../lib/quest/progress.ts');
const {parseSave}=require('../lib/quest/storage.ts');
const now=Date.parse('2026-09-12T03:00:00Z');
const aji=questFish.find(f=>f.slug==='aji');
const catchOf=(overrides={})=>({id:'test-1',slug:'aji',size:22,grade:'regular',method:'sabiki',habitat:'osaka-bay-pier',at:now,xp:30,...overrides});

test('every QUEST fish uses the catalog identity, season and real method routes',()=>{
 assert.ok(questFish.length>=10);
 for(const f of questFish){const original=fishCatalog.find(x=>x.slug===f.slug);assert.equal(f.name,original.name);assert.deepEqual(f.months,original.months);assert.ok(f.methods.length&&f.habitats.length);assert.ok(f.methods.every(id=>questMethods.some(m=>m.slug===id)));assert.ok(f.maxSize>=f.minSize&&f.minSize>0);}
 for(const h of questHabitats)assert.ok(questMethods.some(m=>E.eligibleFish(questFish,h.slug,m.slug).length));
});
test('a new base profile automatically enters QUEST without a separate game fish registration',()=>{
 const fixture={...fishCatalog.find(f=>f.slug==='aji'),slug:'test-quest-fish',name:'Test fish'};fishCatalog.push(fixture);
 try{delete require.cache[require.resolve('../lib/quest/catalog.ts')];const fresh=require('../lib/quest/catalog.ts').questFish.find(f=>f.slug===fixture.slug);assert.ok(fresh);assert.equal(fresh.name,fixture.name);assert.ok(fresh.methods.includes('sabiki'));assert.equal(fresh.modelSrc,undefined)}finally{fishCatalog.pop();delete require.cache[require.resolve('../lib/quest/catalog.ts')]}
});
test('method and habitat compatibility prevents impossible casts',()=>{
 assert.deepEqual(E.eligibleFish(questFish,'osaka-bay-pier','eging').map(f=>f.slug),['aoriika']);
 assert.deepEqual(E.eligibleFish(questFish,'osaka-bay-pier','tiprun'),[]);
 assert.equal(E.cast(questFish,'unknown','sabiki','a',now).phase,'miss');
 for(const m of ['sabiki','ana','kawahagi','nomase','tai-rubber'])assert.ok(questHabitats.some(h=>E.eligibleFish(questFish,h.slug,m).length));
});
test('seasonal weighting boosts registered months without excluding off-season play',()=>{assert.ok(E.seasonWeight(aji,9)>E.seasonWeight(aji,1));assert.ok(E.seasonWeight(aji,1)>0);assert.equal(E.chooseFish([],9),undefined)});
test('JST day and month roll over consistently at midnight',()=>{const t=Date.parse('2026-09-30T15:00:00Z');assert.equal(E.jstDay(t-1),'2026-09-30');assert.equal(E.jstDay(t),'2026-10-01');assert.equal(E.jstMonth(t),10)});
test('waiting, early hook, missed bite and resumed background tab all terminate safely',()=>{
 const r=E.cast([aji],'osaka-bay-pier','sabiki','a',now,()=>.5);assert.equal(r.phase,'waiting');assert.equal(E.hook(r,now).phase,'miss');assert.equal(E.advance(r,r.biteAt).phase,'bite');assert.equal(E.advance(r,r.deadline+1).phase,'miss');assert.equal(E.hook(r,r.deadline+1).phase,'miss');assert.equal(E.advance({...r,willBite:false},r.biteAt).phase,'miss');
});
test('fight rewards controlled reeling, rejects click spam and handles escape/timeouts',()=>{
 let r=E.cast([aji],'osaka-bay-pier','sabiki','a',now,()=>.5);r=E.hook(r,r.biteAt,()=>1);assert.equal(r.phase,'fight');const hooked=r;let time=r.biteAt;
 r=E.fight(r,'reel',time);assert.equal(E.fight(r,'reel',time+10).progress,r.progress);
 for(let i=0;i<30&&r.phase==='fight';i++){time+=600;r=E.fight(r,r.tension>55?'ease':'reel',time)}
 assert.equal(r.phase,'caught');assert.ok(r.catch.size>=aji.minSize&&r.catch.size<=aji.maxSize);
 assert.equal(E.fight({...hooked,tension:99},'reel',time).phase,'miss');assert.equal(E.advance(hooked,hooked.deadline+1).phase,'miss');
});
test('record-sized rolls and first captures grant bonuses once',()=>{
 const r=E.cast([aji],'osaka-bay-pier','sabiki','a',now,()=>0);assert.equal(r.catch.grade,'record');assert.equal(r.catch.xp,aji.xp+40);
 const first=P.recordCatch(P.emptySave(),catchOf());assert.equal(first.xp,60);assert.equal(first.total,1);assert.equal(P.recordCatch(first,catchOf()),first);
 const second=P.recordCatch(first,catchOf({id:'test-2',size:31}));assert.equal(second.xp,90);assert.equal(second.records.aji.best,31);assert.equal(second.records.aji.count,2);
 assert.deepEqual(parseSave(JSON.stringify(second)),{save:second,status:'ok'});
});
test('mission rewards cannot be claimed early or twice',()=>{
 const empty=P.emptySave();assert.equal(P.claimMission(empty,'first',now),empty);const caught=P.recordCatch(empty,catchOf());const rewarded=P.claimMission(caught,'first',now);assert.equal(rewarded.xp,caught.xp+40);assert.equal(P.claimMission(rewarded,'first',now),rewarded);assert.equal(P.claimMission(rewarded,'nonexistent',now),rewarded);
});
test('squid challenge requires the fish and method on the same catch',()=>{
 let save=P.recordCatch(P.emptySave(),catchOf({slug:'aoriika',method:'tiprun'}));save=P.recordCatch(save,catchOf({id:'other',slug:'aji',method:'eging'}));assert.equal(P.missions(save,now).find(m=>m.id==='eging-squid').progress,0);save=P.recordCatch(save,catchOf({id:'correct',slug:'aoriika',method:'eging'}));assert.equal(P.missions(save,now).find(m=>m.id==='eging-squid').progress,1);
});
test('daily rewards reset by date while lifetime progress persists',()=>{
 let save=P.emptySave();for(let i=0;i<3;i++)save=P.recordCatch(save,catchOf({id:'day-'+i}));const id='daily-catch:'+E.jstDay(now);save=P.claimMission(save,id,now);assert.ok(save.claimed.includes(id));const next=P.missions(save,now+86400000).find(m=>m.id.startsWith('daily-catch:'));assert.equal(next.progress,0);assert.equal(next.claimed,false);assert.equal(save.total,3);
});
test('invalid and future saves are detected without replacing the stored string',()=>{
 assert.equal(parseSave(null).status,'empty');for(const raw of ['{',JSON.stringify({version:1,xp:-1}),JSON.stringify({...P.emptySave(),recent:[{id:3}]})])assert.equal(parseSave(raw).status,'invalid');assert.equal(parseSave('{"version":2}').status,'future');assert.equal(P.levelInfo(99).level,1);assert.equal(P.levelInfo(100).level,2);
});
test('profile validation rejects unsafe game parameters',()=>{const base=fishCatalog[0];for(const quest of [{rarity:0},{biteRate:2},{xp:Infinity},{sizeRange:[30,10]}])assert.throws(()=>defineFishSpecies({base,quest}),/Invalid quest/)});
test('recent history remains bounded while totals and best records survive',()=>{let save=P.emptySave();for(let i=0;i<220;i++)save=P.recordCatch(save,catchOf({id:'bounded-'+i,size:20+i/10}));assert.equal(save.recent.length,200);assert.equal(save.total,220);assert.equal(save.records.aji.count,220);assert.equal(save.records.aji.best,41.9)});
