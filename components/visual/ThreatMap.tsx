"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Node = {
  id: string;
  x: number;
  y: number;
  region: string;
  severity: "low" | "medium" | "high" | "critical";
};

type Attack = {
  id: string;
  from: string;
  to: string;
  kind: string;
  score: number; // 0..100
};

const sevColor: Record<Node["severity"], string> = {
  low: "rgba(124,255,107,0.95)",
  medium: "rgba(76,125,255,0.95)",
  high: "rgba(41,240,255,0.95)",
  critical: "rgba(255,61,212,0.95)",
};

function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const curve = Math.max(40, Math.min(160, Math.sqrt(dx * dx + dy * dy) * 0.35));
  const cx = mx + -dy * 0.08;
  const cy = my + dx * 0.08 - curve;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export function ThreatMap({
  className,
  density = 18,
}: {
  className?: string;
  density?: number;
}) {
  const [seed] = React.useState(() => Math.floor(Math.random() * 1_000_000));
  const [active, setActive] = React.useState<string | null>(null);

  const { nodes, attacks } = React.useMemo(() => {
    // deterministic-ish PRNG
    let s = seed;
    const rnd = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };

    const regions = [
      "US-W",
      "US-E",
      "EU-C",
      "UK",
      "MEA",
      "IN",
      "SEA",
      "JP",
      "AU",
      "BR",
      "AF",
      "CA",
    ];

    const sev: Node["severity"][] = ["low", "medium", "high", "critical"];
    const nodes: Node[] = Array.from({ length: density }).map((_, i) => ({
      id: `n${i}`,
      x: 60 + rnd() * 880,
      y: 70 + rnd() * 420,
      region: regions[Math.floor(rnd() * regions.length)]!,
      severity: sev[Math.min(3, Math.floor(rnd() * 4))]!,
    }));

    const kinds = [
      "agent-probe",
      "memory-poison",
      "deception-bypass",
      "rag-injection",
      "cognitive-lure",
      "supply-chain",
    ];

    const attacks: Attack[] = Array.from({ length: Math.max(10, Math.floor(density * 1.2)) }).map(
      (_, i) => {
        const from = nodes[Math.floor(rnd() * nodes.length)]!;
        let to = nodes[Math.floor(rnd() * nodes.length)]!;
        if (to.id === from.id) to = nodes[(Math.floor(rnd() * (nodes.length - 1)) + 1) % nodes.length]!;
        return {
          id: `a${i}`,
          from: from.id,
          to: to.id,
          kind: kinds[Math.floor(rnd() * kinds.length)]!,
          score: Math.floor(30 + rnd() * 70),
        };
      },
    );

    return { nodes, attacks };
  }, [density, seed]);

  const nodeById = React.useMemo(() => {
    const m = new Map<string, Node>();
    nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [nodes]);

  return (
    <div className={cn("relative overflow-hidden rounded-[28px]", className)}>
      <div className="absolute inset-0 daifend-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(41,240,255,0.16),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(177,76,255,0.14),transparent_55%)]" />
      <div className="relative border border-white/10 bg-white/[0.05] backdrop-blur-2xl daifend-glow-border">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <div className="text-sm font-semibold tracking-tight text-white">
              Live AI Threat Map
            </div>
            <div className="text-xs text-white/55">
              Simulated autonomous attack telemetry • severity-coded signals
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50">
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
              ThreatStream: standby
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
              SOC link: active
            </span>
          </div>
        </div>

        <div className="relative">
          <svg viewBox="0 0 1000 560" className="h-[360px] w-full md:h-[420px]">
            {/* subtle globe */}
            <defs>
              <radialGradient id="g" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
                <stop offset="55%" stopColor="rgba(255,255,255,0.04)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <linearGradient id="trace" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(41,240,255,0)" />
                <stop offset="40%" stopColor="rgba(41,240,255,0.65)" />
                <stop offset="70%" stopColor="rgba(177,76,255,0.55)" />
                <stop offset="100%" stopColor="rgba(255,61,212,0)" />
              </linearGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="2.6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle cx="500" cy="290" r="260" fill="url(#g)" opacity="0.9" />

            {/* attack arcs */}
            {attacks.map((a, i) => {
              const from = nodeById.get(a.from)!;
              const to = nodeById.get(a.to)!;
              const d = arcPath(from.x, from.y, to.x, to.y);
              const isActive = active === a.id;
              const op = isActive ? 0.95 : 0.5;
              const w = isActive ? 2.2 : 1.4;
              return (
                <g
                  key={a.id}
                  onMouseEnter={() => setActive(a.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="url(#trace)"
                    strokeWidth={w}
                    opacity={op}
                    filter="url(#softGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: op }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: 0.05 * (i % 10),
                    }}
                  />
                  <motion.circle
                    r={3.2}
                    fill="rgba(41,240,255,0.9)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.0, 0.9, 0.0] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: (i % 12) * 0.12,
                      ease: "easeInOut",
                    }}
                  >
                    <animateMotion dur="1.4s" repeatCount="indefinite" path={d} />
                  </motion.circle>
                </g>
              );
            })}

            {/* nodes */}
            {nodes.map((n, i) => (
              <g
                key={n.id}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
              >
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={10}
                  fill={sevColor[n.severity]}
                  opacity={0.14}
                  animate={{ opacity: [0.08, 0.22, 0.10] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: (i % 10) * 0.13,
                    ease: "easeInOut",
                  }}
                />
                <circle cx={n.x} cy={n.y} r={3.6} fill={sevColor[n.severity]} opacity={0.92} />
              </g>
            ))}
          </svg>

          <div className="absolute bottom-4 left-4 right-4 grid gap-3 md:grid-cols-3">
            {[
              { k: "Autonomous agent detections", v: "2,104 / min", c: "rgba(41,240,255,0.95)" },
              { k: "Deception activations", v: "71 / min", c: "rgba(177,76,255,0.95)" },
              { k: "Containment + self-heal", v: "19 / min", c: "rgba(124,255,107,0.95)" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-2xl"
              >
                <div className="text-xs text-white/55">{s.k}</div>
                <div className="mt-1 text-sm font-semibold tracking-tight" style={{ color: s.c }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

