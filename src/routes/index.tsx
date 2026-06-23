import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  Ship,
  Search,
  Handshake,
  Layers,
  ArrowRight,
  MessageCircle,
  MapPin,
  Plane,
  Truck,
  Package,
  ShieldCheck,
  Award,
  Users,
  Clock,
  BadgeCheck,
  TrendingUp,
  Sprout,
  Factory,
  Cpu,
  Shirt,
  Pill,
  Wrench,
  Building2,
  ClipboardCheck,
  Route as RouteIcon,
  FileCheck2,
} from "lucide-react";
import { WorldMap } from "@/components/WorldMap";
import bgPort from "@/assets/bg-port.jpg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import bgCargo from "@/assets/bg-cargo.jpg";
import bgHandshake from "@/assets/bg-handshake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Beyond Borders Global — Global Trading, Sourcing & Procurement",
      },
      {
        name: "description",
        content:
          "Beyond Borders Global connects businesses with reliable global sourcing, procurement, import-export and supply chain solutions across Asia, Europe, the Middle East, North America and Oceania.",
      },
      {
        property: "og:title",
        content: "Beyond Borders Global — International Trading & Procurement",
      },
      {
        property: "og:description",
        content:
          "Connecting manufacturers, suppliers and distributors across global markets.",
      },
    ],
  }),
  component: Home,
});

const PREVIEW_SERVICES = [
  {
    icon: Search,
    title: "Global Sourcing",
    desc: "Discover trusted manufacturers and suppliers across continents.",
  },
  {
    icon: Ship,
    title: "Import & Export",
    desc: "Customs clearance, documentation and full regulatory compliance.",
  },
  {
    icon: Handshake,
    title: "Procurement",
    desc: "End-to-end procurement aligned with your specs and budget.",
  },
  {
    icon: Layers,
    title: "Supply Chain Solutions",
    desc: "Optimised, transparent supply chains from origin to destination.",
  },
];

const HIGHLIGHT_MARKETS = [
  "India",
  "China",
  "UAE",
  "United Kingdom",
  "Europe",
  "Canada",
  "Australia",
  "Southeast Asia",
];

const STATS = [
  { value: "25+", label: "Countries Served" },
  { value: "500+", label: "Verified Suppliers" },
  { value: "10+", label: "Industries Covered" },
  { value: "100%", label: "Quality Commitment" },
];

const TRADE_DESK = [
  {
    icon: ClipboardCheck,
    title: "Verified before quote",
    desc: "Supplier checks, documentation review and clear commercial terms before you commit.",
  },
  {
    icon: FileCheck2,
    title: "Shipment-ready paperwork",
    desc: "Invoices, packing lists, certificates and customs documents coordinated in one flow.",
  },
  {
    icon: RouteIcon,
    title: "Route-to-door visibility",
    desc: "Freight planning, milestone updates and delivery coordination from origin to destination.",
  },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Verified Supplier Network",
    desc: "Every partner is vetted for quality, compliance and consistent delivery performance.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Independent inspections, pre-shipment QC and full documentation on every consignment.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Dedicated logistics coordination ensures predictable lead times across every route.",
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    desc: "A single point of contact managing your inquiry from quotation to final delivery.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    desc: "Clear, itemised quotations with no hidden charges — landed cost clarity from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Operations",
    desc: "From sample orders to full container loads, we scale capacity to match your growth.",
  },
];

const INDUSTRIES = [
  { icon: Sprout, name: "Agriculture & Food" },
  { icon: Factory, name: "Industrial Goods" },
  { icon: Cpu, name: "Electronics" },
  { icon: Shirt, name: "Textiles & Apparel" },
  { icon: Pill, name: "Pharma & Healthcare" },
  { icon: Wrench, name: "Hardware & Tools" },
  { icon: Building2, name: "Construction Materials" },
  { icon: Package, name: "Consumer Goods" },
];

const PROCESS = [
  {
    step: "01",
    title: "Inquiry",
    desc: "Share your product specifications and target market requirements.",
  },
  {
    step: "02",
    title: "Sourcing",
    desc: "We identify and shortlist verified suppliers from our global network.",
  },
  {
    step: "03",
    title: "Quotation",
    desc: "Receive transparent, fully landed pricing with timelines.",
  },
  {
    step: "04",
    title: "Production & QC",
    desc: "Order placement, monitoring and pre-shipment quality inspection.",
  },
  {
    step: "05",
    title: "Logistics",
    desc: "Customs, documentation, freight forwarding and tracking.",
  },
  {
    step: "06",
    title: "Delivery",
    desc: "On-time, door-to-door delivery and post-shipment support.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[110vh] flex items-center overflow-hidden">
        <img
          src={bgPort}
          alt="Global shipping port at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-deep/80 to-navy/70" />
        <FloatingSilhouettes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10 w-full">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur px-4 py-1.5 mb-8 animate-float-up"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold">
                International Trade · Sourcing · Procurement
              </span>
            </div>
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.04] mb-6 text-balance animate-float-up"
              style={{ animationDelay: "0.15s" }}
            >
              Beyond Borders
              <span className="block text-gradient-gold italic">Global</span>
            </h1>
            <p
              className="text-xl lg:text-2xl text-primary-foreground/90 mb-5 max-w-3xl leading-snug font-light animate-float-up"
              style={{ animationDelay: "0.3s" }}
            >
              Connecting Markets. Creating Opportunities. Delivering Worldwide.
            </p>
            <p
              className="text-base text-primary-foreground/75 mb-10 max-w-2xl leading-relaxed animate-float-up"
              style={{ animationDelay: "0.45s" }}
            >
              A premier international trading partner specialising in global
              sourcing, procurement, import-export and end-to-end supply chain
              solutions for businesses across five continents.
            </p>
            <div
              className="flex flex-wrap gap-3 animate-float-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow hover:-translate-y-0.5 transition-all"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/5 backdrop-blur px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/15 hover:-translate-y-0.5 transition-all"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/15 px-7 py-4 text-sm font-medium text-primary-foreground/90 hover:text-gold hover:border-gold/40 hover:-translate-y-0.5 transition-all"
              >
                Contact Us <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative py-12 overflow-hidden">
        <img
          src={bgWarehouse}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="animate-float-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-gradient-gold">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRADE DESK */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="grid lg:grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-4 shadow-luxury">
            {TRADE_DESK.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl p-5 transition-colors hover:bg-cream"
              >
                <div className="shrink-0 rounded-lg gradient-gold p-3 h-fit">
                  <item.icon className="h-5 w-5 text-navy-deep" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-gold-dark" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                Who We Are
              </span>
              <div className="h-px w-8 bg-gold-dark" />
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              A trusted partner in{" "}
              <span className="text-gradient-gold">international trade</span>
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                Beyond Borders Global is an international trading, sourcing and
                procurement company connecting businesses with verified
                suppliers and manufacturers across global markets.
              </p>

              <p>
                We provide reliable sourcing, import-export, logistics
                coordination and supply chain solutions for importers,
                exporters, distributors and corporate buyers worldwide.
              </p>

              <p>
                Headquartered in India, we serve clients across Asia, Europe,
                the Middle East, North America and Oceania through a network of
                trusted manufacturers, logistics partners and trade specialists.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md gradient-navy px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-luxury transition-all"
              >
                About the Company
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold-dark transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES PREVIEW */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <div className="h-px w-8 bg-gold-dark" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                Core Services
              </span>
              <div className="h-px w-8 bg-gold-dark" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              What we <span className="text-gradient-gold">do</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Four foundational capabilities that power global trade for our
              clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PREVIEW_SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-card border border-border rounded-xl p-7 hover:border-gold/50 hover:-translate-y-2 hover:shadow-luxury transition-all duration-300 animate-float-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="rounded-lg gradient-navy p-3 w-fit mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-0.5 gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold-dark transition-all"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <div className="h-px w-8 bg-gold-dark" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                Why Choose Us
              </span>
              <div className="h-px w-8 bg-gold-dark" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              The Beyond Borders{" "}
              <span className="text-gradient-gold">advantage</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Why importers, exporters and corporate buyers choose us as their
              global trade partner.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((f, i) => (
              <div
                key={f.title}
                className="group flex gap-4 p-7 rounded-xl border border-border bg-card hover:border-gold/40 hover:shadow-luxury transition-all duration-300 animate-float-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="shrink-0 rounded-lg gradient-gold p-3 h-fit group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 text-navy-deep" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <div className="h-px w-8 bg-gold-dark" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                Industries Served
              </span>
              <div className="h-px w-8 bg-gold-dark" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              Sectors we <span className="text-gradient-gold">specialise</span>{" "}
              in
            </h2>
            <p className="text-muted-foreground text-lg">
              Dedicated category expertise across the industries that move
              global trade.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.name}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-gold/50 hover:-translate-y-1 hover:shadow-luxury transition-all duration-300 animate-float-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="rounded-full gradient-navy p-4 group-hover:scale-110 transition-transform">
                  <ind.icon className="h-6 w-6 text-gold" />
                </div>
                <span className="text-sm font-medium text-center">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold-dark transition-all"
            >
              Explore All Industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-14 lg:py-20 gradient-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-5 justify-center text-gold">
              <div className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                Global Presence
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-primary-foreground">
              A trade network spanning{" "}
              <span className="text-gradient-gold">continents</span>
            </h2>
            <p className="text-primary-foreground/65 text-lg">
              Operating across key markets in Asia, Europe, the Middle East,
              North America and Oceania.
            </p>
          </div>
          <WorldMap />
          <div className="mt-10 flex flex-wrap justify-center gap-2.5 mb-12">
            {HIGHLIGHT_MARKETS.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/5 border border-gold/25 px-4 py-1.5 text-sm text-primary-foreground/90"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" /> {c}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/global-markets"
              className="inline-flex items-center gap-2 rounded-md gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all"
            >
              Explore Global Markets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <div className="h-px w-8 bg-gold-dark" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                How We Work
              </span>
              <div className="h-px w-8 bg-gold-dark" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              From inquiry to{" "}
              <span className="text-gradient-gold">delivery</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A transparent six-step process built for accountability at every
              stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="relative p-7 rounded-xl border border-border bg-card hover:border-gold/40 hover:shadow-luxury transition-all duration-300 animate-float-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="font-display text-5xl font-bold text-gradient-gold opacity-90 mb-3">
                  {p.step}
                </div>
                <h3 className="font-display text-lg font-semibold mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <img
          src={bgCargo}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <Globe
            className="h-10 w-10 text-gold mx-auto mb-5"
            strokeWidth={1.5}
          />
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-5 text-balance">
            Ready to expand your business{" "}
            <span className="text-gradient-gold italic">globally?</span>
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-9 max-w-2xl mx-auto">
            Partner with Beyond Borders Global — your single, dependable gateway
            to international trade, sourcing and supply chain excellence.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md gradient-gold px-8 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all"
            >
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/become-a-supplier"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/5 backdrop-blur px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/15 transition-all"
            >
              Become a Supplier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FloatingSilhouettes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.10] animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeDasharray="2 4"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="90"
            ry="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="35"
            ry="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
          />
        </svg>
      </div>
      <div className="absolute left-[8%] bottom-[18%] text-gold/30 animate-float-slow">
        <Ship className="h-16 w-16 lg:h-24 lg:w-24" strokeWidth={1} />
      </div>
      <div className="absolute right-[15%] top-[18%] text-gold/25 animate-float-slow-rev">
        <Plane
          className="h-12 w-12 lg:h-20 lg:w-20 -rotate-12"
          strokeWidth={1}
        />
      </div>
      <div
        className="absolute right-[35%] bottom-[12%] text-gold/25 animate-float-slow"
        style={{ animationDelay: "2s" }}
      >
        <Truck className="h-10 w-10 lg:h-16 lg:w-16" strokeWidth={1} />
      </div>
      <div
        className="absolute left-[55%] top-[22%] text-gold/20 animate-float-slow-rev"
        style={{ animationDelay: "1s" }}
      >
        <Package className="h-10 w-10 lg:h-14 lg:w-14" strokeWidth={1} />
      </div>
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <g
          fill="none"
          stroke="oklch(0.85 0.13 82)"
          strokeWidth="1.2"
          opacity="0.35"
        >
          <path
            d="M 200,650 Q 600,200 1100,400"
            className="animate-draw-line"
          />
          <path
            d="M 300,300 Q 800,700 1400,350"
            className="animate-draw-line"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M 150,500 Q 700,100 1300,600"
            className="animate-draw-line"
            style={{ animationDelay: "2s" }}
          />
        </g>
      </svg>
    </div>
  );
}
