import { Link } from "wouter";

const nav: React.CSSProperties = { background:'#102940', padding:'16px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100 };
const navLogo: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', textDecoration:'none' };
const navBtn: React.CSSProperties = { background:'#b03060', color:'#fff', padding:'10px 18px', borderRadius:4, fontSize:'0.9rem', fontWeight:700, display:'inline-block', textDecoration:'none' };
const cat: React.CSSProperties = { background:'#102940', padding:'16px 20px' };
const catH2: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1.2rem', fontWeight:700, color:'#fff', margin:0 };
const catP: React.CSSProperties = { fontSize:'0.82rem', color:'rgba(255,255,255,0.55)', margin:'4px 0 0', fontStyle:'italic' };
const warm: React.CSSProperties = { padding:'36px 20px', background:'#f2e8d8' };
const white: React.CSSProperties = { padding:'36px 20px', background:'#fff' };
const p: React.CSSProperties = { fontSize:'1rem', color:'#4a3828', lineHeight:1.85, marginBottom:14 };
const featCard: React.CSSProperties = { background:'#fff', borderRadius:6, padding:18, marginBottom:10 };
const featH3: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1.1rem', fontWeight:700, color:'#102940', marginBottom:6 };
const featP: React.CSSProperties = { fontSize:'0.95rem', color:'#4a3828', lineHeight:1.8, margin:0 };
const tagAll: React.CSSProperties = { display:'inline-block', fontSize:'0.68rem', fontWeight:700, letterSpacing:1, textTransform:'uppercase', padding:'3px 10px', borderRadius:3, marginBottom:8, background:'#fff3d0', color:'#8a6a00' };
const tagPro: React.CSSProperties = { ...tagAll, background:'#dceaf8', color:'#102940' };
const tagMed: React.CSSProperties = { ...tagAll, background:'#ede0f8', color:'#6b2d8a' };
const tagMedPro: React.CSSProperties = { ...tagAll, background:'#d8c0f0', color:'#4a1870' };
const medSlot: React.CSSProperties = { display:'flex', gap:14, alignItems:'flex-start', marginBottom:12, background:'#f2e8d8', borderRadius:6, padding:'14px 16px' };
const slotIcon: React.CSSProperties = { fontSize:'1.6rem', flexShrink:0 };
const taskBadge: React.CSSProperties = { display:'inline-block', background:'#f2e8d8', color:'#4a3828', fontSize:'0.82rem', fontWeight:600, padding:'4px 10px', borderRadius:4, margin:'3px 4px 3px 0' };
const noteBox: React.CSSProperties = { background:'#f8f4ec', borderLeft:'4px solid #b07d10', borderRadius:'0 4px 4px 0', padding:'12px 16px', marginTop:14, fontSize:'0.88rem', color:'#4a3828', lineHeight:1.75 };
const addCalNote: React.CSSProperties = { background:'#102940', borderRadius:6, padding:'16px 18px', marginTop:6 };
const signupStrip: React.CSSProperties = { background:'#b03060', padding:'48px 20px', textAlign:'center' };
const btnWhite: React.CSSProperties = { display:'block', background:'#fff', color:'#b03060', fontWeight:700, padding:'14px 20px', borderRadius:4, fontSize:'1rem', textAlign:'center', marginBottom:12, textDecoration:'none' };
const footer: React.CSSProperties = { background:'#102940', color:'#a8c0d8', padding:'36px 20px 20px' };
const footerLogo: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'1.4rem', fontWeight:700, color:'#fff', display:'block', marginBottom:10, textDecoration:'none' };
const footerCol: React.CSSProperties = { marginTop:22 };
const footerColH4: React.CSSProperties = { fontSize:'0.7rem', letterSpacing:2, textTransform:'uppercase', color:'#b07d10', fontWeight:700, marginBottom:10 };
const footerColA: React.CSSProperties = { display:'block', fontSize:'0.9rem', color:'#a8c0d8', marginBottom:8, textDecoration:'none' };
const footerBottom: React.CSSProperties = { background:'#102940', borderTop:'1px solid rgba(255,255,255,0.08)', textAlign:'center', padding:'14px 20px', fontSize:'0.82rem', color:'#5a7a9a', fontStyle:'italic' };

export default function Features() {
  return (
    <div style={{ fontFamily:'Georgia,serif', background:'#faf7f2', color:'#2c2010', lineHeight:1.7 }}>
      <nav style={nav}>
        <Link href="/" style={navLogo}>Kasia<span style={{color:'#b03060'}}>Care</span></Link>
        <Link href="/signup" style={navBtn}>Sign Up</Link>
      </nav>

      <div style={{ background:'#102940', padding:'40px 20px 36px' }}>
        <div style={{ fontSize:'0.72rem', letterSpacing:3, textTransform:'uppercase', color:'#b07d10', fontWeight:700, marginBottom:14 }}>What KasiaCare Does</div>
        <h1 style={{ fontFamily:'Georgia,serif', fontSize:'2rem', fontWeight:700, color:'#fff', lineHeight:1.15, marginBottom:14 }}>KasiaCare <em style={{fontStyle:'italic',color:'#b03060'}}>Features</em></h1>
        <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.82)', lineHeight:1.8 }}>Everything in one place — simple enough for anyone to use from day one.</p>
      </div>

      <div style={cat}><h2 style={catH2}>Daily Dashboard</h2><p style={catP}>Your person's entire day — AM to Bedtime</p></div>
      <div style={white}>
        <p style={p}>The Daily Dashboard is the first thing you see when you open KasiaCare — a quick view of where you are today in your care plan. AM Care, Tasks, PM Care, Activities, Appointments, and Reminders — everything organized from morning to night.</p>
        <p style={{...p, marginBottom:0}}>Mark each task done the moment it is complete. Time recorded automatically. Every care team member sees exactly what was done and when. Nothing is assumed. Nothing is forgotten.</p>
      </div>

      <div style={cat}><h2 style={catH2}>Care Calendars</h2><p style={catP}>One for everything you track — no fixed number</p></div>
      <div style={warm}>
        <p style={p}>Any item being tracked in KasiaCare can become a Care Calendar. There is no fixed number. The calendar system grows as the care plan grows. <strong>If you are tracking it — it has a calendar.</strong></p>
        <p style={p}>Every calendar includes its own reminder option.</p>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>📅 Appointment Calendar</h3><p style={featP}>Doctor visits, specialist appointments, check-ups, and any scheduled meeting. Syncs with Google Calendar.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🎯 Activity Calendar</h3><p style={featP}>Outings, social events, recreation, therapy sessions, and daily activities.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🍽 Meal Calendar</h3><p style={featP}>Meal times, meal details, dietary notes, and food preferences.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>💊 Med Box Reminders Calendar</h3><p style={featP}>Six slots matching the physical med box — AM · Breakfast · Lunch · Supper · PM · Bedtime.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>✅ Task Calendar</h3><p style={featP}>Personal care, household tasks, daily routines — with reminders so nothing is forgotten.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>📝 Notes Calendar</h3><p style={featP}>Scheduled notes, observations, and check-ins. The caregiver's own words and voice.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🤝 Service Calendar</h3><p style={featP}>Vendor and service appointments — home aids, transportation, pharmacy, cleaning, and more.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>📋 Schedule Calendar</h3><p style={featP}>Any scheduled item that does not fit another category. Flexible and open.</p></div>
        <div style={featCard}><span style={tagPro}>Pro Plan</span><h3 style={featH3}>👤 Caregiver Hub</h3><p style={featP}>Full caregiver scheduling, shift management, and visit tracking. Caregivers can update and maintain care plan data during their visit.</p></div>
        <div style={addCalNote}><p style={{ fontFamily:'Georgia,serif', fontStyle:'italic', fontSize:'0.95rem', color:'rgba(255,255,255,0.9)', margin:0 }}>➕ Add a Calendar — any new tracking category you add automatically generates its own calendar. Physical Therapy, Speech Therapy, Family Visits, and more. Any category you track gets its own calendar.</p></div>
      </div>

      <div style={cat}><h2 style={catH2}>Med Box Reminders</h2><p style={catP}>Six slots — matching your physical med box</p></div>
      <div style={white}>
        <p style={p}>KasiaCare organizes med reminders around the natural rhythm of the day and meal schedule — because taking medication with food matters.</p>
        <div style={medSlot}><div style={slotIcon}>🌅</div><div><strong style={{color:'#102940',fontSize:'1rem',display:'block',marginBottom:2}}>AM Med</strong><span style={{fontSize:'0.9rem',color:'#4a3828',lineHeight:1.6}}>Early morning — fasting or time-based medications</span></div></div>
        <div style={medSlot}><div style={slotIcon}>🍳</div><div><strong style={{color:'#102940',fontSize:'1rem',display:'block',marginBottom:2}}>Breakfast Med</strong><span style={{fontSize:'0.9rem',color:'#4a3828',lineHeight:1.6}}>Take with breakfast meal</span></div></div>
        <div style={medSlot}><div style={slotIcon}>🥗</div><div><strong style={{color:'#102940',fontSize:'1rem',display:'block',marginBottom:2}}>Lunch Med</strong><span style={{fontSize:'0.9rem',color:'#4a3828',lineHeight:1.6}}>Take with lunch meal</span></div></div>
        <div style={medSlot}><div style={slotIcon}>🍽</div><div><strong style={{color:'#102940',fontSize:'1rem',display:'block',marginBottom:2}}>Supper Med</strong><span style={{fontSize:'0.9rem',color:'#4a3828',lineHeight:1.6}}>Take with evening meal</span></div></div>
        <div style={medSlot}><div style={slotIcon}>🌆</div><div><strong style={{color:'#102940',fontSize:'1rem',display:'block',marginBottom:2}}>PM Med</strong><span style={{fontSize:'0.9rem',color:'#4a3828',lineHeight:1.6}}>Afternoon — time-based, between meals</span></div></div>
        <div style={medSlot}><div style={slotIcon}>🌙</div><div><strong style={{color:'#102940',fontSize:'1rem',display:'block',marginBottom:2}}>Bedtime Med</strong><span style={{fontSize:'0.9rem',color:'#4a3828',lineHeight:1.6}}>End of day medications</span></div></div>
        <p style={{ fontSize:'0.88rem', color:'#7a6a58', fontStyle:'italic', marginTop:14 }}>Note: In the Basic Plan and Pro Plan, Med Box Reminders store time-based reminders with user-written labels only. No medication names or medical data are stored. Detailed medication information and medical data are available in the Med Basic Plan and Med Pro Plan — coming soon. Please <Link href="/contact" style={{color:'#b07d10',fontWeight:700}}>contact us</Link> if you are interested.</p>
      </div>

      <div style={cat}><h2 style={catH2}>Notification System</h2><p style={catP}>Stay informed without notification overload</p></div>
      <div style={warm}>
        <p style={p}>Every notification has its own on/off switch. You choose exactly what you are alerted about — and when. Never everything on. Never everything off. Configured per person, per category.</p>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>💊 Med Box Reminders</h3><p style={featP}>Each of the 6 med slots has its own reminder — on or off independently.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>📅 Appointments</h3><p style={featP}>Same day reminder and 1 hour before.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🎯 Activities</h3><p style={featP}>Reminders for scheduled activities and at-risk activity alerts.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>✅ Tasks</h3><p style={featP}>Task reminders and Update Daily Task alerts.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>📋 Not Updated Alert</h3><p style={featP}>Item has no completion recorded. Clears the moment it is marked done.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🍽 Meals</h3><p style={featP}>Meal time reminders — each meal slot individually toggleable.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🚩 At-Risk Flag</h3><p style={featP}>Manually set on any item that needs special attention.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🛒 Supplies &amp; Orders</h3><p style={featP}>Supply low alerts and order reminders.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>🏆 Goals &amp; Goal Settings</h3><p style={featP}>Goal reached celebrations and milestone progress.</p></div>
      </div>

      <div style={cat}><h2 style={catH2}>Task Types</h2><p style={catP}>Every category has its own task</p></div>
      <div style={white}>
        <p style={p}>Every category of care in KasiaCare has its own task type. The word task ties everything together — and each type tells the caregiver exactly what kind of item needs attention.</p>
        <div style={{ marginBottom:16 }}>
          <span style={taskBadge}>📅 Appointment Task</span>
          <span style={taskBadge}>🎯 Activity Task</span>
          <span style={taskBadge}>💊 Med Task</span>
          <span style={taskBadge}>🤝 Service Task</span>
          <span style={taskBadge}>🍽 Meal Task</span>
          <span style={taskBadge}>👤 Personal Task</span>
          <span style={taskBadge}>📋 Schedule Task</span>
          <span style={taskBadge}>📝 Notes Task</span>
        </div>
        <p style={{...p, marginBottom:0}}>Notes Task is special — it is the only task that IS the note itself. The caregiver's own words, their own voice, their own observations — captured as part of the care record.</p>
      </div>

      <div style={cat}><h2 style={catH2}>Notes</h2><p style={catP}>Add a note to any info update — typed or by voice</p></div>
      <div style={warm}>
        <p style={p}>Any updatable field in KasiaCare offers the option to add a note. When marking an item done the caregiver is asked: <strong>"Would you like to add a note to this info update?"</strong></p>
        <p style={p}>Notes can be typed or recorded by voice — tap the microphone and speak. The recording is transcribed and saved with the update.</p>
        <p style={p}><em>"Nothing is ever without context — and feedback — of our care, of all caregivers."</em></p>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Notes on Any Info Update</h3><p style={featP}>Optional note on every task completion, every update, every item. Simple, never forced.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Voice Notes</h3><p style={featP}>Record a note by voice instead of typing. Transcribed and saved automatically.</p></div>
        <div style={featCard}><span style={tagPro}>Pro Plan</span><h3 style={featH3}>Incident Notes</h3><p style={featP}>Structured incident logging — falls, unusual symptoms, behavioral changes, medical events.</p></div>
      </div>

      <div style={cat}><h2 style={catH2}>All Features</h2><p style={catP}>All Plans</p></div>
      <div style={white}>
        <p style={{ fontSize:'0.95rem', color:'#4a3828', marginBottom:18 }}>Every feature listed below is included in the Basic Plan and carries forward into every plan above it.</p>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Daily Dashboard</h3><p style={featP}>A quick view of where you are today in your care plan — AM Care, Tasks, PM Care, Activities, Appointments, and Reminders.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Tasks</h3><p style={featP}>Everything that needs to happen today, clearly listed and easy to check off in real time.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Activities</h3><p style={featP}>Outings, recreation, therapy sessions, and daily activities — all part of the day.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Schedules</h3><p style={featP}>AM care, PM care, meals, and routines — organized from morning to night.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Appointments</h3><p style={featP}>Doctor visits, specialist appointments, and check-ups — scheduled and visible to the whole care team.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Reminders</h3><p style={featP}>Med Box Reminders, appointment reminders, and task reminders — each with its own on/off switch.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Care Calendars</h3><p style={featP}>One for everything you track. Any task, activity, appointment, or routine can have its own calendar. If you are tracking it — it has a calendar.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Notes</h3><p style={featP}>Attach a note to any task, any update, or any item. Typed or recorded by voice.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Care Plan Sharing</h3><p style={featP}>Role-based access for family members, personal aids, and caregivers. Everyone on the care team sees the same plan.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Supplies &amp; Vendors</h3><p style={featP}>List supply needs and vendor services.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Google Calendar Integration</h3><p style={featP}>Appointments sync to Google Calendar automatically.</p></div>
        <div style={featCard}><span style={tagAll}>All Plans</span><h3 style={featH3}>Printable Care Report</h3><p style={featP}>User selects fields to include, adds a note area, prints or saves as PDF. Identified by initials and state only. Available in Basic and all plans above.</p></div>
        <div style={featCard}><span style={tagPro}>Pro Plan</span><h3 style={featH3}>Caregiver Hub</h3><p style={featP}>Full caregiver scheduling, shift management, and visit tracking. Caregivers can update and maintain care plan data during their visit.</p></div>
        <div style={featCard}><span style={tagPro}>Pro Plan</span><h3 style={featH3}>Extended Dashboard &amp; Reports</h3><p style={featP}>Deeper visibility into the care plan with more detailed reports and care summaries.</p></div>
        <div style={featCard}><span style={tagMed}>Med Basic Plan</span><h3 style={featH3}>Medication Information</h3><p style={featP}>Medication names and basic details added to the care plan alongside daily tasks and routines. Everything in Basic and Pro, plus a medical information layer.</p></div>
        <div style={featCard}><span style={tagMed}>Med Basic Plan</span><h3 style={featH3}>Basic Vital Signs</h3><p style={featP}>A simple layer of basic medical information added alongside the daily care plan. Nothing clinical — just the essentials.</p></div>
        <div style={featCard}><span style={tagMed}>Med Basic Plan</span><h3 style={featH3}>Medical Reporting</h3><p style={featP}>Basic reporting on medical information tracked in the care plan.</p></div>
        <div style={featCard}><span style={tagMedPro}>Med Pro Plan</span><h3 style={featH3}>Agency Caregiver Hub</h3><p style={featP}>Everything in Med Basic, plus an extended Caregiver Hub designed for agency use. The agency operates under one umbrella account with multiple caregivers beneath it.</p></div>
        <div style={featCard}><span style={tagMedPro}>Med Pro Plan</span><h3 style={featH3}>Agency Oversight</h3><p style={featP}>The agency can view and manage all care plans and caregiver activity across their account.</p></div>
        <div style={featCard}><span style={tagMedPro}>Med Pro Plan</span><h3 style={featH3}>AI Trend Viewer</h3><p style={featP}>Monitors basic health patterns and flags items that may need attention.</p></div>
        <div style={featCard}><span style={tagMedPro}>Med Pro Plan</span><h3 style={featH3}>Extended Vital Signs</h3><p style={featP}>Builds on Med Basic vital signs with additional tracking options.</p></div>
        <div style={noteBox}>Med Basic Plan and Med Pro Plan are coming soon — launching when full HIPAA compliance is in place. Please <Link href="/contact" style={{color:'#b07d10',fontWeight:700}}>contact us</Link> if you are interested.</div>
      </div>

      <div style={signupStrip}>
        <h2 style={{ fontFamily:'Georgia,serif', fontSize:'1.9rem', fontWeight:700, color:'#fff', lineHeight:1.2, marginBottom:12 }}>Ready to bring <em>joy</em> back to caregiving?</h2>
        <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.9)', marginBottom:22 }}>Join our waitlist. We will reach out personally when your trial is ready.</p>
        <Link href="/signup" style={btnWhite}>Sign Up Today</Link>
        <p style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.7)' }}>No credit card · No commitment · Your info is never sold.</p>
      </div>

      <div style={footer}>
        <Link href="/" style={footerLogo}>Kasia<span style={{color:'#b03060'}}>Care</span></Link>
        <p style={{ fontSize:'0.9rem', lineHeight:1.7, marginBottom:6 }}>Care Plan Software for Families, Caregivers &amp; Care Teams.</p>
        <p style={{ fontStyle:'italic', color:'#6a8aaa', marginTop:10, fontSize:'0.9rem' }}>"No one receiving care should feel unknown. No one providing care should feel unprepared."</p>
        <div style={footerCol}>
          <h4 style={footerColH4}>Product</h4>
          <Link href="/features" style={footerColA}>Features</Link>
          <Link href="/pricing" style={footerColA}>Subscriptions</Link>
          <Link href="/signup" style={footerColA}>Sign Up</Link>
          <Link href="/angels" style={footerColA}>Angels Program</Link>
        </div>
        <div style={footerCol}>
          <h4 style={footerColH4}>Company</h4>
          <Link href="/about" style={footerColA}>About KasiaCare</Link>
          <Link href="/contact" style={footerColA}>Contact</Link>
          <Link href="/privacy" style={footerColA}>Privacy &amp; AI Policy</Link>
        </div>
      </div>
      <div style={footerBottom}>© 2026 KasiaCare · Founded by Lilia Kuzmicz · Built for Kasia. Built for every family like ours. 💙<br/><span style={{fontSize:'0.72rem', color:'#3a5a7a', letterSpacing:'0.5px'}}>KasiaCare Website v1.2.0 · April 2026 · Features</span></div>
    </div>
  );
}
