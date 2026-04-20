import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Blog } from "@/components/site/Blog";
import { PageHero } from "./about";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Consulting." },
      { name: "description", content: "Field notes from real engagements: the patterns, frameworks, and small habits that compound results." },
      { property: "og:title", content: "Blog — Consulting." },
      { property: "og:description", content: "Field notes from real engagements." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Our Blog" crumb="Blog" />
      <Blog />
      <Footer />
    </div>
  ),
});
