import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "./about";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Consulting." },
      { name: "description", content: "Book a free 30-minute strategy call. No slides, no sales — just a sharp diagnostic." },
      { property: "og:title", content: "Contact — Consulting." },
      { property: "og:description", content: "Book a free 30-minute strategy call." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Contact Us" crumb="Contact" />
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="label-red">Get In Touch</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">Let's start a conversation</h2>
            <p className="mt-5 text-body">
              Tell us about your goals. We'll respond within one business day with a recommended next step.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { Icon: Phone, label: "Phone", value: "+564 7885 3222" },
                { Icon: Mail, label: "Email", value: "hello@consulting.com" },
                { Icon: MapPin, label: "Office", value: "12 Market Street, Suite 400, NY 10013" },
              ].map((it) => (
                <div key={it.label} className="flex items-start gap-4">
                  <div className="h-12 w-12 grid place-items-center bg-red-brand/10 text-red-brand shrink-0">
                    <it.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] font-bold text-body">{it.label}</div>
                    <div className="mt-1 font-semibold text-navy">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-light-gray p-8 md:p-12 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input required placeholder="Your Name" className="bg-white border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-red-brand" />
              <input required type="email" placeholder="Your Email" className="bg-white border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-red-brand" />
            </div>
            <input placeholder="Subject" className="w-full bg-white border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-red-brand" />
            <textarea required rows={6} placeholder="How can we help?" className="w-full bg-white border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-red-brand resize-none" />
            <button type="submit" className="btn-red">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
