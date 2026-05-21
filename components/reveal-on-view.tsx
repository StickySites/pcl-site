"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealOnViewProps = {
  children: ReactNode;
  className?: string;
  /**
   * IntersectionObserver rootMargin. Slightly expanding the bottom (e.g. `0px 0px 100px 0px`)
   * triggers the reveal shortly before the block fully enters the viewport.
   */
  rootMargin?: string;
};

/**
 * Fades and translates children in once when they first intersect the viewport.
 * Respects `prefers-reduced-motion: reduce` (CSS keeps content visible; observer is skipped).
 * Uses IntersectionObserver with `takeRecords()` so above-the-fold blocks avoid a hidden first paint.
 */
export function RevealOnView({ children, className, rootMargin = "0px 0px 100px 0px" }: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0 }
    );

    obs.observe(el);
    const records = obs.takeRecords();
    if (records.some((e) => e.isIntersecting)) {
      obs.disconnect();
      // Must run in the same layout phase as takeRecords() so above-the-fold blocks are not painted hidden once.
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional synchronous reveal before paint
      setVisible(true);
    }

    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        "ease-out motion-reduce:transition-none",
        "transition-[opacity,transform] duration-300 motion-reduce:duration-0",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}
