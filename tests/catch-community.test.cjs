const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {parseCatch}=require('../lib/catches/types'),{safeCatchReturn}=require('../lib/server/catch-auth');
const store=require('../lib/server/catch-store'),auth=require('../lib/server/catch-auth'),{HttpError}=require('../lib/server/request');
const allowed={fish:new Set(['aji']),spots:new Set(['naruohama']),methods:new Set(['sabiki'])};
const report={id:'12345678-1234-4234-8234-123456789012',source:'real',spotSlug:'naruohama',fishSlug:'aji',count:2,date:'2026-09-16',time:'morning',methodSlug:'sabiki',rig:'',comment:'検証',createdAt:'2026-09-18T00:00:00Z'};
const owner='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',other='bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
test('photos, privacy and return URLs reject untrusted shapes',()=>{
 const photo='data:image/jpeg;base64,AAAA';const p=parseCatch({...report,photos:[photo,photo,photo],released:true,lat:34,lng:135,user_id:owner},allowed);
 assert.equal(p.photos.length,3);assert.equal(p.released,true);assert.ok(!('lat' in p)&&!('lng' in p)&&!('user_id' in p));
 for(const patch of [{photos:[photo,photo,photo,photo]},{photos:['data:image/svg+xml;base64,AAAA']},{photos:['x'.repeat(700001)]},{released:'yes'}])assert.throws(()=>parseCatch({...report,...patch},allowed));
 assert.equal(parseCatch({...report,fishSlug:'other',fishName:'登録外の魚'},allowed).fishName,'登録外の魚');
 for(const url of ['https://evil.example','//evil.example','/\\evil.example','/spots\\evil','/admin/users','javascript:alert(1)'])assert.equal(safeCatchReturn(url),'/catches');
 assert.equal(safeCatchReturn('/spots/naruohama#catch-form'),'/spots/naruohama#catch-form');
});
test('authenticated API flow enforces owner, moderation, reports, quotas and photo cleanup',async()=>{
 const env={SUPABASE_URL:process.env.SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY:process.env.SUPABASE_SERVICE_ROLE_KEY,CATCH_REPORTS_ENABLED:process.env.CATCH_REPORTS_ENABLED};Object.assign(process.env,{SUPABASE_URL:'https://test.invalid',SUPABASE_SERVICE_ROLE_KEY:'test',CATCH_REPORTS_ENABLED:'true'});
 const oldFetch=global.fetch,oldUser=auth.catchUser,oldModerator=auth.requireCatchModerator;let user=owner,quota=true,rows=[],flags=[],photos=new Set(),calls=[];
 auth.catchUser=async(required=true)=>{if(user)return {id:user};if(required)throw new HttpError(401,'login');return null;};
 global.fetch=async(input,init={})=>{const u=new URL(input),body=init.body&&typeof init.body==='string'?JSON.parse(init.body):undefined,method=init.method??'GET';calls.push({path:u.pathname,query:u.search,method,body});
 if(u.pathname.includes('/rpc/'))return Response.json(quota);
 if(u.pathname==='/rest/v1/catch_moderators')return Response.json(user===owner?[{user_id:owner}]:[]);
 if(u.pathname==='/storage/v1/object/sign/catch-photos')return Response.json(body.paths.map(path=>({path,signedURL:'/object/sign/catch-photos/'+path+'?token=test'})));
 if(u.pathname.startsWith('/storage/v1/object/catch-photos/')){photos.add(u.pathname.split('/catch-photos/')[1]);return Response.json({});}
 if(u.pathname==='/storage/v1/object/catch-photos'){for(const p of body.prefixes)photos.delete(p);return Response.json({});}
 if(u.pathname==='/rest/v1/catch_flags'){if(method==='POST')flags.push(body);return Response.json(flags);}
 if(u.pathname==='/rest/v1/catch_reports'){
 const matches=r=>['id','user_id','spot_slug','status','upload_complete','deleted_at'].every(k=>{const filter=u.searchParams.get(k);if(!filter)return true;if(filter==='is.null')return r[k]==null;if(filter==='eq.true')return r[k]===true;if(filter.startsWith('eq.'))return r[k]===filter.slice(3);return true;});
 if(method==='POST'){rows.push({...body,created_at:new Date().toISOString(),deleted_at:null});return Response.json({});}
 const selected=rows.filter(matches);
 if(method==='PATCH')for(const r of selected)Object.assign(r,body);
 if(method==='DELETE')rows=rows.filter(r=>!selected.includes(r));
 return Response.json(selected);
 }throw Error('Unexpected backend request '+u.pathname);};
 auth.requireCatchModerator=async()=>{const u=await auth.catchUser();if(!await auth.isCatchModerator(u.id))throw new HttpError(403,'forbidden');return u;};
 const api=require('../app/api/catches/route'),flagApi=require('../app/api/catches/report/route'),moderateApi=require('../app/api/catches/moderate/route');
 const req=(method,body,path='/api/catches',origin='https://uolink.jp')=>new Request('https://uolink.jp'+path,{method,headers:{origin,'Content-Type':'application/json'},body:JSON.stringify(body)});
 try{
 user=null;assert.equal((await api.POST(req('POST',{report,consent:true}))).status,401);
 user=owner;assert.equal((await api.POST(req('POST',{report,consent:true},'/api/catches','https://evil.example'))).status,403);
 const image=fs.readFileSync(path.join(root,'public',require('../lib/sharing-images.json')['/']));const photo='data:image/jpeg;base64,'+image.toString('base64');
 const result=await api.POST(req('POST',{report:{...report,photos:[photo,photo]},consent:true}));assert.equal(result.status,202);assert.equal(rows[0].user_id,owner);assert.equal(rows[0].status,'approved');assert.equal(photos.size,2);assert.ok(!rows[0].payload.photo&&!rows[0].payload.photos);
 assert.equal((await (await api.GET(new Request('https://uolink.jp/api/catches?spot=naruohama'))).json()).reports.length,1);
 let own=await (await api.GET(new Request('https://uolink.jp/api/catches?mine=1'))).json();assert.equal(own.reports[0].photos.length,2);assert.equal(own.reports[0].isOwn,true);
 user=other;assert.equal((await api.DELETE(req('DELETE',{id:report.id}))).status,404);assert.equal((await moderateApi.POST(req('POST',{id:report.id,action:'approve'}))).status,403);
 user=owner;assert.equal((await moderateApi.POST(req('POST',{id:report.id,action:'approve'}))).status,200);
 user=other;const publicRows=await (await api.GET(new Request('https://uolink.jp/api/catches?spot=naruohama'))).json();assert.equal(publicRows.reports.length,1);assert.equal(publicRows.reports[0].isOwn,false);assert.ok(!('user_id' in publicRows.reports[0]));
 const feed=await api.GET(new Request('https://uolink.jp/api/catches?feed=1&fish=aji&method=sabiki&spot=naruohama'));assert.equal(feed.status,200);assert.equal((await feed.json()).reports.length,1);
 assert.equal((await api.GET(new Request('https://uolink.jp/api/catches?feed=1&fish=invalid'))).status,400);
 assert.equal((await api.GET(new Request('https://uolink.jp/api/catches?feed=1&from=2026-02-31'))).status,400);
 assert.equal((await (await api.GET(new Request('https://uolink.jp/api/catches?feed=1&spot=naruohama&prefecture='+encodeURIComponent('大阪府')))).json()).reports.length,0);
 const before=calls.length;const summary=await (await api.GET(new Request('https://uolink.jp/api/catches?spot=naruohama&summary=1'))).json();assert.equal(summary.reports[0].fishSlug,'aji');assert.ok(!summary.reports[0].photos);assert.ok(calls.slice(before).every(c=>!c.path.includes('storage')));
 assert.equal((await flagApi.POST(req('POST',{id:report.id,reason:'個人情報'}))).status,200);assert.equal(flags[0].user_id,other);
 quota=false;assert.equal((await api.POST(req('POST',{report:{...report,id:'22345678-1234-4234-8234-123456789012'},consent:true}))).status,429);quota=true;
 user=owner;assert.equal((await api.DELETE(req('DELETE',{id:report.id}))).status,200);assert.equal(rows.length,0);assert.equal(photos.size,0);
 }finally{global.fetch=oldFetch;auth.catchUser=oldUser;auth.requireCatchModerator=oldModerator;for(const[k,v]of Object.entries(env)){if(v===undefined)delete process.env[k];else process.env[k]=v;}}
});
