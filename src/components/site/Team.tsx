import { Twitter, Linkedin, Facebook } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

const team = [
  { img: t1, name: "Daniel Whitfield", role: "Managing Partner" },
  { img: t2, name: "Sofia Marquez", role: "UX Strategy Lead" },
  { img: t3, name: "Kenji Tanaka", role: "Operations Director" },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 bg-light-gray">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="label-red-center">Our Professional Members</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">Our Team Members</h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="relative overflow-hidden bg-[#cfe2ec]">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-[420px] object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" aria-label={`social-${i}`} className="h-9 w-9 grid place-items-center bg-white text-navy hover:bg-red-brand hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold">{m.name}</h3>
              <div className="mx-auto mt-2 h-px w-8 bg-red-brand" />
              <div className="mt-3 text-sm text-red-brand font-semibold">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
