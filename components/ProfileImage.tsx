import Image from 'next/image';
import type {ComponentProps} from 'react';

type Props=Omit<ComponentProps<'img'>,'src'|'alt'|'width'|'height'>&{src:string;alt:string;width?:number;height?:number;optimized?:boolean};

// Existing media keeps its original rendering; profile media uses responsive delivery.
export default function ProfileImage({optimized=false,width,height,sizes,...props}:Props){
 return optimized
  ? <Image {...props} width={width??1536} height={height??1024} sizes={sizes??'100vw'}/>
  : <img {...props} width={width} height={height} sizes={sizes}/>;
}
