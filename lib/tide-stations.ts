import stations from './tide-station-data.json';
export {stations as tideStations};
export function nearbyTideStations(lat:number,lon:number){
 const rad=Math.PI/180;
 return stations.map(s=>{const a=Math.sin((s.lat-lat)*rad/2)**2+Math.cos(lat*rad)*Math.cos(s.lat*rad)*Math.sin((s.lon-lon)*rad/2)**2;return {...s,km:Math.round(6371*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))};}).sort((a,b)=>a.km-b.km).slice(0,8);
}
