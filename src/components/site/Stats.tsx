import { useEffect, useRef, useState } from "react";

const stats = [
  { n: 3249, label: "Projects Completed" },
  { n: 179, label: "Active Clients", red: true },
  { n: 233, label: "Cups of Coffee" },
  { n: 3648, label: "Happy Clients" },
];

function Counter({ to, active }: { to: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <>{n.toLocaleString()}</>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-deep text-white dot-pattern">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`relative px-8 py-16 text-center border-r last:border-r-0 border-white/10 ${
                s.red ? "bg-red-brand" : ""
              }`}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white tabular-nums">
                <Counter to={s.n} active={active} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
