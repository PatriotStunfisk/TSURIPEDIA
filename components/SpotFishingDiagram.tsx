import type {SpotIllustrationTopic} from '@/lib/spot-illustration-types';
import {illustrationLessons} from '@/lib/spot-illustration-lessons';
// Original vector teaching diagrams: no copied site photos, no invented geographic coordinates.
export default function SpotFishingDiagram({topic}:{topic:SpotIllustrationTopic}){
 const lesson=illustrationLessons[topic];
 if(topic==='pond')return <svg viewBox="0 0 620 350" role="img" aria-label="ヘラブナ底釣りの手順。1 底を測る、2 針を底へ合わせる、3 ウキのなじみと戻りを比べる。模式図。">
  <rect width="620" height="350" rx="18" fill="#e5f4f8"/><path d="M0 275 H620 V350 H0Z" fill="#ddcfad"/><path d="M0 100 H620" stroke="#61aabe" strokeWidth="3"/>
  <g stroke="#aac6cf" strokeDasharray="5 6"><path d="M205 40 V280"/><path d="M410 40 V280"/></g>
  <g fill="#163f53" fontSize="24" textAnchor="middle" fontWeight="700"><text x="100" y="40">1 底を測る</text><text x="308" y="40">2 針を合わせる</text><text x="510" y="40">3 なじみを見る</text></g>
  <path d="M100 93 V260" stroke="#0c7089" strokeWidth="3"/><rect x="94" y="260" width="12" height="15" rx="2" fill="#5a6874"/>
  <path d="M308 92 V233 M308 233 L289 275 M308 233 L325 275" fill="none" stroke="#0c7089" strokeWidth="3"/><g fill="#b17649"><circle cx="289" cy="274" r="6"/><circle cx="325" cy="274" r="6"/></g>
  <g stroke="#e07944" strokeWidth="6" strokeLinecap="round"><path d="M100 68 V110"/><path d="M308 70 V112"/><path d="M482 65 V111"/><path d="M542 87 V133"/></g>
  <g stroke="#fff" strokeWidth="3">{[72,82,92,102].map(y=><path key={y} d={`M477 ${y} H487 M537 ${y+22} H547`}/>)}</g>
  <path d="M510 65 V125 M502 115 L510 125 L518 115" fill="none" stroke="#0c7089" strokeWidth="3"/>
  <g fill="#355566" fontSize="22" textAnchor="middle"><text x="100" y="310">オモリで水深確認</text><text x="308" y="310">同じ投入点へ</text><text x="510" y="175">餌を付けた後の</text><text x="510" y="205">目盛りを比べる</text><text x="510" y="310">変化を観察</text></g>
 </svg>;
 const paths:Record<SpotIllustrationTopic,string[]>={
  layers:['M160 68 L160 257','M260 250 L260 182','M360 182 L360 114'],
  bottom:['M105 65 Q310 40 490 234','M475 232 L345 221','M335 219 L230 198'],
  structure:['M150 69 L160 240','M160 240 Q215 150 255 224','M255 224 Q290 148 350 222'],
  surf:['M100 272 Q130 155 140 90','M230 272 Q280 125 315 60','M365 272 Q430 180 480 95'],
  fall:['M490 72 L490 246','M490 246 L390 161','M390 161 L345 242'],
  float:['M150 69 L245 96','M245 96 L350 96','M350 96 L465 96'],
  flow:['M65 95 L190 95','M185 165 Q290 235 405 175','M405 175 L485 268'],
  pond:['M172 68 L172 265','M260 68 L260 265','M365 68 L365 265'],
 };
 const isPlan=topic==='surf'||topic==='flow';
 const spots=paths[topic];
 return <svg viewBox="0 0 620 350" role="img" aria-label={`${lesson.title}。1 ${lesson.labels[0]}、2 ${lesson.labels[1]}、3 ${lesson.labels[2]}。釣り方の模式図。`}>
 <defs><marker id={`lesson-arrow-${topic}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="#0b718e"/></marker></defs>
 <rect width="620" height="350" rx="18" fill="#e5f4f8"/>
 {isPlan?<><path d="M0 300 Q160 270 310 300 T620 300 V350 H0Z" fill="#e8d8ac"/>{topic==='surf'?<g stroke="#98cad9" strokeWidth="3" fill="none"><path d="M30 120 Q170 95 290 120 T590 120"/><path d="M30 190 Q180 160 310 190 T590 190"/></g>:<path d="M0 145 Q240 150 320 250" fill="none" stroke="#abcdd7" strokeWidth="45"/>}</>:<><path d="M0 0 H115 V270 H0Z" fill="#afc2c8"/><path d="M115 270 Q300 280 620 270 V350 H115Z" fill="#ddcfad"/><path d="M115 70 H620" stroke="#5da6bd" strokeWidth="3"/>{topic==='structure'&&<path d="M115 270 L147 240 L179 265 L213 230 L246 261 L280 235 L318 270Z" fill="#8caba8"/>}</>}
 <g stroke="#0b718e" strokeWidth="4" fill="none" strokeLinecap="round">{spots.map((d,i)=><path key={d} d={d} markerEnd={`url(#lesson-arrow-${topic})`} strokeDasharray={i===2?'7 7':undefined}/> )}</g>
 {topic==='layers'&&<g fill="#ffb846">{[250,180,110].map((y,i)=><ellipse key={y} cx={190+i*100} cy={y} rx="15" ry="7"/>)}</g>}
 {topic==='float'&&<g stroke="#0a718d" strokeWidth="2">{[245,350,465].map(x=><g key={x}><path d={`M${x} 96 L${x+30} 215`} strokeDasharray="5 5"/><ellipse cx={x} cy="93" rx="5" ry="15" fill="#ef784f"/></g>)}</g>}
 <g fontSize="21" fill="#335762" fontWeight="600"><text x="440" y="32">{isPlan?'上から見た探り方':'横から見た探り方'}</text><text x="18" y="32">{isPlan?'岸から探る':'岸壁側'}</text></g>
 <g fill="#063d55" stroke="white" strokeWidth="2">{[140,305,470].map(x=><circle key={x} cx={x} cy="310" r="18"/>)}</g>
 <g fill="white" fontSize="20" textAnchor="middle" fontWeight="800">{[140,305,470].map((x,i)=><text key={x} x={x} y="317">{i+1}</text>)}</g>
 </svg>;
}
