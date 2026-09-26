const crypto=require('node:crypto');
const platforms=['youtube','tiktok'];
function fingerprint(plan){
 // Explicitly naming the legacy renderer must not invalidate past publication records.
 const value=plan.renderStyle==='cards-v1'?Object.fromEntries(Object.entries(plan).filter(([key])=>key!=='renderStyle')):plan;
 return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}
function transition(previous,action,url){
 const status=previous?.status??'draft';
 if(action==='reviewed'&&status==='draft')return {status:'reviewed'};
 if(action==='uncertain'&&status==='reviewed')return {status:'uncertain'};
 if(action==='published'&&['reviewed','uncertain'].includes(status)){
  const u=new URL(url);if(u.protocol!=='https:')throw Error('HTTPS publication URL required');
  return {status:'published',url:u.toString(),publishedAt:new Date().toISOString()};
 }
 throw Error(`Invalid transition ${status} → ${action}. Published/uncertain entries cannot be retried blindly.`);
}
function validatePublication(platform,url){
 const u=new URL(url);const valid=platform==='youtube'?(['www.youtube.com','youtube.com','youtu.be'].includes(u.hostname)&&(u.hostname==='youtu.be'?u.pathname.length>1:(/^\/shorts\/[^/]+$/.test(u.pathname)||(u.pathname==='/watch'&&Boolean(u.searchParams.get('v')))))):(['www.tiktok.com','tiktok.com'].includes(u.hostname)&&/^\/@[^/]+\/video\/\d+/.test(u.pathname));
 if(u.protocol!=='https:'||!valid)throw Error('Use the actual video URL for the selected platform');
}
module.exports={fingerprint,transition,validatePublication,platforms};
