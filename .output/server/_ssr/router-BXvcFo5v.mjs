import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-QaXDb8SN.mjs";

import "../_libs/seroval.mjs";
import { G as Globe, A as ArrowRight, M as MessageCircle, X, a as Menu, b as MapPin, P as Phone, c as Mail, B as Bot, S as Send } from "../_libs/lucide-react.mjs";
import { o as objectType, a as arrayType, s as stringType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";

import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const appCss = "/assets/styles-Cl6FDO23.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Global Markets", to: "/global-markets" },
  { label: "Contact", to: "/contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-40 transition-all duration-500 ${transparent ? "bg-transparent" : "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16 lg:h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative flex h-10 w-10 items-center justify-center rounded-lg gradient-navy ${transparent ? "ring-1 ring-gold/30" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-gold", strokeWidth: 2 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-base font-semibold ${transparent ? "text-primary-foreground" : "text-foreground"}`, children: "Beyond Borders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] uppercase tracking-[0.22em] ${transparent ? "text-gold" : "text-gold-dark"}`, children: "Global" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden xl:flex items-center gap-7", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              activeOptions: { exact: true },
              activeProps: { className: transparent ? "text-gold" : "text-foreground" },
              inactiveProps: { className: transparent ? "text-primary-foreground/80 hover:text-gold" : "text-muted-foreground hover:text-foreground" },
              className: "text-sm font-medium transition-colors",
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden xl:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center gap-1.5 rounded-md gradient-gold px-4 py-2 text-xs font-semibold text-navy-deep hover:shadow-gold-glow transition-all",
                children: [
                  "Request Quote ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/919487501519",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1.5 rounded-md bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1ebe57] transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
                  " WhatsApp"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `xl:hidden p-2 ${transparent ? "text-primary-foreground" : "text-foreground"}`,
              onClick: () => setOpen(!open),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }) }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:hidden bg-background border-b border-border shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-1", children: [
          NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              className: "block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md",
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/become-a-supplier", className: "block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md", children: "Become a Supplier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center gap-1.5 rounded-md gradient-gold px-4 py-3 text-xs font-semibold text-navy-deep", children: "Request Quote" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919487501519", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-1.5 rounded-md bg-[#25D366] px-4 py-3 text-xs font-semibold text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
              " WhatsApp"
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
const QUICK = [
  { l: "Home", to: "/" },
  { l: "About", to: "/about" },
  { l: "Services", to: "/services" },
  { l: "Products", to: "/products" }
];
const SERVICES_LIST = [
  "Global Sourcing",
  "Import & Export",
  "Procurement",
  "Supply Chain Solutions"
];
const MARKETS_LIST = [
  "India",
  "China",
  "UAE & Middle East",
  "Europe & UK",
  "America",
  "Australia"
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-navy-deep text-primary-foreground/80 pt-20 pb-8 border-t border-gold/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-10 w-10 items-center justify-center rounded-lg gradient-navy ring-1 ring-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-gold" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-semibold text-primary-foreground", children: "Beyond Borders Global" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-gold", children: "International Trade" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/60 leading-relaxed mb-6 max-w-sm", children: "Connecting Markets. Creating Opportunities. Delivering Worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm text-primary-foreground/60 leading-relaxed max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-gold mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "1/256/1B, Puliyamarathu Thottam, Senjeri Post, Kumarapalayam, Sulur Taluk, Coimbatore, Tamil Nadu — 641669, India" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: QUICK.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: i.to, className: "text-primary-foreground/60 hover:text-gold transition-colors", children: i.l }) }, i.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterTextCol, { title: "Services", items: SERVICES_LIST }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterTextCol, { title: "Markets", items: MARKETS_LIST })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 pb-10 mb-8 border-b border-primary-foreground/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, label: "Phone", value: "+91 9487501519", href: "tel:+919487501519" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Mail, label: "Email", value: "rahul.mahalingam99@gmail.com", href: "mailto:rahul.mahalingam99@gmail.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: MessageCircle, label: "WhatsApp", value: "+91 9487501519", href: "https://wa.me/919487501519" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Beyond Borders Global. All Rights Reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-gold" }),
        " Headquartered in Coimbatore, India · Serving Worldwide"
      ] })
    ] })
  ] }) });
}
function FooterTextCol({ title, items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-primary-foreground/60", children: i }, i)) })
  ] });
}
function ContactItem({ icon: Icon, label, value, href }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "flex items-center gap-3 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-gold/20 bg-gold/5 p-2.5 group-hover:bg-gold group-hover:border-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-gold group-hover:text-navy-deep" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-primary-foreground/40", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary-foreground truncate", children: value })
    ] })
  ] });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const MessageSchema = objectType({
  role: enumType(["user", "assistant"]),
  content: stringType().min(1).max(2e3)
});
const chatWithAssistant = createServerFn({
  method: "POST"
}).inputValidator((data) => objectType({
  messages: arrayType(MessageSchema).min(1).max(40)
}).parse(data)).handler(createSsrRpc("500732ef2651da76c4b9a7818243d2554bc8b3c8555b748ca6079e9445e99c49"));
const WA_URL = "https://wa.me/919487501519?text=Hello%20Beyond%20Borders%20Global%2C%20I%27d%20like%20to%20enquire%20about%20sourcing.";
function FloatingActions() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([
    {
      role: "assistant",
      content: "Hi! I'm an AI assistant. Ask me anything — I'll do my best to help."
    }
  ]);
  const send = useServerFn(chatWithAssistant);
  const scrollerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);
  async function onSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const { reply } = await send({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Connection hiccup — please try again in a moment." }
      ]);
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: WA_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "fixed bottom-6 left-6 z-50 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-7 w-7" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm rounded-2xl bg-card border border-gold/30 shadow-luxury overflow-hidden flex flex-col animate-float-up", style: { height: "min(560px, 80vh)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-navy text-primary-foreground p-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "AI Assistant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/60", children: "Online · ask me anything" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), "aria-label": "Close chat", className: "rounded-md p-1 hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollerRef, className: "flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30", children: [
        messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border text-foreground rounded-bl-sm"}`,
            children: m.content
          }
        ) }, i)),
        busy && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-gold animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-gold animate-bounce", style: { animationDelay: "0.15s" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-gold animate-bounce", style: { animationDelay: "0.3s" } })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "p-3 border-t border-border bg-card flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: input,
            onChange: (e) => setInput(e.target.value),
            placeholder: "Ask me anything...",
            className: "flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40",
            disabled: busy
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: busy || !input.trim(),
            "aria-label": "Send",
            className: "rounded-full bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center disabled:opacity-50 hover:bg-navy-light transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Beyond Borders Global — International Trade & Supply Chain Solutions" },
      { name: "description", content: "Beyond Borders Global connects businesses across global markets with reliable sourcing, procurement, import-export, and supply chain management solutions." },
      { name: "author", content: "Beyond Borders Global" },
      { property: "og:title", content: "Beyond Borders Global — International Trade & Supply Chain Solutions" },
      { property: "og:description", content: "Beyond Borders Global connects businesses across global markets with reliable sourcing, procurement, import-export, and supply chain management solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@BeyondBordersGlobal" },
      { name: "twitter:title", content: "Beyond Borders Global — International Trade & Supply Chain Solutions" },
      { name: "twitter:description", content: "Beyond Borders Global connects businesses across global markets with reliable sourcing, procurement, import-export, and supply chain management solutions." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/284d387a-5679-4a84-8810-915171ebd81f/id-preview-d5e992e8--0ffc3ab6-effa-4f72-8d44-ec461ddcac2c.lovable.app-1781525419569.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/284d387a-5679-4a84-8810-915171ebd81f/id-preview-d5e992e8--0ffc3ab6-effa-4f72-8d44-ec461ddcac2c.lovable.app-1781525419569.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-background text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {})
  ] });
}
const $$splitComponentImporter$8 = () => import("./services-ClsV7kIY.mjs");
const Route$8 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Beyond Borders Global"
    }, {
      name: "description",
      content: "Global sourcing, procurement, import-export, supply chain, logistics and product development services delivered by Beyond Borders Global."
    }, {
      property: "og:title",
      content: "Services — Beyond Borders Global"
    }, {
      property: "og:description",
      content: "Premium global trade and procurement solutions for buyers and sellers worldwide."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./products-iweaZ2nu.mjs");
const Route$7 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Products — Beyond Borders Global"
    }, {
      name: "description",
      content: "Explore the product categories sourced and traded by Beyond Borders Global — agriculture, food, industrial goods, machinery, textiles, building materials and more."
    }, {
      property: "og:title",
      content: "Products — Beyond Borders Global"
    }, {
      property: "og:description",
      content: "Global sourcing across agriculture, food, industrial goods, machinery and consumer categories."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./industries-Bpad1tSO.mjs");
const Route$6 = createFileRoute("/industries")({
  head: () => ({
    meta: [{
      title: "Industries — Beyond Borders Global"
    }, {
      name: "description",
      content: "Industries served by Beyond Borders Global: food & agriculture, construction, industrial manufacturing, fitness equipment, consumer goods, textiles and electronics."
    }, {
      property: "og:title",
      content: "Industries — Beyond Borders Global"
    }, {
      property: "og:description",
      content: "Trade and procurement expertise across seven core industry verticals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./global-markets-B48HHI5P.mjs");
const Route$5 = createFileRoute("/global-markets")({
  head: () => ({
    meta: [{
      title: "Global Markets — Beyond Borders Global"
    }, {
      name: "description",
      content: "Beyond Borders Global operates across India, China, UAE, Europe, UK, Canada, Australia and Southeast Asia — connecting buyers and suppliers worldwide."
    }, {
      property: "og:title",
      content: "Global Markets — Beyond Borders Global"
    }, {
      property: "og:description",
      content: "A trade network spanning continents and key international markets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-DbHAbOco.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Beyond Borders Global"
    }, {
      name: "description",
      content: "Contact Beyond Borders Global for sourcing, procurement, import-export and supply chain enquiries. Reach us by phone, WhatsApp or email."
    }, {
      property: "og:title",
      content: "Contact Beyond Borders Global"
    }, {
      property: "og:description",
      content: "Phone, WhatsApp and email contacts for global trade enquiries."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./become-a-supplier-BP7Irx0F.mjs");
const Route$3 = createFileRoute("/become-a-supplier")({
  head: () => ({
    meta: [{
      title: "Become a Supplier — Beyond Borders Global"
    }, {
      name: "description",
      content: "Join Beyond Borders Global's verified supplier network. Register your company to supply manufacturers, distributors, and global buyers."
    }, {
      property: "og:title",
      content: "Become a Supplier — Beyond Borders Global"
    }, {
      property: "og:description",
      content: "Register your company to join our verified global supplier network."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./become-a-distributor-BW82AX9a.mjs");
const Route$2 = createFileRoute("/become-a-distributor")({
  head: () => ({
    meta: [{
      title: "Become a Distributor — Beyond Borders Global"
    }, {
      name: "description",
      content: "Partner with Beyond Borders Global as a distributor. Access verified products and international supply chains."
    }, {
      property: "og:title",
      content: "Become a Distributor — Beyond Borders Global"
    }, {
      property: "og:description",
      content: "Become a distribution partner for our international product portfolio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CXgD1t0U.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Beyond Borders Global"
    }, {
      name: "description",
      content: "Learn about Beyond Borders Global — our mission, vision, global network, business model and the industries we serve across international markets."
    }, {
      property: "og:title",
      content: "About Beyond Borders Global"
    }, {
      property: "og:description",
      content: "An international trading and procurement company connecting global markets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dx0CsOmx.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Beyond Borders Global — Global Trading, Sourcing & Procurement"
    }, {
      name: "description",
      content: "Beyond Borders Global connects businesses with reliable global sourcing, procurement, import-export and supply chain solutions across Asia, Europe, the Middle East, North America and Oceania."
    }, {
      property: "og:title",
      content: "Beyond Borders Global — International Trading & Procurement"
    }, {
      property: "og:description",
      content: "Connecting manufacturers, suppliers and distributors across global markets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$8.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$9
});
const ProductsRoute = Route$7.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$9
});
const IndustriesRoute = Route$6.update({
  id: "/industries",
  path: "/industries",
  getParentRoute: () => Route$9
});
const GlobalMarketsRoute = Route$5.update({
  id: "/global-markets",
  path: "/global-markets",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const BecomeASupplierRoute = Route$3.update({
  id: "/become-a-supplier",
  path: "/become-a-supplier",
  getParentRoute: () => Route$9
});
const BecomeADistributorRoute = Route$2.update({
  id: "/become-a-distributor",
  path: "/become-a-distributor",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BecomeADistributorRoute,
  BecomeASupplierRoute,
  ContactRoute,
  GlobalMarketsRoute,
  IndustriesRoute,
  ProductsRoute,
  ServicesRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
