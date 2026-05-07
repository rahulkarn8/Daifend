"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";
import { ThreatMap } from "@/components/visual/ThreatMap";

export function LiveThreatMapSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Live threats"
              title={
                <>
                  Global autonomous attack telemetry with{" "}
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
                    agentic detection
                  </span>
                </>
              }
              description={
                <>
                  Daifend correlates AI-native signals across cloud, edge, and SOC pipelines to
                  detect deception-aware agents, memory poisoning attempts, and cognitive cyber
                  operations in motion.
                </>
              }
            />

            <div className="mt-8 grid gap-3">
              {[
                {
                  t: "Autonomous agent behavior fingerprinting",
                  d: "Detect tool use, memory access patterns, and deception-evasion strategies.",
                },
                {
                  t: "Threat severity + intent scoring",
                  d: "Assign intent, capability, and blast-radius scores—beyond IOC-based alerts.",
                },
                {
                  t: "Self-healing runbooks",
                  d: "Containment and restoration workflows execute safely with audit-grade controls.",
                },
              ].map((x, i) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.21, 0.9, 0.2, 1] }}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl px-5 py-4"
                >
                  <div className="text-sm font-semibold tracking-tight text-white">{x.t}</div>
                  <div className="mt-1 text-sm text-white/65 leading-6">{x.d}</div>
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
            <ThreatMap />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

