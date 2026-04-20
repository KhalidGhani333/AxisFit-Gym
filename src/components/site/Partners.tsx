const partners = ["Javana Coffee Co", "Sport Tactics", "Frobes", "Cara Indoors", "Emilie Aldrich"];

export function Partners() {
  return (
    <section className="bg-white py-16 border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        {partners.map((p) => (
          <div key={p} className="text-center text-lg md:text-xl font-extrabold tracking-tight text-navy/30 hover:text-navy transition-colors cursor-default italic">
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}
