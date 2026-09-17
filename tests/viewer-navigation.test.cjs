const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {createViewerNavigation}=require('../lib/viewer-navigation.ts');
function fixture(){
 const listeners=new Map(),captured=[];let projections=0,rotation=[0,0];
 const canvas={clientHeight:400,setPointerCapture:id=>captured.push(id),addEventListener:(name,fn)=>listeners.set(name,fn),removeEventListener:(name,fn)=>{if(listeners.get(name)===fn)listeners.delete(name)}};
 const camera={position:{z:5},fov:32,zoom:1,updateProjectionMatrix:()=>projections++};
 const pivot={position:{x:0,y:0,z:0,set(x,y,z){Object.assign(this,{x,y,z})}}};
 const nav=createViewerNavigation(camera,canvas,pivot,(x,y)=>{rotation[0]+=x;rotation[1]+=y},()=>{rotation=[0,0]});
 const event=(name,patch={})=>{let prevented=false;listeners.get(name)?.({pointerId:1,button:0,buttons:1,clientX:100,clientY:100,deltaY:0,deltaMode:0,preventDefault:()=>{prevented=true},...patch});return prevented};
 return {nav,camera,pivot,listeners,event,captured,rotation:()=>rotation,projections:()=>projections};
}
test('mouse rotation, pan mode, zoom and reset preserve an independent initial pose',()=>{
 const f=fixture();f.event('pointerdown');f.event('pointermove',{clientX:120,clientY:110});assert.deepEqual(f.rotation(),[20,10]);assert.equal(f.pivot.position.x,0);
 f.nav.mode(true);f.event('pointermove',{clientX:140,clientY:130});assert.ok(f.pivot.position.x>0&&f.pivot.position.y<0);assert.deepEqual(f.rotation(),[20,10]);
 f.nav.zoom(1.2);assert.equal(f.camera.zoom,1.2);f.nav.reset();assert.equal(f.camera.zoom,1);assert.deepEqual([f.pivot.position.x,f.pivot.position.y,f.pivot.position.z],[0,0,0]);assert.deepEqual(f.rotation(),[0,0]);
 f.event('pointermove',{clientX:160});assert.equal(f.pivot.position.x,0,'reset also ends an in-progress gesture');assert.ok(f.projections()>=2);f.nav.dispose();
});
test('two touch pointers pinch and translate without rotating the fish',()=>{
 const f=fixture();f.event('pointerdown',{pointerId:1,clientX:100});f.event('pointerdown',{pointerId:2,clientX:200});
 f.event('pointermove',{pointerId:2,clientX:250});assert.equal(f.camera.zoom,1.5);assert.ok(f.pivot.position.x>0);assert.deepEqual(f.rotation(),[0,0]);
 f.event('pointerup',{pointerId:2});f.event('pointermove',{pointerId:1,clientX:110});assert.deepEqual(f.rotation(),[10,0]);f.nav.dispose();
});
test('wheel zoom is bounded and cancellation prevents a stuck drag',()=>{
 const f=fixture();assert.equal(f.event('wheel',{deltaY:-100}),true);assert.ok(f.camera.zoom>1);f.nav.zoom(1000);assert.equal(f.camera.zoom,3);f.nav.zoom(.00001);assert.equal(f.camera.zoom,.5);
 f.event('pointerdown');f.event('pointercancel');f.event('pointermove',{clientX:180});assert.deepEqual(f.rotation(),[0,0]);
 f.event('pointerdown');f.event('lostpointercapture');f.event('pointermove',{clientX:180});assert.deepEqual(f.rotation(),[0,0]);
 f.nav.dispose();assert.equal(f.listeners.size,0);assert.equal(f.event('wheel',{deltaY:100}),false);
});
test('right drag pans while ordinary drag continues rotating',()=>{
 const f=fixture();f.event('pointerdown',{button:2,buttons:2});f.event('pointermove',{buttons:2,clientX:130});assert.ok(f.pivot.position.x>0);assert.deepEqual(f.rotation(),[0,0]);f.event('pointerup');f.event('pointerdown');f.event('pointermove',{clientY:110});assert.deepEqual(f.rotation(),[0,10]);f.nav.dispose();
});
