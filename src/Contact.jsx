import {useState} from 'react'
import {Hero} from './Pages.jsx'
import {Socials} from './Social'
const Copy=({v})=>{const[d,s]=useState(false);return<button className="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white transition hover:bg-em hover:text-[#04150d]" onClick={()=>{navigator.clipboard?.writeText(v);s(true);setTimeout(()=>s(false),1800)}}>{d?'Copied':'Copy'}</button>}
const Row=({l,children,v})=><div className="flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[.07] px-4 py-3 transition hover:translate-x-1 hover:bg-white/15"><span><b className="block text-[12.5px] text-[#4ee39a]">{l}</b>{children}</span>{v&&<Copy v={v}/>}</div>
export default function Contact(){
 const send=e=>{e.preventDefault();const d=new FormData(e.target);location.href='mailto:info@k12onlineschools.com?subject='+encodeURIComponent('Enquiry – '+d.get('d'))+'&body='+encodeURIComponent(`Name: ${d.get('n')}\nPhone: ${d.get('p')}\nEmail: ${d.get('e')}\n\n${d.get('m')}`)}
 const lb='grid gap-1.5 text-[13px] font-semibold text-[#cfe5da]',inp='!border-white/20 !bg-white/10 !text-white'
 return(<div className="animate-vin"><Hero h="Talk to an Academic Counsellor" p="Get guidance on curricula, programs and learning options designed around your child’s needs."/>
 <section className="mx-auto max-w-[1200px] px-[22px] py-[72px]"><div className="grid gap-10 rounded-[40px] bg-gradient-to-br from-[#0a3a29] to-[#06150f] p-[clamp(26px,5vw,60px)] text-white md:grid-cols-2">
  <div><span className="ey !text-[#4ee39a]">Get in touch!</span>
   <div className="mt-5 grid gap-3">
    <Row l="Phone" v="+91-9319 238 614"><a href="tel:+919319238614">+91-9319 238 614</a></Row>
    <Row l="Email" v="info@k12onlineschools.com"><a href="mailto:info@k12onlineschools.com">info@k12onlineschools.com</a></Row>
    <Row l="WhatsApp"><a href="https://wa.me/919319238614">Chat on +91-9319 238 614</a></Row>
    <Row l="Address" v="603, ILD Trade Centre, Sector 47, Sohna Road, Gurugram– 122018, Haryana">603, ILD Trade Centre, Sector 47, Sohna Road, Gurugram– 122018, Haryana</Row></div>
   <div className="mb-2 mt-6 text-sm font-semibold text-[#9fc4b3]">Follow us on social media</div><Socials/></div>
  <form onSubmit={send} className="grid gap-3.5 rounded-[28px] border border-white/15 bg-white/[.06] p-6">
   <div className="grid gap-3.5 sm:grid-cols-2"><label className={lb}>Full Name<input required name="n" autoComplete="name" className={inp}/></label><label className={lb}>Email Address<input required type="email" name="e" autoComplete="email" className={inp}/></label></div>
   <div className="grid gap-3.5 sm:grid-cols-2"><label className={lb}>Mobile Number<input required type="tel" name="p" autoComplete="tel" className={inp}/></label><label className={lb}>Choose Department<select name="d" className={inp}>{['Admissions','Finance','Academics','IT Support'].map(o=><option key={o} className="text-black">{o}</option>)}</select></label></div>
   <label className={lb}>Message<textarea rows="4" name="m" className={inp}/></label><button className="btn justify-center" type="submit">Send enquiry by email</button></form>
 </div>
  <div className="mt-10 overflow-hidden rounded-[28px] border border-white/15"><iframe title="K12 Schools office map" className="block h-[420px] w-full" loading="lazy" allowFullScreen src="https://www.google.com/maps?q=ILD+Trade+Centre,+Sector+47,+Sohna+Road,+Gurugram,+Haryana+122018&z=15&output=embed"/></div>
 </section></div>)}
