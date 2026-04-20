import { Target, ShieldCheck, BarChart3, Briefcase, Users, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  { icon: Target, title: "Strategy Planning", desc: "Define a clear vision and roadmap that connects every team to measurable, ambitious goals." },
  { icon: ShieldCheck, title: "Insurance Service", desc: "Identify exposure across your organization and design risk frameworks that protect growth." },
  { icon: BarChart3, title: "Audit & Evaluation", desc: "Independent reviews that surface inefficiencies and unlock 20–40% in operating margin." },
  { icon: Briefcase, title: "Business Advisory", desc: "Senior advisors embedded with your leadership through every critical decision." },
  { icon: Users, title: "Talent & Culture", desc: "Build the high-performance teams that turn strategy into repeatable execution." },
  { icon: TrendingUp, title: "Growth Marketing", desc: "Data-driven campaigns engineered to compound revenue across every channel." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="label-red">Our Top Services</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Our Best Services
          </h2>
          <p className="mt-5 text-body">
            Six core practices, one outcome: clarity, momentum, and durable growth for ambitious businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-light-gray border border-border p-9 hover:bg-navy transition-all duration-500 cursor-pointer"
            >
              <div className="h-14 w-14 grid place-items-center bg-white border border-border group-hover:bg-red-brand group-hover:border-red-brand transition-colors">
                <s.icon className="h-6 w-6 text-red-brand group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="mt-7 text-xl font-bold group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body group-hover:text-white/70 transition-colors">
                {s.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-red-brand opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
