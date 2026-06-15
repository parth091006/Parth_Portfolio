import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import SkillsSection from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceSection from "@/components/sections/Experience";
import ResearchHighlight from "@/components/sections/ResearchHighlight";
import GitHubSection from "@/components/sections/GitHubSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <SkillsSection />

      <FeaturedProjects />

      <ExperienceSection />

      <ResearchHighlight />

      <GitHubSection />

      <ContactSection />
    </>
  );
}
