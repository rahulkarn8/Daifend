import { NextResponse } from "next/server";

function prng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export async function GET() {
  const rnd = prng(Math.floor(Date.now() / 8000));
  const severities = ["low", "medium", "high", "critical"] as const;
  const kinds = [
    "agent-probe",
    "memory-poison",
    "deception-bypass",
    "rag-injection",
    "cognitive-lure",
    "supply-chain",
  ] as const;

  const events = Array.from({ length: 12 }).map((_, i) => ({
    id: `evt_${Date.now()}_${i}`,
    ts: new Date(Date.now() - i * 650).toISOString(),
    severity: severities[Math.floor(rnd() * severities.length)]!,
    kind: kinds[Math.floor(rnd() * kinds.length)]!,
    score: Math.floor(30 + rnd() * 70),
    region: ["US", "EU", "UK", "IN", "SEA", "JP", "MEA", "AU"][Math.floor(rnd() * 8)]!,
  }));

  return NextResponse.json({
    source: "Daifend ThreatStream (mock)",
    now: new Date().toISOString(),
    events,
  });
}

