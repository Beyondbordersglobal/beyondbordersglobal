import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Globe, Menu, X, MessageCircle, ArrowRight } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Global Markets", to: "/global-markets" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className={`relative flex h-10 w-10 items-center justify-center rounded-lg gradient-navy ${transparent ? "ring-1 ring-gold/30" : ""}`}>
              <Globe className="h-5 w-5 text-gold" strokeWidth={2} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`font-display text-base font-semibold ${transparent ? "text-primary-foreground" : "text-foreground"}`}>Beyond Borders</span>
              <span className={`text-[10px] uppercase tracking-[0.22em] ${transparent ? "text-gold" : "text-gold-dark"}`}>Global</span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: transparent ? "text-gold" : "text-foreground" }}
                inactiveProps={{ className: transparent ? "text-primary-foreground/80 hover:text-gold" : "text-muted-foreground hover:text-foreground" }}
                className="text-sm font-medium transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-md gradient-gold px-4 py-2 text-xs font-semibold text-navy-deep hover:shadow-gold-glow transition-all"
            >
              Request Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="https://wa.me/919487501519"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1ebe57] transition-all"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>

          <button
            className={`xl:hidden p-2 ${transparent ? "text-primary-foreground" : "text-foreground"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-background border-b border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/become-a-supplier" className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md">
              Become a Supplier
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 rounded-md gradient-gold px-4 py-3 text-xs font-semibold text-navy-deep">
                Request Quote
              </Link>
              <a href="https://wa.me/919487501519" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#25D366] px-4 py-3 text-xs font-semibold text-white">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
