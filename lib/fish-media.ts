import {existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';

// Server/build only: adding a conventionally named GLB enables the next build.
export function getSpeciesModelSrc(slug:string,publicRoot=join(process.cwd(),'public')){
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))return undefined;
  const src=`/models/${slug}.glb`;
  const directory=join(publicRoot,'models');
  return existsSync(directory)&&readdirSync(directory).includes(`${slug}.glb`)&&existsSync(join(publicRoot,src))?src:undefined;
}
