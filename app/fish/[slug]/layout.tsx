import type {Metadata} from 'next';
import {getFishProfile as getFish} from '@/lib/fish-registry';

const base='https://uolink.vercel.app';

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const f=getFish(slug);
  if(!f)return {};
  const url=`/fish/${slug}`;
  return {
    alternates:{canonical:url},
    keywords:[f.name,`${f.name} 釣り`,`${f.name} 釣り方`,`${f.name} 旬`,`${f.name} 仕掛け`,`${f.name} 釣具`,'UOLINK','ウオリンク','魚図鑑'],
    openGraph:{
      url:base+url,
      title:`${f.name}の釣り方・旬・特徴｜UOLINK（ウオリンク）魚図鑑`,
      description:`${f.name}の特徴、旬、釣れる時期、釣り方、仕掛け、必要な釣具をUOLINK（ウオリンク）で紹介。${f.desc}`,
      type:'article',
      siteName:'UOLINK（ウオリンク）',
      locale:'ja_JP'
    }
  };
}

export default async function FishLayout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){
  const {slug}=await params;
  const f=getFish(slug);
  if(!f)return children;
  const url=`${base}/fish/${slug}`;
  const breadcrumb={
    '@context':'https://schema.org',
    '@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'ホーム',item:base},
      {'@type':'ListItem',position:2,name:'魚図鑑',item:`${base}/fish`},
      {'@type':'ListItem',position:3,name:f.name,item:url}
    ]
  };
  const page={
    '@context':'https://schema.org',
    '@type':'WebPage',
    '@id':`${url}#webpage`,
    url,
    name:`${f.name}の釣り方・旬・特徴｜UOLINK（ウオリンク）魚図鑑`,
    description:`${f.name}の特徴、旬、釣れる時期、釣り方、仕掛け、必要な釣具を紹介。${f.desc}`,
    inLanguage:'ja-JP',
    isPartOf:{'@id':`${base}/#website`},
    about:{'@type':'Thing',name:f.name,alternateName:f.en}
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(page)}}/>{children}</>;
}
