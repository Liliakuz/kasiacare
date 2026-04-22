import { Link } from "wouter";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Nav />

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-primary px-6 py-10">
          <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">Care Plan Software</p>
          <h1 className="font-serif text-4xl font-semibold text-white leading-tight mb-3">
            About <em className="italic text-rose-400">KasiaCare</em>
          </h1>
          <p className="text-base text-white/80 leading-relaxed">
            Built by a family caregiver, for every family caregiver.
          </p>
        </section>

        {/* CAT HEADER */}
        <div className="bg-primary px-6 py-4">
          <h2 className="font-serif text-xl font-bold text-white">Our Mission</h2>
        </div>

        <section className="bg-amber-50 px-6 py-9">
          <p className="text-base text-stone-700 leading-relaxed mb-4">
            Every day, millions of caregivers wake up without a clear, shared plan. Medications get missed.
            Appointments get forgotten. A new caregiver walks through the door with no idea what that person's
            day looks like.
          </p>
          <p className="text-base text-stone-700 leading-relaxed mb-5">
            KasiaCare was built to solve that — one care plan at a time.
          </p>
          <div className="bg-primary border-l-0 rounded-md px-5 py-4">
            <p className="font-serif italic text-base text-white leading-relaxed">
              "No one receiving care should feel unknown. No one providing care should feel unprepared."
            </p>
            <cite className="block mt-2 text-xs text-blue-200 not-italic font-sans">— KasiaCare Mission Statement</cite>
          </div>
        </section>

        {/* CAT HEADER */}
        <div className="bg-primary px-6 py-4">
          <h2 className="font-serif text-xl font-bold text-white">Our Story</h2>
        </div>

        <section className="bg-white px-6 py-9">
          <p className="text-base text-stone-700 leading-relaxed mb-4">
            KasiaCare is named in honor of <strong>Kasia</strong> — pronounced <em>KAH-shah</em> — a beloved
            mother who lived with a disability and was cared for by her family for many years. She had a radiant
            smile, a love of flowers, and an unshakeable spirit.
          </p>
          <p className="text-base text-stone-700 leading-relaxed mb-4">
            Her daughter <strong>Lilia Kuzmicz</strong> was her primary caregiver for over thirty years.
            There was no shared care plan. No app that traveled with Kasia wherever she went — whether she
            was at the hospital, the doctor's office, or visiting family. Every handoff meant starting over.
          </p>
          <p className="text-base text-stone-700 leading-relaxed">
            Kasia passed away on <strong>February 7, 2023.</strong> KasiaCare is Lilia's way of making sure
            no other family has to coordinate care the hard way.
          </p>
        </section>

        {/* CAT HEADER */}
        <div className="bg-primary px-6 py-4">
          <h2 className="font-serif text-xl font-bold text-white">What Makes Us Different</h2>
        </div>

        <section className="bg-amber-50 px-6 py-9 space-y-3">
          {[
            { icon: "💙", title: "Built from Real Caregiving", body: "KasiaCare is not built by a tech company that studied caregiving. It is built by someone who lived it for thirty years — every medication, every appointment, every caregiver handoff, every late night." },
            { icon: "🌿", title: "Designed for Everyone in the Circle", body: "Family members, personal aids, agency caregivers, and the individuals themselves — everyone gets a view that is right for them. No technical knowledge required." },
            { icon: "🔒", title: "Privacy First — Always", body: "Version 1 stores no medical data. Printable reports use initials and state only. You control who sees what. We never sell your information." },
            { icon: "📍", title: "Care Anywhere", body: "At home, at the hospital, at the doctor's office, or visiting family — the care plan travels with the person. Wherever care happens, KasiaCare is there." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-md px-5 py-5 border-l-4 border-rose-600">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-serif text-lg font-bold text-primary mb-1">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </section>

        {/* CAT HEADER */}
        <div className="bg-primary px-6 py-4">
          <h2 className="font-serif text-xl font-bold text-white">Meet the Founder</h2>
        </div>

        <section className="bg-primary px-6 py-9">
          <h2 className="font-serif text-2xl font-bold text-white mb-1">Lilia Kuzmicz</h2>
          <p className="text-sm text-blue-300 mb-5">Founder, KasiaCare · Kasia's Daughter</p>
          <p className="text-base text-white/82 leading-relaxed mb-4">
            Lilia Kuzmicz is a serial entrepreneur with over 30 years of experience in technology and
            caregiving. She served as CEO of Reverse Polarity LLC (2008–2019) and Media and Company
            Services (1997–2023).
          </p>
          <p className="text-base text-white/82 leading-relaxed mb-4">
            She holds certifications from MIT, Harvard, IBM, Google, Kennesaw State University, and
            Infosec — bringing both professional credibility and deep human empathy to everything she builds.
          </p>
          <p className="text-base text-white/82 leading-relaxed mb-6">
            Most importantly, she was Kasia's daughter — the person who gave her mother her morning
            medications, took her to every appointment, and held her hand at the end. KasiaCare is built
            from that love.
          </p>
          <div className="flex flex-wrap gap-2">
            {["MIT", "Harvard", "IBM", "Google", "Kennesaw State", "Infosec"].map((c) => (
              <span key={c} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded">{c}</span>
            ))}
          </div>
        </section>

        {/* SIGNUP CTA */}
        <section className="bg-rose-700 px-6 py-12 text-center">
          <h2 className="font-serif text-3xl font-semibold text-white leading-tight mb-3">
            Ready to bring <em className="italic">joy</em> back to caregiving?
          </h2>
          <p className="text-base text-white/90 mb-6">
            Join our waitlist. We will reach out personally when your trial is ready.
          </p>
          <Link href="/contact" className="inline-block bg-white text-rose-700 font-bold px-8 py-4 rounded text-base">
            Sign Up Today
          </Link>
          <p className="mt-3 text-xs text-white/70">No credit card · No commitment · Your info is never sold.</p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
