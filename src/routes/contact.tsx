import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Beyond Borders Global" },
      { name: "description", content: "Contact Beyond Borders Global for sourcing, procurement, import-export and supply chain enquiries. Reach us by phone, WhatsApp or email." },
      { property: "og:title", content: "Contact Beyond Borders Global" },
      { property: "og:description", content: "Phone, WhatsApp and email contacts for global trade enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your global"
        accent="trade journey"
        description="Tell us what you need — we respond to every enquiry within 24 hours."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl gradient-navy text-primary-foreground p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Business Development</p>
              <h3 className="font-display text-2xl mb-6">Rahul Mahalingam</h3>
              <div className="space-y-4">
                <Row icon={Phone} label="Phone" value="+91 9487501519" href="tel:+919487501519" />
                <Row icon={MessageCircle} label="WhatsApp" value="+91 9487501519" href="https://wa.me/919487501519" />
                <Row icon={Mail} label="Email" value="rahul.mahalingam99@gmail.com" href="mailto:rahul.mahalingam99@gmail.com" />
              </div>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <p className="font-display font-semibold mb-2 flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Head Office</p>
              <p className="text-sm text-muted-foreground mb-4">
                1/256/1B, Puliyamarathu Thottam, Senjeri Post, Kumarapalayam, Sulur Taluk, Coimbatore, Tamil Nadu — 641669, India.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Kumarapalayam+Senjeri+Sulur+Coimbatore+641669&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 group">
      <div className="rounded-lg bg-gold/10 border border-gold/20 p-3 group-hover:bg-gold transition-colors">
        <Icon className="h-5 w-5 text-gold group-hover:text-navy-deep" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-primary-foreground/50">{label}</p>
        <p className="font-medium truncate">{value}</p>
      </div>
    </a>
  );
}

function InquiryForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nCountry: ${f.get("country")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\nProduct: ${f.get("product")}\nQuantity: ${f.get("quantity")}\n\nMessage:\n${f.get("message")}`,
    );
    window.location.href = `mailto:rahul.mahalingam99@gmail.com?subject=Trade%20Inquiry%20from%20${encodeURIComponent(String(f.get("name") ?? ""))}&body=${body}`;
    setSent(true);
  }
  return (
    <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-luxury space-y-4">
      <h3 className="font-display text-2xl font-semibold mb-2">Send us an enquiry</h3>
      <p className="text-sm text-muted-foreground mb-4">We respond within 24 hours. Your information stays confidential.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name" label="Full Name" required />
        <Field name="company" label="Company Name" />
        <Field name="country" label="Country" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone Number" type="tel" />
        <Field name="product" label="Product Requirement" required />
        <Field name="quantity" label="Quantity / MOQ" />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
        <textarea name="message" rows={4} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" placeholder="Tell us about your sourcing requirements..." />
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md gradient-gold px-6 py-4 text-sm font-semibold text-navy-deep hover:shadow-gold-glow transition-all">
        {sent ? "Inquiry Prepared — Send Email" : "Submit Inquiry"} <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}{required && <span className="text-gold-dark ml-0.5">*</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
    </div>
  );
}
