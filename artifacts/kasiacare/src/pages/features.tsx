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

const featureCard = (title: string, body: string, bg: string, border: string) => (
  <div key={title} style={{ background: bg, borderRadius: 6, padding: "18px 20px", borderLeft: `5px solid ${border}`, marginBottom: 12 }}>
    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#102940", marginBottom: 6 }}>{title}</h3>
    <p style={{ fontSize: "0.92rem", color: "#4a3828", lineHeight: 1.8, margin: 0 }}>{body}</p>
  </div>
);

export default function Features() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: 64 }}>
      <Nav />
      <main style={{ flex: 1 }}>

        <div style={{ background: "#102940", padding: "40px 20px 36px" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#b07d10", fontWeight: 700, marginBottom: 14 }}>Care Plan Software</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: 12 }}>
            Everything in one place.<br/>
            <em style={{ fontStyle: "italic", color: "#c4667a" }}>Simple enough</em> for anyone.
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>Built for the person who is tired, busy, and just needs to know what to do next. Every feature reduces friction and adds joy to caregiving.</p>
        </div>

        <Cat title="The Daily Dashboard — Available in All Tiers" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 20 }}>
            The heartbeat of KasiaCare. The moment you log in, you see your person's entire day — clearly, completely, and without searching. Confident caregivers walk through the door with joy.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              ["☀️", "AM Care", "Morning tasks and care schedule"],
              ["✅", "Daily Tasks", "Everything that needs to happen today"],
              ["🌙", "PM Care", "Afternoon and evening schedule"],
              ["🎯", "Activities", "Activities planned for the day"],
              ["📅", "Appointments", "Any scheduled appointments"],
              ["🔔", "Reminders", "Everything you need to know at login"],
            ].map(([icon, label, desc]) => (
              <li key={label} style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: "1px solid #d8c9b0" }}>
                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{icon}</span>
                <span>
                  <span style={{ display: "block", fontWeight: 700, fontSize: "0.92rem", color: "#102940" }}>{label}</span>
                  <span style={{ display: "block", fontSize: "0.86rem", color: "#6b7280", marginTop: 2, lineHeight: 1.6 }}>{desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Cat title="Core Features — Available in Basic & Plus" />
        <div style={{ background: "#ffffff", padding: "36px 20px" }}>
          {[
            ["Real-Time Checklist", "Each task is checked off at the moment it's completed — not at the end of the day. Time automatically recorded. Every care team member sees what was done and when."],
            ["Multiple Caregiver/Family Access", "Share the care plan with every family member and caregiver. Everyone on the same page. No more phone calls asking \"did she eat today?\""],
            ["Medication Reminders", "Time-based alerts for medications. Set the time and your own label. Simple, clear, and never missed. No medical data stored in Version 1."],
            ["Google Calendar Sync", "Sync appointments to your personal Google Calendar — keeping everything in one place. Available in Basic and Plus at no extra charge."],
            ["Emergency Contacts", "Store emergency contact information — name, phone, relationship, and priority order. Always accessible. Always ready."],
            ["Supply Needs", "Note personal supplies, medical equipment, and service vendor information. Never run out of what your loved one needs."],
            ["Printable Care Plan", "Generate a printable care plan summary to bring to any doctor's visit, appointment, or hospital stay."],
            ["Caregiver Hub — Basic", "Profile and daily notes for each caregiver — a simple record of who provided care and what happened during each visit."],
            ["Email Notifications", "Email reminders for appointments and medication times. Stay informed without having to check the app constantly."],
          ].map(([t, b]) => featureCard(t, b, "#f2e8d8", "#b03060"))}
        </div>

        <Cat title="Plus Features — Everything in Basic, Plus:" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          {[
            ["Caregiver Hub — Full", "Full caregiver profile, visit scheduling, daily notes, and a real-time checklist — with timestamps visible to the entire care team."],
            ["Incident Notes", "Record medication changes, unusual symptoms, behavioral changes, or medical events. Share with doctors at any appointment."],
            ["Goal Progress", "Document care goals and view progress over time. Know what you are working toward and how far you have come."],
            ["Extended Dashboard", "Goal progress summaries, detailed care reports, and a deeper view of your loved one's overall care journey."],
            ["Extended Notifications", "Text and email alerts for appointments and medication reminders — so the whole care team stays informed."],
            ["Data Input Guided Wizard", "A step-by-step tool that guides you through entering your care plan information — making setup simple and complete."],
          ].map(([t, b]) => featureCard(t, b, "#fff", "#102940"))}
        </div>

        <Cat title="Calendars — Every Calendar Has a Reminder Option" />
        <div style={{ background: "#ffffff", padding: "36px 20px" }}>
          {[
            ["Meals Calendar", "Meal times, details, and notes for every meal of the day."],
            ["Personal Care Calendar", "Daily personal care tasks and schedule — bathing, grooming, dressing, and more."],
            ["Tasks Calendar", "Every task for the day, assigned, scheduled, and tracked in real time."],
            ["Medication Calendar", "Medication reminder timeline — times and user labels only. No medical data stored in Version 1."],
            ["Activities Calendar", "Activities, outings, family visits, and entertainment planned for the day."],
            ["Caregiver Calendar (Plus)", "Caregiver visit scheduling and shift management with the full care team."],
          ].map(([title, body]) => (
            <div key={title} style={{ borderBottom: "1px solid #e5d9c9", padding: "16px 0" }}>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#102940", marginBottom: 4, margin: "0 0 4px" }}>{title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#4a3828", lineHeight: 1.75, margin: "0 0 6px" }}>{body}</p>
              <span style={{ fontSize: "0.82rem", color: "#b03060", fontWeight: 600 }}>🔔 Reminder option included</span>
            </div>
          ))}
        </div>

        <div style={{ background: "#b03060", padding: "48px 20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.9rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
            Ready to start?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", marginBottom: 22 }}>14-day free trial. No credit card required. Cancel anytime.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" style={{ display: "inline-block", background: "#fff", color: "#b03060", fontWeight: 700, padding: "12px 28px", borderRadius: 4, fontSize: "0.95rem" }}>
              View Pricing
            </Link>
            <Link href="/free-trial" style={{ display: "inline-block", background: "transparent", color: "#fff", fontWeight: 600, padding: "12px 28px", borderRadius: 4, fontSize: "0.95rem", border: "2px solid rgba(255,255,255,0.5)" }}>
              Sign Up for a Free Trial
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
