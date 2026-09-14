import {existsSync,readdirSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join} from 'node:path';

// Server/build only: adding a conventionally named GLB enables the next build.
export function getSpeciesModelSrc(slug:string,publicRoot=join(process.cwd(),'public')){
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))return undefined;
  const directory=join(publicRoot,'models');
  if(!existsSync(directory))return undefined;
  const aliases:Record<string,string>={chinu:'kurodai',iwashi:'maiwashi'};
  const names=readdirSync(directory);
  const filename=[`${slug}.glb`,...(Object.hasOwn(aliases,slug)?[`${aliases[slug]}.glb`]:[])].find(name=>names.includes(name)&&existsSync(join(directory,name)));
  // The uploaded isaki.glb is byte-identical to the visually verified kanpachi.
  // Keep the user's file intact; a corrected replacement is enabled automatically.
  if(slug==='isaki'&&filename&&createHash('sha256').update(readFileSync(join(directory,filename))).digest('hex')==='bb8d362c78fe58ba628ad760cf6f1ef88bcf7e9b8dd1303e88b4e34772171575')return undefined;
  return filename?`/models/${filename}`:undefined;
}
