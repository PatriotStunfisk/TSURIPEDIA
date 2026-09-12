'use client';
import {createContext,useCallback,useContext,useEffect,useRef,useState} from 'react';
import {emptySave,recordCatch,claimMission} from '@/lib/quest/progress';
import {parseSave,QUEST_STORAGE_KEY} from '@/lib/quest/storage';
import type {QuestCatch,QuestFish,QuestMethod,QuestSave} from '@/lib/quest/types';

type Context={fish:QuestFish[];methods:QuestMethod[];save:QuestSave;ready:boolean;warning:string;addCatch:(c:QuestCatch)=>void;claim:(id:string)=>void};
const QuestContext=createContext<Context|null>(null);
export const useQuest=()=>{const context=useContext(QuestContext);if(!context)throw new Error('Missing QuestProvider');return context};
export default function QuestProvider({fish,methods,children}:{fish:QuestFish[];methods:QuestMethod[];children:React.ReactNode}){
 const [save,setSave]=useState(emptySave);const [ready,setReady]=useState(false);const [warning,setWarning]=useState('');
 const current=useRef(save);const blocked=useRef(false);
 useEffect(()=>{
  const load=()=>{try{const parsed=parseSave(localStorage.getItem(QUEST_STORAGE_KEY));if(parsed.status==='invalid'||parsed.status==='future'){blocked.current=true;setWarning('保存データを読み込めません。元のデータを保護し、このタブ内でのみ遊べます。');return}current.current=parsed.save;setSave(parsed.save)}catch{blocked.current=true;setWarning('ブラウザに保存できないため、このタブ内でのみ遊べます。')}};
  load();setReady(true);
  const sync=(e:StorageEvent)=>{if(e.key===QUEST_STORAGE_KEY&&!blocked.current)load()};window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);
 },[]);
 const update=useCallback((apply:(value:QuestSave)=>QuestSave)=>{
  let base=current.current;
  if(!blocked.current){try{const latest=parseSave(localStorage.getItem(QUEST_STORAGE_KEY));if(latest.status==='ok')base=latest.save;else if(latest.status!=='empty'){blocked.current=true;setWarning('保存データが変更されたため、このタブ内でのみ記録します。')}}catch{blocked.current=true;setWarning('ブラウザに保存できないため、このタブ内でのみ記録します。')}}
  const next=apply(base);current.current=next;setSave(next);
  if(!blocked.current){try{localStorage.setItem(QUEST_STORAGE_KEY,JSON.stringify(next))}catch{blocked.current=true;setWarning('保存容量やブラウザ設定により保存できません。このタブを閉じると今回の記録は失われます。')}}
 },[]);
 const addCatch=useCallback((caught:QuestCatch)=>update(value=>recordCatch(value,caught)),[update]);
 const claim=useCallback((id:string)=>update(value=>claimMission(value,id,Date.now())),[update]);
 return <QuestContext.Provider value={{fish,methods,save,ready,warning,addCatch,claim}}>{children}</QuestContext.Provider>;
}
