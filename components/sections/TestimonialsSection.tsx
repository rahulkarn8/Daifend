"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/Card";

const quotes = [
  {
    q: "Daifend is the first platform we’ve seen that treats autonomous agents as adversaries with intent—not just malware with signatures.",
    n: "CISO",
    o: "Global Defense Systems Integrator",
  },
  {
    q: "The memory poisoning detection is a breakthrough. We finally have a way to validate embeddings and RAG pipelines continuously.",
    n: "CTO",
    o: "AI Infrastructure, Fortune 100",
  },
  {
    q: "Cognitive cyber defense is no longer optional. Daifend’s approach is the closest thing to an AI immune system for humans and machines.",
    n: "Principal Researcher",
    o: "Autonomous Systems Lab",
  },
  {
    q: "The deception engine doesn’t just lure attackers—it manipulates agent behavior to reduce blast radius and force predictable paths.",
    n: "Director, Security Engineering",
    o: "Major Cloud Provider",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Trusted by leaders building{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
                mission-critical AI
              </span>
            </>
          }
          description="Fictional testimonials for design purposes. Replace with customer quotes during go-to-market."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {quotes.map((x, i) => (
            <motion.div
              key={x.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.21, 0.9, 0.2, 1] }}
            >
              <Card className="h-full">
                <div className="relative p-6">
                  <div className="text-xs font-mono text-white/45">signal/{String(i + 1).padStart(2, "0")}</div>
                  <blockquote className="mt-4 text-[15px] leading-7 text-white/80">
                    “{x.q}”
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold tracking-tight text-white">{x.n}</div>
                      <div className="text-xs text-white/55">{x.o}</div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl border border-white/12 bg-[radial-gradient(circle_at_30%_20%,rgba(41,240,255,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(177,76,255,0.30),transparent_55%)]" />
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

