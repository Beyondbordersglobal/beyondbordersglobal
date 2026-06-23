import { Link } from "@tanstack/react-router";
import { Globe, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const QUICK = [
  { l: "Home", to: "/" },
  { l: "About", to: "/about" },
  { l: "Services", to: "/services" },
  { l: "Products", to: "/products" },
] as const;

const SERVICES_LIST = [
  "Global Sourcing",
  "Import & Export",
  "Procurement",
  "Supply Chain Solutions",
] as const;

const MARKETS_LIST = [
  "India",
  "China",
  "UAE & Middle East",
  "Europe & UK",
  "America",
  "Australia",
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/80 pt-20 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-lg gradient-navy ring-1 ring-gold/30">
                <Globe className="h-5 w-5 text-gold" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-base font-semibold text-primary-foreground">Beyond Borders Global</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold">International Trade</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6 max-w-sm">
              Connecting Markets. Creating Opportunities. Delivering Worldwide.
            </p>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/60 leading-relaxed max-w-sm">
              <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
              <p>
                1/256/1B, Puliyamarathu Thottam, Senjeri Post, Kumarapalayam,
                Sulur Taluk, Coimbatore, Tamil Nadu — 641669, India
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {QUICK.map((i) => (
                <li key={i.l}>
                  <Link to={i.to} className="text-primary-foreground/60 hover:text-gold transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterTextCol title="Services" items={SERVICES_LIST} />
          <FooterTextCol title="Markets" items={MARKETS_LIST} />
        </div>

        <div className="grid md:grid-cols-3 gap-4 pb-10 mb-8 border-b border-primary-foreground/10">
          <ContactItem icon={Phone} label="Phone" value="+91 9487501519" href="tel:+919487501519" />
          <ContactItem icon={Mail} label="Email" value="rahul.mahalingam99@gmail.com" href="mailto:rahul.mahalingam99@gmail.com" />
          <ContactItem icon={MessageCircle} label="WhatsApp" value="+91 9487501519" href="https://wa.me/919487501519" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Beyond Borders Global. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-gold" /> Headquartered in Coimbatore, India · Serving Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

function FooterTextCol({ title, items }: { title: string; items: ReadonlyArray<string> }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i} className="text-primary-foreground/60">{i}</li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-3 group">
      <div className="rounded-lg border border-gold/20 bg-gold/5 p-2.5 group-hover:bg-gold group-hover:border-gold transition-colors">
        <Icon className="h-4 w-4 text-gold group-hover:text-navy-deep" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-primary-foreground/40">{label}</p>
        <p className="text-sm font-medium text-primary-foreground truncate">{value}</p>
      </div>
    </a>
  );
}
