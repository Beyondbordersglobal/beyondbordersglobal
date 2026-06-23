import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as ChevronRight } from "../_libs/lucide-react.mjs";
function PageHero({ eyebrow, title, accent, description, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 lg:pt-40 pb-16 lg:pb-24 gradient-navy text-primary-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "ph-dots", width: "24", height: "24", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "2", cy: "2", r: "1", fill: "currentColor", className: "text-gold" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#ph-dots)" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-xs text-primary-foreground/60 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-gold", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: eyebrow })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: eyebrow })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance", children: [
          title,
          accent && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gradient-gold italic", children: [
            " ",
            accent
          ] })
        ] }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-2xl font-light", children: description }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children })
      ] })
    ] })
  ] });
}
export {
  PageHero as P
};
