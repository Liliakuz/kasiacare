import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerStrip } from "@/components/FlowerStrip";
import { Link } from "wouter";
import { useState } from "react";

const inputClass = (err?: string) =>
  `w-full px-4 py-3 border rounded text-[0.9em] outline-none transition-colors bg-white text-foreground ${
    err ? "border-red-400 focus:border-red-400" : "border-border focus:border-accent"
  }`;

const ErrorMsg = ({ msg }: { msg?: string }) =>
  msg ? <p className="text-[0.75em] text-red-500 mt-1">{msg}</p> : null;

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

export default function Contact() {
  const [votes, setVotes] = useState<Record<string, boolean>>({});
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleVote = (feature: string) => {
    setVotes(prev => ({ ...prev, [feature]: !prev[feature] }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col pt-16 bg-cream">
      <Nav />
      
      <main className="flex-1">
        <div className="bg-secondary px-6 md:px-16 pt-[110px] pb-[70px]">
          <div className="text-xs tracking-[2.5px] uppercase text-accent font-medium mb-4">
            Get in Touch
          </div>
          <h1 className="font-serif text-4xl md:text-[clamp(2.4em,5vw,3.4em)] font-light leading-[1.12] text-primary mb-4.5">
            We'd love to hear<br/>
            <em className="italic text-accent">from you.</em>
          </h1>
          <p className="text-base leading-[1.8] text-muted-foreground max-w-[500px]">
            Have a question, idea, or just want to say hello? Send us a message and we'll get back to you.
          </p>
        </div>

        <FlowerStrip />

        <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
          
          <div className="bg-white p-8 rounded border border-border shadow-sm">
            <h2 className="font-serif text-[2em] font-light text-primary mb-2">Contact Us</h2>
            <p className="text-[0.9em] text-muted-foreground mb-7 leading-[1.6]">Fill out the form below and we'll be in touch within 1–2 business days.</p>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">💙</div>
                <h3 className="font-serif text-[1.6em] text-primary mb-2">Thank you!</h3>
                <p className="text-[0.9em] text-muted-foreground leading-[1.6]">We received your message and will be in touch within 1–2 business days.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div>
                  <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">First Name <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="First name" value={fields.firstName} onChange={set("firstName")} className={inputClass(errors.firstName)} />
                  <ErrorMsg msg={errors.firstName} />
                </div>
                <div>
                  <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Last Name <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="Last name" value={fields.lastName} onChange={set("lastName")} className={inputClass(errors.lastName)} />
                  <ErrorMsg msg={errors.lastName} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Phone Number <span className="text-red-400">*</span></label>
                <input type="tel" placeholder="(555) 555-5555" value={fields.phone} onChange={set("phone")} className={inputClass(errors.phone)} />
                <ErrorMsg msg={errors.phone} />
              </div>
              <div className="mb-4">
                <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Address <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Street address" value={fields.address} onChange={set("address")} className={inputClass(errors.address)} />
                <ErrorMsg msg={errors.address} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div>
                  <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">City <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="City" value={fields.city} onChange={set("city")} className={inputClass(errors.city)} />
                  <ErrorMsg msg={errors.city} />
                </div>
                <div>
                  <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">State <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="State" value={fields.state} onChange={set("state")} className={inputClass(errors.state)} />
                  <ErrorMsg msg={errors.state} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Email Address <span className="text-red-400">*</span></label>
                <input type="email" placeholder="your@email.com" value={fields.email} onChange={set("email")} className={inputClass(errors.email)} />
                <ErrorMsg msg={errors.email} />
              </div>
              <div className="mb-4">
                <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Subject</label>
                <select value={fields.subject} onChange={set("subject")} className="w-full px-4 py-3 border border-border bg-white text-foreground rounded text-[0.9em] outline-none focus:border-accent transition-colors appearance-none">
                  <option value="">Select a topic</option>
                  <option value="general">General question</option>
                  <option value="pricing">Pricing & plans</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership or press</option>
                  <option value="angels">Angels Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Message</label>
                <textarea
                  rows={8}
                  placeholder="Tell us how we can help..."
                  value={fields.message}
                  onChange={set("message")}
                  className="w-full px-4 py-3 border border-border bg-white text-foreground rounded text-[0.9em] outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              
              <button type="submit" className="w-full py-3.5 mt-1 bg-primary text-white border-none rounded text-[0.92em] font-semibold cursor-pointer hover:bg-[#2c6fad] transition-colors">
                Send Message
              </button>
              
              <p className="text-[0.78em] text-muted-foreground mt-2.5 leading-[1.6]">
                Fields marked <span className="text-red-400">*</span> are required. By reaching out you agree to our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>. We never share your information.
              </p>
            </form>
            )}
          </div>

          <div>
            <h2 className="font-serif text-[1.8em] font-light text-primary mb-5">We are here to help.</h2>
            
            <div className="flex gap-3.5 mb-5.5 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-[1.1em] flex-shrink-0">📧</div>
              <div>
                <h4 className="text-[0.88em] font-bold text-primary mb-0.5">Email</h4>
                <a href="mailto:lilia@kasiacare.com" className="text-[0.86em] text-muted-foreground leading-[1.6] hover:text-accent">lilia@kasiacare.com</a>
              </div>
            </div>
            
            <div className="flex gap-3.5 mb-5.5 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-[1.1em] flex-shrink-0">🌐</div>
              <div>
                <h4 className="text-[0.88em] font-bold text-primary mb-0.5">Website</h4>
                <div className="text-[0.86em] text-muted-foreground leading-[1.6]">
                  <a href="https://kasiacare.com" className="hover:text-accent">KasiaCare.com</a> &nbsp;·&nbsp; <a href="https://kasia.care" className="hover:text-accent">Kasia.Care</a>
                </div>
              </div>
            </div>

            <div className="flex gap-3.5 mb-5.5 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-[1.1em] flex-shrink-0">💙</div>
              <div>
                <h4 className="text-[0.88em] font-bold text-primary mb-0.5">Angels Program</h4>
                <p className="text-[0.86em] text-muted-foreground leading-[1.6]">Want to volunteer? <Link href="/angels" className="text-accent hover:underline">Become a KasiaCare Angel.</Link></p>
              </div>
            </div>

            <div className="flex gap-3.5 mb-5.5 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-[1.1em] flex-shrink-0">🕐</div>
              <div>
                <h4 className="text-[0.88em] font-bold text-primary mb-0.5">Response Time</h4>
                <p className="text-[0.86em] text-muted-foreground leading-[1.6]">We typically respond within 1–2 business days. Plus subscribers receive priority support.</p>
              </div>
            </div>

            <hr className="border-t border-border my-6" />

            <div>
              <h3 className="font-serif text-[1.3em] font-normal text-primary mb-3">What should we build next?</h3>
              <p className="text-[0.86em] text-muted-foreground mb-3.5 leading-[1.6]">Vote for the features you want most. We read every vote.</p>
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <button 
                    key={feature}
                    type="button"
                    onClick={() => toggleVote(feature)}
                    className={`px-3.5 py-1.5 rounded-full text-[0.8em] cursor-pointer transition-all select-none border ${
                      votes[feature] 
                        ? "bg-accent text-white border-accent" 
                        : "bg-white border-border text-primary hover:border-accent hover:text-accent hover:bg-[#fff5f7]"
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
