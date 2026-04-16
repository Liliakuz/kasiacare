import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/angels", label: "Angels" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-screen-xl mx-auto px-5 pt-4 flex items-start justify-between">

        {/* Floating logo pill */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="pointer-events-auto font-serif text-xl font-semibold text-primary decoration-transparent bg-[#faf7f2]/95 backdrop-blur-md border border-border shadow-sm px-5 py-2.5 rounded-full hover:shadow-md transition-shadow"
        >
          Kasia<span className="text-accent">Care</span>
        </Link>

        {/* Floating dropdown menu */}
        <div className="pointer-events-auto relative" ref={menuRef}>

          {/* Toggle button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open navigation menu"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full shadow-md hover:bg-[#2c6fad] transition-all text-sm font-medium select-none"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="inline-block text-base leading-none"
              style={{ transformOrigin: "center" }}
            >
              {open ? "✕" : "☰"}
            </motion.span>
            <span>{open ? "Close" : "Menu"}</span>
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute right-0 mt-2.5 w-52 bg-[#faf7f2]/98 backdrop-blur-md border border-border rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="py-2">
                  {links.map((link, i) => {
                    const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.15 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }}
                          className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                            isActive
                              ? "text-primary font-semibold bg-secondary"
                              : "text-muted-foreground hover:text-primary hover:bg-secondary/60"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-accent" : "bg-transparent"}`} />
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <div className="px-4 pt-1.5 pb-2.5 mt-1 border-t border-border">
                    <Link
                      href="/free-trial"
                      onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }}
                      className="block text-center w-full bg-primary text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2c6fad] transition-colors"
                    >
                      Sign Up for a Free Trial
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
