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
