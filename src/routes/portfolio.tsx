import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Gallery — AxisFit London | Training in East London" },
      { name: "description", content: "A look inside the AxisFit training studios in Shoreditch & Bethnal Green." },
      { property: "og:title", content: "Gallery — AxisFit London" },
      { property: "og:description", content: "Real training, real clients, real results." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useReveal();
  return (
    <div className="bg-forge-bg min-h-screen">
      <Navbar />
      <main className="pt-10">
        <div className="container mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="label-red mb-4">Real Training</p>
          <h1 className="font-display text-4xl md:text-6xl text-white">The Gallery</h1>
        </div>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
