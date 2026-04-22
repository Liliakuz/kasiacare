import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function Cat({ title }: { title: string }) {
  return (
    <div style={{ background: "#102940", padding: "16px 20px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{title}</h2>
    </div>
  );
}

function Section({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div style={{ background: bg, padding: "36px 20px" }}>{children}</div>
  );
}

const body: React.CSSProperties = { fontSize: "0.92rem", color: "#4a3828", lineHeight: 1.88, marginBottom: 14 };
const subhead: React.CSSProperties = { fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.5px", color: "#102940", marginBottom: 6, marginTop: 18 };

export default function Privacy() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: 64 }}>
      <Nav />
      <main style={{ flex: 1 }}>

        <div style={{ background: "#102940", padding: "40px 20px 36px" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#b07d10", fontWeight: 700, marginBottom: 14 }}>Legal</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: 12 }}>
            Privacy Policy &amp;<br/>
            <em style={{ fontStyle: "italic", color: "#c4667a" }}>Terms of Service</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>KasiaCare · KasiaCare.com · Effective April 2026</p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", marginTop: 8 }}>Last updated: April 2026 · Version 1 · Subject to attorney review before launch</p>
        </div>

        <Cat title="Important — Version 1 Data Policy" />
        <Section bg="#f2e8d8">
          <div style={{ background: "#102940", borderRadius: 6, padding: "20px 22px" }}>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#c8952a", marginBottom: 10 }}>⚠️ No Medical Data Stored</p>
            <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              KasiaCare Version 1 <strong style={{ color: "#fff" }}>does not store Personal Health Information (PHI)</strong>. This means KasiaCare does not collect, store, or process:<br/><br/>
              · Medication names, dosages, or prescription information<br/>
              · Medical diagnoses or conditions<br/>
              · Vital signs (blood pressure, glucose, weight, oxygen levels)<br/>
              · Any clinical health data<br/><br/>
              Medication reminders are <strong style={{ color: "#fff" }}>time-based alerts only</strong> — you set a time and write your own short label (e.g. "Morning pills"). The label is stored, but no medical information is inferred or required.<br/><br/>
              Medical data features are planned for a future version and will require a full HIPAA review before being enabled.
            </p>
          </div>
        </Section>

        <Cat title="What We Collect" />
        <Section bg="#ffffff">
          <h3 style={subhead}>Account Information</h3>
          <p style={body}>When you create a KasiaCare account, we collect your name, email address, password (encrypted), and phone number. This information is used to create and manage your account.</p>
          <h3 style={subhead}>Care Plan Information</h3>
          <p style={body}>KasiaCare stores the care plan information you enter — care recipient name and preferences, daily tasks, schedules, caregiver notes, emergency contacts, supply needs, and calendar entries. This information is personal but not medical. It is stored securely and accessible only to the account holder and those they have invited.</p>
          <h3 style={subhead}>Usage Information</h3>
          <p style={{ ...body, marginBottom: 0 }}>We collect basic usage data — pages visited, features used, and error logs — to improve the platform. This data is anonymized and not linked to individual accounts for analytics purposes.</p>
        </Section>

        <Cat title="How We Use Your Information" />
        <Section bg="#f2e8d8">
          <p style={{ ...body, marginBottom: 0 }}>We use your information to provide and improve the KasiaCare platform — sending notifications and reminders you have set, providing customer support, processing subscription payments through Stripe, and communicating product updates. We do not use your information for advertising. KasiaCare does not sell your data.</p>
        </Section>

        <Cat title="Who We Share With" />
        <Section bg="#ffffff">
          <p style={body}>KasiaCare shares information only with service providers necessary to operate the platform — including Stripe for payment processing, SendGrid for email delivery, and Google for Calendar integration (only with your permission). We do not share personal information with third parties for marketing or advertising purposes.</p>
          <p style={{ ...body, marginBottom: 0 }}>Care plan information is shared only with the family members, caregivers, and care team members that you have explicitly invited within the KasiaCare platform. You control access completely.</p>
        </Section>

        <Cat title="Security" />
        <Section bg="#f2e8d8">
          <p style={{ ...body, marginBottom: 0 }}>All data is encrypted in transit using HTTPS/TLS. Account passwords are hashed and never stored in plain text. We implement role-based access controls so each user sees only the information they are permitted to see. We perform regular security reviews and maintain automated daily backups.</p>
        </Section>

        <Cat title="Your Rights" />
        <Section bg="#ffffff">
          <p style={{ ...body, marginBottom: 0 }}>You have the right to access, correct, or delete your personal information at any time. You can export your care plan data as a PDF at any time from within the platform. To request deletion of your account and all associated data, contact us at <a href="mailto:lilia@kasiacare.com" style={{ color: "#b03060", textDecoration: "underline" }}>lilia@kasiacare.com</a>.</p>
        </Section>

        <Cat title="Terms of Service" />
        <Section bg="#f2e8d8">
          <h3 style={subhead}>Use of the Platform</h3>
          <p style={body}>KasiaCare is a care planning and coordination tool. It is not a medical device, clinical software, or substitute for professional medical advice. Always consult a qualified healthcare provider for medical decisions. In an emergency, always call 911.</p>
          <h3 style={subhead}>Subscription and Billing</h3>
          <p style={body}>Subscriptions are billed monthly or annually through Stripe. You may cancel at any time. Upon cancellation, you retain access through the end of your current billing period. Refunds are not provided for partial billing periods.</p>
          <h3 style={subhead}>Changes to These Policies</h3>
          <p style={{ ...body, marginBottom: 0 }}>KasiaCare may update these policies as the platform evolves — particularly as new data features are added in future versions. We will notify subscribers of material changes by email before they take effect.</p>
        </Section>

        <Cat title="Contact Us" />
        <Section bg="#ffffff">
          <p style={body}>
            For privacy questions, data requests, or general inquiries:<br/><br/>
            <strong style={{ fontWeight: 700, color: "#102940" }}>Lilia Kuzmicz</strong> — Founder &amp; CEO, KasiaCare<br/>
            Email: <a href="mailto:lilia@kasiacare.com" style={{ color: "#b03060", textDecoration: "underline" }}>lilia@kasiacare.com</a><br/>
            Website: <a href="https://kasiacare.com" style={{ color: "#b03060", textDecoration: "underline" }}>KasiaCare.com</a>
          </p>
          <p style={{ fontSize: "0.85rem", color: "#6b7280", fontStyle: "italic", lineHeight: 1.65, margin: 0 }}>
            Note: This Privacy Policy and Terms of Service are working documents subject to attorney review before KasiaCare Version 1 launches.
          </p>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
