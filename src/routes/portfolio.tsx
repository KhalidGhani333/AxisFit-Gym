import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Portfolio } from "@/components/site/Portfolio";
import { CaseStudies } from "@/components/site/CaseStudies";
import { PageHero } from "./about";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Consulting." },
      { name: "description", content: "Featured case studies across construction, finance, healthcare, and manufacturing." },
      { property: "og:title", content: "Portfolio — Consulting." },
      { property: "og:description", content: "Featured case studies across our most ambitious engagements." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Our Portfolio" crumb="Portfolio" />
      <Portfolio />
      <CaseStudies />
      <Footer />
    </div>
  ),
});
