// Read-only editorial coverage report: node scripts/audit-map.cjs [--json]
const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');
const {getSpotCoverage}=require('../lib/spot-coverage.ts');
const {validateFishingMap}=require('../lib/map-validation.ts');
const coverage=getSpotCoverage(fishingMapEntries),issues=validateFishingMap(fishingMapEntries);
if(process.argv.includes('--json'))console.log(JSON.stringify({coverage,issues},null,2));
else{console.table(coverage);console.log('20地点までの不足（釣船・計画エリア・休業施設を除外）:',coverage.reduce((n,x)=>n+x.remaining,0));console.log('データ検査:',issues);}
if(issues.some(x=>x.level==='error'))process.exitCode=1;
