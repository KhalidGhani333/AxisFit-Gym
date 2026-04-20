import { Link } from "@tanstack/react-router";
import { Instagram, Music2, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-8 border-t border-white/[0.06]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-end gap-1 mb-5">
              <span className="font-display text-3xl text-white leading-none">FORGEFIT</span>
              <span className="h-2 w-2 bg-forge-red mb-2" />
            </Link>
            <p className="text-[#999] text-sm leading-relaxed">
              Elite Personal Training in East London. Trusted by 400+ clients since 2014.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Music2, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`social-${i}`}
                  className="h-9 w-9 rounded-full border border-white/20 grid place-items-center text-white transition-colors hover:bg-forge-red hover:border-forge-red"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[#666]">@ryanforge_pt</p>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-5 tracking-wider">Training</h4>
            <ul className="space-y-3 text-sm text-[#aaa]">
              {["Personal Training", "Group Sessions", "Online Coaching", "Transformation Packages", "Free Consultation"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-forge-red transition-colors">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-5 tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-[#aaa]">
              {["About Ryan", "Testimonials", "Blog & Articles", "FAQs", "Privacy Policy (GDPR)"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-forge-red transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-5 tracking-wider">Stay in Touch</h4>
            <p className="text-sm text-[#aaa] mb-4">Get weekly training tips and exclusive offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.co.uk"
                className="bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-forge-red outline-none transition-colors"
              />
              <button type="submit" className="btn-red">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 h-px bg-forge-red/60" />
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#666]">
          <p>
            © 2026 ForgeFit London · Ryan Forge Personal Training Ltd · Registered in England &amp; Wales No. 12458763 ·
            VAT No. GB 345 2891 04
          </p>
          <div className="flex items-center gap-3">
            {[Instagram, Music2, Youtube, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label={`f-social-${i}`} className="text-[#666] hover:text-forge-red transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
