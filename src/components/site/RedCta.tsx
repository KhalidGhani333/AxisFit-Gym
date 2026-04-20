import { ArrowRight } from "lucide-react";

export function RedCta() {
  return (
    <section className="relative bg-red-brand text-white overflow-hidden">
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none" width="600" height="200" viewBox="0 0 600 200" fill="none">
        <path d="M0 100 Q 75 40, 150 100 T 300 100 T 450 100 T 600 100" stroke="white" strokeWidth="2" fill="none" />
        <path d="M0 130 Q 75 70, 150 130 T 300 130 T 450 130 T 600 130" stroke="white" strokeWidth="2" fill="none" />
      </svg>
      <div className="relative container mx-auto max-w-7xl px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] max-w-3xl">
          Are you Searching<br />For a First-Class Consultant?
        </h2>
        <a href="#about" className="shrink-0 inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors">
          More About Us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
