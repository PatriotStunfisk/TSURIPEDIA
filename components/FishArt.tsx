import s from './FishArt.module.css';
type Props={slug:string;label?:string};

const colors:Record<string,{body:string;dark:string;light:string;accent:string}>={
  aji:{body:'#9fb7be',dark:'#49626d',light:'#e8f3f6',accent:'#c8b34b'},
  madai:{body:'#e6929a',dark:'#9d4d58',light:'#ffd9dc',accent:'#5fa8cc'},
  buri:{body:'#8da8b0',dark:'#3d5660',light:'#dce8eb',accent:'#d7bd49'},
  kisu:{body:'#d8d0b3',dark:'#8d866e',light:'#f7f1d8',accent:'#c8a55a'},
  kasago:{body:'#ad6f57',dark:'#593e35',light:'#d9a187',accent:'#70412f'},
  tachiuo:{body:'#c8d9df',dark:'#57707b',light:'#f4fbff',accent:'#83c8e8'},
  saba:{body:'#8facbc',dark:'#355364',light:'#d9e7ee',accent:'#3d788d'},
  iwashi:{body:'#a8c4cf',dark:'#4b6874',light:'#edf7fa',accent:'#d5d35f'},
  suzuki:{body:'#aebbc0',dark:'#58666d',light:'#eef3f4',accent:'#7898a2'},
  chinu:{body:'#87959b',dark:'#34454e',light:'#ced7da',accent:'#5f737c'},
  hirame:{body:'#a99476',dark:'#5e503e',light:'#d7c9aa',accent:'#7d6b50'},
  mebaru:{body:'#ad7966',dark:'#5e443d',light:'#d5a18e',accent:'#7c5547'},
  aoriika:{body:'#c7d2c8',dark:'#65746a',light:'#edf3ed',accent:'#9eafa2'},
  madako:{body:'#b66f68',dark:'#69423f',light:'#dfaaa3',accent:'#8a4d47'}
};

function FishShape({slug}:{slug:string}){
  const c=colors[slug]??{body:'#9db2ba',dark:'#536a74',light:'#e4eef1',accent:'#7fa1ad'};
  if(slug==='tachiuo')return <g><path d="M18 88 C55 52 158 50 285 66 C360 76 432 95 492 111 C430 109 359 110 286 112 C154 114 62 111 18 88Z" fill={c.body}/><path d="M20 88 C11 80 9 71 19 61 C25 70 28 79 30 88 C27 96 24 102 18 111 C9 102 10 94 20 88Z" fill={c.dark}/><circle cx="43" cy="78" r="6" fill="#08131a"/><path d="M33 92 L18 101 L31 96 L18 93Z" fill={c.light}/><path d="M44 64 C140 48 260 52 361 75" stroke={c.light} strokeWidth="4" fill="none" opacity=".8"/></g>;
  if(slug==='kisu')return <g><path d="M28 100 C74 58 172 58 296 84 C349 95 400 108 455 112 C400 121 347 131 294 136 C171 148 74 137 28 100Z" fill={c.body}/><path d="M448 112 L498 83 L482 113 L499 140Z" fill={c.dark}/><circle cx="72" cy="91" r="7" fill="#111"/><path d="M90 78 C166 70 238 80 306 97" stroke={c.light} strokeWidth="5" fill="none"/></g>;
  if(slug==='hirame')return <g transform="translate(15 18)"><path d="M43 127 C88 54 207 36 325 71 C389 90 426 123 442 157 C387 181 310 197 227 193 C141 189 70 167 43 127Z" fill={c.body}/><path d="M432 156 L496 132 L461 162 L495 187Z" fill={c.dark}/><circle cx="120" cy="111" r="8" fill="#111"/><circle cx="145" cy="101" r="7" fill="#111"/><path d="M88 146 C179 172 280 174 382 149" stroke={c.dark} strokeWidth="5" fill="none" opacity=".6"/></g>;
  if(slug==='aoriika')return <g><path d="M110 78 C161 32 244 34 295 77 C327 105 327 151 294 176 C239 218 158 208 110 168 C74 137 75 107 110 78Z" fill={c.body}/><path d="M116 86 L67 50 L91 102 L49 85 L92 124 L57 135 L105 142" fill="none" stroke={c.dark} strokeWidth="13" strokeLinecap="round"/><circle cx="167" cy="101" r="9" fill="#111"/><circle cx="240" cy="101" r="9" fill="#111"/><path d="M300 89 C352 75 393 72 455 88 C413 102 365 115 310 116Z" fill={c.light}/></g>;
  if(slug==='madako')return <g><path d="M125 92 C138 35 234 29 266 82 C292 126 267 169 224 177 C175 187 117 153 125 92Z" fill={c.body}/><circle cx="165" cy="92" r="8" fill="#111"/><circle cx="217" cy="92" r="8" fill="#111"/><path d="M152 160 C118 188 95 212 81 244 M174 170 C155 205 147 228 145 250 M198 174 C196 211 202 231 215 252 M221 166 C250 202 268 222 290 239 M244 151 C286 172 315 189 342 216 M143 151 C102 166 68 185 39 207" stroke={c.dark} strokeWidth="16" fill="none" strokeLinecap="round"/></g>;
  return <g><path d="M35 115 C82 48 191 42 300 80 C350 97 390 109 448 111 C402 133 349 153 293 165 C184 188 86 173 35 115Z" fill={c.body}/><path d="M442 111 L497 72 L480 112 L498 153Z" fill={c.dark}/><path d="M135 70 C190 40 272 45 331 74 L294 88 C242 75 189 75 145 90Z" fill={c.dark} opacity=".72"/><path d="M144 160 C198 182 263 180 319 158" stroke={c.light} strokeWidth="8" fill="none" opacity=".75"/><circle cx="86" cy="94" r="9" fill="#0c1519"/><circle cx="88" cy="92" r="3" fill="#fff"/><path d="M56 118 C75 129 96 131 118 124" stroke={c.dark} strokeWidth="5" fill="none"/>{slug==='madai'&&<><path d="M139 93 C195 79 256 82 309 101" stroke={c.accent} strokeWidth="4" fill="none" opacity=".8"/><circle cx="213" cy="101" r="4" fill={c.accent}/><circle cx="248" cy="113" r="4" fill={c.accent}/></>}{slug==='buri'&&<path d="M98 118 C204 122 311 120 422 113" stroke={c.accent} strokeWidth="7" fill="none" opacity=".9"/>}{slug==='aji'&&<path d="M117 130 C212 134 310 129 405 115" stroke={c.accent} strokeWidth="5" fill="none" opacity=".8"/>}{slug==='kasago'&&<><path d="M120 78 L135 46 L151 81 M159 70 L173 38 L188 76 M199 67 L214 36 L226 76" fill={c.dark}/><circle cx="170" cy="124" r="12" fill={c.accent} opacity=".45"/></>}</g>;
}

export default function FishArt({slug,label}:Props){
  return <div className={s.art} role="img" aria-label={label??slug}><svg viewBox="0 0 520 250" preserveAspectRatio="xMidYMid meet"><FishShape slug={slug}/></svg></div>;
}
