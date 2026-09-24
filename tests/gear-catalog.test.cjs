const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(r,...args){return resolve.call(this,r.startsWith('@/')?path.join(root,r.slice(2)):r,...args)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {searchSite}=require('../lib/site-search');
test('gear catalog filters intersect and every relation and image resolves',()=>{
 const {gearCatalog,filterGear}=require('../lib/gear-catalog'),{getMethod}=require('../lib/method-registry'),{getFishProfile}=require('../lib/fish-registry'),{amazonSearchUrl}=require('../lib/affiliate-products');
 assert.equal(new Set(gearCatalog.map(g=>g.slug)).size,gearCatalog.length);
 for(const g of gearCatalog){for(const m of g.methods)assert.ok(getMethod(m),m);for(const f of g.fish)assert.ok(getFishProfile(f),f);assert.ok(g.image&&fs.existsSync(path.join(root,'public',g.image.src)),g.slug);assert.ok(g.image.permission);assert.equal(new URL(amazonSearchUrl(g.name)).searchParams.get('tag'),'uolink-22')}
 assert.ok(filterGear({brand:'DAIWA',kind:'rod'}).every(p=>p.kind==='rod'&&p.brand==='DAIWA'));assert.equal(filterGear({q:'存在しない型番'}).length,0);assert.ok(filterGear({q:'ＳＰＥ ８３２'}).length);assert.ok(searchSite('ナスキー','gear').some(p=>p.href.startsWith('/gear/')));
});
test('expanded gear kinds can be filtered and explicit pairing exclusions are preserved',()=>{
 const {gearCatalog,filterGear,getGearProduct}=require('../lib/gear-catalog');
 for(const kind of ['rod','reel','egi','lure']){const found=filterGear({kind});assert.ok(found.length);assert.ok(found.every(p=>p.kind===kind))}
 assert.ok(filterGear({brand:'YAMASHITA',kind:'egi',method:'eging'}).length>=2);
 for(const p of gearCatalog)for(const slug of p.relatedGear??[])assert.ok(getGearProduct(slug));
 assert.deepEqual(getGearProduct('jackall-bigbacker-107-buri').relatedGear,[]);
});
test('gear subtype filters and pagination retain distinct models without invalid page offsets',()=>{
 const {gearCatalog,filterGear,paginateGear,getGearSubtype}=require('../lib/gear-catalog');
 const minnow=filterGear({kind:'lure',subtype:'minnow'});assert.ok(minnow.length);assert.ok(minnow.every(p=>getGearSubtype(p)==='minnow'));
 assert.deepEqual(filterGear({kind:'reel',subtype:'minnow'}),filterGear({kind:'reel'}));
 for(const input of ['-1','0','NaN','1.2',undefined])assert.equal(paginateGear(gearCatalog,input).page,1);
 assert.ok(paginateGear(gearCatalog,'999999').page<=Math.ceil(gearCatalog.length/24));
 const many=Array.from({length:49},(_,i)=>({...gearCatalog[0],slug:String(i)}));
 assert.equal(paginateGear(many,'2').items[0].slug,'24');assert.equal(paginateGear(many,'3').items.length,1);
 for(const p of gearCatalog)if(p.variants){assert.ok(p.variants.headers.length>=2);for(const row of p.variants.rows)assert.equal(row.length,p.variants.headers.length,p.slug)}
});
test('series catalog validates taxonomy, sources, representative specifications and model search',()=>{
 const {gearCatalog,gearKindLabels,gearSubtypeLabels,filterGear}=require('../lib/gear-catalog');
 const sources=JSON.parse(fs.readFileSync(path.join(root,'docs/gear-image-sources.json'),'utf8'));
 for(const p of gearCatalog){assert.ok(gearKindLabels[p.kind]);if(p.subtype)assert.ok(gearSubtypeLabels[p.subtype]);assert.equal(new URL(p.source).protocol,'https:');assert.ok(sources.some(s=>s.slug===p.slug));if(p.variants){assert.ok(p.variants.rows.length);assert.equal(new Set(p.variants.rows.map(row=>JSON.stringify(row))).size,p.variants.rows.length);assert.ok(p.image.caption.includes('シリーズ'));assert.ok(!p.variants.headers.some(h=>/JAN|価格/.test(h)))}}
 assert.ok(filterGear({q:'TGベイト250'}).some(p=>p.slug==='daiwa-huz2stf'));
 assert.ok(filterGear({kind:'lure',subtype:'metalJig'}).length>=10);
 for(const kind of ['line','cooler','tool','rig','storage','net'])assert.ok(filterGear({kind}).length>=5);
});

test('gear links use explicit relationships, diverse categories and verified colors',()=>{
 const {selectRelatedGear,gearCatalog,filterGear}=require('../lib/gear-catalog');
 const items=selectRelatedGear({method:'eging'});assert.ok(items.length>2);assert.ok(items.every(p=>p.methods.includes('eging')));assert.ok(new Set(items.map(p=>p.kind)).size>1);
 assert.ok(selectRelatedGear({fish:'aji'}).every(p=>p.fish.includes('aji')));assert.equal(selectRelatedGear({method:'no-such-method'}).length,0);
 const colors=gearCatalog.filter(p=>p.colors?.length);assert.ok(colors.length>=60);
 for(const p of colors){assert.equal(new Set(p.colors.map(c=>c.name)).size,p.colors.length);assert.ok(p.colors.every(c=>c.name.trim().length&&Array.isArray(c.models)))}
 assert.ok(filterGear({q:'ケイムラ',kind:'lure'}).some(p=>p.colors?.some(c=>c.name.includes('ケイムラ'))));
});

test('subtype choices belong to their selected kind and stale subtype URLs reset safely',()=>{
 const {gearSubtypesForKind,normalizeGearFilters,filterGear}=require('../lib/gear-catalog');
 assert.deepEqual(gearSubtypesForKind('rod'),[]);
 assert.ok(gearSubtypesForKind('lure').includes('pencil'));
 assert.ok(!gearSubtypesForKind('line').includes('pencil'));
 assert.equal(normalizeGearFilters({kind:'rod',subtype:'pencil'}).subtype,'');
 assert.deepEqual(filterGear({kind:'rod',subtype:'pencil'}),filterGear({kind:'rod'}));
});
test('new gear series group sizes and powers in existing model tables',()=>{
 const {gearCatalog,getGearProduct}=require('../lib/gear-catalog');
 assert.ok(gearCatalog.length>=513);
 assert.equal(new Set(gearCatalog.map(p=>p.source)).size,gearCatalog.length);
 const grappler=getGearProduct('shimano-grappler-type-j');assert.equal(grappler.variants.rows.length,20);
 const emeraldas=gearCatalog.find(p=>p.kind==='rod'&&p.name==='エメラルダス MX');assert.ok(emeraldas.variants.rows.length>3);
 assert.ok(emeraldas.variants.headers.some(h=>h.includes('全長')));
 const makimaki=getGearProduct('hayabusa-jackeye-makimaki');assert.equal(makimaki.subtype,'metalJig');assert.ok(makimaki.colors.length);
});

test('NASCI and newly added reels are series pages with model variations',()=>{
 const {gearCatalog,getGearProduct,filterGear}=require('../lib/gear-catalog');
 const nasci=getGearProduct('shimano-nasci-c3000');assert.equal(nasci.name,'ナスキー');
 assert.ok(nasci.variants.rows.some(row=>row[0]==='C3000'));
 assert.ok(nasci.variants.rows.some(row=>row[0]==='4000'));
 assert.equal(gearCatalog.filter(p=>p.name==='ナスキー').length,1);
 for(const name of ['セドナ','サハラ','バルケッタ']){const p=gearCatalog.find(p=>p.name===name);assert.ok(p);assert.equal(p.kind,'reel');assert.ok(p.variants.rows.length>1)}
 assert.ok(filterGear({kind:'reel'}).length>=210);
 for(const p of gearCatalog)if(p.sources){assert.ok(p.sources.every(s=>s.label&&new URL(s.url).protocol==='https:'))}
});

test('every gear detail has sourced reading content and tables contain only model rows',()=>{
 const {gearCatalog,getGearProduct}=require('../lib/gear-catalog');
 const {getGearEditorial}=require('../lib/gear-editorial');
 for(const p of gearCatalog){
  const article=getGearEditorial(p.slug);assert.ok(article,p.slug);
  assert.ok(article.overview.length>30&&article.use.length>50&&article.selection.length>20,p.slug);
  assert.ok(article.sourceUrls.includes(p.source),p.slug);
  for(const url of article.sourceUrls)assert.equal(new URL(url).protocol,'https:');
  for(const row of p.variants?.rows??[])assert.ok(!/(^| \/ )(品番|アイテム|型番)$/.test(row[0]),p.slug);
 }
 assert.equal(getGearProduct('shimano-nasci-c3000').variants.rows.length,12);
 assert.match(getGearEditorial('shimano-nasci-c3000').overview,/インフィニティドライブ/);
 const barchetta=gearCatalog.find(p=>p.name==='バルケッタ');assert.match(getGearEditorial(barchetta.slug).overview,/カウンター/);
 const emeraldReel=gearCatalog.find(p=>p.kind==='reel'&&p.name.includes('エメラルダス AIR'));
 if(emeraldReel)assert.doesNotMatch(getGearEditorial(emeraldReel.slug).overview,/ロッドシリーズ/);
 assert.equal(getGearEditorial('not-a-product'),undefined);
 // Long-form text must remain a detail-page dependency, not part of the search catalogue.
 assert.doesNotMatch(fs.readFileSync(path.join(root,'lib/gear-catalog.ts'),'utf8'),/from ['"].*gear-editorial/);
});
