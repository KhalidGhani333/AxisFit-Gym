import { Play, MapPin, Phone, Mail } from "lucide-react";
import videoImg from "@/assets/forge-video.jpg";

export function VideoSection() {
  return (
    <>
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden">
        <img src={videoImg} alt="ForgeFit London gym interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forge-red/35" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full grid place-items-center">
          <button
            aria-label="Play"
            className="play-pulse h-[76px] w-[76px] rounded-full border-2 border-white grid place-items-center bg-white/5 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
          >
            <Play className="h-7 w-7 text-white fill-white ml-1" />
          </button>
        </div>
      </section>

      <section className="bg-[#0f0f0f] py-14 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { Icon: MapPin, title: "Location", lines: ["Unit 4, Hoxton Square Studios", "Hoxton Square, London N1 6NU"] },
            { Icon: Phone, title: "Phone", lines: ["+44 (0)20 7946 0392", "+44 (0)7700 900 174"] },
            { Icon: Mail, title: "Email", lines: ["hello@forgefit.co.uk", "bookings@forgefit.co.uk"] },
          ].map(({ Icon, title, lines }, i) => (
            <div key={i} className="reveal flex items-start gap-5" style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}>
              <div className="h-[52px] w-[52px] rounded-full bg-forge-red grid place-items-center shrink-0">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-display text-xl text-white">{title}</h4>
                {lines.map((l) => (
                  <p key={l} className="text-[#aaa] text-sm mt-1">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
