import {requireCatchModerator} from '@/lib/server/catch-auth';
import {storeRequest} from '@/lib/server/catch-store';
import {apiError} from '@/lib/server/request';
import {catchSources} from '@/lib/catches/sources';
export async function GET(){try{await requireCatchModerator();const enabled=process.env.CATCH_EXTERNAL_ENABLED==='true';const runs=enabled?await(await storeRequest('/rest/v1/catch_import_runs?order=finished_at.desc&limit=50&select=source,status,inserted,invalid,finished_at')).json():[];return Response.json({enabled,sources:catchSources.map(({id,name,enabled})=>({id,name,enabled})),runs},{headers:{'Cache-Control':'private, no-store'}});}catch(e){return apiError(e)}}
