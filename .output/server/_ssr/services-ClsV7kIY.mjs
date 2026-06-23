import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DZ5mlAbN.mjs";
import { d as Search, H as Handshake, e as Ship, L as Layers, F as FlaskConical, T as Truck, f as Shield, g as TrendingUp, U as Users, h as Award, C as ChevronRight, A as ArrowRight, M as MessageCircle } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const SERVICES = [{
  icon: Search,
  title: "Global Sourcing",
  desc: "We identify, evaluate and engage trusted manufacturers and suppliers across continents — matched to your specifications, MOQ and budget."
}, {
  icon: Handshake,
  title: "International Procurement",
  desc: "End-to-end procurement: RFQs, negotiation, contracting and order management aligned with your commercial and quality requirements."
}, {
  icon: Ship,
  title: "Import & Export Solutions",
  desc: "Customs clearance, documentation, INCOTERMS guidance and full regulatory compliance across all major trade lanes."
}, {
  icon: Layers,
  title: "Supply Chain Management",
  desc: "Optimised, transparent supply chains designed for visibility and resilience — from origin to destination."
}, {
  icon: FlaskConical,
  title: "Product Development",
  desc: "Concept to production-ready: sampling, specification development, packaging design and private-label execution."
}, {
  icon: Truck,
  title: "Logistics Coordination",
  desc: "Multimodal freight by sea, air and land — with route optimisation and real-time shipment visibility."
}, {
  icon: Shield,
  title: "Supplier Verification",
  desc: "Factory audits, KYC checks, certification reviews and rigorous quality assurance before any commitment."
}, {
  icon: TrendingUp,
  title: "Market Entry Support",
  desc: "Strategic guidance, partner identification and on-ground execution for launching in new international markets."
}, {
  icon: Users,
  title: "Business Matchmaking",
  desc: "Curated introductions between buyers, sellers and distributors across our verified global network."
}, {
  icon: Award,
  title: "Private Label & OEM",
  desc: "Custom-branded manufacturing tailored to your specifications, packaging and target markets."
}];
const PROCESS = [{
  title: "Inquiry",
  desc: "Share your requirement."
}, {
  title: "Sourcing",
  desc: "We identify trusted suppliers."
}, {
  title: "Quotation",
  desc: "Transparent, all-inclusive pricing."
}, {
  title: "Sampling",
  desc: "Verify quality before commit."
}, {
  title: "Order Confirmation",
  desc: "Secure terms & contract."
}, {
  title: "Production",
  desc: "Monitored manufacturing."
}, {
  title: "Quality Check",
  desc: "Pre-shipment inspection."
}, {
  title: "Shipping",
  desc: "Optimised global logistics."
}, {
  title: "Delivery",
  desc: "Door-to-door fulfilment."
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Services", title: "Premium global trade", accent: "solutions", description: "Ten focused capabilities, one seamless trade partner — covering every stage from sourcing and procurement to logistics and delivery." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-card border border-border rounded-xl p-7 hover:border-gold/50 hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg gradient-navy p-3 w-fit mb-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-gold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-3", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
    ] }, s.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28 gradient-navy text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-4 justify-center text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em]", children: "Our Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4", children: [
          "Inquiry to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "delivery" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/65 text-lg", children: "A nine-step workflow built around clarity and accountability." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: PROCESS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 hover:border-gold/40 transition-all flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 rounded-full gradient-gold w-11 h-11 flex items-center justify-center text-navy-deep font-display font-bold", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-primary-foreground mb-1", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70", children: p.desc })
        ] }),
        i < PROCESS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gold hidden lg:block" })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {})
  ] });
}
function CtaBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold mb-5", children: [
      "Need a tailored ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "trade solution?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: [
        "Request a Quote ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919487501519", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-all", children: [
        "WhatsApp Us ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" })
      ] })
    ] })
  ] }) });
}
export {
  Services as component
};
