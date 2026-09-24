const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(r,...args){return resolve.call(this,r.startsWith('@/')?path.join(root,r.slice(2)):r,...args)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {parseTide,parseForecast,japanDate,weatherCities,getCityWeather}=require('../lib/weather');
const {searchSite}=require('../lib/site-search');
test('site search finds fish aliases, cooking, guides and spots without sending index to browser',()=>{
 assert.equal(searchSite('ガシラ')[0].href,'/fish/kasago');
 assert.ok(searchSite('ちぬ','fish').some(r=>r.href==='/fish/chinu'));
 assert.ok(searchSite('カワハギ','cooking').length);assert.ok(searchSite('大阪','spots').length);
 assert.equal(searchSite('   ').length,0);assert.ok(searchSite('サビキ','guide').length);
});
test('tide parser handles signed values and missing extremes, not synthetic curves',()=>{
 const line=Array.from({length:24},(_,i)=>String(i-10).padStart(3)).join('')+'26 924OS'+' 6 5132'+'9999999'.repeat(3)+'2351-16'+'9999999'.repeat(3);
 const d=parseTide(line,'2026-09-24','OS');assert.equal(d.hours[0],-10);assert.equal(d.hours[23],13);
 assert.deepEqual(d.high,[{time:'06:05',height:132}]);assert.deepEqual(d.low,[{time:'23:51',height:-16}]);
 assert.equal(parseTide(line,'2026-09-25','OS'),null);assert.equal(parseTide(line,'2026-09-24','TK'),null);assert.equal(parseTide('bad','2026-09-24','OS'),null);
 assert.equal(japanDate(new Date('2026-09-24T15:01:00Z')),'2026-09-25');
});
test('forecast matches area and date and rejects old bulletins',()=>{
 const f=[{reportDatetime:'2026-09-24T11:00:00+09:00',timeSeries:[{timeDefines:['2026-09-24T11:00:00+09:00'],areas:[{area:{code:'270000'},weathers:['晴れ'],winds:['北の風']}]}]}];
 assert.equal(parseForecast(f,'2026-09-24','270000').weather,'晴れ');assert.equal(parseForecast(f,'2026-09-24','130010'),null);assert.equal(parseForecast(f,'2026-09-28','270000'),null);
});
test('source failures remain isolated and never turn into invented data',async()=>{
 const old=global.fetch;global.fetch=async url=>{if(url.includes('forecast'))return {ok:true,json:async()=>[]};throw Error('network')};
 try{const result=await getCityWeather(weatherCities[5],'2026-09-24');assert.equal(result.forecast,null);assert.equal(result.tide,null)}finally{global.fetch=old}
});
