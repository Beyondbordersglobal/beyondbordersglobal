import { useState, useRef, useEffect } from "react";
import { MessageCircle, Bot, Send, X, Sparkles } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { chatWithAssistant } from "@/lib/api/chat.functions";

type Msg = { role: "user" | "assistant"; content: string };

const WA_URL = "https://wa.me/919487501519?text=Hello%20Beyond%20Borders%20Global%2C%20I%27d%20like%20to%20enquire%20about%20sourcing.";

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: "Hi! I'm an AI assistant. Ask me anything — I'll do my best to help.",
    },
  ]);
  const send = useServerFn(chatWithAssistant);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const { reply } = await send({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Connection hiccup — please try again in a moment." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury hover:scale-110 transition-transform">
          <MessageCircle className="h-7 w-7" />
        </span>
      </a>

      {/* AI Chat trigger
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open AI Trade Assistant"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 rounded-full gradient-navy text-primary-foreground pl-4 pr-5 py-3 shadow-luxury hover:shadow-gold-glow transition-all"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy-deep">
            <Bot className="h-5 w-5" />
            <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-gold" />
          </span>
          <span className="text-sm font-medium hidden sm:inline">AI Trade Assistant</span>
        </button>
      )} */}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm rounded-2xl bg-card border border-gold/30 shadow-luxury overflow-hidden flex flex-col animate-float-up" style={{ height: "min(560px, 80vh)" }}>
          <div className="gradient-navy text-primary-foreground p-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy-deep">
              <Bot className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="font-semibold text-sm">AI Assistant</p>
              <p className="text-xs text-primary-foreground/60">Online · ask me anything</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-md p-1 hover:bg-primary-foreground/10">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={scrollerRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-gold animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="h-2 w-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="p-3 border-t border-border bg-card flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="rounded-full bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center disabled:opacity-50 hover:bg-navy-light transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
