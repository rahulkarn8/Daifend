import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ActionFirewallSection } from "@/components/sections/ActionFirewallSection";
import { CorePlatformSection } from "@/components/sections/CorePlatformSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { DemoSimulationSection } from "@/components/sections/DemoSimulationSection";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Daifend Action Firewall — a deterministic, fail-closed proxy for AI agent tool calls with a tamper-evident audit trail — plus our AI-native platform roadmap.",
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
        description="Daifend governs every action your AI agents take — starting with the Action Firewall, shipping today — and extends to deception warfare, trust scoring, cognitive threat detection, and self-healing containment."
      />
      <ActionFirewallSection />
      <CorePlatformSection />
      <ArchitectureSection />
      <DemoSimulationSection />
      <CinematicCTASection />
    </>
  );
}

