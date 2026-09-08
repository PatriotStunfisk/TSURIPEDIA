import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';import Footer from '@/components/Footer';
import FishPageEnhancer from '@/components/FishPageEnhancer';
export const metadata:Metadata={title:{default:'UOLINK｜魚から、釣りへつながる。',template:'%s｜UOLINK'},description:'魚図鑑・釣り方・釣りスポット・釣具・ゲームがつながる釣り総合Webサービス。',openGraph:{title:'UOLINK',description:'魚から、釣りへつながる。',type:'website',locale:'ja_JP'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body><Header/><FishPageEnhancer/><main>{children}</main><Footer/></body></html>}
