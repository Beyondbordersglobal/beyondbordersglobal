import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { W as WorldMap } from "./WorldMap-Bz4B58i-.mjs";
import { A as ArrowRight, M as MessageCircle, w as ClipboardCheck, x as FileCheckCorner, R as Route, d as Search, e as Ship, H as Handshake, L as Layers, y as ShieldCheck, h as Award, z as Clock, U as Users, I as BadgeCheck, g as TrendingUp, i as Sprout, l as Factory, s as Cpu, p as Shirt, J as Pill, K as Wrench, O as Building2, m as Package, b as MapPin, G as Globe, Q as Plane, T as Truck } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const bgPort = "/assets/bg-port-D5RDxnjh.jpg";
const bgWarehouse = "/assets/bg-warehouse-D2BaIw3i.jpg";
const bgCargo = "/assets/bg-cargo-BF12WPFS.jpg";
const PREVIEW_SERVICES = [{
  icon: Search,
  title: "Global Sourcing",
  desc: "Discover trusted manufacturers and suppliers across continents."
}, {
  icon: Ship,
  title: "Import & Export",
  desc: "Customs clearance, documentation and full regulatory compliance."
}, {
  icon: Handshake,
  title: "Procurement",
  desc: "End-to-end procurement aligned with your specs and budget."
}, {
  icon: Layers,
  title: "Supply Chain Solutions",
  desc: "Optimised, transparent supply chains from origin to destination."
}];
const HIGHLIGHT_MARKETS = ["India", "China", "UAE", "United Kingdom", "Europe", "Canada", "Australia", "Southeast Asia"];
const STATS = [{
  value: "25+",
  label: "Countries Served"
}, {
  value: "500+",
  label: "Verified Suppliers"
}, {
  value: "10+",
  label: "Industries Covered"
}, {
  value: "100%",
  label: "Quality Commitment"
}];
const TRADE_DESK = [{
  icon: ClipboardCheck,
  title: "Verified before quote",
  desc: "Supplier checks, documentation review and clear commercial terms before you commit."
}, {
  icon: FileCheckCorner,
  title: "Shipment-ready paperwork",
  desc: "Invoices, packing lists, certificates and customs documents coordinated in one flow."
}, {
  icon: Route,
  title: "Route-to-door visibility",
  desc: "Freight planning, milestone updates and delivery coordination from origin to destination."
}];
const WHY_US = [{
  icon: ShieldCheck,
  title: "Verified Supplier Network",
  desc: "Every partner is vetted for quality, compliance and consistent delivery performance."
}, {
  icon: Award,
  title: "Quality Assurance",
  desc: "Independent inspections, pre-shipment QC and full documentation on every consignment."
}, {
  icon: Clock,
  title: "On-Time Delivery",
  desc: "Dedicated logistics coordination ensures predictable lead times across every route."
}, {
  icon: Users,
  title: "Dedicated Account Team",
  desc: "A single point of contact managing your inquiry from quotation to final delivery."
}, {
  icon: BadgeCheck,
  title: "Transparent Pricing",
  desc: "Clear, itemised quotations with no hidden charges — landed cost clarity from day one."
}, {
  icon: TrendingUp,
  title: "Scalable Operations",
  desc: "From sample orders to full container loads, we scale capacity to match your growth."
}];
const INDUSTRIES = [{
  icon: Sprout,
  name: "Agriculture & Food"
}, {
  icon: Factory,
  name: "Industrial Goods"
}, {
  icon: Cpu,
  name: "Electronics"
}, {
  icon: Shirt,
  name: "Textiles & Apparel"
}, {
  icon: Pill,
  name: "Pharma & Healthcare"
}, {
  icon: Wrench,
  name: "Hardware & Tools"
}, {
  icon: Building2,
  name: "Construction Materials"
}, {
  icon: Package,
  name: "Consumer Goods"
}];
const PROCESS = [{
  step: "01",
  title: "Inquiry",
  desc: "Share your product specifications and target market requirements."
}, {
  step: "02",
  title: "Sourcing",
  desc: "We identify and shortlist verified suppliers from our global network."
}, {
  step: "03",
  title: "Quotation",
  desc: "Receive transparent, fully landed pricing with timelines."
}, {
  step: "04",
  title: "Production & QC",
  desc: "Order placement, monitoring and pre-shipment quality inspection."
}, {
  step: "05",
  title: "Logistics",
  desc: "Customs, documentation, freight forwarding and tracking."
}, {
  step: "06",
  title: "Delivery",
  desc: "On-time, door-to-door delivery and post-shipment support."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[110vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bgPort, alt: "Global shipping port at sunset", width: 1920, height: 1080, className: "absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-deep/80 to-navy/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingSilhouettes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur px-4 py-1.5 mb-8 animate-float-up", style: {
          animationDelay: "0.05s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium tracking-[0.25em] uppercase text-gold", children: "International Trade · Sourcing · Procurement" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.04] mb-6 text-balance animate-float-up", style: {
          animationDelay: "0.15s"
        }, children: [
          "Beyond Borders",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient-gold italic", children: "Global" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl lg:text-2xl text-primary-foreground/90 mb-5 max-w-3xl leading-snug font-light animate-float-up", style: {
          animationDelay: "0.3s"
        }, children: "Connecting Markets. Creating Opportunities. Delivering Worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-primary-foreground/75 mb-10 max-w-2xl leading-relaxed animate-float-up", style: {
          animationDelay: "0.45s"
        }, children: "A premier international trading partner specialising in global sourcing, procurement, import-export and end-to-end supply chain solutions for businesses across five continents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 animate-float-up", style: {
          animationDelay: "0.6s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow hover:-translate-y-0.5 transition-all", children: [
            "Request a Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/5 backdrop-blur px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/15 hover:-translate-y-0.5 transition-all", children: "Explore Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md border border-primary-foreground/15 px-7 py-4 text-sm font-medium text-primary-foreground/90 hover:text-gold hover:border-gold/40 hover:-translate-y-0.5 transition-all", children: [
            "Contact Us ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bgWarehouse, alt: "", "aria-hidden": "true", width: 1920, height: 1080, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy-deep/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-float-up", style: {
        animationDelay: `${i * 0.1}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl lg:text-5xl font-bold text-gradient-gold", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/70", children: s.label })
      ] }, s.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-4 shadow-luxury", children: TRADE_DESK.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-xl p-5 transition-colors hover:bg-cream", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 rounded-lg gradient-gold p-3 h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-navy-deep" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-1", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
      ] })
    ] }, item.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark", children: "Who We Are" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight", children: [
        "A trusted partner in",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "international trade" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Beyond Borders Global is an international trading, sourcing and procurement company connecting businesses with verified suppliers and manufacturers across global markets." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We provide reliable sourcing, import-export, logistics coordination and supply chain solutions for importers, exporters, distributors and corporate buyers worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Headquartered in India, we serve clients across Asia, Europe, the Middle East, North America and Oceania through a network of trusted manufacturers, logistics partners and trade specialists." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "inline-flex items-center gap-2 rounded-md gradient-navy px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-luxury transition-all", children: [
          "About the Company",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-md border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold-dark transition-all", children: "Our Services" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 lg:py-20 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-3 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark", children: "Core Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-5xl font-bold mb-4", children: [
          "What we ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "do" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Four foundational capabilities that power global trade for our clients." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: PREVIEW_SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative bg-card border border-border rounded-xl p-7 hover:border-gold/50 hover:-translate-y-2 hover:shadow-luxury transition-all duration-300 animate-float-up", style: {
        animationDelay: `${i * 0.1}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg gradient-navy p-3 w-fit mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-0.5 gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold-dark transition-all", children: [
        "View All Services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 lg:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark", children: "Why Choose Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-5xl font-bold mb-4", children: [
          "The Beyond Borders",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "advantage" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Why importers, exporters and corporate buyers choose us as their global trade partner." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: WHY_US.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex gap-4 p-7 rounded-xl border border-border bg-card hover:border-gold/40 hover:shadow-luxury transition-all duration-300 animate-float-up", style: {
        animationDelay: `${i * 0.08}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 rounded-lg gradient-gold p-3 h-fit group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5 text-navy-deep" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-1.5", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
        ] })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 lg:py-20 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark", children: "Industries Served" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-5xl font-bold mb-4", children: [
          "Sectors we ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "specialise" }),
          " ",
          "in"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Dedicated category expertise across the industries that move global trade." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-gold/50 hover:-translate-y-1 hover:shadow-luxury transition-all duration-300 animate-float-up", style: {
        animationDelay: `${i * 0.05}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full gradient-navy p-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ind.icon, { className: "h-6 w-6 text-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-center", children: ind.name })
      ] }, ind.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/industries", className: "inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold-dark transition-all", children: [
        "Explore All Industries ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 lg:py-20 gradient-navy text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 justify-center text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em]", children: "Global Presence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-5xl font-bold mb-4 text-primary-foreground", children: [
          "A trade network spanning",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "continents" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/65 text-lg", children: "Operating across key markets in Asia, Europe, the Middle East, North America and Oceania." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorldMap, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap justify-center gap-2.5 mb-12", children: HIGHLIGHT_MARKETS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary-foreground/5 border border-gold/25 px-4 py-1.5 text-sm text-primary-foreground/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-gold" }),
        " ",
        c
      ] }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/global-markets", className: "inline-flex items-center gap-2 rounded-md gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: [
        "Explore Global Markets ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 lg:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark", children: "How We Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold-dark" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-5xl font-bold mb-4", children: [
          "From inquiry to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "delivery" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "A transparent six-step process built for accountability at every stage." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: PROCESS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-7 rounded-xl border border-border bg-card hover:border-gold/40 hover:shadow-luxury transition-all duration-300 animate-float-up", style: {
        animationDelay: `${i * 0.08}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold text-gradient-gold opacity-90 mb-3", children: p.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-1.5", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc })
      ] }, p.step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 lg:py-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bgCargo, alt: "", "aria-hidden": "true", width: 1920, height: 1080, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy-deep/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-10 w-10 text-gold mx-auto mb-5", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-5xl font-bold mb-5 text-balance", children: [
          "Ready to expand your business",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold italic", children: "globally?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg mb-9 max-w-2xl mx-auto", children: "Partner with Beyond Borders Global — your single, dependable gateway to international trade, sourcing and supply chain excellence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md gradient-gold px-8 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: [
            "Request a Consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/become-a-supplier", className: "inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/5 backdrop-blur px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/15 transition-all", children: "Become a Supplier" })
        ] })
      ] })
    ] })
  ] });
}
function FloatingSilhouettes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.10] animate-spin-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "w-full h-full text-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "90", fill: "none", stroke: "currentColor", strokeWidth: "0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "70", fill: "none", stroke: "currentColor", strokeWidth: "0.3", strokeDasharray: "2 4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "100", rx: "90", ry: "35", fill: "none", stroke: "currentColor", strokeWidth: "0.4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "100", rx: "35", ry: "90", fill: "none", stroke: "currentColor", strokeWidth: "0.4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[8%] bottom-[18%] text-gold/30 animate-float-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ship, { className: "h-16 w-16 lg:h-24 lg:w-24", strokeWidth: 1 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[15%] top-[18%] text-gold/25 animate-float-slow-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-12 w-12 lg:h-20 lg:w-20 -rotate-12", strokeWidth: 1 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[35%] bottom-[12%] text-gold/25 animate-float-slow", style: {
      animationDelay: "2s"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-10 w-10 lg:h-16 lg:w-16", strokeWidth: 1 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[55%] top-[22%] text-gold/20 animate-float-slow-rev", style: {
      animationDelay: "1s"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-10 w-10 lg:h-14 lg:w-14", strokeWidth: 1 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 1600 900", preserveAspectRatio: "xMidYMid slice", className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { fill: "none", stroke: "oklch(0.85 0.13 82)", strokeWidth: "1.2", opacity: "0.35", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 200,650 Q 600,200 1100,400", className: "animate-draw-line" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 300,300 Q 800,700 1400,350", className: "animate-draw-line", style: {
        animationDelay: "1s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 150,500 Q 700,100 1300,600", className: "animate-draw-line", style: {
        animationDelay: "2s"
      } })
    ] }) })
  ] });
}
export {
  Home as component
};
