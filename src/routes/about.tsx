import { createFileRoute, Link } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="bg-navy text-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">{title}</h1>
        <div className="mt-4 text-sm text-white/70">
          <Link to="/" className="hover:text-red-brand">Home</Link>
          <span className="mx-3 text-red-brand">/</span>
          <span>{crumb}</span>
        </div>
      </div>
    </section>
  );
}

export { PageHero };

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Consulting." },
      { name: "description", content: "15 years building durable growth with ambitious leadership teams across finance, healthcare, manufacturing, and technology." },
      { property: "og:title", content: "About — Consulting." },
      { property: "og:description", content: "15 years building durable growth with ambitious leadership teams." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="About Us" crumb="About" />
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="label-red">Who We Are</div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">A boutique partner for serious growth</h2>
          <p className="mt-6 text-body leading-relaxed">
            We're a team of operators turned advisors. Founded in 2009, we've worked alongside 400+ leadership
            teams to build the strategy, systems, and people required to compound performance year after year.
          </p>
          <p className="mt-4 text-body leading-relaxed">
            We don't sell decks. Every engagement is led by a partner who stays accountable to your outcomes —
            from the first diagnostic to the last quarter of execution.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
