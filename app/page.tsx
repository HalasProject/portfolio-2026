import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { FloatingSocials } from "@/components/ui/FloatingSocials";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <FloatingSocials />
      <Header />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
