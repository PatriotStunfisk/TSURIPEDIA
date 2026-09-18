import {catchUser} from '@/lib/server/catch-auth';
import {flagCatch,takeQuota} from '@/lib/server/catch-store';
import {validDeleteToken} from '@/lib/catches/types';
import {sameOrigin,limitedJson,apiError,HttpError} from '@/lib/server/request';
export async function POST(request:Request){try{sameOrigin(request);const user=(await catchUser())!;const v=await limitedJson(request,2000) as Record<string,unknown>;if(!validDeleteToken(v.id)||typeof v.reason!=='string'||!v.reason.trim()||v.reason.length>300)throw new HttpError(400,'投稿と理由を確認してください。');await takeQuota(request,'catch-report',10,user.id);await flagCatch(v.id,user.id,v.reason.trim());return Response.json({reported:true});}catch(e){return apiError(e)}}
