import Link from "next/link";
import { fieldProjects, liveProjects } from "@/lib/content";

const teasers = [...liveProjects, ...fieldProjects].map((project) => ({
  id: project.id,
  index: project.index,
  name: project.name,
  hook: project.homeHook,
}));

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
      <ul className="border border-hairline">
        {teasers.map((project) => (
          <li key={project.id} className="border-b border-hairline last:border-b-0">
            <Link
              href="/projects"
              className="grid gap-1 bg-panel px-5 py-4 transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent sm:grid-cols-[2.5rem_minmax(0,0.42fr)_minmax(0,0.58fr)] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                {project.index}
              </span>
              <span className="text-sm font-medium tracking-tight">{project.name}</span>
              <span className="text-sm text-muted sm:text-right">{project.hook}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          See all work
        </Link>
      </div>
    </section>
  );
}
