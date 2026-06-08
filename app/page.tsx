import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ResearchHighlight from "@/components/sections/ResearchHighlight";
import ExperienceSection from "@/components/sections/Experience";
import SkillsSection from "@/components/sections/Skills";
import AboutPreview from "@/components/sections/AboutPreview";
import GitHubSection from "@/components/sections/GitHubSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Stats />

      <FeaturedProjects />

      <ResearchHighlight />

      <ExperienceSection />
      
      <GitHubSection />

      <SkillsSection />

      <AboutPreview />
    </>
  );
}