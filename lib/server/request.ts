export class HttpError extends Error{constructor(public status:number,message:string){super(message)}}
export async function limitedJson(request:Request,limit=750000):Promise<unknown>{
 if(!request.headers.get('content-type')?.startsWith('application/json'))throw new HttpError(415,'JSON形式で送信してください。');
 const reader=request.body?.getReader();if(!reader)throw new HttpError(400,'内容がありません。');const chunks:Uint8Array[]=[];let total=0;
 while(true){const {done,value}=await reader.read();if(done)break;total+=value.length;if(total>limit){await reader.cancel();throw new HttpError(413,'画像・本文が大きすぎます。');}chunks.push(value);}
 try{return JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{throw new HttpError(400,'内容を読み取れません。');}
}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');if(!origin||origin!==new URL(request.url).origin)throw new HttpError(403,'サイトの画面から送信してください。');}
export function apiError(error:unknown){return Response.json({error:error instanceof HttpError?error.message:'処理に失敗しました。しばらくして再試行してください。'},{status:error instanceof HttpError?error.status:503,headers:{'Cache-Control':'no-store'}});}
// Validates JPEG dimensions and strips APP/COM metadata, including EXIF GPS, on the server too.
export function cleanJpeg(data:string):Buffer{
 if(!/^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(data))throw new HttpError(400,'JPEG画像を選んでください。');const bytes=Buffer.from(data.split(',')[1],'base64');
 if(bytes.length<4||bytes.length>500000||bytes.readUInt16BE(0)!==0xffd8)throw new HttpError(400,'画像の形式またはサイズが不正です。');
 const parts=[bytes.subarray(0,2)];let pos=2,dimensions=false;
 while(pos+4<=bytes.length){if(bytes[pos]!==255)throw new HttpError(400,'画像が壊れています。');const marker=bytes[pos+1];if(marker===0xda){if(!dimensions||bytes.readUInt16BE(bytes.length-2)!==0xffd9)throw new HttpError(400,'画像が壊れています。');parts.push(bytes.subarray(pos));return Buffer.concat(parts);}const len=bytes.readUInt16BE(pos+2);if(len<2||pos+2+len>bytes.length)throw new HttpError(400,'画像が壊れています。');if([0xc0,0xc1,0xc2].includes(marker)){if(len<8)throw new HttpError(400,'画像が壊れています。');const h=bytes.readUInt16BE(pos+5),w=bytes.readUInt16BE(pos+7);if(!w||!h||w>1600||h>1600)throw new HttpError(400,'画像は1600px以下にしてください。');dimensions=true;}if(!(marker>=0xe0&&marker<=0xef)&&marker!==0xfe)parts.push(bytes.subarray(pos,pos+2+len));pos+=2+len;}
 throw new HttpError(400,'画像が壊れています。');
}
