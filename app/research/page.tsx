import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ResearchInnovationSection } from "@/components/sections/ResearchInnovationSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Frontier R&D in autonomous AI containment, deception warfare, memory poisoning detection, and cognitive cyber defense.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title={
          <>
            Building the primitives for{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(255,61,212,0.92),rgba(177,76,255,0.98),rgba(41,240,255,0.98))]">
              AI-native defense
            </span>
          </>
        }
        description="Our research focuses on adversarial autonomy, AI memory integrity, cognitive manipulation, and self-healing defense systems for next-generation infrastructure."
      />
      <ResearchInnovationSection />
      <RoadmapSection />
      <CinematicCTASection />
    </>
  );
}

