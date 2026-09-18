// Provider secrets stay in Supabase Auth. Only enabled/disabled flags reach the UI.
export async function catchProviders(){
 const none={google:false,apple:false};
 const url=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.SUPABASE_ANON_KEY||process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_SERVICE_ROLE_KEY;
 if(!url||!key)return none;
 try{const r=await fetch(`${url}/auth/v1/settings`,{headers:{apikey:key},cache:'no-store',signal:AbortSignal.timeout(5000)});if(!r.ok)return none;const settings=await r.json();return {google:settings.external?.google===true,apple:settings.external?.apple===true};}catch{return none;}
}
