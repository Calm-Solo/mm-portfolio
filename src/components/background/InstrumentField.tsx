"use client";

import { useEffect, useRef, useState } from "react";

function padCoord(value: number) {
  return String(Math.max(0, Math.round(value))).padStart(4, "0");
}

export function InstrumentField() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const verticalRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let frame = 0;
    let pending = false;
    let armed = false;
    let x = 0;
    let y = 0;

    const paint = () => {
      pending = false;
      const horizontal = horizontalRef.current;
      const vertical = verticalRef.current;
      const readout = readoutRef.current;
      if (!armed) {
        armed = true;
        if (horizontal) {
          horizontal.style.opacity = "1";
        }
        if (vertical) {
          vertical.style.opacity = "1";
        }
      }
      if (horizontal) {
        horizontal.style.transform = `translate3d(0, ${y}px, 0)`;
      }
      if (vertical) {
        vertical.style.transform = `translate3d(${x}px, 0, 0)`;
      }
      if (readout) {
        readout.textContent = `X ${padCoord(x)}  Y ${padCoord(y)}  TRACK`;
      }
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!pending) {
        pending = true;
        frame = window.requestAnimationFrame(paint);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="instrument-grid absolute inset-0" />
      {!reducedMotion ? (
        <>
          <div
            ref={horizontalRef}
            className="absolute top-0 right-0 left-0 h-px bg-accent/35 opacity-0 will-change-transform"
          />
          <div
            ref={verticalRef}
            className="absolute top-0 bottom-0 left-0 w-px bg-accent/35 opacity-0 will-change-transform"
          />
        </>
      ) : null}
      <div
        ref={readoutRef}
        className="absolute right-4 bottom-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase"
      >
        {reducedMotion ? "X 0000  Y 0000  IDLE" : "X 0000  Y 0000  READY"}
      </div>
    </div>
  );
}
