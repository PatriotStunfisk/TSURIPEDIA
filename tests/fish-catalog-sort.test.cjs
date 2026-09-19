const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');

// Load the actual TypeScript data modules without a second set of test fixtures.
const resolve=Module._resolveFilename;
Module._resolveFilename=function(request,...args){
  return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,...args);
};
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{
  compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022},
}).outputText,filename);

test('fish catalog sorting preserves stable defaults and filters independently',()=>{
 const {sortFishCatalog,parseFishSort}=require('../lib/fish-catalog-sort.ts');
 const items=[{name:'ブリ',beginner:false,difficulty:4,months:[9]},{name:'アジ',beginner:true,difficulty:1,months:[6]},{name:'カサゴ',beginner:true,difficulty:2,months:[9]}];
 assert.deepEqual(sortFishCatalog(items,'default'),items);
 assert.deepEqual(sortFishCatalog(items,'name').map(f=>f.name),['アジ','カサゴ','ブリ']);
 assert.deepEqual(sortFishCatalog(items,'beginner').map(f=>f.name),['アジ','カサゴ','ブリ']);
 assert.deepEqual(sortFishCatalog(items,'season',9).map(f=>f.name),['ブリ','カサゴ','アジ']);
 assert.equal(items[0].name,'ブリ');assert.equal(parseFishSort('invalid'),'default');
 });
