import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CinematicCTASection } from "@/components/sections/CinematicCTASection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Threat reports, whitepapers, and reference architecture resources for AI-native cybersecurity and autonomous threat defense.",
};

const resources = [
  {
    t: "Autonomous AI Threat Model (Preview)",
    d: "A framework for reasoning about agentic adversaries, autonomy, and intent-driven attack chains.",
    tag: "Whitepaper",
    href: "/resources",
  },
  {
    t: "AI Memory Poisoning Defense (Preview)",
    d: "Controls for vector DB integrity, embedding provenance, and RAG pipeline tamper detection.",
    tag: "Brief",
    href: "/resources",
  },
  {
    t: "Cognitive Cyber Attacks (Preview)",
    d: "Detect coercion patterns, deepfake persuasion, and AI-generated social engineering at scale.",
    tag: "Report",
    href: "/resources",
  },
  {
    t: "Zero Trust AI Architecture (Preview)",
    d: "Deployment patterns for cloud + edge + SOC integration with policy-bounded autonomy.",
    tag: "Architecture",
    href: "/platform",
  },
] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Research artifacts for the{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(76,125,255,0.92),rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
              AI threat era
            </span>
          </>
        }
        description="Design-forward placeholders for future content. Replace with real whitepapers, reports, docs, and press assets."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((r, i) => (
              <Card key={r.t}>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold tracking-[0.24em] uppercase text-white/55">
                      {r.tag}
                    </div>
                    <div className="text-xs font-mono text-white/45">res/{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <div className="mt-3 text-lg font-semibold tracking-tight text-white">{r.t}</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">{r.d}</p>
                  <div className="mt-5">
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/75 hover:bg-white/10 transition"
                    >
                      Explore
                      <span className="text-white/35">→</span>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CinematicCTASection />
    </>
  );
}

