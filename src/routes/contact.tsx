import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Free Consultation — ForgeFit London | Ryan Forge PT" },
      { name: "description", content: "Get in touch to book your complimentary consultation with elite London personal trainer Ryan Forge. Shoreditch · Hoxton · Bethnal Green." },
      { property: "og:title", content: "Book Your Free Consultation — ForgeFit London" },
      { property: "og:description", content: "Start your transformation today. First consultation is complimentary." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <div className="bg-forge-bg min-h-screen">
      <Navbar />
      <main className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="reveal-left text-center mb-16">
            <p className="label-red mb-4">Get In Touch</p>
            <h1 className="watermark-text">Book a Session</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="reveal bg-forge-card border border-forge-line p-8 md:p-10 space-y-5"
            >
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-[#aaa] block mb-2">Full Name</label>
                <input className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-forge-red outline-none" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-[#aaa] block mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-forge-red outline-none" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-[#aaa] block mb-2">Mobile</label>
                <input className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-forge-red outline-none" placeholder="07xxx xxxxxx" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-[#aaa] block mb-2">Tell me about your goals</label>
                <textarea rows={5} className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-forge-red outline-none resize-none" />
              </div>
              <button type="submit" className="btn-red w-full">Request Free Consultation</button>
              <p className="text-[12px] text-[#666] text-center">DBS-checked · Fully insured · GDPR compliant</p>
            </form>

            <div className="reveal-right space-y-8">
              {[
                { Icon: MapPin, title: "Studio Location", lines: ["Unit 4, Hoxton Square Studios", "Hoxton Square, London N1 6NU"] },
                { Icon: Phone, title: "Call or Text", lines: ["+44 (0)20 7946 0392", "+44 (0)7700 900 174"] },
                { Icon: Mail, title: "Email", lines: ["ryan@forgefit.co.uk", "bookings@forgefit.co.uk"] },
                { Icon: Instagram, title: "Instagram", lines: ["@ryanforge_pt"] },
              ].map(({ Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-5">
                  <div className="h-[52px] w-[52px] rounded-full bg-forge-red grid place-items-center shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-white">{title}</h3>
                    {lines.map((l) => <p key={l} className="text-[#aaa] mt-1">{l}</p>)}
                  </div>
                </div>
              ))}
              <div className="border border-forge-line p-6 mt-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-forge-red mb-2">Areas Served</p>
                <p className="text-white text-sm leading-relaxed">
                  Shoreditch · Hoxton · Hackney · Bethnal Green · City of London · Clerkenwell · Dalston
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
