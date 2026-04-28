import { Link } from "wouter";

const S = {
  body: { fontFamily:'Georgia,serif', background:'#faf7f2', color:'#2c2010', lineHeight:'1.75', margin:0, padding:0 } as React.CSSProperties,
  nav: { background:'#102940', padding:'16px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky' as const, top:0, zIndex:100 },
  navLogo: { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', textDecoration:'none' },
  navLogoSpan: { color:'#b03060' },
  navBtn: { background:'#b03060', color:'#fff', padding:'10px 18px', borderRadius:4, fontSize:'0.9rem', fontWeight:700, display:'inline-block', textDecoration:'none' },
  hero: { background:'#102940', padding:'40px 20px 36px' },
  heroH1: { fontFamily:'Georgia,serif', fontSize:'2rem', fontWeight:700, color:'#fff', lineHeight:1.15, marginBottom:16 },
  heroEm: { fontStyle:'italic', color:'#b03060' },
  heroSub: { fontSize:'1rem', color:'rgba(255,255,255,0.82)', lineHeight:1.8, marginBottom:28 },
  btnRose: { display:'block', background:'#b03060', color:'#fff', fontWeight:700, padding:'15px 20px', borderRadius:4, fontSize:'1rem', textAlign:'center' as const, marginBottom:12, textDecoration:'none' },
  btnOutline: { display:'block', color:'#fff', fontWeight:600, padding:'14px 20px', borderRadius:4, border:'2px solid rgba(255,255,255,0.5)', fontSize:'1rem', textAlign:'center' as const, textDecoration:'none' },
  cat: { background:'#102940', padding:'16px 20px' },
  catH2: { fontFamily:'Georgia,serif', fontSize:'1.2rem', fontWeight:700, color:'#fff', margin:0 },
  catP: { fontSize:'0.82rem', color:'rgba(255,255,255,0.55)', margin:'4px 0 0', fontStyle:'italic' },
  sectionWarm: { padding:'36px 20px', background:'#f2e8d8' },
  sectionWhite: { padding:'36px 20px', background:'#fff' },
  sectionNavy: { padding:'36px 20px', background:'#102940' },
  sectionP: { fontSize:'1rem', color:'#4a3828', lineHeight:1.85, marginBottom:12 },
  sectionPNavy: { fontSize:'1rem', color:'rgba(255,255,255,0.82)', lineHeight:1.85, marginBottom:12 },
  sectionH2: { fontFamily:'Georgia,serif', fontSize:'1.6rem', fontWeight:700, color:'#fff', marginBottom:8 },
  quoteBox: { background:'#102940', borderRadius:6, padding:'20px 22px', margin:'16px 0' },
  quoteP: { fontFamily:'Georgia,serif', fontStyle:'italic', fontSize:'1.05rem', color:'#fff', lineHeight:1.8, margin:0 },
  quoteCite: { display:'block', marginTop:10, fontSize:'0.75rem', color:'#8aaac8', fontStyle:'normal' },
  quoteBoxLight: { background:'rgba(255,255,255,0.08)', borderRadius:6, padding:'20px 22px', margin:'16px 0' },
  whoCard: { background:'#fff', borderRadius:6, padding:20, borderLeft:'5px solid #b03060', marginBottom:12 },
  whoIcon: { fontSize:'1.8rem', marginBottom:10 },
  whoH3: { fontFamily:'Georgia,serif', fontSize:'1.1rem', fontWeight:700, color:'#102940', marginBottom:6 },
  whoP: { fontSize:'0.97rem', color:'#4a3828', lineHeight:1.8, margin:0 },
  featCard: { background:'#fff', borderRadius:6, padding:'16px 18px', marginBottom:10 },
  featH3: { fontFamily:'Georgia,serif', fontSize:'1.05rem', fontWeight:700, color:'#102940', marginBottom:5 },
  featP: { fontSize:'0.95rem', color:'#4a3828', lineHeight:1.8, margin:0 },
  priceBox: { background:'#fff', borderRadius:6, padding:'26px 20px', marginBottom:14, borderTop:'5px solid #b03060' },
  priceTier: { fontSize:'0.72rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase' as const, color:'#b03060', marginBottom:6 },
  priceAmt: { fontFamily:'Georgia,serif', fontSize:'2.8rem', fontWeight:700, color:'#102940', lineHeight:1, marginBottom:4 },
  pricePer: { fontSize:'0.88rem', color:'#7a6a58', marginBottom:14 },
  priceDesc: { fontSize:'0.95rem', color:'#4a3828', lineHeight:1.75, marginBottom:14 },
  priceList: { listStyle:'none', marginBottom:18, padding:0 } as React.CSSProperties,
  priceLi: { fontSize:'0.93rem', color:'#4a3828', padding:'5px 0', borderBottom:'1px solid #f2e8d8', display:'flex', gap:8, alignItems:'flex-start' } as React.CSSProperties,
  priceCheck: { color:'#2d6b2d', fontWeight:700, flexShrink:0 },
  creds: { display:'flex', flexWrap:'wrap' as const, gap:8, marginTop:16 },
  cred: { background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:'0.82rem', fontWeight:600, padding:'5px 12px', borderRadius:4 },
  signupStrip: { background:'#b03060', padding:'48px 20px', textAlign:'center' as const },
  signupH2: { fontFamily:'Georgia,serif', fontSize:'1.9rem', fontWeight:700, color:'#fff', lineHeight:1.2, marginBottom:12 },
  signupP: { fontSize:'1rem', color:'rgba(255,255,255,0.9)', marginBottom:22 },
  btnWhite: { display:'block', background:'#fff', color:'#b03060', fontWeight:700, padding:'14px 32px', borderRadius:4, fontSize:'1rem', textAlign:'center' as const, maxWidth:320, margin:'0 auto 12px', textDecoration:'none' },
  signupNote: { fontSize:'0.82rem', color:'rgba(255,255,255,0.7)' },
  footer: { background:'#102940', color:'#a8c0d8', padding:'36px 20px 20px' },
  footerLogo: { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', display:'block', marginBottom:10, textDecoration:'none' },
  footerP: { fontSize:'0.9rem', lineHeight:1.7, marginBottom:6 },
  footerCol: { marginTop:22 },
  footerColH4: { fontSize:'0.7rem', letterSpacing:2, textTransform:'uppercase' as const, color:'#b07d10', fontWeight:700, marginBottom:10 },
  footerColA: { display:'block', fontSize:'0.9rem', color:'#a8c0d8', marginBottom:8, textDecoration:'none' },
  footerBottom: { background:'#102940', borderTop:'1px solid rgba(255,255,255,0.08)', textAlign:'center' as const, padding:'14px 20px', fontSize:'0.82rem', color:'#5a7a9a', fontStyle:'italic' },
};

export default function Home() {
  return (
    <div style={S.body}>
      <nav style={S.nav}>
        <Link href="/" style={S.navLogo}>Kasia<span style={S.navLogoSpan}>Care</span></Link>
        <Link href="/signup" style={S.navBtn}>Sign Up</Link>
      </nav>

      {/* HERO */}
      <div style={S.hero}>
        <h1 style={S.heroH1}>Caring is <em style={S.heroEm}>easier</em> when everyone knows the plan.</h1>
        <p style={S.heroSub}>KasiaCare gives families, caregivers, personal aids, and individuals one simple, shared place to build and follow a real-time care plan — wherever care happens, and whenever it needs to happen.</p>
        <Link href="/signup" style={S.btnRose}>Sign Up — Be Part of the Plan</Link>
        <Link href="/features" style={S.btnOutline}>See How It Works</Link>
      </div>

      {/* OUR STORY */}
      <div style={S.cat}><h2 style={S.catH2}>Our Story</h2><p style={S.catP}>The heart behind KasiaCare</p></div>
      <div style={S.sectionWarm}>
        <p style={S.sectionP}>KasiaCare is named in honor of <strong>Kasia</strong> — pronounced <em>KAH-shah</em> — a beloved mother who lived with a disability and was cared for by her family for many years. She was full of warmth, laughter, and a deep love of flowers.</p>
        <p style={S.sectionP}>Her daughter <strong>Lilia Kuzmicz</strong> was her primary caregiver for over thirty years. There was no app for that. No shared care plan that traveled with Kasia wherever she went.</p>
        <p style={{...S.sectionP, marginBottom:0}}>Kasia passed away on <strong>February 7, 2023.</strong> KasiaCare is built in her memory — and for every family still in the middle of that journey.</p>
        <div style={S.quoteBox}>
          <p style={S.quoteP}>"No one receiving care should feel unknown. No one providing care should feel unprepared."</p>
          <cite style={S.quoteCite}>— KasiaCare Mission Statement</cite>
        </div>
      </div>

      {/* WHO IT'S FOR */}
      <div style={S.cat}><h2 style={S.catH2}>Who It's For</h2><p style={S.catP}>Built for every person in the circle of care</p></div>
      <div style={S.sectionWhite}>
        <div style={S.whoCard}><div style={S.whoIcon}>💙</div><h3 style={S.whoH3}>Family Caregivers</h3><p style={S.whoP}>Adult children, spouses, and siblings coordinating care — knowing what was done, what's needed, and who's coming next. Everyone rests easy knowing things are going smoothly.</p></div>
        <div style={S.whoCard}><div style={S.whoIcon}>🌿</div><h3 style={S.whoH3}>Individuals Managing Their Own Care</h3><p style={S.whoP}>Disabled and elderly individuals building and following their own care plan — maintaining independence and giving loved ones peace of mind.</p></div>
        <div style={S.whoCard}><div style={S.whoIcon}>🤝</div><h3 style={S.whoH3}>Personal Aids &amp; Caregivers</h3><p style={S.whoP}>Caregivers who walk through the door ready — knowing the person's full day, their preferences, and exactly what needs to happen.</p></div>
      </div>

      {/* FEATURES */}
      <div style={S.cat}><h2 style={S.catH2}>Features</h2><p style={S.catP}>Everything in one place — simple enough for anyone</p></div>
      <div style={S.sectionWarm}>
        <div style={S.featCard}><h3 style={S.featH3}>Daily Dashboard</h3><p style={S.featP}>The full day at a glance the moment you log in. A quick view of where you are today in your care plan.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Tasks</h3><p style={S.featP}>Everything that needs to happen today, clearly listed and easy to check off in real time.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Activities</h3><p style={S.featP}>Outings, recreation, therapy sessions, and daily activities — all part of the day.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Schedules</h3><p style={S.featP}>AM care, PM care, meals, and routines — organized from morning to night.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Appointments</h3><p style={S.featP}>Doctor visits, specialist appointments, and check-ups — scheduled and visible to the whole care team.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Reminders</h3><p style={S.featP}>Med Box Reminders, appointment reminders, and task reminders — each with its own on/off switch.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Care Calendars</h3><p style={S.featP}>One for everything you track. Any task, activity, appointment, or routine can have its own calendar. If you are tracking it — it has a calendar.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Notes</h3><p style={S.featP}>Attach a note to any task, any update, or any item. Typed or recorded by voice.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Care Plan Sharing</h3><p style={S.featP}>Role-based access for family members, personal aids, and caregivers. Everyone on the care team sees the same plan.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Supplies &amp; Vendors</h3><p style={S.featP}>List supply needs and vendor services.</p></div>
        <div style={S.featCard}><h3 style={S.featH3}>Google Calendar Integration</h3><p style={S.featP}>Appointments sync to Google Calendar automatically.</p></div>
      </div>

      {/* PRICING */}
      <div style={S.cat}><h2 style={S.catH2}>Subscription Plans</h2><p style={S.catP}>Simple and honest pricing</p></div>
      <div style={S.sectionWarm}>
        <div style={S.priceBox}>
          <div style={S.priceTier}>Basic</div>
          <div style={S.priceAmt}>$14.99</div>
          <div style={S.pricePer}>per month</div>
          <p style={S.priceDesc}>The pure care plan — simple, clean, and built for everyone from day one.</p>
          <ul style={S.priceList}>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Daily Dashboard</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Tasks · Activities · Schedules · Appointments</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Reminders</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Care Calendars</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Notes — typed or by voice</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Care Plan Sharing</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Supplies &amp; Vendors</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Google Calendar Integration</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Printable Care Report</li>
          </ul>
          <Link href="/signup" style={S.btnRose}>Free Trial Sign Up</Link>
        </div>
        <div style={S.priceBox}>
          <div style={S.priceTier}>Pro</div>
          <div style={S.priceAmt}>$34.99</div>
          <div style={S.pricePer}>per month</div>
          <p style={S.priceDesc}>Everything in Basic, plus the Caregiver Hub.</p>
          <ul style={S.priceList}>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Everything in Basic</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Caregiver Hub — shift scheduling</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Caregiver dashboard and reporting</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Extended notifications</li>
            <li style={S.priceLi}><span style={S.priceCheck}>✓</span> Priority Support &amp; Onboarding</li>
          </ul>
          <Link href="/signup" style={S.btnRose}>Free Trial Sign Up</Link>
        </div>
        <div style={{...S.priceBox, borderTopColor:'#6b2d8a'}}>
          <div style={{...S.priceTier, color:'#6b2d8a'}}>Med Basic &amp; Med Pro</div>
          <div style={{...S.priceAmt, fontSize:'1.6rem', color:'#6b2d8a'}}>Coming Soon</div>
          <div style={S.pricePer}>Year 2 and beyond</div>
          <p style={S.priceDesc}>Medication information, vital signs tracking, and an extended Agency Caregiver Hub — launching when full HIPAA compliance is in place.</p>
          <ul style={S.priceList}>
            <li style={S.priceLi}><span style={{...S.priceCheck, color:'#6b2d8a'}}>✓</span> Everything in Basic and Pro</li>
            <li style={S.priceLi}><span style={{...S.priceCheck, color:'#6b2d8a'}}>✓</span> Medication information tracking</li>
            <li style={S.priceLi}><span style={{...S.priceCheck, color:'#6b2d8a'}}>✓</span> Basic vital signs</li>
            <li style={S.priceLi}><span style={{...S.priceCheck, color:'#8a6a00'}}>✓</span> Agency Caregiver Hub — Med Pro</li>
            <li style={S.priceLi}><span style={{...S.priceCheck, color:'#8a6a00'}}>✓</span> AI Trend Viewer — Med Pro</li>
          </ul>
          <Link href="/signup" style={S.btnRose}>Free Trial Sign Up</Link>
        </div>
        <Link href="/pricing" style={{display:'block',textAlign:'center',color:'#b03060',fontWeight:700,fontSize:'0.95rem',marginTop:6,textDecoration:'none'}}>View full subscription details →</Link>
      </div>

      {/* FOUNDER */}
      <div style={S.cat}><h2 style={S.catH2}>Meet the Founder</h2><p style={S.catP}>Lilia Kuzmicz — Founder, KasiaCare</p></div>
      <div style={S.sectionNavy}>
        <h2 style={S.sectionH2}>Lilia Kuzmicz</h2>
        <p style={{color:'#8aaac8', fontSize:'0.9rem', marginBottom:16}}>Founder, KasiaCare · Kasia's Daughter</p>
        <p style={S.sectionPNavy}>Lilia Kuzmicz is a serial entrepreneur with over 30 years of experience in technology and caregiving. Most importantly, she was Kasia's daughter and primary caregiver for over thirty years.</p>
        <p style={S.sectionPNavy}>KasiaCare is built from that experience — not from a boardroom, but from a bedroom, a hospital waiting room, and thirty years of <strong style={{color:'#fff'}}>love in action.</strong></p>
        <div style={S.quoteBoxLight}>
          <p style={{fontFamily:'Georgia,serif', fontStyle:'italic', fontSize:'1.05rem', color:'rgba(255,255,255,0.9)', lineHeight:1.8, margin:0}}>"Uniting our actions and dreams to reflect what we want to help people achieve — in the most basic way — just to have a simple care plan."</p>
          <cite style={S.quoteCite}>— Lilia Kuzmicz, Founder</cite>
        </div>
        <div style={S.creds}>
          <span style={S.cred}>MIT</span><span style={S.cred}>Harvard</span><span style={S.cred}>IBM</span>
          <span style={S.cred}>Google</span><span style={S.cred}>Kennesaw State</span><span style={S.cred}>Infosec</span>
        </div>
      </div>

      {/* SIGN UP STRIP */}
      <div style={S.signupStrip}>
        <h2 style={S.signupH2}>Ready to bring <em>joy</em> back to caregiving?</h2>
        <p style={S.signupP}>Sign up and we will reach out personally when we hear from you.</p>
        <Link href="/signup" style={S.btnWhite}>Sign Up Today</Link>
        <p style={S.signupNote}>No credit card · No commitment · Your info is never sold.</p>
      </div>

      {/* FOOTER */}
      <div style={S.footer}>
        <Link href="/" style={S.footerLogo}>Kasia<span style={{color:'#b03060'}}>Care</span></Link>
        <p style={S.footerP}>Care Plan Software for Families, Caregivers &amp; Care Teams.</p>
        <p style={{fontStyle:'italic', color:'#6a8aaa', marginTop:8, fontSize:'0.9rem'}}>"No one receiving care should feel unknown. No one providing care should feel unprepared."</p>
        <div style={S.footerCol}>
          <h4 style={S.footerColH4}>Product</h4>
          <Link href="/features" style={S.footerColA}>Features</Link>
          <Link href="/pricing" style={S.footerColA}>Subscriptions</Link>
          <Link href="/signup" style={S.footerColA}>Sign Up</Link>
          <Link href="/angels" style={S.footerColA}>Angels Program</Link>
        </div>
        <div style={S.footerCol}>
          <h4 style={S.footerColH4}>Company</h4>
          <Link href="/about" style={S.footerColA}>About KasiaCare</Link>
          <Link href="/contact" style={S.footerColA}>Contact</Link>
          <Link href="/privacy" style={S.footerColA}>Privacy &amp; AI Policy</Link>
        </div>
      </div>
      <div style={S.footerBottom}>© 2026 KasiaCare · Founded by Lilia Kuzmicz · Built for Kasia. Built for every family like ours. 💙<br/><span style={{fontSize:'0.72rem', color:'#3a5a7a', letterSpacing:'0.5px'}}>KasiaCare Website v1.2.0 · April 2026 · Home</span></div>
    </div>
  );
}
