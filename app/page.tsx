import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { FloatingSocials } from "@/components/ui/FloatingSocials";
import HeroCanvas from "@/components/three/HeroCanvas";
import { ScrollEffects } from "@/components/layout/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <FloatingSocials />
      <ScrollEffects />
      <main id="main-content">
        <HeroCanvas />
        {/* <Hero /> */}
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
