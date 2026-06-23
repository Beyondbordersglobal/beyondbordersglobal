import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DZ5mlAbN.mjs";
import { r as UtensilsCrossed, n as HardHat, l as Factory, D as Dumbbell, k as ShoppingBag, p as Shirt, s as Cpu, A as ArrowRight } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const INDUSTRIES = [{
  icon: UtensilsCrossed,
  name: "Food & Agriculture",
  desc: "Grains, pulses, produce, processed foods, spices and specialty agricultural exports."
}, {
  icon: HardHat,
  name: "Construction",
  desc: "Tiles, stone, hardware, finishing materials and project supply for global construction."
}, {
  icon: Factory,
  name: "Industrial Manufacturing",
  desc: "Raw materials, components and finished industrial goods for B2B buyers."
}, {
  icon: Dumbbell,
  name: "Fitness Equipment",
  desc: "Commercial and home fitness equipment sourced from leading manufacturers."
}, {
  icon: ShoppingBag,
  name: "Consumer Goods",
  desc: "FMCG, household, personal care and lifestyle categories at scale."
}, {
  icon: Shirt,
  name: "Textiles",
  desc: "Fabrics, garments and home textiles — bulk and private-label."
}, {
  icon: Cpu,
  name: "Electronics",
  desc: "Consumer electronics, components and accessories from verified suppliers."
}];
function Industries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Industries", title: "Industries we", accent: "serve", description: "Deep category expertise across seven global verticals — combining sourcing capability with sector know-how." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: INDUSTRIES.map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-card border border-border rounded-xl p-7 hover:border-gold/50 hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl gradient-navy w-14 h-14 mb-5 flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ind.icon, { className: "h-6 w-6 text-gold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: ind.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ind.desc })
    ] }, ind.name)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold mb-5", children: [
        "A sector partner you can ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "rely on" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: [
        "Discuss Your Requirement ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  Industries as component
};
