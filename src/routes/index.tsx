import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrainingSplit } from "@/components/site/TrainingSplit";
import { WhatIOffer } from "@/components/site/WhatIOffer";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { About } from "@/components/site/About";
import { Blog } from "@/components/site/Blog";
import { VideoSection } from "@/components/site/VideoSection";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/forge-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ForgeFit London — Elite Personal Trainer in Shoreditch | Ryan Forge" },
      { name: "description", content: "Ryan Forge — CIMSPA accredited elite personal trainer in East London. 1-to-1 PT, transformation programmes & group training in Shoreditch, Hoxton & Bethnal Green." },
      { property: "og:title", content: "ForgeFit London — Elite Personal Trainer" },
      { property: "og:description", content: "Bespoke personal training in East London. 400+ clients, 11 years experience, results guaranteed." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <div className="bg-forge-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrainingSplit />
        <WhatIOffer />
        <Gallery />
        <Pricing />
        <About />
        <Blog />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
