"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Shield,
  Building2,
  Cpu,
  HeartPulse,
  Car,
  Building,
  Radio,
  Plane,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/Card";

const industries = [
  { t: "Defense", i: Shield, d: "Protect mission-critical autonomous systems and classified AI workflows." },
  { t: "Banking", i: Landmark, d: "Stop cognitive fraud, model supply chain compromise, and autonomous intrusion." },
  { t: "Government", i: Building2, d: "Secure citizen services and AI decision infrastructure at scale." },
  { t: "Critical Infrastructure", i: Cpu, d: "Defend power, water, and industrial systems from agentic disruption." },
  { t: "Healthcare", i: HeartPulse, d: "Protect clinical AI, RAG medical copilots, and patient data from poisoning." },
  { t: "Automotive", i: Car, d: "Secure connected vehicles, autonomy stacks, and OTA AI components." },
  { t: "Smart Cities", i: Building, d: "Prevent AI-driven manipulation across sensing, traffic, and emergency systems." },
  { t: "Telecom", i: Radio, d: "Harden networks against autonomous exploitation and AI-native lateral movement." },
  { t: "Aviation", i: Plane, d: "Defend flight ops, logistics AI, and digital twins from deception warfare." },
] as const;

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title={
            <>
              Built for enterprise and{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
                defense-grade
              </span>{" "}
              environments
            </>
          }
          description="Daifend’s architecture supports compliance-heavy, high-assurance deployments with SOC oversight and auditable autonomy."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((x, i) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.21, 0.9, 0.2, 1] }}
            >
              <Card className="h-full">
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-black/25">
                      <x.i className="h-5 w-5 text-white/85" />
                    </div>
                    <div className="text-xs font-mono text-white/45">
                      sector/{String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold tracking-tight text-white">
                    {x.t}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/65">{x.d}</p>
                  <div className="mt-5 h-1.5 w-full rounded-full bg-white/6 overflow-hidden">
                    <motion.div
                      className="h-full w-[60%] bg-[linear-gradient(90deg,rgba(41,240,255,0.8),rgba(177,76,255,0.75),rgba(76,125,255,0.55))]"
                      initial={{ x: "-35%" }}
                      animate={{ x: ["-35%", "20%", "-10%"] }}
                      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                    />
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

