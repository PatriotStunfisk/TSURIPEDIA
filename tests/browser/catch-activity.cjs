/* Local UI fixtures only; never writes to a production endpoint. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const {spawn}=require('node:child_process'),fs=require('node:fs'),assert=require('node:assert/strict'),path=require('node:path');
const log=fs.openSync('/tmp/uolink-activity-browser-server.log','w');
const server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','-p','3118'],{cwd:path.resolve(__dirname,'../..'),env:{...process.env,CATCH_REPORTS_ENABLED:'false',CATCH_EXTERNAL_ENABLED:'',SUPABASE_SERVICE_ROLE_KEY:'',SUPABASE_URL:'',NEXT_PUBLIC_SUPABASE_URL:''},stdio:['ignore',log,log]});
let browser;
(async()=>{
 for(let i=0;i<100;i++){try{if((await fetch('http://localhost:3118/catches')).ok)break;}catch{}await new Promise(r=>setTimeout(r,300));}
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_EXECUTABLE,args:['--no-sandbox']});
 const activity={spotSlug:'naruohama',level:'hot',score:16,count7:3,count30:4,people:3,sources:1,official:false,fish:[{slug:'aji',count:4}]};
 for(const width of [1280,390]){
  const context=await browser.newContext({viewport:{width,height:844},isMobile:width===390,hasTouch:width===390});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await context.route('**/api/catches/activity?*',r=>r.fulfill({json:{available:true,spots:new URL(r.request().url()).searchParams.get('fish')==='kasago'?[]:[activity]}}));
  await context.route('**/api/catches/external?*',r=>r.fulfill({json:{reports:['official','external'].map(sourceType=>({id:sourceType,source:'LOCAL FIXTURE',sourceType,date:new Date().toISOString().slice(0,10),fishSlug:'aji',spotSlug:'naruohama',summary:'LOCAL TEST ONLY',sourceUrl:'https://example.com/catch/'+sourceType,methodSlug:'sabiki',sizeCm:20}))}}));
  await context.route('**/api/catches?*',r=>r.fulfill({json:{available:true,reports:[]}}));
  await page.goto('http://localhost:3118/spots?near=naruohama&fish=aji&recent=30days',{waitUntil:'domcontentloaded'});
  await page.getByRole('checkbox',{name:'直近30日の釣果がある釣り場のみ'}).waitFor();assert.equal(await page.getByRole('checkbox',{name:'直近30日の釣果がある釣り場のみ'}).isChecked(),true);
  const marker=page.locator('.leaflet-marker-icon').filter({has:page.locator('span')}).first();await marker.waitFor();assert.ok((await marker.getAttribute('class')).includes('hotPin'));
  await marker.click();await page.getByText('🔥 最近の釣果が集まっています',{exact:true}).waitFor();assert.ok((await page.getByLabel('選択地点のプレビュー').innerText()).includes('直近7日：3件'));
  await page.waitForFunction(()=>[...document.querySelectorAll('img.leaflet-tile')].every(img=>img.complete&&img.naturalWidth>0)&&document.querySelectorAll('img.leaflet-tile').length>0,{},{timeout:15000});
  await page.waitForTimeout(400);
  const placement=await page.evaluate(()=>{const map=document.querySelector('.leaflet-container').getBoundingClientRect(),card=document.querySelector('[data-spot-preview]').getBoundingClientRect(),pin=document.querySelector('.leaflet-marker-icon[class*="selectedPin"]').getBoundingClientRect();const mobile=card.width>map.width*.65;return {x:pin.x+pin.width/2-map.x,y:pin.y+pin.height/2-map.y,tx:mobile?map.width/2:(card.right-map.left+map.width)/2,ty:mobile?(card.top-map.top)/2:map.height/2,ratio:card.height/map.height};});
  assert.ok(Math.abs(placement.x-placement.tx)<12&&Math.abs(placement.y-placement.ty)<12,JSON.stringify(placement));if(width===390)assert.ok(placement.ratio<=.46);
  await page.screenshot({path:`/tmp/uolink-hot-${width}.png`});
  await page.goto('http://localhost:3118/spots/naruohama#catch-form',{waitUntil:'domcontentloaded'});const form=page.locator('#catch-form'),combo=form.getByRole('combobox',{name:'魚種（名前・別名で検索）'});
  await combo.fill('ガシラ');if(width===390)await form.getByRole('option',{name:/カサゴ/}).tap();else await form.getByRole('option',{name:/カサゴ/}).click();assert.equal(await form.locator('[name=fishSlug]').inputValue(),'kasago');
  await combo.fill('ちぬ');await page.keyboard.press('Enter');assert.equal(await form.locator('[name=fishSlug]').inputValue(),'chinu');
  await form.getByLabel('サイズ（cm・任意）').fill('63');assert.equal(await form.locator('[name=sizeCm]').inputValue(),'63');
  await form.scrollIntoViewIfNeeded();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:`/tmp/uolink-catch-form-${width}.png`});
  await page.goto('http://localhost:3118/catches',{waitUntil:'domcontentloaded'});await page.getByRole('heading',{name:'HOTな釣り場'}).waitFor();await page.getByText('🔥 最近の釣果が集まっています',{exact:true}).waitFor();await page.getByText('公式情報 · LOCAL FIXTURE',{exact:false}).waitFor();await page.getByText('外部情報 · LOCAL FIXTURE',{exact:false}).waitFor();assert.equal(await page.getByRole('link',{name:'出典の釣果を読む ↗'}).count(),2);await page.getByLabel('サイズ下限（cm）').fill('20');await page.getByLabel('サイズ上限（cm）').fill('80');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await page.goto('http://localhost:3118/fish/aji',{waitUntil:'domcontentloaded'});const link=page.getByRole('link',{name:'最近この魚が釣れている場所を見る →'});assert.equal(await link.getAttribute('href'),'/spots?fish=aji&recent=30days');
  assert.deepEqual(errors,[]);console.log(`PASS ${width}px: HOT ring/preview, recent filter, alias search, keyboard selection, optional size, /catches and fish MAP link; no overflow or page errors`);await context.close();
 }
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();server.kill();});
