'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {unknownFishNames} from '@/lib/catches/types';
import s from './Submission.module.css';
const normalize=(v:string)=>v.normalize('NFKC').toLowerCase().replace(/[ぁ-ゖ]/g,c=>String.fromCharCode(c.charCodeAt(0)+0x60));
export default function CatchFishSearch({fish}:{fish:{slug:string;name:string;aliases?:string[]}[]}){
 const input=useRef<HTMLInputElement>(null);
 useEffect(()=>{const form=input.current?.form;const reset=()=>{setValue('');setQuery('');setOpen(false);};form?.addEventListener('reset',reset);return()=>form?.removeEventListener('reset',reset);},[]);
 const id=useId(),[value,setValue]=useState(''),[query,setQuery]=useState(''),[open,setOpen]=useState(false),[active,setActive]=useState(0);
 const choices=[...fish,...Object.entries(unknownFishNames).map(([slug,name])=>({slug,name,aliases:[]}))];
 const matches=choices.filter(f=>normalize([f.name,...f.aliases??[]].join(' ')).includes(normalize(query))).slice(0,30);
 function choose(f:typeof choices[number]){setValue(f.slug);setQuery(f.name);setOpen(false);setActive(0);}
 return <div className={s.field}><label htmlFor={id}>魚種（名前・別名で検索）</label><input type="hidden" name="fishSlug" value={value}/><input ref={input} id={id} role="combobox" aria-autocomplete="list" aria-expanded={open} aria-controls={`${id}-options`} aria-activedescendant={open&&matches[active]?`${id}-${active}`:undefined} value={query} required autoComplete="off" placeholder="例：アジ、ガシラ、チヌ" onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)} onChange={e=>{setQuery(e.target.value);setValue('');setOpen(true);setActive(0);}} onKeyDown={e=>{if(e.key==='Escape')setOpen(false);if(e.key==='ArrowDown'){e.preventDefault();setOpen(true);setActive(n=>Math.min(n+1,matches.length-1));}if(e.key==='ArrowUp'){e.preventDefault();setActive(n=>Math.max(n-1,0));}if(e.key==='Enter'&&open){e.preventDefault();if(matches[active])choose(matches[active]);}}}/>{open&&<div id={`${id}-options`} role="listbox" className={s.fishOptions}>{matches.map((f,i)=><button id={`${id}-${i}`} key={f.slug} type="button" role="option" aria-selected={i===active} onMouseDown={e=>e.preventDefault()} onClick={()=>choose(f)}>{f.name}{f.aliases?.length?<small> {f.aliases.slice(0,3).join('・')}</small>:null}</button>)}{!matches.length&&<span>該当なし。「その他」または「魚種不明」を検索できます。</span>}</div>}{query&&!value&&<small>候補から魚を選択してください。</small>}</div>;
}
