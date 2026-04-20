import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Services } from "@/components/site/Services";
import { AboutSplit } from "@/components/site/AboutSplit";
import { VideoSection } from "@/components/site/VideoSection";
import { Portfolio } from "@/components/site/Portfolio";
import { CaseStudies } from "@/components/site/CaseStudies";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { Team } from "@/components/site/Team";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { RedCta } from "@/components/site/RedCta";
import { Blog } from "@/components/site/Blog";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consulting. — Strategy that ships. Growth that compounds." },
      { name: "description", content: "Senior advisors embedded with your leadership. 15+ years helping ambitious companies turn strategy into measurable, durable growth." },
      { property: "og:title", content: "Consulting. — Strategy that ships." },
      { property: "og:description", content: "Senior advisors embedded with your leadership. 15+ years helping ambitious companies turn strategy into durable growth." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <Services />
        <AboutSplit />
        <VideoSection />
        <Portfolio />
        <CaseStudies />
        <CtaBanner />
        <Testimonials />
        <Stats />
        <Team />
        <Pricing />
        <Faq />
        <RedCta />
        <Blog />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
