import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerStrip } from "@/components/FlowerStrip";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-cream">
      <Nav />
      
      <main className="flex-1">
        <div className="bg-secondary px-6 md:px-16 pt-[110px] pb-[70px]">
          <div className="text-xs tracking-[2.5px] uppercase text-accent font-medium mb-4 ">
            Our Story
          </div>
          <h1 className="font-serif text-4xl md:text-[clamp(2.4em,5vw,3.6em)] font-light leading-[1.12] text-primary mb-4.5">
            Named for <em className="italic text-accent">Kasia.</em><br/>
            Built for every family<br/>
            like ours.
          </h1>
          <p className="text-base leading-[1.8] text-muted-foreground max-w-[560px]">
            KasiaCare was born from thirty years of love, caregiving, and the quiet wish that someone had built a better way. This is that better way.
          </p>
        </div>

        <FlowerStrip />

        <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="relative h-[400px] md:h-[500px] hidden md:block">
              <div className="w-[280px] h-[360px] bg-[#e0d5c5]/30 rounded absolute top-0 left-0 shadow-[14px_14px_44px_rgba(26,58,92,0.13)] flex items-center justify-center overflow-hidden">
                <svg className="w-20 h-20 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="w-[220px] h-[280px] bg-[#e0d5c5]/40 rounded absolute bottom-0 right-0 shadow-[14px_14px_44px_rgba(26,58,92,0.13)] border-[6px] border-cream flex items-center justify-center overflow-hidden">
                 <svg className="w-16 h-16 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <motion.div 
                className="absolute top-[46%] left-[46%] -translate-x-1/2 -translate-y-1/2 text-5xl z-10 select-none"
                animate={{ y: ["-50%", "-60%", "-50%"], rotate: [-3, 3, -3], x: "-50%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >🌻</motion.div>
            </div>
            
            <div>
              <div className="text-xs tracking-[2.5px] uppercase text-accent font-medium mb-4 ">
                Kasia — KAH-shah
              </div>
              <h2 className="font-serif text-[2.4em] font-light text-primary mb-5.5 leading-[1.15]">
                The woman who<br/>inspired <em className="italic text-accent">everything.</em>
              </h2>
              <p className="text-[0.96em] leading-[1.88] text-muted-foreground mb-4">
                <strong className="text-foreground font-semibold">Kasia</strong> was a beloved mother who lived with a disability and was cared for by her family for many years. She was full of warmth, laughter, and a love of flowers — the roses and gerberas that bloom throughout this website are hers.
              </p>
              <p className="text-[0.96em] leading-[1.88] text-muted-foreground mb-4">
                Her daughter Lilia was her primary caregiver for over three decades — managing daily care schedules, medications, appointments, family coordination, and the thousand invisible details that caregiving requires. There was no app for that. There was no shared plan that traveled with Kasia wherever she went.
              </p>
              <p className="text-[0.96em] leading-[1.88] text-muted-foreground mb-4">
                There were sticky notes. Phone calls between family members. The constant fear that something would fall through the cracks. The exhaustion of being the one person who held all the information.
              </p>
              <p className="text-[0.96em] leading-[1.88] text-muted-foreground mb-4">
                Kasia passed away on <strong className="text-foreground font-semibold">February 7, 2023.</strong> KasiaCare is built in her memory — and for every family still in the middle of that journey.
              </p>
              <div className="bg-primary text-white p-6 md:px-7 md:py-6.5 rounded mt-6 font-serif italic text-[1.15em] leading-[1.7]">
                "No one receiving care should feel unknown. No one providing care should feel unprepared. When caregivers are confident and prepared, they walk through the door with joy — and that joy is felt by the person they are there to love and serve."
                <cite className="block mt-3 text-[0.75em] not-italic text-[#8aaac8] tracking-[0.5px]">— KasiaCare Mission Statement</cite>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white px-6 md:px-16 py-16 my-5">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-12 items-start">
            <div>
              <div className="text-[0.72em] tracking-[2px] uppercase text-[#c8952a] mb-2.5">Mission</div>
              <div className="font-serif text-[2.4em] font-light leading-[1.2] text-white">
                Care with clarity.<br/>Care with joy.
              </div>
            </div>
            <div>
              <p className="text-[0.97em] leading-[1.9] text-[#c8d8e8] mb-4">
                KasiaCare exists to improve the quality of life and independence of every person receiving care — by giving caregivers, families, individuals, and care teams <strong className="text-white font-semibold">one simple, shared place</strong> to build, follow, and carry their care plan wherever life takes them.
              </p>
              <p className="text-[0.97em] leading-[1.9] text-[#c8d8e8] mb-4">
                Just as Lilia was an assistant to her mother — organizing, planning, remembering, reminding — <strong className="text-white font-semibold">KasiaCare is an assistant to every caregiver</strong> who is planning and caring for other people's lives.
              </p>
              <p className="text-[0.97em] leading-[1.9] text-[#c8d8e8]">
                This is not just software. It is a belief that caregiving, when supported well, can be done with <strong className="text-white font-semibold">confidence, dignity, and joy.</strong>
              </p>
            </div>
          </div>
        </div>

        <FlowerStrip />

        <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-14 items-start">
            <div className="w-full md:w-[220px] h-[280px] bg-[#e0d5c5]/30 rounded shadow-[12px_12px_40px_rgba(26,58,92,0.12)] flex items-center justify-center overflow-hidden">
               <svg className="w-20 h-20 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div>
              <div className="text-[0.72em] tracking-[2.5px] uppercase text-accent font-medium mb-4 ">
                The Founder
              </div>
              <h2 className="font-serif text-3xl md:text-[2em] font-light text-primary mb-1.5">Lilia Kuzmicz</h2>
              <div className="text-[0.82em] text-muted-foreground mb-5 tracking-[0.3px]">
                Founder &amp; CEO, KasiaCare &nbsp;·&nbsp; Kasia's Daughter
              </div>
              <p className="text-[0.95em] leading-[1.85] text-muted-foreground mb-3.5">
                Lilia Kuzmicz is a serial entrepreneur with over 30 years of experience in technology and caregiving. She served as CEO of <strong className="text-foreground font-semibold">Reverse Polarity LLC</strong> (2008–2019) and <strong className="text-foreground font-semibold">Media and Company Services</strong> (1997–2023).
              </p>
              <p className="text-[0.95em] leading-[1.85] text-muted-foreground mb-3.5">
                She brings both technical expertise and deeply personal caregiving experience to KasiaCare — having managed her mother's care for over thirty years while simultaneously building businesses, navigating the healthcare system, and coordinating care teams.
              </p>
              <p className="text-[0.95em] leading-[1.85] text-muted-foreground mb-3.5">
                Lilia is currently in cancer remission and building KasiaCare within her disability limitations — a testament to her belief that this platform is needed now, and that the right tools make everything possible.
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                <span className="inline-block bg-secondary text-primary text-[0.78em] font-medium px-3 py-1 rounded">MIT</span>
                <span className="inline-block bg-secondary text-primary text-[0.78em] font-medium px-3 py-1 rounded">Harvard</span>
                <span className="inline-block bg-secondary text-primary text-[0.78em] font-medium px-3 py-1 rounded">IBM</span>
                <span className="inline-block bg-secondary text-primary text-[0.78em] font-medium px-3 py-1 rounded">Google</span>
                <span className="inline-block bg-secondary text-primary text-[0.78em] font-medium px-3 py-1 rounded">Kennesaw State</span>
                <span className="inline-block bg-secondary text-primary text-[0.78em] font-medium px-3 py-1 rounded">Infosec</span>
              </div>
              <Link href="/contact" className="inline-block bg-primary text-white px-7 py-3 rounded text-[0.88em] font-medium hover:bg-[#2c6fad] transition-colors mt-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
