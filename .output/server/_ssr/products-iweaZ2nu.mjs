import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-DZ5mlAbN.mjs";
import { i as Sprout, j as Sparkles, W as Wheat, k as ShoppingBag, l as Factory, m as Package, n as HardHat, o as Cog, p as Shirt, q as Box, A as ArrowRight } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const PRODUCTS = [{
  icon: Sprout,
  name: "Agricultural Products",
  tag: "Grains · Pulses · Produce"
}, {
  icon: Sparkles,
  name: "Coconut Products",
  tag: "Oil · Milk · Coir · Husk"
}, {
  icon: Wheat,
  name: "Spices & Seasonings",
  tag: "Pepper · Cardamom · Turmeric"
}, {
  icon: ShoppingBag,
  name: "Food Products",
  tag: "Processed · Packaged · Specialty"
}, {
  icon: Factory,
  name: "Industrial Products",
  tag: "Raw materials · Components"
}, {
  icon: Package,
  name: "Consumer Goods",
  tag: "FMCG · Household · Personal care"
}, {
  icon: HardHat,
  name: "Building Materials",
  tag: "Tiles · Stone · Hardware"
}, {
  icon: Cog,
  name: "Machinery & Equipment",
  tag: "Industrial · Agricultural"
}, {
  icon: Shirt,
  name: "Textiles & Apparel",
  tag: "Fabrics · Garments · Home"
}, {
  icon: Box,
  name: "Custom Sourcing",
  tag: "Tell us — we'll find it"
}];
function Products() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Products", title: "What we source", accent: "& trade", description: "From farm produce to industrial machinery — we source globally across diversified product categories." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-card border border-border rounded-xl overflow-hidden hover:shadow-luxury hover:border-gold/40 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-36 gradient-navy relative flex items-center justify-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 shimmer-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-14 w-14 text-gold relative z-10 group-hover:scale-110 transition-transform", strokeWidth: 1.5 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-1", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground tracking-wide", children: p.tag })
      ] })
    ] }, p.name)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold mb-4", children: [
        "Looking for something ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "specific?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Share your requirements — our sourcing team will deliver a tailored quotation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: [
        "Request a Quote ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  Products as component
};
