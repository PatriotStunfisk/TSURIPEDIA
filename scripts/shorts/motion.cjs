const fs=require('node:fs'),path=require('node:path'),{spawn}=require('node:child_process');
const {writeMusic}=require('./music.cjs');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function sceneAt(plan,time){let start=0;for(let index=0;index<plan.scenes.length;index++){const scene=plan.scenes[index];if(time<start+scene.seconds)return {scene,index,start,local:time-start};start+=scene.seconds;}return {scene:plan.scenes.at(-1),index:plan.scenes.length-1,start:plan.duration-plan.scenes.at(-1).seconds,local:0};}
function diagramState(topic,scene,time){
 const fix=scene.phase==='fix'||scene.phase==='recap'||scene.phase==='cta';
 let x=365,y=890,cloud=920,fishX=630+30*Math.sin(time*1.6),fishY=910+12*Math.sin(time*2),caption='動きの模式図';
 if(topic==='sabiki'){
  if(scene.item===0)y=fix?1030-Math.floor(time/.8)*85:700;
  if(scene.item===1){y=fix?950:650;cloud=900;}
  if(scene.item===2)y=fix?950:720+180*Math.sin(time*2.5);
  if(fix&&scene.item===0)cloud=y-50;
  fishY=905+8*Math.sin(time*2);caption=fix?'餌と針の深さを合わせる':'魚のいる層と、針の位置を見る';
 }else if(topic==='eging'){
  x=fix?350+time*25:350+90*Math.sin(time*5);
  y=fix?650+time*110:780+100*Math.sin(time*8);
  if(scene.item===1&&!fix){x=280+time*100;y=740;}
  fishY=y+50;fishX=x+210+15*Math.sin(time*3);caption=fix?'誘った後のフォールを見せる':'しゃくりと糸の変化を見比べる';
 }else{
  y=fix?1080-time*120:scene.item===0?1080:scene.item===1?1000-170*Math.abs(Math.sin(time*2.3)):Math.max(750,1060-time*220);
  fishY=y+15;fishX=610+30*Math.sin(time*2);caption=fix?'着底から、止めずに一定速度':'止まる・速さが変わる動きを比較';
 }
 return {x,y:Math.max(600,Math.min(1080,y)),cloud,fishX,fishY:Math.max(610,Math.min(1100,fishY)),caption,fix};
}
function frameSvg(plan,time,image){
 const {scene:s,index,local}=sceneAt(plan,time),d=diagramState(plan.topic,s,local),color=s.phase==='ng'?'#ff8b76':'#67ead6';
 const entrance=1+.10*Math.exp(-local*13),offset=20*Math.exp(-local*12),lines=s.text.split('\n');
 const fish=`<image x="${d.fishX-135}" y="${d.fishY-85}" width="310" height="170" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${image}"/>`;
 const waves=Array.from({length:10},(_,i)=>`${i? 'L':'M'} ${65+i*94} ${540+Math.sin(i+time*2)*9}`).join(' ');
 const cloud=plan.topic==='sabiki'?Array.from({length:18},(_,i)=>`<circle cx="${d.x+Math.sin(i*7+time)*80}" cy="${d.cloud+Math.cos(i*3+time*.8)*48}" r="${3+i%5}" fill="#f8d58e" opacity=".65"/>`).join(''):'';
 const lure=plan.topic==='sabiki'?`<rect x="${d.x-14}" y="${d.y+20}" width="28" height="42" rx="5" fill="#ffc764"/><path d="M${d.x} ${d.y-80} h35 v16 q-6 12 -14 0 M${d.x} ${d.y-30} h-35 v16 q6 12 14 0" stroke="white" fill="none" stroke-width="4"/>`:plan.topic==='eging'?`<g transform="translate(${d.x} ${d.y}) rotate(${d.fix?25:-20})"><ellipse rx="62" ry="18" fill="#ff98ba"/><path d="M-50 -12 L-72 -30 M-50 10 L-72 25" stroke="#ebf7fb" stroke-width="4"/><circle cx="42" cy="-4" r="5" fill="#0b263b"/></g>`:`<circle cx="${d.x}" cy="${d.y}" r="22" fill="#ff8b76"/><path d="M${d.x-8} ${d.y+18} q-35 50 0 90 M${d.x+8} ${d.y+18} q35 60 10 105" stroke="#ffd16c" stroke-width="10" fill="none"/>`;
 return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1920"><defs><linearGradient id="sea" x2="0" y2="1"><stop stop-color="#13586d"/><stop offset="1" stop-color="#0c253d"/></linearGradient><clipPath id="tank"><rect x="65" y="530" width="825" height="690" rx="26"/></clipPath></defs><rect width="1080" height="1920" fill="#071d30"/><g font-family="Hiragino Sans, sans-serif"><text x="68" y="155" fill="#aacbd8" font-size="30" font-weight="700">UOLINK</text>${[0,1,2].map(i=>`<circle cx="${735+i*60}" cy="144" r="17" fill="${i<=s.item?color:'#244256'}"/>`).join('')}<text x="68" y="244" fill="${color}" font-size="40" font-weight="700">${esc(s.label)}</text><g transform="translate(68 ${330+offset}) scale(${entrance})">${lines.map((l,i)=>`<text y="${i*91}" fill="white" font-size="${Array.from(l).length>12?58:70}" font-weight="800">${esc(l)}</text>`).join('')}</g><g clip-path="url(#tank)"><rect x="65" y="530" width="825" height="690" fill="url(#sea)"/><path d="${waves}" stroke="#6edbdc" stroke-width="5" fill="none"/>${[720,910,1100].map(y=>`<path d="M70 ${y} H890" stroke="#7cbcc5" stroke-dasharray="8 18" opacity=".18"/>`).join('')}<path d="M65 1190 Q240 1140 460 1185 T890 1170 V1220 H65" fill="#53676d"/>${cloud}<path d="M${plan.topic==='eging'?260:d.x} 545 L${d.x} ${d.y}" stroke="#c1e7ee" stroke-width="3"/>${lure}${fish}${d.fix?`<circle cx="${d.x}" cy="${d.y}" r="${60+8*Math.sin(time*5)}" fill="none" stroke="#67ead6" stroke-width="3" opacity=".5"/>`:''}<text x="96" y="590" fill="#b9d7df" font-size="25">動きの模式図</text></g><text x="80" y="1260" fill="${color}" font-size="${d.caption.length>20?28:32}">${esc(d.caption)}</text><rect x="65" y="1290" width="825" height="156" rx="24" fill="${s.phase==='ng'?'#4b2932':'#143f48'}"/><text x="98" y="1382" fill="#ffffff" font-size="${s.caption.length>20?33:39}" font-weight="700">${esc(s.caption)}</text><text x="68" y="1510" fill="#8fb3c6" font-size="29">${s.phase==='cta'?'uolink.jp  ｜  プロフィールから':'NGを見つけたら、直し方まで確認'}</text><rect x="65" y="1560" width="825" height="6" rx="3" fill="#244256"/><rect x="65" y="1560" width="${825*time/plan.duration}" height="6" rx="3" fill="${color}"/><text x="840" y="1510" fill="#8fb3c6" font-size="24">${index+1}/${plan.scenes.length}</text></g></svg>`;
}
async function renderMotion({plan,dir,image,sharp,bin}){
 const wav=path.join(dir,'music.wav');let cursor=0;const cuts=plan.scenes.map(s=>{const n=cursor;cursor+=s.seconds;return n;});writeMusic(wav,plan.duration,cuts);
 fs.writeFileSync(path.join(dir,'audio-source.json'),JSON.stringify({...plan.music,samples:'none',voices:'none',generation:'scripts/shorts/music.cjs',duration:plan.duration},null,2));
 const pending=path.join(dir,'video.pending.mp4');
 const proc=spawn(bin,['-y','-hide_banner','-loglevel','error','-f','rawvideo','-pixel_format','rgba','-video_size','720x1280','-framerate','24','-i','pipe:0','-i',wav,'-t',String(plan.duration),'-vf','scale=1080:1920:flags=lanczos,fps=30,format=yuv420p','-c:v','libx264','-preset','fast','-crf','21','-c:a','aac','-b:a','128k','-af','loudnorm=I=-18:TP=-2:LRA=7','-movflags','+faststart',pending],{stdio:['pipe','ignore','pipe']});
 let errors='',failed;proc.stderr.on('data',b=>{errors=(errors+b).slice(-3000);});proc.on('error',e=>{failed=e;});proc.stdin.on('error',e=>{failed=e;});
 const done=new Promise((resolve,reject)=>{proc.on('error',reject);proc.on('close',code=>code===0?resolve():reject(Error(errors||`FFmpeg exit ${code}`)));});done.catch(()=>{});
 try{
  for(let frame=0;frame<plan.duration*24;frame++){
   if(failed)throw failed;
   const bytes=await sharp(Buffer.from(frameSvg(plan,frame/24,image))).resize(720,1280).ensureAlpha().raw().toBuffer();
   await new Promise((resolve,reject)=>proc.stdin.write(bytes,e=>e?reject(e):resolve()));
  }
  proc.stdin.end();await done;fs.renameSync(pending,path.join(dir,'video.mp4'));
 }catch(e){proc.kill();throw e;}
}
module.exports={sceneAt,diagramState,frameSvg,renderMotion};
