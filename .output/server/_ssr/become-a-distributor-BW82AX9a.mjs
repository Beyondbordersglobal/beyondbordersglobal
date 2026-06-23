import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as CircleCheckBig, A as ArrowRight } from "../_libs/lucide-react.mjs";

function DistributorPage() {
  const [sent, setSent] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(`DISTRIBUTOR INQUIRY

Company Name: ${f.get("company")}
Country: ${f.get("country")}
Business Type: ${f.get("businessType")}
Product Interest: ${f.get("interest")}

Contact Information:
${f.get("contact")}`);
    window.location.href = `mailto:rahul.mahalingam99@gmail.com?subject=Distributor%20Inquiry%20-%20${encodeURIComponent(String(f.get("company") ?? ""))}&body=${body}`;
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background pt-16 lg:pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-navy text-primary-foreground py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Distribution Partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl lg:text-6xl font-bold mb-6", children: [
        "Become a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Distributor" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-primary-foreground/80 max-w-2xl mx-auto", children: "Access international product portfolios and grow your market with reliable supply from Beyond Borders Global." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "bg-card border border-border rounded-2xl p-8 shadow-luxury space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold mb-2", children: "Distributor Inquiry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Share your details and our partnerships team will be in touch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DField, { name: "company", label: "Company Name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DField, { name: "country", label: "Country", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DField, { name: "businessType", label: "Business Type", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DField, { name: "interest", label: "Product Interest", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: [
          "Contact Information",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-dark ml-0.5", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "contact", rows: 4, required: true, className: "w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40", placeholder: "Name, email, phone, website, role..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-md gradient-gold px-6 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
        " Inquiry Prepared — Send Email"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Submit Inquiry ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }) })
  ] });
}
function DField({
  name,
  label,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-dark ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, className: "w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" })
  ] });
}
export {
  DistributorPage as component
};
