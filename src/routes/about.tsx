import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Shield, Handshake, Truck, Target, Eye, Network, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Beyond Borders Global" },
      { name: "description", content: "Learn about Beyond Borders Global — our mission, vision, global network, business model and the industries we serve across international markets." },
      { property: "og:title", content: "About Beyond Borders Global" },
      { property: "og:description", content: "An international trading and procurement company connecting global markets." },
    ],
  }),
  component: About,
});

const INDUSTRIES = [
  "Food & Agriculture", "Construction", "Industrial Manufacturing",
  "Fitness Equipment", "Consumer Goods", "Textiles", "Electronics",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An international trading"
        accent="& procurement company"
        description="Beyond Borders Global connects manufacturers, suppliers, distributors and buyers across global markets through reliable sourcing, procurement and supply chain solutions."
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>Beyond Borders Global is an international trading, sourcing, procurement, import-export and supply chain solutions company. We work with a vetted network of manufacturers, suppliers, logistics providers and trade specialists to deliver transparent, efficient cross-border trade.</p>
          <p>From single-shipment sourcing requirements to long-term supply partnerships, we serve importers, exporters, distributors and corporate buyers with the same commitment to quality, accountability and on-time delivery.</p>
          <p>Headquartered in India, we operate across Asia, Europe, the Middle East, North America and Oceania — bringing global capability and local expertise to every engagement.</p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <Pillar icon={Target} title="Our Mission" body="To empower businesses worldwide with seamless, trustworthy and efficient international trade solutions — connecting markets, simplifying complexity and creating long-term value for every partner we serve." />
          <Pillar icon={Eye} title="Our Vision" body="To be a globally recognised trading and procurement partner — known for reliability, transparency and the ability to deliver across borders, industries and time zones." />
        </div>
      </section>

      {/* Global network */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Global Network</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">A network built on <span className="text-gradient-gold">trust</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Network, t: "Manufacturers & Suppliers", d: "Audited production partners across 30+ countries." },
              { icon: Truck, t: "Logistics Partners", d: "Multimodal freight, customs and last-mile experts." },
              { icon: Handshake, t: "Procurement Specialists", d: "Regional category-experienced teams." },
              { icon: Shield, t: "Quality & Inspection", d: "Independent QA agencies for pre-shipment checks." },
            ].map((n) => (
              <div key={n.t} className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all">
                <div className="rounded-lg gradient-navy p-3 w-fit mb-4"><n.icon className="h-5 w-5 text-gold" /></div>
                <h3 className="font-display text-base font-semibold mb-1.5">{n.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business model */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Business Model</Eyebrow>
            <h2 className="font-display text-4xl font-bold mb-6">How we <span className="text-gradient-gold">work</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We act as a single trade and procurement partner — bridging buyers with verified suppliers, negotiating commercial terms, coordinating logistics and managing quality from order to delivery.
            </p>
            <ul className="space-y-3">
              {[
                "Buyer-aligned sourcing with transparent pricing",
                "End-to-end procurement and contract management",
                "Quality inspection before every shipment",
                "Door-to-door logistics across modes and borders",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-10 shadow-luxury">
            <Briefcase className="h-10 w-10 text-gold mb-4" />
            <p className="font-display text-2xl leading-snug">
              "We bring global capability and local accountability to every engagement — so our clients trade with clarity and confidence."
            </p>
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow centered>Industries Served</Eyebrow>
          <h2 className="font-display text-4xl font-bold mb-10">Deep category <span className="text-gradient-gold">expertise</span></h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {INDUSTRIES.map((i) => (
              <span key={i} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground hover:border-gold/50 transition-colors">{i}</span>
            ))}
          </div>
          <Link to="/industries" className="inline-flex items-center gap-2 rounded-md gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
            Explore Industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Pillar({ icon: Icon, title, body }: { icon: typeof Target; title: string; body: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-10 hover:border-gold/50 hover:shadow-luxury transition-all">
      <div className="rounded-lg gradient-gold p-3 w-fit mb-5"><Icon className="h-5 w-5 text-navy-deep" /></div>
      <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Eyebrow({ children, centered }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}>
      <div className="h-px w-8 bg-gold-dark" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{children}</span>
      {centered && <div className="h-px w-8 bg-gold-dark" />}
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Globe className="h-10 w-10 text-gold-dark mx-auto mb-4" strokeWidth={1.5} />
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5">Let's build something <span className="text-gradient-gold">global</span></h2>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
          Get in Touch <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
