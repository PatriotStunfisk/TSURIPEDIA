const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {ageDays,aggregateActivity,deduplicateSignals}=require('../lib/catches/activity');
const now=new Date('2026-09-20T00:00:00Z');const base={id:'1',source:'uolink',sourceType:'user',actor:'alice',date:'2026-09-20',spotSlug:'naruohama',fishSlug:'aji'};
test('freshness uses JST catch date and rejects future, invalid, and older records',()=>{
 assert.equal(ageDays('2026-09-20',new Date('2026-09-19T15:01:00Z')),0);
 assert.equal(ageDays('2026-02-30',now),Infinity);
 assert.equal(aggregateActivity([base,{...base,id:'2',date:'2026-08-21'},{...base,id:'3',date:'2026-09-21'}],now)[0].count30,1);
 for(const [days,score] of [[6,5],[7,3.5],[13,3.5],[14,2.5],[29,2.5]]){const date=new Date(Date.parse(base.date)-days*86400000).toISOString().slice(0,10);assert.equal(aggregateActivity([{...base,date}],now)[0].score,score);}
});
test('repeat posting by a single user cannot create HOT; independent recent posts can',()=>{
 const repeated=Array.from({length:40},(_,i)=>({...base,id:String(i)}));assert.equal(aggregateActivity(repeated,now)[0].level,'recent');assert.equal(aggregateActivity(repeated,now)[0].score,5);
 const independent=repeated.slice(0,3).map((r,i)=>({...r,actor:String(i)}));assert.equal(aggregateActivity(independent,now)[0].level,'hot');
 assert.equal(aggregateActivity([...repeated,{...base,id:'old',actor:'bob',date:'2026-09-01'}],now)[0].level,'recent');
});
test('external syndication with identical canonical source URL is deduplicated',()=>{
 const ext={...base,sourceType:'official',source:'boat',sourceUrl:'https://example.com/catch/1?utm_source=x'};
 assert.equal(deduplicateSignals([ext,{...ext,id:'2',source:'other',sourceUrl:'https://example.com/catch/1'}]).length,1);
 assert.equal(deduplicateSignals([base,{...base,id:'2'}]).length,2);
});
test('source validation accepts mapped summaries only and never passes photos or GPS',()=>{
 const {parseExternalCatch}=require('../lib/server/external-catches');const source={id:'test',sourceType:'official',allowedHosts:['example.com']};
 const value={...base,sourceUrl:'https://example.com/c/1',summary:'アジの釣果報告',sizeCm:20,photo:'stolen',lat:35};
 const result=parseExternalCatch(value,source,now);assert.equal(result.sizeCm,20);assert.ok(!('photo' in result));assert.ok(!('lat' in result));
 for(const patch of [{sourceUrl:'http://example.com/a'},{sourceUrl:'https://evil.example/a'},{fishSlug:'missing'},{sizeCm:-1},{date:'2026-02-30'},{date:'2026-09-21'}])assert.throws(()=>parseExternalCatch({...value,...patch},source,now));
});

test('recent server query paginates minimal scalar fields and never asks for photos',async()=>{
 const store=require('../lib/server/catch-store'),{activitySignals}=require('../lib/server/catch-activity');const old=store.storeRequest,ready=store.catchStoreReady,external=process.env.CATCH_EXTERNAL_ENABLED;store.catchStoreReady=()=>true;delete process.env.CATCH_EXTERNAL_ENABLED;
 const urls=[];store.storeRequest=async url=>{urls.push(url);return Response.json(url.includes('offset=0')?Array.from({length:1000},(_,i)=>({id:String(i),user_id:'alice',spot_slug:'naruohama',fish_slug:'aji',caught_on:'2026-09-20'})):[]);};
 try{const rows=await activitySignals();assert.equal(rows.length,1000);assert.equal(urls.length,2);assert.ok(urls.every(u=>u.includes('caught_on=gte.')&&!u.includes('payload')&&!u.includes('photo')));assert.ok(urls[1].includes('offset=1000'));}finally{store.storeRequest=old;store.catchStoreReady=ready;if(external===undefined)delete process.env.CATCH_EXTERNAL_ENABLED;else process.env.CATCH_EXTERNAL_ENABLED=external;}
});
test('unconfigured and incorrect cron credentials are rejected',async()=>{
 const cron=require('../app/api/cron/catches/route'),prior=process.env.CRON_SECRET;try{delete process.env.CRON_SECRET;assert.equal((await cron.GET(new Request('https://uolink.jp/api/cron/catches',{headers:{authorization:'Bearer undefined'}}))).status,401);process.env.CRON_SECRET='local-test';assert.equal((await cron.GET(new Request('https://uolink.jp/api/cron/catches'))).status,401);}finally{if(prior===undefined)delete process.env.CRON_SECRET;else process.env.CRON_SECRET=prior;}
});
test('source failures are isolated and cleanup never targets user reports',async()=>{
 const {catchSources}=require('../lib/catches/sources'),store=require('../lib/server/catch-store'),{refreshExternalCatches}=require('../lib/server/external-catches');const oldFetch=global.fetch,oldStore=store.storeRequest;const calls=[];const date=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 catchSources.push(...['bad','good'].map(id=>({id,name:id,sourceType:'official',format:'json',endpoint:'https://example.com/'+id,allowedHosts:['example.com'],permissionUrl:'https://example.com/terms',enabled:true})));
 global.fetch=async url=>{if(String(url).endsWith('bad'))throw Error('local failure');return Response.json({catches:[{id:'one',date,fishSlug:'aji',spotSlug:'naruohama',summary:'local fixture',sourceUrl:'https://example.com/report'}]});};store.storeRequest=async(url,init)=>{calls.push({url,init});return Response.json(url.startsWith('/rest/v1/external_catches?on_conflict')?[{id:'saved'}]:[]);};
 try{const results=await refreshExternalCatches();assert.equal(results[0].status,'failed');assert.equal(results[1].status,'success');assert.equal(results[1].inserted,1);assert.ok(calls.filter(c=>c.init.method==='DELETE').every(c=>!c.url.includes('catch_reports')));assert.equal(calls.filter(c=>c.url==='/rest/v1/catch_import_runs').length,2);}finally{catchSources.splice(0);global.fetch=oldFetch;store.storeRequest=oldStore;}
});
