import {revalidateTag} from 'next/cache';
import {requireCatchModerator} from '@/lib/server/catch-auth';
import {moderationQueue,moderateCatch,takeQuota} from '@/lib/server/catch-store';
import {validDeleteToken} from '@/lib/catches/types';
import {sameOrigin,limitedJson,apiError,HttpError} from '@/lib/server/request';
export async function GET(){try{await requireCatchModerator();return Response.json(await moderationQueue(),{headers:{'Cache-Control':'private, no-store'}});}catch(e){return apiError(e)}}
export async function POST(request:Request){try{sameOrigin(request);const user=await requireCatchModerator();const v=await limitedJson(request,2000) as Record<string,unknown>;if(!validDeleteToken(v.id)||!['approve','reject','delete','resolve'].includes(v.action as string))throw new HttpError(400,'操作を確認してください。');await takeQuota(request,'catch-moderate',30,user.id);await moderateCatch(v.id,v.action as 'approve'|'reject'|'delete'|'resolve');try{revalidateTag('catch-activity',{expire:0});}catch{}return Response.json({updated:true});}catch(e){return apiError(e)}}
