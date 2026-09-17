// Regenerates all deliverables from GUIDE data. No X account, token or posting API.
const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),resolve=Module._resolveFilename;
Module._resolveFilename=function(s,...a){return resolve.call(this,s.startsWith('@/')?path.join(root,s.slice(2)):s,...a)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,f);
const {socialDrafts}=require('../lib/guide-social.ts');
const sharp=require(process.env.SHARP_MODULE||'sharp');
const {ImageResponse}=require('next/og'),{createElement:h}=require('react');
async function main(){
 const out=path.join(root,'public/social');fs.mkdirSync(out,{recursive:true});
 const chars=[...new Set(Array.from('UOLINKGUIDE@uo_link釣りの知識を、実釣へ。'+socialDrafts.map(d=>d.headline+d.fishName).join('')))].sort().join('');
 const cache=path.join(root,'.next/cache/social-font');fs.mkdirSync(cache,{recursive:true});
 const fontFile=path.join(cache,require('node:crypto').createHash('sha256').update(chars).digest('hex')+'.ttf');
 if(!fs.existsSync(fontFile)){
  const css=await fetch('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text='+encodeURIComponent(chars));if(!css.ok)throw Error('Font CSS unavailable');
  const fontUrl=(await css.text()).match(/src: url\(([^)]+)\)/)?.[1];if(!fontUrl)throw Error('Font URL unavailable');
  const response=await fetch(fontUrl);if(!response.ok)throw Error('Font download failed');fs.writeFileSync(fontFile,Buffer.from(await response.arrayBuffer()));
 }
 const font=fs.readFileSync(fontFile);
 for(const d of socialDrafts){
  const file=path.join(root,'public',d.image.split('?')[0]);if(!fs.existsSync(file))throw Error('Missing fish image '+d.image);
  const image='data:image/'+(file.endsWith('.svg')?'svg+xml':file.endsWith('.webp')?'webp':'png')+';base64,'+fs.readFileSync(file).toString('base64');
  const element=h('div',{style:{display:'flex',flexDirection:'column',width:'100%',height:'100%',background:'#eaf5f7',color:'#113849',padding:'46px 60px',fontFamily:'Noto',fontWeight:700}},
   h('div',{style:{display:'flex',justifyContent:'space-between',fontSize:30}},h('span',null,'UOLINK'),h('span',{style:{color:'#147c9a'}},'GUIDE')),
   h('div',{style:{display:'flex',alignItems:'center',flex:1,gap:28}},
    h('div',{style:{display:'flex',flexDirection:'column',width:570}},h('div',{style:{fontSize:56,lineHeight:1.35}},d.headline),h('div',{style:{fontSize:22,marginTop:24,color:'#456977'}},'釣りの知識を、実釣へ。')),
    h('img',{src:image,width:430,height:300,style:{objectFit:'contain'}})),
   h('div',{style:{display:'flex',justifyContent:'space-between',fontSize:24,borderTop:'2px solid #b7d5df',paddingTop:20}},h('span',null,d.fishName),h('span',null,'@uo_link')));
  const png=new ImageResponse(element,{width:1200,height:630,fonts:[{name:'Noto',data:font,weight:700,style:'normal'}]});
  const bytes=Buffer.from(await png.arrayBuffer());
  // Explicit JPEG attachments avoid relying on X link-card caching or PNG processing.
  fs.writeFileSync(path.join(out,d.id+'.jpg'),await sharp(bytes).flatten({background:'#eaf5f7'}).jpeg({quality:90,chromaSubsampling:'4:4:4'}).toBuffer());
 }
 fs.writeFileSync(path.join(out,'queue.json'),JSON.stringify({account:'uo_link',mode:'draft-only',campaign:'guide-launch-202609',drafts:socialDrafts},null,2)+'\n');
 fs.writeFileSync(path.join(out,'queue.md'),'# UOLINK X 投稿下書き\n\n自動投稿はしません。画像を添付し、リンク先・内容を確認して投稿してください。\n\n'+socialDrafts.map(d=>`## ${d.dayOffset+1}日目 ${d.suggestedTime} JST：${d.headline}\n\n${d.text}\n\n画像：${d.thumbnail}\n代替テキスト：${d.alt}\n`).join('\n'));
 console.log(`Exported ${socialDrafts.length} GUIDE drafts and 1200×630 JPEG thumbnails.`);
}
main().catch(e=>{console.error(e);process.exitCode=1});
