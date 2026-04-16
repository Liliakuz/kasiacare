import { Link } from "wouter";
import { FlowerStrip } from "@/components/FlowerStrip";

export function Footer() {
  return (
    <>
      <FlowerStrip />
      <footer className="bg-primary text-[#c8d8e8] px-6 md:px-16 py-12 pb-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
        <div className="flex flex-col">
          <Link href="/" className="font-serif text-2xl font-semibold text-white mb-2 decoration-transparent">
            Kasia<span className="text-accent">Care</span>
          </Link>
          <p className="text-sm leading-relaxed text-[#8aaac8] mb-4">
            Care Plan Software for Families, Caregivers &amp; Care Teams.<br/>
            Named in honor of Kasia — a beloved mother.
          </p>
          <p className="font-serif italic text-sm text-[#8aaac8]">
            "No one receiving care should feel unknown.<br/>
            No one providing care should feel unprepared."
          </p>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-xs tracking-wider uppercase text-[#c8952a] mb-3">Product</h4>
          <Link href="/features" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">Pricing</Link>
          <Link href="/contact" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">Sign Up for a Free Trial</Link>
          <Link href="/angels" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">Angels</Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-xs tracking-wider uppercase text-[#c8952a] mb-3">Company</h4>
          <Link href="/about" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">About</Link>
          <Link href="/contact" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">Contact</Link>
          <Link href="/privacy" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">Privacy Policy</Link>
          <Link href="/privacy" className="text-sm text-[#8aaac8] hover:text-white mb-2 transition-colors">Terms</Link>
        </div>
      </footer>
      <div className="bg-primary border-t border-white/10 text-center px-6 py-4 text-xs text-[#5a7a9a] font-serif italic">
        &copy; 2026 KasiaCare &middot; Built for Kasia. Built for every family like ours. 💙
      </div>
    </>
  );
}
