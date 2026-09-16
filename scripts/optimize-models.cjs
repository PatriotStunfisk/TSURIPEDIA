// Offline, non-destructive GLB texture optimization. Requires sharp (SHARP_MODULE may point to it).
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const sharp=require(process.env.SHARP_MODULE||'sharp');
const root=path.resolve(__dirname,'..'),dir=path.join(root,'public/models'),out=path.join(dir,'optimized');
fs.mkdirSync(out,{recursive:true});
const pad=b=>Buffer.concat([b,Buffer.alloc((4-b.length%4)%4)]);
(async()=>{
 const manifest={},report=[];
 for(const name of [...fs.readdirSync(dir).filter(n=>n.endsWith('.glb')),...fs.readdirSync(path.join(dir,'fish')).filter(n=>n.endsWith('.glb')).map(n=>'fish/'+n)].sort()){
  const bytes=fs.readFileSync(path.join(dir,name)),length=bytes.readUInt32LE(12),j=JSON.parse(bytes.toString('utf8',20,20+length));
  if(j.buffers?.length!==1||j.buffers[0].uri)throw Error('Unsupported external buffers: '+name);
  const bin=bytes.subarray(28+length),replacements=new Map();
  for(const image of j.images||[]){
   if(image.bufferView===undefined)throw Error('External texture: '+name);
   const view=j.bufferViews[image.bufferView],data=bin.subarray(view.byteOffset||0,(view.byteOffset||0)+view.byteLength);
   let pipeline=sharp(data).resize({width:1536,height:1536,fit:'inside',withoutEnlargement:true});
   // Keep the original MIME and all mesh/skin/animation bytes. No anatomy is simplified.
   pipeline=image.mimeType==='image/jpeg'?pipeline.jpeg({quality:88,chromaSubsampling:'4:4:4'}):image.mimeType==='image/webp'?pipeline.webp({quality:88,alphaQuality:100}):pipeline.png({compressionLevel:9});
   const compressed=await pipeline.toBuffer();if(compressed.length<data.length)replacements.set(image.bufferView,compressed);
  }
  let offset=0;const chunks=[];
  j.bufferViews.forEach((v,i)=>{const b=replacements.get(i)||bin.subarray(v.byteOffset||0,(v.byteOffset||0)+v.byteLength);v.byteOffset=offset;v.byteLength=b.length;const chunk=pad(b);chunks.push(chunk);offset+=chunk.length;});
  j.buffers[0].byteLength=offset;const json=Buffer.from(JSON.stringify(j));const jp=Buffer.concat([json,Buffer.alloc((4-json.length%4)%4,32)]),binary=Buffer.concat(chunks),header=Buffer.alloc(20),bh=Buffer.alloc(8);
  header.write('glTF');header.writeUInt32LE(2,4);header.writeUInt32LE(28+jp.length+binary.length,8);header.writeUInt32LE(jp.length,12);header.writeUInt32LE(0x4e4f534a,16);bh.writeUInt32LE(binary.length);bh.writeUInt32LE(0x004e4942,4);
  const result=Buffer.concat([header,jp,bh,binary]);
  if(result.length<bytes.length*.9){const hash=crypto.createHash('sha256').update(result).digest('hex').slice(0,12),file=name.replaceAll('/','-').replace('.glb',`-${hash}.glb`);fs.writeFileSync(path.join(out,file),result);manifest['/models/'+name]='/models/optimized/'+file;report.push({file:name,original:bytes.length,optimized:result.length});}
 }
 fs.writeFileSync(path.join(root,'lib/model-assets.json'),JSON.stringify(manifest,null,2)+'\n');
 fs.writeFileSync(path.join(root,'docs/model-optimization.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({count:report.length,original:report.reduce((s,r)=>s+r.original,0),optimized:report.reduce((s,r)=>s+r.optimized,0)}));
})().catch(e=>{console.error(e);process.exitCode=1});
