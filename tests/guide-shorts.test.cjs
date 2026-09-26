const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {root,getShortPlans,shortUrl}=require('../scripts/shorts/load.cjs');
const {transition,validatePublication,fingerprint}=require('../scripts/shorts/state.cjs');
test('short edits retain real GUIDE anchors, available assets and mobile-readable scenes',()=>{
 const plans=getShortPlans();assert.equal(plans.length,12);assert.equal(new Set(plans.map(p=>p.id)).size,plans.length);
 for(const p of plans){assert.ok(fs.existsSync(path.join(root,'public',p.image.split('?')[0])),p.id);assert.equal(p.duration,30);assert.equal(p.scenes.length,5);for(const s of p.scenes){assert.ok(s.seconds>=4);assert.ok(s.text.split('\n').every(l=>Array.from(l).length<=18),s.text);}assert.equal(p.sourceAnchors.length,3);}
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
