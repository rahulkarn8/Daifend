import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Daifend.AI to build AI-native cybersecurity for autonomous threats, deception warfare, and self-healing infrastructure protection.",
};

const roles = [
  {
    t: "Security Researcher (Autonomous Agents)",
    d: "Model adversarial autonomy, develop behavioral signatures, and build deception evaluation harnesses.",
    loc: "Remote / Hybrid",
  },
  {
    t: "Applied ML Engineer (Memory Integrity)",
    d: "Detect embedding manipulation, RAG injection, and long-term memory poisoning in production pipelines.",
    loc: "Remote / Hybrid",
  },
  {
    t: "Full-Stack Engineer (Threat Intelligence UX)",
    d: "Build cinematic enterprise UIs for telemetry, dashboards, and interactive threat simulations.",
    loc: "Remote",
  },
  {
    t: "Platform Engineer (Self-Healing Runtime)",
    d: "Design containment + restore workflows with policy controls, observability, and SOC integration.",
    loc: "Hybrid",
  },
] as const;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the defense layer for{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
              AI-native infrastructure
            </span>
          </>
        }
        description="We’re looking for builders who thrive at the intersection of security, autonomy, and high-assurance systems."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((r, i) => (
              <Card key={r.t}>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono text-white/45">role/{String(i + 1).padStart(2, "0")}</div>
                    <div className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
                      {r.loc}
                    </div>
                  </div>
                  <div className="mt-3 text-lg font-semibold tracking-tight text-white">{r.t}</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">{r.d}</p>
                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/75 hover:bg-white/10 transition"
                    >
                      Apply / reach out <span className="text-white/35">→</span>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

