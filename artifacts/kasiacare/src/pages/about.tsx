import { Link } from "wouter";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function Cat({ title }: { title: string }) {
  return (
    <div style={{ background: "#102940", padding: "16px 20px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{title}</h2>
    </div>
  );
}

export default function About() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: 64 }}>
      <Nav />
      <main style={{ flex: 1 }}>

        <div style={{ background: "#102940", padding: "40px 20px 36px" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#b07d10", fontWeight: 700, marginBottom: 14 }}>Care Plan Software</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: 12 }}>
            About <em style={{ fontStyle: "italic", color: "#c4667a" }}>KasiaCare</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>Built by a family caregiver, for every family caregiver.</p>
        </div>

        <Cat title="Our Mission" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 14 }}>Every day, millions of caregivers wake up without a clear, shared plan. Medications get missed. Appointments get forgotten. A new caregiver walks through the door with no idea what that person's day looks like.</p>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 20 }}>KasiaCare was built to solve that — one care plan at a time.</p>
          <div style={{ background: "#102940", borderRadius: 6, padding: "20px 22px" }}>
            <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", color: "#fff", lineHeight: 1.75, margin: 0 }}>"No one receiving care should feel unknown. No one providing care should feel unprepared."</p>
            <cite style={{ display: "block", marginTop: 10, fontSize: "0.75rem", color: "#8aaac8", fontStyle: "normal" }}>— KasiaCare Mission Statement</cite>
          </div>
        </div>

        <Cat title="Our Story" />
        <div style={{ background: "#ffffff", padding: "36px 20px" }}>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 14 }}>KasiaCare is named in honor of <strong>Kasia</strong> — pronounced <em>KAH-shah</em> — a beloved mother who lived with a disability and was cared for by her family for many years. She had a radiant smile, a love of flowers, and an unshakeable spirit.</p>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 14 }}>Her daughter <strong>Lilia Kuzmicz</strong> was her primary caregiver for over thirty years. There was no shared care plan. No app that traveled with Kasia wherever she went — whether she was at the hospital, the doctor's office, or visiting family. Every handoff meant starting over.</p>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85 }}>Kasia passed away on <strong>February 7, 2023.</strong> KasiaCare is Lilia's way of making sure no other family has to coordinate care the hard way.</p>
        </div>

        <Cat title="What Makes Us Different" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          {[
            ["💙","Built from Real Caregiving","KasiaCare is not built by a tech company that studied caregiving. It is built by someone who lived it for thirty years — every medication, every appointment, every caregiver handoff, every late night."],
            ["🌿","Designed for Everyone in the Circle","Family members, personal aids, agency caregivers, and the individuals themselves — everyone gets a view that is right for them. No technical knowledge required."],
            ["🔒","Privacy First — Always","Version 1 stores no medical data. Printable reports use initials and state only. You control who sees what. We never sell your information."],
            ["📍","Care Anywhere","At home, at the hospital, at the doctor's office, or visiting family — the care plan travels with the person. Wherever care happens, KasiaCare is there."],
          ].map(([icon, title, body]) => (
            <div key={title} style={{ background: "#fff", borderRadius: 6, padding: 20, borderLeft: "5px solid #b03060", marginBottom: 12 }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{icon}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#102940", marginBottom: 6 }}>{title}</h3>
              <p style={{ fontSize: "0.97rem", color: "#4a3828", lineHeight: 1.8, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        <Cat title="Meet the Founder" />
        <div style={{ background: "#102940", padding: "36px 20px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>Lilia Kuzmicz</h2>
          <p style={{ fontSize: "0.88rem", color: "#8aaac8", marginBottom: 18 }}>Founder, KasiaCare · Kasia's Daughter</p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.85, marginBottom: 14 }}>Lilia Kuzmicz is a serial entrepreneur with over 30 years of experience in technology and caregiving. She served as CEO of Reverse Polarity LLC (2008–2019) and Media and Company Services (1997–2023).</p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.85, marginBottom: 14 }}>She holds certifications from MIT, Harvard, IBM, Google, Kennesaw State University, and Infosec — bringing both professional credibility and deep human empathy to everything she builds.</p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.85, marginBottom: 20 }}>Most importantly, she was Kasia's daughter — the person who gave her mother her morning medications, took her to every appointment, and held her hand at the end. KasiaCare is built from that love.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["MIT","Harvard","IBM","Google","Kennesaw State","Infosec"].map(c => (
              <span key={c} style={{ background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: "0.82rem", fontWeight: 600, padding: "5px 12px", borderRadius: 4 }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={{ background: "#b03060", padding: "48px 20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.9rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
            Ready to bring <em style={{ fontStyle: "italic" }}>joy</em> back to caregiving?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", marginBottom: 22 }}>Join our waitlist. We will reach out personally when your trial is ready.</p>
          <Link href="/contact" style={{ display: "inline-block", background: "#fff", color: "#b03060", fontWeight: 700, padding: "14px 32px", borderRadius: 4, fontSize: "1rem", marginBottom: 12 }}>
            Sign Up Today
          </Link>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>No credit card · No commitment · Your info is never sold.</p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
