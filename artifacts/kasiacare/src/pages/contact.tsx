import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerStrip } from "@/components/FlowerStrip";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [votes, setVotes] = useState<Record<string, boolean>>({});

  const toggleVote = (feature: string) => {
    setVotes(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  const features = [
    "Mobile App (iOS)",
    "Mobile App (Android)",
    "Medication Names",
    "Telehealth",
    "AI Insights",
    "Pharmacy Reminders",
    "Care Team Portal",
    "Vital Signs Log"
  ];

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
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div>
                  <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">First Name</label>
                  <input type="text" placeholder="First name" className="w-full px-4 py-3 border border-border bg-white text-foreground rounded text-[0.9em] outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Last Name</label>
                  <input type="text" placeholder="Last name" className="w-full px-4 py-3 border border-border bg-white text-foreground rounded text-[0.9em] outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-border bg-white text-foreground rounded text-[0.9em] outline-none focus:border-accent transition-colors" />
              </div>
              <div className="mb-4">
                <label className="block text-[0.8em] font-semibold text-primary mb-1.5 tracking-[0.3px]">Subject</label>
                <select defaultValue="" className="w-full px-4 py-3 border border-border bg-white text-foreground rounded text-[0.9em] outline-none focus:border-accent transition-colors appearance-none">
                  <option value="" disabled>Select a topic</option>
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
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 border border-border bg-white text-foreground rounded text-[0.9em] outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              
              <button type="button" className="w-full py-3.5 mt-1 bg-primary text-white border-none rounded text-[0.92em] font-semibold cursor-pointer hover:bg-[#2c6fad] transition-colors">
                Send Message
              </button>
              
              <p className="text-[0.78em] text-muted-foreground mt-2.5 leading-[1.6]">
                By reaching out you agree to our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>. We never share your information.
              </p>
            </form>
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
