"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";
import { TerminalConsole } from "@/components/visual/TerminalConsole";

const steps = [
  { t: "AI attack detected", d: "Behavioral anomaly triggers agent-aware classification and intent scoring." },
  { t: "Threat deception activated", d: "Synthetic infrastructure routes the attacker into adaptive traps." },
  { t: "Autonomous containment", d: "Isolation + snapshot protects critical memory and RAG infrastructure." },
  { t: "Self-healing initiated", d: "Restore from verified provenance checkpoints with policy controls." },
  { t: "Threat neutralized", d: "Post-incident analysis updates threat intelligence and trust scoring." },
] as const;

export function DemoSimulationSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Demo experience"
              title={
                <>
                  An immersive simulation of{" "}
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
                    autonomous defense
                  </span>
                </>
              }
              description="See how Daifend detects, deceives, contains, and self-heals—turning adversarial autonomy into a controlled, auditable process."
            />

            <div className="mt-8 grid gap-3">
              {steps.map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.21, 0.9, 0.2, 1] }}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl px-5 py-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold tracking-tight text-white">{s.t}</div>
                    <div className="text-xs font-mono text-white/45">step/{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <div className="mt-1 text-sm text-white/65 leading-6">{s.d}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.9, 0.2, 1] }}
          >
            <TerminalConsole />
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                { k: "AI model risk scoring", v: "Trust score: 0.98 • drift: low" },
                { k: "Threat feed", v: "Behavioral signature learned • pushed globally" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-[22px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl px-5 py-4"
                >
                  <div className="text-xs text-white/55">{x.k}</div>
                  <div className="mt-1 text-sm font-semibold tracking-tight text-white">{x.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

