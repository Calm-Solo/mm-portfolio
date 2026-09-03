import Link from "next/link";
import { liveProjects } from "@/lib/content";

export function SelectedWork() {
  return (
    <section aria-labelledby="work-heading">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="work-heading" className="text-xl font-medium tracking-tight sm:text-2xl">
          Selected work
        </h2>
        <Link
          href="/projects"
          className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase underline decoration-hairline underline-offset-4 hover:text-foreground hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          All work
        </Link>
      </div>
      <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
        {liveProjects.map((project) => (
          <li key={project.id} className="flex flex-col bg-panel p-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
              {project.index}
            </p>
            <h3 className="mt-3 text-sm font-medium tracking-tight">
              {project.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.summary}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center border border-hairline px-4 py-2.5 text-center text-sm font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {project.cta}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
