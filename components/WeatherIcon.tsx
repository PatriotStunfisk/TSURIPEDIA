import {describeWeather, type WeatherKind} from '@/lib/weather-display';
function Symbol({kind}:{kind:WeatherKind}) {
  return <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    {kind === 'sun' ? <g stroke="#e99c16" strokeWidth="2" strokeLinecap="round"><circle cx="16" cy="16" r="6" fill="#ffce45"/>{[0,45,90,135,180,225,270,315].map(angle=><path key={angle} d="M16 3v3" transform={`rotate(${angle} 16 16)`}/>)}</g> : <>
      <path d="M8 23a6 6 0 0 1-1-12 9 9 0 0 1 17-1 6.5 6.5 0 0 1 0 13Z" fill={kind==='cloud'?'#8ca7b8':'#68869d'}/>
      {kind==='rain'&&<path d="m9 26-2 4m10-4-2 4m10-4-2 4" stroke="#1687e8" strokeWidth="2" strokeLinecap="round"/>}
      {kind==='snow'&&<g fill="#55a5d3"><circle cx="9" cy="28" r="2"/><circle cx="17" cy="28" r="2"/><circle cx="25" cy="28" r="2"/></g>}
      {kind==='storm'&&<path d="m17 18-5 9h5l-2 5 8-10h-6l3-4Z" fill="#f8c644"/>}
    </>}
  </svg>;
}
export default function WeatherIcon({text}:{text:string}) {
  const {kinds}=describeWeather(text);
  return <span aria-hidden="true" style={{display:'inline-flex',alignItems:'center',flexShrink:0}}>{kinds.slice(0,2).map(kind=><Symbol key={kind} kind={kind}/>)}</span>;
}
