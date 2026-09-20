// Read-only local content verification. Start the production build on port 3132 first.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_EXECUTABLE});
try{for(const width of [1280,390]){const context=await browser.newContext({viewport:{width,height:844},isMobile:width===390,hasTouch:width===390});const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const slug of ['sabiki-current-cage-side','tairaba-two-layer-current','trout-spoon-hook-weight','float-bead-hole-size']){
 const r=await page.goto('http://localhost:3132/guide/'+slug);assert.equal(r.status(),200);await page.locator('h1').waitFor();assert.equal(await page.locator('table').count(),1);assert.ok((await page.locator('link[rel=canonical]').getAttribute('href')).endsWith('/guide/'+slug));assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
}
await page.screenshot({path:`/tmp/uolink-guide-growth-${width}.png`,fullPage:true});
await page.goto('http://localhost:3132/fish/aji');const notes=page.getByRole('region',{name:'この魚を狙うときの観察ポイント'});await notes.scrollIntoViewIfNeeded();assert.equal(await notes.locator('article').count(),2);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:`/tmp/uolink-fish-growth-${width}.png`});
await page.goto('http://localhost:3132/spots/nanko-fishing-park');const questions=page.getByRole('region',{name:'この釣り場のよくある疑問'});await questions.getByText('ルアーと投げ釣りは同じ扱い？',{exact:true}).click();await questions.getByText(/運営案内はルアー可/).waitFor();await questions.scrollIntoViewIfNeeded();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:`/tmp/uolink-spot-growth-${width}.png`});
await page.goto('http://localhost:3132/guide/sabiki-current-cage-side');assert.equal(await page.getByRole('link',{name:'対象魚・釣り方に合う釣り場を探す →'}).getAttribute('href'),'/spots?fish=aji');
assert.deepEqual(errors,[]);console.log('PASS',width,'article table, canonical, fish notes, spot questions, filtered MAP link, no overflow or page errors');await context.close();}}
finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1});
