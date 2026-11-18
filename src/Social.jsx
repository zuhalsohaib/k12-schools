import {FaFacebookF,FaInstagram,FaXTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa6'
export const SOCIALS=[
 ['Facebook',FaFacebookF,'https://www.facebook.com/K12Schools'],
 ['Instagram',FaInstagram,'https://www.instagram.com/k12schools/'],
 ['X (Twitter)',FaXTwitter,'https://x.com/K12_OS'],
 ['LinkedIn',FaLinkedinIn,'https://www.linkedin.com/company/k12schools/'],
 ['YouTube',FaYoutube,'https://www.youtube.com/channel/UC0fSydNPaF99gBLAmfMujMA/featured']]
export const Socials=({className=''})=>(
 <div className={`flex gap-2.5 ${className}`}>{SOCIALS.map(([n,I,u])=>(
  <a key={n} href={u} target="_blank" rel="noreferrer" aria-label={n} title={n}
   className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/25 text-white transition hover:-translate-y-1 hover:rotate-[8deg] hover:bg-em hover:text-[#ffffff]"><I size={18}/></a>))}</div>)
