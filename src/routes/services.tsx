import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search, Handshake, Ship, Layers, FlaskConical, Truck, Shield, TrendingUp,
  Users, Award, ArrowRight, MessageCircle, FileSearch, ClipboardCheck,
  Factory, PackageCheck, PlaneTakeoff, ChevronRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Beyond Borders Global" },
      { name: "description", content: "Global sourcing, procurement, import-export, supply chain, logistics and product development services delivered by Beyond Borders Global." },
      { property: "og:title", content: "Services — Beyond Borders Global" },
      { property: "og:description", content: "Premium global trade and procurement solutions for buyers and sellers worldwide." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { icon: Search, title: "Global Sourcing", desc: "We identify, evaluate and engage trusted manufacturers and suppliers across continents — matched to your specifications, MOQ and budget." },
  { icon: Handshake, title: "International Procurement", desc: "End-to-end procurement: RFQs, negotiation, contracting and order management aligned with your commercial and quality requirements." },
  { icon: Ship, title: "Import & Export Solutions", desc: "Customs clearance, documentation, INCOTERMS guidance and full regulatory compliance across all major trade lanes." },
  { icon: Layers, title: "Supply Chain Management", desc: "Optimised, transparent supply chains designed for visibility and resilience — from origin to destination." },
  { icon: FlaskConical, title: "Product Development", desc: "Concept to production-ready: sampling, specification development, packaging design and private-label execution." },
  { icon: Truck, title: "Logistics Coordination", desc: "Multimodal freight by sea, air and land — with route optimisation and real-time shipment visibility." },
  { icon: Shield, title: "Supplier Verification", desc: "Factory audits, KYC checks, certification reviews and rigorous quality assurance before any commitment." },
  { icon: TrendingUp, title: "Market Entry Support", desc: "Strategic guidance, partner identification and on-ground execution for launching in new international markets." },
  { icon: Users, title: "Business Matchmaking", desc: "Curated introductions between buyers, sellers and distributors across our verified global network." },
  { icon: Award, title: "Private Label & OEM", desc: "Custom-branded manufacturing tailored to your specifications, packaging and target markets." },
];

const PROCESS = [
  { title: "Inquiry", desc: "Share your requirement." },
  { title: "Sourcing", desc: "We identify trusted suppliers." },
  { title: "Quotation", desc: "Transparent, all-inclusive pricing." },
  { title: "Sampling", desc: "Verify quality before commit." },
  { title: "Order Confirmation", desc: "Secure terms & contract." },
  { title: "Production", desc: "Monitored manufacturing." },
  { title: "Quality Check", desc: "Pre-shipment inspection." },
  { title: "Shipping", desc: "Optimised global logistics." },
  { title: "Delivery", desc: "Door-to-door fulfilment." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Premium global trade"
        accent="solutions"
        description="Ten focused capabilities, one seamless trade partner — covering every stage from sourcing and procurement to logistics and delivery."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="group bg-card border border-border rounded-xl p-7 hover:border-gold/50 hover:-translate-y-1 transition-all">
                <div className="rounded-lg gradient-navy p-3 w-fit mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 gradient-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-4 justify-center text-gold">
              <div className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">Our Process</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Inquiry to <span className="text-gradient-gold">delivery</span></h2>
            <p className="text-primary-foreground/65 text-lg">A nine-step workflow built around clarity and accountability.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS.map((p, i) => (
              <div key={p.title} className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 hover:border-gold/40 transition-all flex items-start gap-4">
                <div className="shrink-0 rounded-full gradient-gold w-11 h-11 flex items-center justify-center text-navy-deep font-display font-bold">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-primary-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{p.desc}</p>
                </div>
                {i < PROCESS.length - 1 && <ChevronRight className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gold hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function CtaBanner() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5">Need a tailored <span className="text-gradient-gold">trade solution?</span></h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="https://wa.me/919487501519" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-all">
            WhatsApp Us <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
