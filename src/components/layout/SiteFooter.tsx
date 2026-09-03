import { mailtoHref, site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          {site.shortName} / {year}
        </p>
        <nav aria-label="Contact" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={mailtoHref}
            className="font-mono text-[11px] tracking-[0.14em] text-foreground uppercase underline decoration-hairline underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {site.email}
          </a>
          <a
            href={site.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase underline decoration-hairline underline-offset-4 hover:text-foreground hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {site.github.label}
          </a>
        </nav>
      </div>
    </footer>
  );
}
