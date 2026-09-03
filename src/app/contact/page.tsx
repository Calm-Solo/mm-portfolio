import type { Metadata } from "next";
import { PageIntro, PageMain } from "@/components/layout/PageMain";
import { contactLede, mailtoHref, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contactLede,
};

export default function ContactPage() {
  return (
    <PageMain>
      <PageIntro index="Contact" title="Email is the shortest path to an interview." lede={contactLede} />
      <section className="max-w-xl border border-hairline bg-panel px-6 py-10 sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
          Station / {site.location}
        </p>
        <a
          href={mailtoHref}
          className="mt-6 inline-flex w-full items-center justify-center bg-accent px-5 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
        >
          Email Michael
        </a>
        <p className="mt-4 text-sm text-muted">{site.email}</p>
        <div className="mt-8 border-t border-hairline pt-6">
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            Source
          </p>
          <a
            href={site.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-foreground underline decoration-hairline underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {site.github.label}
          </a>
        </div>
      </section>
    </PageMain>
  );
}
