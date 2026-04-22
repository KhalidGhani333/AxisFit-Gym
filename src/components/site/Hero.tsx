import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/forge-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-forge-bg">
      <img
        src={heroImg}
        alt="Ryan Forge training in a dark London gym"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      <div className="red-slash-1" />
      <div className="red-slash-2" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 min-h-screen flex items-center">
        <div className="max-w-xl py-16">
          
          <h1 className="mt-6">
            <span
              className="block stroke-text font-display text-xl md:text-4xl lg:text-5xl"
              style={{ animation: "slideInLeft 0.9s cubic-bezier(0.2,0.8,0.2,1) forwards" }}
            >
              Welcome to AxisFit
            </span>
            <span
              className="block mt-3 font-display text-white text-3xl md:text-5xl lg:text-6xl"
              style={{ animation: "fadeUp 0.8s ease-out 0.4s both" }}
            >
              Transform Your Body<br />Achieve Your Goals
            </span>
          </h1>
          <p
            className="mt-8 text-[#aaaaaa] text-base md:text-lg max-w-xl"
            style={{ animation: "fadeUp 0.8s ease-out 0.6s both" }}
          >
            Discover a state-of-the-art fitness facility in the heart of London, offering tailored programmes for every level.
          </p>
          <div style={{ animation: "fadeUp 0.8s ease-out 0.8s both" }} className="mt-10">
            <Link to="/services" className="btn-outline-white">
              View My Programmes
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}



