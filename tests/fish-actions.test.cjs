const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const ts=require('typescript');
const React=require('react');
const {renderToStaticMarkup}=require('react-dom/server');
require.extensions['.tsx']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{
 compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX},
}).outputText,filename);
const FishActions=require('../components/FishActions.tsx').default;

test('fish actions have identical initial markup across a midnight/build date change',()=>{
 const RealDate=global.Date;
 const renderAt=at=>{
  global.Date=class extends RealDate {constructor(...args){super(...(args.length?args:[at]))}static now(){return at}};
  return renderToStaticMarkup(React.createElement(FishActions,{slug:'aji',name:'マアジ'}));
 };
 try{
  const before=renderAt(RealDate.parse('2026-09-12T14:59:59Z'));
  const after=renderAt(RealDate.parse('2026-09-13T15:00:01Z'));
  assert.equal(before,after);
  assert.match(after,/マアジ/);
  assert.doesNotMatch(after,/2026\/9\/1[234]/);
 }finally{global.Date=RealDate}
});
