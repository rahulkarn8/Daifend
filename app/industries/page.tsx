import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Defense-grade AI-native cybersecurity for critical industries: defense, banking, government, infrastructure, healthcare, automotive, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Defending the systems that{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(76,125,255,0.92),rgba(177,76,255,0.98))]">
              society depends on
            </span>
          </>
        }
        description="Daifend supports compliance-heavy, mission-critical deployments with auditable autonomy, SOC integration, and hybrid-ready architecture."
      />
      <IndustriesSection />
      <CinematicCTASection />
    </>
  );
}

