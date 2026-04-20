import { ArrowRight } from "lucide-react";
import about from "@/assets/about-team.jpg";

export function AboutSplit() {
  return (
    <section className="bg-navy text-white">
      <div className="container mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-brand z-0" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 hatch-pattern opacity-60 z-0" />
          <div className="relative z-10 overflow-hidden">
            <img
              src={about}
              alt="Our consulting team"
              loading="lazy"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>

        <div>
          <div className="label-red">Our Top Services</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Our Best Services Built Around Your Goals
          </h2>
          <p className="mt-6 text-lg font-semibold text-white">
            We don't sell decks. We embed with your leadership, ship together, and stay accountable to outcomes.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            For 15 years our advisors have helped 400+ companies — from Series B to Fortune 500 — restructure
            operations, enter new markets, and build leadership teams that compound performance year after year.
          </p>
          <div className="mt-9">
            <a href="#about" className="btn-red">
              More About Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
