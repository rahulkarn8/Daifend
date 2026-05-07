"use client";

import { motion } from "framer-motion";
import { Dna, Biohazard, BrainCircuit, Network, Layers, Fingerprint } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/Card";

const cards = [
  { t: "AI Malware DNA Sequencing", i: Dna, d: "Behavioral sequence modeling to classify evolving agentic malware." },
  { t: "Autonomous AI Containment", i: Biohazard, d: "Policy-bounded isolation and rollback under adversarial pressure." },
  { t: "Cognitive Cyber Warfare", i: BrainCircuit, d: "Detect and neutralize persuasion, coercion, and deepfake manipulation." },
  { t: "Federated AI Defense Mesh", i: Network, d: "Cross-tenant learning without leaking sensitive telemetry or data." },
  { t: "AI Hallucination Security Layer", i: Layers, d: "Prevent unsafe actions, poisoned outputs, and adversarial prompting chains." },
  { t: "Synthetic Identity Detection", i: Fingerprint, d: "Catch AI-generated personas and social-engineering infrastructure." },
] as const;

export function ResearchInnovationSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Research & innovation"
            title={
              <>
                Frontier R&D for{" "}
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(255,61,212,0.92),rgba(177,76,255,0.98))]">
                  AI deception warfare
                </span>
              </>
            }
            description="We build foundational security primitives for AI memory systems, autonomous agents, and human cognitive interfaces."
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.21, 0.9, 0.2, 1] }}
            >
              <Card className="h-full">
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-black/25">
                      <c.i className="h-5 w-5 text-white/85" />
                    </div>
                    <div className="text-xs font-mono text-white/45">rnd/{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <div className="mt-4 text-lg font-semibold tracking-tight text-white">{c.t}</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">{c.d}</p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/55 font-mono">
                    status: active • horizon: 2026–2035
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

