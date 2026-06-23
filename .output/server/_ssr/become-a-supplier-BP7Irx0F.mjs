import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as CircleCheckBig, A as ArrowRight } from "../_libs/lucide-react.mjs";

function SupplierPage() {
  const [sent, setSent] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(`SUPPLIER REGISTRATION

Company Name: ${f.get("company")}
Country: ${f.get("country")}
Product Category: ${f.get("category")}
Website: ${f.get("website")}
Contact Person: ${f.get("contact")}
Email: ${f.get("email")}
Phone Number: ${f.get("phone")}

Product Details:
${f.get("details")}`);
    window.location.href = `mailto:rahul.mahalingam99@gmail.com?subject=Supplier%20Registration%20-%20${encodeURIComponent(String(f.get("company") ?? ""))}&body=${body}`;
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background pt-16 lg:pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-navy text-primary-foreground py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Supplier Network" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl lg:text-6xl font-bold mb-6", children: [
        "Become a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Supplier" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-primary-foreground/80 max-w-2xl mx-auto", children: "Join our trusted network of manufacturers and exporters. Connect with buyers across Asia, Europe, the Middle East, North America, and Oceania." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "bg-card border border-border rounded-2xl p-8 shadow-luxury space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold mb-2", children: "Supplier Registration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Tell us about your company. Our procurement team will review and reach out." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { name: "company", label: "Company Name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { name: "country", label: "Country", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { name: "category", label: "Product Category", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { name: "website", label: "Website", type: "url" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { name: "contact", label: "Contact Person", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { name: "email", label: "Email", type: "email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { name: "phone", label: "Phone Number", type: "tel", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: [
          "Product Details",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-dark ml-0.5", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "details", rows: 5, required: true, className: "w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40", placeholder: "Briefly describe your products, capacity, certifications, MOQ..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-md gradient-gold px-6 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
        " Registration Prepared — Send Email"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Submit Registration ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }) })
  ] });
}
function SField({
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
  SupplierPage as component
};
