import { whoYouHire } from "@/lib/content";

export function WhoYouHire() {
  return (
    <section
      aria-labelledby="who-heading"
      className="grid gap-8 border border-hairline bg-panel px-6 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16 lg:px-10 lg:py-12"
    >
      <h2
        id="who-heading"
        className="text-xl font-medium tracking-tight sm:text-2xl"
      >
        {whoYouHire.title}
      </h2>
      <div className="flex flex-col gap-4">
        {whoYouHire.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[0.95rem] leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
