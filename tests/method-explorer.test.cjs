const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {methodDetails}=require('../lib/method-registry.ts'),{selectMethods}=require('../lib/method-catalog.ts');
const items=Object.values(methodDetails).map(m=>({...m,steps:m.steps.length}));
test('all registered methods are discoverable; search is kana and width insensitive',()=>{
 assert.equal(selectMethods(items).length,items.length);
 assert.ok(selectMethods(items,'あゆ').some(m=>m.slug==='ayuing'));
 assert.ok(selectMethods(items,'ｱｼﾞ','boat').some(m=>m.slug==='bachikon'));
 assert.ok(selectMethods(items,'ヘラブナ','freshwater').some(m=>m.slug==='herabuna-bottom'));
 assert.equal(selectMethods(items,'not-a-method').length,0);
});
test('place and difficulty sorting compose without mutating source data',()=>{
 const original=items.map(m=>m.slug);const easy=selectMethods(items,'','boat','easy');assert.ok(easy.length);
 for(let i=1;i<easy.length;i++)assert.ok(easy[i-1].difficulty<=easy[i].difficulty);
 assert.deepEqual(items.map(m=>m.slug),original);
 assert.ok(!selectMethods(items,'','shore').some(m=>m.slug==='omorig'));
});
test('new methods have sourced, complete practical content',()=>{
 for(const slug of ['omorig','bachikon','kago']){const m=methodDetails[slug];assert.ok(m.sources.length);assert.ok(m.steps.length>=6);assert.ok(m.safety.length>=3);assert.ok(m.rig.length>30);}
});
