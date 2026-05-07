import { Hero } from "@/components/sections/Hero";
import { LiveThreatMapSection } from "@/components/sections/LiveThreatMapSection";
import { CorePlatformSection } from "@/components/sections/CorePlatformSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyDaifendSection } from "@/components/sections/WhyDaifendSection";
import { ResearchInnovationSection } from "@/components/sections/ResearchInnovationSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { DemoSimulationSection } from "@/components/sections/DemoSimulationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveThreatMapSection />
      <CorePlatformSection />
      <ArchitectureSection />
      <IndustriesSection />
      <WhyDaifendSection />
      <ResearchInnovationSection />
      <RoadmapSection />
      <DemoSimulationSection />
      <TestimonialsSection />
      <CinematicCTASection />
    </>
  );
}
