const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {isFreshMapEntry}=require('../lib/map-session.ts');
const entry={referrer:'https://www.google.com/',origin:'https://uolink.jp',navigationType:'navigate',documentUrl:'https://uolink.jp/spots',currentPath:'/spots'};
test('external MAP arrivals reset stale layers but back/reload/internal navigation preserve them',()=>{
 assert.equal(isFreshMapEntry(entry),true);
 assert.equal(isFreshMapEntry({...entry,referrer:''}),true);
 assert.equal(isFreshMapEntry({...entry,navigationType:'reload'}),false);
 assert.equal(isFreshMapEntry({...entry,navigationType:'back_forward'}),false);
 assert.equal(isFreshMapEntry({...entry,referrer:'https://uolink.jp/spots/hira-isoumi'}),false);
 assert.equal(isFreshMapEntry({...entry,documentUrl:'https://uolink.jp/'}),false);
 assert.equal(isFreshMapEntry({...entry,documentUrl:'https://uolink.jp/spots?fish=aji'}),true);
 assert.equal(isFreshMapEntry({...entry,documentUrl:'invalid'}),false);
});
test('search indexes the national map, not query variants, and ignores tracking parameters',()=>{
 const {mapSearchMetadata}=require('../lib/map-search-metadata.ts');
 for(const query of [{fish:'chika'},{prefecture:'大阪府'},{near:'hira-isoumi'},{q:'アジ'}]){
  const meta=mapSearchMetadata(query);assert.equal(meta.robots.index,false);assert.equal(meta.robots.googleBot.index,false);assert.equal(String(meta.alternates.canonical),'https://uolink.jp/spots');assert.equal(meta.robots.follow,true);
 }
 for(const query of [{},{utm_source:'x'},{q:''},{shops:'0'},{type:'all'}])assert.equal(mapSearchMetadata(query).robots,undefined);
});
