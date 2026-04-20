import { ArrowRight } from "lucide-react";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";

const posts = [
  {
    img: b1, date: "October 27, 2032", author: "Admin",
    title: "16 Easy Ideas to Use in Everyday Strategy Work",
    desc: "Small habits compound. Here are sixteen we've seen produce outsized results in real engagements.",
  },
  {
    img: b2, date: "October 14, 2032", author: "Admin",
    title: "Why Most Transformations Stall in Month Three",
    desc: "The data is clear: 70% of corporate transformations lose momentum at the same milestone. Here's how to avoid it.",
  },
];

export function Blog() {
  return (
    <section className="py-24 md:py-32 bg-light-gray">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="label-red">Recent News of Us</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">Our Recent Blog</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="group bg-white shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="text-xs text-body">By <span className="font-semibold text-navy">{p.author}</span> · {p.date}</div>
                <h3 className="mt-3 text-2xl font-bold leading-snug group-hover:text-red-brand transition-colors">{p.title}</h3>
                <p className="mt-4 text-sm text-body">{p.desc}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-red-brand">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
