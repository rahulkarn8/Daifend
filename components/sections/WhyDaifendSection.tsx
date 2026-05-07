"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { k: "Autonomous AI Defense", v: "Agent-aware containment", c: "rgba(41,240,255,0.95)" },
  { k: "Cognitive Threat Detection", v: "Psychological + deepfake signals", c: "rgba(255,61,212,0.92)" },
  { k: "AI-native Architecture", v: "Memory integrity + trust scoring", c: "rgba(177,76,255,0.95)" },
  { k: "Self-Healing Systems", v: "Repair • regenerate • restore", c: "rgba(124,255,107,0.92)" },
  { k: "Behavioral Threat Intelligence", v: "Intent + capability scoring", c: "rgba(76,125,255,0.95)" },
  { k: "Military-grade AI Security", v: "Audit-grade controls + ZTAI", c: "rgba(41,240,255,0.95)" },
] as const;

export function WhyDaifendSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            eyebrow="Why Daifend"
            title={
              <>
                Purpose-built for the era of{" "}
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(255,61,212,0.95),rgba(177,76,255,0.98),rgba(41,240,255,0.95))]">
                  autonomous cyber warfare
                </span>
              </>
            }
            description="Traditional security is optimized for human adversaries and static infrastructure. Daifend is optimized for agentic attackers, adaptive deception warfare, and AI memory systems."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.21, 0.9, 0.2, 1] }}
                className="rounded-[26px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl px-5 py-5 daifend-glow-border"
              >
                <div className="text-xs font-mono text-white/45">capability/{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-sm font-semibold tracking-tight text-white">{s.k}</div>
                <div className="mt-1 text-sm text-white/65 leading-6">{s.v}</div>
                <div className="mt-4 h-1.5 w-full rounded-full bg-white/6 overflow-hidden">
                  <motion.div
                    className="h-full w-[70%]"
                    style={{
                      background: `linear-gradient(90deg, ${s.c}, rgba(177,76,255,0.55), rgba(76,125,255,0.35))`,
                    }}
                    initial={{ x: "-40%" }}
                    animate={{ x: ["-40%", "10%", "-15%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

