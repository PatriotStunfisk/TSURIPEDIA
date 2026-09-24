 'use client';
import {useState} from 'react';
type Option={id:string;label:string};
export default function GearKindFilters({initialKind,initialSubtype,kinds,subtypes}:{initialKind:string;initialSubtype:string;kinds:Option[];subtypes:Record<string,Option[]>}){
 const [kind,setKind]=useState(initialKind),[subtype,setSubtype]=useState(initialSubtype);const options=subtypes[kind]??[];
 return <><label>種類<select name="kind" value={kind} onChange={e=>{setKind(e.target.value);setSubtype('')}}><option value="">すべて</option>{kinds.map(k=><option key={k.id} value={k.id}>{k.label}</option>)}</select></label><label>細分類<select name="subtype" value={subtype} disabled={!options.length} onChange={e=>setSubtype(e.target.value)}><option value="">{options.length?'すべて':kind?'細分類なし':'種類を選択（ルアー・ライン）'}</option>{options.map(o=><option key={o.id} value={o.id}>{o.label}</option>)}</select></label></>;
}
