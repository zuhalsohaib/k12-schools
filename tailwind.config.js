export default {
  darkMode:'class',
  content:['./index.html','./src/**/*.{js,jsx}'],
  theme:{extend:{
    colors:{bg:'var(--bg)',sf:'var(--sf)',ink:'var(--ink)',mu:'var(--mu)',ln:'var(--ln)',em:'var(--em)',em2:'var(--em2)',dk:'var(--dk)',mint:'#c9f7dd'},
    fontFamily:{sans:['"DM Sans"','system-ui','sans-serif'],display:['"Bricolage Grotesque"','"DM Sans"','sans-serif']},
    keyframes:{
      pu:{'50%':{boxShadow:'0 0 0 10px rgba(78,227,154,0),0 0 24px rgba(78,227,154,.55)'}},
      fl:{'50%':{transform:'translate(40px,-30px) scale(1.15)'}},
      mq:{to:{transform:'translateX(-50%)'}},
      bo:{'50%':{transform:'translateY(-8px)'}},
      vin:{from:{opacity:0,transform:'translateY(18px)'}}},
    animation:{pu:'pu 2.6s ease-in-out infinite',fl:'fl 12s ease-in-out infinite',mq:'mq 30s linear infinite',bo:'bo 4s ease-in-out infinite',vin:'vin .55s cubic-bezier(.2,.7,.2,1)'}
  }},plugins:[]}
