import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { WhyDaifendSection } from "@/components/sections/WhyDaifendSection";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Daifend.AI is an AI-native cybersecurity company defending humanity against autonomous AI threats, cognitive cyber attacks, and AI deception warfare.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Humanity needs protection from{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98),rgba(255,61,212,0.92))]">
              autonomous AI threats
            </span>
          </>
        }
        description="Daifend is building the defense layer for AI-native infrastructure: deception-first security, memory integrity, cognitive cyber protection, and self-healing runtime systems."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                t: "Mission",
                d: "Defend humanity and critical infrastructure from autonomous AI adversaries—at machine speed, with auditable safety.",
              },
              {
                t: "Approach",
                d: "Treat AI attackers as strategic agents. Detect intent, deploy deception, contain safely, then self-heal with verified provenance.",
              },
              {
                t: "Principles",
                d: "Zero Trust AI, minimal blast radius, verifiable recovery, continuous trust scoring, and privacy-preserving learning.",
              },
            ].map((x) => (
              <Card key={x.t}>
                <div className="p-6">
                  <div className="text-xs font-mono text-white/45">daifend/{x.t.toLowerCase()}</div>
                  <div className="mt-3 text-lg font-semibold tracking-tight text-white">{x.t}</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">{x.d}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <WhyDaifendSection />
      <CinematicCTASection />
    </>
  );
}

