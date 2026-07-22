import Image from "next/image";
import Link from "next/link";
import { Building2, Factory, HardHat, ShieldCheck, Sparkles } from "lucide-react";
import { RevealOnView } from "@/components/reveal-on-view";
import type { CaseStudy, CaseStudyCategory } from "@/lib/case-studies";
import { caseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "asbestos", name: "Asbestos Removal" },
  { id: "demolition", name: "Demolition" },
  { id: "refurbishment", name: "Refurbishments" },
  { id: "enabling", name: "Enabling Works & Structural Alterations" }
] as const;

type CategoryId = (typeof categories)[number]["id"];

const categoryIcons: Record<CaseStudyCategory, typeof Building2> = {
  asbestos: ShieldCheck,
  demolition: Factory,
  refurbishment: Building2,
  enabling: HardHat,
  remediation: Sparkles
};

function isCategoryId(value: string | undefined): value is CategoryId {
  return categories.some((category) => category.id === value);
}

type PageProjectsProps = {
  activeCategory?: string;
};

export function PageProjects({ activeCategory: activeCategoryParam }: PageProjectsProps) {
  const activeCategory: CategoryId = isCategoryId(activeCategoryParam) ? activeCategoryParam : "all";

  const filteredProjects: CaseStudy[] =
    activeCategory === "all"
      ? [...caseStudies]
      : caseStudies.filter((project) => project.category === activeCategory);

  return (
    <>
      <RevealOnView>
        <section className="bg-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Our Projects</h1>
              <p className="text-xl text-gray-300">
                Delivering complex industrial projects across the UK with uncompromising safety standards and technical
                excellence.
              </p>
            </div>
          </div>
        </section>
      </RevealOnView>

      <RevealOnView>
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const href = category.id === "all" ? "/projects" : `/projects?category=${category.id}`;
                  const isActive = activeCategory === category.id;

                  return (
                    <Link
                      key={category.id}
                      href={href}
                      className={`rounded-full px-5 py-2.5 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                        isActive
                          ? "bg-brand text-brand-foreground"
                          : "bg-muted text-black hover:bg-gray-300"
                      }`}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => {
                const Icon = categoryIcons[project.category];
                const brandThumb = project.image.includes("pcl-mark");

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        priority={index < 3}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className={cn(
                          "transition-transform duration-300 group-hover:scale-105",
                          brandThumb ? "object-contain object-center p-8" : "object-cover"
                        )}
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-brand" aria-hidden />
                        <span className="text-sm font-semibold text-brand">{project.categoryLabel}</span>
                      </div>
                      <h2 className="mb-2 text-lg font-bold text-black">{project.title}</h2>
                      <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                        <span>{project.location}</span>
                        <span className="font-medium text-brand">View case study →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filteredProjects.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground">
                <p>No projects found in this category.</p>
              </div>
            ) : null}
          </div>
        </section>
      </RevealOnView>
    </>
  );
}
