const labels={worm:['頭側から針を通す','針先を出す','垂らしは短めから'],strip:['細い短冊にする','端を一度刺す','針先を身に埋めない'],shrimp:['尾を切り針に合わせる','腹側から通す','曲げずに針先を出す']} as const;
export default function BaitDiagram({kind}:{kind:keyof typeof labels}){
 return <figure style={{margin:'22px 0',padding:18,background:'#f3f8fa',borderRadius:12}}><svg viewBox="0 0 600 200" role="img" aria-label={labels[kind].join('、')} style={{width:'100%',height:'auto'}}>
 <path d="M80 10v100q0 58 55 58t55-58V87l-15 18" fill="none" stroke="#335367" strokeWidth="7" strokeLinecap="round"/>
 {kind==='worm'?<><path d="M77 49q-18 35 8 74t58 20 42-19q30 0 50 27" fill="none" stroke="#d09778" strokeWidth="22" strokeLinecap="round"/><path d="m80 67 12-4m-12 25 16-4m-3 25 13-7m9 25 10-13m17 12 3-16" stroke="#b0765d" strokeWidth="3"/></>:kind==='strip'?<path d="m62 95 55-18 106 99-48 15Z" fill="#c9a18d" stroke="#547b8d" strokeWidth="7"/>:<><path d="M80 43q-22 60 25 102 52 30 97-15l-26-15q-40 27-59-10-16-34 7-47Z" fill="#e9ad94" stroke="#cc866d" strokeWidth="3"/><path d="m91 77 25-4m-19 25 18-8m-4 30 18-13m8 31 8-17" stroke="#cc866d" strokeWidth="3"/></>}
 <path d="M190 110V87l-15 18" fill="none" stroke="#b34325" strokeWidth="8" strokeLinecap="round"/>
 <path d="m214 84 48-32h37" fill="none" stroke="#b34325" strokeWidth="2"/><text x="310" y="57" fill="#8c361d" fontSize="20">針先を出す</text><text x="295" y="115" fill="#173449" fontSize="18">{labels[kind][0]}</text><text x="295" y="153" fill="#173449" fontSize="18">{labels[kind][2]}</text>
 </svg><figcaption style={{fontSize:13,lineHeight:1.8}}>餌付けの模式図。針・餌の大きさは実物と異なります。{labels[kind].join('。')}。針先を指へ向けずに作業してください。</figcaption></figure>;
}
