// City forecast coordinates and explicitly separate offshore wave grid points.
export const weatherLocations = {
 "sapporo": {
  "lat": 43.0618,
  "lon": 141.3545,
  "waveLat": 43.5,
  "waveLon": 141,
  "sea": "石狩湾沖"
 },
 "sendai": {
  "lat": 38.2682,
  "lon": 140.8694,
  "waveLat": 38,
  "waveLon": 142,
  "sea": "仙台湾沖"
 },
 "tokyo": {
  "lat": 35.6762,
  "lon": 139.6503,
  "waveLat": 34.5,
  "waveLon": 140,
  "sea": "房総半島南方沖"
 },
 "niigata": {
  "lat": 37.9161,
  "lon": 139.0364,
  "waveLat": 38,
  "waveLon": 139,
  "sea": "新潟沖"
 },
 "nagoya": {
  "lat": 35.1815,
  "lon": 136.9066,
  "waveLat": 34,
  "waveLon": 137,
  "sea": "伊勢湾南方沖"
 },
 "osaka": {
  "lat": 34.6937,
  "lon": 135.5023,
  "waveLat": 34,
  "waveLon": 135,
  "sea": "紀伊水道"
 },
 "wakayama": {
  "lat": 34.2305,
  "lon": 135.1708,
  "waveLat": 33.5,
  "waveLon": 135,
  "sea": "紀伊半島西方沖"
 },
 "hiroshima": {
  "lat": 34.3853,
  "lon": 132.4553,
  "waveLat": 33.5,
  "waveLon": 132,
  "sea": "伊予灘"
 },
 "fukuoka": {
  "lat": 33.5902,
  "lon": 130.4017,
  "waveLat": 34,
  "waveLon": 130,
  "sea": "玄界灘"
 },
 "kagoshima": {
  "lat": 31.5966,
  "lon": 130.5571,
  "waveLat": 30.5,
  "waveLon": 130.5,
  "sea": "薩摩半島南方沖"
 },
 "naha": {
  "lat": 26.2124,
  "lon": 127.6809,
  "waveLat": 26,
  "waveLon": 127.5,
  "sea": "沖縄本島南西沖"
 }
} as const;
