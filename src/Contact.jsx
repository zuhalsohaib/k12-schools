import {useState} from 'react'
import {Hero} from './Pages.jsx'
import {Socials} from './Social'
const Copy=({v})=>{const[d,s]=useState(false);return<button className="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white transition hover:bg-em hover:text-[#ffffff]" onClick={()=>{navigator.clipboard?.writeText(v);s(true);setTimeout(()=>s(false),1800)}}>{d?'Copied':'Copy'}</button>}
const Row=({l,children,v})=><div className="flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[.07] px-4 py-3 transition hover:translate-x-1 hover:bg-white/15"><span><b className="block text-[12.5px] text-[#f0455c]">{l}</b>{children}</span>{v&&<Copy v={v}/>}</div>
export default function Contact(){
 const send=e=>{e.preventDefault();const d=new FormData(e.target);location.href='mailto:info@falak-naz.com?subject='+encodeURIComponent('Enquiry – '+d.get('d'))+'&body='+encodeURIComponent(`Name: ${d.get('n')}\nPhone: ${d.get('p')}\nEmail: ${d.get('e')}\n\n${d.get('m')}`)}
 const lb='grid gap-1.5 text-[13px] font-semibold text-[#e5cfd2]',inp='!border-white/20 !bg-white/10 !text-white'
 return(<div className="animate-vin"><Hero h="Talk to an Academic Counsellor" p="Get guidance on curricula, programs and learning options designed around your child’s needs."/>
 <section className="mx-auto max-w-[1200px] px-[22px] py-[72px]"><div className="mb-10 overflow-hidden rounded-[28px] border border-white/15"><iframe title="Office location map" className="block h-[420px] w-full" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=ILD+Trade+Centre,+Sector+47,+Sohna+Road,+Gurugram,+Haryana+122018&z=15&output=embed"/></div><div className="grid gap-10 rounded-[40px] bg-gradient-to-br from-[#98061c] to-[#880619] p-[clamp(26px,5vw,60px)] text-white md:grid-cols-2">
  <div><span className="ey !text-[#f0455c]">Get in touch!</span>
   <div className="mt-5 grid gap-3">
    <Row l="Phone" v="+93 74 866 2990"><a href="tel:+93748662990">+93 74 866 2990</a></Row>
    <Row l="Email" v="info@falak-naz.com"><a href="mailto:info@falak-naz.com">info@falak-naz.com</a></Row>
    <Row l="WhatsApp"><a href="https://wa.me/93748662990">Chat on +93 74 866 2990</a></Row>
    <Row l="Address" v="Online, Kabul, Afghanistan">Online, Kabul, Afghanistan</Row>
    <Row l="Website"><a href="https://falak-naz.com/" target="_blank" rel="noopener noreferrer">falak-naz.com</a></Row></div>
   <div className="mb-2 mt-6 text-sm font-semibold text-[#e64c63]">Follow us on social media</div><Socials/></div>
  <form onSubmit={send} className="grid gap-3.5 rounded-[28px] border border-white/15 bg-white/[.06] p-6">
   <div className="grid gap-3.5 sm:grid-cols-2"><label className={lb}>Full Name<input required name="n" autoComplete="name" className={inp}/></label><label className={lb}>Email Address<input required type="email" name="e" autoComplete="email" className={inp}/></label></div>
   <div className="grid gap-3.5 sm:grid-cols-2"><label className={lb}>Mobile Number<input required type="tel" name="p" autoComplete="tel" className={inp}/></label><label className={lb}>Choose Department<select name="d" className={inp}>{['Admissions','Finance','Academics','IT Support'].map(o=><option key={o} className="text-black">{o}</option>)}</select></label></div>
   <label className={lb}>Message<textarea rows="4" name="m" className={inp}/></label><button className="btn justify-center" type="submit">Send enquiry by email</button></form>
 </div>
  </section></div>)}
