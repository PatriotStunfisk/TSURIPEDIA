// Read-only fish-name coverage; unresolved group names are not guessed to a species.
// Run: node scripts/audit-map-fish.cjs [--json]
const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {fishingMapEntries}=require('../lib/fishing-map-data.ts');
const {getFishByName,fishCatalog}=require('../lib/fish-registry.ts');
const counts=new Map();let linked=0,total=0;
for(const e of fishingMapEntries)for(const name of new Set(e.fish)){
 total++;if(getFishByName(name)){linked++;continue;}
 const row=counts.get(name)??{name,spots:0,examples:[]};row.spots++;if(row.examples.length<3)row.examples.push(e.slug);counts.set(name,row);
}
const result={species:fishCatalog.length,mapEntries:fishingMapEntries.length,linked,total,unresolved:[...counts.values()].sort((a,b)=>b.spots-a.spots||a.name.localeCompare(b.name,'ja'))};
if(process.argv.includes('--json'))console.log(JSON.stringify(result,null,2));
else{console.log(`魚図鑑 ${result.species}種 / MAP対象魚の接続 ${linked}/${total}件（地点×魚名）`);console.table(result.unresolved.map(({name,spots})=>({name,spots})));console.log('総称・地方名は同定してから追加。件数は釣果や生息保証ではありません。');}
