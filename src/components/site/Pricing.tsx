import { useState } from "react";
import { Check, X } from "lucide-react";

type Plan = {
  name: string;
  price: number;
  features: { label: string; included: boolean }[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: 499,
    features: [
      { label: "Initial Business Assessment", included: true },
      { label: "Monthly Strategy Session", included: true },
      { label: "Email Support", included: true },
      { label: "Basic Analytics Report", included: true },
      { label: "Dedicated Consultant", included: false },
      { label: "On-site Workshops", included: false },
    ],
  },
  {
    name: "Professional",
    price: 999,
    popular: true,
    features: [
      { label: "Comprehensive Assessment", included: true },
      { label: "Weekly Strategy Sessions", included: true },
      { label: "Phone & Email Support", included: true },
      { label: "Advanced Analytics Dashboard", included: true },
      { label: "Dedicated Consultant", included: true },
      { label: "On-site Workshops", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: 2499,
    features: [
      { label: "Full Business Transformation", included: true },
      { label: "Unlimited Strategy Sessions", included: true },
      { label: "24/7 Priority Support", included: true },
      { label: "Custom Analytics Platform", included: true },
      { label: "Dedicated Team of Consultants", included: true },
      { label: "On-site Workshops", included: true },
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative bg-navy py-24 md:py-32 text-white overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-brand" />
      <div className="absolute -right-20 top-1/3 w-72 h-72 rounded-full bg-red-brand/5 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="label-red-center">Pricing Plans</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">Choose Your Plan</h2>

          <div className="mt-9 inline-flex items-center gap-3 bg-white/5 border border-white/10 p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${!yearly ? "bg-red-brand text-white" : "text-white/60"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${yearly ? "bg-red-brand text-white" : "text-white/60"}`}
            >
              Yearly <span className="ml-1 text-[10px] opacity-80">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((p) => {
            const price = yearly ? Math.round(p.price * 0.8) : p.price;
            const isPro = p.popular;
            return (
              <div
                key={p.name}
                className={`relative p-9 transition-all duration-500 ${
                  isPro
                    ? "bg-red-brand text-white scale-105 shadow-2xl"
                    : "bg-white text-navy hover:-translate-y-2"
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-extrabold ${isPro ? "text-white" : "text-navy"}`}>{p.name}</h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className={`text-5xl font-extrabold ${isPro ? "text-white" : "text-navy"}`}>${price}</span>
                  <span className={`text-sm ${isPro ? "text-white/80" : "text-body"}`}>/{yearly ? "yr-mo" : "month"}</span>
                </div>

                <ul className="mt-8 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <Check className={`h-5 w-5 shrink-0 mt-0.5 ${isPro ? "text-white" : "text-red-brand"}`} strokeWidth={3} />
                      ) : (
                        <X className={`h-5 w-5 shrink-0 mt-0.5 ${isPro ? "text-white/40" : "text-body/40"}`} />
                      )}
                      <span className={`${!f.included ? "line-through opacity-50" : ""} ${isPro ? "text-white" : "text-navy"}`}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-9 w-full py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                    isPro
                      ? "bg-white text-navy hover:bg-navy hover:text-white"
                      : "bg-red-brand text-white hover:bg-red-brand-dark"
                  }`}
                >
                  {p.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
