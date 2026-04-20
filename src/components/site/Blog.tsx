import blog1 from "@/assets/forge-blog-1.jpg";
import blog2 from "@/assets/forge-blog-2.jpg";

const posts = [
  {
    img: blog1,
    tag: "Gym & Fitness",
    title: "Why Most Londoners Plateau After 3 Months — And How to Break Through",
    meta: "By ForgeFit Team · 12 March 2026",
  },
  {
    img: blog2,
    tag: "Nutrition",
    title: "The Truth About Protein for Fat Loss: How Much Do You Actually Need?",
    meta: "By ForgeFit Team · 28 February 2026",
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-forge-bg py-28 md:py-36">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="reveal-left text-center mb-20">
          <p className="label-red mb-4">Insights</p>
          <h2 className="watermark-text">From The Forge</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((p, i) => (
            <article
              key={i}
              className="reveal group bg-forge-card border border-forge-line transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ ["--reveal-delay" as string]: `${i * 150}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-forge-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-forge-red text-white text-[11px] font-bold uppercase tracking-[0.18em]">
                  {p.tag}
                </span>
                <h3 className="mt-5 font-display text-2xl md:text-3xl text-white group-hover:text-forge-red transition-colors duration-300 leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-[13px] text-[#888]">{p.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
