import Link from "next/link";
import { site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-hairline">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
            {site.shortName}
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="hidden font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:inline">
            {site.location}
          </span>
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.18em] text-foreground uppercase underline decoration-accent decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}
