import { Link } from "@tanstack/react-router";
import personalImg from "@/assets/forge-personal.jpg";
import groupImg from "@/assets/forge-group.jpg";

export function TrainingSplit() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 bg-forge-bg">
      <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-forge-red z-10" />

      <div className="reveal-left relative min-h-[460px] flex items-center">
        <img src={personalImg} alt="Personal training session" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-8 md:px-14 py-20 max-w-xl">
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl">Personal Training</h2>
          <p className="mt-5 text-[#aaaaaa] leading-relaxed">
            Fully bespoke 1-to-1 sessions designed around your goals, schedule, and fitness level. From fat loss to strength building — science-backed, results-guaranteed.
          </p>
          <Link to="/services" className="btn-outline-white mt-8">View Programmes</Link>
        </div>
      </div>

      <div className="reveal-right relative min-h-[460px] flex items-center">
        <img src={groupImg} alt="Group training session" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-8 md:px-14 py-20 max-w-xl">
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl">Group Training</h2>
          <p className="mt-5 text-[#aaaaaa] leading-relaxed">
            High-energy small-group sessions capped at 6 people. Push harder with a motivated crew, coached by our expert trainers every step of the way.
          </p>
          <Link to="/services" className="btn-red mt-8">View Programmes</Link>
        </div>
      </div>
    </section>
  );
}
