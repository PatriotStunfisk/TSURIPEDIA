const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...args){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...args)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,f);
const {fishingMapEntries}=require('../lib/fishing-map-data'),{validateFishingMap}=require('../lib/map-validation'),{prefectures}=require('../lib/japan-regions');
const issues=validateFishingMap(fishingMapEntries),density=prefectures.map(prefecture=>({prefecture,total:fishingMapEntries.filter(e=>e.prefecture===prefecture).length,available:fishingMapEntries.filter(e=>e.prefecture===prefecture&&!e.closed).length})).sort((a,b)=>a.available-b.available);
console.log(JSON.stringify({total:fishingMapEntries.length,density,issues},null,2));if(issues.some(i=>i.level==='error'))process.exitCode=1;
