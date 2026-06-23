import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-DZ5mlAbN.mjs";
import { P as Phone, M as MessageCircle, c as Mail, b as MapPin, A as ArrowRight } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "Start your global", accent: "trade journey", description: "Tell us what you need — we respond to every enquiry within 24 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl gradient-navy text-primary-foreground p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-2", children: "Business Development" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-6", children: "Rahul Mahalingam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: Phone, label: "Phone", value: "+91 9487501519", href: "tel:+919487501519" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: MessageCircle, label: "WhatsApp", value: "+91 9487501519", href: "https://wa.me/919487501519" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: Mail, label: "Email", value: "rahul.mahalingam99@gmail.com", href: "mailto:rahul.mahalingam99@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-gold" }),
            " Head Office"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "1/256/1B, Puliyamarathu Thottam, Senjeri Post, Kumarapalayam, Sulur Taluk, Coimbatore, Tamil Nadu — 641669, India." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded-lg overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Map", src: "https://www.google.com/maps?q=Kumarapalayam+Senjeri+Sulur+Coimbatore+641669&output=embed", className: "w-full h-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, {}) })
    ] }) })
  ] });
}
function Row({
  icon: Icon,
  label,
  value,
  href
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "flex items-center gap-4 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-gold/10 border border-gold/20 p-3 group-hover:bg-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold group-hover:text-navy-deep" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-primary-foreground/50", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate", children: value })
    ] })
  ] });
}
function InquiryForm() {
  const [sent, setSent] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(`Name: ${f.get("name")}
Company: ${f.get("company")}
Country: ${f.get("country")}
Email: ${f.get("email")}
Phone: ${f.get("phone")}
Product: ${f.get("product")}
Quantity: ${f.get("quantity")}

Message:
${f.get("message")}`);
    window.location.href = `mailto:rahul.mahalingam99@gmail.com?subject=Trade%20Inquiry%20from%20${encodeURIComponent(String(f.get("name") ?? ""))}&body=${body}`;
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "bg-card border border-border rounded-2xl p-8 shadow-luxury space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold mb-2", children: "Send us an enquiry" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "We respond within 24 hours. Your information stays confidential." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "name", label: "Full Name", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "company", label: "Company Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "country", label: "Country", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "email", label: "Email", type: "email", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "phone", label: "Phone Number", type: "tel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "product", label: "Product Requirement", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "quantity", label: "Quantity / MOQ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, className: "w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40", placeholder: "Tell us about your sourcing requirements..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-md gradient-gold px-6 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all", children: [
      sent ? "Inquiry Prepared — Send Email" : "Submit Inquiry",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] })
  ] });
}
function Field({
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
  Contact as component
};
