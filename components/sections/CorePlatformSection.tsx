"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Database,
  Ghost,
  Factory,
  ScanEye,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/Card";

const modules = [
  {
    title: "AI Deception Engine",
    icon: Ghost,
    accent: "from-[rgba(41,240,255,0.55)] via-[rgba(177,76,255,0.35)] to-transparent",
    desc:
      "Manipulate and mislead malicious autonomous AI agents using synthetic infrastructure, fake attack surfaces, and adaptive cyber deception.",
    bullets: ["Synthetic infrastructure", "Adaptive attack surfaces", "Agent trap orchestration"],
  },
  {
    title: "AI Memory Poisoning Detection",
    icon: Database,
    accent: "from-[rgba(177,76,255,0.55)] via-[rgba(76,125,255,0.35)] to-transparent",
    desc:
      "Detect hidden manipulation inside vector databases, embeddings, RAG pipelines, and long-term AI memory systems.",
    bullets: ["Embedding integrity", "RAG tamper signals", "Vector drift forensics"],
  },
  {
    title: "Self-Healing Security Runtime",
    icon: Shield,
    accent: "from-[rgba(124,255,107,0.50)] via-[rgba(41,240,255,0.25)] to-transparent",
    desc:
      "Autonomously isolate, repair, regenerate, and restore compromised AI systems in real time.",
    bullets: ["Containment + rollback", "Regeneration workflows", "Audit-grade safety rails"],
  },
  {
    title: "AI Supply Chain Trust Scoring",
    icon: Factory,
    accent: "from-[rgba(76,125,255,0.55)] via-[rgba(41,240,255,0.25)] to-transparent",
    desc:
      "Continuously validate models, datasets, agents, plugins, prompts, and AI dependencies.",
    bullets: ["Dependency attestation", "Model provenance", "Prompt + plugin policy"],
  },
  {
    title: "Cognitive Firewall",
    icon: ScanEye,
    accent: "from-[rgba(255,61,212,0.40)] via-[rgba(177,76,255,0.25)] to-transparent",
    desc:
      "Detect psychological manipulation, deepfake persuasion, emotional coercion, and AI-generated social engineering attacks.",
    bullets: ["Coercion patterns", "Deepfake persuasion", "Human-risk telemetry"],
  },
  {
    title: "Autonomous AI Threat Intelligence",
    icon: Brain,
    accent: "from-[rgba(41,240,255,0.50)] via-[rgba(76,125,255,0.35)] to-transparent",
    desc:
      "Continuously learn and adapt from global AI attack patterns using agentic intelligence systems.",
    bullets: ["Agentic correlation", "Behavioral signatures", "Forward-deployed learnings"],
  },
] as const;

export function CorePlatformSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Core platform"
          title={
            <>
              An AI-native security stack built for{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(76,125,255,0.92),rgba(177,76,255,0.98))]">
                autonomous adversaries
              </span>
            </>
          }
          description="Deception, memory integrity, self-healing runtime, supply chain trust scoring, cognitive defense, and autonomous threat intelligence—designed to work together as one immune system."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.21, 0.9, 0.2, 1] }}
              >
                <Card className="h-full">
                  <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
                  <div className={`absolute -top-16 left-0 right-0 h-40 bg-gradient-to-b ${m.accent}`} />
                  <div className="relative p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-black/25 backdrop-blur-2xl">
                        <Icon className="h-5 w-5 text-white/85" />
                      </div>
                      <div className="text-xs font-mono text-white/45">
                        module/{String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="mt-4 text-lg font-semibold tracking-tight text-white">
                      {m.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/65">{m.desc}</p>

                    <div className="mt-5 grid gap-2">
                      {m.bullets.map((b) => (
                        <div
                          key={b}
                          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-[13px] text-white/70"
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

