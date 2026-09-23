import type {Metadata} from 'next';
import {Analytics} from '@vercel/analytics/next';
import {EnglishHeader,EnglishFooter} from '@/components/en/Chrome';
import '../globals.css';
import './english.css';
import {siteUrl} from '@/lib/site-url';
export const metadata:Metadata={metadataBase:new URL(siteUrl),applicationName:'UOLINK',title:{default:'UOLINK – Fishing Guide & Fishing Map for Japan',template:'%s | UOLINK'},description:'Explore fish species, Japanese fishing methods and fishing spots across Japan.',robots:{index:true,follow:true},icons:{icon:'/icon.png',apple:'/apple-icon.png'}};
export default function EnglishLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><EnglishHeader/><main className="englishMain">{children}</main><EnglishFooter/><Analytics/></body></html>}
