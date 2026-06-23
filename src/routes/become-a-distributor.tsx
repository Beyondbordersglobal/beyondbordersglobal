import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";


export const Route = createFileRoute("/become-a-distributor")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — Beyond Borders Global" },
      { name: "description", content: "Partner with Beyond Borders Global as a distributor. Access verified products and international supply chains." },
      { property: "og:title", content: "Become a Distributor — Beyond Borders Global" },
      { property: "og:description", content: "Become a distribution partner for our international product portfolio." },
    ],
  }),
  component: DistributorPage,
});

function DistributorPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `DISTRIBUTOR INQUIRY\n\nCompany Name: ${f.get("company")}\nCountry: ${f.get("country")}\nBusiness Type: ${f.get("businessType")}\nProduct Interest: ${f.get("interest")}\n\nContact Information:\n${f.get("contact")}`,
    );
    window.location.href = `mailto:rahul.mahalingam99@gmail.com?subject=Distributor%20Inquiry%20-%20${encodeURIComponent(String(f.get("company") ?? ""))}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="bg-background pt-16 lg:pt-20">


      <section className="gradient-navy text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Distribution Partners</p>
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">Become a <span className="text-gradient-gold">Distributor</span></h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Access international product portfolios and grow your market with reliable supply from Beyond Borders Global.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-luxury space-y-5">
            <h2 className="font-display text-2xl font-semibold mb-2">Distributor Inquiry</h2>
            <p className="text-sm text-muted-foreground mb-4">Share your details and our partnerships team will be in touch.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <DField name="company" label="Company Name" required />
              <DField name="country" label="Country" required />
              <DField name="businessType" label="Business Type" required />
              <DField name="interest" label="Product Interest" required />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Contact Information<span className="text-gold-dark ml-0.5">*</span></label>
              <textarea name="contact" rows={4} required className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" placeholder="Name, email, phone, website, role..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md gradient-gold px-6 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
              {sent ? <><CheckCircle className="h-4 w-4" /> Inquiry Prepared — Send Email</> : <>Submit Inquiry <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function DField({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}{required && <span className="text-gold-dark ml-0.5">*</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
    </div>
  );
}
