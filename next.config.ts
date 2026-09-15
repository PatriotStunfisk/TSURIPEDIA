import {fishSlugAliases} from './lib/fish-aliases';
import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typedRoutes: false,
  // Preserve normal local images, and allow versioned encyclopedia assets.
  images:{localPatterns:[{pathname:'/**',search:''},{pathname:'/images/fish/**'}]},
  async redirects(){return Object.entries(fishSlugAliases).map(([alias,slug])=>({source:`/fish/${alias}`,destination:`/fish/${slug}`,permanent:true}));}
};
export default nextConfig;
