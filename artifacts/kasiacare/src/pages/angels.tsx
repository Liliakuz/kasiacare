import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";

type AngFields = {
  firstName: string; lastName: string; phone: string;
  address: string; city: string; state: string;
  email: string; role: string; about: string;
};

const angEmpty: AngFields = {
  firstName: "", lastName: "", phone: "",
  address: "", city: "", state: "",
  email: "", role: "", about: "",
};

function Cat({ title }: { title: string }) {
  return (
    <div style={{ background: "#102940", padding: "16px 20px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{title}</h2>
    </div>
  );
}

const inp = (err?: string): React.CSSProperties => ({
  width: "100%",
  padding: "10px 14px",
  border: `1px solid ${err ? "#ef4444" : "#c5b49a"}`,
  borderRadius: 4,
  fontSize: "0.9rem",
  outline: "none",
  background: "#fff",
  color: "#102940",
  boxSizing: "border-box",
  display: "block",
});

const labelS: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 700,
  color: "#102940",
  marginBottom: 6,
  letterSpacing: "0.3px",
};

const errS: React.CSSProperties = {
  fontSize: "0.78rem",
  color: "#ef4444",
  marginTop: 4,
};

const fieldWrap: React.CSSProperties = { marginBottom: 16 };

export default function Angels() {
  const [fields, setFields] = useState<AngFields>(angEmpty);
  const [errors, setErrors] = useState<Partial<AngFields>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const set = (field: keyof AngFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validate = (): Partial<AngFields> => {
    const errs: Partial<AngFields> = {};
    if (!fields.firstName.trim()) errs.firstName = "First name is required.";
    if (!fields.lastName.trim()) errs.lastName = "Last name is required.";
    if (!fields.phone.trim()) errs.phone = "Phone number is required.";
    if (!fields.address.trim()) errs.address = "Address is required.";
    if (!fields.city.trim()) errs.city = "City is required.";
    if (!fields.state.trim()) errs.state = "State is required.";
    if (!fields.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Please enter a valid email address.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    setSendError("");
    try {
      const res = await fetch("/api/angels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSendError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: 64 }}>
      <Nav />
      <main style={{ flex: 1 }}>

        <div style={{ background: "#102940", padding: "40px 20px 36px" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#b07d10", fontWeight: 700, marginBottom: 14 }}>KasiaCare Angels</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: 12 }}>
            Volunteer with us.<br/>
            Care alongside <em style={{ fontStyle: "italic", color: "#c4667a" }}>Kasia.</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: 20 }}>
            The KasiaCare Angels program brings together people who believe in the power of prepared, joyful caregiving — and who want to help families on the same journey Kasia's family walked.
          </p>
          <a href="#apply" style={{ display: "inline-block", background: "#b03060", color: "#fff", fontWeight: 700, padding: "12px 28px", borderRadius: 4, fontSize: "0.95rem", textDecoration: "none" }}>
            Become an Angel
          </a>
        </div>

        <Cat title="What is a KasiaCare Angel?" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 14 }}>
            KasiaCare Angels are volunteers who help families, individuals, and caregivers get the most from KasiaCare — and who help grow a community of prepared, joyful caregiving.
          </p>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 14 }}>
            The program is named in Kasia's honor. Every Angel carries a piece of her spirit — the belief that care is better when it is organized, shared, and done with love.
          </p>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85 }}>
            Angels give their time in whatever way they can. Some spend a few hours a month. Some become deeply involved in the community. All of them matter.
          </p>
        </div>

        <Cat title="Angel Roles — Find Your Way to Help" />
        <div style={{ background: "#ffffff", padding: "36px 20px" }}>
          {[
            ["📱", "Social Media Angel", "Share KasiaCare's story with caregiver communities online. Help families find the platform that can change how they care. No experience required — just heart."],
            ["🧪", "Beta Testing Angel", "Test new features before they launch and give feedback that shapes the product. Your real-world caregiving experience makes you the most valuable tester we could have."],
            ["📝", "Care Plan Builder Angel", "Help families and individuals set up their care plans with warmth and patience. This role may evolve into a paid A La Carte service role as KasiaCare grows."],
            ["🔍", "Grant Research Angel", "Help identify grant opportunities, application deadlines, and funding sources that support KasiaCare's mission to reach more families."],
          ].map(([icon, title, body]) => (
            <div key={title} style={{ background: "#f2e8d8", borderRadius: 6, padding: "20px", borderLeft: "5px solid #b03060", marginBottom: 12, display: "flex", gap: 16 }}>
              <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{icon}</span>
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#102940", marginBottom: 6, margin: "0 0 6px" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", color: "#4a3828", lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <Cat title="Recognition Tiers — Every Hour of Care Is Honored" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          {[
            ["Kasia's Angel", "10–19 hrs/month", "Core tier. Named in Kasia's honor — for Angels who show up consistently and make a real difference."],
            ["Guardian Angel", "20–39 hrs/month", "Deep commitment. Guardian Angels often take on leadership within the community and mentor newer Angels."],
            ["Archangel", "40+ hrs/month", "Our most dedicated Angels — recognized publicly, given first access to new features, and honored in KasiaCare's story."],
          ].map(([tier, hours, desc]) => (
            <div key={tier} style={{ background: "#fff", borderRadius: 6, padding: "18px 20px", borderLeft: "5px solid #102940", marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, flexWrap: "wrap", gap: 4 }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#102940", margin: 0 }}>{tier}</h3>
                <span style={{ fontSize: "0.82rem", color: "#6b7280", fontWeight: 600 }}>{hours}</span>
              </div>
              <p style={{ fontSize: "0.92rem", color: "#4a3828", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
          <div style={{ background: "#102940", borderRadius: 6, padding: "20px 22px", marginTop: 20 }}>
            <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", color: "#fff", lineHeight: 1.75, margin: 0, textAlign: "center" }}>
              "Just as Lilia was an assistant to her mother — <span style={{ color: "#c8952a" }}>KasiaCare Angels are assistants to caregivers</span> who are planning and caring for other people's lives."
            </p>
          </div>
        </div>

        <Cat title="Apply to Become a KasiaCare Angel" />
        <div id="apply" style={{ background: "#ffffff", padding: "36px 20px" }}>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 24 }}>Tell us a little about yourself and how you would like to help. We will be in touch within a few days.</p>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>💙</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", color: "#102940", marginBottom: 8 }}>Thank you!</h3>
              <p style={{ fontSize: "0.92rem", color: "#6b7280", lineHeight: 1.7 }}>We received your application and will be in touch within a few days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={fieldWrap}>
                <label htmlFor="ang-firstName" style={labelS}>First Name <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="ang-firstName" type="text" placeholder="First name" value={fields.firstName} onChange={set("firstName")} style={inp(errors.firstName)} aria-required="true" />
                {errors.firstName && <p style={errS}>{errors.firstName}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-lastName" style={labelS}>Last Name <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="ang-lastName" type="text" placeholder="Last name" value={fields.lastName} onChange={set("lastName")} style={inp(errors.lastName)} aria-required="true" />
                {errors.lastName && <p style={errS}>{errors.lastName}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-phone" style={labelS}>Phone Number <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="ang-phone" type="tel" placeholder="(555) 555-5555" value={fields.phone} onChange={set("phone")} style={inp(errors.phone)} aria-required="true" />
                {errors.phone && <p style={errS}>{errors.phone}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-address" style={labelS}>Address <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="ang-address" type="text" placeholder="Street address" value={fields.address} onChange={set("address")} style={inp(errors.address)} aria-required="true" />
                {errors.address && <p style={errS}>{errors.address}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-city" style={labelS}>City <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="ang-city" type="text" placeholder="City" value={fields.city} onChange={set("city")} style={inp(errors.city)} aria-required="true" />
                {errors.city && <p style={errS}>{errors.city}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-state" style={labelS}>State <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="ang-state" type="text" placeholder="State" value={fields.state} onChange={set("state")} style={inp(errors.state)} aria-required="true" />
                {errors.state && <p style={errS}>{errors.state}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-email" style={labelS}>Email Address <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="ang-email" type="email" placeholder="your@email.com" value={fields.email} onChange={set("email")} style={inp(errors.email)} aria-required="true" />
                {errors.email && <p style={errS}>{errors.email}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-role" style={labelS}>Which Angel role interests you most?</label>
                <select id="ang-role" value={fields.role} onChange={set("role")} style={{ ...inp(), appearance: "none" as const }}>
                  <option value="">Select a role</option>
                  <option value="social">Social Media Angel</option>
                  <option value="beta">Beta Testing Angel</option>
                  <option value="builder">Care Plan Builder Angel</option>
                  <option value="grant">Grant Research Angel</option>
                  <option value="multiple">Multiple roles / Not sure yet</option>
                </select>
              </div>
              <div style={fieldWrap}>
                <label htmlFor="ang-about" style={labelS}>About You <span style={{ fontWeight: 400, color: "#6b7280" }}>(optional)</span></label>
                <textarea
                  id="ang-about"
                  value={fields.about}
                  onChange={set("about")}
                  placeholder="Tell us a little about yourself and your connection to caregiving"
                  style={{ ...inp(), height: 160, resize: "vertical" }}
                />
              </div>
              <p style={{ fontSize: "0.78rem", color: "#6b7280", marginBottom: 12 }}>Fields marked <span style={{ color: "#ef4444" }}>*</span> are required.</p>
              {sendError && <p role="alert" style={{ fontSize: "0.82rem", color: "#ef4444", marginBottom: 10 }}>{sendError}</p>}
              <button
                type="submit"
                disabled={sending}
                style={{ width: "100%", padding: "14px", background: sending ? "#ccc" : "#b03060", color: "#fff", border: "none", borderRadius: 4, fontSize: "0.95rem", fontWeight: 700, cursor: sending ? "not-allowed" : "pointer" }}
              >
                {sending ? "Sending…" : "Apply to Become a KasiaCare Angel 💙"}
              </button>
            </form>
          )}
        </div>

      </main>
      <Footer />
    </div>
  );
}
