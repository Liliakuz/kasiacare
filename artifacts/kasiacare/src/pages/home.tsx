import { Link } from "wouter";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerStrip } from "@/components/FlowerStrip";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Nav />
      
      <main className="flex-1">
        {/* HERO */}
        <section className="min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-16 py-16 relative overflow-hidden bg-cream">
          <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full bg-secondary z-0" />
          
          <div className="relative z-10 lg:pr-16">
            <div className="text-xs tracking-[2.5px] uppercase text-accent font-medium mb-5">
              Care Plans for Every Caregiver
            </div>
            <h1 className="font-serif text-4xl md:text-[clamp(2.8em,5vw,4.2em)] font-light leading-[1.12] text-primary mb-6">
              Caring is <em className="italic text-accent">easier</em><br/>when everyone<br/>knows the plan.
            </h1>
            <p className="text-lg leading-[1.75] text-muted-foreground mb-9 max-w-md">
              KasiaCare gives families, personal aids, and caregivers one simple, shared place to build and follow a real-time care plan — wherever care happens.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link href="/contact" className="bg-primary text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-[#2c6fad] transition-colors">
                Sign Up for Your Free Trial
              </Link>
              <Link href="/features" className="bg-transparent text-primary px-8 py-3.5 rounded border border-primary text-sm font-medium hover:bg-primary hover:text-white transition-all">
                See How It Works
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex justify-center items-center min-h-[520px]">
            <div className="relative w-[340px] h-[420px]">
              <div className="w-[300px] h-[380px] bg-[#e0d5c5]/30 rounded absolute top-5 left-5 shadow-[20px_20px_60px_rgba(26,58,92,0.15)] flex items-center justify-center overflow-hidden">
                <svg className="w-24 h-24 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <motion.div 
                className="absolute -top-12 -right-15 text-7xl select-none"
                animate={{ y: [0, -12, 0], rotate: [-3, 2, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >🌸</motion.div>
              <motion.div 
                className="absolute -bottom-8 -left-12 text-6xl select-none"
                animate={{ y: [0, -8, 0], rotate: [5, -2, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >🪷</motion.div>
              <div className="absolute -bottom-16 right-0 font-serif italic text-[0.95em] text-muted-foreground text-right leading-relaxed">
                Kasia.<br/>
                <span className="text-[0.85em] opacity-70">KAH-shah · 1938–2023</span>
              </div>
            </div>
          </div>
        </section>

        <FlowerStrip />

        {/* MISSION */}
        <section className="bg-primary text-white px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <div className="text-xs tracking-[2px] uppercase text-[#c8952a] mb-2.5">Our Mission</div>
            <div className="font-serif text-3xl lg:text-4xl font-light leading-[1.25] text-white">
              Care with<br/>clarity.<br/>Care with<br/>joy.
            </div>
          </div>
          <p className="text-base leading-[1.9] text-[#c8d8e8]">
            KasiaCare exists to improve the quality of life and independence of every person receiving care — by giving caregivers, families, individuals, and care teams <strong className="text-white font-semibold">one simple, shared place</strong> to build, follow, and carry their care plan wherever life takes them.<br/><br/>
            When caregivers are confident and prepared, they walk through the door with joy — and that joy is felt by the person they are there to love and serve. <strong className="text-white font-semibold">KasiaCare makes that possible.</strong>
          </p>
        </section>

        {/* WHO IT'S FOR */}
        <section className="px-6 lg:px-16 py-20 bg-secondary">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[2.5px] uppercase text-accent font-medium mb-3.5">Who It's For</div>
            <h2 className="font-serif text-3xl lg:text-[clamp(2em,3.5vw,2.8em)] font-light text-primary leading-[1.2]">
              Built for every person<br/>in the circle of care.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -4 }} className="bg-cream p-8 rounded shadow-[0_4px_20px_rgba(26,58,92,0.06)] hover:shadow-[0_12px_36px_rgba(26,58,92,0.1)] transition-all">
              <div className="text-3xl mb-3.5">💙</div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2.5">Family Caregivers</h3>
              <p className="text-sm leading-[1.8] text-muted-foreground">Adult children, spouses, and siblings coordinating care for a loved one — knowing what was done, what's needed, and who's coming next.</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="bg-cream p-8 rounded shadow-[0_4px_20px_rgba(26,58,92,0.06)] hover:shadow-[0_12px_36px_rgba(26,58,92,0.1)] transition-all">
              <div className="text-3xl mb-3.5">🌿</div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2.5">Individuals Managing Their Own Care</h3>
              <p className="text-sm leading-[1.8] text-muted-foreground">Disabled and elderly individuals building and following their own care plan — maintaining independence and giving loved ones peace of mind.</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="bg-cream p-8 rounded shadow-[0_4px_20px_rgba(26,58,92,0.06)] hover:shadow-[0_12px_36px_rgba(26,58,92,0.1)] transition-all">
              <div className="text-3xl mb-3.5">🤝</div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2.5">Personal Aids &amp; Caregivers</h3>
              <p className="text-sm leading-[1.8] text-muted-foreground">Caregivers who walk through the door ready — knowing the person's day, their preferences, and exactly what needs to happen.</p>
            </motion.div>
          </div>
        </section>

        <FlowerStrip />

        {/* FEATURES PREVIEW */}
        <section className="px-6 lg:px-16 py-20 bg-cream">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[2.5px] uppercase text-accent font-medium mb-3.5">Features</div>
            <h2 className="font-serif text-3xl lg:text-[clamp(2em,3.5vw,2.8em)] font-light text-primary leading-[1.2]">
              Everything in one place.<br/>Simple enough for anyone.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Daily Dashboard</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">AM Care, Daily Tasks, PM Care, Activities, Appointments, and Reminders — your person's entire day, the moment you log in.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Real-Time Checklist</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Check off each task the moment it's completed. Time automatically recorded. Every care team member sees exactly what was done and when.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Six Calendars</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Meals, Personal Care, Tasks, Medications, Activities, and Appointments — each with its own reminder option.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Multiple Caregiver Access</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Family members, personal aids, and caregivers all share the same care plan — everyone on the same page, all the time.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Google Calendar Sync</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Sync appointments to your personal Google Calendar. Everything in one place, no missed appointments.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#eef5fb] text-primary mb-3">Plus</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Extended Dashboard &amp; Reports</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Goal progress, incident notes, detailed care reports, and deeper insight into your loved one's care journey.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/features" className="bg-primary text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-[#2c6fad] transition-colors inline-block">
              See All Features
            </Link>
          </div>
        </section>

        {/* SIGNUP CTA */}
        <section className="bg-accent px-6 lg:px-16 py-20 text-center">
          <h2 className="font-serif text-4xl lg:text-[2.6em] font-light text-white leading-[1.2] mb-4">
            Ready to bring <em className="italic">joy</em><br/>back to caregiving?
          </h2>
          <p className="text-[0.97em] text-white/85 mb-8">
            Start your free 14-day trial. No credit card required. Cancel anytime.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-5.5 py-3 border-none rounded text-sm w-72 outline-none text-foreground" 
            />
            <Link href="/free-trial" className="px-7 py-3 bg-primary text-white border-none rounded text-sm font-medium hover:bg-[#0f2540] transition-colors cursor-pointer">
              Sign Up for a Free Trial
            </Link>
          </div>
          <p className="mt-3 text-[0.78em] text-white/70">
            By signing up you agree to our Privacy Policy. KasiaCare Version 1 does not store medical data.
          </p>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
