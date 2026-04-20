import c2 from "@/assets/case-2.jpg";
import c3 from "@/assets/case-3.jpg";
import c4 from "@/assets/case-4.jpg";

const cases = [
  {
    img: c2, tag: "Finance", title: "Modernizing a regional bank's risk stack",
    desc: "Reimagined credit risk operations and rolled out a new analytics platform across 14 branches.",
    client: "Northbank Capital", metric: "+45% efficiency",
  },
  {
    img: c3, tag: "Healthcare", title: "Patient flow redesign for a 12-site network",
    desc: "Built unified scheduling and intake to reduce wait times and reclaim clinician hours.",
    client: "Vista Health Group", metric: "$2M saved",
  },
  {
    img: c4, tag: "Manufacturing", title: "Lean transformation across three plants",
    desc: "Implemented a continuous improvement system that compounded throughput quarter after quarter.",
    client: "Apex Industries", metric: "+38% output",
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="label-red-center">Success Stories</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">Our Case Studies</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group border border-border hover:border-red-brand bg-white shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
                  {c.tag}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-navy leading-snug group-hover:text-red-brand transition-colors">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-body flex-1">{c.desc}</p>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div className="text-xs text-body">
                    <div className="font-bold text-navy">{c.client}</div>
                    <div>Client</div>
                  </div>
                  <div className="text-red-brand font-extrabold text-base">{c.metric}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
