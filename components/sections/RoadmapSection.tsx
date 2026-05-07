"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { year: "2025", title: "Traditional Security", desc: "IOC-driven detection and reactive response." },
  { year: "2027", title: "AI Security", desc: "Model provenance, memory integrity, and prompt governance." },
  { year: "2030", title: "Autonomous Threat Era", desc: "Agentic adversaries operate at machine speed across supply chains." },
  { year: "2035", title: "Autonomous AI Warfare Defense", desc: "Deception warfare + self-healing defense systems become mandatory." },
] as const;

export function RoadmapSection() {
  const [active, setActive] = React.useState(2);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Timeline"
          title={
            <>
              The future of cybersecurity:{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(76,125,255,0.95),rgba(41,240,255,0.95),rgba(177,76,255,0.95))]">
                2025 → 2035
              </span>
            </>
          }
          description="A roadmap from static defenses to AI-native trust, then to autonomous warfare defense. Daifend is building for the end-state."
        />

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl overflow-hidden daifend-glow-border">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="text-xs font-mono text-white/45">roadmap</div>
              <div className="mt-4 grid gap-2">
                {steps.map((s, idx) => (
                  <button
                    key={s.year}
                    onClick={() => setActive(idx)}
                    className={[
                      "text-left rounded-2xl border px-4 py-3 transition",
                      idx === active
                        ? "border-white/18 bg-black/30"
                        : "border-white/10 bg-white/5 hover:bg-white/7",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-semibold tracking-tight text-white">
                        {s.title}
                      </div>
                      <div className="text-xs font-mono text-white/45">{s.year}</div>
                    </div>
                    <div className="mt-1 text-sm text-white/65 leading-6">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="text-xs font-mono text-white/45">evolution</div>
              <div className="mt-4 relative h-[260px] md:h-[320px] rounded-3xl border border-white/10 bg-black/25 overflow-hidden">
                <div className="absolute inset-0 daifend-grid opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(41,240,255,0.16),transparent_55%),radial-gradient(circle_at_80%_65%,rgba(177,76,255,0.12),transparent_55%)]" />

                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.9, 0.2, 1] }}
                  className="absolute inset-0 p-6"
                >
                  <div className="text-sm font-semibold tracking-tight text-white">
                    {steps[active]!.year} • {steps[active]!.title}
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
                    {steps[active]!.desc} Daifend focuses on deception, memory integrity, cognitive
                    defenses, and self-healing runtime to keep humans safe as autonomous threats
                    escalate.
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {[
                      { k: "Detection", v: active < 2 ? "Reactive" : "Agent-aware" },
                      { k: "Response", v: active < 3 ? "Automated" : "Self-healing" },
                      { k: "Security model", v: active < 1 ? "Perimeter" : "Zero Trust AI" },
                    ].map((m) => (
                      <div
                        key={m.k}
                        className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3"
                      >
                        <div className="text-xs text-white/55">{m.k}</div>
                        <div className="mt-1 text-sm font-semibold tracking-tight text-white">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,rgba(76,125,255,0.0),rgba(41,240,255,0.9),rgba(177,76,255,0.9),rgba(255,61,212,0.0))]"
                  initial={{ x: "-50%" }}
                  animate={{ x: ["-50%", "0%", "-30%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

