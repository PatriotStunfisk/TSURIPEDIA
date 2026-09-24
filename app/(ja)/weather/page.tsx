import WeatherPageClient from '@/components/WeatherPageClient';
import {pageSharing} from '@/lib/page-sharing';
export const metadata=pageSharing('/weather','釣りの天気・タイドグラフ','全国主要都市の気象庁天気予報と近隣港の潮位表。今日・明日の風、波、降水確率、満潮・干潮を確認。');
export default function WeatherPage(){return <div className="section pageTop"><div className="pageHero"><span>WEATHER & TIDE</span><h1>天気・タイドグラフ</h1><p>全国主要都市の天気と近隣港の潮汐を、釣行前にまとめて確認。</p></div><WeatherPageClient/><p style={{fontSize:13,color:'var(--muted)',lineHeight:1.8}}>気象庁の天気予報・潮位表を加工して表示しています。予報は地域単位、潮汐は表示した港の基準面からの高さです。釣行判断には最新の警報・注意報、風・波、現地の状況も確認してください。</p><div className="actions"><a className="primary" href="/spots">釣り場マップへ →</a><a href="https://www.jma.go.jp/bosai/warning/" target="_blank" rel="noreferrer">気象庁の警報・注意報 →</a></div></div>}
