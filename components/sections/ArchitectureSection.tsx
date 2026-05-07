"use client";

import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/Card";

function FlowDot({ d, delay }: { d: string; delay: number }) {
  return (
    <motion.circle
      r={4}
      fill="rgba(41,240,255,0.9)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.9, 0] }}
      transition={{ duration: 1.25, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <animateMotion dur="1.25s" repeatCount="indefinite" path={d} />
    </motion.circle>
  );
}

export function ArchitectureSection() {
  const paths = {
    edgeToSoc: "M 210 250 C 340 120, 520 120, 650 250",
    cloudToSoc: "M 500 200 C 560 165, 610 170, 690 210",
    agentMesh: "M 320 310 C 420 360, 520 360, 620 310",
  };

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Platform architecture"
              title={
                <>
                  Zero Trust AI infrastructure with a{" "}
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(76,125,255,0.92),rgba(177,76,255,0.98))]">
                    self-healing immune system
                  </span>
                </>
              }
              description="Deploy across Azure, AWS, or hybrid environments. Daifend’s agent mesh correlates behavior, validates AI supply chains, and executes safe containment + restoration flows."
            />

            <div className="mt-8 grid gap-3">
              {[
                { k: "Cloud + edge + SOC integration", v: "AWS / Azure / hybrid-ready" },
                { k: "AI agents communicating", v: "policy-bounded, auditable autonomy" },
                { k: "Zero Trust AI architecture", v: "memory integrity + provenance controls" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl px-5 py-4"
                >
                  <div className="text-sm font-semibold tracking-tight text-white">{s.k}</div>
                  <div className="mt-1 text-sm text-white/65 leading-6">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.9, 0.2, 1] }}
          >
            <Card className="overflow-hidden">
              <div className="relative p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold tracking-tight text-white">
                    Architecture: Cloud • Edge • SOC
                  </div>
                  <div className="text-xs font-mono text-white/45">zero-trust-ai/v1</div>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/25 overflow-hidden">
                  <svg viewBox="0 0 900 520" className="h-[360px] w-full md:h-[420px]">
                    <defs>
                      <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="rgba(41,240,255,0.20)" />
                        <stop offset="45%" stopColor="rgba(41,240,255,0.70)" />
                        <stop offset="75%" stopColor="rgba(177,76,255,0.55)" />
                        <stop offset="100%" stopColor="rgba(76,125,255,0.20)" />
                      </linearGradient>
                      <filter id="gl">
                        <feGaussianBlur stdDeviation="2.6" result="b" />
                        <feMerge>
                          <feMergeNode in="b" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <rect x="0" y="0" width="900" height="520" fill="rgba(0,0,0,0.10)" />

                    {/* nodes */}
                    <g>
                      <rect x="90" y="210" width="240" height="120" rx="26" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
                      <text x="120" y="255" fill="rgba(255,255,255,0.85)" fontSize="16" fontWeight="600">Edge Runtime</text>
                      <text x="120" y="282" fill="rgba(255,255,255,0.55)" fontSize="13">Sensors • agents • isolation</text>
                    </g>

                    <g>
                      <rect x="390" y="140" width="240" height="120" rx="26" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
                      <text x="420" y="185" fill="rgba(255,255,255,0.85)" fontSize="16" fontWeight="600">Cloud Control Plane</text>
                      <text x="420" y="212" fill="rgba(255,255,255,0.55)" fontSize="13">Trust scoring • policy • intel</text>
                    </g>

                    <g>
                      <rect x="620" y="210" width="240" height="120" rx="26" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
                      <text x="650" y="255" fill="rgba(255,255,255,0.85)" fontSize="16" fontWeight="600">SOC + Orchestration</text>
                      <text x="650" y="282" fill="rgba(255,255,255,0.55)" fontSize="13">Audit • approvals • response</text>
                    </g>

                    {/* flow paths */}
                    <path d={paths.edgeToSoc} fill="none" stroke="url(#flow)" strokeWidth="2" opacity="0.55" filter="url(#gl)" />
                    <path d={paths.cloudToSoc} fill="none" stroke="url(#flow)" strokeWidth="2" opacity="0.55" filter="url(#gl)" />
                    <path d={paths.agentMesh} fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" opacity="0.7" strokeDasharray="6 10" />

                    {/* moving dots */}
                    <FlowDot d={paths.edgeToSoc} delay={0.1} />
                    <FlowDot d={paths.edgeToSoc} delay={0.65} />
                    <FlowDot d={paths.cloudToSoc} delay={0.25} />
                    <FlowDot d={paths.agentMesh} delay={0.35} />

                    {/* agent mesh callout */}
                    <g>
                      <rect x="270" y="330" width="360" height="120" rx="26" fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.12)" />
                      <text x="300" y="372" fill="rgba(255,255,255,0.85)" fontSize="16" fontWeight="600">AI Immune System</text>
                      <text x="300" y="398" fill="rgba(255,255,255,0.55)" fontSize="13">Deception • memory integrity • self-heal</text>
                      <text x="300" y="424" fill="rgba(255,255,255,0.55)" fontSize="13">Policy-bounded autonomy with SOC oversight</text>
                    </g>
                  </svg>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-4">
                  {[
                    { i: Workflow, t: "Data flow", d: "Streaming + batch" },
                    { i: ShieldCheck, t: "Zero Trust", d: "Memory integrity" },
                    { i: Server, t: "Hybrid", d: "Edge-first" },
                    { i: Cloud, t: "Cloud", d: "AWS/Azure" },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3"
                    >
                      <x.i className="h-4 w-4 text-white/80" />
                      <div className="mt-2 text-sm font-semibold tracking-tight text-white">
                        {x.t}
                      </div>
                      <div className="mt-1 text-xs text-white/55">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

