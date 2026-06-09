import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import GitHubSection from "@/components/sections/GitHubSection";
import ResearchHighlight from "@/components/sections/ResearchHighlight";
import ExperienceSection from "@/components/sections/Experience";
import SkillsSection from "@/components/sections/Skills";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Stats />

      <FeaturedProjects />

      <GitHubSection />

      <ResearchHighlight />

      <ExperienceSection />

      <SkillsSection />

      <AboutPreview />

      <ContactSection />
    </>
  );
}