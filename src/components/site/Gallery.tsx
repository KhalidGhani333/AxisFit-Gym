import g1 from "@/assets/forge-gal-1.jpg";
import g2 from "@/assets/forge-gal-2.jpg";
import g3 from "@/assets/forge-gal-3.jpg";
import g4 from "@/assets/forge-gal-4.jpg";
import g5 from "@/assets/forge-gal-5.jpg";
import g6 from "@/assets/forge-gal-6.jpg";

const photos = [
  { src: g1, span: "md:col-span-4", aspect: "aspect-[3/4]" },
  { src: g2, span: "md:col-span-4", aspect: "aspect-[3/4]" },
  { src: g3, span: "md:col-span-4", aspect: "aspect-[3/4]" },
  { src: g4, span: "md:col-span-3", aspect: "aspect-[4/5]" },
  { src: g5, span: "md:col-span-4", aspect: "aspect-[4/5]" },
  { src: g6, span: "md:col-span-5", aspect: "aspect-[4/5]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-forge-bg py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden ${p.span} ${p.aspect}`}
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <img
                src={p.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-forge-red opacity-0 group-hover:opacity-30 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
