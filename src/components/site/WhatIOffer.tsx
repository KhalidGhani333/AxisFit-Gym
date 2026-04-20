import svc1 from "@/assets/forge-svc-1.jpg";
import svc2 from "@/assets/forge-svc-2.jpg";
import svc3 from "@/assets/forge-svc-3.jpg";

const services = [
  {
    img: svc1,
    title: "Body Building",
    desc: "Progressive overload programming to build serious size and definition. Hypertrophy-focused plans built around your body type.",
  },
  {
    img: svc2,
    title: "Strength & Conditioning",
    desc: "Powerlifting-informed strength protocols combined with conditioning work. Get stronger, move better, perform at your peak.",
  },
  {
    img: svc3,
    title: "Fat Loss & Body Recomp",
    desc: "Sustainable fat loss through smart training and evidence-based nutrition guidance. No crash diets. Real, lasting results.",
  },
];

export function WhatIOffer() {
  return (
    <section id="offer" className="relative bg-forge-bg py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="reveal-left text-center mb-20">
          <p className="label-red mb-4">What I Do</p>
          <h2 className="watermark-text">What I Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group cursor-pointer"
              style={{ ["--reveal-delay" as string]: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-forge-card">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <span className="block h-[2px] w-[26px] bg-forge-red transition-all duration-300 group-hover:w-[60px]" />
                <h3 className="mt-4 font-display text-2xl md:text-3xl text-white">{s.title}</h3>
                <p className="mt-3 text-[#aaaaaa] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
