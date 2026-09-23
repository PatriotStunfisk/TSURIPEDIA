'use client';
import Image from 'next/image';
import {useState} from 'react';
export default function FishSearch({items}:{items:{slug:string;name:string;japanese:string;scientific:string;image?:string;danger:boolean}[]}){
 const [query,setQuery]=useState(''),[order,setOrder]=useState('name'),[danger,setDanger]=useState(false);
 const q=query.trim().toLocaleLowerCase();const filtered=items.filter(f=>(!danger||f.danger)&&`${f.name} ${f.japanese} ${f.scientific} ${f.slug}`.toLowerCase().includes(q)).sort((a,b)=>order==='name'?a.name.localeCompare(b.name,'en'):a.slug.localeCompare(b.slug));
 return <><div className="enFilters"><label>Search fish<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Horse mackerel, aji, アジ…"/></label><label>Sort<select value={order} onChange={e=>setOrder(e.target.value)}><option value="name">English name A–Z</option><option value="japanese">Japanese name (romanized ID)</option></select></label></div><label><input type="checkbox" checked={danger} onChange={e=>setDanger(e.target.checked)}/> Hazardous fish only</label><p role="status">{filtered.length} species</p><div className="enGrid">{filtered.map(f=><a className="enCard" key={f.slug} href={`/en/fish/${f.slug}`}>{f.image&&<Image src={f.image} alt={f.name} width={360} height={240} sizes="(max-width:700px) 44vw, 280px" loading="lazy"/>}<h3>{f.name}</h3><span lang="ja">{f.japanese}</span><p><i>{f.scientific}</i></p>{f.danger&&<strong>⚠ WARNING</strong>}</a>)}</div></>;
}
