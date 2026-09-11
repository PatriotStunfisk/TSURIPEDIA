import Link from 'next/link';
import {methods} from '@/lib/data';
import {methodDetails} from '@/lib/method-details';
export const metadata={title:'釣り方'};
const placeIcon=(p:string)=>p.includes('船')?'🚤':p.includes('堤防')?'⚓':p.includes('川')?'🏞️':'📍';
const moreMethods=[
 {slug:'tachiuo-tenya-shore',name:'タチウオテンヤ（堤防）',level:'初〜中級',emoji:'🌙',target:'タチウオ',place:'堤防',desc:'キビナゴやドジョウなどを付けた軽量テンヤを投げ、ただ巻きや誘いでタチウオを狙う。'},
 {slug:'ajing',name:'アジング',level:'初〜中級',emoji:'🌙',target:'アジ',place:'堤防',desc:'小型ジグヘッドとワームでアジを狙うライトゲーム。夜の港で人気。'},
 {slug:'eging',name:'エギング',level:'初〜中級',emoji:'🦑',target:'アオリイカ',place:'堤防',desc:'エギをしゃくってアオリイカを誘う、手軽で人気のルアーフィッシング。'},
 {slug:'shore-jigging',name:'ショアジギング',level:'中級',emoji:'🐟',target:'ハマチ・ブリ・サワラ',place:'堤防・磯',desc:'メタルジグを遠投し、岸から回遊する青物を狙うダイナミックな釣り。'},
 {slug:'uki',name:'ウキ釣り',level:'はじめて〜中級',emoji:'🎈',target:'タチウオ・メバル・チヌ',place:'堤防',desc:'ウキでアタリとタナを見ながら狙う基本釣法。夜釣りにも強い。'},
 {slug:'fukase',name:'フカセ釣り',level:'中級',emoji:'🌊',target:'チヌ・グレ・イサキ',place:'堤防・磯',desc:'撒き餌と付け餌を同調させ、自然に流して魚へ食わせる釣り。'},
 {slug:'choinage',name:'ちょい投げ',level:'はじめて向け',emoji:'🏖️',target:'キス・ハゼ・ベラ',place:'堤防・砂浜',desc:'軽いオモリを少し投げて海底を探る、初心者にも始めやすい釣り。'},
 {slug:'ana',name:'穴釣り',level:'はじめて向け',emoji:'🪨',target:'カサゴ・ガシラ・ソイ',place:'堤防',desc:'テトラや岩の隙間へ仕掛けを落とし、根魚をピンポイントで狙う。'},
 {slug:'douzuki',name:'胴突き釣り',level:'はじめて向け',emoji:'🪝',target:'カサゴ・カワハギ・アナゴ',place:'堤防・船',desc:'幹糸から枝針を出した仕掛けで底付近を狙う、応用範囲の広い釣り。'},
 {slug:'otoshikomi',name:'落とし込み釣り',level:'中〜上級',emoji:'⬇️',target:'チヌ',place:'堤防',desc:'岸壁際へエサを自然に落とし込み、警戒心の強いチヌを狙う。'},
 {slug:'tako-egi',name:'タコエギ',level:'初〜中級',emoji:'🐙',target:'マダコ',place:'堤防・船',desc:'タコ用エギを底で小刻みに動かし、乗った重みを感じて掛ける。'},
 {slug:'jigging',name:'ジギング',level:'中級',emoji:'⚡',target:'ブリ・カンパチ・サワラ',place:'船',desc:'メタルジグを上下に動かして大型回遊魚を狙う人気の船ルアー。'},
 {slug:'blade-jig',name:'ブレードジギング',level:'中級',emoji:'✨',target:'サワラ・青物',place:'船',desc:'ブレード付きジグを高速巻きし、サワラなどの高速回遊魚を狙う。'},
 {slug:'hitotsu-tenya',name:'ひとつテンヤ',level:'中級',emoji:'🦐',target:'マダイ・根魚',place:'船',desc:'エビを付けた軽いテンヤで底を取り、繊細なアタリを掛けていく。'},
 {slug:'kawahagi',name:'カワハギ釣り',level:'中級',emoji:'🐠',target:'カワハギ',place:'船・堤防',desc:'胴突き仕掛けでエサ取り名人の小さなアタリを掛けるゲーム性の高い釣り。'},
 {slug:'mebaring',name:'メバリング',level:'初〜中級',emoji:'🌃',target:'メバル・カサゴ',place:'堤防',desc:'軽量ジグヘッドとワームで夜の根魚を狙うライトゲーム。'},
 {slug:'surf-lure',name:'サーフルアー',level:'中級',emoji:'🏄',target:'ヒラメ・マゴチ',place:'砂浜',desc:'広い砂浜からルアーを遠投し、底付近のフラットフィッシュを探す。'},
 {slug:'bukkomi',name:'ぶっこみ釣り',level:'初級',emoji:'🌙',target:'ウナギ・アナゴ・チヌ',place:'堤防・川',desc:'エサを付けた仕掛けを底へ置き、魚が食い込むのを待つシンプルな釣り。'},
 {slug:'tiprun',name:'ティップラン',level:'中級',emoji:'🦑',target:'アオリイカ',place:'船・ボート',desc:'船を流しながらエギを操作し、穂先に出る繊細なアタリを取る。'},
 {slug:'boat-kisu',name:'船キス',level:'はじめて向け',emoji:'🚤',target:'シロギス',place:'船・ボート',desc:'砂地を流しながら天秤仕掛けでキスを狙う、数釣りしやすい船釣り。'},
 {slug:'casting',name:'キャスティング',level:'中〜上級',emoji:'💨',target:'青物・サワラ',place:'船',desc:'船からルアーを投げ、表層を追う大型回遊魚をダイレクトに狙う。'}
];
const baseMethods=methods.map(m=>m.slug==='tachiuo-tenya'?{...m,name:'タチウオテンヤ（船）'}:m);
const allMethods=[...baseMethods,...moreMethods];
export default function Page(){return <div className="section pageTop"><style>{`html{scroll-padding-top:96px}.method-list article{scroll-margin-top:96px}@media(max-width:700px){.method-list article{grid-template-columns:38px 54px 1fr!important;gap:10px!important;padding:20px 16px!important}.method-list article>.method-cta{grid-column:2/4!important;width:100%!important;display:flex!important;justify-content:center!important;align-items:center!important;white-space:nowrap!important;margin-top:4px!important}.method-list .listEmoji{font-size:30px!important}.method-list h2{font-size:23px!important}.method-list p{line-height:1.7!important}.method-list .chips{gap:5px!important}}.method-cta{min-width:132px;text-align:center;font-weight:800;color:#087bc4;background:#f1f8fd;border-color:#d8e8f3}.method-cta:hover{background:#e5f3fc}.method-cta-disabled{opacity:.5;cursor:default}`}</style><div className="pageHero"><span>FISHING METHODS</span><h1>釣り方</h1><p>釣り方ごとに必要なタックル・仕掛け・狙える魚を整理しています。船と堤防で内容が大きく変わる釣りは、別の釣り方として分けています。</p></div><div className="listCards method-list">{allMethods.map((m,i)=>{const d=methodDetails[m.slug];return <article id={m.slug} key={m.slug}><div className="number">{String(i+1).padStart(2,'0')}</div><div className="listEmoji">{m.emoji}</div><div><div className="chips"><span>{placeIcon(m.place)} {m.place}</span><span>{m.level}</span></div><h2>{m.name}</h2><p>{m.desc}</p><div className="chips"><span>狙える魚：{m.target}</span>{d&&<span>手順 {d.steps.length}ステップ</span>}{d&&<span>難易度 {'★'.repeat(d.difficulty)}</span>}</div></div>{d?<Link href={`/methods/${m.slug}`} className="searchBtn method-cta">釣り方を見る →</Link>:<span className="searchBtn method-cta method-cta-disabled">詳細準備中</span>}</article>})}</div></div>}
