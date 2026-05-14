import { ChevronDown } from "lucide-react";
import type { ServiceFaqItem } from "@/lib/service-faqs";

type ServiceFaqSectionProps = {
  /** Short line under the heading */
  intro?: string;
  heading?: string;
  items: readonly ServiceFaqItem[];
};

export function ServiceFaqSection({
  heading = "Frequently asked questions",
  intro,
  items
}: ServiceFaqSectionProps) {
  return (
    <section className="border-t border-border bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto w-[min(100%-1.5rem,92vw)] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 id="faq-heading" className="text-3xl font-bold text-black sm:text-4xl">
            {heading}
          </h2>
          {intro ? <p className="mt-3 text-muted-foreground">{intro}</p> : null}
        </div>
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-muted/25">
          {items.map((item) => (
            <details key={item.question} className="group open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-black transition-colors hover:bg-muted/50 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="pr-2">{item.question}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="border-t border-border/60 px-5 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                <p className="pt-3">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
