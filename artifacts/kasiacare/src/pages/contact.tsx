import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";

type Fields = {
  firstName: string; lastName: string; phone: string;
  address: string; city: string; state: string;
  email: string; subject: string; message: string;
};

const empty: Fields = {
  firstName: "", lastName: "", phone: "",
  address: "", city: "", state: "",
  email: "", subject: "", message: "",
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

const errS: React.CSSProperties = { fontSize: "0.78rem", color: "#ef4444", marginTop: 4 };
const fieldWrap: React.CSSProperties = { marginBottom: 14 };

export default function Contact() {
  const [votes, setVotes] = useState<Record<string, boolean>>({});
  const [pollSubmitted, setPollSubmitted] = useState(false);
  const [pollSending, setPollSending] = useState(false);
  const [pollError, setPollError] = useState("");
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.focus();
    }
  }, [submitted]);

  const toggleVote = (feature: string) => {
    setVotes(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  const handlePollSubmit = async () => {
    const selected = features.filter(f => votes[f]);
    if (selected.length === 0) {
      setPollError("Please select at least one feature before sending.");
      return;
    }
    setPollSending(true);
    setPollError("");
    try {
      const res = await fetch("/api/poll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: selected }),
      });
      if (!res.ok) throw new Error("Server error");
      setPollSubmitted(true);
    } catch {
      setPollError("Something went wrong. Please try again.");
    } finally {
      setPollSending(false);
    }
  };

  const features = [
    "Mobile App (iOS)", "Mobile App (Android)", "Medication Names",
    "Telehealth", "AI Insights", "Pharmacy Reminders",
    "Care Team Portal", "Vital Signs Log"
  ];

  const set = (field: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validate = (): Partial<Fields> => {
    const errs: Partial<Fields> = {};
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
      const res = await fetch("/api/contact", {
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
          <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#b07d10", fontWeight: 700, marginBottom: 14 }}>Get in Touch</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: 12 }}>
            We'd love to hear<br/>
            <em style={{ fontStyle: "italic", color: "#c4667a" }}>from you.</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>Have a question, idea, or just want to say hello? Send us a message and we'll get back to you within 1–2 business days.</p>
        </div>

        <Cat title="Send Us a Message" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          {submitted ? (
            <div ref={successRef} role="status" tabIndex={-1} style={{ textAlign: "center", padding: "40px 0", outline: "none" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>💙</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", color: "#102940", marginBottom: 8 }}>Thank you!</h3>
              <p style={{ fontSize: "0.92rem", color: "#6b7280", lineHeight: 1.7 }}>We received your message and will be in touch within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={fieldWrap}>
                <label htmlFor="contact-firstName" style={labelS}>First Name <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="contact-firstName" type="text" placeholder="First name" value={fields.firstName} onChange={set("firstName")} style={inp(errors.firstName)} aria-required="true" />
                {errors.firstName && <p style={errS}>{errors.firstName}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-lastName" style={labelS}>Last Name <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="contact-lastName" type="text" placeholder="Last name" value={fields.lastName} onChange={set("lastName")} style={inp(errors.lastName)} aria-required="true" />
                {errors.lastName && <p style={errS}>{errors.lastName}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-phone" style={labelS}>Phone Number <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="contact-phone" type="tel" placeholder="(555) 555-5555" value={fields.phone} onChange={set("phone")} style={inp(errors.phone)} aria-required="true" />
                {errors.phone && <p style={errS}>{errors.phone}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-address" style={labelS}>Address <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="contact-address" type="text" placeholder="Street address" value={fields.address} onChange={set("address")} style={inp(errors.address)} aria-required="true" />
                {errors.address && <p style={errS}>{errors.address}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-city" style={labelS}>City <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="contact-city" type="text" placeholder="City" value={fields.city} onChange={set("city")} style={inp(errors.city)} aria-required="true" />
                {errors.city && <p style={errS}>{errors.city}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-state" style={labelS}>State <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="contact-state" type="text" placeholder="State" value={fields.state} onChange={set("state")} style={inp(errors.state)} aria-required="true" />
                {errors.state && <p style={errS}>{errors.state}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-email" style={labelS}>Email Address <span style={{ color: "#ef4444" }} aria-hidden="true">*</span></label>
                <input id="contact-email" type="email" placeholder="your@email.com" value={fields.email} onChange={set("email")} style={inp(errors.email)} aria-required="true" />
                {errors.email && <p style={errS}>{errors.email}</p>}
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-subject" style={labelS}>Subject</label>
                <select id="contact-subject" value={fields.subject} onChange={set("subject")} style={{ ...inp(), appearance: "none" as const }}>
                  <option value="">Select a topic</option>
                  <option value="general">General question</option>
                  <option value="pricing">Pricing &amp; plans</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership or press</option>
                  <option value="angels">Angels Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={fieldWrap}>
                <label htmlFor="contact-message" style={labelS}>Message</label>
                <textarea
                  id="contact-message"
                  rows={7}
                  placeholder="Tell us how we can help..."
                  value={fields.message}
                  onChange={set("message")}
                  style={{ ...inp(), resize: "vertical" }}
                />
              </div>
              {sendError && <p role="alert" style={{ fontSize: "0.82rem", color: "#ef4444", marginBottom: 10 }}>{sendError}</p>}
              <button
                type="submit"
                disabled={sending}
                style={{ width: "100%", padding: "14px", background: sending ? "#ccc" : "#b03060", color: "#fff", border: "none", borderRadius: 4, fontSize: "0.95rem", fontWeight: 700, cursor: sending ? "not-allowed" : "pointer" }}
              >
                {sending ? "Sending…" : "Send Message"}
              </button>
              <p style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: 10, lineHeight: 1.6 }}>
                Fields marked <span style={{ color: "#ef4444" }}>*</span> are required. By reaching out you agree to our <Link href="/privacy" style={{ color: "#b03060", textDecoration: "underline" }}>Privacy Policy</Link>. We never share your information.
              </p>
            </form>
          )}
        </div>

        <Cat title="We Are Here to Help" />
        <div style={{ background: "#ffffff", padding: "36px 20px" }}>
          {[
            ["📧", "Email", <a href="mailto:lilia@kasiacare.com" style={{ fontSize: "0.9rem", color: "#b03060", textDecoration: "underline" }}>lilia@kasiacare.com</a>],
            ["🌐", "Website", <><a href="https://kasiacare.com" style={{ color: "#b03060", textDecoration: "underline" }}>KasiaCare.com</a> &nbsp;·&nbsp; <a href="https://kasia.care" style={{ color: "#b03060", textDecoration: "underline" }}>Kasia.Care</a></>],
            ["💙", "Angels Program", <span style={{ fontSize: "0.9rem", color: "#4a3828" }}>Want to volunteer? <Link href="/angels" style={{ color: "#b03060", textDecoration: "underline" }}>Become a KasiaCare Angel.</Link></span>],
            ["🕐", "Response Time", <span style={{ fontSize: "0.9rem", color: "#4a3828" }}>We typically respond within 1–2 business days. Plus subscribers receive priority support.</span>],
          ].map(([icon, label, content]) => (
            <div key={label as string} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f2e8d8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#102940", marginBottom: 4 }}>{label as string}</div>
                <div>{content}</div>
              </div>
            </div>
          ))}
        </div>

        <Cat title="What Should We Build Next?" />
        <div style={{ background: "#f2e8d8", padding: "36px 20px" }}>
          <p style={{ fontSize: "1rem", color: "#4a3828", lineHeight: 1.85, marginBottom: 20 }}>Vote for the features you want most. We read every vote.</p>
          {pollSubmitted ? (
            <div style={{ textAlign: "center", padding: "24px", background: "#fff", borderRadius: 6, border: "1px solid #d8c9b0" }}>
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>🙌</div>
              <p style={{ fontWeight: 700, color: "#102940", marginBottom: 4 }}>Thanks for voting!</p>
              <p style={{ fontSize: "0.88rem", color: "#6b7280" }}>Your selections have been sent to the team.</p>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {features.map((feature) => (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => toggleVote(feature)}
                    aria-pressed={!!votes[feature]}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 20,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      border: votes[feature] ? "2px solid #b03060" : "2px solid #c5b49a",
                      background: votes[feature] ? "#b03060" : "#fff",
                      color: votes[feature] ? "#fff" : "#102940",
                      fontWeight: votes[feature] ? 700 : 400,
                      transition: "all 0.15s",
                    }}
                  >
                    {feature}
                  </button>
                ))}
              </div>
              {pollError && <p role="alert" style={{ fontSize: "0.82rem", color: "#ef4444", marginBottom: 10 }}>{pollError}</p>}
              <button
                type="button"
                onClick={handlePollSubmit}
                disabled={pollSending}
                style={{ width: "100%", padding: "14px", background: pollSending ? "#ccc" : "#b03060", color: "#fff", border: "none", borderRadius: 4, fontSize: "0.95rem", fontWeight: 700, cursor: pollSending ? "not-allowed" : "pointer" }}
              >
                {pollSending ? "Sending…" : "Send my answers"}
              </button>
            </>
          )}
        </div>

      </main>
      <Footer />
    </div>
  );
}
