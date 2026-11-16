import {createElement,useState} from 'react'
import DATA from './content.json'
import {Socials} from './Social'
import EXTRA,{CRUMB as C1} from './extra'
import EXTRA2,{CRUMB2} from './extra2'
const CRUMB={...C1,...CRUMB2}
import {ln} from './links'
import {FaUserGraduate,FaClock,FaSun,FaSitemap,FaBookOpenReader,FaUsers,FaVideo,FaPeopleRoof,FaPeopleGroup,FaBook,FaChartLine} from 'react-icons/fa6'
const ICO={man:FaUserGraduate,clock:FaClock,sunny:FaSun,hierarchical:FaSitemap,homework:FaBookOpenReader,team:FaUsers,online:FaVideo,family:FaPeopleRoof,group:FaPeopleGroup,books:FaBook,menu:FaChartLine}
const ALL={...DATA,...EXTRA,...EXTRA2}
const isN=n=>typeof n!=='string'
const cl=n=>(n.c||'').split(' ')
const has=(n,c)=>isN(n)&&cl(n).includes(c)
const txt=n=>isN(n)?(n.k||[]).map(txt).join(''):n
const find=(n,f)=>{if(!isN(n))return null;if(f(n))return n;for(const x of n.k||[]){const r=find(x,f);if(r)return r}return null}
const G=[['Foundation Year 1 (KG1/LKG)',4],['Foundation Year 2 (KG2/UKG)',5],['Grade I',6],['Grade II',7],['Grade III',8],['Grade IV',9],['Grade V',10],['Grade VI',11],['Grade VII',12],['Grade VIII',13],['Grade IX',14],['Grade X',15],['Grade XI',16],['Grade XII',17]]
function Gallery({n}){
 const imgs=n.k,[f,sf]=useState('All'),[o,so]=useState(-1),cats=['All','Celebration','Creative Corner','Young Innovators','Coffee Meet','Meet and Greet','World Environment Day'],show=f==='All'?imgs:[]
 return(<div><div className="pg-fil" role="tablist">{cats.map(c=><button key={c} role="tab" aria-selected={f===c} className={f===c?'on':''} onClick={()=>sf(c)}>{c}</button>)}</div>
  {show.length?<div className="pg-gal">{show.map((x,i)=><figure key={i} onClick={()=>so(i)}><img src={x.h} alt={x.a} loading="lazy"/><figcaption>{x.a}</figcaption></figure>)}</div>:<p className="pg-none">No Items Found</p>}
  {o>=0&&<div className="pg-lb" onClick={()=>so(-1)} role="dialog" aria-label={show[o].a}><button aria-label="Close">×</button><img src={show[o].h} alt={show[o].a}/><p>{show[o].a}</p></div>}</div>)}
function Acc({n}){const[o,s]=useState(false),b=n.k.find(x=>x.t==='button'),body=n.k.find(x=>has(x,'ab'))
 return(<div className={`pg-acc ${o?'on':''}`}><button aria-expanded={o} onClick={()=>s(!o)}><span>{txt(b)}</span><i>+</i></button><div className="pg-ab"><div><div className="pg-abi">{(body.k||[]).map((x,i)=><R key={i} n={x}/>)}</div></div></div></div>)}
function Age({n}){const[v,s]=useState(''),a=parseInt(v,10),ok=G.filter(g=>g[1]<=a),t=n.k.find(x=>x.t==='h3'),p=n.k.find(x=>x.t==='p')
 return(<div className="pg-card pg-dk"><h3>{txt(t)}</h3><p>{txt(p)}</p>
  <input type="number" min="0" value={v} onChange={e=>s(e.target.value)} placeholder="Child’s age" aria-label="Child’s age" className="my-4 max-w-[240px] !border-white/20 !bg-white/10 !text-white"/>
  <div className="pg-res">{isNaN(a)?'Enter your child’s age as of September 30th of the entry year.':ok.length?<>At age <b>{a}</b>, your child meets the minimum age for admission up to <b>{ok[ok.length-1][0]}</b>. Final placement is decided with our Admission Counsellor.</>:'The minimum age is 4+ for Foundation Year 1 (KG1/LKG), as of September 30th of the entry year.'}</div></div>)}
function Person({n}){const[role,name,...bio]=n.k,[bad,setBad]=useState(false),nm=txt(name),ini=nm.replace(/^(Mr\.|Dr\.|Professor|Prof\.)\s*/i,'').split(' ').map(w=>w[0]).slice(0,2).join('')
 return(<article className="pg-person"><div className="pg-photo">{bad?<span>{ini}</span>:<img src={n.h} alt={nm} loading="lazy" onError={()=>setBad(true)}/>}</div><div><span className="pg-tag">{txt(role)}</span><h3>{nm}</h3><div className="pg-bio">{bio.map((b,i)=><R key={i} n={b}/>)}</div></div></article>)}
function Tabs({n,segs,l}){
 const bar=n.k.find(x=>has(x,'tabs')),panes=n.k.filter(x=>has(x,'pane')),btns=bar.k.filter(x=>x.t==='button')
 const subs=p=>{const o=[];const w=x=>{if(!isN(x))return;if(x!==p&&has(x,'pane'))o.push(x.i);(x.k||[]).forEach(w)};w(p);return o}
 const hit=panes.findIndex(p=>segs.includes(p.i)||subs(p).some(i=>segs.includes(i)))
 const[a,s]=useState(hit>=0?hit:Math.max(0,panes.findIndex(p=>has(p,'on'))))
 return(<div><div role="tablist" className={`pg-tabs pg-tabs${l?1:0}`}>{btns.map((b,i)=><button key={i} role="tab" aria-selected={a===i} className={a===i?'on':''} onClick={()=>s(i)}><em>{String(i+1).padStart(2,'0')}</em>{txt(b)}</button>)}</div>
  <div key={a} className="animate-vin space-y-8 pt-8">{(panes[a].k||[]).map((x,i)=><R key={i} n={x} segs={segs} l={l+1}/>)}</div></div>)}
function R({n,segs=[],l=0}){
 if(!isN(n))return n
 const c=cl(n),k=n.k||[],h=x=>c.includes(x),kids=()=>k.map((x,i)=><R key={i} n={x} segs={segs} l={l}/>)
 if(h('ts'))return<Tabs n={n} segs={segs} l={l}/>
 if(h('acc'))return<Acc n={n}/>
 if(h('card')&&find(n,x=>x.i==='ag'))return<Age n={n}/>
 if(h('person'))return<Person n={n}/>
 if(h('gallery'))return<Gallery n={n}/>
 if(n.t==='img'&&(n.h||'').startsWith('icon:')){const I=ICO[n.h.slice(5)]||FaBook;return<I className="pg-ico text-em" aria-hidden="true"/>}
 if(n.t==='img')return<img src={n.h} alt={n.a||''} loading="lazy" className={'pg-'+c.join(' pg-')} onError={e=>{e.currentTarget.style.display='none'}}/>
 if(n.t==='iframe')return<iframe src={n.h} title={n.a} className="pg-flip" allowFullScreen loading="lazy"/>
 if(h('w'))return<>{kids()}</>
 const cls=[]
 if(n.t==='section')cls.push('space-y-8')
 if(h('card'))cls.push('pg-card');if(h('dk'))cls.push('pg-dk');if(h('em'))cls.push('pg-em')
 if(h('gr'))cls.push('pg-gr',h('g2')?'pg-g2':h('g3')?'pg-g3':'')
 for(const x of['st','steps','ages','note','tag','lead','chips','row','bul','feat','subtbl','subrow','flip'])if(h(x))cls.push('pg-'+x)
 if(n.t==='a'){const href=ln(n.h),ext=!href.startsWith('#');return<a href={href} className={h('btn')?`pg-btn ${h('d')?'pg-btn-d':h('o')?'pg-btn-o':''}`:cls.join(' ')||undefined} {...(ext?{target:'_blank',rel:'noreferrer'}:{})}>{kids()}</a>}
 if(n.t==='i'&&h('tl'))return<img className="pg-tl" alt="" loading="lazy" src={'https://www.google.com/s2/favicons?domain='+n.k[0]+'&sz=64'}/>
 return createElement(n.t,{className:cls.join(' ')||undefined},k.length?kids():undefined)}
const HI={lms:'/img/ai-learning.jpg',teaching:'/img/teacher-online.jpg',students:'/img/photo-9.jpg',parents:'/img/photo-7.jpg'}
const Hero=({ph,crumb,id})=>(<header className="relative overflow-hidden bg-gradient-to-b from-[#d9f5e6] to-bg pb-14 pt-[140px] dark:from-[#0b2a1d]">
 <svg className="pointer-events-none absolute -right-20 top-8 hidden h-[420px] w-[420px] text-em opacity-25 md:block" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="200" cy="200" r="60"/><circle cx="200" cy="200" r="110"/><circle cx="200" cy="200" r="160"/><circle cx="200" cy="200" r="195" strokeDasharray="4 8"/><circle cx="310" cy="120" r="10" fill="currentColor"/><circle cx="90" cy="290" r="7" fill="currentColor"/></svg>
 <div className="relative mx-auto max-w-[1200px] px-[22px]">
  <nav className="mb-5 flex items-center gap-2 text-sm font-semibold"><a className="text-em2" href="#home">Home</a><span className="text-mu">/</span><span className="text-mu">{crumb}</span></nav>
  <h1 className="max-w-[18ch] text-[clamp(36px,5.4vw,70px)] font-extrabold text-ink">{txt(find(ph,x=>x.t==='h1'))}</h1>
  <p className="mt-5 max-w-[60ch] text-lg text-mu">{txt(find(ph,x=>x.t==='p'))}</p>{HI[id]&&<img src={HI[id]} alt="" className="mt-8 aspect-[16/9] w-full max-w-[720px] rounded-[26px] object-cover shadow-xl"/>}</div></header>)
const CTA=()=>(<section className="mx-auto max-w-[1200px] px-[22px] pb-6"><div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0a3a29] to-[#06150f] p-[clamp(28px,5vw,56px)] text-white">
 <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-em opacity-30 blur-3xl"/>
 <h2 className="relative !max-w-[20ch] !text-[clamp(28px,4vw,46px)]">Ready to start your child’s journey?</h2>
 <p className="relative mt-3 max-w-[50ch] text-[#b9d3c6]">Talk to an academic counsellor and book a free demo class.</p>
 <div className="relative mt-6 flex flex-wrap items-center gap-3"><a className="btn" href="#contact">Book A Free Demo</a><a className="btn btn-g" href="https://wa.me/919319238614" target="_blank" rel="noreferrer">WhatsApp us</a><Socials className="sm:ml-3"/></div></div></section>)
export const TITLES={about:'About Us',academics:'Academics',admissions:'Admissions',technology:'Technology',beyond:'Beyond Classroom'}
export const hasPage=id=>!!ALL[id]
export default function Detail({id,segs}){
 const nodes=ALL[id],ph=nodes.find(x=>has(x,'ph')),rest=nodes.filter(x=>x!==ph)
 return(<div className="pg animate-vin"><Hero ph={ph} crumb={TITLES[id]||CRUMB[id]} id={id}/>
  <div className="mx-auto max-w-[1200px] space-y-8 px-[22px] pb-16 pt-6">{rest.map((x,i)=><R key={i} n={x} segs={segs}/>)}</div><CTA/></div>)}
