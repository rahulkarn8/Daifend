"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionStyle } from "framer-motion";
import { ArrowRight, Shield, Radar, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { NeuralBackground } from "@/components/three/NeuralBackground";
import { cn } from "@/lib/cn";

function Metric({
  label,
  value,
  suffix,
  accent,
}: {
  label: string;
  value: string;
  suffix?: string;
  accent: "cyan" | "violet" | "blue" | "lime";
}) {
  const accents: Record<typeof accent, string> = {
    cyan: "text-[rgba(41,240,255,0.95)]",
    violet: "text-[rgba(177,76,255,0.95)]",
    blue: "text-[rgba(76,125,255,0.95)]",
    lime: "text-[rgba(124,255,107,0.95)]",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl px-4 py-3 daifend-glow-border">
      <div className={cn("text-sm font-semibold tracking-tight", accents[accent])}>
        {value}
        {suffix ? <span className="text-white/55"> {suffix}</span> : null}
      </div>
      <div className="mt-1 text-[11px] md:text-xs text-white/55 tracking-[0.12em] uppercase">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.3);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.6 });
  const gx = useTransform(sx, (v) => `${Math.round(v * 100)}%`);
  const gy = useTransform(sy, (v) => `${Math.round(v * 100)}%`);
  const glowStyle = React.useMemo(() => {
    return {
      background:
        "radial-gradient(650px 450px at var(--x) var(--y), rgba(41,240,255,0.18), transparent 60%), radial-gradient(650px 450px at calc(var(--x) + 18%) calc(var(--y) + 10%), rgba(177,76,255,0.14), transparent 62%)",
      ["--x"]: gx,
      ["--y"]: gy,
    } as MotionStyle & { ["--x"]: typeof gx; ["--y"]: typeof gy };
  }, [gx, gy]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <NeuralBackground />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-80"
          style={glowStyle}
        />
      </div>

      <Container className="relative">
        <div className="min-h-[calc(100dvh-112px)] pt-16 md:pt-20 pb-14 flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.9, 0.2, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-2xl"
            >
              <Radar className="h-4 w-4 text-[rgba(41,240,255,0.9)]" />
              <span className="text-xs md:text-[13px] text-white/70 tracking-tight">
                Live autonomous threat telemetry simulation is active
              </span>
              <span className="ml-1 inline-flex h-1.5 w-1.5 rounded-full bg-[rgba(124,255,107,0.95)] shadow-[0_0_24px_rgba(124,255,107,0.55)]" />
            </motion.div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.8, ease: [0.21, 0.9, 0.2, 1] }}
                  className="text-balance text-[38px] leading-[1.04] md:text-[56px] lg:text-[66px] font-semibold tracking-[-0.04em] text-white"
                >
                  Securing{" "}
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(76,125,255,0.92),rgba(177,76,255,0.98))]">
                    AI Memory & Autonomous Agents
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14, duration: 0.8, ease: [0.21, 0.9, 0.2, 1] }}
                  className="mt-6 max-w-2xl text-pretty text-[15px] md:text-lg leading-7 text-white/70"
                >
                  Daifend secures AI memory, autonomous agents, and enterprise AI systems against
                  manipulation and emerging AI-native threats.
                </motion.p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <ButtonLink href="/contact#demo" variant="primary" size="lg" glow="cyan">
                    Request demo <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/platform" variant="secondary" size="lg">
                    Explore platform <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                  <Metric label="AI attacks blocked" value="87,412" accent="cyan" />
                  <Metric label="Autonomous threats analyzed" value="1.9M" accent="violet" />
                  <Metric label="Self-healing actions executed" value="403,118" accent="lime" />
                  <Metric label="Global threat signals" value="12.4B" accent="blue" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.8, ease: [0.21, 0.9, 0.2, 1] }}
                className="relative"
              >
                <div className="rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl overflow-hidden daifend-glow-border">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold tracking-tight text-white">
                        AI Defense Runtime
                      </div>
                      <div className="font-mono text-xs text-white/55">SOC • EDGE • CLOUD</div>
                    </div>
                    <div className="mt-4 grid gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-[rgba(41,240,255,0.9)]" />
                            <div className="text-sm text-white/80">
                              Autonomous containment ready
                            </div>
                          </div>
                          <span className="text-xs font-mono text-white/45">latency 7ms</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/6 overflow-hidden">
                          <motion.div
                            className="h-full w-[72%] bg-[linear-gradient(90deg,rgba(41,240,255,0.85),rgba(177,76,255,0.85))]"
                            initial={{ width: "18%" }}
                            animate={{ width: ["22%", "74%", "66%", "78%"] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-[rgba(177,76,255,0.9)]" />
                            <div className="text-sm text-white/80">Deception layer active</div>
                          </div>
                          <span className="text-xs font-mono text-white/45">mode: adaptive</span>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          {["Synthetic infra", "Fake surfaces", "Agent traps"].map((t) => (
                            <div
                              key={t}
                              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/65"
                            >
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-28 border-t border-white/10 bg-[linear-gradient(90deg,rgba(41,240,255,0.10),rgba(177,76,255,0.08),rgba(76,125,255,0.08))]">
                    <div className="absolute inset-0 opacity-80 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:36px_36px] [mask-image:linear-gradient(to_top,black,transparent)]" />
                    <motion.div
                      className="absolute left-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-2xl border border-white/15 bg-black/35 backdrop-blur-2xl"
                      animate={{ x: [0, 420, 240, 520] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute left-5 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(41,240,255,0.30),transparent_60%)] blur-xl"
                      animate={{ x: [0, 420, 240, 520], opacity: [0.35, 0.7, 0.45, 0.75] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                <div className="mt-4 text-xs text-white/50">
                  Simulated telemetry. Live feeds integrate via Daifend ThreatStream API.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

