import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerStrip } from "@/components/FlowerStrip";
import { Link } from "wouter";

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-cream">
      <Nav />
      
      <main className="flex-1">
        <div className="bg-secondary px-6 md:px-16 pt-[110px] pb-[70px]">
          <div className="text-base md:text-xs tracking-[2.5px] uppercase text-accent-label font-medium mb-4">
            Features
          </div>
          <h1 className="font-serif text-4xl md:text-[clamp(2.4em,5vw,3.6em)] font-light leading-[1.12] text-primary mb-4.5">
            Everything in one place.<br/>
            <em className="italic text-accent">Simple enough</em> for anyone.
          </h1>
          <p className="text-base leading-[1.8] text-muted-foreground max-w-[560px]">
            KasiaCare is built for the person who is tired, busy, and just needs to know what to do next. Every feature is designed to reduce friction and add joy to caregiving.
          </p>
        </div>

        <FlowerStrip />

        <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20">
          
          <div className="bg-primary text-white p-10 md:p-14 rounded-md mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <div className="text-base md:text-[0.72em] tracking-[2px] uppercase text-[#c8952a] mb-2.5">Available in All Tiers</div>
              <h2 className="font-serif text-[2.2em] font-light leading-[1.2] text-white mb-4.5">The Daily Dashboard</h2>
              <p className="text-[0.95em] leading-[1.85] text-[#c8d8e8] mb-3.5">
                The heartbeat of KasiaCare. The moment you log in, you see your person's entire day — clearly, completely, and without searching. Confident caregivers walk through the door with joy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="bg-white/5 border border-white/10 p-4 rounded">
                <h4 className="text-[0.82em] font-semibold text-white mb-1">☀️ AM Care</h4>
                <p className="text-[0.78em] text-[#8aaac8] leading-tight">Morning tasks and care schedule</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded">
                <h4 className="text-[0.82em] font-semibold text-white mb-1">✅ Daily Tasks</h4>
                <p className="text-[0.78em] text-[#8aaac8] leading-tight">Everything that needs to happen today</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded">
                <h4 className="text-[0.82em] font-semibold text-white mb-1">🌙 PM Care</h4>
                <p className="text-[0.78em] text-[#8aaac8] leading-tight">Afternoon and evening schedule</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded">
                <h4 className="text-[0.82em] font-semibold text-white mb-1">🎯 Activities</h4>
                <p className="text-[0.78em] text-[#8aaac8] leading-tight">Activities planned for the day</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded">
                <h4 className="text-[0.82em] font-semibold text-white mb-1">📅 Appointments</h4>
                <p className="text-[0.78em] text-[#8aaac8] leading-tight">Any scheduled appointments</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded">
                <h4 className="text-[0.82em] font-semibold text-white mb-1">🔔 Reminders</h4>
                <p className="text-[0.78em] text-[#8aaac8] leading-tight">Everything you need to know at login</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="text-base md:text-[0.72em] tracking-[2.5px] uppercase text-accent-label font-medium mb-3.5">Core Features</div>
            <h2 className="font-serif text-[clamp(1.8em,3vw,2.6em)] font-light text-primary leading-[1.2]">Available in Basic &amp; Plus</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Real-Time Checklist</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Each task is checked off at the moment it's completed — not at the end of the day. Time automatically recorded. Every care team member sees what was done and when.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Multiple Caregiver/Family Access</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Share the care plan with every family member and caregiver. Everyone on the same page. No more phone calls asking "did she eat today?"</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Medication Reminders</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Time-based alerts for medications. Set the time and your own label. Simple, clear, and never missed. No medical data stored in Version 1.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Google Calendar Sync</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Sync appointments to your personal Google Calendar — keeping everything in one place. Available in Basic and Plus at no extra charge.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Emergency Contacts</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Store emergency contact information — name, phone, relationship, and priority order. Always accessible. Always ready.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Supply Needs</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Note personal supplies, medical equipment, and service vendor information. Never run out of what your loved one needs.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Printable Care Plan</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Generate a printable care plan summary to bring to any doctor's visit, appointment, or hospital stay.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Caregiver Hub — Basic</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Profile and daily notes for each caregiver — a simple record of who provided care and what happened during each visit.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#e8f5e9] text-sage mb-3">All Tiers</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Email Notifications</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Email reminders for appointments and medication times. Stay informed without having to check the app constantly.</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="text-base md:text-[0.72em] tracking-[2.5px] uppercase text-accent-label font-medium mb-3.5">Plus Features</div>
            <h2 className="font-serif text-[clamp(1.8em,3vw,2.6em)] font-light text-primary leading-[1.2]">Everything in Basic, plus:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#eef5fb] text-primary mb-3">Plus</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Caregiver Hub — Full</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Full caregiver profile, visit scheduling, daily notes, and a real-time checklist — with timestamps visible to the entire care team.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#eef5fb] text-primary mb-3">Plus</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Incident Notes</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Record medication changes, unusual symptoms, behavioral changes, or medical events. Share with doctors at any appointment.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#eef5fb] text-primary mb-3">Plus</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Goal Progress</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Document care goals and view progress over time. Know what you are working toward and how far you have come.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#eef5fb] text-primary mb-3">Plus</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Extended Dashboard</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Goal progress summaries, detailed care reports, and a deeper view of your loved one's overall care journey.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#eef5fb] text-primary mb-3">Plus</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Extended Notifications</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">Text and email alerts for appointments and medication reminders — so the whole care team stays informed.</p>
            </div>
            <div className="p-7 border border-border rounded bg-white hover:border-accent hover:shadow-[0_8px_28px_rgba(196,102,122,0.08)] transition-all">
              <span className="inline-block text-[0.68em] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#eef5fb] text-primary mb-3">Plus</span>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">Data Input Guided Wizard</h3>
              <p className="text-[0.85em] leading-[1.75] text-muted-foreground">A step-by-step tool that guides you through entering your care plan information — making setup simple and complete.</p>
            </div>
          </div>
        </div>

        <FlowerStrip />

        <section aria-label="Calendars" className="bg-secondary px-6 md:px-16 py-16 md:py-20">
          <div className="text-center mb-12">
            <div className="text-base md:text-[0.72em] tracking-[2.5px] uppercase text-accent-label font-medium mb-3.5">Calendars</div>
            <h2 className="font-serif text-[clamp(1.8em,3vw,2.6em)] font-light text-primary leading-[1.2]">Every calendar has a reminder option.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
            <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)]">
              <div className="w-2.5 h-2.5 rounded-full bg-accent mb-3"></div>
              <h3 className="font-serif text-[1.1em] font-semibold text-primary mb-1.5">Meals Calendar</h3>
              <p className="text-[0.83em] leading-[1.7] text-muted-foreground mb-2">Meal times, details, and notes for every meal of the day.</p>
              <span className="text-[0.75em] text-accent font-medium mt-2 block">🔔 Reminder option included</span>
            </div>
            <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)]">
              <div className="w-2.5 h-2.5 rounded-full bg-sage mb-3"></div>
              <h3 className="font-serif text-[1.1em] font-semibold text-primary mb-1.5">Personal Care Calendar</h3>
              <p className="text-[0.83em] leading-[1.7] text-muted-foreground mb-2">Daily personal care tasks and schedule — bathing, grooming, dressing, and more.</p>
              <span className="text-[0.75em] text-accent font-medium mt-2 block">🔔 Reminder option included</span>
            </div>
            <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2c6fad] mb-3"></div>
              <h3 className="font-serif text-[1.1em] font-semibold text-primary mb-1.5">Tasks Calendar</h3>
              <p className="text-[0.83em] leading-[1.7] text-muted-foreground mb-2">Every task for the day, assigned, scheduled, and tracked in real time.</p>
              <span className="text-[0.75em] text-accent font-medium mt-2 block">🔔 Reminder option included</span>
            </div>
            <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#c8952a] mb-3"></div>
              <h3 className="font-serif text-[1.1em] font-semibold text-primary mb-1.5">Medication Calendar</h3>
              <p className="text-[0.83em] leading-[1.7] text-muted-foreground mb-2">Medication reminder timeline — times and user labels only. No medical data stored in Version 1.</p>
              <span className="text-[0.75em] text-accent font-medium mt-2 block">🔔 Reminder option included</span>
            </div>
            <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#a855c8] mb-3"></div>
              <h3 className="font-serif text-[1.1em] font-semibold text-primary mb-1.5">Activities Calendar</h3>
              <p className="text-[0.83em] leading-[1.7] text-muted-foreground mb-2">Activities, outings, family visits, and entertainment planned for the day.</p>
              <span className="text-[0.75em] text-accent font-medium mt-2 block">🔔 Reminder option included</span>
            </div>
            <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] border border-primary">
              <div className="w-2.5 h-2.5 rounded-full bg-primary mb-3"></div>
              <h3 className="font-serif text-[1.1em] font-semibold text-primary mb-1.5">Caregiver Calendar <span className="text-[0.72em] bg-[#eef5fb] text-primary px-1.5 py-0.5 rounded font-bold uppercase ml-1">Plus</span></h3>
              <p className="text-[0.83em] leading-[1.7] text-muted-foreground mb-2">Caregiver visit scheduling and shift management with the full care team.</p>
              <span className="text-[0.75em] text-accent font-medium mt-2 block">🔔 Reminder option included</span>
            </div>
          </div>
        </section>

        <section aria-label="Start free trial" className="bg-accent px-6 md:px-16 py-16 text-center">
          <h2 className="font-serif text-4xl md:text-[2.2em] font-light text-white mb-3.5">
            Ready to start?
          </h2>
          <p className="text-white/85 mb-7">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/pricing" className="bg-white text-accent px-8 py-3 rounded text-[0.9em] font-semibold hover:bg-primary hover:text-white transition-all">
              View Pricing
            </Link>
            <Link href="/free-trial" className="bg-transparent text-white px-8 py-3 rounded border border-white/50 text-[0.9em] hover:bg-white/10 transition-all">
              Sign Up for a Free Trial
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
