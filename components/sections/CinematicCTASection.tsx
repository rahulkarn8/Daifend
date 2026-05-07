"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function CinematicCTASection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl daifend-glow-border">
          <div className="absolute inset-0 daifend-grid opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(41,240,255,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(177,76,255,0.14),transparent_55%),radial-gradient(circle_at_55%_100%,rgba(76,125,255,0.12),transparent_55%)]" />
          <div className="relative px-6 py-12 md:px-12 md:py-16">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-[0.28em] uppercase text-white/55">
                Call to action
              </div>
              <h2 className="mt-3 text-balance text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-white">
                Prepare For The Era Of{" "}
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(255,61,212,0.92),rgba(177,76,255,0.98),rgba(41,240,255,0.98))]">
                  Autonomous Cyber Warfare
                </span>
              </h2>
              <p className="mt-4 text-pretty text-[15px] md:text-lg leading-7 text-white/70">
                The next adversary is an autonomous agent. Daifend gives your organization a
                deception-first, self-healing defense system—built for AI memory, agent supply
                chains, and cognitive attack surfaces.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <ButtonLink href="/contact#demo" variant="primary" size="lg" glow="cyan">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Talk to our AI security experts <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <motion.div
              className="mt-10 grid gap-3 md:grid-cols-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.9, 0.2, 1] }}
            >
              {[
                { k: "Deploy", v: "Cloud / hybrid / edge-first" },
                { k: "Integrate", v: "SOC tooling + policy controls" },
                { k: "Defend", v: "Deception + self-healing runtime" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-[24px] border border-white/10 bg-black/25 px-5 py-4"
                >
                  <div className="text-xs text-white/55">{x.k}</div>
                  <div className="mt-1 text-sm font-semibold tracking-tight text-white">
                    {x.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

