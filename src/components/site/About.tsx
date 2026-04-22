import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import aboutImg from "@/assets/forge-about.jpg";
import { useCountUp } from "@/hooks/use-reveal";

function Stat({ value, suffix, label, start }: { value: number; suffix?: string; label: string; start: boolean }) {
  const v = useCountUp(value, 1600, start);
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-forge-red leading-none">
        {v}
        {suffix}
      </div>
      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/80">{label}</p>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="bg-[#0f0f0f] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal-left relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={aboutImg} alt="Ryan Forge" className="h-full w-full object-cover" loading="lazy" />
            <div
              className="absolute inset-0 bg-forge-red opacity-70 pointer-events-none"
              style={{ clipPath: "polygon(0 60%, 35% 38%, 22% 100%, 0 100%)" }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block w-40 h-40 border-2 border-forge-red -z-0" />
        </div>

        <div ref={ref} className="reveal-right">
          <p className="label-red mb-5">About Ryan</p>
          <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl">Ryan Forge</h2>
          <p className="mt-4 text-forge-red text-sm uppercase tracking-[0.15em]">
            CIMSPA Accredited · REPs Level 3 PT · Level 4 Strength &amp; Conditioning
          </p>

          <p className="mt-8 text-[#bbbbbb] leading-relaxed">
            With over 11 years of coaching experience across London's leading private studios and boutique gyms, I've
            helped 400+ clients transform their bodies, confidence, and performance. I hold a Level 3 Diploma in Personal
            Training (Active IQ, CIMSPA endorsed) and a Level 4 Certificate in Strength &amp; Conditioning.
          </p>
          <p className="mt-5 text-[#aaaaaa] leading-relaxed">
            Whether you're a complete beginner walking into a gym for the first time, or an experienced athlete chasing a
            performance goal, my programming is built on real science — not fads. I train clients from Shoreditch,
            Hackney, Bethnal Green, and the City of London. DBS-checked &amp; fully insured.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value={10000} suffix="+" label="Members Served" start={start} />
            <Stat value={5} label="Years Operating" start={start} />
            <div>
              <div className="font-display text-3xl md:text-4xl text-forge-red leading-none">20</div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/80">Expert Trainers</p>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-forge-red leading-none">5★</div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/80">Facilities</p>
            </div>
          </div>

          <Link to="/services" className="btn-outline-white mt-10">
            View Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}

