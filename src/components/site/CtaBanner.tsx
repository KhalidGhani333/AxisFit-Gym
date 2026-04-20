import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full border border-white/5" />
      <div className="absolute -top-20 -left-10 h-56 w-56 rounded-full border border-white/5" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/5" />
      <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full border border-white/5" />

      <div className="relative container mx-auto max-w-4xl px-6 py-24 md:py-28 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-5 text-white/70 max-w-2xl mx-auto">
          Book a free 30-minute strategy call. No slides, no sales — just a sharp diagnostic of where you are and where you're going.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-outline-white">
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="btn-red">
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
