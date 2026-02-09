import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import { ProjectsPreview, ContactPreview } from "@/components/HomeSections";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsPreview />
      <AboutSection />
      <ContactPreview />
    </main>
  );
};

export default Index;
