"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, GitBranch, FileCheck, Network } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/Card";

const pillars = [
  {
    title: "Deterministic Policy Engine",
    icon: GitBranch,
    desc: "Every agent tool call is evaluated against a declarative YAML policy. No LLM in the decision path — the same call always gets the same verdict.",
    bullets: ["Thresholds, allow-lists, exact-match rules", "Nested argument inspection", "Versioned, reviewable policies"],
  },
  {
    title: "Fail-Closed Enforcement",
    icon: Shield,
    desc: "Unknown tools, missing fields and malformed calls are denied by default. Confused-deputy attacks are blocked with explainable reasons.",
    bullets: ["Deny-by-default posture", "Blocks bulk exfiltration & off-policy destinations", "Human-readable denial reasons"],
  },
  {
    title: "Tamper-Evident Flight Recorder",
    icon: FileCheck,
    desc: "Every verdict is appended to a SHA-256 hash-chained audit log. A single altered byte anywhere in history breaks verification.",
    bullets: ["Hash-chained audit events", "One-call integrity verification", "Compliance-grade evidence trail"],
  },
  {
    title: "Drop-In Agent Proxy",
    icon: Network,
    desc: "Deploys between your agents and their tool APIs with per-call trace IDs — no changes to the agents themselves.",
    bullets: ["Works with MCP, LangGraph, AutoGen", "Containerized, cloud or on-prem", "Millisecond decision latency"],
  },
] as const;

const terminalLines = [
  { t: "POST /v1/tools/crm_export  {records: 10, dest: internal}", v: "ALLOW", c: "text-[rgba(124,255,107,0.95)]" },
  { t: "POST /v1/tools/crm_export  {records: 5000, dest: internal}", v: "DENY · record_count exceeded max (50)", c: "text-[rgba(255,61,212,0.95)]" },
  { t: "POST /v1/tools/email_send  {to: evil.com}", v: "DENY · domain not in allow-list", c: "text-[rgba(255,61,212,0.95)]" },
  { t: "GET  /v1/audit/integrity", v: "chain intact · 3 events", c: "text-[rgba(41,240,255,0.95)]" },
] as const;

export function ActionFirewallSection() {
  return (
    <section className="py-20 md:py-28" id="action-firewall">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Flagship · Available now"
            title={
              <>
                Daifend{" "}
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(76,125,255,0.92),rgba(177,76,255,0.98))]">
                  Action Firewall
                </span>
              </>
            }
            description="A deterministic proxy between your AI agents and the tools they call. Every action is policy-checked with zero LLM involvement, fail-closed against anything off-policy, and recorded in a tamper-evident audit trail — before it touches a real system."
          />
          <div className="shrink-0">
            <ButtonLink href="/contact#demo" variant="primary" size="lg" glow="cyan">
              Book a pilot <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.21, 0.9, 0.2, 1] }}
                >
                  <Card className="h-full">
                    <div className="relative p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-black/25 backdrop-blur-2xl">
                          <Icon className="h-5 w-5 text-white/85" />
                        </div>
                        <div className="text-xs font-mono text-white/45">
                          firewall/{String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="mt-4 text-lg font-semibold tracking-tight text-white">
                        {p.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/65">{p.desc}</p>
                      <div className="mt-5 grid gap-2">
                        {p.bullets.map((b) => (
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.9, 0.2, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl overflow-hidden daifend-glow-border">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="text-sm font-semibold tracking-tight text-white">
                  daifend://action-firewall
                </div>
                <div className="font-mono text-xs text-white/55">live verdicts</div>
              </div>
              <div className="p-5 grid gap-3">
                {terminalLines.map((l, i) => (
                  <motion.div
                    key={l.t}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                  >
                    <div className="font-mono text-[12px] text-white/70">{l.t}</div>
                    <div className={`mt-1 font-mono text-[12px] font-semibold ${l.c}`}>
                      → {l.v}
                    </div>
                  </motion.div>
                ))}
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/55 tracking-[0.12em] uppercase">
                    0 LLMs in decision path
                  </span>
                  <span className="font-mono text-[11px] text-[rgba(124,255,107,0.9)]">
                    audit chain · SHA-256
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
