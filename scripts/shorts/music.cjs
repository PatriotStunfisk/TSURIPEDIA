/** Original procedural groove: no downloaded recordings, samples, songs or voice. */
const fs=require('node:fs');
function musicSamples(duration,sceneTimes=[],rate=48000){
 const count=Math.round(duration*rate),data=new Float32Array(count),beat=.5;
 const bass=[110,110,130.8128,98],melody=[440,523.251,659.255,587.33,523.251,440,391.995,329.628];
 let seed=1731;const noise=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2147483648-1;};
 for(let i=0;i<count;i++){
  const t=i/rate,b=Math.floor(t/beat),u=t%beat,h=t%.25,m=t%.25;
  const kick=.30*Math.sin(2*Math.PI*(48*u+8*(1-Math.exp(-u*28))))*Math.exp(-u*22);
  const hat=.04*noise()*Math.exp(-h*100);
  const clap=b%2===1?.085*noise()*Math.exp(-u*42):0;
  const f=bass[Math.floor(b/4)%bass.length];
  const low=.085*(Math.sin(2*Math.PI*f*t)+.25*Math.sin(4*Math.PI*f*t))*Math.exp(-u*6)*Math.min(u*180,1);
  const mf=melody[Math.floor(t/.25)%melody.length];
  const pluck=.036*Math.sin(2*Math.PI*mf*t)*Math.exp(-m*18)*Math.min(m*300,1);
  let cue=0;for(const at of sceneTimes){const d=t-at;if(d>=0&&d<.15)cue+=.07*Math.sin(2*Math.PI*(880*d+900*d*d))*Math.exp(-d*34);}
  const fade=Math.min(1,t/.035,(duration-t)/.25);
  data[i]=(kick+hat+clap+low+pluck+cue)*Math.max(0,fade);
 }
 return data;
}
function writeMusic(file,duration,sceneTimes=[]){
 const rate=48000,samples=musicSamples(duration,sceneTimes,rate),buf=Buffer.alloc(44+samples.length*2);
 buf.write('RIFF',0);buf.writeUInt32LE(buf.length-8,4);buf.write('WAVEfmt ',8);buf.writeUInt32LE(16,16);buf.writeUInt16LE(1,20);buf.writeUInt16LE(1,22);buf.writeUInt32LE(rate,24);buf.writeUInt32LE(rate*2,28);buf.writeUInt16LE(2,32);buf.writeUInt16LE(16,34);buf.write('data',36);buf.writeUInt32LE(samples.length*2,40);
 for(let i=0;i<samples.length;i++)buf.writeInt16LE(Math.round(Math.max(-.95,Math.min(.95,samples[i]))*32767),44+i*2);
 let peak=0;for(const sample of samples)peak=Math.max(peak,Math.abs(sample));
 fs.writeFileSync(file,buf);return {duration,sampleRate:rate,peak};
}
module.exports={musicSamples,writeMusic};
