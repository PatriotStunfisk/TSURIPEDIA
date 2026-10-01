import modelFiles from './generated/model-files.json';

// Generated before dev/build: only filenames, never public assets, enter Functions.
export function getSpeciesModelSrc(slug:string,availableModels:readonly string[]=modelFiles){
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))return undefined;
  const aliases:Record<string,string>={chinu:'kurodai',iwashi:'maiwashi',haze:'mahaze',houbo:'houbou',akakamas:'akakamasu',katakuchi:'katakuchiiwashi',urume:'urumeiwashi'};
  const filename=[`${slug}.glb`,...(Object.hasOwn(aliases,slug)?[`${aliases[slug]}.glb`]:[])].find(name=>availableModels.includes(name));
  return filename?`/models/${filename}`:undefined;
}
