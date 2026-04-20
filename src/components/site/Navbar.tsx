import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-reveal";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Training", to: "/services" as const },
  { label: "Pricing", to: "/services" as const, hash: "pricing" },
  { label: "Gallery", to: "/portfolio" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-forge-red transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <header
        className={`sticky top-0 z-50 w-full bg-[#0a0a0a] transition-all duration-300 ${
          scrolled ? "border-b border-white/[0.08]" : ""
        }`}
      >
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-end gap-1">
            <span className="font-display text-3xl tracking-wide text-white leading-none">FORGEFIT</span>
            <span className="h-2 w-2 bg-forge-red mb-2" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l, i) => (
              <Link
                key={i}
                to={l.to}
                activeOptions={{ exact: true }}
                className="nav-link text-[12px] font-semibold uppercase tracking-[0.18em] text-white/90 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-red !py-3 !px-6 ml-2">
              Book a Session
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/[0.08] bg-[#0a0a0a]">
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l, i) => (
                <Link
                  key={i}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-red mt-2 self-start">
                Book a Session
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
