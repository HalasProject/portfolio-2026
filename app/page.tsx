import dynamic from "next/dynamic";
import { DeferredScrollEffects } from "@/components/layout/DeferredScrollEffects";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { FloatingSocials } from "@/components/ui/FloatingSocials";
import { MobileLanguageSwitcher } from "@/components/ui/MobileLanguageSwitcher";
import HeroCanvas from "@/components/three/HeroCanvas";

const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection").then((m) => m.AboutSection),
  { ssr: true }
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/ExperienceSection").then(
      (m) => m.ExperienceSection
    ),
  { ssr: true }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then(
      (m) => m.ProjectsSection
    ),
  { ssr: true }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (m) => m.ContactSection
    ),
  { ssr: true }
);

const Footer = dynamic(
  () => import("@/components/layout/Footer").then((m) => m.Footer),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <FloatingSocials />
      <MobileLanguageSwitcher />
      <DeferredScrollEffects />
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
