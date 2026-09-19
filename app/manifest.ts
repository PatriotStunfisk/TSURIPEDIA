import type {MetadataRoute} from 'next';

export default function manifest():MetadataRoute.Manifest{
  return {
    name:'UOLINK（ウオリンク）',
    short_name:'UOLINK',
    description:'魚図鑑・釣り方・釣り場・料理・釣具をつなぐ釣り総合ガイド。',
    lang:'ja',
    id:'/',
    start_url:'/',
    scope:'/',
    display:'browser',
    icons:[{src:'/icon.png',sizes:'1024x1024',type:'image/png',purpose:'any'}]
  };
}
