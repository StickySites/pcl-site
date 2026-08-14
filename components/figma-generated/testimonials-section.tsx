"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { googleRating, testimonials, type Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 8000;

function subscribeToReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type TestimonialsSectionProps = {
  heading?: string;
  className?: string;
  items?: readonly Testimonial[];
  showRating?: boolean;
};

function TestimonialCard({ item }: { item: Testimonial }) {
  const subtitle = [item.role, item.organisation, item.project].filter(Boolean).join(" \u00b7 ");

  return (
    <article className="flex flex-col rounded-lg bg-white p-5 shadow-md sm:p-6">
      {item.source === "google" ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-700">Google review</p>
      ) : null}
      <blockquote>
        <p className="text-sm leading-relaxed text-neutral-800 sm:text-base">&ldquo;{item.quote}&rdquo;</p>
      </blockquote>
      <footer className="mt-3 border-t border-border pt-3 sm:mt-4">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <p className="font-semibold text-black">{item.author}</p>
          {item.date ? (
            <>
              <span className="text-neutral-500" aria-hidden>
                &middot;
              </span>
              <p className="text-xs text-neutral-600">{item.date}</p>
            </>
          ) : null}
        </div>
        {subtitle ? <p className="mt-0.5 text-sm text-neutral-700">{subtitle}</p> : null}
      </footer>
    </article>
  );
}

export function TestimonialsSection({
  heading = "What our clients say",
  className,
  items = testimonials,
  showRating = true
}: TestimonialsSectionProps) {
  const headingId = useId();
  const regionId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  const slideCount = items.length;
  const safeIndex = slideCount > 0 ? activeIndex % slideCount : 0;

  const goTo = useCallback(
    (index: number) => {
      if (slideCount === 0) return;
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount]
  );

  const goPrev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);
  const goNext = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);

  useEffect(() => {
    if (slideCount <= 1 || isPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, slideCount]);

  if (slideCount === 0) return null;

  return (
    <section
      className={cn("py-16 sm:py-24", className)}
      aria-labelledby={headingId}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 id={headingId} className="mb-3 text-3xl font-bold text-black sm:mb-4 sm:text-4xl">
            {heading}
          </h2>

          {showRating ? (
            <div className="mx-auto flex max-w-xl flex-col items-center gap-2 sm:gap-2.5">
              <div className="flex items-center gap-2" aria-label={`${googleRating.rating} out of 5 stars on Google`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-brand text-brand" aria-hidden />
                ))}
                <span className="ml-1 text-lg font-bold text-black">{googleRating.rating.toFixed(1)}</span>
              </div>
              <p className="text-sm font-medium text-neutral-700">
                {googleRating.rating.toFixed(1)} from {googleRating.reviewCount} Google reviews
              </p>
              <p className="max-w-md text-xs leading-relaxed text-neutral-700">
                Plus client testimonials below. Not all reviews appear on Google.
              </p>
              <Link
                href={googleRating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Read on Google
              </Link>
            </div>
          ) : null}
        </div>

        <div
          ref={carouselRef}
          className="relative w-full overflow-x-hidden"
          role="region"
          id={regionId}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goPrev();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              goNext();
            }
          }}
        >
          <div className="w-full overflow-hidden rounded-lg">
            <div
              className="flex w-full items-start transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translate3d(-${safeIndex * 100}%, 0, 0)` }}
              aria-live="polite"
            >
              {items.map((item) => (
                <div key={item.id} className="min-w-0 shrink-0 grow-0 basis-full">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {slideCount > 1 ? (
            <>
              <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5 sm:gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  aria-controls={regionId}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-black shadow-sm transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                </button>

                <div
                  className="flex max-w-[min(100%,12rem)] flex-wrap items-center justify-center gap-1.5 sm:max-w-none sm:flex-nowrap sm:gap-2"
                  role="tablist"
                  aria-label="Testimonial slides"
                >
                  {items.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={index === safeIndex}
                      aria-label={`Go to testimonial ${index + 1} of ${slideCount}`}
                      onClick={() => goTo(index)}
                      className={cn(
                        "h-2 w-2 shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-2.5 sm:w-2.5",
                        index === safeIndex ? "bg-brand" : "bg-border hover:bg-muted-foreground/40"
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  aria-controls={regionId}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-black shadow-sm transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                </button>
              </div>

              <p className="mt-2 text-center text-xs text-neutral-600" aria-hidden>
                {safeIndex + 1} / {slideCount}
              </p>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
