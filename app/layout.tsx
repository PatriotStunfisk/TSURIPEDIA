import type {Metadata} from 'next';
import {Analytics} from '@vercel/analytics/next';
import './globals.css';
import Header from '@/components/Header';import Footer from '@/components/Footer';
import FishPageEnhancer from '@/components/FishPageEnhancer';

const siteUrl='https://uolink.vercel.app';

export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:'UOLINK（ウオリンク）｜魚図鑑・釣り方・釣り場・釣具',template:'%s｜UOLINK（ウオリンク）'},
  description:'UOLINK（ウオリンク）は、魚図鑑・釣り方・釣り場・釣具をつなぐ釣り総合ガイド。タチウオ、マアジ、マダイ、カサゴ、サバなどの旬・生態・仕掛け・釣り方・必要な釣具を分かりやすく紹介します。',
  keywords:['UOLINK','ウオリンク','魚図鑑','釣り方','釣り場','釣具','カサゴ','サバ','タチウオ','マアジ','マダイ','釣り'],
  applicationName:'UOLINK（ウオリンク）',
  alternates:{canonical:'/'},
  category:'fishing',
  openGraph:{
    title:'UOLINK（ウオリンク）｜魚から、釣りへつながる',
    description:'魚図鑑から釣り方・釣り場・釣具へつながる釣り総合ガイド。',
    url:siteUrl,
    siteName:'UOLINK（ウオリンク）',
    type:'website',
    locale:'ja_JP'
  },
  twitter:{card:'summary_large_image',title:'UOLINK（ウオリンク）',description:'魚から、釣りへつながる。魚図鑑・釣り方・釣り場・釣具の総合ガイド。'},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}}
};

const websiteJsonLd={
  '@context':'https://schema.org',
  '@type':'WebSite',
  '@id':`${siteUrl}/#website`,
  url:siteUrl,
  name:'UOLINK',
  alternateName:['ウオリンク','UOLINK（ウオリンク）'],
  inLanguage:'ja-JP',
  description:'魚図鑑・釣り方・釣り場・釣具をつなぐ釣り総合ガイド'
};

const organizationJsonLd={
  '@context':'https://schema.org',
  '@type':'Organization',
  '@id':`${siteUrl}/#organization`,
  name:'UOLINK',
  alternateName:['ウオリンク','UOLINK（ウオリンク）'],
  url:siteUrl,
  logo:`${siteUrl}/brand/uolink-logo-hq.png`,
  description:'魚から釣りへつなぐ釣り情報サイト UOLINK（ウオリンク）'
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteJsonLd)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/><Header/><FishPageEnhancer/><main>{children}</main><Footer/><Analytics/></body></html>}
