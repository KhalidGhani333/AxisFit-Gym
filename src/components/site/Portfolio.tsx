import c1 from "@/assets/case-1.jpg";
import c2 from "@/assets/case-2.jpg";
import c3 from "@/assets/case-3.jpg";
import c4 from "@/assets/case-4.jpg";

const items = [
  { img: c1, cat: "Strategy Planning", title: "Within the construction industry as their overdraft" },
  { img: c2, cat: "Financial Audit", title: "Restructuring trading desks for next-era execution" },
  { img: c3, cat: "Healthcare", title: "Operations redesign across a 12-site hospital network" },
  { img: c4, cat: "Manufacturing", title: "Lean transformation that lifted output by 38% in 9 months" },
];

export function Portfolio() {
  return (
    <section className="py-24 md:py-32 bg-light-gray">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="label-red">Our Portfolios of Cases</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">Featured Case Study</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="group bg-white shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-red-brand">
                  <span className="h-px w-8 bg-red-brand" />
                  {it.cat}
                </div>
                <h3 className="mt-4 text-xl font-bold leading-snug group-hover:text-red-brand transition-colors">
                  {it.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
