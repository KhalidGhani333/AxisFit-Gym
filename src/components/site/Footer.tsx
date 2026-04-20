import { Twitter, Facebook, Globe, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white/70">
      <div className="container mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-2xl font-extrabold text-white">
            Consulting<span className="text-red-brand">.</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Receive updates and latest news direct from us. Simply enter your email below.
          </p>
          <div className="mt-6 space-y-1.5 text-sm">
            <div>
              <span className="text-red-brand font-bold">+564 7885 3222</span>
            </div>
            <div>hello@consulting.com</div>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-6">Location</h4>
          <ul className="space-y-3 text-sm">
            {["Advanced", "Management", "Corporate", "Customer", "Information"].map((i) => (
              <li key={i}>
                <a href="#" className="hover:text-red-brand transition-colors">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-6">Explore</h4>
          <ul className="space-y-3 text-sm">
            {["Cookies", "About", "Privacy Policy", "Properties", "Licenses"].map((i) => (
              <li key={i}>
                <a href="#" className="hover:text-red-brand transition-colors">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe now to get daily updates</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-red-brand"
            />
            <button type="submit" className="btn-red w-full">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            Powered By{" "}
            <a
              href="https://axistechgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-brand hover:underline font-semibold"
            >
              AxisTechGroup
            </a>
          </div>
          <div className="flex items-center gap-2">
            {[Twitter, Facebook, Globe, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`social-${i}`}
                className="h-9 w-9 grid place-items-center border border-white/10 hover:bg-red-brand hover:border-red-brand transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
