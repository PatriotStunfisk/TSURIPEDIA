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
 const priorSources=catchSources.splice(0);catchSources.push(...['bad','good'].map(id=>({id,name:id,sourceType:'official',format:'json',endpoint:'https://example.com/'+id,allowedHosts:['example.com'],permissionUrl:'https://example.com/terms',enabled:true})));
 global.fetch=async url=>{if(String(url).endsWith('bad'))throw Error('local failure');return Response.json({catches:[{id:'one',date,fishSlug:'aji',spotSlug:'naruohama',summary:'local fixture',sourceUrl:'https://example.com/report'}]});};store.storeRequest=async(url,init)=>{calls.push({url,init});return Response.json(url.startsWith('/rest/v1/external_catches?on_conflict')?[{id:'saved'}]:[]);};
 try{const results=await refreshExternalCatches();assert.equal(results[0].status,'failed');assert.equal(results[1].status,'success');assert.equal(results[1].inserted,1);assert.ok(calls.filter(c=>c.init.method==='DELETE').every(c=>!c.url.includes('catch_reports')));assert.equal(calls.filter(c=>c.url==='/rest/v1/catch_import_runs').length,2);}finally{catchSources.splice(0,catchSources.length,...priorSources);global.fetch=oldFetch;store.storeRequest=oldStore;}
});

test('official structured rows exclude prose, photos and ambiguous fish names',()=>{
 const {parseNaruohama}=require('../lib/catches/official-parser');
 const rows=parseNaruohama('<div id="choka1" class="c_anchor"></div><p class="date">2026年9月20日（日）</p><ul class="data"><li><span>カタクチイワシ　8-12cm　</span>合計 50 匹</li><li><span>魚種不明　10cm</span></li></ul><p class="txt">アジもいるという未確認の文章</p><img src="private.jpg">','https://www.naruohama-park.com/choka/');
 assert.equal(rows.length,1);assert.equal(rows[0].date,'2026-09-20');assert.ok(!('sizeCm' in rows[0]));assert.ok(!JSON.stringify(rows).includes('private.jpg'));assert.throws(()=>parseNaruohama('<html>changed</html>','https://example.com'));
});
test('preview centering leaves marker in the uncovered area without changing scale',()=>{
 const {previewMapCenter}=require('../lib/map-preview-position');
 assert.deepEqual(previewMapCenter(1000,600,{left:12,top:12,right:312,bottom:280}),{x:656,y:300});
 assert.deepEqual(previewMapCenter(390,560,{left:10,top:360,right:380,bottom:550}),{x:195,y:180});
});

test('facility reports exclude notices and retain only exact individual sizes',()=>{
 const {parseTottopark}=require('../lib/catches/official-parser');
 const make=(name,size)=>`<table width="100%"><td>釣り公園 2026-09-20<a href="./fish_details.php?sea_id=123"></a></td><td width="40%" class="tp2">${name}</td><td width="30%" class="tp2">${size}</td><td colspan="3">private name</td></table>`;
 const rows=parseTottopark(make('おしらせ','')+make('小アジ（マアジ）','18cm')+make('タチウオ','70-90cm'),'https://minnaga.com/system/totopark/contents/fish/fish_listup.php');
 assert.equal(rows.length,2);assert.equal(rows[0].fishSlug,'aji');assert.equal(rows[0].sizeCm,18);assert.equal(rows[1].sizeCm,undefined);assert.ok(!JSON.stringify(rows).includes('private name'));
});

test('ANGLERS facts distinguish fish quantity from post counts and enforce exact mapped area',()=>{
 const {anglersCandidates,parseAnglersCatch}=require('../lib/catches/anglers-parser');
 assert.deepEqual(anglersCandidates('<a href="/catches/42"><div>2026.09.18</div><span>2釣果</span></a><a href="/catches/43"><div>2025.09.18</div></a>',now),['https://anglers.jp/catches/42']);
 const table='<dl><dt>釣れた日</dt><dd>2026年09月18日 21:30</dd><dt>魚種</dt><dd><a href="/fishes/57">サヨリ</a></dd><dt>匹数</dt><dd>12匹</dd><dt>サイズ</dt><dd>25.0cm</dd><dt>エリア</dt><dd><a href="/areas/2335">鳴尾浜</a></dd></dl>';
 const r=parseAnglersCatch(table,'https://anglers.jp/catches/42','2335','naruohama');assert.equal(r.count,12);assert.equal(r.sizeCm,25);assert.equal(r.fishSlug,'sayori');assert.equal(parseAnglersCatch(table,'https://anglers.jp/catches/42','874','amagasaki'),null);
 assert.equal(parseAnglersCatch(table.replace('12匹','2釣果'),'https://anglers.jp/catches/42','2335','naruohama').count,undefined);
});
