const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(r,...args){return resolve.call(this,r.startsWith('@/')?path.join(root,r.slice(2)):r,...args)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {getGuideListing,guideListingMetadata}=require('../lib/guide-listing');
test('unfiltered guide pages each identify their own displayed page and retain sharing image',()=>{
 const first=guideListingMetadata({}),second=guideListingMetadata({page:'2',utm_source:'x'});
 assert.equal(first.alternates.canonical,'https://uolink.jp/guide');
 assert.equal(second.alternates.canonical,'https://uolink.jp/guide?page=2');
 assert.equal(second.openGraph.url,second.alternates.canonical);assert.equal(second.robots.index,true);
 assert.deepEqual(first.openGraph.images,second.openGraph.images.map(x=>({...x,alt:first.title})));
 const last=getGuideListing({page:'99999'});assert.equal(last.page,last.pages);
 assert.equal(guideListingMetadata({page:'99999'}).alternates.canonical,`https://uolink.jp/guide?page=${last.pages}`);
 for(const page of ['0','-1','invalid'])assert.equal(guideListingMetadata({page}).alternates.canonical,'https://uolink.jp/guide');
});
test('search variants stay usable and followable without generating unlimited indexable duplicates',()=>{
 const listing=getGuideListing({fish:'aji',page:'2',ignored:'x'});assert.ok(listing.results.length);
 const metadata=guideListingMetadata({fish:'aji',page:'2'});assert.equal(metadata.robots.index,false);assert.equal(metadata.robots.follow,true);assert.equal(metadata.robots.googleBot.index,false);
 assert.ok(listing.pageHref(1).includes('fish=aji'));assert.ok(!listing.pageHref(1).includes('page='));assert.ok(!listing.pageHref(1).includes('ignored'));
 assert.equal(guideListingMetadata({q:['x','y']}).robots.index,true);
});
