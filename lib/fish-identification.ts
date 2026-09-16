export type IdentificationResult={candidates:{slug:string;confidence:'high'|'medium'|'low';reason:string;check:string}[];uncertain:string;};
export function validateIdentification(value:unknown,allowed:Set<string>):IdentificationResult{
 if(!value||typeof value!=='object')throw Error('Invalid identification result');const v=value as IdentificationResult;
 if(!Array.isArray(v.candidates)||v.candidates.length>3||typeof v.uncertain!=='string'||v.uncertain.length>800)throw Error('Invalid identification result');
 const seen=new Set<string>();for(const c of v.candidates){if(!c||!allowed.has(c.slug)||seen.has(c.slug)||!['high','medium','low'].includes(c.confidence)||typeof c.reason!=='string'||c.reason.length>500||typeof c.check!=='string'||c.check.length>500)throw Error('Invalid candidate');seen.add(c.slug);}
 return {candidates:v.candidates.map(({slug,confidence,reason,check})=>({slug,confidence,reason,check})),uncertain:v.uncertain};
}
export function identificationSchema(slugs:string[]){return {type:'object',additionalProperties:false,properties:{candidates:{type:'array',maxItems:3,items:{type:'object',additionalProperties:false,properties:{slug:{type:'string',enum:slugs},confidence:{type:'string',enum:['high','medium','low']},reason:{type:'string'},check:{type:'string'}},required:['slug','confidence','reason','check']}},uncertain:{type:'string'}},required:['candidates','uncertain']};}
