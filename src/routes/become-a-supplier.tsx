import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";


export const Route = createFileRoute("/become-a-supplier")({
  head: () => ({
    meta: [
      { title: "Become a Supplier — Beyond Borders Global" },
      { name: "description", content: "Join Beyond Borders Global's verified supplier network. Register your company to supply manufacturers, distributors, and global buyers." },
      { property: "og:title", content: "Become a Supplier — Beyond Borders Global" },
      { property: "og:description", content: "Register your company to join our verified global supplier network." },
    ],
  }),
  component: SupplierPage,
});

function SupplierPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `SUPPLIER REGISTRATION\n\nCompany Name: ${f.get("company")}\nCountry: ${f.get("country")}\nProduct Category: ${f.get("category")}\nWebsite: ${f.get("website")}\nContact Person: ${f.get("contact")}\nEmail: ${f.get("email")}\nPhone Number: ${f.get("phone")}\n\nProduct Details:\n${f.get("details")}`,
    );
    window.location.href = `mailto:rahul.mahalingam99@gmail.com?subject=Supplier%20Registration%20-%20${encodeURIComponent(String(f.get("company") ?? ""))}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="bg-background pt-16 lg:pt-20">


      <section className="gradient-navy text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Supplier Network</p>
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">Become a <span className="text-gradient-gold">Supplier</span></h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join our trusted network of manufacturers and exporters. Connect with buyers across Asia, Europe, the Middle East, North America, and Oceania.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-luxury space-y-5">
            <h2 className="font-display text-2xl font-semibold mb-2">Supplier Registration</h2>
            <p className="text-sm text-muted-foreground mb-4">Tell us about your company. Our procurement team will review and reach out.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <SField name="company" label="Company Name" required />
              <SField name="country" label="Country" required />
              <SField name="category" label="Product Category" required />
              <SField name="website" label="Website" type="url" />
              <SField name="contact" label="Contact Person" required />
              <SField name="email" label="Email" type="email" required />
              <SField name="phone" label="Phone Number" type="tel" required />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Product Details<span className="text-gold-dark ml-0.5">*</span></label>
              <textarea name="details" rows={5} required className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" placeholder="Briefly describe your products, capacity, certifications, MOQ..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md gradient-gold px-6 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
              {sent ? <><CheckCircle className="h-4 w-4" /> Registration Prepared — Send Email</> : <>Submit Registration <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function SField({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}{required && <span className="text-gold-dark ml-0.5">*</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
    </div>
  );
}
