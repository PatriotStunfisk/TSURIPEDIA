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
 assert.throws(()=>anglersCandidates('<div id="app"></div>',now));
 assert.deepEqual(anglersCandidates('<a href="/catches/42"><div>2026.09.18</div><span>2釣果</span></a><a href="/catches/43"><div>2025.09.18</div></a>',now),['https://anglers.jp/catches/42']);
 const table='<dl><dt>釣れた日</dt><dd>2026年09月18日 21:30</dd><dt>魚種</dt><dd><a href="/fishes/57">サヨリ</a></dd><dt>匹数</dt><dd>12匹</dd><dt>サイズ</dt><dd>25.0cm</dd><dt>エリア</dt><dd><a href="/areas/2335">鳴尾浜</a></dd></dl>';
 const r=parseAnglersCatch(table,'https://anglers.jp/catches/42','2335','naruohama');assert.equal(r.count,12);assert.equal(r.sizeCm,25);assert.equal(r.fishSlug,'sayori');assert.equal(parseAnglersCatch(table,'https://anglers.jp/catches/42','874','amagasaki'),null);
 assert.equal(parseAnglersCatch(table.replace('12匹','2釣果'),'https://anglers.jp/catches/42','2335','naruohama').count,undefined);
});

test('public server-rendered catch cards yield recent detail URLs without retaining prose or photos',()=>{
 const {anglersCandidates}=require('../lib/catches/anglers-parser');
 const card=(id,date)=>'<div data-react-class="results/ResultCard" data-react-props="'+JSON.stringify({result:{id,caught_at:date,publish_comment:'ignored',image_url:'ignored',fishinglog_published_results_count:99}}).replaceAll('"','&quot;')+'"></div>';
 assert.deepEqual(anglersCandidates(card(123,'2026-09-18T21:30:00+09:00')+card(123,'2026-09-18T21:30:00+09:00')+card(124,'2022-09-18T21:30:00+09:00'),now),['https://anglers.jp/catches/123']);
 assert.throws(()=>anglersCandidates('<div data-react-class="results/ResultCard" data-react-props="{}"></div>',now));
});

test('facility tables map aliases, aggregate without duplicate rows, and omit ranges and narrative',()=>{
 const {parseFacility,facilityLinks}=require('../lib/catches/facility-parser');
 const html='<div id="block184-1"><div data-switch="date">2026-09-20</div><div>カサゴ（アラカブ）/15cm/1尾/ポイントQ<br>カサゴ/20cm/2尾/ポイントR<br>バリ/30～38cm/6尾/ポイントD</div><p>アジが釣れるかもしれません</p><img src="private.jpg">';
 const r=parseFacility(html,'https://umizuri.com/pages/30','fukuoka-fishing','fukuoka-html',now);
 assert.equal(r.length,2);assert.equal(r[0].count,3);assert.equal(r[0].sizeCm,undefined);assert.equal(r[0].countScope,'facility');assert.equal(r[1].fishSlug,'aigo');assert.ok(!JSON.stringify(r).includes('private'));
 assert.equal(parseFacility(html.replaceAll('2026-09-20','2025-09-20'),'https://umizuri.com/pages/30','fukuoka-fishing','fukuoka-html',now).length,0);
 assert.deepEqual(facilityLinks('<a href="/fishing/20260920.html">釣果</a><a href="https://other.example/fishing/20260920.html">釣果</a>','https://shimonoseki-fishingpark.com/fishing/index.html','shimonoseki-html'),['https://shimonoseki-fishingpark.com/fishing/20260920.html']);
});
test('facility daily table parsers ignore sidebar dates, averages, unknown fish and prose',()=>{
 const {parseFacility}=require('../lib/catches/facility-parser');
 const shim='<title>2026年9月20日（日）</title><h4>本日の釣果情報</h4><table><tr><th>ブリ（ヤズ）</th><td>28cm</td><td>1匹</td></tr><tr><th>不明</th><td>10cm</td><td>5匹</td></tr></table>';
 assert.equal(parseFacility(shim,'https://example.com','shimonoseki-fishing','shimonoseki-html',now)[0].sizeCm,28);
 const hira='<h2>2026年9月20日の釣果情報</h2><div class="fishdata-wrapper"><p class="fishdata-name">魚種</p><p class="fishdata-content">マルハギ</p><p class="fishdata-name">サイズ</p><p class="fishdata-content">17㎝</p><p class="fishdata-name">尾数</p><p class="fishdata-content">1尾</p>';
 assert.equal(parseFacility(hira,'https://example.com','hira-isoumi','hiraiso-html',now)[0].fishSlug,'kawahagi');
 const ichi='<p>2026年09月20日(日)</p><div class="flex border-b border-gray-300"><div>フッコ</div><div><p>30～50cm</p></div><div>合計 9匹</div></div>';
 const i=parseFacility(ichi,'https://example.com','ichihara-fishing','ichihara-html',now);assert.equal(i[0].fishSlug,'suzuki');assert.equal(i[0].sizeCm,undefined);
 const happy='<p class="date">2026年09月20日(日)</p><h4>カワハギ　１２～１５cm　５０匹以上　２１番</h4><p>アジが釣れそう</p>';
 const h=parseFacility(happy,'https://example.com','niigata-happyfishing','happy-html',now);assert.equal(h.length,1);assert.equal(h[0].count,undefined);
});

test('repeat imports update changed official quantities without creating duplicate catches',async()=>{
 const {catchSources}=require('../lib/catches/sources'),store=require('../lib/server/catch-store'),{refreshExternalCatches}=require('../lib/server/external-catches');const oldFetch=global.fetch,oldStore=store.storeRequest,prior=catchSources.splice(0),saved=new Map();let count=2,writes=0;
 catchSources.push({id:'fixture',name:'fixture',sourceType:'official',format:'json',endpoint:'https://example.com/data',allowedHosts:['example.com'],permissionUrl:'https://example.com/terms',enabled:true});
 const date=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 global.fetch=async()=>Response.json({catches:[{id:'1',date,fishSlug:'aji',spotSlug:'naruohama',summary:'fixture',sourceUrl:'https://example.com/report',count,countScope:'facility'}]});
 store.storeRequest=async(url,init)=>{if(init.method==='GET')return Response.json([...saved.values()]);if(url.includes('on_conflict')){writes++;for(const r of JSON.parse(init.body))saved.set(r.id,r);}return Response.json([]);};
 try{assert.equal((await refreshExternalCatches())[0].inserted,1);count=5;assert.equal((await refreshExternalCatches())[0].inserted,0);assert.equal(saved.size,1);assert.equal([...saved.values()][0].signal.count,5);await refreshExternalCatches();assert.equal(writes,2);}finally{global.fetch=oldFetch;store.storeRequest=oldStore;catchSources.splice(0,catchSources.length,...prior);}
});

test('source redirects stay on approved hosts and browser challenges stop extraction',async()=>{
 const {catchSources}=require('../lib/catches/sources'),store=require('../lib/server/catch-store'),{refreshExternalCatches}=require('../lib/server/external-catches');
 const prior=catchSources.splice(0),oldFetch=global.fetch,oldStore=store.storeRequest;const urls=[];
 catchSources.push(...['allowed','blocked','challenge'].map(id=>({id,name:id,sourceType:'official',format:'json',endpoint:'https://example.com/'+id,allowedHosts:['example.com'],permissionUrl:'https://example.com/terms',enabled:true})));
 global.fetch=async url=>{urls.push(String(url));if(String(url).endsWith('/allowed'))return new Response(null,{status:301,headers:{location:'/final'}});if(String(url).endsWith('/blocked'))return new Response(null,{status:302,headers:{location:'https://unapproved.example/final'}});if(String(url).endsWith('/challenge'))return new Response('',{status:202,headers:{'x-amzn-waf-action':'challenge'}});return Response.json({catches:[]});};store.storeRequest=async()=>Response.json([]);
 try{const result=await refreshExternalCatches();assert.deepEqual(result.map(r=>r.status),['success','failed','failed']);assert.ok(urls.includes('https://example.com/final'));assert.ok(urls.every(u=>new URL(u).hostname==='example.com'));}finally{catchSources.splice(0,catchSources.length,...prior);global.fetch=oldFetch;store.storeRequest=oldStore;}
});

test('boat aggregation uses explicit boat totals, excludes prose and does not turn ranges into totals',()=>{
 const {parseFishingVision}=require('../lib/catches/boat-parser');
 const row=(fish,count,size='')=>`<tr><td>1</td><td>${fish}</td><td>${count}</td><td>${size}</td><td></td></tr>`;
 const html='<div class="choka_box"><li class="date">2026年9月20日(日)</li><table>'+row('ハマチ・メジロ','0～2 匹 船中 7匹','60～70cm')+row('タチウオ','1～30 匹')+row('マアジ','船中 1匹','20 cm')+row('マアジ','船中 2匹')+row('カサゴ・マアジ','船中 9匹')+row('マダイ','0匹')+row('フグ','船中 9匹')+'</table><p>マダイ999匹</p><img src="photo.jpg">';
 const r=parseFishingVision(html,'https://www.fishing-v.jp/choka/choka_detail.php?s=1','boat-uoe',now);
 assert.equal(r.length,3);assert.equal(r.find(r=>r.fishSlug==='buri').count,7);assert.equal(r.find(r=>r.fishSlug==='tachiuo').count,undefined);assert.equal(r.find(r=>r.fishSlug==='aji').count,3);assert.equal(r.find(r=>r.fishSlug==='aji').sizeCm,undefined);assert.ok(!JSON.stringify(r).includes('photo.jpg'));assert.ok(r.every(r=>r.fishSlug!=='madai'));assert.equal(parseFishingVision(html.replace('2026年9月20日','2025年9月20日'),'https://example.com','boat-uoe',now).length,0);
 assert.throws(()=>parseFishingVision('<html>blocked</html>','https://example.com','boat-uoe',now));
});
test('Amagasaki imports only the official whole-facility table, preserving ranges as unknown size',()=>{
 const {parseFacility,facilityLinks}=require('../lib/catches/facility-parser');
 const html='<title>2026年9月20日（日）</title><p>昨日はマダイ</p><table><tr><th>魚種</th><td>サイズ</td><td>匹数（全体）</td><td>釣り方</td></tr><tr><th>アジ</th><td>8～18cm</td><td>合計100匹</td><td>サビキ</td></tr><tr><th>チヌ</th><td>35cm</td><td>合計1匹</td><td>フカセ</td></tr><tr><th>サバ</th><td>20cm</td><td>0匹</td><td>サビキ</td></tr></table>';
 const url='https://amagasaki-uoturikouen.com/fishing/20260920.html';
 const r=parseFacility(html,url,'amagasaki-uoturi','amagasaki-html',now);
 assert.equal(r.length,2);assert.equal(r[0].count,100);assert.equal(r[0].countScope,'facility');assert.equal(r[0].sizeCm,undefined);assert.equal(r[1].fishSlug,'chinu');assert.equal(r[1].sizeCm,35);
 assert.throws(()=>parseFacility(html.replace('匹数（全体）','個人釣果'),url,'amagasaki-uoturi','amagasaki-html',now));
 assert.deepEqual(facilityLinks('<a href="/fishing/20260920.html"></a><a href="https://other.example/fishing/20260920.html"></a>',url,'amagasaki-html'),[url]);
});

test('public Amagasaki legacy report redirects are narrowly scoped',()=>{
 const {catchSources,canFetchCatchSourceUrl}=require('../lib/catches/sources');
 const source=catchSources.find(s=>s.id==='amagasaki-official');
 assert.equal(canFetchCatchSourceUrl(source,new URL('http://amagasaki-uoturikouen.com/fishing/20260923.html')),true);
 for(const url of ['http://amagasaki-uoturikouen.com/admin','http://amagasaki-uoturikouen.com/fishing/20260923.html?secret=x','http://elsewhere.example/fishing/20260923.html','https://user:password@amagasaki-uoturikouen.com/fishing/20260923.html'])assert.equal(canFetchCatchSourceUrl(source,new URL(url)),false);
 assert.equal(canFetchCatchSourceUrl({...source,id:'another-source'},new URL('http://amagasaki-uoturikouen.com/fishing/20260923.html')),false);
});
