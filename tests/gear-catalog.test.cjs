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
 assert.equal(filterGear({kind:'reel',subtype:'minnow'}).length,0);
 for(const input of ['-1','0','NaN','1.2',undefined])assert.equal(paginateGear(gearCatalog,input).page,1);
 assert.ok(paginateGear(gearCatalog,'999999').page<=Math.ceil(gearCatalog.length/24));
 const many=Array.from({length:49},(_,i)=>({...gearCatalog[0],slug:String(i)}));
 assert.equal(paginateGear(many,'2').items[0].slug,'24');assert.equal(paginateGear(many,'3').items.length,1);
 for(const p of gearCatalog)if(p.variants){assert.ok(p.variants.headers.length>=2);for(const row of p.variants.rows)assert.equal(row.length,p.variants.headers.length,p.slug)}
});
test('series catalog validates taxonomy, sources, representative specifications and model search',()=>{
 const {gearCatalog,gearKindLabels,gearSubtypeLabels,filterGear}=require('../lib/gear-catalog');
 const sources=JSON.parse(fs.readFileSync(path.join(root,'docs/gear-image-sources.json'),'utf8'));
 for(const p of gearCatalog){assert.ok(gearKindLabels[p.kind]);if(p.subtype)assert.ok(gearSubtypeLabels[p.subtype]);assert.equal(new URL(p.source).protocol,'https:');assert.ok(sources.some(s=>s.slug===p.slug));if(p.variants){assert.ok(p.variants.rows.length);assert.ok(p.variants.rows.length<=24);assert.ok(p.image.caption.includes('シリーズ'));assert.ok(!p.variants.headers.some(h=>/JAN|価格/.test(h)))}}
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
