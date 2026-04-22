import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { VideoSection } from "@/components/site/VideoSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ryan Forge — Elite Personal Trainer in London" },
      { name: "description", content: "Meet Ryan Forge, CIMSPA-accredited PT with 11 years' experience in East London. Level 4 Strength & Conditioning Specialist." },
      { property: "og:title", content: "About Ryan Forge — AxisFit London" },
      { property: "og:description", content: "11 years coaching · 400+ clients trained · CIMSPA & REPs accredited." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <div className="bg-forge-bg min-h-screen">
      <Navbar />
      <main className="pt-10">
        <About />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
