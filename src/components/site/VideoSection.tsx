import { Play, Check } from "lucide-react";
import poster from "@/assets/video-poster.jpg";

const points = [
  "15+ years of industry experience",
  "Proven methodology and frameworks",
  "Dedicated team of experts",
  "Results-driven approach",
];

export function VideoSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group cursor-pointer overflow-hidden rounded-sm">
          <img src={poster} alt="Watch our story" loading="lazy" className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/40 transition-colors" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
              <div className="relative h-20 w-20 rounded-full bg-white grid place-items-center shadow-2xl">
                <Play className="h-7 w-7 text-red-brand fill-red-brand ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="label-red">Why Choose Us</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
            See How We Transform Businesses
          </h2>
          <p className="mt-5 text-body leading-relaxed">
            Our consultants combine deep industry expertise with a proven methodology — delivering
            sustainable transformation that lasts long after the engagement ends.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-red-brand/10 grid place-items-center">
                  <Check className="h-4 w-4 text-red-brand" strokeWidth={3} />
                </span>
                <span className="text-navy font-semibold">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
