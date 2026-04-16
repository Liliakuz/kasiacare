import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-cream">
      <Nav />
      
      <main className="flex-1">
        <div className="bg-secondary px-6 md:px-16 pt-[110px] pb-[60px]">
          <h1 className="font-serif text-3xl md:text-[2.8em] font-light text-primary mb-3">
            Privacy Policy &amp;<br/>Terms of Service
          </h1>
          <p className="text-[0.9em] text-muted-foreground">KasiaCare &nbsp;·&nbsp; KasiaCare.com &nbsp;·&nbsp; Effective April 2026</p>
        </div>

        <div className="max-w-[820px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-[0.78em] text-muted-foreground mb-7">
            Last updated: April 2026 &nbsp;·&nbsp; Version 1 &nbsp;·&nbsp; Subject to attorney review before launch
          </div>

          <div className="bg-white border border-border p-5 md:px-6 rounded mb-9 shadow-sm">
            <h4 className="text-[0.78em] font-bold uppercase tracking-[0.5px] text-primary mb-2.5">On This Page</h4>
            <div className="space-y-1.5">
              <a href="#phi" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">Version 1 Data Policy — No Medical Data Stored</a>
              <a href="#collect" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">What We Collect</a>
              <a href="#use" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">How We Use Your Information</a>
              <a href="#share" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">Who We Share With</a>
              <a href="#security" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">Security</a>
              <a href="#rights" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">Your Rights</a>
              <a href="#terms" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">Terms of Service</a>
              <a href="#contact-us" className="block text-[0.85em] text-accent hover:underline leading-[1.5]">Contact Us</a>
            </div>
          </div>

          <div className="bg-primary text-white p-5.5 px-6.5 rounded my-5" id="phi">
            <h3 className="text-[#c8952a] text-[0.82em] uppercase tracking-[1px] mb-2.5 font-bold">⚠️ Important — Version 1 Data Policy</h3>
            <p className="text-[0.9em] leading-[1.8] text-[#c8d8e8]">
              KasiaCare Version 1 <strong className="text-white font-semibold">does not store Personal Health Information (PHI)</strong>. This means KasiaCare does not collect, store, or process:<br/><br/>
              · Medication names, dosages, or prescription information<br/>
              · Medical diagnoses or conditions<br/>
              · Vital signs (blood pressure, glucose, weight, oxygen levels)<br/>
              · Any clinical health data<br/><br/>
              Medication reminders are <strong className="text-white font-semibold">time-based alerts only</strong> — you set a time and write your own short label (e.g. "Morning pills"). The label is stored, but no medical information is inferred or required.<br/><br/>
              Medical data features are planned for a future version and will require a full HIPAA review before being enabled.
            </p>
          </div>

          <div className="mb-10" id="collect">
            <h2 className="font-serif text-[1.7em] font-normal text-primary mb-3.5 pb-2 border-b border-border">What We Collect</h2>
            
            <h3 className="text-[0.92em] font-bold text-primary mt-4.5 mb-2 uppercase tracking-[0.5px]">Account Information</h3>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">When you create a KasiaCare account, we collect your name, email address, password (encrypted), and phone number. This information is used to create and manage your account.</p>
            
            <h3 className="text-[0.92em] font-bold text-primary mt-4.5 mb-2 uppercase tracking-[0.5px]">Care Plan Information</h3>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">KasiaCare stores the care plan information you enter — care recipient name and preferences, daily tasks, schedules, caregiver notes, emergency contacts, supply needs, and calendar entries. This information is personal but not medical. It is stored securely and accessible only to the account holder and those they have invited.</p>
            
            <h3 className="text-[0.92em] font-bold text-primary mt-4.5 mb-2 uppercase tracking-[0.5px]">Usage Information</h3>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">We collect basic usage data — pages visited, features used, and error logs — to improve the platform. This data is anonymized and not linked to individual accounts for analytics purposes.</p>
          </div>

          <div className="mb-10" id="use">
            <h2 className="font-serif text-[1.7em] font-normal text-primary mb-3.5 pb-2 border-b border-border">How We Use Your Information</h2>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">We use your information to provide and improve the KasiaCare platform — sending notifications and reminders you have set, providing customer support, processing subscription payments through Stripe, and communicating product updates. We do not use your information for advertising. KasiaCare does not sell your data.</p>
          </div>

          <div className="mb-10" id="share">
            <h2 className="font-serif text-[1.7em] font-normal text-primary mb-3.5 pb-2 border-b border-border">Who We Share With</h2>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">KasiaCare shares information only with service providers necessary to operate the platform — including Stripe for payment processing, SendGrid for email delivery, and Google for Calendar integration (only with your permission). We do not share personal information with third parties for marketing or advertising purposes.</p>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">Care plan information is shared only with the family members, caregivers, and care team members that you have explicitly invited within the KasiaCare platform. You control access completely.</p>
          </div>

          <div className="mb-10" id="security">
            <h2 className="font-serif text-[1.7em] font-normal text-primary mb-3.5 pb-2 border-b border-border">Security</h2>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">All data is encrypted in transit using HTTPS/TLS. Account passwords are hashed and never stored in plain text. We implement role-based access controls so each user sees only the information they are permitted to see. We perform regular security reviews and maintain automated daily backups.</p>
          </div>

          <div className="mb-10" id="rights">
            <h2 className="font-serif text-[1.7em] font-normal text-primary mb-3.5 pb-2 border-b border-border">Your Rights</h2>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">You have the right to access, correct, or delete your personal information at any time. You can export your care plan data as a PDF at any time from within the platform. To request deletion of your account and all associated data, contact us at <a href="mailto:lilia@kasiacare.com" className="text-accent hover:underline">lilia@kasiacare.com</a>.</p>
          </div>

          <div className="mb-10" id="terms">
            <h2 className="font-serif text-[1.7em] font-normal text-primary mb-3.5 pb-2 border-b border-border">Terms of Service</h2>
            
            <h3 className="text-[0.92em] font-bold text-primary mt-4.5 mb-2 uppercase tracking-[0.5px]">Use of the Platform</h3>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">KasiaCare is a care planning and coordination tool. It is not a medical device, clinical software, or substitute for professional medical advice. Always consult a qualified healthcare provider for medical decisions. In an emergency, always call 911.</p>
            
            <h3 className="text-[0.92em] font-bold text-primary mt-4.5 mb-2 uppercase tracking-[0.5px]">Subscription and Billing</h3>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">Subscriptions are billed monthly or annually through Stripe. You may cancel at any time. Upon cancellation, you retain access through the end of your current billing period. Refunds are not provided for partial billing periods.</p>
            
            <h3 className="text-[0.92em] font-bold text-primary mt-4.5 mb-2 uppercase tracking-[0.5px]">Changes to These Policies</h3>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">KasiaCare may update these policies as the platform evolves — particularly as new data features are added in future versions. We will notify subscribers of material changes by email before they take effect.</p>
          </div>

          <div className="mb-10" id="contact-us">
            <h2 className="font-serif text-[1.7em] font-normal text-primary mb-3.5 pb-2 border-b border-border">Contact Us</h2>
            <p className="text-[0.91em] leading-[1.88] text-muted-foreground mb-3">
              For privacy questions, data requests, or general inquiries:<br/><br/>
              <strong className="font-semibold text-foreground">Lilia Kuzmicz</strong> — Founder &amp; CEO, KasiaCare<br/>
              Email: <a href="mailto:lilia@kasiacare.com" className="text-accent hover:underline">lilia@kasiacare.com</a><br/>
              Website: <a href="https://kasiacare.com" className="text-accent hover:underline">KasiaCare.com</a>
            </p>
            <p className="mt-4 italic text-[0.85em] text-muted-foreground leading-[1.6]">
              Note: This Privacy Policy and Terms of Service are working documents subject to attorney review before KasiaCare Version 1 launches.
            </p>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
