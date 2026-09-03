import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { WhoYouHire } from "@/components/home/WhoYouHire";

export default function Home() {
  return (
    <main
      id="main"
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-5 py-12 sm:px-8 sm:py-16 lg:gap-20 lg:py-20"
    >
      <Hero />
      <ProofStrip />
      <WhoYouHire />
    </main>
  );
}
