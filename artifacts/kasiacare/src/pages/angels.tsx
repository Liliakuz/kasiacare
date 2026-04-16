import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerStrip } from "@/components/FlowerStrip";
import { Link } from "wouter";
import { useState } from "react";

const angInputClass = (err?: string) =>
  `w-full px-4.5 py-3 border rounded text-[0.9em] outline-none transition-colors bg-white/10 text-white placeholder:text-[#8aaac8] ${
    err ? "border-red-400" : "border-white/15"
  }`;

const ErrorMsg = ({ msg }: { msg?: string }) =>
  msg ? <p className="text-[0.75em] text-red-300 mt-1">{msg}</p> : null;

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

export default function Angels() {
  const [fields, setFields] = useState<AngFields>(angEmpty);
  const [errors, setErrors] = useState<Partial<AngFields>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col pt-16 bg-cream">
      <Nav />
      
      <main className="flex-1">
        <div className="bg-accent text-white px-6 md:px-16 pt-[110px] pb-[80px]">
          <div className="text-[0.72em] tracking-[2.5px] uppercase text-white/70 font-medium mb-4 ">
            KasiaCare Angels
          </div>
          <h1 className="font-serif text-4xl md:text-[clamp(2.4em,5vw,3.6em)] font-light leading-[1.12] text-white mb-4.5">
            Volunteer with us.<br/>
            Care alongside <em className="italic">Kasia.</em>
          </h1>
          <p className="text-base leading-[1.8] text-white/85 max-w-[560px] mb-7">
            The KasiaCare Angels program brings together people who believe in the power of prepared, joyful caregiving — and who want to help families who are on the same journey Kasia's family walked.
          </p>
          <a href="#apply" className="inline-block bg-white text-accent px-7.5 py-3 rounded text-[0.88em] font-semibold hover:bg-primary hover:text-white transition-all">
            Become an Angel
          </a>
        </div>

        <FlowerStrip />

        <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="w-full max-w-[400px] h-[500px] mx-auto bg-[#e0d5c5]/40 rounded shadow-[14px_14px_44px_rgba(26,58,92,0.12)] flex items-center justify-center overflow-hidden">
             <svg className="w-24 h-24 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div>
            <div className="text-[0.72em] tracking-[2.5px] uppercase text-accent font-medium mb-4 ">
              Named for Kasia
            </div>
            <h2 className="font-serif text-[2.4em] font-light text-primary mb-5 leading-[1.15]">
              What is a<br/><em className="italic text-accent">KasiaCare Angel?</em>
            </h2>
            <p className="text-[0.96em] leading-[1.85] text-muted-foreground mb-3.5">
              KasiaCare Angels are volunteers who help families, individuals, and caregivers get the most from KasiaCare — and who help grow a community of prepared, joyful caregiving.
            </p>
            <p className="text-[0.96em] leading-[1.85] text-muted-foreground mb-3.5">
              The program is named in Kasia's honor. Every Angel carries a piece of her spirit — the belief that care is better when it is organized, shared, and done with love.
            </p>
            <p className="text-[0.96em] leading-[1.85] text-muted-foreground">
              Angels give their time in whatever way they can. Some spend a few hours a month. Some become deeply involved in the community. All of them matter.
            </p>
          </div>
        </div>

        <section className="bg-secondary px-6 md:px-16 py-16 md:py-20">
          <div className="text-center mb-12">
            <div className="text-[0.72em] tracking-[2.5px] uppercase text-accent font-medium mb-3.5">Angel Roles</div>
            <div className="font-serif text-[clamp(1.8em,3vw,2.6em)] font-light text-primary leading-[1.2]">Find your way to help.</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            <div className="bg-white p-7.5 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-[1.4em] flex-shrink-0">📱</div>
              <div>
                <h3 className="font-serif text-[1.2em] font-semibold text-primary mb-1.5">Social Media Angel</h3>
                <p className="text-[0.86em] leading-[1.75] text-muted-foreground">Share KasiaCare's story with caregiver communities online. Help families find the platform that can change how they care. No experience required — just heart.</p>
              </div>
            </div>
            <div className="bg-white p-7.5 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-[1.4em] flex-shrink-0">🧪</div>
              <div>
                <h3 className="font-serif text-[1.2em] font-semibold text-primary mb-1.5">Beta Testing Angel</h3>
                <p className="text-[0.86em] leading-[1.75] text-muted-foreground">Test new features before they launch and give feedback that shapes the product. Your real-world caregiving experience makes you the most valuable tester we could have.</p>
              </div>
            </div>
            <div className="bg-white p-7.5 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-[1.4em] flex-shrink-0">📝</div>
              <div>
                <h3 className="font-serif text-[1.2em] font-semibold text-primary mb-1.5">Care Plan Builder Angel</h3>
                <p className="text-[0.86em] leading-[1.75] text-muted-foreground">Help families and individuals set up their care plans with warmth and patience. This role may evolve into a paid A La Carte service role as KasiaCare grows.</p>
              </div>
            </div>
            <div className="bg-white p-7.5 rounded shadow-[0_2px_12px_rgba(26,58,92,0.06)] flex gap-4.5">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-[1.4em] flex-shrink-0">🔍</div>
              <div>
                <h3 className="font-serif text-[1.2em] font-semibold text-primary mb-1.5">Grant Research Angel</h3>
                <p className="text-[0.86em] leading-[1.75] text-muted-foreground">Help identify grant opportunities, application deadlines, and funding sources that support KasiaCare's mission to reach more families.</p>
              </div>
            </div>
          </div>
        </section>

        <FlowerStrip />

        <section className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="text-[0.72em] tracking-[2.5px] uppercase text-accent font-medium mb-3.5">Recognition Tiers</div>
            <div className="font-serif text-[clamp(1.8em,3vw,2.6em)] font-light text-primary leading-[1.2]">Every hour of care is honored.</div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.88em] mt-7">
              <thead>
                <tr>
                  <th className="bg-primary text-white p-3 px-4.5 text-left font-semibold">Angel Tier</th>
                  <th className="bg-primary text-white p-3 px-4.5 text-left font-semibold">Hours / Month</th>
                  <th className="bg-primary text-white p-3 px-4.5 text-left font-semibold">What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] font-bold text-primary font-serif text-[1.05em] bg-white">Kasia's Angel</td>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] bg-white">10–19 hrs/month</td>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] bg-white">Core tier. Named in Kasia's honor — for Angels who show up consistently and make a real difference.</td>
                </tr>
                <tr>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] font-bold text-primary font-serif text-[1.05em] bg-secondary">Guardian Angel</td>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] bg-secondary">20–39 hrs/month</td>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] bg-secondary">Deep commitment. Guardian Angels often take on leadership within the community and mentor newer Angels.</td>
                </tr>
                <tr>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] font-bold text-primary font-serif text-[1.05em] bg-white">Archangel</td>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] bg-white">40+ hrs/month</td>
                  <td className="p-3 px-4.5 border-b border-border align-top leading-[1.6] bg-white">Our most dedicated Angels — recognized publicly, given first access to new features, and honored in KasiaCare's story.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-primary text-white p-6 px-7.5 rounded mt-7 font-serif italic text-[1.1em] leading-[1.7] text-center">
            "Just as Lilia was an assistant to her mother — <span className="text-[#c8952a]">KasiaCare Angels are assistants to caregivers</span> who are planning and caring for other people's lives."
          </div>
        </section>

        <section id="apply" className="bg-primary px-6 md:px-16 py-20 text-center">
          <h2 className="font-serif text-[2.6em] font-light text-white mb-4 leading-[1.2]">
            Ready to become a<br/><em className="italic text-accent">KasiaCare Angel?</em>
          </h2>
          <p className="text-[0.97em] text-[#8aaac8] mb-8 max-w-[560px] mx-auto">
            Tell us a little about yourself and how you would like to help. We will be in touch within a few days.
          </p>
          
          <div className="max-w-[560px] mx-auto text-left">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">💙</div>
                <h3 className="font-serif text-[1.8em] text-white mb-2">Thank you!</h3>
                <p className="text-[0.9em] text-[#8aaac8] leading-[1.6]">We received your application and will be in touch within a few days.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                <div>
                  <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">First Name <span className="text-red-300">*</span></label>
                  <input type="text" placeholder="First name" value={fields.firstName} onChange={set("firstName")} className={angInputClass(errors.firstName)} />
                  <ErrorMsg msg={errors.firstName} />
                </div>
                <div>
                  <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">Last Name <span className="text-red-300">*</span></label>
                  <input type="text" placeholder="Last name" value={fields.lastName} onChange={set("lastName")} className={angInputClass(errors.lastName)} />
                  <ErrorMsg msg={errors.lastName} />
                </div>
              </div>
              <div className="mb-3.5">
                <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">Phone Number <span className="text-red-300">*</span></label>
                <input type="tel" placeholder="(555) 555-5555" value={fields.phone} onChange={set("phone")} className={angInputClass(errors.phone)} />
                <ErrorMsg msg={errors.phone} />
              </div>
              <div className="mb-3.5">
                <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">Address <span className="text-red-300">*</span></label>
                <input type="text" placeholder="Street address" value={fields.address} onChange={set("address")} className={angInputClass(errors.address)} />
                <ErrorMsg msg={errors.address} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                <div>
                  <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">City <span className="text-red-300">*</span></label>
                  <input type="text" placeholder="City" value={fields.city} onChange={set("city")} className={angInputClass(errors.city)} />
                  <ErrorMsg msg={errors.city} />
                </div>
                <div>
                  <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">State <span className="text-red-300">*</span></label>
                  <input type="text" placeholder="State" value={fields.state} onChange={set("state")} className={angInputClass(errors.state)} />
                  <ErrorMsg msg={errors.state} />
                </div>
              </div>
              <div className="mb-3.5">
                <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">Email Address <span className="text-red-300">*</span></label>
                <input type="email" placeholder="your@email.com" value={fields.email} onChange={set("email")} className={angInputClass(errors.email)} />
                <ErrorMsg msg={errors.email} />
              </div>
              <div className="mb-3.5">
                <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">Which Angel role interests you most?</label>
                <select value={fields.role} onChange={set("role")} className="w-full px-4.5 py-3 border border-white/15 bg-white/10 text-[#8aaac8] rounded text-[0.9em] outline-none">
                  <option value="" className="bg-primary">Select a role</option>
                  <option className="bg-primary text-white">Social Media Angel</option>
                  <option className="bg-primary text-white">Beta Testing Angel</option>
                  <option className="bg-primary text-white">Care Plan Builder Angel</option>
                  <option className="bg-primary text-white">Grant Research Angel</option>
                  <option className="bg-primary text-white">Multiple roles / Not sure yet</option>
                </select>
              </div>
              <div className="mb-3.5">
                <label className="block text-[0.8em] font-semibold text-white/70 mb-1.5 tracking-[0.3px]">About You <span className="text-white/40 font-normal">(optional)</span></label>
                <textarea value={fields.about} onChange={set("about")} placeholder="Tell us a little about yourself and your connection to caregiving" className="w-full px-4.5 py-3 border border-white/15 bg-white/10 text-white rounded text-[0.9em] outline-none placeholder:text-[#8aaac8] h-[100px] resize-y" />
              </div>
              <p className="text-[0.75em] text-[#8aaac8] mb-3">Fields marked <span className="text-red-300">*</span> are required.</p>
              <button type="submit" className="w-full px-3.5 py-3.5 bg-accent text-white border-none rounded text-[0.9em] font-semibold cursor-pointer hover:bg-[#a8455f] transition-colors text-center">
                Apply to Become a KasiaCare Angel 💙
              </button>
            </form>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
