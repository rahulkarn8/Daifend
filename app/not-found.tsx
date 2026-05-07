import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 daifend-glow-border">
          <div className="text-xs font-mono text-white/45">404</div>
          <div className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Page not found
          </div>
          <p className="mt-3 text-sm md:text-base leading-6 text-white/65 max-w-2xl">
            The requested resource doesn’t exist. Return to the homepage to continue exploring
            Daifend’s platform.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition"
            >
              Back to home →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

