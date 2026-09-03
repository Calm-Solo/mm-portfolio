import Image from "next/image";
import { mailtoHref, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(240px,380px)] lg:gap-16">
      <div className="flex max-w-xl flex-col gap-7">
        <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
          {site.role}
        </p>
        <h1 className="text-[2rem] leading-tight font-medium tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {site.headline}
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {site.lede}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Email Michael
          </a>
          <a
            href={site.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-hairline px-5 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {site.github.label}
          </a>
        </div>
      </div>
      <figure className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
        <div className="absolute -inset-px border border-hairline" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-accent" aria-hidden="true" />
        <div className="relative aspect-[2/3] bg-background">
          <Image
            src="/mam1.png"
            alt={`${site.name}, firmware validation and systems engineer`}
            fill
            priority
            sizes="(max-width: 1024px) 70vw, 380px"
            className="object-contain object-bottom"
          />
        </div>
        <figcaption className="mt-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          {site.name} / {site.location}
        </figcaption>
      </figure>
    </section>
  );
}
