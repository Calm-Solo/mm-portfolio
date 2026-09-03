import { techStack } from "@/lib/content";

export function TechStack() {
  return (
    <section aria-labelledby="stack-heading">
      <h2 id="stack-heading" className="mb-6 text-xl font-medium tracking-tight sm:text-2xl">
        Stack I ship with
      </h2>
      <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group) => (
          <li key={group.id} className="bg-panel px-5 py-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
              {group.index}
            </p>
            <h3 className="mt-3 text-sm font-medium tracking-tight">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-col gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[12px] tracking-[0.04em] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
