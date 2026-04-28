import { Link } from "wouter";

const navS: React.CSSProperties = { background:'#102940', padding:'16px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100 };
const navLogoS: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', textDecoration:'none' };
const navBtnS: React.CSSProperties = { background:'#b03060', color:'#fff', padding:'10px 18px', borderRadius:4, fontSize:'0.9rem', fontWeight:700, display:'inline-block', textDecoration:'none' };
const catS: React.CSSProperties = { background:'#102940', padding:'16px 20px' };
const catH2S: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1.2rem', fontWeight:700, color:'#fff', margin:0 };
const catPS: React.CSSProperties = { fontSize:'0.82rem', color:'rgba(255,255,255,0.55)', margin:'4px 0 0', fontStyle:'italic' };
const warmS: React.CSSProperties = { padding:'36px 20px', background:'#f2e8d8' };
const priceBox: React.CSSProperties = { background:'#fff', borderRadius:6, padding:'26px 20px', marginBottom:16, borderTop:'5px solid #b03060' };
const priceBoxComing: React.CSSProperties = { ...priceBox, borderTopColor:'#6b2d8a' };
const priceTier: React.CSSProperties = { fontSize:'0.72rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#b03060', marginBottom:6 };
const priceTierComing: React.CSSProperties = { ...priceTier, color:'#6b2d8a' };
const priceAmt: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'2.8rem', fontWeight:700, color:'#102940', lineHeight:1, marginBottom:4 };
const priceAmtComing: React.CSSProperties = { ...priceAmt, fontSize:'1.6rem', color:'#6b2d8a' };
const pricePer: React.CSSProperties = { fontSize:'0.88rem', color:'#7a6a58', marginBottom:14 };
const priceDesc: React.CSSProperties = { fontSize:'0.95rem', color:'#4a3828', lineHeight:1.75, marginBottom:14 };
const priceList: React.CSSProperties = { listStyle:'none', marginBottom:18, padding:0 };
const priceLi: React.CSSProperties = { fontSize:'0.93rem', color:'#4a3828', padding:'5px 0', borderBottom:'1px solid #f2e8d8', display:'flex', gap:8, alignItems:'flex-start' };
const priceCheck: React.CSSProperties = { color:'#2d6b2d', fontWeight:700, flexShrink:0 };
const priceCheckComing: React.CSSProperties = { ...priceCheck, color:'#6b2d8a' };
const btnRose: React.CSSProperties = { display:'block', background:'#b03060', color:'#fff', fontWeight:700, padding:'14px 20px', borderRadius:4, fontSize:'1rem', textAlign:'center', textDecoration:'none' };
const noteBox: React.CSSProperties = { background:'#f8f4ec', borderLeft:'4px solid #b07d10', borderRadius:'0 4px 4px 0', padding:'12px 16px', marginBottom:18, fontSize:'0.88rem', color:'#4a3828', lineHeight:1.75 };
const alcItem: React.CSSProperties = { background:'#fff', borderRadius:6, padding:'16px 18px', marginBottom:10, borderLeft:'4px solid #b03060' };
const alcH3: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1rem', fontWeight:700, color:'#102940', marginBottom:4 };
const alcP: React.CSSProperties = { fontSize:'0.93rem', color:'#4a3828', lineHeight:1.75, margin:0 };
const angelsCta: React.CSSProperties = { background:'#102940', padding:'48px 20px', textAlign:'center' };
const footerS: React.CSSProperties = { background:'#102940', color:'#a8c0d8', padding:'36px 20px 20px' };
const footerLogoS: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', display:'block', marginBottom:10, textDecoration:'none' };
const footerColS: React.CSSProperties = { marginTop:22 };
const footerColH4S: React.CSSProperties = { fontSize:'0.7rem', letterSpacing:2, textTransform:'uppercase', color:'#b07d10', fontWeight:700, marginBottom:10 };
const footerColAS: React.CSSProperties = { display:'block', fontSize:'0.9rem', color:'#a8c0d8', marginBottom:8, textDecoration:'none' };
const footerBottomS: React.CSSProperties = { background:'#102940', borderTop:'1px solid rgba(255,255,255,0.08)', textAlign:'center', padding:'14px 20px', fontSize:'0.82rem', color:'#5a7a9a', fontStyle:'italic' };

export default function Pricing() {
  return (
    <div style={{ fontFamily:'Georgia,serif', background:'#faf7f2', color:'#2c2010', lineHeight:1.75 }}>
      <nav style={navS}>
        <Link href="/" style={navLogoS}>Kasia<span style={{color:'#b03060'}}>Care</span></Link>
        <Link href="/signup" style={navBtnS}>Sign Up</Link>
      </nav>

      {/* HERO */}
      <div style={{ background:'#102940', padding:'40px 20px 36px' }}>
        <h1 style={{ fontFamily:'Georgia,serif', fontSize:'2rem', fontWeight:700, color:'#fff', lineHeight:1.15, marginBottom:14 }}>KasiaCare <em style={{fontStyle:'italic',color:'#b03060'}}>Subscriptions</em></h1>
        <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.82)', lineHeight:1.8, marginBottom:22 }}>Simple, honest pricing. Start with the pure care plan. Grow when you are ready. No surprises — ever.</p>
      </div>

      {/* TOP CALLOUT */}
      <div style={{ background:'#b03060', padding:'28px 20px', textAlign:'center' }}>
        <h2 style={{ fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', lineHeight:1.3, marginBottom:10 }}>Be among the first to try KasiaCare.</h2>
        <p style={{ fontSize:'0.97rem', color:'rgba(255,255,255,0.9)', lineHeight:1.75, marginBottom:18 }}>Sign up today and we will reach out personally when your free trial is ready. No credit card. No commitment. Just a care plan that works.</p>
        <Link href="/signup" style={{ display:'inline-block', background:'#fff', color:'#b03060', fontWeight:700, padding:'13px 28px', borderRadius:4, fontSize:'1rem', textDecoration:'none' }}>Sign Up for Free Trial</Link>
      </div>

      {/* SUBSCRIPTIONS */}
      <div style={catS}><h2 style={catH2S}>Subscriptions</h2><p style={catPS}>Four tiers — built to grow with your needs</p></div>
      <div style={warmS}>
        {/* BASIC */}
        <div style={priceBox}>
          <div style={priceTier}>Basic Plan</div>
          <div style={priceAmt}>$14.99</div>
          <div style={pricePer}>per month · 14-day free trial</div>
          <p style={priceDesc}>The pure care plan — everything needed to build, follow, and share a real-time care plan from day one.</p>
          <ul style={priceList}>
            <li style={priceLi}><span style={priceCheck}>✓</span> Daily Dashboard</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Tasks</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Activities</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Schedules</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Appointments</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Reminders</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Care Calendars — one for everything you track</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Notes — typed or recorded by voice</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Care Plan Sharing</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Supplies &amp; Vendors</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Google Calendar Integration</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Printable Care Report</li>
          </ul>
          <Link href="/signup" style={btnRose}>Free Trial Sign Up</Link>
        </div>

        {/* PRO */}
        <div style={priceBox}>
          <div style={priceTier}>Pro Plan</div>
          <div style={priceAmt}>$34.99</div>
          <div style={pricePer}>per month · 14-day free trial</div>
          <p style={priceDesc}>Everything in Basic, plus the Caregiver Hub for families and care teams managing more complex care situations.</p>
          <ul style={priceList}>
            <li style={priceLi}><span style={priceCheck}>✓</span> Everything in Basic</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Caregiver Hub — shift scheduling</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Caregiver dashboard and reporting</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Notes and alerts for caregivers</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Priority Support &amp; One-on-One Onboarding</li>
          </ul>
          <Link href="/signup" style={btnRose}>Free Trial Sign Up</Link>
        </div>

        {/* MED BASIC */}
        <div style={priceBoxComing}>
          <div style={priceTierComing}>Med Basic Plan</div>
          <div style={priceAmtComing}>Coming Soon</div>
          <div style={pricePer}>Year 2 launch · Pricing TBD</div>
          <p style={priceDesc}>Everything in Basic and Pro, plus a medical information layer added to the care plan. Requires full HIPAA compliance before launch.</p>
          <ul style={priceList}>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Everything in Basic and Pro</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Medication information — names and basic details</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Basic vital signs tracking</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Medical reporting</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Expanded notes for health observations</li>
          </ul>
          <Link href="/signup" style={btnRose}>Sign Up to Be Notified</Link>
        </div>

        {/* MED PRO */}
        <div style={priceBoxComing}>
          <div style={priceTierComing}>Med Pro Plan</div>
          <div style={priceAmtComing}>Coming Soon</div>
          <div style={pricePer}>Year 3–5 launch · Pricing TBD</div>
          <p style={priceDesc}>Everything in Med Basic, plus an extended Agency Caregiver Hub. Built for caregiver agencies subscribing for their caregivers under one umbrella account.</p>
          <ul style={priceList}>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Everything in Med Basic</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Agency Caregiver Hub — multiple caregivers under one account</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Agency oversight of all care plans and caregiver activity</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> AI Trend Viewer — monitors health patterns, flags items needing attention</li>
            <li style={priceLi}><span style={priceCheckComing}>✓</span> Extended vital signs tracking</li>
          </ul>
          <Link href="/signup" style={btnRose}>Sign Up to Be Notified</Link>
        </div>

        <div style={noteBox}>Med Basic and Med Pro require full HIPAA review and attorney approval before launch. No medical data features will be developed or launched until compliance infrastructure is complete. KasiaCare is committed to doing this right — in the right order, at the right time.</div>
      </div>

      {/* A LA CARTE */}
      <div style={catS}><h2 style={catH2S}>A La Carte Services</h2><p style={catPS}>Additional support — available for all subscriptions</p></div>
      <div style={warmS}>
        <div style={priceBox}>
          <div style={priceTier}>A La Carte</div>
          <div style={{ ...priceAmt, fontSize:'1.6rem' }}>A La Carte Services</div>
          <div style={pricePer}>Available for all subscriptions</div>
          <p style={priceDesc}>A La Carte services are premium human-touch support sessions delivered personally by KasiaCare Angels via Zoom or Google Meet. Purchased separately from your subscription. Available to every subscription.</p>
          <ul style={priceList}>
            <li style={priceLi}><span style={priceCheck}>✓</span> One-on-One Video Onboarding — a personal session to get started on KasiaCare from day one</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Care Plan Data Input Service — we help enter and organize your care plan information for you</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Scheduling Assistance — help setting up calendars, reminders, and care team access</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Monthly Care Plan Help &amp; Setup — ongoing hands-on assistance keeping the care plan current</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> 3-Month Coaching Program — ongoing support and guidance over three months</li>
            <li style={priceLi}><span style={priceCheck}>✓</span> Individual Training — one-on-one training tailored to your specific care plan needs</li>
          </ul>
          <Link href="/signup" style={btnRose}>Sign Up to Learn More</Link>
        </div>
        <p style={{ fontSize:'0.88rem', color:'#7a6a58', fontStyle:'italic', marginTop:6 }}>A La Carte services for Med Basic and Med Pro are To Be Determined — pending research and development planning.</p>
      </div>

      {/* ANGELS CTA */}
      <div style={angelsCta}>
        <h2 style={{ fontFamily:'Georgia,serif', fontSize:'1.7rem', fontWeight:700, color:'#fff', lineHeight:1.25, marginBottom:12 }}>Be one of the <em style={{fontStyle:'italic',color:'#b03060'}}>first.</em></h2>
        <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.82)', lineHeight:1.8, marginBottom:22 }}>Sign up to become a KasiaCare Angel — test the software, give feedback, and help build something that matters. Early access. Direct line to Lilia. Your feedback shapes the product.</p>
        <Link href="/signup" style={{ display:'inline-block', background:'#b03060', color:'#fff', fontWeight:700, padding:'15px 32px', borderRadius:4, fontSize:'1rem', marginBottom:12, textDecoration:'none' }}>Sign Up as an Angel</Link>
        <p style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.6)' }}>No cost · No commitment · Your info is never sold.</p>
        <p style={{ marginTop:14 }}><Link href="/angels" style={{ color:'rgba(255,255,255,0.7)', fontSize:'0.9rem', textDecoration:'underline' }}>Learn more about the Angels Program →</Link></p>
      </div>

      {/* FOOTER */}
      <div style={footerS}>
        <Link href="/" style={footerLogoS}>Kasia<span style={{color:'#b03060'}}>Care</span></Link>
        <p style={{ fontSize:'0.9rem', lineHeight:1.7, marginBottom:6 }}>Care Plan Software for Families, Caregivers &amp; Care Teams.</p>
        <p style={{ fontStyle:'italic', color:'#6a8aaa', marginTop:8, fontSize:'0.9rem' }}>"No one receiving care should feel unknown. No one providing care should feel unprepared."</p>
        <div style={footerColS}>
          <h4 style={footerColH4S}>Product</h4>
          <Link href="/features" style={footerColAS}>Features</Link>
          <Link href="/pricing" style={footerColAS}>Subscriptions</Link>
          <Link href="/signup" style={footerColAS}>Sign Up</Link>
          <Link href="/angels" style={footerColAS}>Angels Program</Link>
        </div>
        <div style={footerColS}>
          <h4 style={footerColH4S}>Company</h4>
          <Link href="/about" style={footerColAS}>About KasiaCare</Link>
          <Link href="/contact" style={footerColAS}>Contact</Link>
          <Link href="/privacy" style={footerColAS}>Privacy &amp; AI Policy</Link>
        </div>
      </div>
      <div style={footerBottomS}>© 2026 KasiaCare · Founded by Lilia Kuzmicz · Built for Kasia. Built for every family like ours. 💙<br/><span style={{fontSize:'0.72rem', color:'#3a5a7a', letterSpacing:'0.5px'}}>KasiaCare Website v1.2.0 · April 2026 · Subscriptions</span></div>
    </div>
  );
}
