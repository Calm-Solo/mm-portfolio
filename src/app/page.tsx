import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { SelectedWork } from "@/components/home/SelectedWork";
import { TechStack } from "@/components/home/TechStack";
import { WhoYouHire } from "@/components/home/WhoYouHire";
import { PageMain } from "@/components/layout/PageMain";

export default function Home() {
  return (
    <PageMain>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <TechStack />
      <WhoYouHire />
    </PageMain>
  );
}
