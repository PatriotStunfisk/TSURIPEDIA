import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';import Footer from '@/components/Footer';
export const metadata:Metadata={metadataBase:new URL('https://tsuripedia.jp'),title:{default:'TSURIPEDIA｜釣りが、もっと好きになる。',template:'%s｜TSURIPEDIA'},description:'魚図鑑・釣り方・釣りスポット・釣具・子ども向けゲームがつながる釣り総合Webサービス。',openGraph:{title:'TSURIPEDIA',description:'釣りが、もっと好きになる。',type:'website',locale:'ja_JP'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body><Header/><main>{children}</main><Footer/></body></html>}
