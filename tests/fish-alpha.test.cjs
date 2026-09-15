const assert=require('node:assert/strict');
const test=require('node:test');
const fs=require('node:fs');
const path=require('node:path');
const {createHash}=require('node:crypto');
const root=path.resolve(__dirname,'..');
test('regenerated and new encyclopedia PNGs retain the inspected transparent originals',()=>{
 const rows=[...require('../docs/species-next-images.json'),...require('../docs/species-national-images.json').filter(r=>r.kind==='fish')];
 assert.equal(rows.length,20);
 for(const r of rows){const bytes=fs.readFileSync(path.join(root,r.file));assert.equal(bytes.readUInt32BE(0),0x89504e47,r.slug);assert.equal(bytes[25],6,'RGBA: '+r.slug);assert.ok(r.transparentPixelFraction>.2,r.slug);assert.equal(createHash('sha256').update(bytes).digest('hex'),r.sha256,'inspect alpha and refresh manifest after editing '+r.slug)}
});
