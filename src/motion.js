// Gentle scroll-reveal for cards, headings and image boxes. Skipped when the visitor prefers reduced motion.
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
 const SEL='main .card,main .pg-card,main .pg-person,main .pg-acc,main section h2,main [class*="aspect-"]'
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}}),{threshold:.12})
 const scan=()=>document.querySelectorAll(SEL).forEach(el=>{if(el.dataset.rv)return;el.dataset.rv='1';const r=el.getBoundingClientRect();if(r.top<innerHeight*.9&&r.bottom>0)return;el.classList.add('rv-pre');io.observe(el)})
 new MutationObserver(()=>requestAnimationFrame(scan)).observe(document.getElementById('root'),{childList:true,subtree:true})
 scan()
}
