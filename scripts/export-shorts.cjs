/** Free local production. Never authenticates to or posts on a social platform. */
const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
const {root,getShortPlans}=require('./shorts/load.cjs');
const {fingerprint,transition,validatePublication,platforms}=require('./shorts/state.cjs');
const out=path.resolve(process.env.SHORTS_OUT||path.join(root,'artifacts/shorts'));
const args=process.argv.slice(2),mode=args[0]||'export';
function rendered(p){const f=path.join(out,p.id,'render.json');return fs.existsSync(path.join(out,p.id,'video.mp4'))&&fs.existsSync(f)&&JSON.parse(fs.readFileSync(f,'utf8')).fingerprint===fingerprint(p);}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const stamp=n=>`${String(Math.floor(n/3600)).padStart(2,'0')}:${String(Math.floor(n/60)%60).padStart(2,'0')}:${String(n%60).padStart(2,'0')},000`;
function run(bin,params){const p=spawnSync(bin,params,{encoding:'utf8',timeout:300000});if(p.error||p.status!==0)throw Error(`${bin}: ${p.error?.message||p.stderr?.slice(-1500)}`);return p;}
async function main(){
 fs.mkdirSync(out,{recursive:true});
 const plans=getShortPlans(),ledgerFile=path.join(out,'ledger.json');
 const ledger=fs.existsSync(ledgerFile)?JSON.parse(fs.readFileSync(ledgerFile,'utf8')):{version:1,entries:{}};
 if(ledger.version!==1||!ledger.entries)throw Error('Unknown ledger format; preserved without changes');
 if(mode==='mark'){
  const [,id,platform,action,url]=args,plan=plans.find(p=>p.id===id);
  if(!plan||!platforms.includes(platform))throw Error('Unknown clip/platform');
  const key=`${id}/${platform}`,old=ledger.entries[key],hash=fingerprint(plan);
  if(old?.fingerprint&&old.fingerprint!==hash)throw Error('Source edit changed: review a new clip ID; existing ledger preserved');
  if(action==='reviewed'&&!rendered(plan))throw Error('Render the current video before review');
  if(action==='published')validatePublication(platform,url);
  ledger.entries[key]={...transition(old,action,url),fingerprint:hash};
  const tmp=ledgerFile+'.tmp';fs.writeFileSync(tmp,JSON.stringify(ledger,null,2));fs.renameSync(tmp,ledgerFile);
 }
 else if(!['export','render'].includes(mode))throw Error('Usage: export-shorts.cjs export | render [clip-id|all] | mark <id> <youtube|tiktok> <reviewed|uncertain|published> [video-url]');
 const sharp=require(process.env.SHARP_MODULE||require('node:module').createRequire(require.resolve('next/package.json')).resolve('sharp'));
 const selected=args[1]==='all'?plans:plans.filter(p=>p.id===args[1]||(!args[1]&&p===plans[0]));
 if(mode==='render'&&!selected.length)throw Error('Unknown clip ID');
 for(const p of plans){
  const dir=path.join(out,p.id);fs.mkdirSync(dir,{recursive:true});
  const asset=path.join(root,'public',p.image.split('?')[0]);if(!fs.existsSync(asset))throw Error(`Missing image: ${p.image}`);
  // Rasterize SVG references safely before embedding, keeping all source images untouched.
  const image=(await sharp(asset).resize(760,470,{fit:'inside',withoutEnlargement:true}).png().toBuffer()).toString('base64');
  let cursor=0;
  const srt=p.scenes.map((s,i)=>{let start=cursor;cursor+=s.seconds;return `${i+1}\n${stamp(start)} --> ${stamp(cursor)}\n${s.text}\n`;}).join('\n');
  fs.writeFileSync(path.join(dir,'captions.srt'),srt);
  fs.writeFileSync(path.join(dir,'plan.json'),JSON.stringify({...p,fingerprint:fingerprint(p)},null,2));
  fs.writeFileSync(path.join(dir,'voice-script.txt'),p.scenes.map(s=>s.text.replace(/\n/g,'')).join('。\n')+'。\n');
  for(const platform of platforms)fs.writeFileSync(path.join(dir,`${platform}.txt`),p.platforms[platform].caption+'\n');
  const render=mode==='render'&&selected.includes(p);
  if(mode!=='mark'){
   for(const [i,s] of p.scenes.entries()){
    if(!render&&i>0)break;
    const lines=s.text.split('\n');
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="#092d44"/><circle cx="1020" cy="560" r="440" fill="#103e54"/><path d="M0 1440 Q360 1300 1080 1460 L1080 1920 H0" fill="#0c374c"/><g font-family="Hiragino Sans, sans-serif"><text x="88" y="220" fill="#ffffff" font-size="48" font-weight="700">UOLINK</text><text x="88" y="290" fill="#8cbed1" font-size="26">釣りの疑問を、ひとつ解決。</text><rect x="88" y="374" width="730" height="68" rx="20" fill="#b8edf2"/><text x="120" y="420" fill="#092d44" font-size="32" font-weight="700">${esc(s.label)}</text>${lines.map((line,j)=>`<text x="88" y="${558+j*96}" fill="white" font-size="${Array.from(line).length>13?56:68}" font-weight="700">${esc(line)}</text>`).join('')}<rect x="88" y="790" width="740" height="480" rx="36" fill="#edf6f7"/><image x="108" y="810" width="700" height="430" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${image}"/><text x="88" y="1390" fill="#b8edf2" font-size="34">${i===p.scenes.length-1?'uolink.jp  /  詳しい手順を読む':'魚・仕掛け・釣り場をつなぐ'}</text><text x="88" y="1460" fill="#8cbed1" font-size="25">${i===p.scenes.length-1?'プロフィールのリンク、または「ウオリンク」で検索':'GUIDEをもとにした要点解説'}</text><rect x="88" y="1520" width="740" height="7" rx="3" fill="#234a5e"/><rect x="88" y="1520" width="${740*(i+1)/p.scenes.length}" height="7" rx="3" fill="#b8edf2"/></g></svg>`;
    const bytes=await sharp(Buffer.from(svg)).jpeg({quality:90}).toBuffer();
    if(i===0)fs.writeFileSync(path.join(dir,'cover.jpg'),bytes);
    if(render)fs.writeFileSync(path.join(dir,`scene-${i}.jpg`),bytes);
   }
  }
  if(render){
   const localBin=path.join(out,'tools/ffmpeg');
   const bin=process.env.FFMPEG_PATH||(fs.existsSync(localBin)?localBin:'ffmpeg');
   // One continuous input with exact per-scene durations; no third-party music or watermark.
   fs.writeFileSync(path.join(dir,'frames.txt'),p.scenes.map((s,i)=>`file 'scene-${i}.jpg'\nduration ${s.seconds}\n`).join('')+`file 'scene-${p.scenes.length-1}.jpg'\n`);
   run(bin,['-y','-hide_banner','-loglevel','error','-f','concat','-safe','1','-i',path.join(dir,'frames.txt'),'-f','lavfi','-i','anullsrc=r=48000:cl=stereo','-t',String(p.duration),'-vf','fps=30,format=yuv420p','-c:v','libx264','-preset','fast','-crf','21','-c:a','aac','-b:a','96k','-movflags','+faststart',path.join(dir,'video.pending.mp4')]);
   fs.renameSync(path.join(dir,'video.pending.mp4'),path.join(dir,'video.mp4'));
   fs.writeFileSync(path.join(dir,'render.json'),JSON.stringify({fingerprint:fingerprint(p),duration:p.duration,width:1080,height:1920,renderedAt:new Date().toISOString()}));
   console.log(`Rendered ${p.id}: ${p.duration}s, 1080×1920`);
  }
 }
 fs.writeFileSync(path.join(out,'queue.json'),JSON.stringify({version:1,mode:'review-before-upload',clips:plans.map(p=>({...p,fingerprint:fingerprint(p),rendered:rendered(p),publication:Object.fromEntries(platforms.map(platform=>[platform,ledger.entries[`${p.id}/${platform}`]??{status:'draft'}]))}))},null,2));
 const metrics=path.join(out,'metrics.csv');
 if(!fs.existsSync(metrics))fs.writeFileSync(metrics,'clip_id,platform,published_url,checked_at,views,average_watch_seconds,completion_rate,saves,shares,profile_visits,site_visits,notes\n'+plans.flatMap(p=>platforms.map(platform=>`${p.id},${platform},,,,,,,,,,`)).join('\n')+'\n');
 const html=`<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>UOLINK 短尺動画制作室</title><style>body{margin:0;background:#edf4f6;color:#14374a;font:16px system-ui;padding:24px}main{max-width:1100px;margin:auto}h1{font-size:26px}section{background:white;padding:22px;border-radius:18px;margin:24px 0;display:grid;grid-template-columns:220px 1fr;gap:24px}video,img{display:block;width:100%;border-radius:12px}video+a{display:block;margin-top:8px}textarea{width:100%;box-sizing:border-box;height:150px;font:14px system-ui;margin:8px 0}a{color:#096b87}small{display:block}button{padding:8px 16px}li{margin:8px 0}@media(max-width:640px){section{grid-template-columns:1fr}video,img{max-width:250px}body{padding:14px}}</style><main><h1>UOLINK｜短尺動画制作室</h1><p>GUIDE → 要点3つ → 30秒縦動画 → 内容確認 → 各サービスで投稿</p><p>字幕版・BGMなし。公開操作は行わない。台帳は ledger.json。Shortsの説明欄URLはクリックできないため、プロフィールリンクと検索を案内する。</p>${plans.map(p=>`<section><div>${rendered(p)?`<video controls preload="none" poster="${p.id}/cover.jpg" src="${p.id}/video.mp4"></video><a download href="${p.id}/video.mp4">MP4を保存</a>`:`<img loading="lazy" src="${p.id}/cover.jpg" alt="${esc(p.platforms.youtube.title)}"><small>動画書き出し前</small>`}</div><div><h2>${esc(p.platforms.youtube.title)}</h2><a href="${esc(p.guideUrl)}" target="_blank" rel="noopener">原本GUIDEを確認</a><ol>${p.scenes.map(s=>`<li>${esc(s.text.replace(/\n/g,' '))}（${s.seconds}秒）</li>`).join('')}</ol>${platforms.map(platform=>`<details><summary>${platform}投稿文 — ${esc(ledger.entries[`${p.id}/${platform}`]?.status??'draft')}</summary><textarea readonly aria-label="${platform}投稿文">${esc(p.platforms[platform].caption)}</textarea><a download href="${p.id}/${platform}.txt">投稿文を保存</a></details>`).join('')}<p><a download href="${p.id}/captions.srt">字幕SRT</a> · <a download href="${p.id}/cover.jpg">カバー画像</a> · <a download href="${p.id}/voice-script.txt">読み上げ台本</a></p></div></section>`).join('')}</main></html>`;
 fs.writeFileSync(path.join(out,'index.html'),html);
 console.log(`Prepared ${plans.length} clips: ${out}/index.html`);
}
main().catch(e=>{console.error(e.message);process.exitCode=1});
