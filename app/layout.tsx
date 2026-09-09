import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';import Footer from '@/components/Footer';
import FishPageEnhancer from '@/components/FishPageEnhancer';

const siteUrl='https://uolink.vercel.app';

export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:'UOLINK（ウオリンク）｜魚図鑑・釣り方・釣り場・釣具',template:'%s｜UOLINK（ウオリンク）'},
  description:'UOLINK（ウオリンク）は、魚図鑑・釣り方・釣り場・釣具をつなぐ釣り総合ガイド。タチウオやマダイなどの魚情報から、仕掛け・ポイント・道具まで分かりやすく紹介します。',
  keywords:['UOLINK','ウオリンク','魚図鑑','釣り方','釣り場','釣具','タチウオ','マダイ','釣り'],
  applicationName:'UOLINK',
  openGraph:{
    title:'UOLINK（ウオリンク）',
    description:'魚から、釣りへつながる。魚図鑑・釣り方・釣り場・釣具の総合ガイド。',
    url:siteUrl,
    siteName:'UOLINK（ウオリンク）',
    type:'website',
    locale:'ja_JP'
  },
  twitter:{card:'summary_large_image',title:'UOLINK（ウオリンク）',description:'魚から、釣りへつながる。魚図鑑・釣り方・釣り場・釣具の総合ガイド。'},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true}}
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body><Header/><FishPageEnhancer/><main>{children}</main><Footer/></body></html>}
