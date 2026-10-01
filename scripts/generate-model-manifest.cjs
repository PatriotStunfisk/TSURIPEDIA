const {readdirSync,readFileSync,writeFileSync,mkdirSync}=require('node:fs');
const {createHash}=require('node:crypto');
const {join,resolve}=require('node:path');

// This file runs before Next.js, never from a page or a server Function.
function collectModelFiles(publicRoot){
  const directory=join(publicRoot,'models');
  let entries;
  try{entries=readdirSync(directory,{withFileTypes:true});}
  catch(error){if(error.code==='ENOENT')return [];throw error;}
  return entries.filter(entry=>entry.isFile()&&/^[a-z0-9]+(?:-[a-z0-9]+)*\.glb$/.test(entry.name))
    .map(entry=>entry.name).filter(name=>{
      // Preserve the existing safeguard: the uploaded isaki is a kanpachi copy.
      // A corrected replacement becomes available on the next dev/build run.
      return name!=='isaki.glb'||createHash('sha256').update(readFileSync(join(directory,name))).digest('hex')!=='bb8d362c78fe58ba628ad760cf6f1ef88bcf7e9b8dd1303e88b4e34772171575';
    }).sort();
}

function writeModelManifest(projectRoot=resolve(__dirname,'..')){
  const models=collectModelFiles(join(projectRoot,'public'));
  const destination=join(projectRoot,'lib/generated/model-files.json');
  const content=JSON.stringify(models,null,2)+'\n';
  let previous;
  try{previous=readFileSync(destination,'utf8');}
  catch(error){if(error.code!=='ENOENT')throw error;}
  if(previous!==content){mkdirSync(join(projectRoot,'lib/generated'),{recursive:true});writeFileSync(destination,content);}
  return models;
}

module.exports={collectModelFiles,writeModelManifest};
if(require.main===module){const models=writeModelManifest();console.log(`Model manifest: ${models.length} model filenames`);}
