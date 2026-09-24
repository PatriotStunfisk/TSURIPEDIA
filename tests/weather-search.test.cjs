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

test('weather icons summarize the main forecast without promoting localized exceptions',()=>{
 const {describeWeather}=require('../lib/weather-display');
 assert.deepEqual(describeWeather('晴れ 夜 くもり 所により 雨'),{kinds:['sun','cloud'],label:'晴れ・曇り'});
 assert.equal(describeWeather('くもり 後 雨').label,'曇り・雨');
 assert.deepEqual(describeWeather('雪').kinds,['snow']);
});

test('hourly forecast aligns UTC to JST and retains missing data without inventing values',()=>{
 const {mergeHourly,windDirection}=require('../lib/weather-hourly');
 const met={properties:{meta:{updated_at:'2026-09-24T00:00:00Z'},timeseries:[{time:'2026-09-24T01:00:00Z',data:{instant:{details:{air_temperature:24,wind_speed:3,wind_from_direction:90}},next_1_hours:{summary:{symbol_code:'lightrain'},details:{precipitation_amount:0.2}}}}]}};
 const wave={table:{columnNames:['time','Thgt'],rows:[['2026-09-24T01:00:00Z',0.8],['2026-09-24T02:00:00Z',null],['2026-09-23T01:00:00Z',2]]}};
 const result=mergeHourly('2026-09-24',met,wave,Date.parse('2026-09-24T03:00:00Z'));
 assert.equal(result.hours.length,24);assert.equal(result.hours[10].temperature,24);assert.equal(result.hours[10].weather,'雨');assert.equal(result.hours[10].wave,0.8);assert.equal(result.hours[11].wave,null);assert.equal(result.hours[0].wind,null);assert.equal(windDirection(90),'東');
 assert.equal(mergeHourly('2026-09-24',met,null,Date.parse('2026-09-26T03:00:00Z')).published,null);
});

test('weather place search reuses map coordinates and bounds results',()=>{
 const {searchWeatherPlaces,getWeatherPlace}=require('../lib/weather-places');
 assert.equal(searchWeatherPlaces(' ').length,0);assert.ok(searchWeatherPlaces('白浜').length);assert.ok(searchWeatherPlaces('八丈島').length);
 const list=searchWeatherPlaces('大阪');assert.ok(list.length<=20&&list.length>0);const place=getWeatherPlace(list[0].id);assert.ok(Number.isFinite(place.lat)&&Number.isFinite(place.lon));assert.equal(getWeatherPlace('not-a-real-place'),undefined);
});

test('weather map validates bounds and groups nationwide points without forecasts',()=>{
 const {weatherMapPoints}=require('../lib/weather-places');
 assert.equal(weatherMapPoints(NaN,120,50,155,5),null);assert.equal(weatherMapPoints(20,155,50,120,5),null);assert.equal(weatherMapPoints(20,120,50,155,19),null);
 const wide=weatherMapPoints(20,120,50,155,5),local=weatherMapPoints(34.3,135,34.9,135.7,12);
 assert.ok(wide.length<300);assert.ok(wide.reduce((s,p)=>s+p.count,0)>2000);assert.ok(local.some(p=>p.id));assert.ok(local.every(p=>p.lat>=34.3&&p.lat<=34.9));
});

test('two-day hourly forecast crosses JST midnight without manufacturing hourly values',()=>{
 const {mergeHourly,weeklyForecast}=require('../lib/weather-hourly');
 const met={properties:{meta:{updated_at:'2026-09-24T00:00:00Z'},timeseries:[
 {time:'2026-09-24T15:00:00Z',data:{instant:{details:{air_temperature:20}},next_1_hours:{summary:{symbol_code:'clearsky_night'}}}},
 {time:'2026-09-25T03:00:00Z',data:{instant:{details:{air_temperature:26}},next_6_hours:{summary:{symbol_code:'rain'}}}},
 ]}};
 const now=Date.parse('2026-09-24T03:00:00Z'),hours=mergeHourly('2026-09-24',met,null,now,2).hours;
 assert.equal(hours.length,48);assert.equal(hours[24].temperature,20);assert.equal(hours[24].time,'2026-09-25T00:00:00+09:00');assert.equal(hours[36].rain,null);assert.equal(hours[36].weather,null);
 const days=weeklyForecast(met,'2026-09-24',now);assert.equal(days.length,7);assert.equal(days[1].weather,'雨');assert.equal(days[1].low,20);assert.equal(days[1].high,26);assert.equal(days[2].weather,null);
 assert.equal(weeklyForecast(met,'2026-09-24',now+3*86400000)[1].weather,null);
});
test('nearby tide stations use JMA coordinates and retain explicit station identity',()=>{
 const {nearbyTideStations,tideStations}=require('../lib/tide-stations');assert.equal(tideStations.length,239);assert.equal(new Set(tideStations.map(s=>s.id)).size,239);
 const osaka=tideStations.find(s=>s.id==='OS');assert.equal(nearbyTideStations(osaka.lat,osaka.lon)[0].id,'OS');assert.equal(nearbyTideStations(osaka.lat,osaka.lon)[0].km,0);
 const candidates=nearbyTideStations(34.69,135.5);assert.equal(candidates.length,8);assert.ok(candidates.every((s,i)=>i===0||s.km>=candidates[i-1].km));
});
