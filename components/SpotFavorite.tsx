'use client';
import {useMemo,useState,useSyncExternalStore} from 'react';
import {parseSpotFavorites,spotFavoritesKey,toggleSpotFavorite} from '@/lib/spot-favorites';
import s from './SpotMap.module.css';
const eventName='uolink-spot-favorites-change';
function snapshot(){try{return localStorage.getItem(spotFavoritesKey);}catch{return null;}}
function subscribe(callback:()=>void){const storage=(e:StorageEvent)=>{if(e.key===spotFavoritesKey||e.key===null)callback();};window.addEventListener('storage',storage);window.addEventListener(eventName,callback);return()=>{window.removeEventListener('storage',storage);window.removeEventListener(eventName,callback);};}
export function useSpotFavorites(){const raw=useSyncExternalStore(subscribe,snapshot,()=>null);return useMemo(()=>parseSpotFavorites(raw)??[],[raw]);}
export default function SpotFavorite({slug,name}:{slug:string;name:string}){
 const ids=useSpotFavorites(),saved=ids.includes(slug),[error,setError]=useState('');
 return <div className={s.favoriteControl}><button type="button" className={s.favoriteButton} aria-pressed={saved} aria-label={`${name}をお気に入り${saved?'から解除':'に登録'}`} onClick={()=>{try{const raw=localStorage.getItem(spotFavoritesKey);localStorage.setItem(spotFavoritesKey,toggleSpotFavorite(raw,slug));window.dispatchEvent(new Event(eventName));setError('');}catch(e){setError(e instanceof Error&&e.message.includes('保存済み')?e.message:'この端末に保存できませんでした。ブラウザの保存設定を確認してください。');}}}>{saved?'★ 保存済み':'☆ お気に入り'}</button>{error&&<small role="alert">{error}</small>}</div>;
}
