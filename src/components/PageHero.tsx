import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, accent, description, children }: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 gradient-navy text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full"><defs><pattern id="ph-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor" className="text-gold" /></pattern></defs><rect width="100%" height="100%" fill="url(#ph-dots)" /></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-primary-foreground/60 mb-6">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gold">{eyebrow}</span>
        </nav>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
            {title}{accent && <span className="text-gradient-gold italic"> {accent}</span>}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed max-w-2xl font-light">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
