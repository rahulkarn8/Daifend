import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a demo, talk to Daifend experts, or discuss autonomous AI threat defense.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to our{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
              AI security experts
            </span>
          </>
        }
        description="Book a demo, review architecture, or discuss threat models for autonomous AI attackers, AI memory poisoning, cognitive cyber attacks, and deception warfare."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card>
              <div className="p-6 md:p-8">
                <div className="text-sm font-semibold tracking-tight text-white" id="demo">
                  Request demo
                </div>
                <div className="mt-2 text-sm text-white/65 leading-6">
                  Tell us what you’re defending. We’ll respond with a tailored demo and deployment plan.
                </div>
                <div className="mt-6">
                  <ContactForm id="demo" />
                </div>
              </div>
            </Card>

            <div className="grid gap-4">
              <Card>
                <div className="p-6 md:p-8">
                  <div className="text-sm font-semibold tracking-tight text-white">
                    What we’ll cover
                  </div>
                  <ul className="mt-4 grid gap-3 text-sm text-white/65">
                    <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      AI deception engine + synthetic infrastructure
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      Memory poisoning detection for vector DBs and RAG
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      Self-healing containment runtime with SOC oversight
                    </li>
                  </ul>
                </div>
              </Card>

              <Card>
                <div className="p-6 md:p-8">
                  <div className="text-sm font-semibold tracking-tight text-white">
                    Deployment targets
                  </div>
                  <div className="mt-4 grid gap-3 text-sm text-white/65">
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      AWS / Azure / hybrid
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      Edge runtime for low-latency containment
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      SOC toolchain integrations (placeholder)
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

