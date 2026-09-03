import Link from "next/link";
import { NavLinks } from "@/components/layout/NavLinks";
import { site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
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
        <div className="flex items-center justify-between gap-6 sm:justify-end">
          <span className="hidden font-mono text-[10px] tracking-[0.18em] text-muted uppercase lg:inline">
            {site.location}
          </span>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
