import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CorePlatformSection } from "@/components/sections/CorePlatformSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { DemoSimulationSection } from "@/components/sections/DemoSimulationSection";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "AI-native cybersecurity platform for autonomous AI threats: deception, memory poisoning detection, self-healing runtime, and supply chain trust scoring.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            A security platform engineered for{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
              autonomous AI adversaries
            </span>
          </>
        }
        description="Daifend defends AI memory, agents, and infrastructure by combining deception warfare, continuous trust scoring, cognitive threat detection, and self-healing containment workflows."
      />
      <CorePlatformSection />
      <ArchitectureSection />
      <DemoSimulationSection />
      <CinematicCTASection />
    </>
  );
}

