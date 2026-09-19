const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {getGuide}=require('../lib/all-guides.ts');
test('social drafts reuse GUIDE facts, fit standard X posts, and have reproducible assets and UTM',()=>{
 const {socialDrafts,createSocialDraft}=require('../lib/guide-social.ts');
 const saved=JSON.parse(fs.readFileSync(path.join(root,'public/social/queue.json')));
 assert.deepEqual(saved.drafts,socialDrafts);assert.ok(socialDrafts.length>=38);assert.equal(new Set(socialDrafts.map(d=>d.id)).size,socialDrafts.length);
 assert.throws(()=>createSocialDraft('not-a-guide','bad'));
 for(const d of socialDrafts){assert.ok(d.maxWeightedLength<=280);assert.ok(d.tips.every(p=>getGuide(d.guideSlug).sections.some(s=>s.points?.includes(p))));const u=new URL(d.url);assert.equal(u.pathname,`/guide/${d.guideSlug}`);assert.equal(u.searchParams.get('utm_source'),'x');assert.ok(u.searchParams.get('utm_content').includes(d.thumbnailVariant));assert.equal(d.status,'draft');const bytes=fs.readFileSync(path.join(root,'public',d.thumbnail));const size=require('next/dist/compiled/image-size')(bytes);assert.equal(size.type,'jpg');assert.equal(size.width,1200);assert.equal(size.height,630);assert.ok(bytes.length<500000);}
});

test('GUIDE sharing exposes a large absolute image to social crawlers',()=>{
 const {guideSharing}=require('../lib/guide-sharing.ts');
 for(const slug of ['aji-sabiki-depth','fishing-first-checklist','fishing-map-permission-check']){
  const sharing=guideSharing(slug);assert.equal(sharing.twitter.card,'summary_large_image');
  const image=sharing.openGraph.images[0];assert.equal(image.width,1200);assert.equal(image.height,630);
  assert.equal(new URL(image.url).origin,'https://uolink.jp');assert.ok(fs.existsSync(path.join(root,'public',new URL(image.url).pathname)));
 }
});
