import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Training & Nutrition Articles — ForgeFit London Blog" },
      { name: "description", content: "Evidence-based fitness and nutrition insights from CIMSPA-accredited trainer Ryan Forge." },
      { property: "og:title", content: "ForgeFit Blog — Training & Nutrition" },
      { property: "og:description", content: "Real talk on training, nutrition, and getting results in London." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  useReveal();
  return (
    <div className="bg-forge-bg min-h-screen">
      <Navbar />
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
