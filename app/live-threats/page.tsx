import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LiveThreatMapSection } from "@/components/sections/LiveThreatMapSection";
import { DemoSimulationSection } from "@/components/sections/DemoSimulationSection";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export const metadata: Metadata = {
  title: "Live Threats",
  description:
    "Interactive threat visualization with simulated autonomous attack telemetry, severity-coded signals, and agent detection indicators.",
};

export default function LiveThreatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Live Threats"
        title={
          <>
            Autonomous threat telemetry,{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(255,61,212,0.92))]">
              visualized
            </span>
          </>
        }
        description="A production-ready UI shell for future live feeds. Today, it runs a deterministic simulation with agentic indicators, attack arcs, and severity-coded nodes."
      />
      <LiveThreatMapSection />
      <DemoSimulationSection />
      <CinematicCTASection />
    </>
  );
}

