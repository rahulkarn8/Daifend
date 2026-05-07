import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Daifend.AI.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(41,240,255,0.98),rgba(177,76,255,0.98))]">
              Policy
            </span>
          </>
        }
        description="Design placeholder. Replace with your official privacy policy before production launch."
      />

      <section className="py-20 md:py-28">
        <Container>
          <Card>
            <div className="p-6 md:p-8">
              <div className="text-sm font-semibold tracking-tight text-white">Placeholder policy</div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Daifend.AI may process information submitted via contact forms for the purpose of responding to
                enterprise inquiries. No additional claims are made in this placeholder.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/65">
                Update this page with jurisdiction-specific disclosures, retention periods, sub-processor lists,
                and user rights.
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}

