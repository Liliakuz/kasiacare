import { Link, useLocation } from "wouter";

export function Nav() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/angels", label: "Angels" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/95 backdrop-blur-md border-b border-border px-6 md:px-10 flex items-center justify-between h-16">
      <Link href="/" className="font-serif text-2xl font-semibold text-primary decoration-transparent">
        Kasia<span className="text-accent">Care</span>
      </Link>
      
      <ul className="hidden md:flex gap-7 list-none">
        {links.map((link) => {
          const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm pb-0.5 border-b-2 transition-colors ${
                  isActive 
                    ? "text-primary border-accent" 
                    : "text-muted-foreground border-transparent hover:text-primary hover:border-accent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link 
        href="/contact" 
        className="bg-primary text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#2c6fad] transition-colors"
      >
        Start Free Trial
      </Link>
    </nav>
  );
}
