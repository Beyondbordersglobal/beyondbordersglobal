import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Sparkles, Wheat, ShoppingBag, Factory, Package, HardHat, Cog, Shirt, Box, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Beyond Borders Global" },
      { name: "description", content: "Explore the product categories sourced and traded by Beyond Borders Global — agriculture, food, industrial goods, machinery, textiles, building materials and more." },
      { property: "og:title", content: "Products — Beyond Borders Global" },
      { property: "og:description", content: "Global sourcing across agriculture, food, industrial goods, machinery and consumer categories." },
    ],
  }),
  component: Products,
});

const PRODUCTS = [
  { icon: Sprout, name: "Agricultural Products", tag: "Grains · Pulses · Produce" },
  { icon: Sparkles, name: "Coconut Products", tag: "Oil · Milk · Coir · Husk" },
  { icon: Wheat, name: "Spices & Seasonings", tag: "Pepper · Cardamom · Turmeric" },
  { icon: ShoppingBag, name: "Food Products", tag: "Processed · Packaged · Specialty" },
  { icon: Factory, name: "Industrial Products", tag: "Raw materials · Components" },
  { icon: Package, name: "Consumer Goods", tag: "FMCG · Household · Personal care" },
  { icon: HardHat, name: "Building Materials", tag: "Tiles · Stone · Hardware" },
  { icon: Cog, name: "Machinery & Equipment", tag: "Industrial · Agricultural" },
  { icon: Shirt, name: "Textiles & Apparel", tag: "Fabrics · Garments · Home" },
  { icon: Box, name: "Custom Sourcing", tag: "Tell us — we'll find it" },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="What we source"
        accent="& trade"
        description="From farm produce to industrial machinery — we source globally across diversified product categories."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-luxury hover:border-gold/40 transition-all">
                <div className="h-36 gradient-navy relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-30 shimmer-gold" />
                  <p.icon className="h-14 w-14 text-gold relative z-10 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground tracking-wide">{p.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Looking for something <span className="text-gradient-gold">specific?</span></h2>
          <p className="text-muted-foreground text-lg mb-8">Share your requirements — our sourcing team will deliver a tailored quotation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
