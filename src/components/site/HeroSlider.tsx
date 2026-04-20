import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    img: hero1,
    label: "Committed to Success",
    title: "We help to grow your business",
    desc: "Strategic consulting that turns ambitious goals into measurable results. Built on data, refined by 15+ years of industry experience.",
  },
  {
    img: hero2,
    label: "Trusted by Leaders",
    title: "Vision, strategy, execution.",
    desc: "From boardroom to balance sheet — we partner with forward-thinking leaders to unlock the next era of growth.",
  },
  {
    img: hero3,
    label: "Partnership First",
    title: "Solutions tailored to you",
    desc: "No templates. Every engagement is engineered around your market, your team, and your customers.",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setI((v) => (v + 1) % slides.length);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[640px] md:h-[720px] overflow-hidden bg-navy">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            className="absolute inset-0 h-full w-full object-cover"
            {...(idx === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent md:via-white/60 md:to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full container mx-auto max-w-7xl px-6 flex items-center">
        <div className="max-w-xl">
          <div key={`label-${i}`} className="label-red animate-in fade-in slide-in-from-left-4 duration-700">
            {slides[i].label}
          </div>
          <h1
            key={`title-${i}`}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-in fade-in slide-in-from-left-6 duration-700"
          >
            {slides[i].title}
          </h1>
          <p
            key={`desc-${i}`}
            className="mt-6 text-base md:text-lg text-body max-w-lg animate-in fade-in slide-in-from-left-8 duration-700"
          >
            {slides[i].desc}
          </p>
          <div className="mt-9 animate-in fade-in slide-in-from-left-10 duration-700">
            <a href="#services" className="btn-red">
              Our Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
        <button
          onClick={prev}
          aria-label="Previous"
          className="h-12 w-12 rounded-full bg-white/90 hover:bg-red-brand hover:text-white text-navy grid place-items-center shadow transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="h-12 w-12 rounded-full bg-white/90 hover:bg-red-brand hover:text-white text-navy grid place-items-center shadow transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 transition-all ${
              idx === i ? "w-10 bg-red-brand" : "w-6 bg-navy/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
