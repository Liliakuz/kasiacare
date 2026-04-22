import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

function Cat({ title }: { title: string }) {
  return (
    <div style={{ background: "#102940", padding: "16px 20px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{title}</h2>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: "1px solid #e5d9c9", fontSize: "0.92rem", color: "#4a3828", lineHeight: 1.65 }}>
      <span style={{ color: "#5a8a5a", fontWeight: 700, flexShrink: 0 }}>✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: 64 }}>
      <Nav />
      <main style={{ flex: 1 }}>

        <div style={{ background: "#102940", padding: "40px 20px 36px" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#b07d10", fontWeight: 700, marginBottom: 14 }}>Simple Pricing</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: 12 }}>
            Start free.<br/>
            <em style={{ fontStyle: "italic", color: "#c4667a" }}>Stay as long</em> as you need.
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>14-day free trial on all plans. No credit card required. Cancel anytime.</p>
        </div>

        <Cat title="Basic Plan — $14.99 / month" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
            <CheckItem>Daily Dashboard</CheckItem>
            <CheckItem>Real-Time Checklist</CheckItem>
            <CheckItem>5 Calendars with Reminders</CheckItem>
            <CheckItem>Multiple Caregiver/Family Access</CheckItem>
            <CheckItem>Medication Reminders (time-based)</CheckItem>
            <CheckItem>Google Calendar Sync</CheckItem>
            <CheckItem>Emergency Contacts</CheckItem>
            <CheckItem>Supply Needs</CheckItem>
            <CheckItem>Printable Care Plan PDF</CheckItem>
            <CheckItem>Caregiver Hub — Basic</CheckItem>
            <CheckItem>Email Notifications</CheckItem>
            <CheckItem>Video Tutorials &amp; Email Support</CheckItem>
          </ul>
          <Link href="/free-trial" style={{ display: "block", textAlign: "center", background: "#b03060", color: "#fff", fontWeight: 700, padding: "14px 28px", borderRadius: 4, fontSize: "0.95rem" }}>
            Start Free Trial — Basic
          </Link>
        </div>

        <Cat title="Plus Plan — $34.99 / month — Most Popular" />
        <div style={{ background: "#ffffff", padding: "36px 20px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
            <CheckItem><strong style={{ fontWeight: 700, color: "#102940" }}>Everything in Basic</strong></CheckItem>
            <CheckItem>Caregiver Calendar (6th calendar)</CheckItem>
            <CheckItem>Full Caregiver Hub + Visit Scheduling</CheckItem>
            <CheckItem>Incident Notes</CheckItem>
            <CheckItem>Goal Progress</CheckItem>
            <CheckItem>Extended Dashboard &amp; Detailed Reports</CheckItem>
            <CheckItem>Extended Notifications (Text &amp; Email)</CheckItem>
            <CheckItem>Data Input Guided Wizard</CheckItem>
            <CheckItem>Phone Support</CheckItem>
            <CheckItem>One-on-One Video Session included</CheckItem>
            <CheckItem>Priority Support</CheckItem>
          </ul>
          <Link href="/free-trial" style={{ display: "block", textAlign: "center", background: "#b03060", color: "#fff", fontWeight: 700, padding: "14px 28px", borderRadius: 4, fontSize: "0.95rem" }}>
            Start Free Trial — Plus
          </Link>
        </div>

        <Cat title="A La Carte — Personal Support" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 20 }}>Add any of these human-touch services to your plan. Delivered by KasiaCare Angels at our standard rate of $35/hour.</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
            <CheckItem>Video Onboarding Session — $45</CheckItem>
            <CheckItem>Additional Video Training — $45/session</CheckItem>
            <CheckItem>Care Plan Data Input — $79–$99</CheckItem>
            <CheckItem>Scheduling Assistance — $45–$75</CheckItem>
            <CheckItem>First Month Care Plan Setup — $149–$175</CheckItem>
            <CheckItem>3-Month Care Plan Data Input Coaching — $399</CheckItem>
          </ul>
          <Link href="#ala-carte-detail" style={{ display: "block", textAlign: "center", background: "#b03060", color: "#fff", fontWeight: 700, padding: "14px 28px", borderRadius: 4, fontSize: "0.95rem" }}>
            Learn More About Human Touch Services
          </Link>
        </div>

        <Cat title="Human Touch Services — Delivered by KasiaCare Angels" />
        <div id="ala-carte-detail" style={{ background: "#ffffff", padding: "36px 20px" }}>
          {[
            ["$45", "Video Onboarding Session", "One-on-one session via Zoom or Google Meet to walk through the app, answer questions, and get started."],
            ["$45", "Additional Video Training", "Buy time for focused one-on-one training on any feature or topic."],
            ["$79–$99", "Care Plan Data Input Service", "A KasiaCare Angel helps enter and set up the full care plan for you."],
            ["$45–$75", "Scheduling Assistance", "Help setting up schedules, calendars, and recurring tasks."],
            ["$149–$175", "First Month Care Plan Setup", "Complete assisted setup to get everything in order from day one."],
            ["$399", "3-Month Care Plan Data Input Coaching Program", "Regular check-ins to review progress, update the care plan, and keep caregivers on track. Like having a personal care plan coach."],
          ].map(([price, title, body]) => (
            <div key={title} style={{ borderBottom: "1px solid #e5d9c9", padding: "16px 0" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#102940", marginBottom: 4 }}>{price}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.02rem", fontWeight: 700, color: "#102940", margin: "0 0 6px" }}>{title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#4a3828", lineHeight: 1.75, margin: 0 }}>{body}</p>
            </div>
          ))}
          <p style={{ marginTop: 20, fontSize: "0.85rem", color: "#6b7280", fontStyle: "italic", lineHeight: 1.65 }}>
            Video sessions available via Zoom or Google Meet — your choice.
          </p>
        </div>

        <Cat title="Frequently Asked Questions" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          {[
            ["Do I need a credit card to start the free trial?", "No. Your 14-day free trial begins the moment you sign up — no credit card required. You only enter payment information if you choose to continue after the trial."],
            ["Can more than one person access the care plan?", "Yes. Multiple family members and caregivers can access the same care plan in both Basic and Plus. Everyone sees the same information in real time."],
            ["Does KasiaCare store medical information?", "Version 1 does not store any personal health information (PHI) — no medication names, dosages, diagnoses, or vital signs. Medication reminders are time-based with user-written labels only. Medical data features are planned for a future version."],
            ["Can I cancel anytime?", "Yes. Cancel anytime with no penalty. You will retain access through the end of your billing period."],
            ["What video platform do you use for A La Carte sessions?", "We support both Zoom and Google Meet. You choose whichever platform you are most comfortable with when booking your session."],
            ["What is a KasiaCare Angel?", "KasiaCare Angels are our volunteer and service team — named in honor of Kasia. They deliver A La Carte services, help families get started, and support the KasiaCare community."],
          ].map(([q, a]) => (
            <div key={q} style={{ borderBottom: "1px solid #d8c9b0", padding: "18px 0" }}>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#102940", marginBottom: 8, margin: "0 0 8px" }}>{q}</h3>
              <p style={{ fontSize: "0.9rem", color: "#4a3828", lineHeight: 1.8, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#b03060", padding: "48px 20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.9rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
            Ready to bring <em style={{ fontStyle: "italic" }}>joy</em> back to caregiving?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", marginBottom: 22 }}>Start your free 14-day trial. No credit card required.</p>
          <Link href="/free-trial" style={{ display: "inline-block", background: "#fff", color: "#b03060", fontWeight: 700, padding: "14px 32px", borderRadius: 4, fontSize: "1rem" }}>
            Sign Up for a Free Trial
          </Link>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", marginTop: 12 }}>All plans include a 14-day free trial. Annual billing saves 15%.</p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
