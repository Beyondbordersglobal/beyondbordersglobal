import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { WorldMap } from "@/components/WorldMap";

export const Route = createFileRoute("/global-markets")({
  head: () => ({
    meta: [
      { title: "Global Markets — Beyond Borders Global" },
      { name: "description", content: "Beyond Borders Global operates across India, China, UAE, Europe, UK, Canada, Australia and Southeast Asia — connecting buyers and suppliers worldwide." },
      { property: "og:title", content: "Global Markets — Beyond Borders Global" },
      { property: "og:description", content: "A trade network spanning continents and key international markets." },
    ],
  }),
  component: GlobalMarkets,
});

const MARKETS = [
  { name: "India", note: "Headquarters · sourcing & exports hub." },
  { name: "China", note: "Manufacturing partners & OEM production." },
  { name: "United Arab Emirates", note: "Regional trade gateway & re-export hub." },
  { name: "Europe", note: "Buyers and distribution networks across the EU." },
  { name: "United Kingdom", note: "Premium product buyers and importers." },
  { name: "Canada", note: "North American distribution & private label." },
  { name: "Australia", note: "Consumer goods, food and industrial imports." },
  { name: "Southeast Asia", note: "Sourcing, manufacturing and regional trade." },
];

function GlobalMarkets() {
  return (
    <>
      <PageHero
        eyebrow="Global Markets"
        title="A trade network spanning"
        accent="continents"
        description="Operating across key international markets — connecting suppliers and buyers with local knowledge and global capability."
      />

      <section className="py-20 lg:py-28 gradient-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorldMap />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MARKETS.map((m) => (
              <div key={m.name} className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-gold" />
                  <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5">Expand into a new <span className="text-gradient-gold">market</span></h2>
          <p className="text-muted-foreground text-lg mb-8">Talk to our market entry team for a custom roadmap.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
