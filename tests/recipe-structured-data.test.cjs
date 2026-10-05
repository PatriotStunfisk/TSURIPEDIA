const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {buildRecipeStructuredData,getRecipeTiming}=require('../lib/recipe-structured-data.ts');
const {cookingFish}=require('../lib/cooking-data.ts');
const fish={slug:'aji',name:'マアジ'};
const fixture=()=>({slug:'dish',name:'料理',summary:'説明',ingredients:['魚'],steps:['下処理','調理','盛る'],tips:[]});
const json=value=>JSON.parse(JSON.stringify(value));

test('existing recipes retain text/canonical URLs and never invent ratings nutrition or times',()=>{
 let imageRecipes=0,imageSteps=0;
 for(const fish of cookingFish)for(const recipe of fish.recipes){
  const structured=json(buildRecipeStructuredData(fish,recipe));
  assert.equal(structured.name,`${fish.name}の${recipe.name}`);
  assert.equal(structured.description,recipe.summary);
  assert.deepEqual(structured.recipeIngredient,recipe.ingredients);
  assert.deepEqual(structured.recipeInstructions.map(s=>s.text),recipe.steps);
  assert.equal(structured.url,`https://uolink.jp/cooking/${fish.slug}/${recipe.slug}`);
  assert.equal(structured.keywords,`${fish.name}, ${fish.name}の${recipe.name}`);
  for(const key of ['aggregateRating','nutrition','video','prepTime','cookTime','totalTime'])assert.ok(!(key in structured),`${fish.slug}/${recipe.slug}: ${key}`);
  if(recipe.image)assert.deepEqual(structured.image,[new URL(recipe.image,'https://uolink.jp').href]);
  let hasImage=false;
  for(let i=0;i<recipe.steps.length;i++){
   const expected=(recipe.stepImages??[]).filter(image=>image.step===i+1).map(image=>new URL(image.src,'https://uolink.jp').href);
   const step=structured.recipeInstructions[i];
   if(expected.length){
    assert.deepEqual(step.image,expected);imageSteps++;hasImage=true;
    for(const src of expected)assert.ok(fs.existsSync(path.join(root,'public',new URL(src).pathname)),src);
   }else assert.ok(!('image' in step));
  }
  if(hasImage)imageRecipes++;
 }
 assert.equal(imageRecipes,25);assert.equal(imageSteps,100);
});

test('sparse unordered step images match one-based steps and preserve all matching images',()=>{
 const recipe={...fixture(),image:'https://cdn.example.com/finished.jpg',stepImages:[
  {step:3,src:'/third.png'},{step:1,src:'/first.png'},{step:1,src:'https://cdn.example.com/first-detail.jpg'},
  {step:1,src:'/first.png'},{step:0,src:'/unused.png'},{step:4,src:'/unused.png'},
  {step:2,src:''},{step:2,src:'data:image/png,invalid'},
 ]};
 const result=json(buildRecipeStructuredData(fish,recipe));
 assert.deepEqual(result.image,['https://cdn.example.com/finished.jpg']);
 assert.deepEqual(result.recipeInstructions[0].image,['https://uolink.jp/first.png','https://cdn.example.com/first-detail.jpg']);
 assert.ok(!('image' in result.recipeInstructions[1]));
 assert.deepEqual(result.recipeInstructions[2].image,['https://uolink.jp/third.png']);
 assert.ok(!('image' in json(buildRecipeStructuredData(fish,fixture()))));
});

test('only sourced complete nonnegative minute values emit ISO durations; text never supplies time',()=>{
 const recipe={...fixture(),steps:['10〜15分置く','15分蒸す']};
 assert.equal(getRecipeTiming(recipe),undefined);
 for(const timing of [
  {prepMinutes:5,cookMinutes:10,source:''},{prepMinutes:5,cookMinutes:10,source:' '},
  {prepMinutes:5,source:'記録'},{cookMinutes:10,source:'記録'},
  {prepMinutes:-1,cookMinutes:10,source:'記録'},{prepMinutes:NaN,cookMinutes:10,source:'記録'},
  {prepMinutes:Infinity,cookMinutes:10,source:'記録'},{prepMinutes:1.5,cookMinutes:10,source:'記録'},
  {prepMinutes:0,cookMinutes:0,source:'記録'},
 ]){
  const result=json(buildRecipeStructuredData(fish,{...recipe,timing}));
  assert.ok(!('prepTime' in result));assert.ok(!('cookTime' in result));
 }
 const timing={prepMinutes:15,cookMinutes:90,source:'テスト用の計測記録'};
 assert.deepEqual(getRecipeTiming({...recipe,timing}),timing);
 const result=json(buildRecipeStructuredData(fish,{...recipe,timing}));
 assert.equal(result.prepTime,'PT15M');assert.equal(result.cookTime,'PT90M');
 assert.ok(!('totalTime' in result));
 assert.equal(buildRecipeStructuredData(fish,{...recipe,timing:{...timing,cookMinutes:0}}).cookTime,'PT0M');
});

test('route uses the tested builder and shows the same sourced time values with safe JSON embedding',async()=>{
 const source=fs.readFileSync(path.join(root,'app/(ja)/cooking/[fish]/[recipe]/page.tsx'),'utf8');
 // Exercise the server component with light component stubs; no browser runtime required.
 const filename=path.join(root,'app/(ja)/cooking/[fish]/[recipe]/page.tsx');
 const m=new Module(filename);m.filename=filename;m.paths=Module._nodeModulePaths(path.dirname(filename));
 const recipe={...fixture(),summary:'</script><script>bad</script>',timing:{prepMinutes:5,cookMinutes:0,source:'テスト計測'}};
 m.require=request=>{
  if(request==='@/lib/cooking-data')return {getCookingFish:()=>({...fish,recipes:[recipe]}),getRecipe:()=>recipe,cookingFish:[]};
  if(request==='@/lib/fish-registry')return {getFishProfile:()=>undefined};
  if(request==='@/lib/page-sharing')return {pageSharing:()=>({})};
  if(request==='next/navigation')return {notFound:()=>{throw new Error('not found')}};
  if(request.endsWith('.css'))return {};
  if(request.startsWith('@/components/')||request==='next/link')return ()=>null;
  return require(request);
 };
 m._compile(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,filename);
 const element=await m.exports.default({params:Promise.resolve({fish:fish.slug,recipe:recipe.slug})});
 const nodes=[];
 function visit(node){if(!node||typeof node!=='object')return;if(Array.isArray(node)){node.forEach(visit);return;}nodes.push(node);visit(node.props?.children)}
 visit(element);
 const script=nodes.find(node=>node.type==='script');
 const raw=script.props.dangerouslySetInnerHTML.__html;
 assert.ok(!raw.includes('</script>'));assert.deepEqual(JSON.parse(raw),json(buildRecipeStructuredData(fish,recipe)));
 const time=nodes.find(node=>node.type==='p'&&Array.isArray(node.props.children)&&node.props.children.includes('準備：約'));
 assert.ok(time);assert.ok(time.props.children.includes(5));assert.ok(time.props.children.includes(0));assert.ok(time.props.children.includes('テスト計測'));
});
