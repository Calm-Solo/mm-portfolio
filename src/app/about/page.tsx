import type { Metadata } from "next";
import { PageIntro, PageMain } from "@/components/layout/PageMain";
import { aboutLede, education, experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: aboutLede,
};

export default function AboutPage() {
  return (
    <PageMain>
      <PageIntro
        index="About"
        title="Who you are hiring when you hire Michael."
        lede={aboutLede}
      />

      <section aria-labelledby="experience-heading" className="flex flex-col gap-6">
        <h2
          id="experience-heading"
          className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase"
        >
          Experience
        </h2>
        <ol className="flex flex-col gap-px border border-hairline bg-hairline">
          {experience.map((job) => (
            <li key={job.id} className="grid gap-6 bg-panel px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {job.index}
                </p>
                <h3 className="mt-3 text-lg font-medium tracking-tight">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-foreground">{job.org}</p>
                <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                  {job.dates} / {job.place}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {job.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-muted">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="education-heading" className="flex flex-col gap-6">
        <h2
          id="education-heading"
          className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase"
        >
          Education
        </h2>
        <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.id} className="bg-panel px-6 py-6">
              <p className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                {item.year}
              </p>
              <h3 className="mt-3 text-sm font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.org}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageMain>
  );
}
