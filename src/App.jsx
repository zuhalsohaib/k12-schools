import {useEffect,useState} from 'react'
import Home from './Home'
import Contact from './Contact'
import Detail,{hasPage} from './Detail'
import {ln} from './links'
import {Socials} from './Social'
const get=()=>(location.hash||'#home').slice(1)
const rid=h=>{const[x,y]=h.split('/');return x==='p'?y:x}
const L=u=>'https://k12onlineschools.com/'+u
const A=({href,children,...r})=><a href={href} {...(href[0]==='#'?{}:{target:'_blank',rel:'noreferrer'})} {...r}>{children}</a>
const NAV=[['Home','#home'],
 ['About Us','#about',[['K12 Schools','#about/a1'],['HOS Message','#p/hos'],['Values & Ethos','#about/a2'],['Leadership Team','#p/leadership'],['Core-Team','#p/coreteam'],['Affiliations and Accreditation','#about/a3'],['About Edovu Ventures','#about/a4']]],
 ['Academics','#academics',[
  ['British Curriculum','#academics/c0',[['Early Years Program','#academics/s1'],['Primary Program','#academics/s2'],['Lower Secondary','#academics/s3'],['Cambridge IGCSE','#academics/s4'],['Cambridge International AS & A Levels','#academics/s5']]],
  ['Indian Curriculum','#academics/c2',[['Foundation School','#p/in-foundation'],['Primary School','#p/in-primary'],['Middle School','#p/in-middle'],['Secondary School','#p/in-secondary'],['Sr. Secondary School','#p/in-srsec']]],
  ['American Curriculum','#academics/c1',[['High School Diploma Programs','#academics/c3']]]]],
 ['Admissions','#admissions',[['Admissions Process','#admissions/d1'],['Enquiry Now','#contact']]],
 ['Technology','#technology',[['AI-Enabled LMS','#p/lms'],['Tools for Students','#p/students'],['Tools for Teaching','#p/teaching'],['Tools for Parents','#p/parents']]],
 ['Beyond Classroom','#beyond',[['Global Clubs','#p/clubs'],['Hybrid Experiential Campus','#p/hybrid'],['Podcasts and Webinars','#p/podcasts'],['Students Achievements','#p/achievements'],['Student Gallery','#p/gallery'],['Beyond Boundaries','#p/boundaries']]],
 ['Contact','#contact']]
const dd='flex items-center justify-between rounded-xl px-3.5 py-2 text-[14px] font-medium transition hover:bg-white/15'
const panel='rounded-2xl lg:border lg:border-white/15 lg:bg-[rgba(139,6,26,.97)] lg:p-2 lg:shadow-2xl'
const Logo=()=><a href="#home" className="flex items-center" aria-label="K12 Schools home"><img src="/img/partners/k12schools-white.webp" alt="K12 Schools - Education Beyond Boundaries" className="h-9 w-auto"/></a>
export default function App(){
 const[h,setH]=useState(get),[open,setOpen]=useState(false),[pr,setPr]=useState(0),[up,setUp]=useState(false),[sub,setSub]=useState(null),[nn,setNn]=useState(0)
 const[dark,setDark]=useState(()=>{try{const t=localStorage.getItem('k12t');if(t)return t==='dark'}catch(e){}return matchMedia('(prefers-color-scheme:dark)').matches})
 useEffect(()=>{document.documentElement.classList.toggle('dark',dark);try{localStorage.setItem('k12t',dark?'dark':'light')}catch(e){}},[dark])
 useEffect(()=>{
  const hc=()=>{setH(get());setOpen(false);setSub(null);scrollTo(0,0)},sc=()=>{const e=document.documentElement;setPr(e.scrollTop/(e.scrollHeight-e.clientHeight)*100);setUp(e.scrollTop>600)},
  mm=e=>{const c=e.target.closest?.('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}}
  const ck=e=>{const x=e.target.closest?.('a[href^="#"]');if(x&&x.getAttribute('href')===location.hash){setNn(v=>v+1);setOpen(false);setSub(null);scrollTo(0,0)}};addEventListener('click',ck);addEventListener('hashchange',hc);addEventListener('scroll',sc);addEventListener('mousemove',mm)
  return()=>{removeEventListener('click',ck);removeEventListener('hashchange',hc);removeEventListener('scroll',sc);removeEventListener('mousemove',mm)}},[])
 return(<>
 <div className="fixed left-0 top-0 z-[100] h-1 bg-gradient-to-r from-[#f0455c] to-em" style={{width:pr+'%'}}/>
 <header className="fixed left-1/2 top-3.5 z-50 flex w-[min(1180px,calc(100%-24px))] -translate-x-1/2 items-center gap-3.5 rounded-full border border-white/15 bg-[rgba(139,6,26,.74)] py-2 pl-5 pr-3 text-white backdrop-blur-xl">
  <Logo/>
  <ul className={`${open?'flex':'hidden'} absolute left-0 right-0 top-16 m-0 max-h-[75vh] list-none flex-col overflow-y-auto rounded-3xl bg-[rgba(139,6,26,.97)] p-3 text-[14.5px] font-medium lg:static lg:mx-auto lg:flex lg:max-h-none lg:flex-row lg:gap-0.5 lg:overflow-visible lg:bg-transparent lg:p-0`}>
   {NAV.map(([l,u,c])=><li key={l} className="group relative">
    <A href={u} onClick={e=>{if(c&&innerWidth<1024){e.preventDefault();setSub(sub===l?null:l)}}} className={`flex items-center gap-1 rounded-full px-3.5 py-2 transition hover:bg-white/15 ${h.split('/')[0]===u.slice(1).split('/')[0]?'bg-white/15':''}`}>{l}{c&&<span className="text-[10px] opacity-70">▾</span>}</A>
    {c&&<div className={`${sub===l?'block':'hidden'} pl-2 lg:hidden lg:min-w-[260px] lg:pl-0 lg:pt-3 lg:group-hover:block lg:group-focus-within:block lg:absolute lg:left-0 lg:top-full`}><div className={panel+' lg:p-2'}>
     {c.map(([t,v,cc])=><div key={t} className="group/s relative"><A href={v} className={dd}>{t}{cc&&<span className="hidden text-xs opacity-70 lg:inline">▸</span>}</A>
      {cc&&<div className="pl-3 lg:absolute lg:-top-2 lg:left-full lg:hidden lg:min-w-[270px] lg:pl-2 lg:group-hover/s:block"><div className={panel}>{cc.map(([t2,v2])=><A key={t2} href={v2} className={dd}>{t2}</A>)}</div></div>}</div>)}</div></div>}</li>)}</ul>
  <button aria-label="Switch light and dark mode" onClick={()=>setDark(d=>!d)} className="ml-auto h-10 w-10 rounded-full bg-white/10 text-lg transition hover:rotate-[20deg] hover:bg-white/20 lg:ml-0">{dark?'☀':'☾'}</button>
  <a className="btn !hidden !px-5 !py-2.5 !text-sm lg:!inline-flex" href="#admissions">Enroll Now</a>
  <button aria-label="Menu" onClick={()=>setOpen(o=>!o)} className="h-10 w-10 rounded-full bg-white/10 text-lg lg:hidden">☰</button>
 </header>
 <main key={h+':'+nn}>{h==='contact'?<Contact/>:hasPage(rid(h))?<Detail id={rid(h)} segs={h.split('/').slice(1)}/>:<Home/>}</main>
 <footer className="mt-[70px] bg-dk pb-7 pt-[60px] text-[14.5px] text-[#e64c63]"><div className="mx-auto max-w-[1200px] px-[22px]">
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
   <div><div className="mb-3 text-white"><Logo/></div><p>EDOVU VENTURES PRIVATE LIMITED<br/>CIN: U74999HR2017PTC068023<br/>K12 Schools is the World’s Leading Affiliated Online School for Students from Nursery to Grade 12.</p><div className="mb-2 mt-5 font-semibold text-white">Follow us on:</div><Socials/></div>
   <div><h4 className="mb-3 font-bold text-white">Quick Links</h4><ul className="grid list-none gap-2 p-0">{[['Affiliations and Accreditation','about-k12-schools/cambridge-approved-school-ia802-k12-schools-accreditation/'],['Disclaimer','k12-schools-disclaimer/'],['Privacy Policy','privacy-policy/'],['Admission Fees Policy','k12-schools-fees-policy/'],['Terms & Conditions','terms-conditions/'],['Child Protection & Safeguarding','child-protection-safeguarding/'],['FAQ’s','about-k12-schools/k12-online-faq/'],['Pay Fees','admissions-process/pay-fees/']].map(([t,u])=><li key={t}><a className="transition hover:pl-1 hover:text-[#f0455c]" href={ln(L(u))}>{t}</a></li>)}</ul></div>
   <div><h4 className="mb-3 font-bold text-white">K12 Schools</h4><ul className="grid list-none gap-2 p-0"><li><a className="transition hover:pl-1 hover:text-[#f0455c]" href="#academics">Academics</a></li>{[['Values & Ethos','about-k12-schools/values-ethos/'],['Our Associations','our-associations/'],['Press Coverage','press-coverage/'],['Parents Testimonials','parents-testimonials/'],['Blog','blog/']].map(([t,u])=><li key={t}><a className="transition hover:pl-1 hover:text-[#f0455c]" href={ln(L(u))}>{t}</a></li>)}</ul></div>
   <div><h4 className="mb-3 font-bold text-white">Get in touch!</h4><ul className="grid list-none gap-2 p-0"><li>Online, Kabul, Afghanistan</li><li><a href="mailto:info@falak-naz.com">info@falak-naz.com</a></li><li><a href="tel:+93748662990">+93 74 866 2990</a></li><li><a href="https://falak-naz.com/" target="_blank" rel="noopener noreferrer">falak-naz.com</a></li></ul></div></div>
  <div className="mt-8 border-t border-white/10 pt-6"><h4 className="mb-4 font-bold text-white">Our Partner</h4><div className="flex flex-wrap gap-3">{['unicef','usaid','repl','iit-bombay','un'].map(f=><img key={f} src={`/img/partners/${f}.webp`} alt={f} className="h-[72px] w-[72px] rounded-2xl bg-white object-contain p-1.5"/>)}</div></div>
  <div className="mt-8 border-t border-white/10 pt-5 text-[13px]">© 2026 K12 SCHOOLS A UNIT OF EDOVU VENTURES PRIVATE LIMITED. All Rights Reserved</div></div></footer>
 <button aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})} className={`fixed bottom-[18px] left-[18px] z-40 h-[46px] w-[46px] rounded-full bg-ink text-xl text-bg transition duration-300 ${up?'opacity-100':'pointer-events-none translate-y-5 opacity-0'}`}>↑</button>
 <a href="https://wa.me/93748662990" className="fixed bottom-[18px] right-[18px] z-40 animate-pu rounded-full bg-[#25d366] px-5 py-3 text-sm font-extrabold text-[#150407] shadow-xl">WhatsApp</a>
 </>)}
