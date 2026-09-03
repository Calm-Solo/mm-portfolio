import type { ReactNode } from "react";

export function PageMain({ children }: { children: ReactNode }) {
  return (
    <main
      id="main"
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-5 py-12 sm:px-8 sm:py-16 lg:gap-20 lg:py-20"
    >
      {children}
    </main>
  );
}

export function PageIntro({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
        {index}
      </p>
      <h1 className="mt-3 text-[2rem] leading-tight font-medium tracking-tight text-balance sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        {lede}
      </p>
    </header>
  );
}
