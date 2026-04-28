import { Link } from "wouter";

const S = {
  body: { fontFamily:'Georgia,serif', background:'#faf7f2', color:'#2c2010', lineHeight:1.7, margin:0, padding:0 } as React.CSSProperties,
  nav: { background:'#102940', padding:'16px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky' as const, top:0, zIndex:100 },
  navLogo: { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', textDecoration:'none' },
  navBtn: { background:'#b03060', color:'#fff', padding:'10px 18px', borderRadius:4, fontSize:'0.9rem', fontWeight:700, display:'inline-block', textDecoration:'none' },
  hero: { background:'#102940', padding:'40px 20px 36px' },
  heroLabel: { fontSize:'0.72rem', letterSpacing:3, textTransform:'uppercase' as const, color:'#b07d10', fontWeight:700, marginBottom:14 },
  heroH1: { fontFamily:'Georgia,serif', fontSize:'2rem', fontWeight:700, color:'#fff', lineHeight:1.15, marginBottom:14 },
  heroEm: { fontStyle:'italic', color:'#b03060' },
  heroSub: { fontSize:'1rem', color:'rgba(255,255,255,0.82)', lineHeight:1.8, marginBottom:0 },
  cat: { background:'#102940', padding:'16px 20px' },
  catH2: { fontFamily:'Georgia,serif', fontSize:'1.2rem', fontWeight:700, color:'#fff', margin:0 },
  catP: { fontSize:'0.82rem', color:'rgba(255,255,255,0.55)', margin:'4px 0 0', fontStyle:'italic' },
  sectionWarm: { padding:'36px 20px', background:'#f2e8d8' },
  sectionWhite: { padding:'36px 20px', background:'#fff' },
  sectionNavy: { padding:'36px 20px', background:'#102940' },
  p: { fontSize:'1rem', color:'#4a3828', lineHeight:1.85, marginBottom:14 },
  pNavy: { fontSize:'1rem', color:'rgba(255,255,255,0.82)', lineHeight:1.85, marginBottom:14 },
  h2Navy: { fontFamily:'Georgia,serif', fontSize:'1.6rem', fontWeight:700, color:'#fff', marginBottom:10 },
  quoteBox: { background:'#102940', borderRadius:6, padding:'20px 22px', marginBottom:12 },
  quoteP: { fontFamily:'Georgia,serif', fontStyle:'italic', fontSize:'1.05rem', color:'#fff', lineHeight:1.75, margin:0 },
  quoteCite: { display:'block', marginTop:10, fontSize:'0.75rem', color:'#8aaac8', fontStyle:'normal' },
  quoteBoxLight: { background:'rgba(255,255,255,0.08)', borderRadius:6, padding:'20px 22px', marginBottom:12 },
  quoteLightP: { fontFamily:'Georgia,serif', fontStyle:'italic', fontSize:'1.05rem', color:'rgba(255,255,255,0.9)', lineHeight:1.75, margin:0 },
  whoCard: { background:'#fff', borderRadius:6, padding:20, borderLeft:'5px solid #b03060', marginBottom:12 },
  whoIcon: { fontSize:'1.8rem', marginBottom:10 },
  whoH3: { fontFamily:'Georgia,serif', fontSize:'1.1rem', fontWeight:700, color:'#102940', marginBottom:6 },
  whoP: { fontSize:'0.97rem', color:'#4a3828', lineHeight:1.8, margin:0 },
  creds: { display:'flex', flexWrap:'wrap' as const, gap:8, marginTop:16 },
  cred: { background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:'0.82rem', fontWeight:600, padding:'5px 12px', borderRadius:4 },
  signupStrip: { background:'#b03060', padding:'48px 20px', textAlign:'center' as const },
  signupH2: { fontFamily:'Georgia,serif', fontSize:'1.9rem', fontWeight:700, color:'#fff', lineHeight:1.2, marginBottom:12 },
  signupP: { fontSize:'1rem', color:'rgba(255,255,255,0.9)', marginBottom:22 },
  btnWhite: { display:'block', background:'#fff', color:'#b03060', fontWeight:700, padding:'14px 20px', borderRadius:4, fontSize:'1rem', textAlign:'center' as const, marginBottom:12, textDecoration:'none' },
  signupNote: { fontSize:'0.82rem', color:'rgba(255,255,255,0.7)', marginTop:10 },
  footer: { background:'#102940', color:'#a8c0d8', padding:'36px 20px 20px' },
  footerLogo: { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', display:'block', marginBottom:10, textDecoration:'none' },
  footerP: { fontSize:'0.9rem', lineHeight:1.7, marginBottom:6 },
  footerCol: { marginTop:22 },
  footerColH4: { fontSize:'0.7rem', letterSpacing:2, textTransform:'uppercase' as const, color:'#b07d10', fontWeight:700, marginBottom:10 },
  footerColA: { display:'block', fontSize:'0.9rem', color:'#a8c0d8', marginBottom:8, textDecoration:'none' },
  footerBottom: { background:'#102940', borderTop:'1px solid rgba(255,255,255,0.08)', textAlign:'center' as const, padding:'14px 20px', fontSize:'0.82rem', color:'#5a7a9a', fontStyle:'italic' },
};

export default function About() {
  return (
    <div style={S.body}>
      <nav style={S.nav}>
        <Link href="/" style={S.navLogo}>Kasia<span style={{color:'#b03060'}}>Care</span></Link>
        <Link href="/signup" style={S.navBtn}>Sign Up</Link>
      </nav>

      <div style={S.hero}>
        <div style={S.heroLabel}>Care Plan Software</div>
        <h1 style={S.heroH1}>About <em style={S.heroEm}>KasiaCare</em></h1>
        <p style={S.heroSub}>Built by a family caregiver, for every family, personal, or individual caregiver. Even for you.</p>
      </div>

      <div style={S.cat}><h2 style={S.catH2}>Our Mission</h2></div>
      <div style={S.sectionWarm}>
        <p style={S.p}>Every day, millions of caregivers wake up without a clear, shared plan. Medications get missed. Appointments get forgotten. A new caregiver walks through the door with no idea what that person's day looks like.</p>
        <p style={{...S.p, marginBottom:12}}>KasiaCare was built to solve that — one care plan at a time.</p>
        <div style={S.quoteBox}>
          <p style={S.quoteP}>"No one receiving care should feel unknown. No one providing care should feel unprepared."</p>
          <cite style={S.quoteCite}>— KasiaCare Mission Statement</cite>
        </div>
      </div>

      <div style={S.cat}><h2 style={S.catH2}>Our Story</h2><p style={S.catP}>Named for Kasia</p></div>
      <div style={S.sectionWhite}>
        <p style={S.p}>KasiaCare is named in honor of <strong>Kasia</strong> — pronounced <em>KAH-shah</em> — a beloved mother who lived with a disability and was cared for by her family for many years. She had a radiant smile, a love of flowers, and an unshakeable spirit.</p>
        <p style={S.p}>Her daughter <strong>Lilia Kuzmicz</strong> was her primary caregiver for over thirty years. There was no shared care plan. No app that traveled with Kasia wherever she went — whether she was at the hospital, the doctor's office, or visiting family. Every handoff meant starting over.</p>
        <p style={{...S.p, marginBottom:0}}>Kasia passed away on <strong>February 7, 2023.</strong> KasiaCare is Lilia's way of making sure no other family has to coordinate care the hard way.</p>
      </div>

      <div style={S.cat}><h2 style={S.catH2}>What Makes Us Different</h2></div>
      <div style={S.sectionWarm}>
        <div style={S.whoCard}><div style={S.whoIcon}>💙</div><h3 style={S.whoH3}>Built from Real Caregiving</h3><p style={S.whoP}>KasiaCare is not built by a tech company that studied caregiving. It is built by someone who lived it for thirty years — every medication, every appointment, every caregiver handoff, every late night.</p></div>
        <div style={S.whoCard}><div style={S.whoIcon}>🌿</div><h3 style={S.whoH3}>Designed for Everyone in the Circle</h3><p style={S.whoP}>Family members, personal aids, agency caregivers, and the individuals themselves — everyone gets a view that is right for them. No technical knowledge required.</p></div>
        <div style={S.whoCard}><div style={S.whoIcon}>🔒</div><h3 style={S.whoH3}>Privacy First — Always</h3><p style={S.whoP}>Version 1 stores no medical data. Printable reports use initials and state only. You control who sees what. We never sell your information.</p></div>
        <div style={S.whoCard}><div style={S.whoIcon}>📍</div><h3 style={S.whoH3}>Care Anywhere</h3><p style={S.whoP}>At home, at the hospital, at the doctor's office, or visiting family — the care plan travels with the person. Wherever care happens, KasiaCare is there.</p></div>
      </div>

      <div style={S.cat}><h2 style={S.catH2}>Meet the Founder</h2><p style={S.catP}>Lilia Kuzmicz — Founder, KasiaCare</p></div>
      <div style={S.sectionNavy}>
        <h2 style={S.h2Navy}>Lilia Kuzmicz</h2>
        <p style={{color:'#8aaac8', fontSize:'0.9rem', marginBottom:16}}>Founder, KasiaCare · Kasia's Daughter</p>
        <p style={S.pNavy}>Lilia Kuzmicz is a serial entrepreneur with over 30 years of experience in technology and caregiving. She served as CEO of Reverse Polarity LLC (2008–2019) and Media and Company Services (1997–2023).</p>
        <p style={S.pNavy}>She holds certifications from MIT, Harvard, IBM, Google, Kennesaw State University, and Infosec — bringing both professional credibility and deep human empathy to everything she builds.</p>
        <p style={S.pNavy}>Most importantly, she was Kasia's daughter — the person who gave her mother her morning medications, took her to every appointment, and held her hand at the end. KasiaCare is built from that love.</p>
        <div style={S.quoteBoxLight}>
          <p style={S.quoteLightP}>"Uniting our actions and dreams to reflect what we want to help people achieve — in the most basic way — just to have a simple care plan."</p>
          <cite style={S.quoteCite}>— Lilia Kuzmicz, Founder</cite>
        </div>
        <div style={S.creds}>
          <span style={S.cred}>MIT</span><span style={S.cred}>Harvard</span><span style={S.cred}>IBM</span>
          <span style={S.cred}>Google</span><span style={S.cred}>Kennesaw State</span><span style={S.cred}>Infosec</span>
        </div>
      </div>

      <div style={S.signupStrip}>
        <h2 style={S.signupH2}>Ready to bring <em>joy</em> back to caregiving?</h2>
        <p style={S.signupP}>Join our waitlist. We will reach out personally when your trial is ready.</p>
        <Link href="/signup" style={S.btnWhite}>Sign Up Today</Link>
        <p style={S.signupNote}>No credit card · No commitment · Your info is never sold.</p>
      </div>

      <div style={S.footer}>
        <Link href="/" style={S.footerLogo}>Kasia<span style={{color:'#b03060'}}>Care</span></Link>
        <p style={S.footerP}>Care Plan Software for Families, Caregivers &amp; Care Teams.</p>
        <p style={{fontStyle:'italic', color:'#6a8aaa', marginTop:10, fontSize:'0.9rem'}}>"No one receiving care should feel unknown. No one providing care should feel unprepared."</p>
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
      <div style={S.footerBottom}>© 2026 KasiaCare · Founded by Lilia Kuzmicz · Built for Kasia. Built for every family like ours. 💙<br/><span style={{fontSize:'0.72rem', color:'#3a5a7a', letterSpacing:'0.5px'}}>KasiaCare Website v1.2.0 · April 2026 · About</span></div>
    </div>
  );
}
