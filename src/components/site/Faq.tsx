import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We partner with ambitious organizations from Series B startups through Fortune 500 enterprises across finance, healthcare, manufacturing, and technology. If you're focused on durable growth, we're built for you.",
  },
  { q: "How long does a typical consulting engagement last?", a: "Most engagements run 3–9 months, with longer transformation programs spanning 12–18 months. We scope every project around outcomes, not hours." },
  { q: "What makes ConsultingBiz different from other consulting firms?", a: "We embed senior operators with your team — no junior pyramids, no recycled decks. Every engagement is led by a partner who stays accountable to your outcomes." },
  { q: "Do you offer remote consulting services?", a: "Yes. Most engagements blend on-site immersion with remote execution. We adapt to how your team already works." },
  { q: "How do I get started with a consultation?", a: "Book a free 30-minute call from the Contact page. We'll diagnose your top three priorities and recommend an engagement model — no obligation." },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="label-red-center">Got Questions?</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">Frequently Asked Questions</h2>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`border ${isOpen ? "border-red-brand" : "border-border"} bg-white transition-colors`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left"
                >
                  <span className={`font-bold ${isOpen ? "text-red-brand" : "text-navy"}`}>{f.q}</span>
                  <span className={`shrink-0 h-9 w-9 grid place-items-center transition-colors ${isOpen ? "bg-red-brand text-white" : "bg-light-gray text-navy"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-body leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
