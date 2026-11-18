const D=({id,a='#4a0d16',b='#150608',children})=>(<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full transition duration-500 hover:scale-105" role="img" aria-hidden="true"><defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a}/><stop offset="1" stopColor={b}/></linearGradient></defs><rect width="400" height="300" fill={`url(#${id})`}/>{children}</svg>)
const P=({x,y,c='#ffd6dc',s=1})=><g transform={`translate(${x} ${y}) scale(${s})`}><circle cy="-14" r="13" fill={c}/><path d="M-22 22a22 22 0 0 1 44 0z" fill={c} opacity=".85"/></g>
export const Classroom=()=><D id="k1" a="#a7071f">
 <circle cx="340" cy="40" r="70" fill="#f0455c" opacity=".15"/>
 <rect x="50" y="36" width="300" height="190" rx="14" fill="#92061b" stroke="#f0455c" strokeWidth="3"/>
 <rect x="62" y="50" width="170" height="120" rx="8" fill="#a7071f"/>
 <rect x="150" y="62" width="72" height="8" rx="4" fill="#ffd6dc" opacity=".5"/><rect x="150" y="78" width="50" height="8" rx="4" fill="#ffd6dc" opacity=".35"/><rect x="150" y="94" width="62" height="8" rx="4" fill="#ffd6dc" opacity=".25"/>
 <P x="105" y="122" s={1.5}/>
 {[0,1,2,3].map(i=><g key={i}><rect x={244+(i%2)*52} y={50+(i>>1)*62} width="46" height="56" rx="8" fill="#9f061d"/><P x={267+(i%2)*52} y={92+(i>>1)*62} c={['#f0455c','#ffd6dc','#e64c63','#f3a7b2'][i]} s={.6}/></g>)}
 <rect x="62" y="180" width="288" height="34" rx="10" fill="#880619" opacity=".6"/>
 {[0,1,2].map(i=><circle key={i} cx={85+i*30} cy="197" r="8" fill={i?'#670413':'#f0455c'}/>)}
 <rect x="30" y="226" width="340" height="14" rx="7" fill="#ffd6dc"/><rect x="150" y="226" width="100" height="6" rx="3" fill="#f0455c"/>
 <rect x="60" y="256" width="70" height="24" rx="12" fill="#b20721"/><text x="95" y="272" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">● LIVE</text>
</D>
export const Globe=()=><D id="k2">
 <circle cx="200" cy="150" r="96" fill="#a7071f" stroke="#f0455c" strokeWidth="3"/>
 <g fill="none" stroke="#ffd6dc" strokeWidth="2" opacity=".55"><ellipse cx="200" cy="150" rx="40" ry="96"/><ellipse cx="200" cy="150" rx="96" ry="34"/><path d="M104 150h192M200 54v192"/></g>
 <path d="M150 110Q200 60 240 100M240 100Q285 140 260 180M260 180Q215 215 170 195" fill="none" stroke="#ffd6dc" strokeWidth="2" strokeDasharray="5 5"/>
 {[[150,110],[240,100],[260,180],[170,195]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="14" fill="#f0455c" opacity=".3"/><circle cx={x} cy={y} r="6" fill="#ffd6dc"/></g>)}
</D>
export const AI=()=><D id="k3" a="#3a0a11">
 <path d="M130 150H60M270 150h70M200 90V40M200 210v50M150 100 90 60M250 100l60-40M150 200l-60 40M250 200l60 40" fill="none" stroke="#f0455c" strokeWidth="3" opacity=".7"/>
 {[[60,150],[340,150],[200,40],[200,260],[90,60],[310,60],[90,240],[310,240]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="9" fill={i%2?'#ffd6dc':'#f0455c'}/>)}
 <rect x="130" y="90" width="140" height="120" rx="22" fill="#b20721"/><text x="200" y="168" textAnchor="middle" fontSize="52" fontWeight="800" fill="#ffffff">AI</text>
</D>
export const Cap=()=><D id="k4" a="#a7071f">
 <circle cx="70" cy="60" r="5" fill="#ffd6dc"/><circle cx="340" cy="80" r="4" fill="#f0455c"/><circle cx="300" cy="250" r="6" fill="#ffd6dc" opacity=".6"/>
 <path d="M130 155v45c0 22 140 22 140 0v-45L200 190Z" fill="#f0455c"/><path d="M200 70 320 125 200 180 80 125Z" fill="#ffd6dc"/>
 <path d="M320 125v70" stroke="#b20721" strokeWidth="5"/><circle cx="320" cy="200" r="9" fill="#b20721"/>
</D>
export const Books=()=><D id="k5">
 <g fill="none" stroke="#ffd6dc" strokeWidth="3" transform="translate(200 76)"><ellipse rx="42" ry="14"/><ellipse rx="42" ry="14" transform="rotate(60)"/><ellipse rx="42" ry="14" transform="rotate(120)"/></g><circle cx="200" cy="76" r="8" fill="#f0455c"/>
 <rect x="100" y="140" width="200" height="34" rx="6" fill="#b20721"/><rect x="115" y="176" width="190" height="34" rx="6" fill="#ffd6dc"/><rect x="90" y="212" width="220" height="34" rx="6" fill="#f0455c"/>
 <g fill="#880619" opacity=".35"><rect x="120" y="152" width="70" height="8" rx="4"/><rect x="135" y="188" width="70" height="8" rx="4"/><rect x="110" y="224" width="70" height="8" rx="4"/></g>
</D>
export const Arts=()=><D id="k6" a="#3a0a11">
 <g fill="#ffd6dc"><ellipse cx="150" cy="210" rx="26" ry="19"/><ellipse cx="260" cy="190" rx="26" ry="19"/><rect x="170" y="80" width="9" height="130"/><rect x="280" y="60" width="9" height="130"/><path d="M170 80 289 60v32L170 112Z"/></g>
 <circle cx="90" cy="80" r="16" fill="#f0455c"/><circle cx="335" cy="245" r="12" fill="#b20721"/><circle cx="70" cy="240" r="7" fill="#ffd6dc" opacity=".6"/>
</D>
