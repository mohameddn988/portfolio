import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import FeaturedProjects from "@/components/sections/FeaturedProjectsSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <WorkExperienceSection />
    </main>
  );
}
