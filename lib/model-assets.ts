import optimized from './model-assets.json';
// Keep canonical names for presentation rules; use immutable, generated assets only for transport.
export function modelAssetUrl(src:string){return (optimized as Record<string,string>)[src.split('?')[0]]??src;}
