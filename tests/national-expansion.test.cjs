const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const resolve=Module._resolveFilename;
Module._resolveFilename=function(request,...args){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,...args)};
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,filename);
const slugs='sayori gomasaba kurosoi ishidai ishigarei akaamadai kinmedai akamutsu kuromutsu medai'.split(' ');
const {getFishSpecies}=require('../lib/fish-species/index.ts');
const {getFishConnections}=require('../lib/fish-connections.ts');
const {questFish}=require('../lib/quest/catalog.ts');
const {questHabitats}=require('../lib/quest/habitats.ts');
const E=require('../lib/quest/engine.ts');
const {matchesSpot}=require('../lib/spot-filters.ts');
const {nationalSpots}=require('../lib/fishing-map-national.ts');
const {prefectures,regionForPrefecture}=require('../lib/japan-regions.ts');
const {getMethodTackle}=require('../lib/method-tackle.ts');

test('versioned fish images are allowed by the actual Next image configuration',()=>{
 const config=require('../next.config.ts').default;
 const {hasLocalMatch}=require('next/dist/shared/lib/match-local-pattern');
 for(const url of ['/images/fish/buri-real-v2.png?v=20260911-2','/images/fish/akakamas-real.png?v=20260915-alpha','/brand/uolink-logo-hq.png'])assert.ok(hasLocalMatch(config.images.localPatterns,url));
 assert.ok(!hasLocalMatch(config.images.localPatterns,'/api/private?token=example'));
});

test('ten full profiles derive cooking, guides, methods and playable species',()=>{
 for(const slug of slugs){
  const p=getFishSpecies(slug),c=getFishConnections(slug);assert.ok(p.detail.body.length>40,slug);assert.ok(p.launch.identify.length>=3);assert.ok(p.cooking.recipes.length>=4);
  assert.ok(c.cooking.recipes.length>=4);assert.ok(c.methods.length);assert.ok(c.guides.length);assert.ok(c.related.length);assert.ok(questFish.some(f=>f.slug===slug));
  for(const recipe of p.cooking.recipes){assert.ok(recipe.ingredients.length>=3);assert.ok(recipe.steps.length>=4);assert.ok(recipe.tips.length>=3)}
 }
 assert.notEqual(getFishSpecies('gomasaba').base.scientific,getFishSpecies('saba').base.scientific);
 assert.notEqual(getFishSpecies('akamutsu').base.scientific,getFishSpecies('kuromutsu').base.scientific);
});
test('deep-water fish cannot be caught from the pier and start at the habitat depth',()=>{
 for(const slug of ['kinmedai','akamutsu','kuromutsu']){
  const fish=questFish.find(f=>f.slug===slug);assert.deepEqual(fish.habitats,['deep-offshore']);
  assert.ok(!E.eligibleFish(questFish,'osaka-bay-pier','sabiki').some(f=>f.slug===slug));
  let round=E.cast([fish],'deep-offshore','deepsea-douzuki','deep-test',1000,()=>.5);round=E.hook(round,round.biteAt,()=>1);
  assert.equal(round.phase,'fight');assert.equal(round.fishDepth,180);assert.ok(!E.canLand(round));
 }
 for(const h of questHabitats)if(h.fightDepth!==undefined)assert.ok(Number.isFinite(h.fightDepth)&&h.fightDepth>0);
});
test('nationwide filters compose without showing closed or unverified matches',()=>{
 assert.equal(new Set(prefectures).size,47);assert.equal(regionForPrefecture('北海道'),'北海道');assert.equal(regionForPrefecture('沖縄県'),'沖縄');assert.equal(regionForPrefecture(undefined),undefined);
 const atami=nationalSpots.find(s=>s.slug==='atami-port-fishing');assert.ok(atami);
 assert.ok(matchesSpot(atami,{region:'東海',prefecture:'静岡県',method:'eging',beginner:true}));
 assert.ok(!matchesSpot(atami,{method:'nomase'}));assert.ok(!matchesSpot(atami,{region:'関西'}));
 assert.ok(!matchesSpot({...atami,closed:true},{}));assert.ok(matchesSpot({...atami,closed:true},{showClosed:true}));
 assert.ok(!matchesSpot({...atami,prefecture:undefined},{prefecture:'静岡県'}));
 assert.ok(matchesSpot(atami,{query:'  熱海  '}));
 for(const s of nationalSpots){assert.ok(s.verifiedAt);assert.ok(s.sources.length);assert.ok(prefectures.includes(s.prefecture));}
});
test('tackle data handles branch rigs, float leader position and central sponsored searches',()=>{
 for(const slug of ['sabiki','eging','ajing','mebaring','tai-rubber','jigging','shore-jigging','nomase','tachiuo-tenya','kawahagi','douzuki','ana','choinage','fukase','hitotsu-tenya','sayori-uki','ishidai-bottom','nage','amadai-tenbin','deepsea-douzuki','medai-komase']){
  const d=getMethodTackle(slug);assert.ok(d.rig,slug);assert.equal(d.specs.length,6);
  for(const spec of d.specs){assert.ok(spec.value);assert.equal(new URL(spec.shop).searchParams.get('tag'),'uolink-22')}
 }
 assert.ok(getMethodTackle('douzuki').rig.parts.some(p=>p.branch));assert.equal(getMethodTackle('douzuki').rig.parts.at(-1).icon,'weight');
 const float=getMethodTackle('fukase').rig.parts;assert.ok(float.findIndex(p=>p.icon==='float')<float.findIndex(p=>p.label.includes('ハリス')));
 for(const invalid of ['missing','constructor','__proto__'])assert.equal(getMethodTackle(invalid),undefined);
});
