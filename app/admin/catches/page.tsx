import CatchModeration from '@/components/CatchModeration';
import {catchOptions} from '@/lib/catches/options';
export const metadata={title:'釣果の確認・通報管理',robots:{index:false,follow:false}};
export default function Page(){return <div className="section pageTop"><h1>釣果の確認・通報管理</h1><CatchModeration options={catchOptions()}/></div>}
