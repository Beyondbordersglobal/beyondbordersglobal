import { createFileRoute, Link } from "@tanstack/react-router";
import { UtensilsCrossed, HardHat, Factory, Dumbbell, ShoppingBag, Shirt, Cpu, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Beyond Borders Global" },
      { name: "description", content: "Industries served by Beyond Borders Global: food & agriculture, construction, industrial manufacturing, fitness equipment, consumer goods, textiles and electronics." },
      { property: "og:title", content: "Industries — Beyond Borders Global" },
      { property: "og:description", content: "Trade and procurement expertise across seven core industry verticals." },
    ],
  }),
  component: Industries,
});

const INDUSTRIES = [
  { icon: UtensilsCrossed, name: "Food & Agriculture", desc: "Grains, pulses, produce, processed foods, spices and specialty agricultural exports." },
  { icon: HardHat, name: "Construction", desc: "Tiles, stone, hardware, finishing materials and project supply for global construction." },
  { icon: Factory, name: "Industrial Manufacturing", desc: "Raw materials, components and finished industrial goods for B2B buyers." },
  { icon: Dumbbell, name: "Fitness Equipment", desc: "Commercial and home fitness equipment sourced from leading manufacturers." },
  { icon: ShoppingBag, name: "Consumer Goods", desc: "FMCG, household, personal care and lifestyle categories at scale." },
  { icon: Shirt, name: "Textiles", desc: "Fabrics, garments and home textiles — bulk and private-label." },
  { icon: Cpu, name: "Electronics", desc: "Consumer electronics, components and accessories from verified suppliers." },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries we"
        accent="serve"
        description="Deep category expertise across seven global verticals — combining sourcing capability with sector know-how."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="group bg-card border border-border rounded-xl p-7 hover:border-gold/50 hover:-translate-y-1 transition-all">
                <div className="rounded-xl gradient-navy w-14 h-14 mb-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ind.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5">A sector partner you can <span className="text-gradient-gold">rely on</span></h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
            Discuss Your Requirement <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
