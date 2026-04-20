import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import avatar from "@/assets/avatar-1.jpg";

const items = [
  {
    quote: "They didn't hand us a strategy — they helped us live one. Our leadership team finally moves in lockstep, and the numbers show it.",
    name: "Jessya Inn",
    role: "Chief Photographer, Lumen Studios",
  },
  {
    quote: "Six months in, our operating margin lifted 22 points. The ROI was obvious by the second quarter — the cultural shift was the bigger win.",
    name: "Marcus Reeves",
    role: "CEO, Apex Industries",
  },
  {
    quote: "The most disciplined operators we've ever worked with. They challenged our thinking and shipped alongside us, every single sprint.",
    name: "Hannah Okafor",
    role: "COO, Vista Health Group",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-navy py-24 md:py-32 text-white">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <Quote className="h-14 w-14 text-red-brand mx-auto fill-red-brand" />
        <p key={i} className="mt-8 text-xl md:text-2xl italic font-light leading-relaxed text-white/90 animate-in fade-in duration-700">
          "{items[i].quote}"
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <img src={avatar} alt={items[i].name} loading="lazy" className="h-16 w-16 rounded-full object-cover ring-4 ring-white/10" />
          <div>
            <div className="text-red-brand font-bold">{items[i].name}</div>
            <div className="italic text-sm text-white/60">{items[i].role}</div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-red-brand" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
