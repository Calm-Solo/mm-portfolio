import { proofPoints } from "@/lib/content";

export function ProofStrip() {
  return (
    <section aria-labelledby="proof-heading">
      <h2 id="proof-heading" className="sr-only">
        Proof points
      </h2>
      <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((point) => (
          <li key={point.id} className="bg-panel px-5 py-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
              {point.index}
            </p>
            <h3 className="mt-3 text-sm font-medium tracking-tight">
              {point.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {point.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
