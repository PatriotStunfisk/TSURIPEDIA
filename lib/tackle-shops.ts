import type {Prefecture} from './japan-regions';
import {distanceKm,type Coordinates} from './spot-distance';
// Retail locations have their own registry: never count them as fishing spots.
export type TackleShop={id:string;name:string;prefecture:Prefecture;address:string;lat:number;lng:number;officialUrl:string;verifiedAt:string;hours?:string;closedDays?:string;parking?:boolean;baits?:{live?:boolean;frozen?:boolean;other?:boolean};earlyMorning?:boolean;open24Hours?:boolean;status:'open'|'temporarily-closed'|'closed';note?:string;sources:{label:string;url:string}[]};
export const tackleShops:TackleShop[]=[
  {
    "id": "johshuya-10",
    "name": "上州屋 仙台新港店",
    "prefecture": "宮城県",
    "address": "宮城県多賀城市町前2-7-38",
    "lat": 38.283026,
    "lng": 141.002591,
    "officialUrl": "https://www.johshuya.co.jp/shop/top.php?s=10",
    "verifiedAt": "2026-09-17",
    "hours": "曜日・季節により変動。公式の営業カレンダーを確認",
    "closedDays": "通常なし。臨時休業は公式で確認",
    "parking": true,
    "status": "open",
    "note": "餌の種類・数量・取り置きは来店前に店舗へ確認してください。",
    "sources": [
      {
        "label": "公式：店舗案内と営業時間",
        "url": "https://www.johshuya.co.jp/shop/top.php?s=10"
      },
      {
        "label": "公式：店舗マーカー位置",
        "url": "https://www.johshuya.co.jp/shop/map.php?s=10"
      }
    ]
  },
  {
    "id": "johshuya-223",
    "name": "上州屋 金沢金石店",
    "prefecture": "石川県",
    "address": "石川県金沢市金石本町ロ-14-1",
    "lat": 36.5981,
    "lng": 136.59747,
    "officialUrl": "https://www.johshuya.co.jp/shop/top.php?s=223",
    "verifiedAt": "2026-09-17",
    "hours": "曜日・季節により変動。公式の営業カレンダーを確認",
    "closedDays": "通常なし。臨時休業は公式で確認",
    "parking": true,
    "status": "open",
    "note": "餌の種類・数量・取り置きは来店前に店舗へ確認してください。",
    "sources": [
      {
        "label": "公式：店舗案内と営業時間",
        "url": "https://www.johshuya.co.jp/shop/top.php?s=223"
      },
      {
        "label": "公式：店舗マーカー位置",
        "url": "https://www.johshuya.co.jp/shop/map.php?s=223"
      }
    ]
  },
  {
    "id": "johshuya-125",
    "name": "上州屋 青森店",
    "prefecture": "青森県",
    "address": "青森県青森市第二問屋町2-4-15",
    "lat": 40.794509,
    "lng": 140.76102,
    "officialUrl": "https://www.johshuya.co.jp/shop/top.php?s=125",
    "verifiedAt": "2026-09-17",
    "hours": "曜日・季節により変動。公式の営業カレンダーを確認",
    "closedDays": "通常なし。臨時休業は公式で確認",
    "parking": true,
    "status": "open",
    "note": "餌の種類・数量・取り置きは来店前に店舗へ確認してください。",
    "sources": [
      {
        "label": "公式：店舗案内と営業時間",
        "url": "https://www.johshuya.co.jp/shop/top.php?s=125"
      },
      {
        "label": "公式：店舗マーカー位置",
        "url": "https://www.johshuya.co.jp/shop/map.php?s=125"
      }
    ]
  },
  {
    "id": "johshuya-77",
    "name": "上州屋 新沼津店",
    "prefecture": "静岡県",
    "address": "静岡県沼津市西沢田479 有賀園モール2階",
    "lat": 35.119876,
    "lng": 138.84892,
    "officialUrl": "https://www.johshuya.co.jp/shop/top.php?s=77",
    "verifiedAt": "2026-09-17",
    "hours": "曜日・季節により変動。公式の営業カレンダーを確認",
    "closedDays": "通常なし。臨時休業は公式で確認",
    "parking": true,
    "status": "open",
    "note": "餌の種類・数量・取り置きは来店前に店舗へ確認してください。",
    "sources": [
      {
        "label": "公式：店舗案内と営業時間",
        "url": "https://www.johshuya.co.jp/shop/top.php?s=77"
      },
      {
        "label": "公式：店舗マーカー位置",
        "url": "https://www.johshuya.co.jp/shop/map.php?s=77"
      }
    ]
  },
  {
    "id": "johshuya-227",
    "name": "上州屋 新潟赤道店",
    "prefecture": "新潟県",
    "address": "新潟県新潟市東区上王瀬町2-19",
    "lat": 37.936292,
    "lng": 139.087625,
    "officialUrl": "https://www.johshuya.co.jp/shop/top.php?s=227",
    "verifiedAt": "2026-09-17",
    "hours": "曜日・季節により変動。公式の営業カレンダーを確認",
    "closedDays": "通常なし。臨時休業は公式で確認",
    "parking": true,
    "status": "open",
    "note": "餌の種類・数量・取り置きは来店前に店舗へ確認してください。",
    "sources": [
      {
        "label": "公式：店舗案内と営業時間",
        "url": "https://www.johshuya.co.jp/shop/top.php?s=227"
      },
      {
        "label": "公式：店舗マーカー位置",
        "url": "https://www.johshuya.co.jp/shop/map.php?s=227"
      }
    ]
  },
  {
    "id": "point-yokosuka-sahara",
    "name": "釣具のポイント 横須賀佐原店",
    "prefecture": "神奈川県",
    "address": "神奈川県横須賀市佐原1丁目8-1",
    "lat": 35.2420008,
    "lng": 139.6803392,
    "officialUrl": "https://www.point-i.jp/shops/1415",
    "verifiedAt": "2026-09-17",
    "hours": "曜日・祝日前後で異なるため店舗公式の営業時間を確認",
    "status": "open",
    "sources": [
      {
        "label": "公式：店舗情報",
        "url": "https://www.point-i.jp/shops/1415"
      },
      {
        "label": "MapFan：公式住所と位置を照合",
        "url": "https://mapfan.com/spots/S5QC5%2CFKI0%2CL6ZX80"
      }
    ]
  },
  {
    "id": "fishingmax-ashiya",
    "name": "フィッシングマックス 芦屋店",
    "prefecture": "兵庫県",
    "address": "兵庫県芦屋市平田町1-41",
    "lat": 34.7251,
    "lng": 135.3032,
    "officialUrl": "https://fishingmax.co.jp/shoplist/ashiya",
    "verifiedAt": "2026-09-17",
    "hours": "24時間営業の日あり。棚卸・季節変更があるため当日の公式カレンダーを確認",
    "earlyMorning": true,
    "baits": {
      "live": true,
      "other": true
    },
    "status": "open",
    "note": "活き餌・アミエビ・オキアミの取扱案内あり。在庫と予約受付時間は店舗へ確認。",
    "sources": [
      {
        "label": "公式：営業時間・取扱商品",
        "url": "https://fishingmax.co.jp/shoplist/ashiya"
      },
      {
        "label": "OpenStreetMap由来の位置を公式住所と照合",
        "url": "https://mapcarta.com/N7111494091"
      }
    ]
  }
];
export function nearbyTackleShops(shops:readonly TackleShop[],point:Coordinates,radiusKm=30){return shops.filter(s=>s.status==='open').map(shop=>({shop,distance:distanceKm(point,shop)})).filter(s=>s.distance<=radiusKm).sort((a,b)=>a.distance-b.distance);}
