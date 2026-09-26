const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {root,getShortPlans,shortUrl}=require('../scripts/shorts/load.cjs');
const {transition,validatePublication,fingerprint}=require('../scripts/shorts/state.cjs');
test('short edits retain real GUIDE anchors, available assets and mobile-readable scenes',()=>{
 const plans=getShortPlans();assert.equal(plans.length,15);assert.equal(new Set(plans.map(p=>p.id)).size,plans.length);
 for(const p of plans){assert.ok(fs.existsSync(path.join(root,'public',p.image.split('?')[0])),p.id);assert.equal(p.duration,p.renderStyle==='motion-v2'?25:30);assert.equal(p.scenes.length,p.renderStyle==='motion-v2'?9:5);for(const s of p.scenes){assert.ok(s.seconds>=2);assert.ok(s.text.split('\n').every(l=>Array.from(l).length<=18),s.text);}assert.equal(p.sourceAnchors.length,3);}
});
test('platform-specific tracking preserves the canonical GUIDE path',()=>{
 for(const platform of ['youtube','tiktok']){const u=new URL(shortUrl('aji-sabiki-depth',platform,'test'));assert.equal(u.origin,'https://uolink.jp');assert.equal(u.pathname,'/guide/aji-sabiki-depth');assert.equal(u.searchParams.get('utm_source'),platform);assert.equal(u.searchParams.get('utm_content'),'test');}
});
test('publication requires review and cannot silently repeat uncertain or published sends',()=>{
 assert.throws(()=>transition(undefined,'published','https://youtube.com/shorts/123'));
 const review=transition(undefined,'reviewed');assert.equal(review.status,'reviewed');
 const uncertain=transition(review,'uncertain');assert.throws(()=>transition(uncertain,'reviewed'));
 const done=transition(uncertain,'published','https://youtube.com/shorts/123');assert.equal(done.status,'published');assert.throws(()=>transition(done,'published',done.url));assert.throws(()=>transition(review,'published','http://youtube.com/shorts/123'));
 assert.throws(()=>validatePublication('youtube','https://example.com/shorts/a'));assert.throws(()=>validatePublication('tiktok','https://youtube.com/shorts/a'));
 validatePublication('tiktok','https://www.tiktok.com/@uolink/video/1234');validatePublication('youtube','https://www.youtube.com/shorts/abc');
 const p=getShortPlans()[0];assert.notEqual(fingerprint(p),fingerprint({...p,guideTitle:'changed'}));
});

const {sceneAt,diagramState,frameSvg}=require('../scripts/shorts/motion.cjs');
const {musicSamples}=require('../scripts/shorts/music.cjs');
test('motion pilots show each mistake followed by its correction and continuous movement',()=>{
 for(const p of getShortPlans().filter(p=>p.renderStyle==='motion-v2')){
  assert.equal(sceneAt(p,0).scene.phase,'hook');assert.equal(sceneAt(p,2).scene.phase,'ng');assert.equal(sceneAt(p,5).scene.phase,'fix');assert.equal(sceneAt(p,24).scene.phase,'cta');
  for(let i=1;i<=5;i+=2){assert.equal(p.scenes[i].phase,'ng');assert.equal(p.scenes[i+1].phase,'fix');assert.equal(p.scenes[i].item,p.scenes[i+1].item);}
  const a=diagramState(p.topic,p.scenes[2],.1),b=diagramState(p.topic,p.scenes[2],1.5);assert.notDeepEqual(a,b);
  assert.notEqual(frameSvg(p,2.1,''),frameSvg(p,2.8,''));
  assert.equal(p.music.origin,'locally-synthesized-original');
 }
});
test('generated BGM is deterministic, non-silent and below clipping',()=>{
 const a=musicSamples(3,[0,2],8000),b=musicSamples(3,[0,2],8000);assert.deepEqual(a,b);
 let sum=0,peak=0;for(const x of a){assert.ok(Number.isFinite(x));sum+=x*x;peak=Math.max(peak,Math.abs(x));}
 assert.ok(Math.sqrt(sum/a.length)>.02);assert.ok(peak<.95);assert.equal(a.length,24000);
});

test('naming the legacy renderer preserves old publication fingerprints',()=>{const p={id:'legacy',scenes:[]};assert.equal(fingerprint(p),fingerprint({...p,renderStyle:'cards-v1'}));});
