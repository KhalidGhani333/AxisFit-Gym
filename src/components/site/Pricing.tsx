import { Check, X, Dumbbell } from "lucide-react";

const plans = [
  {
    name: "Starter",
    duration: "6-Week Block",
    price: "£55",
    priceNote: "(1-2-1 Sessions)",
    sub: "Perfect intro to elite coaching",
    features: [
      { ok: true, text: "Full fitness assessment & consultation" },
      { ok: true, text: "Bespoke 6-week training plan" },
      { ok: true, text: "Gym floor coaching every session" },
      { ok: true, text: "Basic nutritional guidance" },
      { ok: false, text: "WhatsApp check-in support" },
      { ok: false, text: "Progress photo tracking" },
    ],
    cta: "Enquire Now",
    ctaStyle: "outline",
    highlight: false,
  },
  {
    name: "Transformation",
    duration: "12-Week Programme",
    price: "£49",
    priceNote: "(Block of 24 Sessions)",
    sub: "Save £144 vs. individual sessions",
    features: [
      { ok: true, text: "In-depth body composition & movement assessment" },
      { ok: true, text: "Fully periodised 12-week training plan" },
      { ok: true, text: "Weekly 1-to-1 sessions (2x per week)" },
      { ok: true, text: "Custom macro & nutrition coaching" },
      { ok: true, text: "WhatsApp support Mon–Fri" },
      { ok: true, text: "Fortnightly progress photos & measurements" },
    ],
    cta: "Book Now",
    ctaStyle: "red",
    highlight: true,
  },
  {
    name: "Elite Coaching",
    duration: "Ongoing Monthly",
    price: "£350",
    priceNote: "(4 Sessions + Online Support)",
    sub: "Full performance partnership",
    features: [
      { ok: true, text: "All Transformation plan features" },
      { ok: true, text: "Flexible session scheduling 7 days/week" },
      { ok: true, text: "Advanced performance & mobility testing" },
      { ok: true, text: "Personalised supplement guidance" },
      { ok: true, text: "24/7 WhatsApp priority access" },
      { ok: true, text: "Monthly video form analysis" },
    ],
    cta: "Enquire Now",
    ctaStyle: "outline",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-forge-bg py-28 md:py-36">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="reveal-left text-center mb-20">
          <p className="label-red mb-4">Investment</p>
          <h2 className="watermark-text" style={{ fontSize: "clamp(40px, 10vw, 100px)" }}>Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className="reveal relative group bg-forge-card border border-forge-line p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_24px_rgba(204,0,0,0.35)]"
              style={{
                ["--reveal-delay" as string]: `${i * 200}ms`,
                ...(p.highlight ? { borderTop: "3px solid #CC0000" } : {}),
              }}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forge-red px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                  Most Popular
                </div>
              )}

              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-forge-red grid place-items-center mb-6">
                  <Dumbbell className="h-6 w-6 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl text-white">{p.name}</h3>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#aaaaaa] mt-2">{p.duration}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-forge-red">{p.price}</span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#888]">{p.priceNote}</span>
                </div>
                <p className={`mt-2 text-xs ${p.highlight ? "text-forge-red" : "text-[#666]"}`}>{p.sub}</p>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      {f.ok ? (
                        <Check className="h-4 w-4 text-forge-red shrink-0 mt-0.5" strokeWidth={3} />
                      ) : (
                        <X className="h-4 w-4 text-[#444] shrink-0 mt-0.5" strokeWidth={3} />
                      )}
                      <span className={f.ok ? "text-white/90" : "text-[#555] line-through"}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-8 w-full ${p.ctaStyle === "red" ? "btn-red" : "btn-outline-white"}`}>
                  {p.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-[#777] text-sm mt-12 max-w-2xl mx-auto">
          All sessions conducted at private studios in Shoreditch &amp; Bethnal Green, or your preferred East London gym. First consultation is complimentary.
        </p>
      </div>
    </section>
  );
}
