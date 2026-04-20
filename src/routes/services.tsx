import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Services } from "@/components/site/Services";
import { PageHero } from "./about";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Consulting." },
      { name: "description", content: "Strategy planning, audit & evaluation, business advisory, talent, and growth marketing — engineered around your goals." },
      { property: "og:title", content: "Services — Consulting." },
      { property: "og:description", content: "Six core practices, one outcome: clarity, momentum, and durable growth." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Our Services" crumb="Services" />
      <Services />
      <Footer />
    </div>
  ),
});
