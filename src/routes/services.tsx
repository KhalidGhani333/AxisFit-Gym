import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { WhatIOffer } from "@/components/site/WhatIOffer";
import { Pricing } from "@/components/site/Pricing";
import { TrainingSplit } from "@/components/site/TrainingSplit";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Training Programmes & Pricing — ForgeFit London" },
      { name: "description", content: "Bespoke 1-to-1 personal training, transformation programmes & group sessions in East London. From £49 per session." },
      { property: "og:title", content: "Training & Pricing — ForgeFit London" },
      { property: "og:description", content: "Personal training, strength & conditioning, fat loss programmes in Shoreditch." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();
  return (
    <div className="bg-forge-bg min-h-screen">
      <Navbar />
      <main>
        <WhatIOffer />
        <TrainingSplit />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
