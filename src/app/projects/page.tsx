import type { Metadata } from "next";
import { PageIntro, PageMain } from "@/components/layout/PageMain";
import {
  FieldProjectCard,
  LiveProjectCard,
} from "@/components/projects/ProjectCard";
import { fieldProjects, liveProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Live products and field builds by Michael McBride — Learning Lab, BidSpark, First Baptist Church of North Highlands, Smart Pool Monitor, and a home robot.",
};

export default function ProjectsPage() {
  return (
    <PageMain>
      <PageIntro
        index="Work"
        title="Shipped products, not a gallery of mockups."
        lede="Live sites for learning, small business, a church, and water quality — plus a robot still on the bench. Buttons open the product, not a raw URL."
      />
      <section aria-labelledby="live-heading" className="flex flex-col gap-6">
        <h2 id="live-heading" className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          Live
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {liveProjects.map((project) => (
            <LiveProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section aria-labelledby="field-heading" className="flex flex-col gap-6">
        <h2 id="field-heading" className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          Field
        </h2>
        <div className="grid gap-5">
          {fieldProjects.map((project) => (
            <FieldProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </PageMain>
  );
}
