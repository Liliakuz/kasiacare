import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerStrip } from "@/components/FlowerStrip";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-cream">
      <Nav />
      
      <main className="flex-1">
        <div className="bg-primary px-6 md:px-16 pt-[110px] pb-[70px] text-center">
          <div className="text-[0.72em] tracking-[2.5px] uppercase text-[#c8952a] font-medium mb-4 ">
            Simple Pricing
          </div>
          <h1 className="font-serif text-4xl md:text-[clamp(2.4em,5vw,3.4em)] font-light leading-[1.12] text-white mb-4.5">
            Start free.<br/>
            <em className="italic text-accent">Stay as long</em> as you need.
          </h1>
          <p className="text-base leading-[1.8] text-[#8aaac8] max-w-[500px] mx-auto">
            14-day free trial on all plans. No credit card required. Cancel anytime.
          </p>
        </div>

        <FlowerStrip />

        <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            
            {/* Basic Plan */}
            <div className="rounded-md overflow-hidden shadow-[0_4px_24px_rgba(26,58,92,0.08)] bg-white flex flex-col">
              <div className="p-7 pb-5 bg-secondary">
                <div className="text-[0.72em] tracking-[2px] uppercase font-bold text-accent mb-2">Basic</div>
                <div className="font-serif text-[3.2em] font-light leading-none mb-1 text-primary"><sup>$</sup>14<span className="text-[0.35em] align-super">.99</span></div>
                <div className="text-[0.78em] text-muted-foreground">per month</div>
              </div>
              <div className="p-7 pt-6 flex-1 flex flex-col">
                <ul className="list-none mb-6 flex-1">
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Daily Dashboard</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Real-Time Checklist</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">5 Calendars with Reminders</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Multiple Caregiver/Family Access</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Medication Reminders (time-based)</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Google Calendar Sync</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Emergency Contacts</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Supply Needs</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Printable Care Plan PDF</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Caregiver Hub — Basic</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Email Notifications</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Video Tutorials &amp; Email Support</li>
                </ul>
                <Link href="/contact" className="block text-center py-3 rounded text-[0.88em] font-semibold border-1.5 border-primary text-primary hover:bg-primary hover:text-white transition-all mt-auto">
                  Sign Up for a Free Trial
                </Link>
              </div>
            </div>

            {/* Plus Plan */}
            <div className="rounded-md overflow-hidden shadow-[0_4px_24px_rgba(26,58,92,0.08)] bg-white flex flex-col border border-primary md:-mt-4 md:mb-4">
              <div className="p-7 pb-5 bg-primary">
                <div className="text-[0.72em] tracking-[2px] uppercase font-bold text-[#c8952a] mb-2">Plus — Most Popular</div>
                <div className="font-serif text-[3.2em] font-light leading-none mb-1 text-white"><sup>$</sup>34<span className="text-[0.35em] align-super">.99</span></div>
                <div className="text-[0.78em] text-[#8aaac8]">per month</div>
              </div>
              <div className="p-7 pt-6 flex-1 flex flex-col">
                <ul className="list-none mb-6 flex-1">
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5"><strong className="font-semibold text-foreground">Everything in Basic</strong></li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Caregiver Calendar (6th calendar)</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Full Caregiver Hub + Visit Scheduling</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Incident Notes</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Goal Progress</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Extended Dashboard &amp; Detailed Reports</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Extended Notifications (Text &amp; Email)</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Data Input Guided Wizard</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Phone Support</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">One-on-One Video Session included</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Priority Support</li>
                </ul>
                <Link href="/contact" className="block text-center py-3 rounded text-[0.88em] font-semibold bg-primary text-white hover:bg-[#2c6fad] transition-all mt-auto">
                  Sign Up for a Free Trial
                </Link>
              </div>
            </div>

            {/* A La Carte */}
            <div className="rounded-md overflow-hidden shadow-[0_4px_24px_rgba(26,58,92,0.08)] bg-white flex flex-col">
              <div className="p-7 pb-5 bg-secondary">
                <div className="text-[0.72em] tracking-[2px] uppercase font-bold text-sage mb-2">A La Carte</div>
                <div className="font-serif text-[2em] font-semibold leading-[1.2] text-primary pt-2">Personal<br/>Support</div>
                <div className="text-[0.78em] text-muted-foreground mt-2">add to any plan</div>
              </div>
              <div className="p-7 pt-6 flex-1 flex flex-col">
                <ul className="list-none mb-6 flex-1">
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Video Onboarding Session — $45</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Additional Video Training — $45/session</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Care Plan Data Input — $79–$99</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">Scheduling Assistance — $45–$75</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">First Month Care Plan Setup — $149–$175</li>
                  <li className="text-[0.86em] leading-[1.7] text-muted-foreground py-1.5 border-b border-border flex items-start gap-2 before:content-['✓'] before:text-sage before:font-bold before:flex-shrink-0 before:mt-0.5">3-Month Care Plan Data Input Coaching — $399</li>
                </ul>
                <Link href="#a-la-carte" className="block text-center py-3 rounded text-[0.88em] font-semibold bg-[#c8952a] text-white hover:bg-[#a87520] transition-all mt-auto">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
          <p className="text-center text-[0.82em] text-muted-foreground mt-4">
            All plans include a 14-day free trial. Annual billing saves 15%. &nbsp;·&nbsp; KasiaCare Version 1 does not store medical data.
          </p>
        </div>

        <section id="a-la-carte" className="bg-secondary px-6 md:px-16 py-16 md:py-20">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center mb-12">
              <div className="text-[0.72em] tracking-[2.5px] uppercase text-accent font-medium mb-3.5">A La Carte — Human Touch Services</div>
              <div className="font-serif text-[clamp(1.8em,3vw,2.6em)] font-light text-primary leading-[1.2]">Premium support,<br/>delivered by KasiaCare Angels.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
              <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5 items-start">
                <div className="font-serif text-[1.6em] font-semibold text-primary whitespace-nowrap min-w-[80px]">$45</div>
                <div>
                  <h3 className="font-serif text-[1.05em] font-semibold text-primary mb-1">Video Onboarding Session</h3>
                  <p className="text-[0.83em] leading-[1.65] text-muted-foreground">One-on-one session via Zoom or Google Meet to walk through the app, answer questions, and get started.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5 items-start">
                <div className="font-serif text-[1.6em] font-semibold text-primary whitespace-nowrap min-w-[80px]">$45</div>
                <div>
                  <h3 className="font-serif text-[1.05em] font-semibold text-primary mb-1">Additional Video Training</h3>
                  <p className="text-[0.83em] leading-[1.65] text-muted-foreground">Buy time for focused one-on-one training on any feature or topic.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5 items-start">
                <div className="font-serif text-[1.6em] font-semibold text-primary whitespace-nowrap min-w-[80px]">$79–$99</div>
                <div>
                  <h3 className="font-serif text-[1.05em] font-semibold text-primary mb-1">Care Plan Data Input Service</h3>
                  <p className="text-[0.83em] leading-[1.65] text-muted-foreground">A KasiaCare Angel helps enter and set up the full care plan for you.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5 items-start">
                <div className="font-serif text-[1.6em] font-semibold text-primary whitespace-nowrap min-w-[80px]">$45–$75</div>
                <div>
                  <h3 className="font-serif text-[1.05em] font-semibold text-primary mb-1">Scheduling Assistance</h3>
                  <p className="text-[0.83em] leading-[1.65] text-muted-foreground">Help setting up schedules, calendars, and recurring tasks.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5 items-start">
                <div className="font-serif text-[1.6em] font-semibold text-primary whitespace-nowrap min-w-[80px]">$149–$175</div>
                <div>
                  <h3 className="font-serif text-[1.05em] font-semibold text-primary mb-1">First Month Care Plan Setup</h3>
                  <p className="text-[0.83em] leading-[1.65] text-muted-foreground">Complete assisted setup to get everything in order from day one.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5 items-start">
                <div className="font-serif text-[1.6em] font-semibold text-primary whitespace-nowrap min-w-[80px]">$399</div>
                <div>
                  <h3 className="font-serif text-[1.05em] font-semibold text-primary mb-1">3-Month Care Plan Data Input Coaching Program</h3>
                  <p className="text-[0.83em] leading-[1.65] text-muted-foreground">Regular check-ins to review progress, update the care plan, and keep caregivers on track. Like having a personal care plan coach.</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-7 text-[0.86em] text-muted-foreground italic">
              All A La Carte services are delivered by KasiaCare Angels at our standard rate of $35/hour. Video sessions available via Zoom or Google Meet — your choice.
            </p>
          </div>
        </section>

        <FlowerStrip />

        <section className="px-6 md:px-16 py-16 md:py-20 bg-cream">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-12">
              <div className="text-[0.72em] tracking-[2.5px] uppercase text-accent font-medium mb-3.5">Questions</div>
              <div className="font-serif text-[clamp(1.8em,3vw,2.6em)] font-light text-primary leading-[1.2]">Frequently Asked</div>
            </div>
            
            <div className="border-b border-border py-5">
              <div className="font-serif text-[1.15em] font-semibold text-primary mb-2">Do I need a credit card to start the free trial?</div>
              <div className="text-[0.9em] leading-[1.8] text-muted-foreground">No. Your 14-day free trial begins the moment you sign up — no credit card required. You only enter payment information if you choose to continue after the trial.</div>
            </div>
            <div className="border-b border-border py-5">
              <div className="font-serif text-[1.15em] font-semibold text-primary mb-2">Can more than one person access the care plan?</div>
              <div className="text-[0.9em] leading-[1.8] text-muted-foreground">Yes. Multiple family members and caregivers can access the same care plan in both Basic and Plus. Everyone sees the same information in real time.</div>
            </div>
            <div className="border-b border-border py-5">
              <div className="font-serif text-[1.15em] font-semibold text-primary mb-2">Does KasiaCare store medical information?</div>
              <div className="text-[0.9em] leading-[1.8] text-muted-foreground">Version 1 does not store any personal health information (PHI) — no medication names, dosages, diagnoses, or vital signs. Medication reminders are time-based with user-written labels only. Medical data features are planned for a future version.</div>
            </div>
            <div className="border-b border-border py-5">
              <div className="font-serif text-[1.15em] font-semibold text-primary mb-2">Can I cancel anytime?</div>
              <div className="text-[0.9em] leading-[1.8] text-muted-foreground">Yes. Cancel anytime with no penalty. You will retain access through the end of your billing period.</div>
            </div>
            <div className="border-b border-border py-5">
              <div className="font-serif text-[1.15em] font-semibold text-primary mb-2">What video platform do you use for A La Carte sessions?</div>
              <div className="text-[0.9em] leading-[1.8] text-muted-foreground">We support both Zoom and Google Meet. You choose whichever platform you are most comfortable with when booking your session.</div>
            </div>
            <div className="border-b border-border py-5">
              <div className="font-serif text-[1.15em] font-semibold text-primary mb-2">What is a KasiaCare Angel?</div>
              <div className="text-[0.9em] leading-[1.8] text-muted-foreground">KasiaCare Angels are our volunteer and service team — named in honor of Kasia. They deliver A La Carte services, help families get started, and support the KasiaCare community. <Link href="/angels" className="text-accent hover:underline">Learn more about the Angels program.</Link></div>
            </div>

          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
