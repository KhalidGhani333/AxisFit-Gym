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
      { title: "Services & Pricing | AxisFit London - Premier Fitness" },
      { name: "description", content: "Discover comprehensive fitness programmes, personal training, and state-of-the-art facilities at AxisFit London. Achieve your health goals with us." },
      { property: "og:title", content: "Services & Pricing | AxisFit London" },
      { property: "og:description", content: "AxisFit London offers expert-led fitness classes, personalised training, and premium gym facilities. Explore our services and pricing today." },
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
