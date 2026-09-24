import {NextResponse} from 'next/server';
import {fishingMapEntries} from '@/lib/fishing-map-data';
import {spotFieldGuides} from '@/lib/spot-field-guides';
const knownSpots=new Set(fishingMapEntries.map(spot=>spot.slug));
export async function GET(_request:Request,{params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 if(!knownSpots.has(slug))return NextResponse.json({error:'Not found'},{status:404});
 return NextResponse.json({guide:spotFieldGuides[slug]??null},{headers:{'Cache-Control':'public, max-age=300, s-maxage=3600'}});
}
