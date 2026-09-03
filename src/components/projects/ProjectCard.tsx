import { YouTubeShort } from "@/components/projects/YouTubeShort";
import { fieldProjects, liveProjects } from "@/lib/content";

type LiveProject = (typeof liveProjects)[number];
type FieldProject = (typeof fieldProjects)[number];

function StackList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-hairline px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-muted uppercase"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LiveProjectCard({ project }: { project: LiveProject }) {
  return (
    <article className="flex flex-col border border-hairline bg-panel p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
          {project.index}
        </p>
        <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          {project.status}
        </p>
      </div>
      <h2 className="mt-4 text-xl font-medium tracking-tight">{project.name}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      <StackList items={project.stack} />
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center bg-accent px-5 py-3 text-center text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {project.cta}
      </a>
    </article>
  );
}

export function FieldProjectCard({ project }: { project: FieldProject }) {
  const video = "video" in project ? project.video : undefined;

  return (
    <article className="grid gap-8 border border-hairline bg-panel p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:items-start">
      <div className="flex flex-col">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
            {project.index}
          </p>
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            Field build
          </p>
        </div>
        <h2 className="mt-4 text-xl font-medium tracking-tight">{project.name}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <StackList items={project.stack} />
      </div>
      {video ? (
        <YouTubeShort videoId={video.youtubeId} title={video.title} />
      ) : null}
    </article>
  );
}
